Hive5 node.js module
=========

Easily send data to your Hive5.io account

## Installation

  `npm install hive5`

## Usage

```
var hive5 = require('hive5');

//create a valid JSON object. Note: only use simple value pairs such as {temperature: 85, humidity: 59}. Nesting/multiple values per item is not allowed.
var jsonData = {
  temperature: 75,
  humidity: 55,
}

var deviceID = "59430720516641f797840791"; //Your deviceID from hive5.io

//Basic call to send your data
hive5.sendData(deviceID, jsonData)

//Call with results
hive5.sendData(deviceID, jsonData, function(results) {
  console.log('Hive5 Results:', results);
});
```

## More information

https://hive5.io
