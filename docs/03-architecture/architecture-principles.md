# Architecture Principles

## 1. Purpose

These principles define the engineering rules that guide the
architecture and implementation of the Enterprise Sales Platform.

They complement the architecture decisions documented in the ADRs.

---

# 2. Separation of Concerns

Each architectural component must have a clearly defined
responsibility.

Controllers handle HTTP concerns.

Application components coordinate use cases.

Domain components implement business rules.

Infrastructure components implement technical concerns.

---

# 3. Dependency Inversion

High-level business logic must not depend directly on low-level
technical implementations.

Dependencies must point toward abstractions.

Example:

```text
Use Case
   |
   v
Repository Interface
   ^
   |
Prisma Repository