import type { NextApiRequest, NextApiResponse } from "next"

const nodemailer = require('nodemailer')
require('dotenv').config()

export default async function contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const name = req.body.mail_data.name;
    const email = req.body.mail_data.email;
    const message = req.body.mail_data.message;
    // const transporter = nodemailer.createTransport({
    //     port: parseInt(process.env.mail_port!),
    //     host: process.env.mail_host,
    //     auth: {
    //       user: process.env.mail_acc,
    //       pass: process.env.mail_password,
    //     },
    //     secure: false,
    // });

    let testAccount = await nodemailer.createTestAccount();
    const mailMessage = `
        Sent by: ${name} <${email}>

        ---
        ${message}

    `;


    // let transporter = nodemailer.createTransport({
    //     host: "smtp.yandex.ru",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: process.env.mail_acc, // generated ethereal user
    //         pass: process.env.mail_password, // generated ethereal password
    //     },
    // });

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    const messageHtml = `
        <div>
            Sent by: <b>${name}</b> ${email}<br />
                <br/>
                <br/>
            ---
                <br/>
            ${message}
        </div>
    `

    const mailData = {
        from: 'me@umitde.com',
        to: 'umitde296@gmail.com',
        subject: `Contact - ${name}`,
        text: mailMessage,
        html: messageHtml
    }
    try {

        let info = await transporter.sendMail(mailData);
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.captcha_data.response}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({ ...req.body.captcha_data })
        })
            .then(res => res.json())
            .then(res => {
                console.log("GOOGLE")
                console.log(res)
            })
        res.status(200).json({
            "sent": true
        });
    } catch (err) {
        res.status(400).json({
            "sent": false,
            "error": `${err}`
        })

    }
    res.end();
}