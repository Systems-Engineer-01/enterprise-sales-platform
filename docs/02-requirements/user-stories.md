# User Stories

## 1. Purpose

Define the initial Product Backlog user stories for the
Enterprise Sales Platform.

Each story must remain traceable to its related Epic and
functional requirements.

---

# EPIC-01 — Authentication and Access Control

## US-AUTH-001 — User Login

As a registered user,
I want to authenticate with my credentials,
so that I can securely access the platform.

Priority: MUST

Related Requirements:

- FR-AUTH-001
- FR-AUTH-002
- FR-AUTH-003
- FR-AUTH-004

Acceptance Criteria:

- Given a registered active user
  when valid credentials are provided
  then authentication succeeds.

- Given invalid credentials
  when authentication is attempted
  then access is denied.

- Authentication errors must not expose sensitive information.

---

## US-AUTH-002 — User Logout

As an authenticated user,
I want to end my authenticated session,
so that my account is not left accessible.

Priority: MUST

Related Requirements:

- FR-AUTH-004

Acceptance Criteria:

- An authenticated user can log out.
- The current authentication context becomes invalid after logout.

---

## US-AUTH-003 — Register User

As an administrator,
I want to register system users,
so that authorized employees can access the platform.

Priority: MUST

Related Requirements:

- FR-USER-001

Acceptance Criteria:

- Only authorized users can create accounts.
- Required user information must be validated.
- Duplicate restricted identifiers must be rejected.

---

## US-AUTH-004 — Manage Users

As an administrator,
I want to consult, update and deactivate users,
so that system access remains controlled.

Priority: MUST

Related Requirements:

- FR-USER-002

Acceptance Criteria:

- Authorized administrators can consult users.
- Authorized administrators can update permitted user data.
- Users can be deactivated without deleting required historical data.

---

## US-AUTH-005 — Assign Roles

As an administrator,
I want to assign roles to users,
so that their access reflects their responsibilities.

Priority: MUST

Related Requirements:

- FR-USER-003
- FR-USER-004

Acceptance Criteria:

- Only authorized administrators can assign roles.
- Assigned permissions are enforced on protected operations.

---

# EPIC-02 — Product and Category Management

## US-PROD-001 — Create Product

As an inventory manager,
I want to register products,
so that they can participate in business operations.

Priority: MUST

Related Requirements:

- FR-PROD-001

Acceptance Criteria:

- Required product information is validated.
- A valid product can be created.
- Invalid product information is rejected.

---

## US-PROD-002 — Update Product

As an inventory manager,
I want to update product information,
so that the product catalog remains accurate.

Priority: MUST

Related Requirements:

- FR-PROD-002

---

## US-PROD-003 — Deactivate Product

As an inventory manager,
I want to deactivate products,
so that unavailable products cannot be used incorrectly.

Priority: SHOULD

Related Requirements:

- FR-PROD-002

---

## US-PROD-004 — Manage Categories

As an inventory manager,
I want to manage product categories,
so that products can be organized.

Priority: SHOULD

Related Requirements:

- FR-PROD-003

---

## US-PROD-005 — View Product Availability

As an authorized user,
I want to view product availability,
so that I can make informed operational decisions.

Priority: MUST

Related Requirements:

- FR-PROD-004

---

# EPIC-03 — Customer Management

## US-CUST-001 — Register Customer

As a salesperson,
I want to register customers,
so that sales can be associated with them.

Priority: MUST

Related Requirements:

- FR-CUST-001

---

## US-CUST-002 — Consult Customer

As a salesperson,
I want to consult customer information,
so that I can identify customers during sales operations.

Priority: MUST

Related Requirements:

- FR-CUST-002

---

## US-CUST-003 — Update Customer

As an authorized user,
I want to update customer information,
so that customer records remain accurate.

Priority: SHOULD

Related Requirements:

- FR-CUST-002

---

# EPIC-04 — Supplier Management

## US-SUP-001 — Register Supplier

As an inventory manager,
I want to register suppliers,
so that purchases can be associated with them.

Priority: MUST

Related Requirements:

- FR-SUP-001

---

## US-SUP-002 — Consult Supplier

As an inventory manager,
I want to consult supplier information,
so that I can select suppliers during purchasing.

Priority: MUST

Related Requirements:

- FR-SUP-002

---

## US-SUP-003 — Update Supplier

As an authorized user,
I want to update supplier information,
so that supplier records remain accurate.

Priority: SHOULD

Related Requirements:

- FR-SUP-002

---

# EPIC-05 — Inventory Management

## US-INV-001 — View Inventory

As an inventory manager,
I want to consult current stock,
so that I know product availability.

Priority: MUST

Related Requirements:

- FR-INV-001

---

## US-INV-002 — Record Inventory Movement

As the system,
I want to record inventory movements,
so that stock changes remain traceable.

Priority: MUST

Related Requirements:

- FR-INV-002
- FR-INV-006

---

## US-INV-003 — Validate Stock

As the system,
I want to validate available stock before inventory-decreasing operations,
so that inventory cannot become inconsistent.

Priority: MUST

Related Requirements:

- FR-INV-005

---

## US-INV-004 — Maintain Inventory Consistency

As the system,
I want inventory increases and decreases to occur atomically with
their business transactions,
so that stock remains consistent.

Priority: MUST

Related Requirements:

- FR-INV-003
- FR-INV-004
- NFR-REL-001
- NFR-REL-003

---

# EPIC-06 — Purchasing

## US-PUR-001 — Register Purchase

As an inventory manager,
I want to register purchases,
so that incoming products are recorded.

Priority: MUST

Related Requirements:

- FR-PUR-001
- FR-PUR-003

---

## US-PUR-002 — Add Purchase Items

As an inventory manager,
I want to add multiple products to a purchase,
so that supplier transactions can be represented accurately.

Priority: MUST

Related Requirements:

- FR-PUR-002

---

## US-PUR-003 — Increase Inventory After Purchase

As the system,
I want to increase stock when a purchase is completed,
so that inventory reflects received products.

Priority: MUST

Related Requirements:

- FR-PUR-004
- FR-INV-003

---

## US-PUR-004 — Consult Purchase History

As an authorized user,
I want to consult purchase history,
so that purchasing operations remain traceable.

Priority: SHOULD

Related Requirements:

- FR-PUR-005

---

# EPIC-07 — Sales

## US-SALE-001 — Register Sale

As a salesperson,
I want to register a sale,
so that commercial transactions are recorded.

Priority: MUST

Related Requirements:

- FR-SALE-001

---

## US-SALE-002 — Add Sale Items

As a salesperson,
I want to add multiple products to a sale,
so that a customer can purchase several products in one transaction.

Priority: MUST

Related Requirements:

- FR-SALE-002

---

## US-SALE-003 — Associate Customer

As a salesperson,
I want to associate a customer with a sale,
so that customer transactions can be traced.

Priority: SHOULD

Related Requirements:

- FR-SALE-003

---

## US-SALE-004 — Validate Stock Before Sale

As the system,
I want to verify stock before confirming a sale,
so that products cannot be sold without sufficient availability.

Priority: MUST

Related Requirements:

- FR-SALE-004
- FR-INV-005

---

## US-SALE-005 — Decrease Inventory After Sale

As the system,
I want to decrease stock after a successful sale,
so that inventory reflects sold products.

Priority: MUST

Related Requirements:

- FR-SALE-005
- FR-INV-004

---

## US-SALE-006 — Consult Sales History

As an authorized user,
I want to consult previous sales,
so that commercial operations remain traceable.

Priority: SHOULD

Related Requirements:

- FR-SALE-006

---

# EPIC-08 — Reporting

## US-REP-001 — View Sales Report

As a business manager,
I want to review sales information,
so that I can evaluate commercial performance.

Priority: MUST

Related Requirements:

- FR-REP-001

---

## US-REP-002 — View Inventory Report

As a business manager,
I want to review inventory information,
so that I can evaluate stock status.

Priority: MUST

Related Requirements:

- FR-REP-002

---

## US-REP-003 — View Purchase Report

As a business manager,
I want to review purchasing information,
so that I can evaluate procurement activity.

Priority: SHOULD

Related Requirements:

- FR-REP-003

---

# EPIC-09 — Audit and Traceability

## US-AUD-001 — Record Audit Event

As the system,
I want to record relevant security and business events,
so that important operations remain traceable.

Priority: MUST

Related Requirements:

- FR-AUD-001
- FR-AUD-002

---

## US-AUD-002 — Consult Audit Log

As an authorized administrator,
I want to consult audit records,
so that I can investigate relevant operations.

Priority: SHOULD

Related Requirements:

- FR-AUD-003

---

# Initial Backlog Summary

| Epic | Stories |
|---|---:|
| Authentication and Access Control | 5 |
| Product and Category Management | 5 |
| Customer Management | 3 |
| Supplier Management | 3 |
| Inventory Management | 4 |
| Purchasing | 4 |
| Sales | 6 |
| Reporting | 3 |
| Audit and Traceability | 2 |
| Total | 35 |