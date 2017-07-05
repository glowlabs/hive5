var request = require('request');

function sendData(deviceID, jsonData) {
  //console.log("send data", jsonData)

  var jsonTest = checkJson(jsonData);
  //console.log(jsonTest)
  if (jsonTest == false) {
    throw Error("Data is not valid JSON. Please correct and try again.")
  }


  for (var attributename in jsonData) {
    //  console.log(attributename + ": " + jsonData[attributename]);

    var objType = typeof(jsonData[attributename]);
    //console.log(objType)
    if (objType == "object") {
      //console.log('fail')
      throw Error('Hive5 does not accept nested JSON. Send only simple value pairs. Ex: "{temperature: 85, humitidy: 43}"')
      return (null, 'Hive5 does not accept nested JSON. Send only simple value pairs. Ex: "{temperature: 85, humitidy: 43}"');
    } else {
      //console.log('pass')
    }
  }

  request({
    url: "https://hive5.io/api/push",
    method: "POST",
    json: true,
    headers: {
      "deviceid": deviceID,
    },
    body: jsonData
  }, function(error, response, body) {
    console.log(body);
    if (error) {
      throw error;
    }
    return body;
    console.log(error)
  });
}

function checkJson(jsonData) {
  try {
    var str = JSON.stringify(jsonData)
    JSON.parse(str);
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
}

module.exports.sendData = sendData;
