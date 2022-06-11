const user = {
  name: 'Caio',
  transactions: [],
  balance: 0
};

function createTransaction({ type, value }) {
  const transaction = {
    type,
    value
  }

  user.transactions.push(transaction);

  if (type === 'credit') {
    user.balance += value;
  } else {
    user.balance -= value;
  }

};

function getHigherTransactionByType(type) {
  let higherTransaction;
  let biggerValue = 0;

  for (let transaction of user.transactions) {
    if (transaction.type === type && transaction.value > biggerValue) {
        biggerValue = transaction.value;
        higherTransaction = transaction;
    }
  }

  return higherTransaction;
}

function getAverageTransactionValue() {
  let sum = 0;

  for (let transaction of user.transactions) {
    sum += transaction.value;
  }

  const media = sum / user.transactions.length;

  return media.toFixed(2);
}

function getTransactionsCount() {
  let debit = 0;
  let credit = 0;

  for (transaction of user.transactions) {
    if (transaction.type === 'credit') {
      credit++
    } else {
      debit++
    }
  }

  return { debit, credit };
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

const biggerValueDebit = getHigherTransactionByType('debit');
const biggerValueCredit = getHigherTransactionByType('credit');
const averageTransactions = getAverageTransactionValue();
const countTransactions = getTransactionsCount(); 

console.log(user);
console.log(biggerValueDebit);
console.log(biggerValueCredit);
console.log(user.balance);
console.log(averageTransactions);
console.log(countTransactions);