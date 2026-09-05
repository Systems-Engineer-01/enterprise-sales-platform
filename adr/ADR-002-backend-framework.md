# ADR-002: Backend Runtime and Framework

## Status
Proposed

## Context
The Enterprise Sales Platform requires a backend that supports complex business logic, role-based access control, and RESTful APIs. 
The team has strong competencies in TypeScript, Node.js, and object-oriented architectural patterns (Clean Architecture, DDD, Dependency Injection). 
We need a framework that natively supports these patterns to enforce architectural boundaries and ensure long-term maintainability.

## Decision
We will use **Node.js** as the runtime environment, **TypeScript** as the primary language, and **NestJS** as the backend framework.

## Consequences
### Positive
- NestJS natively supports and enforces modularity and Dependency Injection out-of-the-box.
- TypeScript provides static typing, reducing runtime errors and improving developer experience.
- Perfect alignment with Clean Architecture layers (Controllers, Services/Use Cases, Repositories).
- Excellent integration with automated testing tools (Jest).

### Negative
- Steeper learning curve compared to simple Express.js setups.
- Slightly higher initial boilerplate code.

## Alternatives Considered
- **Express.js / Fastify (Barebones):** Rejected because they lack native architectural constraints, risking "spaghetti code" as the project scales.
- **Laravel / PHP or Spring Boot / Java:** While viable and within team competencies, Node.js + TypeScript offers a highly requested modern stack in current tech landscapes, providing a strategic advantage for the portfolio.