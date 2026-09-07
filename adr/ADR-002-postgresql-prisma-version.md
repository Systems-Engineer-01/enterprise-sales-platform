# ADR-002: PostgreSQL 18 + Prisma ORM 7

- Status: Accepted
- Date: 2026-09-06

## Context

Enterprise Sales Platform requires a relational persistence layer
for users, roles, permissions, products, inventory, purchases,
sales, customers, suppliers and audit information.

The project requires relational integrity, transactions,
foreign keys, unique constraints, migrations and type-safe
database access.

Prisma ORM 8 is currently the latest major release, while
Prisma ORM 7 remains fully supported.

## Decision

The project will use:

- PostgreSQL 18
- Prisma ORM 7.10.0
- @prisma/client 7.10.0
- @prisma/adapter-pg
- pg
- dotenv

Prisma 7 is selected because this portfolio project prioritizes
stability, maintainability and mature tooling.

The rationale for this stack:
- PostgreSQL is our relational database.
- Prisma provides type-safe access.
- Prisma Migrate provides versioned history.
- @prisma/adapter-pg is the PostgreSQL adapter required by Prisma 7.
- Critical constraints can be implemented via custom SQL in migrations.
- We avoid coupling complete business logic to PostgreSQL.

The official Prisma 7 documentation confirms both the PostgreSQL adapter, the migration workflow, and the ability to customize SQL.

## Architecture

Application
    ->
Domain
    ->
Infrastructure
    ->
Prisma 7
    ->
@prisma/adapter-pg
    ->
pg
    ->
PostgreSQL 18

## Consequences

### Positive

- Stable supported Prisma major version.
- Type-safe database access.
- Versioned migrations.
- PostgreSQL relational integrity.
- Driver adapter architecture.
- ORM isolated inside Infrastructure.

### Negative

- Prisma 8 features are not used.
- A future Prisma 8 upgrade may require migration work.

### Mitigation

Prisma-specific code remains isolated inside Infrastructure.

## Alternatives

### Prisma 8

Rejected for the current implementation because stability is
prioritized over adopting the newest major ORM release.

### TypeORM

Rejected in favor of Prisma's type-safe schema/client workflow.

### Sequelize

Rejected in favor of Prisma's generated client and migration
workflow.

### Raw SQL

Rejected because it would increase persistence boilerplate
and reduce type safety.

### Microservices

Rejected because the MVP uses a modular monolith.

## Status

Accepted.
