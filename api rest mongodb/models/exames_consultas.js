const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //cod_exameconsulta:{type:Integer},
  nome:{
    type: String,
    required: true,
    maxlength: 80  
  },
  tipo:{
    type: String,
    required: true,
    maxlength: 1
  },
  preco:{
    type: Number,    
  },
  data_cadastro:{
    type: Date,
    default: Date.now
  }, 
  data_atualizacao:{
    type: Date,
    default: Date.now
  },
}, 
  //timestamps fornece a data de cadastro e atualização
  {
    timestamps: true
  }
);

module.exports = mongoose.model('exames_consultas', UserSchema);
