const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing JSON

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.post('/register', (req, res) => {
    const { location, severity, contact } = req.body;

    if (!location || !severity || !contact) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Mock response for testing
    const reportId = Math.floor(Math.random() * 10000);
    res.status(201).json({ message: 'Emergency report created', reportId });
});
app.post('/dispatch', (req, res) => {
    const { reportId, teamId } = req.body;

    if (!reportId || !teamId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    res.status(200).json({ message: 'Rescue team dispatched', reportId, teamId });
});
app.get('/status/:reportId', (req, res) => {
    const { reportId } = req.params;

    if (!reportId) {
        return res.status(400).json({ error: 'Missing reportId' });
    }

    res.status(200).json({ message: 'Status retrieved', reportId, status: 'In Progress' });
});
