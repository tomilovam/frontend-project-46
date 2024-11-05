#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

const gendiff = () => {
    program
    .name('gendiff')
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format', 'stylish')
    .option('-h, --help','output usage information')
    .action((filepath1, filepath2, options) => {
      if (options.help) {
        program.outputHelp();
        return;
      }
      if (filepath1 || filepath2) {
        console.error('error: missing required argument `filepath1` or `filepath2`');
        program.outputHelp();
        return;
      }
      console.log(genDiff(filepath1, filepath2, options.format));
    })
    .parse(process.argv);
  
};

gendiff();