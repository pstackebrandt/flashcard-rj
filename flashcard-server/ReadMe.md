# Flashcard Server

This is the backend server component of the flashcard application. It provides the API endpoints and database connectivity needed to support the flashcard functionality.

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```
MONGO_URI=mongodb://localhost:27017/flashcard-app
```

For testing, use `.env.test`:

```
MONGO_URI=mongodb://localhost:27017/flashcards_test
```

### Run the Server

```bash
npx nodemon index.js
```

### API Endpoints

- **GET /** - Check server status
- **GET /status** - Get detailed server status including:
  - Server status
  - Database connection status
  - Current timestamp

### Testing

Run tests:

```bash
npm test               # Run tests once
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## License

ISC
