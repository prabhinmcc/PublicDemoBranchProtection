const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML pages from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// A fallback route for unmatched paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
