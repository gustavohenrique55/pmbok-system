export const BCRYPT_ROUNDS = 12;

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 128;

export const MAX_FAILED_LOGIN_ATTEMPTS = 5;
export const ACCOUNT_LOCK_DURATION_MINUTES = 15;

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const SUPPORTED_CURRENCIES = ['BRL', 'USD', 'EUR', 'GBP'] as const;

export const BUDGET_ALERT_THRESHOLDS = [50, 80, 100] as const;

export const INSTALLMENT_LIMITS = {
  MIN: 2,
  MAX: 48,
} as const;

export const SENSITIVE_FIELDS = [
  'password',
  'refreshToken',
  'cpf',
  'accountNumber',
] as const;

export const AUDIT_ACTIONS = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  PASSWORD_RESET: 'PASSWORD_RESET',
} as const;

export const NOTIFICATION_TYPES = {
  BILL_DUE: 'BILL_DUE',
  BUDGET_ALERT: 'BUDGET_ALERT',
  GOAL_PROGRESS: 'GOAL_PROGRESS',
  GOAL_REACHED: 'GOAL_REACHED',
  INVOICE_DUE: 'INVOICE_DUE',
} as const;
