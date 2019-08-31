export abstract class Filterable {

  protected _filteredBy: string[];

  protected constructor() {
    this._filteredBy = [];
  }

  get filteredBy() {
    return this._filteredBy;
  }

  set filteredBy(value) {
    this._filteredBy = value;
  }

  addFilter(filter) {
    if (!this._filteredBy.includes(filter))
      this._filteredBy.push(filter);
  }

  removeFilter(filter) {
    if (this._filteredBy.includes(filter)) {
      const index = this._filteredBy.indexOf(filter);
      this._filteredBy.splice(index, 1);
    }
  }
}
