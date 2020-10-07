import { Sequelize } from 'sequelize/types';
import Entidade from './EntidadeBase';

class Lote extends Entidade {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUIDV4,
          primaryKey: true,
        },
        no_lote: Sequelize.STRING,
        ds_lote: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Lote;
