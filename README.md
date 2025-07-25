# 🏡 Property API

A lightweight Express API for adding and searching real estate listings, built with clean separation of concerns and forward scalability in mind.

---

## 📌 Assumptions

- 💾 **In-memory Storage**: Data is stored in a JavaScript array and resets on server restart.
- 🏘️ **Required Fields**: Each property must include `address`, `suburb`, `price`, and `description`.
- 📍 **Suburb Field**: Plain string input; no geospatial validation is applied.
- 💰 **Price Field**: Expected to be a numeric value (e.g., `750000`, not `"750,000"`).
- 🔍 **Search Behavior**: Optional `suburb` filter compares listing price to suburb average.
- 📊 **Comparison Field**: Indicates if listing is *above*, *below*, *equal*, or *unknown* relative to average price.
- 🔐 **Security**: No auth, rate limiting, or other protections are implemented for simplicity.
- 🚫 **Excluded Features**: No pagination, sorting, caching—focus remains on logic and code clarity.

---

## 🛠️ Code Structure Highlights

- **Controllers** handle HTTP logic and responses.
- **Service Layer** offloads business logic for filtering and price comparison.
- **Validation Middleware** checks input structure and types before processing.
- **Utility Modules** encapsulate logic like price calculations.
- **Constants Folder** centralizes reusable labels for maintainability.
- **Logger Middleware** provides basic observability for incoming requests.

---

## 🧩 Input Type Considerations

Input validation is handled via middleware to ensure:
- Presence and correct types of all required fields.
- Graceful handling of malformed or missing data.
- Future-proofing for stricter schema validation via `Joi` or `Zod`.

---

## 🧪 Test Coverage Improvements

Initial tests cover successful flows for adding and searching properties. Expanded tests include:
- Missing and invalid field checks
- Suburb filters with single and multiple listings
- Edge cases (e.g., price exactly equal to average)
- Logical separation between business logic unit tests and integration tests via `supertest`

---

## 🚀 Scaling Strategy (Beyond Constraints)

While this implementation uses in-memory storage per the spec, scaling for larger data volumes would involve:

- Migration to persistent storage (e.g., PostgreSQL or MongoDB)
- Indexing for efficient suburb queries
- Caching with Redis for average price calculations
- Service-layer abstractions to enable backend refactoring without affecting route structure
- ORM integration for safer and more expressive data handling

---

## 🧪 Testing Instructions

Run the test suite with:

```bash
npm test
