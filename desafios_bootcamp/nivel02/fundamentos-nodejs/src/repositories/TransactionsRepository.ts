import Transaction from '../models/Transaction';

interface CreateTransationDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const allIncome = this.transactions.reduce((totalIn, transaction) => {
      if (transaction.type === 'income') {
        return totalIn + transaction.value;
      }
      return totalIn;
    }, 0);

    const allOutcome = this.transactions.reduce((totalOut, transaction) => {
      if (transaction.type === 'outcome') {
        return totalOut + transaction.value;
      }
      return totalOut;
    }, 0);

    const balance = {
      income: allIncome,
      outcome: allOutcome,
      total: allIncome - allOutcome,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransationDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
