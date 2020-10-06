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
  },
  {
    timestamps: true,
  }
);

const Router =
  mongoose.models.Router || mongoose.model<IRouter>('Router', routerSchema);
export default Router;
