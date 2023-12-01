require("dotenv").config();
const express = require("express");
const app = express();

// middleware
app.use(express.json());
// app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// const userRoutes = require('./routes/users')
// const clubRoutes = require('./routes/clubs')
// const authRoutes = require('./routes/auth')
// app.use('/api/user', userRoutes)
// app.use('/api/clubs', clubRoutes)
// app.use('/api/auth', authRoutes)

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         // listen for requests
//         app.listen(process.env.PORT, () => {
//             console.log('connected to db & listening on port', process.env.PORT)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })
