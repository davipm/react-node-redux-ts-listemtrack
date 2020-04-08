import mongoose from "mongoose";

class Database {
  public async connectDatabase(): Promise<void> {
    try {
      const connect = await mongoose.connect(`${process.env.MONGO_DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(
        `MongoDB connected ${connect.connection.host}`.cyan.underline.bold
      );
    } catch (error) {
      console.log(`Error ${error.message}`.red);
      process.exit(1);
    }
  }
}

export default new Database();
