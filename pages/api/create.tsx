import { NextApiRequest, NextApiResponse } from 'next';
import Room from '../../middleware/models/board';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { boardname, username } = request.body;
  try {
    const newRoom = new Room({
      boardname,
      owner: username,
      participants: { username },
    });
    await newRoom.save();
    return response.status(201).json({ success: true, room: newRoom });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to create a board' });
  }
};
