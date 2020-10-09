import { NextApiRequest, NextApiResponse } from 'next';
import Checklist from '../../middleware/models/checklist';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  try {
    await Checklist.deleteOne({ _id });
    return response
      .status(201)
      .json({ success: true, message: 'successfully deleted' });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to delete a checklist' });
  }
};
