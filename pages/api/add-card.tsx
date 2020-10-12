import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../middleware/models/card';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { columnId, cardTitle } = request.body;
  try {
    const cards = await Card.find({ columnId });
    const count = cards.length;
    const newCard = new Card({ columnId, cardTitle, order: count });
    await newCard.save();
    return response.status(200).json({
      success: true,
      data: { ...newCard._doc, checklists: [], activities: [] },
    });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add a card' });
  }
};
