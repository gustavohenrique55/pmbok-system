import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';

import { config } from './config/index.js';
import { connectDatabase, disconnectDatabase } from './infrastructure/database/prisma/client.js';
import { logger } from './shared/utils/logger.js';
import routes from './presentation/http/routes/index.js';
import { errorHandler, notFoundHandler, generalLimiter } from './presentation/http/middlewares/index.js';
import { swaggerSpec } from './presentation/swagger/config.js';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: config.cors.origin,
  credentials: true,
}));

// General middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use(generalLimiter);

// Trust proxy for rate limiting behind reverse proxy
app.set('trust proxy', 1);

// API Documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use(config.apiPrefix, routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Graceful shutdown
const gracefulShutdown = async (): Promise<void> => {
  logger.info('Received shutdown signal, closing connections...');
  await disconnectDatabase();
  process.exit(0);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start server
const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();
    logger.info('Database connected successfully');

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
      logger.info(`API available at http://localhost:${config.port}${config.apiPrefix}`);
      logger.info(`Documentation available at http://localhost:${config.port}/docs`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
