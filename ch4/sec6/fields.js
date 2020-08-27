// node fields.js

'use strict'
console.log('// Fields implicitly defined by usage')
{
  class BankAccount {
    constructor() { this.balance = 0 }
    deposit(amount) { this.balance += amount }
    withdraw(amount) { this.balance -= amount }
  }
  
  const harrysAccount = new BankAccount()
  harrysAccount.deposit(1000)
  console.log('harrysAccount:', harrysAccount) // BankAccount { balance: 1000 }
}
console.log('// Explicit fields (Stage 3)')
{
  class BankAccount {
    balance = 0
    deposit(amount) { this.balance += amount }
    withdraw(amount) { this.balance -= amount }
  }
  
  const harrysAccount = new BankAccount()
  harrysAccount.deposit(1000)
  console.log('harrysAccount:', harrysAccount) // BankAccount { balance: 1000 }
}
console.log('// Private fields (Stage 3)')
{
  class BankAccount {
    #balance = 0
    deposit(amount) { this.#balance += amount }
    withdraw(amount) { this.#balance -= amount }
    get balance() { return this.#balance }
  }
  
  const harrysAccount = new BankAccount()
  harrysAccount.deposit(1000)
  console.log('harrysAccount.balance:', harrysAccount.balance) // 1000
}
