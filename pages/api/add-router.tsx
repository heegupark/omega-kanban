import { NextApiRequest, NextApiResponse } from 'next';
import Router from '../../middleware/models/router';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { project } = request.body;
  try {
    const newProject = new Router({ project });
    await newProject.save();
    try {
      return response.status(200).json({ success: true, data: newProject });
    } catch (e) {
      return response.status(500).json({
        success: false,
        message: 'failed to add router',
      });
    }
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add router' });
  }
};
