import mongoose from 'mongoose';
import 'dotenv/config'


export async function setupMongo(): Promise<void> {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        console.log('MONGO_URL:', process.env.MONGO_URL); 
        console.log('🎲 Connecting to DB...');

        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('👽 Connected!');

    } catch (error) {
        console.error('Error details:', error); 
        throw new Error('🚨 Error connecting to DB');
    }
}