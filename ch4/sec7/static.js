// node static.js

'use strict'
console.log('// A static method')
class BankAccount {
  constructor() { this.balance = 0 }
  deposit(amount) { this.balance += amount }  
  withdraw(amount) { this.balance -= amount }
  static percentOf(amount, rate) { return amount * rate / 100 }
  
  addInterest(rate) {
    this.balance += BankAccount.percentOf(this.balance, rate)
  }
}
const harrysAccount = new BankAccount()
harrysAccount.deposit(1000)
harrysAccount.addInterest(10)
console.log('harrysAccount:', harrysAccount) // BankAccount { balance: 1100 }
console.log('// Static methods are constructor properties')
console.log('BankAccount.percentOf:', BankAccount.percentOf) // [Function: percentOf]
console.log('// Static fields (Stage 3)')
{
  class BankAccount {
    static OVERDRAFT_FEE = 30
    constructor() { this.balance = 0 }
    deposit(amount) { this.balance += amount }    
    withdraw(amount) {
      if (this.balance < amount) {
        this.balance -= BankAccount.OVERDRAFT_FEE
      }
      this.balance -= amount
    }
  }
  const harrysAccount = new BankAccount()
  harrysAccount.deposit(1000)
  harrysAccount.withdraw(1200)
  console.log('harrysAccount:', harrysAccount) // BankAccount { balance: -230 }
}
console.log('// Static getters and setters')
{
  class BankAccount {
    static #OVERDRAFT_FEE = 30
    constructor() { this.balance = 0 }
    deposit(amount) { this.balance += amount }
    withdraw(amount) {
      if (this.balance < amount) {
        this.balance -= BankAccount.OVERDRAFT_FEE
      }
      this.balance -= amount
    }
    static get OVERDRAFT_FEE() {
      return this.#OVERDRAFT_FEE // In a static method, this is the constructor function
    }
    static set OVERDRAFT_FEE(newValue) {
      if (newValue > this.#OVERDRAFT_FEE) {
        this.#OVERDRAFT_FEE = newValue
      }
    }
  }
  
  const harrysAccount = new BankAccount()
  BankAccount.OVERDRAFT_FEE = 20 // Has no effect
  harrysAccount.deposit(1000)
  harrysAccount.withdraw(1200)
  console.log('harrysAccount:', harrysAccount) // BankAccount { balance: -230 }
}
