# Financial API - Enterprise Financial Management

A production-ready Financial Management API built with Clean Architecture and Domain-Driven Design (DDD) principles.

## Features

- Complete authentication system (JWT with refresh tokens)
- Multi-account management
- Transaction tracking with categories
- Budget management with alerts
- Financial goals
- Credit card management
- Reports and dashboards
- Role-based access control (RBAC)
- Full audit logging

## Tech Stack

- **Runtime**: Node.js 20 LTS
- **Language**: TypeScript 5+ (strict mode)
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Cache**: Redis
- **Validation**: Zod
- **Testing**: Vitest + Supertest
- **Documentation**: Swagger/OpenAPI

## Architecture

This project follows Clean Architecture with 4 layers:

```
src/
├── domain/          # Entities, Value Objects, Repository Interfaces
├── application/     # Use Cases, DTOs, Application Services
├── infrastructure/  # Database, Cache, External Services
└── presentation/    # Controllers, Routes, Middlewares
```

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 15+
- Redis 7+
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start database services:
   ```bash
   docker-compose up -d postgres redis
   ```

5. Run migrations:
   ```bash
   npm run prisma:migrate
   ```

6. Seed the database:
   ```bash
   npm run prisma:seed
   ```

7. Start development server:
   ```bash
   npm run dev
   ```

### Test Accounts

After seeding:
- **Admin**: admin@example.com / Admin123!
- **User**: user@example.com / User123!

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/refresh` - Refresh tokens
- `POST /api/v1/auth/logout` - Logout
- `GET /api/v1/auth/me` - Get current user

### Accounts
- `POST /api/v1/accounts` - Create account
- `GET /api/v1/accounts` - List accounts
- `GET /api/v1/accounts/:id` - Get account
- `PUT /api/v1/accounts/:id` - Update account
- `DELETE /api/v1/accounts/:id` - Delete account
- `GET /api/v1/accounts/:id/balance` - Get balance

### Categories
- `POST /api/v1/categories` - Create category
- `GET /api/v1/categories` - List categories
- `GET /api/v1/categories/tree` - Get category tree

### Transactions
- `POST /api/v1/transactions` - Create transaction
- `GET /api/v1/transactions` - List transactions
- `POST /api/v1/transactions/transfer` - Create transfer

### Budgets
- `POST /api/v1/budgets` - Create budget
- `GET /api/v1/budgets/current` - Get current month budgets

### Goals
- `POST /api/v1/goals` - Create goal
- `POST /api/v1/goals/:id/contributions` - Add contribution

### Dashboard
- `GET /api/v1/dashboard` - Get dashboard data
- `GET /api/v1/dashboard/summary` - Get summary

### Reports
- `GET /api/v1/reports/cash-flow` - Cash flow report
- `POST /api/v1/reports/export/pdf` - Export to PDF

## Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run test             # Run tests
npm run test:coverage    # Run tests with coverage
npm run lint             # Lint code
npm run format           # Format code
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run migrations
npm run prisma:seed      # Seed database
npm run prisma:studio    # Open Prisma Studio
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NODE_ENV | Environment | development |
| PORT | Server port | 3000 |
| DATABASE_URL | PostgreSQL connection | - |
| REDIS_HOST | Redis host | localhost |
| REDIS_PORT | Redis port | 6379 |
| JWT_SECRET | JWT signing secret | - |
| JWT_ACCESS_EXPIRATION | Access token expiration | 15m |
| JWT_REFRESH_EXPIRATION | Refresh token expiration | 7d |

## Security Features

- JWT authentication with token rotation
- Password hashing (bcrypt, 12 rounds)
- Rate limiting (general + login specific)
- CORS configuration
- Helmet.js security headers
- Input validation (Zod)
- RBAC authorization
- Audit logging
- AES-256 encryption for sensitive data

## Documentation

API documentation is available at `/docs` when the server is running.

## Docker

```bash
# Start all services
docker-compose up -d

# Build and start
docker-compose up --build
```

## Testing

```bash
# Run all tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test -- --watch
```

## License

MIT
