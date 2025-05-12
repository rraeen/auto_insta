const  mongoose  = require("mongoose");
const dotenv=require('dotenv')

dotenv.config();

const getDbNameFromURI = (uri) => {
  if (!uri) return "undefined";
  try {
    return uri.split('/').pop().split('?')[0];
  } catch (e) {
    return "unknown";
  }
};

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1); 
    }
  };

 
  let InsDB;
    console.log(process.env.MONGO_URI_INS)
    if (process.env.MONGO_URI_INS) {
      InsDB = mongoose.createConnection(process.env.MONGO_URI_INS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      InsDB.on('connected', () => {
        console.log('MongoDB connected successfully to:', getDbNameFromURI(process.env.MONGO_URI_INS));
      });
      
      InsDB.on('error', (err) => {
        console.error('InstaChatModal database connection error:', err);
      });
    } else {
      console.error('MONGO_URI_INS environment variable is not defined');
      InsDB = mongoose.connection;
    }

  module.exports = {connectDB,InsDB};
  