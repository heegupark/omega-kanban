import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../middleware/models/card';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  const updates = Object.keys(request.body);
  const allowedUpdates = [
    '_id',
    'columnId',
    'cardTitle',
    'note',
    'isCardCompleted',
    'isArchived',
    'dueDate',
  ];

  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return response.status(400).send({ error: 'Invalid card updates!' });
  }

  try {
    const newCard = await Card.findOne({ _id });
    if (!newCard) {
      return response.status(404).send({ error: 'Failed to find a card' });
    }
    updates.forEach(
      (update) =>
        ((newCard as Record<string, any>)[update] = request.body[update])
    );
    await newCard.save();
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to update a card ' });
  }
};
