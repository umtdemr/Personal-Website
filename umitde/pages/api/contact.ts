import type { NextApiRequest, NextApiResponse } from "next"


export default function contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    require('dotenv').config()
    console.log(req.body);
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: parseInt(process.env.mail_port!),
        host: process.env.mail_host,
        auth: {
          user: process.env.mail_acc,
          pass: process.env.mail_password,
        },
        secure: true,
    });
}