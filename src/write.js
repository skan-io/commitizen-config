#!/usr/bin/env node

import fs from 'fs';
import {join} from 'path';


const JSON_SPACING = 4;


export const main = (process)=> {
  const releaseConfig = {
    branch: 'master',
    dryRun: false,
    debug: true,
    pkgRoot: 'build/pkg'
  };

  fs.writeFileSync(
    join(process.cwd(), '../../..', '.releaserc'),
    JSON.stringify(releaseConfig, null, JSON_SPACING)
  );
};


/* istanbul ignore if */
if (require.main === module) {
  main(process);
}
