# Business Processes

## 1. Purpose

Define the main business processes that the Enterprise Sales
Platform must support.

---

## 2. User Access Management

### Objective

Control authentication and authorization.

### Main Flow

1. User provides credentials.
2. System validates credentials.
3. System identifies the user.
4. System evaluates assigned role.
5. System grants access according to permissions.
6. System records relevant security events.

### Actors

- Administrator
- System User

---

## 3. Product Management

### Objective

Maintain the organization's product catalog.

### Main Flow

1. Authorized user creates a product.
2. System validates product information.
3. System associates the product with a category.
4. System stores the product.
5. System makes the product available for authorized operations.

### Actors

- Administrator
- Inventory Manager

---

## 4. Inventory Management

### Objective

Maintain accurate information about available stock.

### Main Flow

1. System receives an inventory-affecting operation.
2. System validates the operation.
3. System updates stock.
4. System records the inventory movement.
5. System maintains movement traceability.

### Actors

- Inventory Manager
- Salesperson
- System

---

## 5. Purchasing

### Objective

Register purchases from suppliers and increase inventory.

### Main Flow

1. Authorized user selects supplier.
2. User creates purchase.
3. User adds products and quantities.
4. System validates the purchase.
5. System records the purchase.
6. System increases inventory.
7. System records inventory movements.
8. System records the relevant audit event.

### Actors

- Inventory Manager
- Administrator

---

## 6. Sales

### Objective

Register customer sales and decrease inventory.

### Main Flow

1. Salesperson selects customer.
2. Salesperson selects products.
3. System verifies availability.
4. System calculates the transaction.
5. System records the sale.
6. System decreases inventory.
7. System records inventory movements.
8. System records the relevant audit event.

### Actors

- Salesperson
- Manager

---

## 7. Customer Management

### Objective

Maintain customer information required by sales operations.

### Actors

- Salesperson
- Administrator

---

## 8. Supplier Management

### Objective

Maintain supplier information required by purchasing operations.

### Actors

- Inventory Manager
- Administrator

---

## 9. Reporting

### Objective

Provide operational information for decision-making.

### Initial Reporting Areas

- Sales.
- Inventory.
- Purchases.
- Products.
- Customers.
- Suppliers.

### Actors

- Business Manager
- Administrator
- Inventory Manager

---

## 10. Audit

### Objective

Provide traceability for relevant system operations.

### Events May Include

- Authentication events.
- User changes.
- Role changes.
- Product changes.
- Inventory operations.
- Purchase operations.
- Sales operations.

---

## 11. Business Process Relationships

```text
Purchase
   ↓
Inventory Increase
   ↓
Inventory Availability
   ↓
Sale
   ↓
Inventory Decrease
   ↓
Reports