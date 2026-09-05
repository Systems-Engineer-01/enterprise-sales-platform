# ADR-006: API Style

## Status
Proposed

## Context
We need a standard way for client applications to communicate with the backend. We also have a strict non-functional requirement for API Documentation (NFR-API-001).

## Decision
We will build a **RESTful API** and document it using **OpenAPI (Swagger)**.

## Consequences
### Positive
- REST is the industry standard and perfectly matches the CRUD-heavy nature of this business domain.
- NestJS provides excellent native support for Swagger, allowing us to generate documentation automatically using TypeScript decorators.
- Ensures the frontend team (or future mobile apps) has a clear, interactive contract of the API.

### Negative
- REST can suffer from over-fetching or under-fetching of data compared to GraphQL.

## Alternatives Considered
- **GraphQL:** Rejected for the MVP. While powerful for complex data fetching, it adds unnecessary complexity for a system whose initial primary goal is straightforward transactional processes.
- **gRPC:** Rejected as it is better suited for internal microservices communication, not client-facing web APIs.