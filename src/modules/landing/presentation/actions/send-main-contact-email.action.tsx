"use server";
import * as z from "zod";

import Nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { dialogContactFormSchema } from "../components/shared/contact/components/dialog-contact.form";
import CreativoThankYouEmail from "@root/emails/thanks-contact-email";

export default async function newCustomerContactAction(values: z.infer<typeof dialogContactFormSchema>) {
  try {
    await sendEmail(values);

    sendUserInfoEmail({
      userFirstname: values.name,
      userEmail: values.email,
      userDescription: values.message,
    });

    return {
      error: null,
      data: values,
    };
  } catch (error) {
    return {
      error: error,
      data: null,
    };
  }
}

async function sendEmail(data: z.infer<typeof dialogContactFormSchema>) {
  const emailHtml = render(<CreativoThankYouEmail userFirstname={data.name} />);
  try {
    const transportEmail = Nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    transportEmail.sendMail({
      from: `"Creativo" <${process.env.SMTP_USER}>`,
      subject: "Gracias por contactarnos - Creativo",
      to: [data.email, process.env.SMTP_USER as string],
      html: emailHtml,
    });
  } catch (error) {}
}

import nodemailer from "nodemailer";
import UserInformationEmail from "@root/emails/user-info.email";

export async function sendUserInfoEmail(options: { userFirstname: string; userEmail: string; userDescription: string }) {
  const { userFirstname, userEmail, userDescription } = options;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "tu_email@gmail.com",
      pass: "tu_password_o_app_password",
    },
  });

  const emailHtml = render(<UserInformationEmail userFirstname={userFirstname} userEmail={userEmail} userDescription={userDescription} />);

  await transporter.sendMail({
    from: `"Creativo" ${process.env.SMTP_USER}`,
    to: process.env.SMTP_USER,
    subject: `Nuevo contacto de usuario - Creativo - ${userFirstname}`,
    html: emailHtml,
  });
}
