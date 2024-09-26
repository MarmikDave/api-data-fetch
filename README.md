# Product Management API

This is a RESTful API for managing product transactions, built using Node.js, Express, and MongoDB. The API allows users to perform various operations such as fetching products, getting sales statistics, and generating charts based on product sales data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Connects to a MongoDB database to store product data.
- Initializes the database with seed data from a remote JSON file.
- Provides endpoints to:
  - Fetch all products.
  - Get transactions with pagination and search functionality.
  - Retrieve sales statistics for a specific month.
  - Generate bar and pie chart data based on sales.
  - Combine various data responses into a single endpoint.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **Axios**: Promise-based HTTP client for making requests.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/product-management-api.git
   cd product-management-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Ensure you have MongoDB installed and running on your local machine.

4. Update the MongoDB connection string in `server/index.js` if necessary.

## Usage

1. Start the server:

   ```bash
   node server/index.js
   ```

2. The server will run on `http://localhost:5000`.

3. You can use tools like Postman or curl to interact with the API endpoints.

## API Endpoints

- **GET /**: Fetch all products.
- **GET /transactions**: Get transactions with optional search, pagination, and filtering.
- **GET /stats**: Get sales statistics for a specific month.
- **GET /barchart**: Generate bar chart data for a specific month.
- **GET /piechart**: Generate pie chart data for a specific month.
- **GET /combined**: Fetch combined data including statistics, bar chart, and pie chart for a specific month.
