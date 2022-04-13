const axios = require("axios");


getInfo = () => {
  const getInfoPromise = new Promise((resolve, reject) => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=c5c6fe7")
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
  getInfoPromise.then(res => console.log(res, 'res'));
  getInfoPromise.catch(err => console.log(err, 'log err'));

}

helloWorld = () => {
  const testPromise = new Promise((resolve, reject) => {
    const a = 1 + 1
    reject(a);
  })
  testPromise.catch(err => console.log(err))
}

module.exports = { helloWorld, getInfo }
