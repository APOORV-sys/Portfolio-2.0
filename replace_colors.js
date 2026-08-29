const fs = require('fs');
let css = fs.readFileSync('client/src/index.css', 'utf8');

// root vars
css = css.replace(/--paper: #f2ead9;/g, '--paper: #edf4f8;');
css = css.replace(/--paper-deep: #e7dcc3;/g, '--paper-deep: #dbe8f0;');
css = css.replace(/--paper-pale: #fbf6eb;/g, '--paper-pale: #f6fafe;');
css = css.replace(/--ink: #2c2a25;/g, '--ink: #1b2836;');
css = css.replace(/--ink-soft: #656052;/g, '--ink-soft: #4a6176;');
css = css.replace(/rgba\(44, 42, 37, \.16\)/g, 'rgba(27, 40, 54, .16)');
css = css.replace(/--rust: #a1592e;/g, '--rust: #2b6a9c;');
css = css.replace(/--rust-dark: #7e4222;/g, '--rust-dark: #1b4b72;');
css = css.replace(/--moss: #63734f;/g, '--moss: #5086a1;');
css = css.replace(/--sky: #5c7c96;/g, '--sky: #709fba;');
css = css.replace(/--mustard: #c39948;/g, '--mustard: #4b7891;');
css = css.replace(/rgba\(44, 42, 37, \.28\)/g, 'rgba(27, 40, 54, .28)');

// hardcoded rgba
css = css.replace(/rgba\(44,42,37/g, 'rgba(27,40,54'); // ink
css = css.replace(/rgba\(161,89,46/g, 'rgba(43,106,156'); // rust
css = css.replace(/rgba\(251,246,235/g, 'rgba(246,250,254'); // paper-pale
css = css.replace(/rgba\(242,234,217/g, 'rgba(237,244,248'); // paper
css = css.replace(/rgba\(231,220,195/g, 'rgba(219,232,240'); // paper-deep
css = css.replace(/rgba\(92,124,150/g, 'rgba(112,159,186'); // sky
css = css.replace(/rgba\(99,115,79/g, 'rgba(80,134,161'); // moss
css = css.replace(/rgba\(195,153,72/g, 'rgba(75,120,145'); // mustard
css = css.replace(/rgba\(213,190,139/g, 'rgba(195,214,228'); // a tan color (bulletin board)

// landscape gradients
css = css.replace(/#d5e0db 0%, #e7dfc7 37%/g, '#dbe8f0 0%, #c8dbea 37%'); // landscape-layer
css = css.replace(/#becdd0 0%, #e4d8bb 52%, #8d9b75 100%/g, '#b6d0e2 0%, #9ebbd4 52%, #5086a1 100%'); // lab-art gradient

fs.writeFileSync('client/src/index.css', css);
console.log('Colors replaced!');
