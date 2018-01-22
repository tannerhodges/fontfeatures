const fontkit = require('fontkit');
const blobToBuffer = require('blob-to-buffer');

const result = document.getElementById('result');

function loadBlob(blob) {
  return new Promise((resolve, reject) => {
    blobToBuffer(blob, (err, buffer) => {
      if (err) {
        reject(err);
      }
      resolve(buffer);
    });
  });
}

function readFont(buffer) {
  let font = fontkit.create(buffer);

  result.innerHTML = `
    <h2>Result</h2>

    <h3>Basic Info</h3>
    <dl>
      <dt>Postscript Name:</dt><dd>${font.postscriptName}</dd>
      <dt>Full Name:</dt><dd>${font.fullName}</dd>
      <dt>Family Name:</dt><dd>${font.familyName}</dd>
      <dt>Subfamily Name:</dt><dd>${font.subfamilyName}</dd>
      <dt>Copyright:</dt><dd>${font.copyright}</dd>
      <dt>Version:</dt><dd>${font.version}</dd>
    </dl>

    <h3>Character Set</h3>
    <dl>
      <dt>Number of Glyphs:</dt><dd>${font.numGlyphs}</dd>
      <dt>Character Range (Unicode):</dt><dd>${font.characterSet[0] + '–' + font.characterSet[font.characterSet.length - 1]}</dd>
    </dl>

    <h3>OpenType Features</h3>
    <ul>
      ${font.availableFeatures.map(feature => '<li>' + feature + '</li>').join('\n')}
    </ul>

    <h3>Small Caps</h3>
    <p>
      ${(font.availableFeatures.indexOf('smcp') > -1) ?
        '✅  Yes, this font supports small caps.' :
        '❌  No, this font does not support small caps.'
      }
    </p>
  `;
}

function onChange(e) {
  let file = e.target.files && e.target.files[0];
  if (file) {
    loadBlob(file).then(readFont);
  }
}

// const font = fontkit.openSync('./ApexSerif-Book.woff');
fetch('./ApexSerif-Book.woff').then(res => res.blob()).then(loadBlob, console.error);

let input = document.querySelector('input[type="file"]');
input.addEventListener('change', onChange);
