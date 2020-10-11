require('../../middleware/db/mongoose');

import { NextApiRequest, NextApiResponse } from 'next';
import Column from '../../middleware/models/column';
import Card from '../../middleware/models/card';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, projectId } = request.body;
  try {
    const column = await Column.findOne({ projectId, category: 'archive' });

    await Card.updateOne(
      { _id },
      { $set: { columnId: ObjectId(column._id), isArchived: true } }
    );
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to archive a card' });
  }
};
