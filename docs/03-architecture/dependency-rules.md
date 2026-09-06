# Dependency Rules

## 1. Purpose

Define the dependency boundaries that must be respected by the
Enterprise Sales Platform.

These rules protect the Clean Architecture boundaries.

---

# 2. Layer Dependency Matrix

| Layer | May Depend On |
|---|---|
| Presentation | Application, shared contracts |
| Application | Domain |
| Domain | Domain only / shared primitives |
| Infrastructure | Application, Domain |
| Tests | Any layer required by the test type |

---

# 3. Presentation Rules

Presentation may depend on:

- Application
- DTOs
- authentication infrastructure through controlled adapters
- API documentation mechanisms

Presentation must not contain core business rules.

Presentation must not directly access:

- Prisma
- PostgreSQL
- database drivers

---

# 4. Application Rules

Application may depend on:

- Domain
- application contracts
- repository interfaces
- application services

Application must not directly depend on:

- Prisma Client
- PostgreSQL drivers
- HTTP-specific infrastructure
- Docker

---

# 5. Domain Rules

Domain must be the most independent layer.

Domain must not depend on:

```text
NestJS
Prisma
PostgreSQL
HTTP
Express
Fastify
Docker
JWT libraries