import { NextApiRequest, NextApiResponse } from 'next';
import Column from '../../middleware/models/column';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  try {
    const columns = await Column.find({ projectId: _id })
      .populate('cards.columnId')
      .populate('checklists.cardId')
      .populate('activities.cardId')
      .exec();
    if (!columns) {
      return response.status(404).json({
        success: false,
        message: 'data not found',
      });
    }
    return response.status(200).json({ success: true, data: columns });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to get a board data' });
  }
};
