import mongoose, { Schema, Document } from 'mongoose';

export interface IChecklist extends Document {
  checklist: String;
  isChecked: Boolean;
}

const checklistSchema: Schema = new mongoose.Schema(
  {
    cardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Card',
    },
    checklist: {
      type: String,
      required: true,
      trim: true,
    },
    isChecked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Checklist =
  mongoose.models.Checklist ||
  mongoose.model<IChecklist>('Checklist', checklistSchema);
export default Checklist;
