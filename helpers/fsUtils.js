const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFileSync(destination, JSON.stringify(content, null, 4)); 
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    const saved = fs.readFileSync(file, 'utf8')

      const parsedData = JSON.parse(saved);
      content.id = parsedData.length ? parsedData[parsedData.length-1].id + 1 : 1;
      parsedData.push(content);
      fs.writeFileSync(file, JSON.stringify(parsedData, null, 4)); 
      return parsedData;
};
const readAndRemove = (id, file) => {
  const saved = fs.readFileSync(file, 'utf8')
  const parsedData = JSON.parse(saved);
  const indexToRemove = parsedData.findIndex( note => note.id == id );
  parsedData.splice(indexToRemove, 1);
  fs.writeFileSync(file, JSON.stringify(parsedData, null, 4)); 
  return parsedData;

}

module.exports = { readFromFile, writeToFile, readAndAppend, readAndRemove };
