import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../middleware/models/card';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, cardTitle } = request.body;
  try {
    await Card.updateOne({ _id }, { $set: { cardTitle } });
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to update a card title' });
  }
};
