// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { calendar } from "../../../data/calendar";

export default function handler(req, res) {
  res.status(200).json(calendar);
}
