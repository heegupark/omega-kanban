import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../middleware/models/card';
import ICard from '../../components/interfaces/icard';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { columnId, cards } = request.body;
  try {
    cards.map(async (card: ICard, index: number) => {
      await Card.updateOne(
        { _id: card._id },
        { $set: { columnId, order: index } }
      );
    });
    return response.status(200).json({ success: true });
  } catch (e) {
    return response.status(500).json({
      success: false,
      message: 'failed to reorder cards in a same column',
    });
  }
};
