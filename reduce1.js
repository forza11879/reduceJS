fetch('http://www.json-generator.com/api/json/get/cfZjWUxaTC?indent=2')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
let total = myJson.reduce((acc, item)=> {
    return acc += item.age
}, 0)
console.log(total);
  });
