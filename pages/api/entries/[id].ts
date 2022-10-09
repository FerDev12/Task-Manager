// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntry(req, res);

    case 'PUT':
      return updateEntry(req, res);

    case 'DELETE':
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ message: 'Non existent method' });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();

    const entry = await Entry.findById(id);
    await db.disconnect();

    if (!entry)
      return res.status(400).json({ message: `Entry with id ${id} not found` });

    res.status(200).json(entry);
  } catch (err: any) {
    console.log(err.errors.status);
    await db.disconnect();
    res.status(400).json({ message: err.errors.status });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();

    const entry = await Entry.findById(id);

    if (!entry)
      // should throw an error
      return res.status(400).json({ message: `No entry with id ${id} found` });

    const { description = entry.description, status = entry.status } = req.body;

    entry.set({ description, status });
    await entry.save();

    res.status(200).json(entry);

    await db.disconnect();
  } catch (err: any) {
    console.log(err);
    await db.disconnect();
    res.status(400).json({ message: err.errors.status });
  }
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();
    const entry = await Entry.findById(id);

    if (!entry)
      return res.status(400).json({ message: `No entry with id ${id} found` });

    await entry.delete();
    db.disconnect();

    res.status(204).json(entry);
  } catch (err: any) {
    console.log(err);
    await db.disconnect();
    res.status(400).json({ message: err.errors.status });
  }
};
