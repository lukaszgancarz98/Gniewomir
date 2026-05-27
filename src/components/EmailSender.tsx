'use server';

import nodemailer from 'nodemailer';
import { toast } from 'sonner';

export default async function sendEmail({
    email,
    title,
    message,
}: {
    email: string;
    title: string;
    message: string;
}) {
    const transporter = nodemailer.createTransport({
        host: 'email-smtp.eu-north-1.amazonaws.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_SES_USER,
            pass: process.env.NEXT_PUBLIC_SES_PASS,
        },
    });

    const body = () => {
        return `<body>
                    <div class="wrap">
                    <div class="content">
                        <div>
                            ${message}
                        </div>
                    </div>
                    </div>
                </body>
            `;
    };

    const head = `
    <!doctype html>
        <html lang="pl">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>Potwierdzenie zamówienia</title>
            <style>
            body {margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#333;}
            .wrap {max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;}
            .header {background:#111827;color:#fff;padding:20px;font-size:20px;font-weight:bold;}
            .content {padding:20px;font-size:15px;line-height:1.5;}
            .btn {display:inline-block;margin:12px 0;padding:12px 20px;background:#111827;color:#fff;border-radius:6px;text-decoration:none;}
            .footer {background:#f1f3f5;padding:14px 20px;font-size:13px;color:#666;text-align:center;}
            </style>
        </head>
        ${body()}
        </html>
    `;

    transporter
        .sendMail({
            from: `G&G SIMULATIONS <${process.env.NEXT_PUBLIC_SEND_EMAIL}>`,
            to: email,
            subject: title,
            html: head,
        })
        .then(async () => {
            toast.info('Wiadomość została wysłana');
        })
        .catch(() => {
            toast.error('Coś poszło nie tak');
        });
}
