export class Transaction {
  private _id: number;
  private _description: string;
  private _type: string;
  private _value: number;
  private _categoryId: number;
  private _date: Date;
  private _sourceAccountId: number;
  private _destinationAccountId: number;

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

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get sourceAccountId(): number {
    return this._sourceAccountId;
  }

  set sourceAccountId(value: number) {
    this._sourceAccountId = value;
  }

  get destinationAccountId(): number {
    return this._destinationAccountId;
  }

  set destinationAccountId(value: number) {
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
