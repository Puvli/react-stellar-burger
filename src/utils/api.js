const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

export function Api() {
  const getIngredients = () => {
    return fetch(`${config.baseUrl}/ingredients`, {
      headers: config.headers,
      method: "GET",
    }).then((res) => checkResponse(res));
  };

  return {getIngredients};
}


// const baseUrl = 'https://norma.nomoreparties.space/api';
// const headers = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

// const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject({
//     status: res.status,
//     statusText: res.statusText,
//   });
// };

// const request = (path, options) => {
//   const url = baseUrl + path;
//   // принимает два аргумента: урл и объект опций, как и `fetch`
//   return fetch(url, options).then(checkResponse)
// }

// export const Api = () => {
//   const getIngredients = () => {
//     return request('/ingredients', {
//       headers,
//       method: 'GET',
//     })
//   };

//   return {
//     getIngredients,
//   };
// };