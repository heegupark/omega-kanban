import mongoose from 'mongoose';

declare let process: {
  env: {
    MONGODB_URL: string;
  };
};

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
