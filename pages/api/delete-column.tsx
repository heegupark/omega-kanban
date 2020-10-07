import { NextApiRequest, NextApiResponse } from 'next';
import Column from '../../middleware/models/column';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  try {
    await Column.deleteOne({ _id });
    return response
      .status(201)
      .json({ success: true, message: 'successfully deleted' });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to delete a column' });
  }
};
