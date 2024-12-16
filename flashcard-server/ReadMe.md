# Flashcard Server

This is the backend server component of the flashcard application. It provides the API endpoints and database connectivity needed to support the flashcard functionality.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

## Getting Started

### Install Dependencies

Before running the server, you need to install the necessary dependencies. Run the following command in the project directory:

```bash
npm install
```

### Run the Dev Server

To start the development server, use the following command:

```bash
npx nodemon index.js
```

This command will start your server and watch for any changes to your project files, restarting the server as needed.

### Environment Variables

- currenty not implemented
Create a `.env` file in the root of your project and add the necessary environment variables. For example:

```
MONGODB_URI=your_mongodb_uri
PORT=your_port_number
```

### API Endpoints

Check running server at http://localhost:5000/ .

Future endpoints:

- **GET /api/flashcards**: Retrieve all flashcards.
- **POST /api/flashcards**: Create a new flashcard.
- **PUT /api/flashcards/:id**: Update a flashcard by ID.
- **DELETE /api/flashcards/:id**: Delete a flashcard by ID.

### Testing

Currently, there are no tests specified. You can add your tests in the `scripts` section of `package.json`.

## License

This project is licensed under the ISC License.
