# ADR-008: Containerization

## Status
Proposed

## Context
To satisfy NFR-DEP-001 (Reproducible Environment), we must eliminate the "it works on my machine" problem. The backend requires a specific version of Node.js, and the database requires PostgreSQL.

## Decision
We will use **Docker** to containerize the application and **Docker Compose** to orchestrate the local development environment (Node.js app + PostgreSQL database).

## Consequences
### Positive
- Guarantees environment consistency across development, testing, and production.
- New developers can spin up the entire stack with a single command (`docker compose up`).
- Simplifies future CI/CD pipeline deployments.

### Negative
- Adds operational overhead to learn and maintain Dockerfiles and `docker-compose.yml`.
- Slightly higher resource consumption locally.

## Alternatives Considered
- **Bare Metal / Local Installations:** Rejected. Requiring developers to install PostgreSQL locally leads to version conflicts and complex onboarding processes.