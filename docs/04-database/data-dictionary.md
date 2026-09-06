# Data Dictionary

## 1. Purpose

Define the initial database entities and their principal fields.

The dictionary provides a controlled baseline before implementation
of the PostgreSQL schema.

---

# 2. users

| Field | Type Concept | Required | Description |
|---|---|---:|---|
| id | UUID | Yes | Unique user identifier |
| name | VARCHAR | Yes | User display/name |
| email | VARCHAR | Yes | Unique authentication email |
| password_hash | VARCHAR | Yes | Secure password hash |
| status | ENUM | Yes | Account status |
| created_at | TIMESTAMP | Yes | Creation timestamp |
| updated_at | TIMESTAMP | Yes | Last update timestamp |

Constraints:

- email must be unique;
- password must never be stored in plaintext.

---

# 3. roles

| Field | Type Concept | Required | Description |
|---|---|---:|---|
| id | UUID | Yes | Role identifier |
| name | VARCHAR | Yes | Role name |
| description | TEXT | No | Role description |
| created_at | TIMESTAMP | Yes | Creation timestamp |

Role name must be unique.

---

# 4. permissions

| Field | Type Concept | Required | Description |
|---|---|---:|---|
| id | UUID | Yes | Permission identifier |
| code | VARCHAR | Yes | Permission code |
| description | TEXT | No | Permission description |
| created_at | TIMESTAMP | Yes | Creation timestamp |

Permission code must be unique.

---

# 5. user_roles

| Field | Type Concept | Required | Description |
|---|---|---:|---|
| user_id | UUID | Yes | User reference |
| role_id | UUID | Yes | Role reference |

Primary key:

```text
(user_id, role_id)