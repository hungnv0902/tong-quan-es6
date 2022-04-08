const axios = require('axios');
const fetchGithubInfo = async (url) => {
    console.log(`Fetching ${url}`)
    const githubInfo = await axios(url) 
  // API call to get user info from Github.
    return {
      name: githubInfo.data.name,
      bio: githubInfo.data.bio,
      repos: githubInfo.data.public_repos
    }
  }
  
  // Iterates all users and returns their Github info.
  const fetchUserInfo = async (names) => {
    const requests = names.map((name) => {
      const url = `https://api.github.com/users/${name}`
      return fetchGithubInfo(url) 
  // Async function that fetches the user info.
       .then((a) => {
        console.log(a)
        return a // Returns the user info.
        })
        .catch((err) => {
            console.log(err.message)
        })
    })
    console.log(requests, 'requests')
    return Promise.all(requests) 
  //Waiting for all the requests to get resolved.
  }
  
  const arr = ["hungnv0902", "hungnv01", "hungnv02"];
  
  fetchUserInfo(arr);
const getA = async() => {
  return Promise.reject('err');
};

const getB = async(a) => {
  return a*2;
};

const getC = async(b) => {
  return b*2;
};
getA().then(
  a => {
    getB(a).then(
      b => {
        getC(b).then(
          c =>  {var result = a + b + c; console.log(result) },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  },
  err => console.log(err) 
)

var getTotal = async () =>  {
  try {
    console.log('aaaa')
    var a =  await getA();
    var b =  await getB(a);
    var c =  await getC(b);
    return Promise.resolve(a + b + c);
  } catch (e) {
    return Promise.reject(e);
  }
}

getTotal()
.then(data => console.log(data))
.catch(err => console.log(err + ''));
