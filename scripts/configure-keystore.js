const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'android', 'app', 'build.gradle');

if (!fs.existsSync(targetFile)) {
  console.error('Target build.gradle not found at:', targetFile);
  process.exit(1);
}

let content = fs.readFileSync(targetFile, 'utf8');

const signingBlock = `
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
`;

if (!content.includes('signingConfigs')) {
  content = content.replace(/android\s*\{/, 'android {' + signingBlock);
}

if (!content.includes('signingConfig signingConfigs.debug')) {
  content = content.replace(/buildTypes\s*\{/, 'buildTypes {\n        debug {\n            signingConfig signingConfigs.debug\n        }');
}

fs.writeFileSync(targetFile, content);
console.log('Fixed keystore successfully configured in build.gradle');
