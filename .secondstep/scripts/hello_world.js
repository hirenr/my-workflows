// import axios from 'axios'

// let inputStr = '';
// let input = {};
// process.stdin.setEncoding('utf8');

// process.stdin.on('data', chunk => {
//   inputStr += chunk;
// });

// process.stdin.on('end', () => {
//   try {
//     input = JSON.parse(inputStr);
//   } catch (error) {
//     input = {};
//   } finally {
//     main();
//   }
// });


// async function main() {
//   const response = await axios(input.url);
//   console.log(JSON.stringify(response.data))
// }

import axios from 'axios';

// Reading Input from STDIN
const input = await new Promise((resolve) => {
  let data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => data += chunk);
  process.stdin.on('end', () => {
    try {
      resolve(JSON.parse(data));
    } catch (error) {
      resolve({})
    }
  });
});
const responseStdin = await axios(input.url);

// Reading from argv
const [_, __, url] = process.argv;
const responseArgv = await axios(url);

// Reading from env
const envUrl = process.env.url;
const responseEnv = await axios(envUrl);

console.log(JSON.stringify({responseStdin: responseStdin.data, responseArgv: responseArgv.data, responseEnv: responseEnv.data }))
