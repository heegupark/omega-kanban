import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  roomname: string;
}

const roomSchema: Schema = new mongoose.Schema(
  {
    roomname: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: String,
      required: true,
      trim: true,
    },
    participants: [
      {
        username: {
          type: String,
          required: true,
        },
        created: {
          type: Date,
          default: Date.now,
        },
        updated: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    messages: [
      {
        username: {
          type: String,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
        created: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// if (!modelAlreadyDeclared()) {
//   const Room = mongoose.model<IRoom>('Room', roomSchema);
//   // export default Room;
// }

// function modelAlreadyDeclared() {
//   try {
//     mongoose.model('Room'); // it throws an error if the model is still not defined
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
const Room = mongoose.models.Room || mongoose.model<IRoom>('Room', roomSchema);
export default Room;
