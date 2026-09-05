/**
 * Provides typed, build-time data-access helpers for publisher records.
 *
 * The database is injected so callers can use either the shared application
 * client or an in-memory database in tests.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Retrieves all publishers in alphabetical order by name.
 *
 * @param db - The Drizzle database client used to query publishers.
 * @returns A promise resolving to the ordered publisher records.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
