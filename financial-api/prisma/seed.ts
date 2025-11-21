import { PrismaClient, Decimal } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('🌱 Starting seed...');

  // Clean existing data
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.transfer.deleteMany();
  await prisma.creditCardInvoice.deleteMany();
  await prisma.creditCard.deleteMany();
  await prisma.budget.deleteMany();
  await prisma.goal.deleteMany();
  await prisma.recurringTransaction.deleteMany();
  await prisma.category.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const adminPassword = await bcrypt.hash('Admin123!', 12);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: adminPassword,
      name: 'Administrator',
      role: 'ADMIN',
      isActive: true,
    },
  });
  console.log('✅ Admin user created');

  // Create regular user
  const userPassword = await bcrypt.hash('User123!', 12);
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: userPassword,
      name: 'Regular User',
      role: 'USER',
      isActive: true,
      cpf: '12345678901',
      phone: '11999999999',
    },
  });
  console.log('✅ Regular user created');

  // Create accounts
  const checkingAccount = await prisma.account.create({
    data: {
      userId: user.id,
      name: 'Conta Corrente',
      type: 'CHECKING',
      bank: 'Banco do Brasil',
      agency: '1234',
      accountNumber: '12345-6',
      initialBalance: new Decimal(5000),
      currentBalance: new Decimal(5000),
      color: '#1E40AF',
      currency: 'BRL',
    },
  });

  const savingsAccount = await prisma.account.create({
    data: {
      userId: user.id,
      name: 'Poupança',
      type: 'SAVINGS',
      bank: 'Nubank',
      initialBalance: new Decimal(10000),
      currentBalance: new Decimal(10000),
      color: '#7C3AED',
      currency: 'BRL',
    },
  });

  const walletAccount = await prisma.account.create({
    data: {
      userId: user.id,
      name: 'Carteira',
      type: 'WALLET',
      initialBalance: new Decimal(500),
      currentBalance: new Decimal(500),
      color: '#059669',
      currency: 'BRL',
    },
  });
  console.log('✅ Accounts created');

  // Create income categories
  const incomeCategories = [
    { name: 'Salário', color: '#10B981', icon: 'briefcase' },
    { name: 'Freelance', color: '#3B82F6', icon: 'laptop' },
    { name: 'Investimentos', color: '#8B5CF6', icon: 'trending-up' },
    { name: 'Vendas', color: '#F59E0B', icon: 'shopping-bag' },
    { name: 'Outros', color: '#6B7280', icon: 'plus-circle' },
  ];

  const createdIncomeCategories = [];
  for (const cat of incomeCategories) {
    const category = await prisma.category.create({
      data: {
        userId: user.id,
        name: cat.name,
        type: 'INCOME',
        color: cat.color,
        icon: cat.icon,
      },
    });
    createdIncomeCategories.push(category);
  }
  console.log('✅ Income categories created');

  // Create expense categories with hierarchy
  const expenseParents = [
    { name: 'Moradia', color: '#EF4444', icon: 'home' },
    { name: 'Alimentação', color: '#F97316', icon: 'utensils' },
    { name: 'Transporte', color: '#84CC16', icon: 'car' },
    { name: 'Saúde', color: '#06B6D4', icon: 'heart' },
    { name: 'Lazer', color: '#EC4899', icon: 'smile' },
  ];

  const createdExpenseCategories = [];
  for (const parent of expenseParents) {
    const parentCat = await prisma.category.create({
      data: {
        userId: user.id,
        name: parent.name,
        type: 'EXPENSE',
        color: parent.color,
        icon: parent.icon,
      },
    });
    createdExpenseCategories.push(parentCat);

    // Add subcategories
    if (parent.name === 'Moradia') {
      await prisma.category.createMany({
        data: [
          { userId: user.id, name: 'Aluguel', type: 'EXPENSE', parentId: parentCat.id },
          { userId: user.id, name: 'Condomínio', type: 'EXPENSE', parentId: parentCat.id },
          { userId: user.id, name: 'Energia', type: 'EXPENSE', parentId: parentCat.id },
        ],
      });
    } else if (parent.name === 'Alimentação') {
      await prisma.category.createMany({
        data: [
          { userId: user.id, name: 'Supermercado', type: 'EXPENSE', parentId: parentCat.id },
          { userId: user.id, name: 'Restaurantes', type: 'EXPENSE', parentId: parentCat.id },
          { userId: user.id, name: 'Delivery', type: 'EXPENSE', parentId: parentCat.id },
        ],
      });
    }
  }
  console.log('✅ Expense categories created');

  // Create transactions for the last month
  const now = new Date();
  const transactions = [];

  // Income transactions
  for (let i = 0; i < 10; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));

    transactions.push({
      userId: user.id,
      accountId: checkingAccount.id,
      categoryId: createdIncomeCategories[Math.floor(Math.random() * createdIncomeCategories.length)]!.id,
      type: 'INCOME' as const,
      amount: new Decimal(Math.floor(Math.random() * 5000) + 500),
      description: `Receita ${i + 1}`,
      date,
      status: 'PAID' as const,
      createdBy: user.id,
      tags: [],
      attachments: [],
    });
  }

  // Expense transactions
  for (let i = 0; i < 40; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));

    transactions.push({
      userId: user.id,
      accountId: i % 3 === 0 ? walletAccount.id : checkingAccount.id,
      categoryId: createdExpenseCategories[Math.floor(Math.random() * createdExpenseCategories.length)]!.id,
      type: 'EXPENSE' as const,
      amount: new Decimal(Math.floor(Math.random() * 500) + 10),
      description: `Despesa ${i + 1}`,
      date,
      status: i % 5 === 0 ? 'PENDING' as const : 'PAID' as const,
      createdBy: user.id,
      tags: [],
      attachments: [],
    });
  }

  await prisma.transaction.createMany({ data: transactions });
  console.log('✅ Transactions created');

  // Create credit cards
  const creditCard1 = await prisma.creditCard.create({
    data: {
      userId: user.id,
      name: 'Nubank',
      last4Digits: '1234',
      limit: new Decimal(5000),
      closingDay: 10,
      dueDay: 17,
      color: '#7C3AED',
    },
  });

  const creditCard2 = await prisma.creditCard.create({
    data: {
      userId: user.id,
      name: 'Inter',
      last4Digits: '5678',
      limit: new Decimal(3000),
      closingDay: 5,
      dueDay: 12,
      color: '#F97316',
    },
  });
  console.log('✅ Credit cards created');

  // Create budgets for current month
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  await prisma.budget.createMany({
    data: [
      {
        userId: user.id,
        categoryId: createdExpenseCategories[0]!.id, // Moradia
        name: 'Orçamento Moradia',
        amount: new Decimal(2000),
        spent: new Decimal(1500),
        month: currentMonth,
        year: currentYear,
      },
      {
        userId: user.id,
        categoryId: createdExpenseCategories[1]!.id, // Alimentação
        name: 'Orçamento Alimentação',
        amount: new Decimal(1000),
        spent: new Decimal(800),
        month: currentMonth,
        year: currentYear,
      },
      {
        userId: user.id,
        categoryId: createdExpenseCategories[2]!.id, // Transporte
        name: 'Orçamento Transporte',
        amount: new Decimal(500),
        spent: new Decimal(350),
        month: currentMonth,
        year: currentYear,
      },
    ],
  });
  console.log('✅ Budgets created');

  // Create goals
  await prisma.goal.createMany({
    data: [
      {
        userId: user.id,
        name: 'Reserva de Emergência',
        description: '6 meses de despesas',
        targetAmount: new Decimal(30000),
        currentAmount: new Decimal(10000),
        deadline: new Date(currentYear + 1, 11, 31),
        color: '#10B981',
        icon: 'shield',
      },
      {
        userId: user.id,
        name: 'Viagem',
        description: 'Viagem de férias',
        targetAmount: new Decimal(5000),
        currentAmount: new Decimal(2000),
        deadline: new Date(currentYear, 11, 15),
        color: '#3B82F6',
        icon: 'plane',
      },
    ],
  });
  console.log('✅ Goals created');

  // Create recurring transactions
  await prisma.recurringTransaction.createMany({
    data: [
      {
        userId: user.id,
        accountId: checkingAccount.id,
        categoryId: createdIncomeCategories[0]!.id, // Salário
        type: 'INCOME',
        amount: new Decimal(8000),
        description: 'Salário Mensal',
        frequency: 'MONTHLY',
        startDate: new Date(currentYear, 0, 5),
        dayOfMonth: 5,
      },
      {
        userId: user.id,
        accountId: checkingAccount.id,
        categoryId: createdExpenseCategories[0]!.id, // Moradia
        type: 'EXPENSE',
        amount: new Decimal(1500),
        description: 'Aluguel',
        frequency: 'MONTHLY',
        startDate: new Date(currentYear, 0, 10),
        dayOfMonth: 10,
      },
      {
        userId: user.id,
        accountId: checkingAccount.id,
        categoryId: createdExpenseCategories[0]!.id, // Moradia
        type: 'EXPENSE',
        amount: new Decimal(150),
        description: 'Internet',
        frequency: 'MONTHLY',
        startDate: new Date(currentYear, 0, 15),
        dayOfMonth: 15,
      },
    ],
  });
  console.log('✅ Recurring transactions created');

  console.log('🎉 Seed completed successfully!');
  console.log('\n📧 Test accounts:');
  console.log('   Admin: admin@example.com / Admin123!');
  console.log('   User:  user@example.com / User123!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
