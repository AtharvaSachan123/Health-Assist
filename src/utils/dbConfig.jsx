import {neon} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(
    "postgresql://neondb_owner:G3qdJoY4ghZN@ep-patient-meadow-a1l2ax2y.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
);

export const db= drizzle(sql,{schema});