const fs = require('fs');

const readData = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) reject(error);
            resolve(data);
        })
    }
    );
}
const writeData = (data) => {
    return new Promise((resolve, reject) =>
    fs.writeFile('C:/new.txt', data + 'callback 1', (error) => {
        if (error) reject(error);
        resolve(data);
    })
);
}
    
const addToLog = (data) => {
    return new Promise((resolve, reject) =>
    fs.writeFile('log.txt', data + 'callback 2', (error) => {
        if (error) reject(error);
        resolve(data);
    })
);
}

const notifyOnSuccess = () => console.log('Última instrução');
const notifyOnError = (error) => console.log(`Erro -> ${error}`);

readData('.gitignore')
    .then(writeData)
    .then(addToLog)
    .then(notifyOnSuccess)
    .catch(notifyOnError);