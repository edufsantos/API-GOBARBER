import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User'
const models = [ User]

/// esta classe está responsevel por realizar a conexao dos models com o banco de dados
class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);
    //percorrendo cada model
    //model é a representação de cada model e o init é o metodo desse model
    models.map( model=> model.init(this.connection));
  }
}

export default new Database();