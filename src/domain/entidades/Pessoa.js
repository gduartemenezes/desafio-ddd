import Entidade from './EntidadeBase';

class Pessoa extends Entidade {
  constructor(no_pessoa, no_email, endereco, sexo, ic_ativo) {
    super();
    this.no_pessoa = no_pessoa;
    this.no_email = no_email;
    this.endereco = endereco;
    this.sexo = sexo;
    this.ic_ativo = ic_ativo;
  }
}

export default new Pessoa();
