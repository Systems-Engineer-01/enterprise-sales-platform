# Database Constraints

## 1. Purpose

Define the integrity constraints that must be enforced by the
physical database schema.

---

# 2. Primary Keys

Every principal entity must have a unique primary key.

The initial design uses UUID identifiers.

Entities include:

- users
- roles
- permissions
- categories
- products
- customers
- suppliers
- warehouses
- inventory
- inventory_movements
- purchases
- purchase_items
- sales
- sale_items
- audit_logs

---

# 3. Foreign Keys

The database must enforce valid references between related entities.

Examples:

```text
products.category_id
        ↓
categories.id

inventory.warehouse_id
        ↓
warehouses.id

sales.customer_id
        ↓
customers.id

sale_items.sale_id
        ↓
sales.id

sale_items.product_id
        ↓
products.id

