Assumptions for the Property API
💾 In-memory data storage will be used for simplicity, meaning properties are stored in a JavaScript array and will reset every time the server restarts.

🏘️ Each property must include address, suburb, price, and description—all are required fields in the POST /properties endpoint.

📍 The suburb field is a simple string; no validation is done for real-world geographical correctness.

💰 The price field is assumed to be a number in currency format, not a string (e.g., 750000 not "750,000").

🔍 For search, if a suburb filter is applied, results are compared to the average price within that suburb only.

📊 The comparison field (above, below, equal, or unknown) is based solely on calculated average price within the filtered result set.

🔐 No authentication or authorization is implemented (API is open for simplicity).

🛠️ No rate limiting, pagination, sorting, or caching is added since the scale is small.

📦 API is expected to scale in future, so a clean structure is used for easy migration to a database or ORM later.
