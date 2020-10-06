import mongoose, { Schema, Document } from 'mongoose';

export interface ICard extends Document {
  cardTitle: String;
  note: String;
  isCardCompleted: Boolean;
  isArchived: Boolean;
  dueDate: Date;
}

const cardSchema: Schema = new mongoose.Schema(
  {
    columnId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Column',
    },
    cardTitle: {
      type: String,
      required: true,
      trim: true,
    },
    note: {
      type: String,
      default: '',
    },
    isCardCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    isArchived: {
      type: Boolean,
      required: true,
      default: false,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card || mongoose.model<ICard>('Card', cardSchema);
export default Card;
