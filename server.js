const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Connect to MongoDB (update this connection string as needed)
mongoose.connect('mongodb://localhost:27017/ticketDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public'

// Define a schema for the ticket
const ticketSchema = new mongoose.Schema({
    route: String,
    dateOfJourney: String,
    selectedSeats: String,
    totalAmount: Number
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// API route to save ticket
app.post('/api/tickets', async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).json({ message: 'Ticket saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving ticket', error: error.message });
    }
});

// Serve the HTML file for ticket confirmation
app.get('/ticket', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tick.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
