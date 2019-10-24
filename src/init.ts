import App from './app';
import dotenv from 'dotenv'
import './Database/mongoose'
dotenv.config()

App.listen(process.env.PORT, () => console.log(`✅ localhost:4000 is listeing`))