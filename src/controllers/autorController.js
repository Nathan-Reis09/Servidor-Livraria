import {autor} from "../models/Autor.js";

class autorController {
  static async listarAutor(req,res) {
    try{
      const listarAutor = await autor.find({});
      res.status(200).json(listarAutor);
        

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requição`});
    }   
  }

  static async listarAutorPorId(req,res) {
    try{
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
        

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requição do autor`});
    }   
  }
  static async cadastrarautor (req, res) {
    try{
      const novoautor = await autor.create(req.body);
      res.status(201).json({messagem: "criado com sucesso", autor: 
            novoautor});

    }catch (erro){
      res.status(500).json({messagem: `${erro.message} - falha ao cadastrar autor`});

    }
  }
  static async atualizarautor(req,res) {
    try{
      const id = req.params.id;
      await autor.findByIdAndUpdateById(id);
      res.status(200).json({message: "autor atualizado"});
    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na atualização`});
    }   
  }
  static async deletarautor(req,res) {
    try{
      const id = req.params.id;
      await autor.findByIdAndRemove(id, req.body);
      res.status(200).json({message: "autor deletado"});
    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao deletar`});
    }   
  }
    
}




export default autorController;