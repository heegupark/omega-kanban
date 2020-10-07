import { NextApiRequest, NextApiResponse } from 'next';
import Router from '../../middleware/models/router';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, project } = request.body;
  try {
    const router = await Router.findOne({ _id, project });
    if (!router) {
      return response.status(404).json({
        success: false,
        message: 'router not found',
      });
    }
    return response.status(200).json({ success: true, data: router });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to get a router' });
  }
};
