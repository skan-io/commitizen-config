import {main} from './write';
import {join} from 'path';
import {writeFileSync} from 'fs';


jest.mock('path', ()=> ({
  join: jest.fn(()=> 'test-path')
}));

jest.mock('fs', ()=> ({
  writeFileSync: jest.fn((path, json)=> `${path}-${json}`)
}));

const path = process.cwd();


describe('Writing .remarkrc file', ()=> {
  it('writes the file to the path', ()=> {
    const releaseConfig = {
      branch: 'master',
      dryRun: false,
      debug: true,
      pkgRoot: 'build/pkg'
    };
    const JSON_SPACING = 4;

    main(process);

    expect(join).toHaveBeenCalledWith(path, '../../..', '.releaserc');
    expect(writeFileSync).toHaveBeenCalledWith(
      'test-path',
      JSON.stringify(releaseConfig, null, JSON_SPACING)
    );
  });
});
