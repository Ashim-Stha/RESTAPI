# REST API Project

This is a REST API project built with Node.js, Express, and MySQL. It includes user authentication and CRUD operations for user management.


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <repository_directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add your database configuration:
    ```
    DB_PORT=your_db_port
    USER=your_db_user
    PASSWORD=your_db_password
    DATABASE=your_db_name
    ```

## Running the Application

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Routes

- `POST /api/users/` - Create a new user (requires token)
- `GET /api/users/` - Get all users (requires token)
- `GET /api/users/:id` - Get user by ID (requires token)
- `PATCH /api/users/` - Update user (requires token)
- `DELETE /api/users/` - Delete user (requires token)
- `POST /api/users/login` - User login

### Authentication

- Token validation is handled by the middleware in `token_validation.js`.

## Middleware

- `credentials.js` - Handles CORS credentials.
- `token_validation.js` - Validates JWT tokens.

## Database

- MySQL database connection is configured in `connectSql.js`.

## Dependencies

- `bcrypt` - For hashing passwords.
- `cors` - For handling Cross-Origin Resource Sharing.
- `dotenv` - For loading environment variables.
- `express` - For building the REST API.
- `jsonwebtoken` - For handling JWT tokens.
- `mysql2` - For connecting to the MySQL database.

## License

This project is licensed under the ISC License.
