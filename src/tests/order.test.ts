import { Order } from "../order";

describe('Order Management System', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order(); 
  });

  describe('Happy Path', () => {
    it('should add an item to the order', () => {
      order.addItem(100, 2);
      expect(order.getItems()).toEqual([{ productId: 100, quantity: 2 }]);
    });

    it('should remove an item from the order', () => {
      order.addItem(200, 2);
      order.removeItem(200);
      expect(order.getItems()).toEqual([]);
    });

    it('should process the order successfully', () => {
      order.addItem(3, 2);
      order.processOrder();
      expect(order.isOrderProcessed()).toBe(true);
    });
  });

  describe('Unhappy Path', () => {
    it('should throw an error when trying to add items after the order is processed', () => {
      order.addItem(1, 2);
      order.processOrder();
      expect(() => order.addItem(2, 1)).toThrow("Cannot add items to an already processed order.");
    });

    it('should throw an error when trying to remove items after the order is processed', () => {
      order.addItem(1, 2);
      order.processOrder();
      expect(() => order.removeItem(1)).toThrow("Cannot remove items from an already processed order.");
    });

    it('should throw an error when trying to process an empty order', () => {
      expect(() => order.processOrder()).toThrow("Cannot process an order with no items.");
    });
  });

  describe('Edge Cases', () => {
    it('should not throw an error when trying to remove a non-existing item', () => {
      order.addItem(1, 2);
      expect(() => order.removeItem(999)).not.toThrow(); 
      expect(order.getItems()).toEqual([{ productId: 1, quantity: 2 }]);
    });

    it('should handle multiple items in the order', () => {
      order.addItem(1, 2);
      order.addItem(2, 3);
      expect(order.getItems()).toEqual([
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 3 },
      ]);
    });
  });

});
