import { Decimal } from '@prisma/client/runtime/library';
import { AccountType } from '../enums/index.js';

export interface AccountProps {
  id: string;
  userId: string;
  name: string;
  type: AccountType;
  bank?: string | null;
  agency?: string | null;
  accountNumber?: string | null;
  initialBalance: Decimal;
  currentBalance: Decimal;
  color?: string | null;
  icon?: string | null;
  currency: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Account {
  private props: AccountProps;

  private constructor(props: AccountProps) {
    this.props = props;
  }

  static create(props: AccountProps): Account {
    return new Account(props);
  }

  get id(): string {
    return this.props.id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get name(): string {
    return this.props.name;
  }

  get type(): AccountType {
    return this.props.type;
  }

  get bank(): string | null | undefined {
    return this.props.bank;
  }

  get agency(): string | null | undefined {
    return this.props.agency;
  }

  get accountNumber(): string | null | undefined {
    return this.props.accountNumber;
  }

  get initialBalance(): Decimal {
    return this.props.initialBalance;
  }

  get currentBalance(): Decimal {
    return this.props.currentBalance;
  }

  get color(): string | null | undefined {
    return this.props.color;
  }

  get icon(): string | null | undefined {
    return this.props.icon;
  }

  get currency(): string {
    return this.props.currency;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  credit(amount: Decimal): void {
    this.props.currentBalance = this.props.currentBalance.add(amount);
  }

  debit(amount: Decimal): void {
    this.props.currentBalance = this.props.currentBalance.sub(amount);
  }

  toJSON(): AccountProps {
    return { ...this.props };
  }
}
