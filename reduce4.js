fetch('http://www.json-generator.com/api/json/get/cfZjWUxaTC?indent=2')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const total = myJson.reduce((acc, item, index) => {
      acc[item.gender].push(item);
      return acc;
    }, {male: [], female: []});
    console.log(total);
  });
