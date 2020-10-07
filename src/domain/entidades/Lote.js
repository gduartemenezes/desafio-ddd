import Entidade from './EntidadeBase';

class Lote extends Entidade {
  constructor(no_lote, ds_lote) {
    super();
    this.no_lote = no_lote;
    this.ds_lote = ds_lote;
  }
}

export default new Lote();
