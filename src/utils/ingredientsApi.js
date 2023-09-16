const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({
      status: res.status,
      statusText: res.statusText,
    });
  };
  
  export const useIngredientsAPI = () => {
    const getIngredients = () => {
      return fetch(baseUrl, {
        headers,
        method: 'GET',
      })
        .then(checkResponse)
    };
  
    return {
      getIngredients,
    };
  };