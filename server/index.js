// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const UserModel = require('./model/Users.js');
// const DataModel = require('./model/graph.js');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://tezodipta04:tezodipta04@cluster0.engiim1.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Failed to connect to MongoDB', err);
// });

// // Define a route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the server!');
// });

// // Define a route to get users
// app.get('/getUsers', (req, res) => {
//   UserModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// app.get('/getgraph', (req, res) => {
//   DataModel.find()
//     .then(googles => res.json(googles))
//     .catch(err => res.status(500).json({ error: err.message }));
// });



// app.listen(5000, () => {
//   console.log('Server has started on port 5000!');
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/Users');
const DataModel = require('./model/graph');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ayushkhatri362:ayushkhatri217@mernauth.vwr9uuk.mongodb.net/mernauth?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

app.get('/getUsers', (req, res) => {
  UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/getGraph', (req, res) => {
  DataModel.find()
    .then(google => res.json(google))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(5000, () => {
  console.log('Server has started on port 5000!');
});
