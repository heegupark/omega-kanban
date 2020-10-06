import { NextApiRequest, NextApiResponse } from 'next';
import Activity from '../../middleware/models/activity';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { cardId, activity } = request.body;
  try {
    const newActivity = new Activity({ cardId, activity });
    await newActivity.save();
    try {
      return response.status(200).json({ success: true, data: newActivity });
    } catch (e) {
      return response.status(500).json({
        success: false,
        message: 'failed to add an activity',
      });
    }
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add an activity' });
  }
};
