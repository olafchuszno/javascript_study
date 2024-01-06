class Item {
  constructor(name, category) {
    this.name = name;
    this.category = category;
  }

  static maxItems = 10;

  static getHelpersText() {
    return "Add items to your shopping list.";
  }

  getDetails() {
    return `${this.name} - ${this.category}`;
  }
}

// Extends the Item class
class PurchasedItem extends Item {
  constructor(name, category, price) {
    super(name, category);
    this.price = price;
  }

  getDetailsWithPrice() {
    return `${this.name} - ${this.category} - ${this.price}`;
  }

  static getNumberOfItems() {
    return `3 / ${super.maxItems}`;
  }
}

let item = new Item("coffee", "food");
item.category = "drink";

let purchasedItem = new PurchasedItem("sugar", "food", "2.49");

document.getElementById("output").innerHTML = item.getDetails();

console.log(PurchasedItem.maxItems);

console.log(PurchasedItem.getNumberOfItems());
