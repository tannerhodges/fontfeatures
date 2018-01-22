#! /usr/bin/env node

// Check for updates
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({ pkg }).notify();

// Read font features
const path = process.argv[2];

if (!path) {
  throw 'Whoops! We need a font to check: `fontfeatures [PATH_TO_FONT]`';
}

const fontkit = require('fontkit');
const font = fontkit.openSync(path);

console.log('');

// Basic Info
console.log('Postscript Name: ', font.postscriptName);
console.log('Full Name: ', font.fullName);
console.log('Family Name: ', font.familyName);
console.log('Subfamily Name: ', font.subfamilyName);
console.log('Copyright: ', font.copyright);
console.log('Version: ', font.version);
console.log('');

// Character Set
console.log('Number of Glyphs: ' + font.numGlyphs);
console.log('Character Range (Unicode): ' + font.characterSet[0] + '–' + font.characterSet[font.characterSet.length - 1]);
console.log('');

// OpenType Features
console.log('OpenType Features: ' + font.availableFeatures.join(', '));
console.log('');

// Small Caps
let hasSmallCaps = font.availableFeatures.indexOf('smcp') > -1;
console.log(hasSmallCaps ? '✅  Yes, this font supports small caps.' : '❌  No, this font does not support small caps.');
console.log('');
