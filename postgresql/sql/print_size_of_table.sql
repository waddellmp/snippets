SELECT PG_SIZE_PRETTY(
        PG_TOTAL_RELATION_SIZE('rideshare.users')
    );