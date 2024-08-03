import mongoose, { connection } from 'mongoose'

export async function setupMongo(): Promise<void> {
    try {
        if (mongoose.connection.readyState === 1) {
            return
        }

        console.log('🎲 Connecting to DB...')
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log('👽 Connected!')
    }catch{
        throw new Error('🚨 Error connecting to DB')
    }

}
