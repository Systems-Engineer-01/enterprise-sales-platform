# ADR-004: ORM and Data Access

## Status
Proposed

## Context
With TypeScript and PostgreSQL selected, we need a reliable way to interact with the database. Writing raw SQL queries for all operations increases the risk of SQL injection, slows down development time, and makes typing difficult to maintain.

## Decision
We will use **Prisma ORM** for database schema management, migrations, and type-safe data access.

## Consequences
### Positive
- Auto-generated, strictly typed database client based on the schema.
- Excellent developer experience and autocompletion.
- Built-in migration system.
- Reduces boilerplate code in the Infrastructure layer.

### Negative
- Abstracts SQL heavily, which can make highly complex queries harder to optimize.
- Introduces an additional step in the CI/CD pipeline (Prisma generate).

## Alternatives Considered
- **TypeORM:** Viable, but its maintenance has been slower recently, and Active Record patterns can sometimes blur Clean Architecture boundaries if not carefully managed.
- **Raw SQL / Query Builders (Knex/Kysely):** Provides maximum control but sacrifices development speed and native type-safety capabilities that Prisma excels at.