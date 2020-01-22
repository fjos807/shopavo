export class Product {
  constructor(
    name: string,
    price: number,
    description: string,
    businessId: string,
    quantity: number,
    type: string
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.businessId = businessId;
    this.quantity = quantity;
    this.type = type;
  }

  _id: string;
  name: string;
  price: number;
  description: string;
  businessId: string;
  quantity: number;
  type: string;
}
