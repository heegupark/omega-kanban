import { NextApiRequest, NextApiResponse } from 'next';
import Checklist from '../../middleware/models/checklist';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, checklistContent } = request.body;
  try {
    await Checklist.updateOne({ _id }, { $set: { checklistContent } });
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to update a checklist' });
  }
};
