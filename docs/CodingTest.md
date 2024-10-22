
# Order Management System - Jest Unit Tests

## Description

This task outlines Order Management System implemention in TypeScript with unit tests written in Jest. The test suite covers key functionalities, including adding/removing items, processing orders, and handling errors.

### Unit Test Scenarios Covered

1. Adding an item to the order.
2. Removing an item from the order.
3. Processing the order.
4. Preventing further modifications after the order is processed.
5. Error handling when trying to process an empty order.

The tests ensure coverage of both:

- **Happy paths**: Correct functionality under normal conditions.
- **UnHappy paths**: Handling scenarios such as removing an item that doesn’t exist, or attempting to add/remove items after the order is processed.
- **Edge cases**: Handling scenarios such as removing non-existing items from order, and adding mutiple items to order.
