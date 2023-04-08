// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { historial as data } from '../../backend/models/pcdata'

type Data = {
  name: string
}

export default async function historial(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const datos = JSON.parse(req.body)

  const { segundos, minutos, horas, precio } = datos

  await data.create({segundos, minutos, horas, precio})
  res.end();
}
