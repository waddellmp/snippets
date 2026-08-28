import React, { useState, useMemo } from 'react';
import { Box, Text, useInput } from 'ink';
import { HIERARCHY, CHALLENGES } from '../challenges/index.js';

const PAGE_SIZE = 9;

export function CategorySelect({ onSelect, onSelectChallenge }) {
  const [currentDomain, setCurrentDomain] = useState(null); // null (root) | 'ruby' | 'sql' | 'bash'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Compute displayed list based on search or drill-down level
  const displayedItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    // 1. Search Mode
    if (q.length > 0) {
      const results = [];

      // Search subcategories
      HIERARCHY.forEach(domain => {
        if (domain.subcategories) {
          domain.subcategories.forEach(sub => {
            if (sub.label.toLowerCase().includes(q) || sub.id.toLowerCase().includes(q)) {
              results.push({
                type: 'category',
                id: sub.id,
                label: `📂 ${sub.label}`,
                description: `${domain.label} Subcategory`
              });
            }
          });
        }
      });

      // Search individual challenges
      CHALLENGES.forEach(c => {
        const matches =
          c.title.toLowerCase().includes(q) ||
          c.task.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q) ||
          (c.resource && c.resource.toLowerCase().includes(q));

        if (matches) {
          const badge = c.type === 'ruby' ? '💎' : (c.type === 'sql' ? '🐘' : '🐚');
          results.push({
            type: 'challenge',
            challenge: c,
            id: c.id,
            label: `${badge} ${c.title}`,
            description: c.task
          });
        }
      });

      return results;
    }

    // 2. Drill-down Level 2: Inside a specific Domain
    if (currentDomain) {
      const domainObj = HIERARCHY.find(d => d.id === currentDomain);
      if (!domainObj || !domainObj.subcategories) return [];

      return [
        { type: 'back', label: '⬅ Back to Main Menu', id: '__back__' },
        ...domainObj.subcategories.map(sub => ({
          type: 'category',
          id: sub.id,
          label: sub.label,
          description: `Practice ${sub.label}`
        }))
      ];
    }

    // 3. Drill-down Level 1: Root Domains
    return HIERARCHY.map(d => ({
      type: d.isLeaf ? 'category' : 'domain',
      id: d.id,
      label: d.isLeaf ? d.label : `${d.label} (${d.count} challenges) ▶`,
      count: d.count,
      description: d.isLeaf ? 'All challenges' : `Drill down into ${d.label}`
    }));
  }, [currentDomain, searchQuery]);

  // Keep selected index within bounds
  const safeIndex = Math.min(selectedIndex, Math.max(0, displayedItems.length - 1));

  // Compute windowed slice to ensure smooth 60fps scrolling when holding arrow keys
  const totalItems = displayedItems.length;
  let windowStart = 0;
  if (totalItems > PAGE_SIZE) {
    const half = Math.floor(PAGE_SIZE / 2);
    if (safeIndex <= half) {
      windowStart = 0;
    } else if (safeIndex >= totalItems - half) {
      windowStart = totalItems - PAGE_SIZE;
    } else {
      windowStart = safeIndex - half;
    }
  }
  const windowEnd = Math.min(totalItems, windowStart + PAGE_SIZE);
  const visibleItems = displayedItems.slice(windowStart, windowEnd);

  useInput((input, key) => {
    // 1. Navigation Keys (smooth repeat handling & Vim j/k when not typing in search)
    const isVimDown = (key.downArrow || (searchQuery.length === 0 && input === 'j'));
    const isVimUp = (key.upArrow || (searchQuery.length === 0 && input === 'k'));
    const isVimExpand = (key.rightArrow || (searchQuery.length === 0 && input === 'l') || key.return);
    const isVimCollapse = (key.leftArrow || (searchQuery.length === 0 && input === 'h'));

    if (isVimUp) {
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : displayedItems.length - 1));
      return;
    }
    if (isVimDown) {
      setSelectedIndex(prev => (prev < displayedItems.length - 1 ? prev + 1 : 0));
      return;
    }
    if (key.pageUp) {
      setSelectedIndex(prev => Math.max(0, prev - PAGE_SIZE));
      return;
    }
    if (key.pageDown) {
      setSelectedIndex(prev => Math.min(displayedItems.length - 1, prev + PAGE_SIZE));
      return;
    }

    // Top / Bottom jump in menu (g / G)
    if (searchQuery.length === 0 && input === 'g') {
      setSelectedIndex(0);
      return;
    }
    if (searchQuery.length === 0 && input === 'G') {
      setSelectedIndex(displayedItems.length - 1);
      return;
    }

    // 2. Expand / Select
    if (isVimExpand) {
      const selected = displayedItems[safeIndex];
      if (!selected) return;

      if (selected.type === 'back') {
        setCurrentDomain(null);
        setSelectedIndex(0);
      } else if (selected.type === 'domain') {
        setCurrentDomain(selected.id);
        setSelectedIndex(0);
      } else if (selected.type === 'category') {
        onSelect({ value: selected.id, label: selected.label });
      } else if (selected.type === 'challenge') {
        if (onSelectChallenge) {
          onSelectChallenge(selected.challenge);
        } else {
          onSelect({ value: selected.challenge.category || 'all', challengeId: selected.challenge.id });
        }
      }
      return;
    }

    // 3. Collapse / Go Back (Left Arrow / h)
    if (isVimCollapse) {
      if (currentDomain) {
        setCurrentDomain(null);
        setSelectedIndex(0);
        return;
      }
    }

    // 4. Back / Clear Search / Quit
    if (key.escape || (searchQuery.length === 0 && input === 'q')) {
      if (searchQuery.length > 0) {
        setSearchQuery('');
        setSelectedIndex(0);
      } else if (currentDomain) {
        setCurrentDomain(null);
        setSelectedIndex(0);
      }
      return;
    }

    // 5. Backspace
    if (key.backspace || key.delete) {
      if (searchQuery.length > 0) {
        setSearchQuery(prev => prev.slice(0, -1));
        setSelectedIndex(0);
      } else if (currentDomain) {
        setCurrentDomain(null);
        setSelectedIndex(0);
      }
      return;
    }

    // 6. Strict Printable Text Filter
    const isPrintable =
      input &&
      !key.ctrl &&
      !key.meta &&
      !key.upArrow &&
      !key.downArrow &&
      !key.leftArrow &&
      !key.rightArrow &&
      !key.pageUp &&
      !key.pageDown &&
      !key.tab &&
      !key.return &&
      !key.escape &&
      !input.includes('\x1b') &&
      input.charCodeAt(0) >= 32;

    if (isPrintable) {
      setSearchQuery(prev => prev + input);
      setSelectedIndex(0);
    }
  });

  return (
    <Box flexDirection="column" marginY={1}>
      {/* Search Input Box */}
      <Box borderStyle="single" borderColor={searchQuery.length > 0 ? 'greenBright' : 'cyan'} paddingX={1} marginBottom={1}>
        <Text bold color="cyanBright">🔍 Search [/]: </Text>
        <Text color="white">{searchQuery}</Text>
        <Text inverse color="whiteBright"> </Text>
        {searchQuery.length === 0 && (
          <Text color="gray"> (type to search or use [j/k] to navigate)</Text>
        )}
      </Box>

      {/* Menu / Results Box */}
      <Box flexDirection="column" borderStyle="round" borderColor="greenBright" paddingX={1} paddingY={1}>
        <Box justifyContent="space-between" marginBottom={1}>
          <Text bold color="greenBright">
            {searchQuery.length > 0
              ? `🔍 Search Results (${displayedItems.length} found):`
              : currentDomain
              ? `📂 ${HIERARCHY.find(d => d.id === currentDomain)?.label} Subcategories:`
              : '🌟 Select Subject or Practice Domain:'}
          </Text>
          <Text color="gray">
            {totalItems > 0 ? `[${safeIndex + 1}/${totalItems}]` : ''}
          </Text>
        </Box>

        {windowStart > 0 && (
          <Box justifyContent="center" marginY={0}>
            <Text color="gray" dimColor>▲ {windowStart} more above (k to scroll up)...</Text>
          </Box>
        )}

        {displayedItems.length === 0 ? (
          <Box marginY={1}>
            <Text color="yellow">No categories or challenges matching "{searchQuery}".</Text>
          </Box>
        ) : (
          visibleItems.map((item, visibleIdx) => {
            const actualIdx = windowStart + visibleIdx;
            const isSelected = actualIdx === safeIndex;
            return (
              <Box key={actualIdx} flexDirection="column" marginY={0}>
                <Box flexDirection="row">
                  <Text color={isSelected ? 'greenBright' : 'gray'}>
                    {isSelected ? '❯ ' : '  '}
                  </Text>
                  <Text bold={isSelected} color={isSelected ? 'greenBright' : 'white'}>
                    {item.label}
                  </Text>
                </Box>
                {isSelected && item.description && (
                  <Box marginLeft={4} marginBottom={0}>
                    <Text color="gray" dimColor>
                      {item.description}
                    </Text>
                  </Box>
                )}
              </Box>
            );
          })
        )}

        {windowEnd < totalItems && (
          <Box justifyContent="center" marginY={0}>
            <Text color="gray" dimColor>▼ {totalItems - windowEnd} more below (j to scroll down)...</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
