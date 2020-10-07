import Entidade from './EntidadeBase';

class Animal extends Entidade {
  constructor(
    fk_id_pessoa,
    id_fazenda,
    no_animal,
    no_raca,
    sexo,
    vr_peso,
    dt_nascimento
  ) {
    super();
    this.no_animal = no_animal;
    this.no_raca = no_raca;
    this.id_fazenda = id_fazenda;
    this.fk_id_pessoa = fk_id_pessoa;
    this.sexo = sexo;
    this.vr_peso = vr_peso;
    this.dt_nascimento = dt_nascimento;
  }
}
