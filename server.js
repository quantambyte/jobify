// packagesm
import express from 'express';
import dotenv from 'dotenv';

// middlewares
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// db
import connectDB from './db/connect.js';

// app
const app = express();
// env
dotenv.config();

// routes
app.get('/', (req, res) => {
  res.send('Hello');
});

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('connect to db');
    // server running
    app.listen(port, () =>
      console.log(`Server is Running on port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
