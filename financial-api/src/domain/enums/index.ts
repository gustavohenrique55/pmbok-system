export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  AUDITOR = 'AUDITOR',
}

export enum AccountType {
  CHECKING = 'CHECKING',
  SAVINGS = 'SAVINGS',
  INVESTMENT = 'INVESTMENT',
  WALLET = 'WALLET',
  CREDIT_CARD = 'CREDIT_CARD',
}

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  TRANSFER = 'TRANSFER',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
  OVERDUE = 'OVERDUE',
}

export enum RecurrenceFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export enum Permission {
  // User permissions
  USER_READ = 'USER_READ',
  USER_CREATE = 'USER_CREATE',
  USER_UPDATE = 'USER_UPDATE',
  USER_DELETE = 'USER_DELETE',

  // Account permissions
  ACCOUNT_READ = 'ACCOUNT_READ',
  ACCOUNT_CREATE = 'ACCOUNT_CREATE',
  ACCOUNT_UPDATE = 'ACCOUNT_UPDATE',
  ACCOUNT_DELETE = 'ACCOUNT_DELETE',

  // Transaction permissions
  TRANSACTION_READ = 'TRANSACTION_READ',
  TRANSACTION_CREATE = 'TRANSACTION_CREATE',
  TRANSACTION_UPDATE = 'TRANSACTION_UPDATE',
  TRANSACTION_DELETE = 'TRANSACTION_DELETE',

  // Report permissions
  REPORT_READ = 'REPORT_READ',
  REPORT_EXPORT = 'REPORT_EXPORT',

  // Admin permissions
  ADMIN_ACCESS = 'ADMIN_ACCESS',
  AUDIT_READ = 'AUDIT_READ',
}

export const RolePermissions: Record<Role, Permission[]> = {
  [Role.ADMIN]: Object.values(Permission),
  [Role.USER]: [
    Permission.ACCOUNT_READ,
    Permission.ACCOUNT_CREATE,
    Permission.ACCOUNT_UPDATE,
    Permission.ACCOUNT_DELETE,
    Permission.TRANSACTION_READ,
    Permission.TRANSACTION_CREATE,
    Permission.TRANSACTION_UPDATE,
    Permission.TRANSACTION_DELETE,
    Permission.REPORT_READ,
    Permission.REPORT_EXPORT,
  ],
  [Role.AUDITOR]: [
    Permission.USER_READ,
    Permission.ACCOUNT_READ,
    Permission.TRANSACTION_READ,
    Permission.REPORT_READ,
    Permission.AUDIT_READ,
  ],
};
