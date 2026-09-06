# Entity Relationship Model

## 1. Purpose

This document defines the initial relational model of the
Enterprise Sales Platform.

The model is derived from the approved conceptual domain model.

The database must support:

- authentication;
- authorization;
- product management;
- customer management;
- supplier management;
- inventory management;
- purchasing;
- sales;
- auditability;
- reporting.

---

# 2. Database Technology

Primary database:

PostgreSQL

Persistence technology:

Prisma

The database schema must preserve the business boundaries defined
by the domain model.

---

# 3. Identity and Access

## User

```text
users