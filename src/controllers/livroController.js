import { autor } from "../models/Autor.js";
import livro from "../models/livros.js";

class LivroController {
  static async listarLivros(req,res) {
    try{
      const listarLivros = await livro.find({});
      res.status(200).json(listarLivros);
        

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requição`});
    }   
  }

  static async listarLivrosPorId(req,res) {
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
        

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requição do livro`});
    }   
  }

  static async cadastrarLivro (req, res) {
    const novoLivro = req.body;
    try{
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro, autor: {...autorEncontrado.
        _doc}};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({messagem: "criado com sucesso", livro: 
            novoLivro});

    }catch (erro){
      res.status(500).json({messagem: `${erro.message} - falha ao cadastrar livro`});

    }
  }
  static async atualizarLivro(req,res) {
    try{
      const id = req.params.id;
      await livro.findByIdAndUpdateById(id);
      res.status(200).json({message: "livro atualizado"});
    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na atualização`});
    }   
  }
  static async deletarLivro(req,res) {
    try{
      const id = req.params.id;
      await livro.findByIdAndRemove(id, req.body);
      res.status(200).json({message: "livro deletado"});
    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao deletar`});
    }   
  }

  static async listarLivrosPorEditora (req, res){
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({editora: editora});
      res.status(200).json(livrosPorEditora);

    }catch(erro){
      res.status(500).json({message: `${message.erro} - falha na busca`});

    }
  }
    
}




export default LivroController;