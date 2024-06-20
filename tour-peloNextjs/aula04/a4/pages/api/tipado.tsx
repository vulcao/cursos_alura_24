import type { NextApiHandler } from "next";

export type ResponseData = {
  curso: string;
  instrutor: string;
};

const handler: NextApiHandler<ResponseData> = (req, res) => {
  //res.status(200).json({ curso: "next.js", instrutor: "Dev soutinho" });
  res.status(200).json({ curso: "next.js", instrutor: "Mario Souto" });
};

export default handler;
