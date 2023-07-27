const mongoose = require('mongoose');
const URI = 'mongodb+srv://gusthmp:SkHUSy7lHCxrTlMD@cluster0.vnbj0qw.mongodb.net/leila-salao?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(() => console.log('DB is up!!'))
    .catch((err) => console.error('Error connecting to the database:', err));