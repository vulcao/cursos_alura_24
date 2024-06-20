import type { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  curso: string;
  instrutor: string;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  res.status(200).json({ curso: "next.js", instrutor: "Dev Soutinho" });
};
