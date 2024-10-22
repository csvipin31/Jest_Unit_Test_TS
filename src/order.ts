export class Order {
    private items: { productId: number, quantity: number }[] = [];
    private isProcessed: boolean = false;
  
    public addItem(productId: number, quantity: number): void {
      if (this.isProcessed) {
        throw new Error("Cannot add items to an already processed order.");
      }
      this.items.push({ productId, quantity });
    }
  
    public removeItem(productId: number): void {
      if (this.isProcessed) {
        throw new Error("Cannot remove items from an already processed order.");
      }
      this.items = this.items.filter(item => item.productId !== productId);
    }
  
    public processOrder(): void {
      if (this.items.length === 0) {
        throw new Error("Cannot process an order with no items.");
      }
      this.isProcessed = true;
    }
  
    public getItems(): { productId: number, quantity: number }[] {
      return this.items;
    }
  
    public isOrderProcessed(): boolean {
      return this.isProcessed;
    }
  }
  