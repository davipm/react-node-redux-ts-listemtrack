import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true
});

export default model<IUser>('User', UserSchema);
