//Question 3: Remove log files
const fs = require('fs');
const path = require('path');

const logDirect = path.join(__dirname, 'Logs');

if (fs.existsSync(logDirect)) {
    const files = fs.readdirSync(logDirect);

    files.forEach(file => {
        const filePath = path.join(logDirect, file);
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logDirect);
    console.log('Logs directory removed.');
} 

