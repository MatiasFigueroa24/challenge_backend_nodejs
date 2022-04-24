import { Low, JSONFile } from "lowdb";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let db;

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createConnection() {
  // Use JSON file for storage
  const file = join(__dirname, "../db.json");
  const adapter = new JSONFile(file);
  db = new Low(adapter);

  // Read data from JSON file, this will set db.data content
  await db.read();

  db.data ||= { game: {}, cells:[] };
  // Write db.data content to db.json
  await db.write();

}

const getConnection = () => db;

export { createConnection,getConnection}