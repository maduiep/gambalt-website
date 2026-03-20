const fs = require('fs');
let h = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');
h = h.replace(', paddingLeft: 48', '');
fs.writeFileSync('src/pages/HomePage.jsx', h);

let p = fs.readFileSync('src/components/PageHero.jsx', 'utf8');
p = p.replace(' style={{ paddingLeft: "80px" }}', '');
fs.writeFileSync('src/components/PageHero.jsx', p);
