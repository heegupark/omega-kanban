import mongoose, { Schema, Document } from 'mongoose';

export interface ICard extends Document {
  columnId: mongoose.Schema.Types.ObjectId;
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
    // checklists: [
    //   {
    //     checklist: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       required: false,
    //       ref: 'Checklist',
    //     },
    //   },
    // ],
    // activities: [
    //   {
    //     activity: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       required: false,
    //       ref: 'Activity',
    //     },
    //   },
    // ],
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
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card || mongoose.model<ICard>('Card', cardSchema);
export default Card;
