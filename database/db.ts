import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1)
      console.log('Using previous connection');

    await mongoose.disconnect();
    console.log(
      'Disconnecting from previous connection and connecting to a new instance'
    );
  }

  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be defined');
  }

  await mongoose.connect(process.env.MONGO_URL);

  mongoConnection.isConnected = 1;
  console.log(`Connected to MongoDB: ${process.env.MONGO_URL}`);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();

  console.log('MongoDB connection closed');
};
