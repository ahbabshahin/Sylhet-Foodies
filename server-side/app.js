require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const menuRoutes = require('./routes/menuRoutes');
const restaurantRoutes = require('./routes/inventoryRoutes');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/menus', menuRoutes);
app.use('/api/v1/restaurants', restaurantRoutes);

// Error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is listening on port: ${port}`));
	} catch (error) {
		console.log(error);
	}
};

start();
