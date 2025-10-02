//Question 3: Create log files
const fs = require('fs');
const path = require('path');

const logDirect = path.join(__dirname, 'Logs');
if (!fs.existsSync(logDirect)) {
    fs.mkdirSync(logDirect);
    console.log('Logs directory created.');
}

process.chdir(logDirect);

for (let i = 0; i < 10; i++) {
    const filename = `log${i}.txt`;
    fs.writeFileSync(filename, `This is log file #${i}`);
    console.log(`Created file: ${filename}`);
}
