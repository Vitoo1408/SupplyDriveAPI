import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    

console.log('DATABASE_URL:', process.env.DATABASE_URL);
  console.error('DATABASE_URL environment variable is not defined');
  process.exit(1);
}

const sql = postgres(connectionString);

sql`SELECT 1`  // Test query to check the connection
  .then(() => {
    console.log('Connected to Supabase PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
  });

export default sql;
