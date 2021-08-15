import dotenv from "dotenv";
dotenv.config();

export default {
    PORT_SERVER: process.env.PORT_SERVER || 4000,
    DB: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASS: process.env.DB_PASS,
        NAME: process.env.DB_NAME,
        PORT: process.env.FB_PORT || "5432",
    }
}