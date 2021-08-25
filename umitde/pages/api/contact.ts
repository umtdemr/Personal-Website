import type { NextApiRequest, NextApiResponse } from "next"


export default function contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.body);
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'demo@demo.gmail',
          pass: 'password',
        },
        secure: true,
      })
}