const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/greetingsDB');

const greetingSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  greetings: Number,
  imageUrl: String,
  location: String,
});

const Greeting = mongoose.model('Greeting', greetingSchema);

app.get('/api/greetings', async (req, res) => {
  console.log('Received GET request for /api/greetings');
  const greetings = await Greeting.find();
  console.log('Sending response:', greetings);
  res.json(greetings);
});

app.get('/api/greetings/:id', async (req, res) => {
  console.log('Received GET request for /api/greetings/:id');
  const greeting = await Greeting.findById(req.params.id);
  console.log('Sending response:', greeting);
  res.json(greeting);
});

app.post('/api/greetings', async (req, res) => {
  console.log('Received POST request for /api/greetings with body:', req.body);
  const newGreeting = new Greeting(req.body);
  await newGreeting.save();
  console.log('Saved new greeting:', newGreeting);
  res.json(newGreeting);
});

app.put('/api/greetings/:id', async (req, res) => {
  console.log('Received PUT request for /api/greetings/:id with body:', req.body);
  const updatedGreeting = await Greeting.findByIdAndUpdate
    (req.params.id, req.body, { new: true });
  console.log('Updated greeting:', updatedGreeting);
  res.json(updatedGreeting);
});

app.delete('/api/greetings/:id', async (req, res) => {
  console.log('Received DELETE request for /api/greetings/:id');
  const deletedGreeting = await Greeting.findByIdAndDelete(req.params.id);
  console.log('Deleted greeting:', deletedGreeting);
  res.json(deletedGreeting);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});