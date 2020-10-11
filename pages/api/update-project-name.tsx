import { NextApiRequest, NextApiResponse } from 'next';
import Router from '../../middleware/models/router';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, project } = request.body;
  try {
    await Router.updateOne({ _id }, { $set: { project } });
    return response.status(200).json({ success: true });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to update a project name' });
  }
};
