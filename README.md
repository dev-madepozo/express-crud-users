# Express crud users & products

This is a basic CRUD application for managing users and products, designed as part of a Frontend course.

- *USERS*: [`api/v1/users`](https://cibertec-crud-users.onrender.com/api/v1/users)
- *PRODUCTS*: [`api/v1/products`](https://cibertec-crud-users.onrender.com/api/v1/products)

## About

This is a simple CRUD API built using Express.js and MongoDB for managing users and products data. The API provides endpoints to create, retrieve, update, and delete users in a MongoDB database, making it a perfect starting point for understanding RESTful APIs, Node.js, and MongoDB integration.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [API Endpoints](#api-endpoints)
4. [Collaboration](#collaboration)
5. [License](#license)

## Getting Started

To get started with this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database)
- Git (for version control)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dev-madepozo/cibertec-crud-users.git
    ```

2. Navigate into the project directory:

    ```bash
    cd cibertec-crud-users
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```
    MONGODB_URI=your_mongodb_connection_string
    PORT=8080
    ```

5. Start the development server:

    ```bash
    npm dev
    ```

6. The API will now be running on [http://localhost:8080](http://localhost:8080).

### Example

To test the API, you can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

## Features

- **Create User**: Add new users to the database.
- **Read User**: Retrieve user information based on user ID.
- **Update User**: Update user information (e.g., name, email, etc.).
- **Delete User**: Delete a user from the database.
- **MongoDB integration**: Data is stored and managed in a MongoDB database.

- **Create Product**: Add new products to the database.
- **Read Product**: Retrieve product information based on product ID.
- **Update Product**: Update product information (e.g., name, description, price, etc.).
- **Delete Product**: Delete a product from the database.

## API Endpoints

The following API endpoints are available for `users`:

### 1. `POST /api/v1/users`

- **Description**: Create a new user.
- **Request Body**: 
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "username": "johndoe",
        "email": "john.doe@example.com",
        "phone": "9999999999",
        "website": "https://johndoe.com"
    }
    ```
- **Response**:
    ```json
    {
        "message": "User created successfully",
        "user": {
            "firstName": "John",
            "lastName": "Doe",
            "username": "johndoe",
            "email": "john.doe@example.com",
            "phone": "9999999999",
            "website": "https://johndoe.com",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T16:03:23.224+00:00
        }
    }
    ```

### 2. `GET /api/v1/users`

- **Description**: Get a list of all users.
- **Response**:
    ```json
    [
        {
            "firstName": "John",
            "lastName": "Doe",
            "username": "johndoe",
            "email": "john.doe@example.com",
            "phone": "9999999999",
            "website": "https://johndoe.com",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T16:03:23.224+00:00
        }
    ]
    ```

### 3. `GET /api/v1/users/:userId`

- **Description**: Get a specific user by ID.
- **Response**:
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "username": "johndoe",
        "email": "john.doe@example.com",
        "phone": "9999999999",
        "website": "https://johndoe.com",
        "id": "60c72bdf5f1b2c001f1f5c9f",
        "createdAt": 2024-12-03T16:03:23.224+00:00,
        "updatedAt": 2024-12-03T16:03:23.224+00:00
    }
    ```

### 4. `PUT /api/v1/users/:userId`

- **Description**: Update the user's information.
- **Request Body**:
    ```json
    {
        "firstName": "Johnathan",
        "email": "johnathan.doe@example.com",
    }
    ```

- **Response**:
    ```json
    {
        "message": "User updated successfully",
        "user": {
            "firstName": "Johnathan",
            "lastName": "Doe",
            "username": "johndoe",
            "email": "johnathan.doe@example.com",
            "phone": "9999999999",
            "website": "https://johndoe.com",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T18:25:29.224+00:00
        }
    }
    ```

### 5. `DELETE /api/v1/users/:userId`

- **Description**: Delete a user by ID.
- **Response**:
    ```json
    {
        "message": "User deleted successfully"
    }
    ```

The following API endpoints are available for `products`:

### 1. `POST /api/v1/products`

- **Description**: Create a new product.
- **Request Body**: 
    ```json
    {
        "name": "New TV",
        "description": "Doe",
        "price": 1999.99,
        "stock": 10,
        "category": "TV",
    }
    ```
- **Response**:
    ```json
    {
        "message": "Product was created successfully",
        "user": {
            "name": "New TV",
            "description": "Doe",
            "price": 1999.99,
            "stock": 10,
            "category": "TV",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T16:03:23.224+00:00
        }
    }
    ```

### 2. `GET /api/v1/products`

- **Description**: Get a list of all products.
- **Response**:
    ```json
    [
        {
            "name": "New TV",
            "description": "Doe",
            "price": 1999.99,
            "stock": 10,
            "category": "TV",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T16:03:23.224+00:00
        }
    ]
    ```

### 3. `GET /api/v1/products/category/:categoryName`

- **Description**: Get a list of all products by category.
- **Response**:
    ```json
    [
        {
            "name": "New TV",
            "description": "Doe",
            "price": 1999.99,
            "stock": 10,
            "category": "TV",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T16:03:23.224+00:00
        }
    ]
    ```


### 4. `GET /api/v1/products/:productId`

- **Description**: Get a specific product by ID.
- **Response**:
    ```json
    {
        "name": "New TV",
        "description": "Doe",
        "price": 1999.99,
        "stock": 10,
        "category": "TV",
        "id": "60c72bdf5f1b2c001f1f5c9f",
        "createdAt": 2024-12-03T16:03:23.224+00:00,
        "updatedAt": 2024-12-03T16:03:23.224+00:00
    }
    ```

### 5. `PUT /api/v1/users/:userId`

- **Description**: Update the product's information.
- **Request Body**:
    ```json
    {
        "name": "Sansumg UHD TV 65\"",
    }
    ```

- **Response**:
    ```json
    {
        "message": "Product updated successfully",
        "user": {
            "name": "Sansumg UHD TV 65\"",
            "description": "Doe",
            "price": 1999.99,
            "stock": 10,
            "category": "TV",
            "id": "60c72bdf5f1b2c001f1f5c9f",
            "createdAt": 2024-12-03T16:03:23.224+00:00,
            "updatedAt": 2024-12-03T18:25:29.224+00:00
        }
    }
    ```


### 6. `DELETE /api/v1/product/:productId`

- **Description**: Delete a product by ID.
- **Response**:
    ```json
    {
        "message": "Product deleted successfully"
    }
    ```


## Collaboration

Feel free to fork this project and submit pull requests. Contributions are welcome to help improve this API.

### Steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using this project! If you have any questions or need further assistance, feel free to open an issue or contact the repository owner.
