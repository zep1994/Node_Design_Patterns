var Person = require('./Person')

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build()
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build()
var phil = new PersonBuilder('Phil').makeEmployee().build()

// Shoppers
var charles = new PersonBuilder('Charles')
                    .withMoney(500)
                    .withList(['Jeans', 'Sunglasses'])
                    .build()
var tabbitha = new Person('Tabbitha')
                    .withMoney(500)
                    .build()