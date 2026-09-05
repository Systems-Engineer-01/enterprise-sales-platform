# ADR-003: Database

## Status
Proposed

## Context
The system manages products, inventory, customers, purchasing, and sales. 
These entities are highly relational. Transactions (like a sale that decreases inventory) must maintain strict ACID (Atomicity, Consistency, Isolation, Durability) properties. Data integrity is the highest priority.

## Decision
We will use **PostgreSQL** as our primary relational database.

## Consequences
### Positive
- Strict enforcement of relational data integrity and constraints.
- Native support for JSONB (useful for audit logs or flexible attributes).
- Highly scalable and enterprise-ready.
- Excellent open-source ecosystem.

### Negative
- Requires schema management and migrations.
- Vertical scaling can be more complex than NoSQL alternatives, though sufficient for the MVP scope.

## Alternatives Considered
- **MongoDB:** Rejected. While excellent for document storage, managing complex transactional relationships (e.g., deducting stock while recording a sale) across multiple documents introduces unnecessary complexity.
- **MySQL:** Viable, but PostgreSQL offers more robust data types and stricter constraint handling out-of-the-box, aligning better with enterprise requirements.