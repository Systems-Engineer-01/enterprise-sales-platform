# ADR-005: Authentication Strategy

## Status
Proposed

## Context
The platform requires secure authentication (FR-AUTH-001) and role-based access control (FR-USER-004) for multiple types of users (Administrators, Salespersons, etc.). Since we are building a REST API that might eventually be consumed by different clients (web, mobile), the authentication mechanism should be stateless and highly scalable.

## Decision
We will use **JSON Web Tokens (JWT)** for authentication and authorization, implementing a stateless REST API.

## Consequences
### Positive
- Stateless authentication reduces server memory overhead (no session state required on the server).
- JWTs can securely carry user roles and permissions as claims, speeding up authorization checks without hitting the database on every request.
- Perfectly aligns with NestJS's `Passport` and `JwtModule` integrations.

### Negative
- Token revocation is more complex than session-based auth. We will need to implement short-lived access tokens and a refresh token rotation strategy.
- If a token is compromised, it remains valid until it expires.

## Alternatives Considered
- **Session/Cookie-based Auth:** Traditional and easier to revoke, but introduces statefulness on the backend, complicating horizontal scaling and future mobile integrations.