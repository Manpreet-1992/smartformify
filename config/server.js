// server.js

// 1. Force Node to use reliable DNS for SRV resolution
import dns from 'node:dns/promises';
dns.setServers(['1.1.1.1', '8.8.8.8']); // Cloudflare + Google DNS

// 2. Import and configure Express and Mongoose
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
app.use(express.json());

// 3. MongoDB connection logic with robust options
const { MONGO_URI, PORT = 3000 } = process.env;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, // Force IPv4 for better Atlas compatibility :contentReference[oaicite:5]{index=5}
      serverSelectionTimeoutMS: 10000,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
  }
}

connectDB();

// 4. Sample route
app.get('/', (req, res) => res.send('🟢 SmartFormify is up!'));

// 5. Start server
app.listen(PORT, () => console.log(`🚀 SmartFormify running on port ${PORT}`));
