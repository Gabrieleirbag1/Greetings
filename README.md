# Greetings Application

A full-stack web application built with Angular frontend and Express.js backend API with MongoDB database.

## Project Structure

- `/Server` - Express.js backend API
- `/WebApp` - Angular frontend application

## Prerequisites

- Node.js and npm
- MongoDB running locally on port 27017
- Angular CLI

## Installation

### Backend Setup

```bash
cd Server
npm install
```

### Frontend Setup

```bash
cd WebApp
npm install
```

### Running the Application

1. Start MongoDB server locally.
2. Start the backend server:

```bash
cd Server
npm start
```

The API will be available at [http://localhost:3000](http://localhost:3000).

3. Start the Angular frontend:

```bash
cd WebApp
ng serve
```

The application will be available at [http://localhost:4200](http://localhost:4200).

## API Endpoints

- `GET /api/greetings` - Get all greetings
- `GET /api/greetings/:id` - Get a specific greeting
- `POST /api/greetings` - Create a new greeting
- `PUT /api/greetings/:id` - Update a greeting
- `DELETE /api/greetings/:id` - Delete a greeting

## License

This project is licensed under the MIT License - see the LICENSE file for details.