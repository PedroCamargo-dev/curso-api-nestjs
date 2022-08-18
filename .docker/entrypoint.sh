#!/bin/bash

npm intall
npm run build
npx typeorm migration:run -d dist/database.providers.js
npm run start:dev