require('dotenv').config()

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

export default { DB_URL, PORT }