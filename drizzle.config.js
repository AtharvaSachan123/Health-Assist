import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./src/utils/schema.jsx",
  dialect: 'postgresql',
  out:'./drizzle',
  dbCredentials: {
    url: "postgresql://neondb_owner:G3qdJoY4ghZN@ep-patient-meadow-a1l2ax2y.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
    connection:"postgresql://neondb_owner:G3qdJoY4ghZN@ep-patient-meadow-a1l2ax2y.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
  verbose: true,
  strict: true,
})