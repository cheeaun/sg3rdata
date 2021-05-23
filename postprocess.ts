import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts';

const filename = Deno.args[0];
const data = await readJSON(filename);

const newFilename = filename.replace(/\.txt$/, '.json');
await writeJSON(newFilename, JSON.parse(data).SrchResults.slice(1));