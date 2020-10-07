class RepositorioBase {
  constructor({ Model }) {
    this.collection = Model;
  }

  async conte() {
    return await this.collection.findAll();
  }

  async filtre(query = {}, { multiplos = true, count } = {}) {
    let resultados = multiplos
      ? await this.collection.find(query)
      : await this.collection.findOne(query);

    if (count) {
      resultados = await this.collection.findAllAndCount(query);
      return resultados;
    }
    return resultados;
  }

  async crie(body) {
    const novo = await this.collection.create(body);
    return novo;
  }

  async atualize(document = {}, body) {
    const documento = await this.collection.find(document.id);
    const docAtualizado = await documento.update(body);

    return docAtualizado;
  }

  async remova(document = {}) {
    const documento = this.collection.find(document.id);
    return documento.remove();
  }

  async reload(document, { select, populate } = {}) {
    if (!select && !populate && document instanceof this.collection) {
      return document;
    }
    return typeof document.id !== undefined
      ? this.collection.findById(document.id, { select, populate })
      : this.collection.find(document, { select, populate });
  }
}

export default new RepositorioBase();
