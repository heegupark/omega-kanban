import { NextApiRequest, NextApiResponse } from 'next';
import Checklist from '../../middleware/models/checklist';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { cardId, checklist } = request.body;
  try {
    const newChecklist = new Checklist({ cardId, checklist });
    await newChecklist.save();
    try {
      return response.status(200).json({ success: true, data: newChecklist });
    } catch (e) {
      return response.status(500).json({
        success: false,
        message: 'failed to add a checklist',
      });
    }
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add a checklist' });
  }
};
