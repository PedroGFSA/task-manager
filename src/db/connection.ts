import mongoose from "mongoose";

const connection = (url: string | undefined) => {
  if (url) {
    mongoose.connect(url);
  }
}

export default connection;