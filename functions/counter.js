const fs = require('fs');
const path = require('path');

const counterFilePath = path.join(__dirname, 'counter.txt');

exports.handler = async function(event, context) {
  try {
    // Check if the file exists
    if (!fs.existsSync(counterFilePath)) {
      fs.writeFileSync(counterFilePath, '0');
    }

    // Read the current count from the file
    let count = parseInt(fs.readFileSync(counterFilePath, 'utf-8'));

    // Increment the count
    count++;

    // Write the new count back to the file
    fs.writeFileSync(counterFilePath, count.toString());

    // Return the count as JSON
    return {
      statusCode: 200,
      body: JSON.stringify({ count }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unable to update visit count' }),
    };
  }
};
