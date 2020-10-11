import { NextApiRequest, NextApiResponse } from 'next';
import Router from '../../middleware/models/router';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, columnOrder } = request.body;
  try {
    await Router.updateOne({ _id }, { $set: { columnOrder } });
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to reorder columns' });
  }
};
