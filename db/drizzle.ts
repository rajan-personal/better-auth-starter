import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePostgres } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: ".env" }); // or .env.local

// Determine if we're using a local database or serverless
const databaseUrl = process.env.DATABASE_URL!;
const isLocalDatabase = databaseUrl.includes('localhost') || databaseUrl.includes('127.0.0.1') || databaseUrl.includes('host.docker.internal');

// Create the database connection conditionally
export const db = isLocalDatabase 
  ? drizzlePostgres(postgres(databaseUrl))
  : drizzle(databaseUrl);
