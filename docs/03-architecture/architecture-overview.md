# Architecture Overview

## 1. Purpose

This document defines the high-level software architecture of the
Enterprise Sales Platform.

The architecture must provide:

- clear separation of responsibilities
- maintainability
- testability
- security
- controlled dependencies
- transactional consistency
- scalability
- observability
- reproducible deployment

The architecture is based on Clean Architecture principles and
supports the technology decisions documented in ADR-001 through
ADR-008.

---

# 2. Architectural Style

The Enterprise Sales Platform will use a modular monolithic
architecture organized according to Clean Architecture principles.

The initial architecture will contain four primary layers:

1. Presentation
2. Application
3. Domain
4. Infrastructure

The system will initially be deployed as a single application.

Microservices are explicitly out of scope for the MVP.

---

# 3. High-Level Architecture

```text
                         CLIENTS
                            |
                            v
                  +--------------------+
                  |    Presentation    |
                  |   REST Controllers |
                  |   DTO / Validation |
                  +---------+----------+
                            |
                            v
                  +--------------------+
                  |    Application     |
                  |      Use Cases     |
                  | Application Ports  |
                  +---------+----------+
                            |
                            v
                  +--------------------+
                  |       Domain       |
                  | Entities           |
                  | Value Objects      |
                  | Business Rules     |
                  | Domain Services    |
                  +---------+----------+
                            ^
                            |
                  +---------+----------+
                  |   Infrastructure   |
                  | Prisma             |
                  | PostgreSQL         |
                  | External Services  |
                  +--------------------+