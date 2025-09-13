const url = "https://jsonplaceholder.typicode.com/comments";

const api = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log("Haciendo respuesta");
    console.log("Completado");
    
    resultado.forEach(comentario => {
        console.log(comentario);
    });
};

api();

// const url = "https://jsonplaceholder.typicode.com/comments";

// const api = () => fetch(url)
//   .then((result) => {
//     return result.json();
//   })
//   .then((result) => {
//     result.forEach(comment => {
//       console.log(comment);
//     });
//   });

