// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    }, 
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    }, 
    {
        name: "latte",
        price: 5,
        seasonal: false,
    }, 
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,   
        seasonal: true,
    }
]

const printName = (item) => {
    return item.name;
  };
  //console.table(coffeeMenu.map(printName));

  const underFive = (item) => {
    return item.price <= 5;
}
//const itemsUnderFive = coffeeMenu.filter(underFive);
//console.table(itemsUnderFive);

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);

//console.table(evenPricedDrinks);

const findPriceArray = (item) => {
    return item.price;
}
const priceArray = coffeeMenu.map(findPriceArray);
//console.log(priceArray);
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
//console.table(totalPrice)

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);

//console.table(seasonalDrinks);

const seasonalDrinksWithImportedBeans = [];

for (const drink of coffeeMenu) {
  if (drink.seasonal) {
    seasonalDrinksWithImportedBeans.push(`${drink.name} with imported beans`);
  }
}

//console.table(seasonalDrinksWithImportedBeans);
  module.exports = coffeeMenu