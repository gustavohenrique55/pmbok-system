import swaggerJsdoc from 'swagger-jsdoc';
import { config } from '../../config/index.js';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Financial API',
      version: '1.0.0',
      description: 'Enterprise Financial Management API with Clean Architecture and DDD',
      contact: {
        name: 'API Support',
        email: 'support@financial-api.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}${config.apiPrefix}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/presentation/http/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
