# ADR-007: Testing Strategy

## Status
Proposed

## Context
Quality and reliability are critical (NFR-TEST-001). The system handles financial and inventory data, so bugs in production can cause significant business impact. We need a fast, reliable way to verify business logic.

## Decision
We will use **Jest** as our primary testing framework. Our strategy will prioritize:
1. **Unit Tests:** For Domain entities, business rules, and Application Use Cases.
2. **Integration Tests (E2E):** For critical API endpoints (e.g., creating a sale, registering a user) using a test database.

## Consequences
### Positive
- Jest is the default testing framework in NestJS, ensuring zero friction in configuration.
- Tests will run in isolation, providing fast feedback loops during development.

### Negative
- Requires discipline to write and maintain tests.
- E2E tests require a separate database environment to avoid polluting development data.

## Alternatives Considered
- **Mocha/Chai:** Rejected. While valid, Jest provides a more unified, out-of-the-box experience with mocking and assertion libraries included.