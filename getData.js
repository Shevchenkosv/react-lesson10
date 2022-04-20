
const mapArr = require("./map");
const axios = require('axios');


const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const userId = response.data.map(user => user.id);
    return mapArr(userId)
}

module.exports = getData;