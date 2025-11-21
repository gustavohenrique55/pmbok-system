import { Decimal } from '@prisma/client/runtime/library';

export class Money {
  private readonly _amount: Decimal;
  private readonly _currency: string;

  private constructor(amount: Decimal, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  static create(amount: number | string | Decimal, currency: string = 'BRL'): Money {
    const decimalAmount = amount instanceof Decimal ? amount : new Decimal(amount);

    if (decimalAmount.isNaN()) {
      throw new Error('Invalid money amount');
    }

    return new Money(decimalAmount, currency.toUpperCase());
  }

  get amount(): Decimal {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  add(other: Money): Money {
    this.ensureSameCurrency(other);
    return new Money(this._amount.add(other._amount), this._currency);
  }

  subtract(other: Money): Money {
    this.ensureSameCurrency(other);
    return new Money(this._amount.sub(other._amount), this._currency);
  }

  multiply(factor: number): Money {
    return new Money(this._amount.mul(factor), this._currency);
  }

  isPositive(): boolean {
    return this._amount.greaterThan(0);
  }

  isNegative(): boolean {
    return this._amount.lessThan(0);
  }

  isZero(): boolean {
    return this._amount.equals(0);
  }

  equals(other: Money): boolean {
    return this._amount.equals(other._amount) && this._currency === other._currency;
  }

  toNumber(): number {
    return this._amount.toNumber();
  }

  toString(): string {
    return `${this._currency} ${this._amount.toFixed(2)}`;
  }

  private ensureSameCurrency(other: Money): void {
    if (this._currency !== other._currency) {
      throw new Error(`Currency mismatch: ${this._currency} vs ${other._currency}`);
    }
  }
}
