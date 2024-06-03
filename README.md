# Ecommerce using React and Spring Boot

## Sport Center Ecommerce Website

This project is an Ecommerce web application built using React for the frontend and Spring Boot for the backend. It is designed to serve as an online platform for a sports center, facilitating the purchase of various sports-related products.

### Technologies Used

- **Frontend:**
  - React
  - Vite
  - TypeScript
  - Material UI


- **Backend:**
  - Spring Boot 3.2.1
  - Java 21
  - Redis (for caching)
  - MySql (for database)
  - JWT Authentication

- **Other:**
  - Docker (for containerization)
 

### Features

- User authentication using JWT.
- Browse and search for sports products.
- Add products to the shopping cart.
- Secure checkout process.
- Integration with Redis for caching to improve performance.
- Containerized deployment using Docker.

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ecommerce-react-springboot.git

2. **Frontend Setup:**
    ```bash
    cd client
    npm install    # Install dependencies
    npm run dev    # Start development server

3. **Backend Setup**

**Set up your Redis server and update the configuration accordingly**

**Update application.properties with your Redis configuration and JWT secret**

**Accessing the Application:**

  Frontend: Open your browser and go to http://localhost:3000.
  Backend: The backend will be running on http://localhost:8282.

**Deployment:**
This project can be deployed using Docker. Dockerfiles are provided for both the frontend and backend. Make sure Docker is installed on your system, and then follow these steps:

Build Docker Images:

  ```bash
  docker-compose up -d 

Run Docker Containers:
    docker run -p 8282:8282
```



**Accessing the Application:**
   ```bash
   mvn clean install
   start server
```
  Frontend: Open your browser and go to http://localhost:3000.
  
  Backend: The backend will be running on http://localhost:8282.
