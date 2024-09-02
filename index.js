import express from 'express';
import { errorHandler, validateUserData } from './Validation.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/user', validateUserData, (req, res) => {
  console.log(req.body); 
  console.log("User created successfully");
  res.send('User created successfully');
});


app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
