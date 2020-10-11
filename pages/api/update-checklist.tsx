import { NextApiRequest, NextApiResponse } from 'next';
import Checklist from '../../middleware/models/checklist';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  const updates = Object.keys(request.body);
  const allowedUpdates = ['_id', 'checklist', 'isChecked'];

  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return response.status(400).send({ error: 'Invalid checklist updates!' });
  }

  try {
    const newChecklist = await Checklist.findOne({ _id });
    if (!newChecklist) {
      return response.status(404).send({ error: 'Failed to find a checklist' });
    }
    updates.forEach(
      (update) =>
        ((newChecklist as Record<string, any>)[update] = request.body[update])
    );
    await newChecklist.save();
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to update a checklist' });
  }
};
