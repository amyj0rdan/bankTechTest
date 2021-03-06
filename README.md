# Bank Tech Test

This is a week 10 Makers Academy tech test challenge.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Approach

| Noun | Verb |
| --- | --- |
| Client |  |
| Account | deposit |
| | withdrawal |
| | currentBalance |
| | printStatement |

| Account | |
| --- | --- |
| deposit | takes date and +ve amount |
| withdrawal | takes date and -ve amount |
| getBalance | produces current balance from transactions |
| getTransactions | returns all transactions currently on account |

| Statement(account) | |
| --- | --- |
| print | uses transaction details from account to produce formatted display |
| formatTransaction | takes a transaction as a parameter and formats it whether it is a +ve or -ve transaction |
| getAccountTransactions | returns transactions on the account |

## Getting started

```bash
> git clone https://github.com/amyj0rdan/bankTechTest
> npm install
```

## Running tests

```bash
> npm test
> npm run coverage #run tests with test coverage
```

## Usage
Open 'index.html' in browser
