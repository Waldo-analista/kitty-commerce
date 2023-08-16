const productListSaludBienestar = () => fetch("http://localhost:3000/saludBienestar").then((response) => response.json());

const  productListCamisetas = () => fetch("http://localhost:3000/camisetas").then((response) => response.json());

const productListDiversos = () => fetch("http://localhost:3000/diversos").then((response) => response.json());


const addProductSaludBienestar = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/SaludBienestar", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()}),
  });
};

const addProductCamisetas = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/camisetas", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()}),
  });
};

const addProductDiversos = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/diversos", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()}),
  });
};



export const productServices = {
  productListSaludBienestar,
  productListCamisetas,
  productListDiversos,
  
  addProductSaludBienestar,
  addProductCamisetas,
  addProductDiversos,
};