import type { NextApiRequest, NextApiResponse } from "next"

const nodemailer = require('nodemailer')
require('dotenv').config()

export default async function contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("istek alındı");
    // const transporter = nodemailer.createTransport({
    //     port: parseInt(process.env.mail_port!),
    //     host: process.env.mail_host,
    //     auth: {
    //       user: process.env.mail_acc,
    //       pass: process.env.mail_password,
    //     },
    //     secure: false,
    // });
    
    const mailMessage = `
        Sent by: ${req.body.name} <${req.body.email}>

        ---
        ${req.body.message}

    `;

    
    
    let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.mail_acc, // generated ethereal user
            pass: process.env.mail_password, // generated ethereal password
        },
    });

    const messageHtml = `
        <div>
            Sent by: <b>${req.body.name}</b> ${req.body.email}<br />
                <br/>
                <br/>
            ---
                <br/>
            ${req.body.message}
        </div>
    `
    
    const mailData = {
        from: 'me@umitde.com',
        to: 'umitde296@gmail.com',
        subject: `Contact - ${req.body.name}`,
        text: mailMessage,
        html: messageHtml
    }
    try {

        let info = await transporter.sendMail(mailData);
    } catch (err) {
        res.status(404).json({
            "sent": false,
            "error": `${err}`
        })
    }
    
    res.status(200).json({
        "sent": true
    });
}