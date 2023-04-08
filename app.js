// const requestURL = "https://jsonplaceholder.typicode.com/albums";
// function sendHttpRequest(method,url){
//     return new Promise ((resolve,reject)  =>{
//         const xhr = new XMLHttpRequest();

// xhr.open(method,url);

// xhr.responseType = "json";
// if (xhr.status >= 400) {
//   xhr.onerror = () => {
//     reject(xhr.response);
//   };
// } else {
//   xhr.onload = () => {
//     resolve(xhr.response);
//   };
// }

// xhr.onerror = () => {
//   reject(xhr.response);
// };
// xhr.send(JSON.stringify(body));
//     })
// }
   
// const body = {
//     name:"Lazzat",
//     age:16
// }

// sendHttpRequest('POST',requestURL).then(data => console.log(data)).catch(err => console.log(err))
