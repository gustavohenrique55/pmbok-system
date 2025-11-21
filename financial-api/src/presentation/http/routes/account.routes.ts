import { Router } from 'express';
import { AccountController } from '../controllers/AccountController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();
const accountController = new AccountController();

router.use(authenticate);

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create a new account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', accountController.create);

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: List all accounts
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 */
router.get('/', accountController.list);

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Get account by ID
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id', accountController.getById);

/**
 * @swagger
 * /accounts/{id}:
 *   put:
 *     summary: Update account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id', accountController.update);

/**
 * @swagger
 * /accounts/{id}:
 *   delete:
 *     summary: Delete account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', accountController.delete);

/**
 * @swagger
 * /accounts/{id}/balance:
 *   get:
 *     summary: Get account balance
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id/balance', accountController.getBalance);

export default router;
