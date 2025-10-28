const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const target = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const mapboxkey = process.env['MAPBOX_KEY'];


if( !mapboxkey){
    throw new Error('MAPBOX_KEY is not set')
}

const envFileContent = `
export const environments = {
    mapboxkey: "${mapboxkey}"
}`;


mkdirSync('./src/environments', { recursive: true });
writeFileSync(target, envFileContent);
writeFileSync(targetPathDev, envFileContent);


