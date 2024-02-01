// dotenv로 정보 관리 - .env는 .gitignore
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);