// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);

    case 'POST':
      return postEntry(req, res);

    default:
      return res
        .status(400)
        .json({ message: 'Non existing API endpoint called' });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: 'descending' });
  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description }: { description: string } = req.body;

  const entry = new Entry({
    description,
  });

  try {
    await db.connect();

    await entry.save();

    await db.disconnect();

    res.status(201).json(entry);
  } catch (err) {
    await db.disconnect();

    res
      .status(500)
      .json({ message: 'There was an error when creating a new entry' });
  }
};
