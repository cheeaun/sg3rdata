import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts';

const filename = Deno.args[0];
const data = await readJSON(filename);

const jsonFilename = filename.replace(/\.txt$/, '.json');
const jsonData = JSON.parse(data).SrchResults.slice(1);

const geojsonFilename = filename.replace(/\.txt$/, '.geojson');
const geoJSONData = {
  type: 'FeatureCollection',
  features: jsonData.map((d: any) => ({
    type: 'Feature',
    properties: d,
    geometry: {
      type: 'Point',
      coordinates: d.LatLng.split(',').reverse(),
    },
  })),
};

await writeJSON(jsonFilename, jsonData);
await writeJSON(geojsonFilename, geoJSONData);