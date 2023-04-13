import { NextApiRequest, NextApiResponse } from 'next';
import {historial} from '../../backend/models/pcdata'
import mongoose from 'mongoose'
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Base de datos funcionando");
  } catch (error) {
    console.log(error);
  }
})();

export default async function getHistorial(req: NextApiRequest, res: NextApiResponse){
  const data = await historial.find().sort({createdAt: -1});  
  res.status(200).json(data);
}