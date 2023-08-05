import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch(
    "https://discord.com/api/webhooks/1075986457958813806/kZtzOInNHBQxnRnOS0aoavmnN89EjmHVhJn_rlB1KOCPzJ_GqL0GG-N-3bgc3jCXG2cR",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "<@245750610115297300>",
        embeds: [
          {
            title: "Novo Lead",
            color: 9248252,
            fields: [
              {
                name: "Nome",
                value: req.body.name,
              },
              {
                name: "Email",
                value: req.body.email,
              },
              {
                name: "Whatsapp",
                value: req.body.whatsapp,
              },
            ],
            footer: {
              text: "Referência: https://leozin.vercel.app",
            },
          },
        ],
      }),
    }
  )
    .then((response) => {
      res.status(204).json({});
    })
    .catch((err) => {
      res.status(500).json({});
    });
}
