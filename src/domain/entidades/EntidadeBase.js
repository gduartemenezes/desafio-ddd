export default class Entidade {
  constructor() {
    this.id = '';
  }

  equals(other) {
    if (other instanceof Entidade === false) {
      return false;
    }
    return other.id ? this.referenceEquals(other.id) : this === other;
  }

  referenceEquals(id) {
    if (!this.id) {
      return this.equals(id);
    }

    const reference = typeof id !== 'string' ? id.toString() : id;
    return this.id === reference;
  }

  toString() {
    return this.id;
  }
}
