import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // PostgreSQL
    const sequelize = new Sequelize(process.env.POSTGRES_URI || 'postgres://user:pass@postgres:5432/movies');
    await sequelize.authenticate();
    console.log('PostgreSQL connected');

    // MongoDB (opcional para avaliações/logs)
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/movies');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1);
  }
};
