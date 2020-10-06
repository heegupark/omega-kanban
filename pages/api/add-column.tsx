import { NextApiRequest, NextApiResponse } from 'next';
import Column from '../../middleware/models/column';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { projectId, title, colorIndex } = request.body;
  try {
    const newColumn = new Column({ projectId, title, colorIndex });
    await newColumn.save();
    try {
      return response.status(200).json({ success: true, data: newColumn });
    } catch (e) {
      return response.status(500).json({
        success: false,
        message: 'failed to add a column',
      });
    }
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add a column' });
  }
};
