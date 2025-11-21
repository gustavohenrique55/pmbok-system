import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env['NODE_ENV'] ?? 'development',
  port: parseInt(process.env['PORT'] ?? '3000', 10),
  apiPrefix: process.env['API_PREFIX'] ?? '/api/v1',

  database: {
    url: process.env['DATABASE_URL'] ?? '',
  },

  redis: {
    host: process.env['REDIS_HOST'] ?? 'localhost',
    port: parseInt(process.env['REDIS_PORT'] ?? '6379', 10),
    password: process.env['REDIS_PASSWORD'] ?? undefined,
  },

  jwt: {
    secret: process.env['JWT_SECRET'] ?? 'default-secret-change-in-production',
    accessExpiration: process.env['JWT_ACCESS_EXPIRATION'] ?? '15m',
    refreshExpiration: process.env['JWT_REFRESH_EXPIRATION'] ?? '7d',
  },

  encryption: {
    key: process.env['ENCRYPTION_KEY'] ?? 'default-32-char-encryption-key!!',
  },

  smtp: {
    host: process.env['SMTP_HOST'] ?? '',
    port: parseInt(process.env['SMTP_PORT'] ?? '587', 10),
    user: process.env['SMTP_USER'] ?? '',
    pass: process.env['SMTP_PASS'] ?? '',
    from: process.env['SMTP_FROM'] ?? 'noreply@financial-api.com',
  },

  rateLimit: {
    windowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] ?? '60000', 10),
    maxRequests: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] ?? '100', 10),
    loginWindowMs: parseInt(process.env['RATE_LIMIT_LOGIN_WINDOW_MS'] ?? '900000', 10),
    loginMax: parseInt(process.env['RATE_LIMIT_LOGIN_MAX'] ?? '5', 10),
  },

  cors: {
    origin: process.env['CORS_ORIGIN'] ?? 'http://localhost:3000',
  },

  logging: {
    level: process.env['LOG_LEVEL'] ?? 'debug',
  },

  sentry: {
    dsn: process.env['SENTRY_DSN'] ?? '',
  },
};
