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
        $match: {
          category: 'normal',
        },
      },
      {
        $lookup: {
          from: 'cards',
          let: { id: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$columnId', '$$id'] } } },
            { $match: { $expr: { $eq: ['$isArchived', false] } } },
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

    const archive = await Column.aggregate([
      {
        $match: {
          projectId: ObjectId(_id),
        },
      },
      {
        $match: {
          category: 'archive',
        },
      },
      {
        $lookup: {
          from: 'cards',
          let: { id: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$columnId', '$$id'] } } },
            { $match: { $expr: { $eq: ['$isArchived', true] } } },
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
    return response.status(200).json({ success: true, columns, archive });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to get a board data' });
  }
};
