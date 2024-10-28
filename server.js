
import "dotenv/config";
import app from "./src/app.js";
const PORT = 3000;

const rotas = {
  "/": "Curso de API express",
  "/livros": "entrei na rota livros",
  "": "entrei na rota autores"
};
console.log(rotas);

app.listen(PORT, () => {
  console.log("servidor escutando!");
});


