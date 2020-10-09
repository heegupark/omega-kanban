import { NextApiRequest, NextApiResponse } from 'next';
import Column from '../../middleware/models/column';
require('../../middleware/db/mongoose');
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

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
          let: { columnId: '$columnId' },
          pipeline: [
            {
              $match: {
                'column._id': '$columnId',
              },
            },
            // {
            //   $lookup: {
            //     from: 'checklists',
            //     localField: 'cardId',
            //     foreignField: 'cards._id',
            //     as: 'checklists',
            //   },
            // },
            // {
            //   $lookup: {
            //     from: 'activities',
            //     localField: 'cardId',
            //     foreignField: 'card._id',
            //     as: 'activities',
            //   },
            // },
          ],
          as: 'cards',
        },
      },
    ]).exec();
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
