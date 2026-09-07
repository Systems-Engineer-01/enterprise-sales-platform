# Database Constraints

## Purpose

Database constraints protect critical business invariants independently
from the application layer.

## Product

- price >= 0
- cost >= 0

## Inventory

- quantity >= 0

## Inventory Movement

- quantity > 0

## Purchase

- total >= 0

## Purchase Item

- quantity > 0
- unitCost >= 0
- subtotal >= 0

## Sale

- total >= 0

## Sale Item

- quantity > 0
- unitPrice >= 0
- subtotal >= 0

## Business State Transitions

Purchase and Sale lifecycle transitions are enforced at the
application/domain layer rather than through CHECK constraints.

Allowed transitions:

DRAFT -> COMPLETED
DRAFT -> CANCELLED

COMPLETED and CANCELLED are terminal states in the initial model.

## Migration Strategy

Database constraints are implemented through versioned Prisma migrations.
Custom PostgreSQL CHECK constraints are maintained inside migration SQL
when they cannot be represented directly in the Prisma schema.
