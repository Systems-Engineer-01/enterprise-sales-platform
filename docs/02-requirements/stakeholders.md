# Stakeholders

## 1. Purpose

Identify the stakeholders who influence, use, operate,
maintain or are affected by the Enterprise Sales Platform.

---

## 2. Primary Stakeholders

### 2.1 Business Owner / Manager

Responsibilities:

- Define business objectives.
- Monitor sales performance.
- Review inventory information.
- Review operational reports.
- Make business decisions.

Interests:

- Reliable information.
- Sales visibility.
- Inventory accuracy.
- Operational efficiency.
- Auditability.

---

### 2.2 Administrator

Responsibilities:

- Manage users.
- Manage roles.
- Manage permissions.
- Configure system information.
- Review audit logs.

Interests:

- Security.
- Access control.
- System integrity.
- Traceability.

---

### 2.3 Salesperson

Responsibilities:

- Register sales.
- Manage customer information.
- Consult products.
- Review product availability.

Interests:

- Fast sales registration.
- Accurate product availability.
- Simple workflows.
- Reliable customer information.

---

### 2.4 Inventory Manager

Responsibilities:

- Manage products.
- Manage categories.
- Monitor inventory.
- Register purchases.
- Monitor inventory movements.

Interests:

- Inventory accuracy.
- Stock visibility.
- Traceability.
- Purchase control.

---

### 2.5 System Maintainer / Developer

Responsibilities:

- Maintain the application.
- Implement changes.
- Fix defects.
- Monitor system health.
- Maintain technical documentation.

Interests:

- Maintainability.
- Testability.
- Clear architecture.
- Observability.
- Deployment reproducibility.

---

## 3. Secondary Stakeholders

### 3.1 Customers

Customers interact indirectly with the platform through
sales operations.

Interests:

- Correct sales information.
- Accurate products and prices.
- Reliable transactions.

---

### 3.2 Suppliers

Suppliers are represented through purchasing operations.

Interests:

- Correct supplier information.
- Accurate purchase records.
- Traceability of transactions.

---

## 4. Stakeholder Summary

| Stakeholder | Influence | System Interaction | Primary Interest |
|---|---:|---:|---|
| Business Owner / Manager | High | High | Reports and decisions |
| Administrator | High | High | Security and administration |
| Salesperson | Medium | High | Sales operations |
| Inventory Manager | High | High | Inventory and purchases |
| System Maintainer / Developer | High | High | Maintainability |
| Customer | Medium | Indirect | Sales accuracy |
| Supplier | Medium | Indirect | Purchase traceability |

---

## 5. Assumptions

The initial MVP assumes:

- The organization operates with defined users.
- Users require different access levels.
- Sales affect inventory.
- Purchases affect inventory.
- Important operations must be auditable.
- Management requires operational reports.

---

## 6. Open Questions

The following questions will be resolved during requirements
refinement:

- Is the system intended for one organization or multiple
  organizations?
- Which roles require which permissions?
- Are product prices fixed or configurable?
- Can a sale contain multiple products?
- Can purchases contain multiple products?
- What happens when available inventory is insufficient?
- Are sales allowed with zero stock?
- Which operations must generate audit records?
- Which reports are mandatory for the MVP?
- Are taxes required?
- Are discounts required?
- Are returns required?
- Are cancelled transactions required?