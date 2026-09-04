# Product Backlog

## Product Goal

Build a secure, maintainable and scalable enterprise platform
that centralizes product, inventory, customer, supplier,
purchasing and sales management.

---

## Prioritization Model

The initial backlog uses MoSCoW prioritization:

- MUST — Essential for MVP viability.
- SHOULD — Important but not essential for the first usable increment.
- COULD — Valuable capability that may be deferred.
- WON'T — Explicitly excluded from the current MVP.

Additional ordering factors:

- Business value
- Technical dependency
- Security
- Risk
- Learning value
- Architectural enablement

---

## Initial Ordered Product Backlog

| Order | Story | Epic | Priority | Dependency |
|---:|---|---|---|---|
| 1 | US-AUTH-001 User Login | EPIC-01 | MUST | Platform foundation |
| 2 | US-AUTH-003 Register User | EPIC-01 | MUST | Auth |
| 3 | US-AUTH-005 Assign Roles | EPIC-01 | MUST | Users |
| 4 | US-AUTH-004 Manage Users | EPIC-01 | MUST | Users/RBAC |
| 5 | US-AUTH-002 User Logout | EPIC-01 | MUST | Auth |
| 6 | US-PROD-004 Manage Categories | EPIC-02 | SHOULD | Auth/RBAC |
| 7 | US-PROD-001 Create Product | EPIC-02 | MUST | Categories |
| 8 | US-PROD-002 Update Product | EPIC-02 | MUST | Products |
| 9 | US-PROD-005 View Product Availability | EPIC-02 | MUST | Products |
| 10 | US-CUST-001 Register Customer | EPIC-03 | MUST | Auth/RBAC |
| 11 | US-CUST-002 Consult Customer | EPIC-03 | MUST | Customers |
| 12 | US-SUP-001 Register Supplier | EPIC-04 | MUST | Auth/RBAC |
| 13 | US-SUP-002 Consult Supplier | EPIC-04 | MUST | Suppliers |
| 14 | US-INV-001 View Inventory | EPIC-05 | MUST | Products |
| 15 | US-INV-002 Record Inventory Movement | EPIC-05 | MUST | Products |
| 16 | US-INV-003 Validate Stock | EPIC-05 | MUST | Inventory |
| 17 | US-INV-004 Maintain Inventory Consistency | EPIC-05 | MUST | Inventory |
| 18 | US-PUR-001 Register Purchase | EPIC-06 | MUST | Suppliers/Products |
| 19 | US-PUR-002 Add Purchase Items | EPIC-06 | MUST | Purchase |
| 20 | US-PUR-003 Increase Inventory After Purchase | EPIC-06 | MUST | Purchase/Inventory |
| 21 | US-SALE-001 Register Sale | EPIC-07 | MUST | Customers/Products |
| 22 | US-SALE-002 Add Sale Items | EPIC-07 | MUST | Sale |
| 23 | US-SALE-004 Validate Stock Before Sale | EPIC-07 | MUST | Inventory |
| 24 | US-SALE-005 Decrease Inventory After Sale | EPIC-07 | MUST | Sale/Inventory |
| 25 | US-AUD-001 Record Audit Event | EPIC-09 | MUST | Cross-cutting |
| 26 | US-REP-001 View Sales Report | EPIC-08 | MUST | Sales |
| 27 | US-REP-002 View Inventory Report | EPIC-08 | MUST | Inventory |
| 28 | US-CUST-003 Update Customer | EPIC-03 | SHOULD | Customers |
| 29 | US-SUP-003 Update Supplier | EPIC-04 | SHOULD | Suppliers |
| 30 | US-PROD-003 Deactivate Product | EPIC-02 | SHOULD | Products |
| 31 | US-PUR-004 Consult Purchase History | EPIC-06 | SHOULD | Purchases |
| 32 | US-SALE-003 Associate Customer | EPIC-07 | SHOULD | Sales/Customers |
| 33 | US-SALE-006 Consult Sales History | EPIC-07 | SHOULD | Sales |
| 34 | US-REP-003 View Purchase Report | EPIC-08 | SHOULD | Purchases |
| 35 | US-AUD-002 Consult Audit Log | EPIC-09 | SHOULD | Audit |

---

## Backlog Refinement Rule

A story may be selected for Sprint Planning only when it
satisfies the Definition of Ready.

The Product Backlog is emergent and may be reordered as new
information, dependencies and risks are discovered.