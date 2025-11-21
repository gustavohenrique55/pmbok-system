import { Decimal } from '@prisma/client/runtime/library';
import { TransactionType, TransactionStatus } from '../enums/index.js';

export interface TransactionProps {
  id: string;
  userId: string;
  accountId: string;
  categoryId: string;
  type: TransactionType;
  amount: Decimal;
  description: string;
  date: Date;
  status: TransactionStatus;
  installmentNumber?: number | null;
  totalInstallments?: number | null;
  parentTransactionId?: string | null;
  isRecurring: boolean;
  recurringId?: string | null;
  creditCardId?: string | null;
  invoiceId?: string | null;
  tags: string[];
  notes?: string | null;
  attachments: string[];
  location?: string | null;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy?: string | null;
  deletedAt?: Date | null;
  deletedBy?: string | null;
}

export class Transaction {
  private props: TransactionProps;

  private constructor(props: TransactionProps) {
    this.props = props;
  }

  static create(props: TransactionProps): Transaction {
    if (props.amount.lessThanOrEqualTo(0)) {
      throw new Error('Transaction amount must be positive');
    }
    return new Transaction(props);
  }

  get id(): string {
    return this.props.id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get accountId(): string {
    return this.props.accountId;
  }

  get categoryId(): string {
    return this.props.categoryId;
  }

  get type(): TransactionType {
    return this.props.type;
  }

  get amount(): Decimal {
    return this.props.amount;
  }

  get description(): string {
    return this.props.description;
  }

  get date(): Date {
    return this.props.date;
  }

  get status(): TransactionStatus {
    return this.props.status;
  }

  get installmentNumber(): number | null | undefined {
    return this.props.installmentNumber;
  }

  get totalInstallments(): number | null | undefined {
    return this.props.totalInstallments;
  }

  get isRecurring(): boolean {
    return this.props.isRecurring;
  }

  get tags(): string[] {
    return this.props.tags;
  }

  get notes(): string | null | undefined {
    return this.props.notes;
  }

  get attachments(): string[] {
    return this.props.attachments;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  get deletedAt(): Date | null | undefined {
    return this.props.deletedAt;
  }

  isDeleted(): boolean {
    return this.props.deletedAt !== null && this.props.deletedAt !== undefined;
  }

  isPending(): boolean {
    return this.props.status === TransactionStatus.PENDING;
  }

  isPaid(): boolean {
    return this.props.status === TransactionStatus.PAID;
  }

  markAsPaid(): void {
    this.props.status = TransactionStatus.PAID;
  }

  markAsCancelled(): void {
    this.props.status = TransactionStatus.CANCELLED;
  }

  softDelete(userId: string): void {
    this.props.deletedAt = new Date();
    this.props.deletedBy = userId;
  }

  toJSON(): TransactionProps {
    return { ...this.props };
  }
}
