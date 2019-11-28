var scout_prototype = require('./scout_prototype')

var tom = new scout_prototype.clone()
tom.name = 'Tom'
tom.addItemToList('slingshot')

var eve = new Shopper('Eve Porcello');
eve.name = 'Eve'
eve.addItemToList('bike')

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
