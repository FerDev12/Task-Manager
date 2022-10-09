import { Schema, model, models, Model } from 'mongoose';
import { Status } from '../interfaces';

export interface IEntry {
  description: string;
  createdAt: number;
  status: Status;
}

const entrySchema = new Schema<IEntry>({
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'finished'],
      message: '{VALUE} is not an allowed value',
    },
    default: Status.pending,
  },
});

const Entry: Model<IEntry> =
  models.Entry || model<IEntry>('Entry', entrySchema);

export default Entry;
