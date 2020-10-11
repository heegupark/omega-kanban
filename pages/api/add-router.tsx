import { NextApiRequest, NextApiResponse } from 'next';
import Router from '../../middleware/models/router';
import Column from '../../middleware/models/column';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { project } = request.body;
  try {
    const newProject = new Router({ project });
    // await newProject.save();
    try {
      try {
        const planColumn = new Column({
          projectId: newProject._id,
          title: 'Plan',
          colorIndex: 0,
        });
        await planColumn.save();

        const progressColumn = new Column({
          projectId: newProject._id,
          title: 'Progress',
          colorIndex: 1,
        });
        await progressColumn.save();

        const completeColumn = new Column({
          projectId: newProject._id,
          title: 'Complete',
          colorIndex: 2,
        });
        await completeColumn.save();

        const archiveColumn = new Column({
          projectId: newProject._id,
          title: 'Archive',
          colorIndex: 0,
          category: 'archive',
        });
        await archiveColumn.save();

        newProject.columnOrder.push(planColumn);
        newProject.columnOrder.push(progressColumn);
        newProject.columnOrder.push(completeColumn);

        await newProject.save();

        return response.status(200).json({ success: true, data: newProject });
      } catch (e) {
        return response.status(500).json({
          success: false,
          message: 'failed to create basic columns',
        });
      }
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
