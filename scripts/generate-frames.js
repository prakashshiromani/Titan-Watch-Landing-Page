const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'frames');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

for (let i = 1; i <= 120; i++) {
  const num = i.toString().padStart(4, '0');
  const svg = `<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="#050505"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="SF Pro Display, Inter, sans-serif" font-size="120" font-weight="bold" fill="#C8A96A">
    TITAN CERAMIC FUSION
  </text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="200" font-weight="bold" fill="#FFFFFF" opacity="0.3">
    FRAME ${num}
  </text>
  <circle cx="960" cy="540" r="${300 + (i * 2)}" fill="none" stroke="#0A3D62" stroke-width="4" opacity="${0.1 + (i / 120) * 0.9}"/>
</svg>`;
  fs.writeFileSync(path.join(dir, `frame_${num}.svg`), svg);
}

console.log('Frames generated in public/frames/');
