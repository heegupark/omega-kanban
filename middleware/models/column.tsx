import mongoose, { Schema, Document } from 'mongoose';

export interface IColumn extends Document {
  title: string;
  colorIndex: Number;
}

const columnSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    colorIndex: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Column =
  mongoose.models.Column || mongoose.model<IColumn>('Column', columnSchema);
export default Column;
