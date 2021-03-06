import {Category} from "../category/category";
import {Filterable} from "../core/filterable";

export class Transaction extends Filterable {
  private _id: number;
  private _description: string;
  private _type: string;
  private _value: number;
  private _category: Category;
  private _date: Date;
  private _sourceAccountId: number;
  private _destinationAccountId: number;
  private _isMonthly: boolean;

  constructor(id, description, type, value, category, date, sourceAccountId, destinationAccountId, isMonthly) {
    super();
    this._id = id;
    this._description = description;
    this._type = type;
    this._value = value;
    this._category = category;
    this.isMonthly = isMonthly;
    this.date = date;
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

  get category(): Category {
    return this._category;
  }

  get categoryId(): number {
    if (this._category)
      return this._category.id;
  }

  set category(value: Category) {
    this._category = value;
  }

  set categoryId(value: number) {
    this._category = {name: null, budget: null, id: value};
  }

  get date(): Date {
    return this._date;
  }

  set date(value) {
    let date = new Date();
    if (value)
      date = new Date(value);
    this._date = date;
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

  get isMonthly(): boolean {
    return this._isMonthly;
  }

  set isMonthly(value: boolean) {
    this._isMonthly = !!value;
  }

  toJSON() {
    return {
      id: this.id,
      description: this.description,
      type: this.type,
      value: this.value,
      categoryId: this.categoryId,
      date: this.date,
      isMonthly: this.isMonthly,
      sourceAccountId: this.sourceAccountId,
      destinationAccountId: this.destinationAccountId
    };
  }
}
