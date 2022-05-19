'use strict';

const repository = require ('../repositories/customer-repository');


exports.post = async(req, res, next) => { 
    try{
      const data = await repository.create(req.body)
      res.status(201).send({
          message:'Cliente cadastrado com sucesso!'
      });
  } catch (e) { 
      res.status(500).send({
          message: 'Falha ao processar sua requisição'  + e
      });
  }
  };