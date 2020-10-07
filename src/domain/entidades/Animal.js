import { Sequelize } from 'sequelize';
import Entidade from './EntidadeBase';

class Animal extends Entidade {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUIDV4,
          primaryKey: true,
        },
        fk_id_pessoa: Sequelize.UUIDV4,
        id_fazenda: Sequelize.UUIDV4,
        no_animal: Sequelize.STRING,
        no_raca: Sequelize.STRING,
        sexo: Sequelize.CHAR,
        vr_peso: Sequelize.DOUBLE,
        dt_nascimento: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Animal;
