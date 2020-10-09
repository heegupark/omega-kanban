import { NextApiRequest, NextApiResponse } from 'next';
import Column from '../../middleware/models/column';
require('../../middleware/db/mongoose');
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

//http://localhost:8080/5f7fd60d50bd1d8dcf2f75ba/running
//http://localhost:8080/5f7fd77b50bd1d8dcf2f75c0/ask
//http://localhost:8080/5f7fd60d50bd1d8dcf2f75ba/running

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  try {
    const columns = await Column.aggregate([
      {
        $match: {
          projectId: ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: 'cards',
          let: { id: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$columnId', '$$id'] } } },
            {
              $lookup: {
                from: 'checklists',
                let: { id: '$_id' },
                pipeline: [
                  { $match: { $expr: { $eq: ['$cardId', '$$id'] } } },
                  { $sort: { createdAt: 1 } },
                ],
                as: 'checklists',
              },
            },
            {
              $lookup: {
                from: 'activities',
                let: { id: '$_id' },
                pipeline: [
                  { $match: { $expr: { $eq: ['$cardId', '$$id'] } } },
                  { $sort: { createdAt: -1 } },
                ],
                as: 'activities',
              },
            },
          ],
          as: 'cards',
        },
      },
    ]);
    if (!columns) {
      return response.status(404).json({
        success: false,
        message: 'data not found',
      });
    }
    return response.status(200).json({ success: true, data: columns });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to get a board data' });
  }
};
