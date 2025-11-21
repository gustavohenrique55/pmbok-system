export { User, UserProps } from './User.js';
export { Account, AccountProps } from './Account.js';
export { Transaction, TransactionProps } from './Transaction.js';

import { TransactionType } from '../enums/index.js';

export interface CategoryProps {
  id: string;
  userId: string;
  name: string;
  type: TransactionType;
  color?: string | null;
  icon?: string | null;
  parentId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Category {
  private props: CategoryProps;

  private constructor(props: CategoryProps) {
    this.props = props;
  }

  static create(props: CategoryProps): Category {
    return new Category(props);
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

  get type(): TransactionType {
    return this.props.type;
  }

  get color(): string | null | undefined {
    return this.props.color;
  }

  get icon(): string | null | undefined {
    return this.props.icon;
  }

  get parentId(): string | null | undefined {
    return this.props.parentId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  toJSON(): CategoryProps {
    return { ...this.props };
  }
}

import { Decimal } from '@prisma/client/runtime/library';

export interface BudgetProps {
  id: string;
  userId: string;
  categoryId: string;
  name: string;
  amount: Decimal;
  spent: Decimal;
  month: number;
  year: number;
  alertAt50: boolean;
  alertAt80: boolean;
  alertAt100: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Budget {
  private props: BudgetProps;

  private constructor(props: BudgetProps) {
    this.props = props;
  }

  static create(props: BudgetProps): Budget {
    return new Budget(props);
  }

  get id(): string {
    return this.props.id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get categoryId(): string {
    return this.props.categoryId;
  }

  get name(): string {
    return this.props.name;
  }

  get amount(): Decimal {
    return this.props.amount;
  }

  get spent(): Decimal {
    return this.props.spent;
  }

  get month(): number {
    return this.props.month;
  }

  get year(): number {
    return this.props.year;
  }

  get percentageUsed(): number {
    if (this.props.amount.isZero()) return 0;
    return this.props.spent.div(this.props.amount).mul(100).toNumber();
  }

  get remaining(): Decimal {
    return this.props.amount.sub(this.props.spent);
  }

  isExceeded(): boolean {
    return this.props.spent.greaterThan(this.props.amount);
  }

  addSpent(amount: Decimal): void {
    this.props.spent = this.props.spent.add(amount);
  }

  toJSON(): BudgetProps {
    return { ...this.props };
  }
}

export interface GoalProps {
  id: string;
  userId: string;
  name: string;
  description?: string | null;
  targetAmount: Decimal;
  currentAmount: Decimal;
  deadline?: Date | null;
  isCompleted: boolean;
  completedAt?: Date | null;
  color?: string | null;
  icon?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Goal {
  private props: GoalProps;

  private constructor(props: GoalProps) {
    this.props = props;
  }

  static create(props: GoalProps): Goal {
    return new Goal(props);
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

  get description(): string | null | undefined {
    return this.props.description;
  }

  get targetAmount(): Decimal {
    return this.props.targetAmount;
  }

  get currentAmount(): Decimal {
    return this.props.currentAmount;
  }

  get deadline(): Date | null | undefined {
    return this.props.deadline;
  }

  get isCompleted(): boolean {
    return this.props.isCompleted;
  }

  get progress(): number {
    if (this.props.targetAmount.isZero()) return 0;
    return this.props.currentAmount.div(this.props.targetAmount).mul(100).toNumber();
  }

  addContribution(amount: Decimal): void {
    this.props.currentAmount = this.props.currentAmount.add(amount);
    if (this.props.currentAmount.greaterThanOrEqualTo(this.props.targetAmount)) {
      this.props.isCompleted = true;
      this.props.completedAt = new Date();
    }
  }

  toJSON(): GoalProps {
    return { ...this.props };
  }
}

export interface CreditCardProps {
  id: string;
  userId: string;
  name: string;
  last4Digits: string;
  limit: Decimal;
  closingDay: number;
  dueDay: number;
  color?: string | null;
  icon?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CreditCard {
  private props: CreditCardProps;

  private constructor(props: CreditCardProps) {
    this.props = props;
  }

  static create(props: CreditCardProps): CreditCard {
    if (props.closingDay < 1 || props.closingDay > 31) {
      throw new Error('Invalid closing day');
    }
    if (props.dueDay < 1 || props.dueDay > 31) {
      throw new Error('Invalid due day');
    }
    return new CreditCard(props);
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

  get last4Digits(): string {
    return this.props.last4Digits;
  }

  get limit(): Decimal {
    return this.props.limit;
  }

  get closingDay(): number {
    return this.props.closingDay;
  }

  get dueDay(): number {
    return this.props.dueDay;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  toJSON(): CreditCardProps {
    return { ...this.props };
  }
}
