import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';
require('dotenv').config({ path: './.env' });

export const config: Config = {
  namespace: 'project-one',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    dotenvPlugin({ cwd: './' })
  ]
};
