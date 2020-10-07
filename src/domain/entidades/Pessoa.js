import { Sequelize } from 'sequelize';
import Entidade from './EntidadeBase';

class Pessoa extends Entidade {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUIDV4,
          primaryKey: true,
        },
        no_pessoa: Sequelize.STRING,
        no_email: Sequelize.STRING,
        endereco: Sequelize.STRING,
        sexo: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Pessoa;
