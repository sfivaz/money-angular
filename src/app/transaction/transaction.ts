export class Transaction {
  private _id;
  private _description;
  private _type;
  private _value;
  private _categoryId;
  private _date;
  private _sourceAccountId;
  private _destinationAccountId;

  constructor(id, description, type, value, categoryId, date, sourceAccountId, destinationAccountId) {
    this._id = id;
    this._description = description;
    this._type = type;
    this._value = value;
    this._categoryId = categoryId;
    this._date = date;
    this._sourceAccountId = sourceAccountId;
    this._destinationAccountId = destinationAccountId;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get categoryId() {
    return this._categoryId;
  }

  set categoryId(value) {
    this._categoryId = value;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get sourceAccountId() {
    return this._sourceAccountId;
  }

  set sourceAccountId(value) {
    this._sourceAccountId = value;
  }

  get destinationAccountId() {
    return this._destinationAccountId;
  }

  set destinationAccountId(value) {
    this._destinationAccountId = value;
  }

  toJSON() {
    return {
      id: this.id,
      description: this.description,
      type: this.type,
      value: this.value,
      categoryId: this.categoryId,
      date: this.date,
      sourceAccountId: this.sourceAccountId,
      destinationAccountId: this.destinationAccountId
    };
  }
}
