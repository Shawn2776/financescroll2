// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transactions } from "../../../data/transactions";

export default function handler(req, res) {
  res.status(200).json(transactions);
}
