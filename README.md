# fontfeatures

Command line utility for detecting a font file’s available [OpenType features](https://www.microsoft.com/typography/otspec/featurelist.htm).

Uses [Fontkit](https://github.com/devongovett/fontkit/) to read font files and spit out basic information. For example, “Does this font support small caps?”

## Install

```bash
npm install -g fontfeatures
```

## Usage

```bash
fontfeatures ApexSerif-Book.woff
```

## Sample Output

```
Postscript Name:  ApexSerif-Book
Full Name:  ApexSerif-Book
Family Name:  Apex Serif Book
Subfamily Name:  Regular
Copyright:  Copyright (c) Thirstype, Inc., 2003. All rights reserved.
Version:  Version 5.000;PS 001.001;hotconv 1.0.38

Number of Glyphs: 634
Character Range (Unicode): 32–65535

OpenType Features: c2sc, case, dnom, frac, liga, lnum, numr, onum, pnum, smcp, tnum, zero, cpsp, kern

✅  Yes, this font supports small caps.
```

## Supported Files

- TrueType (.ttf)
- OpenType (.otf)
- WOFF
- WOFF2
- TrueType Collection (.ttc)
- Datafork TrueType (.dfont)
