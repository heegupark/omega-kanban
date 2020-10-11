import mongoose, { Schema, Document } from 'mongoose';

export interface IRouter extends Document {
  project: string;
}

const routerSchema: Schema = new mongoose.Schema(
  {
    project: {
      type: String,
      required: true,
      trim: true,
    },
    columnOrder: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Column',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Router =
  mongoose.models.Router || mongoose.model<IRouter>('Router', routerSchema);
export default Router;
