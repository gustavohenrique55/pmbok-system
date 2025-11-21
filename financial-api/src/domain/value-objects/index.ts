export { Money } from './Money.js';
export { Email } from './Email.js';
export { CPF } from './CPF.js';

export class DateRange {
  private readonly _startDate: Date;
  private readonly _endDate: Date;

  private constructor(startDate: Date, endDate: Date) {
    this._startDate = startDate;
    this._endDate = endDate;
  }

  static create(startDate: Date, endDate: Date): DateRange {
    if (startDate > endDate) {
      throw new Error('Start date must be before end date');
    }
    return new DateRange(startDate, endDate);
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date {
    return this._endDate;
  }

  contains(date: Date): boolean {
    return date >= this._startDate && date <= this._endDate;
  }

  getDays(): number {
    const diffTime = this._endDate.getTime() - this._startDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

export class Percentage {
  private readonly _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  static create(value: number): Percentage {
    if (value < 0 || value > 100) {
      throw new Error('Percentage must be between 0 and 100');
    }
    return new Percentage(value);
  }

  static fromDecimal(decimal: number): Percentage {
    return Percentage.create(decimal * 100);
  }

  get value(): number {
    return this._value;
  }

  toDecimal(): number {
    return this._value / 100;
  }

  toString(): string {
    return `${this._value.toFixed(2)}%`;
  }
}
