const axios = require('axios');
const { getInfo, helloWorld }  = require("./info.module");

console.log("Getting cat fact...");
axios.get('https://catfact.ninja/fact').then(result => {
    // console.log(result, 'result')
    console.log(result.data.fact);
    console.log('Done!');
})
.catch(err => {
    console.log(err, err)
})

const getUserData = async () => {
    const userData = await axios.get('https://randomuser.me/api');
    console.log(userData.data.results, 'userData.data.results')
    userData.data.results.forEach(item => {
        console.log(item.name);
    });
}
getUserData();
getInfo();
helloWorld();
