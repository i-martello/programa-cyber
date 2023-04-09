import { NextApiRequest, NextApiResponse } from 'next';
import {historial} from '../../backend/models/pcdata'

export default async function getHistorial(req: NextApiRequest, res: NextApiResponse){
  const data = await historial.find().sort({createdAt: -1});  
  res.status(200).json(data);
}