import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  checklist: String;
  isChecked: Boolean;
}

const activitySchema: Schema = new mongoose.Schema(
  {
    cardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Card',
    },
    activity: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Activity =
  mongoose.models.Activity ||
  mongoose.model<IActivity>('Activity', activitySchema);
export default Activity;
