module.exports = {
  port: 8082,
  // dbURL: 'mongodb://localhost/articles',
  // dbOptions: {useMongoClient: true}
  dbURL: 'mongodb://localhost:27017/articles',
  dbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
};