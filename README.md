# Express API with MySQL2 🎉

This is a simple CRUD API built with Express.js and MySQL2 for managing products, invoices, and inventory. 🚀

## Features ✨

- 🌐 RESTful API with organized structure.
- 📄 Models, Repositories, and Services for clean separation of concerns.
- 🛡️ Middleware for validation and error handling.
- 🗄️ MySQL2 integration for database operations.
- 🧪 Ready for testing and scaling.

## Prerequisites 📋

- Node.js (v14 or higher).
- MySQL/MariaDB setup (e.g., via XAMPP or Docker).
- A `.env` file configured with the following:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=store
PORT=3000
```

## Installation 🛠️

1. Clone the repository:

   ```bash
   git clone https://github.com/Bardolog1/Basic-API-Express-Store.git
   cd Basic-API-Express-Store
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure the `.env` file.
4. Initialize the database:

   - Create a database named `store` (or use the name specified in your `.env`).
   - Run the provided SQL scripts to create tables (`products`, `invoices`, `inventory`).

## Usage 🚀

### Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

### Endpoints 📡

- **Products**:

  - `GET /api/products`: Retrieve all products.
  - `GET /api/products/:id`: Retrieve a product by ID.
  - `POST /api/products`: Add a new product.
  - `PUT /api/products/:id`: Update a product by ID.
  - `DELETE /api/products/:id`: Delete a product by ID.
- **Invoices**:

  - `GET /api/invoices`: Retrieve all invoices.
  - `GET /api/invoices/:id`: Retrieve an invoice by ID.
  - `POST /api/invoices`: Add a new invoice.
  - `PUT /api/invoices/:id`: Update an invoice by ID.
  - `DELETE /api/invoices/:id`: Delete an invoice by ID.
- **Inventory**:

  - `GET /api/inventory`: Retrieve all inventory items.
  - `GET /api/inventory/:id`: Retrieve inventory details by ID.
  - `GET /api/inventory/product/:productId`: Retrieve inventory by product ID.
  - `POST /api/inventory`: Add a new inventory item.
  - `PUT /api/inventory/:id`: Update inventory by ID.

## Project Structure 🗂️

```
project-root
├── src
│   ├── config
│   │   └── db.config.js        # Database configuration
│   ├── controllers             # Route controllers
│   ├── middlewares             # Middleware functions
│   ├── models                  # Entity definitions
│   ├── repositories            # Database query logic
│   ├── routes                  # API route definitions
│   ├── errors                  # Custom error classes
│   └── services                # Business logic
├── app.js                      # Express app configuration
├── server.js                   # Application entry point
└── README.md                   # Project documentation
```

## Contributing 🤝

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License 📜

This project is licensed under the MIT License. See the LICENSE file for details.

---

Made with ❤️ by Bardolog1 ✨
