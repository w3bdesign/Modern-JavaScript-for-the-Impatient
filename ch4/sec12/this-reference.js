// node this-reference.js

'use strict'
console.log('// Old-style class')
function Employee(name, salary) {
  this.name = name
  this.salary = salary
}
Employee.prototype.raiseSalary = function(percent) {
  this.salary *= 1 + percent / 100
}
console.log('// this is undefined when calling constructor without new')
try {
  let empl = Employee('Harry Smith', 90000) // Forgot new
} catch (exception) {
  console.log('Error:', exception.message) // Cannot set property 'name' of undefined
}
console.log('// Number can be called with or without new')
const price = Number('19.95')
  // Parses the string and returns a primitive number, not an object
const aZeroUnlikeAnyOther = new Number(0)
  // Constructs a new object
console.log('price:', price) // 19.95
console.log('aZeroUnlikeAnyOther:', aZeroUnlikeAnyOther) // [Number: 0]
console.log('0 === aZeroUnlikeAnyOther:', 0 === aZeroUnlikeAnyOther) // false
class BankAccount {
  constructor() { this.balance = 0 }  
  deposit(amount) { this.balance += amount }  
  withdraw(amount) { this.balance -= amount }
}
const harrysAccount = new BankAccount()
console.log('// this is undefined when calling method without an object')
const doTwice = (what, arg) => { what(arg); what(arg) }

try {
  doTwice(BankAccount.prototype.deposit, 500) // Error
} catch (exception) {
  console.log('Error:', exception.message) // Cannot read property 'balance' of undefined
}
console.log('// Remedy: An arrow expression that does what you want')
doTwice(amount => harrysAccount.deposit(amount), 500)
console.log('harrysAccount:', harrysAccount) // BankAccount { balance: 1000 }
console.log('// this is not defined in a nested function with the "function" syntax')
{
  class BankAccount {
    constructor() { this.balance = 0 }  
    deposit(amount) { this.balance += amount }  
    withdraw(amount) { this.balance -= amount }
    spreadTheWealth(accounts) {
      accounts.forEach(function(account) {
        account.deposit(this.balance / accounts.length)
          // Error—this is undefined inside the nested function
      })
      this.balance = 0
    }
  }
  const petersAccount = new BankAccount()
  petersAccount.deposit(1000)
  const paulsAccount = new BankAccount()
  const marysAccount = new BankAccount()
  try {
    petersAccount.spreadTheWealth([paulsAccount, marysAccount])
  } catch (exception) {
    console.log('Error:', exception.message) // Cannot read property 'balance' of undefined
  }
  console.log('petersAccount:', petersAccount) // BankAccount { balance: 1000 }
  console.log('paulsAccount:', paulsAccount) // BankAccount { balance: 0 }
  console.log('marysAccount:', marysAccount) // BankAccount { balance: 0 }
}
console.log('// Remedy: Arrow function')
{
  class BankAccount {
  constructor() { this.balance = 0 }  
  deposit(amount) { this.balance += amount }  
  withdraw(amount) { this.balance -= amount }
    spreadTheWealth(accounts) {
      accounts.forEach(account => {
        account.deposit(this.balance / accounts.length) 
          // this correctly bound
      })
      this.balance = 0
    }
  }
  const petersAccount = new BankAccount()
  petersAccount.deposit(1000)
  const paulsAccount = new BankAccount()
  const marysAccount = new BankAccount()
  petersAccount.spreadTheWealth([paulsAccount, marysAccount])
  console.log('petersAccount:', petersAccount) // BankAccount { balance: 0 }
  console.log('paulsAccount:', paulsAccount) // BankAccount { balance: 500 }
  console.log('marysAccount:', marysAccount) // BankAccount { balance: 500 }
}
console.log('// Old-style workaround')
{
  class BankAccount {
    constructor() { this.balance = 0 }  
    deposit(amount) { this.balance += amount }  
    withdraw(amount) { this.balance -= amount }
    spreadTheWealth(accounts) {
       const that = this
       accounts.forEach(function(account) {
         account.deposit(that.balance / accounts.length)
      })
      this.balance = 0
    }
  }
  const petersAccount = new BankAccount()
  petersAccount.deposit(1000)
  const paulsAccount = new BankAccount()
  const marysAccount = new BankAccount()
  petersAccount.spreadTheWealth([paulsAccount, marysAccount])
  console.log('petersAccount:', petersAccount) // BankAccount { balance: 0 }
  console.log('paulsAccount:', paulsAccount) // BankAccount { balance: 500 }
  console.log('marysAccount:', marysAccount) // BankAccount { balance: 500 }
}
console.log('// Obscure example with arrays, with no dot operator in sight')
{
  class BankAccount {
    constructor() {
      this.balance = 0
      this.observers = []
    }
    addObserver(f) {
      this.observers.push(f)
    }
    notifyObservers() {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i]()
      } 
    }
    deposit(amount) {
      this.balance += amount
      this.notifyObservers()
    }
    withdraw(amount) {
      this.balance -= amount
      this.notifyObservers()
    }
  }
  
  const acct = new BankAccount()

  class UserInterface {
    log(message) {
    console.log({message})  
    }
    start() {
      acct.addObserver(function() { this.log('More money!') })
      acct.deposit(1000)
    }
  }
  const ui = new UserInterface()
  try {
    ui.start()
  } catch (exception) {
    console.log('Error:', exception.message) // this.log is not a function
  }
}
console.log('// Remedy: Arrow function')
{
    class BankAccount {
    constructor() {
      this.balance = 0
      this.observers = []
    }
    addObserver(f) {
      this.observers.push(f)
    }
    notifyObservers() {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i]()
      } 
    }
    deposit(amount) {
      this.balance += amount
      this.notifyObservers()
    }
    withdraw(amount) {
      this.balance -= amount
      this.notifyObservers()
    }
  }
  const acct = new BankAccount()
  class UserInterface {
    log(message) {
      console.log({message})  
    }
    start() {
      acct.addObserver(() => { this.log('More money!') })
      acct.deposit(1000)
    }
  }
  const ui = new UserInterface()
  ui.start()
}
