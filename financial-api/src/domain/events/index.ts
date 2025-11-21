export interface DomainEvent {
  eventName: string;
  occurredAt: Date;
  payload: Record<string, unknown>;
}

export class TransactionCreated implements DomainEvent {
  eventName = 'transaction.created';
  occurredAt = new Date();

  constructor(
    public payload: {
      transactionId: string;
      userId: string;
      accountId: string;
      categoryId: string;
      amount: number;
      type: string;
    }
  ) {}
}

export class BudgetExceeded implements DomainEvent {
  eventName = 'budget.exceeded';
  occurredAt = new Date();

  constructor(
    public payload: {
      budgetId: string;
      userId: string;
      categoryId: string;
      budgetAmount: number;
      spentAmount: number;
      percentageUsed: number;
    }
  ) {}
}

export class GoalReached implements DomainEvent {
  eventName = 'goal.reached';
  occurredAt = new Date();

  constructor(
    public payload: {
      goalId: string;
      userId: string;
      goalName: string;
      targetAmount: number;
    }
  ) {}
}

export class BillDueReminder implements DomainEvent {
  eventName = 'bill.due.reminder';
  occurredAt = new Date();

  constructor(
    public payload: {
      transactionId: string;
      userId: string;
      description: string;
      amount: number;
      dueDate: Date;
      daysUntilDue: number;
    }
  ) {}
}

export class InvoiceDue implements DomainEvent {
  eventName = 'invoice.due';
  occurredAt = new Date();

  constructor(
    public payload: {
      invoiceId: string;
      userId: string;
      creditCardName: string;
      totalAmount: number;
      dueDate: Date;
    }
  ) {}
}
