class Item {
  constructor(name, category) {
    this.name = name;
    this.category = category;
  }

  getDetails() {
    return `${this.name} - ${this.category}`;
  }
}
