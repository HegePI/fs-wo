if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT
const mongodb = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  port = process.env.TEST_PORT
  mongodb = process.env.TEST_MONGODB_URI
}

module.exports = {
  mongodb,
  port
}