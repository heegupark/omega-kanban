import { NextApiRequest, NextApiResponse } from 'next';
import Router from '../../middleware/models/router';
import Column from '../../middleware/models/column';
import Card from '../../middleware/models/card';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { projectId, columnId } = request.body;
  try {
    const project = await Router.findOne({ _id: projectId });
    project.columnOrder = project.columnOrder.filter((item: object) => {
      return item.toString() !== columnId;
    });
    await project.save();
    await Column.deleteOne({ columnId });
    await Card.deleteMany({ columnId });

    return response
      .status(201)
      .json({ success: true, message: 'successfully deleted' });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to delete a column' });
  }
};
