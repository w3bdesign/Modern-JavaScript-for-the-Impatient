// node hardobjects.js

'use strict'
console.log('// Step 1: Factory function returns object with methods')
{
  const createAccount = () => {
    // ...
    return {
      deposit: amount => { /* ... */ },
      withdraw: amount => { /* ... */ },
      getBalance: () => 0
    }
  }

  const harrysAccount = createAccount()
  const sallysAccount = createAccount()
  sallysAccount.deposit(500)
}
console.log('// Step 2: Local variables hold the instance state')
{
  const createAccount = () => {
    let balance = 0
    return {
      // ...
    }
  }
}
console.log('// Step 3: Methods access local variables')
{
  const createAccount = () => {
    let balance = 0
    return {
      deposit: amount => {
        balance += amount
      },
      withdraw: amount => {
        if (balance >= amount) 
          balance -= amount
      },
      getBalance: () => balance
    }
  }
}
console.log('// Step 5: Initialization parameters in the factory function')
{
  const createAccount = (initialBalance) => {
    let balance = initialBalance + 10 // Bonus for opening the account
    return {
      // ...
    }
  }
}
// Ok to capture parameter variables
{
  const createAccount = (balance) => {
    balance += 10 // Bonus for opening the account
    return {
      deposit: amount => {
        balance += amount
      },
      // ...
    }
  }
}
console.log('// Step 6: Freeze the returned object')
{
  const createAccount = (balance) => {
    return Object.freeze({
      deposit: amount => {
        balance += amount
      },
      withdraw: amount => {
        balance += amount
      },
      getBalance: () => balance  
    })
  }

  const harrysAccount = createAccount(500)
  const sallysAccount = createAccount(1000)
  sallysAccount.deposit(500)
  harrysAccount.withdraw(100)
  let harrysBalance = harrysAccount.getBalance()
  let sallysBalance = sallysAccount.getBalance()
  console.log('harrysBalance:', harrysBalance) // 600
  console.log('sallysBalance:', sallysBalance) // 1500
}
