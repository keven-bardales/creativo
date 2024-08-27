"use server";
import * as z from "zod";

import Nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { dialogContactFormSchema } from "../components/shared/contact/components/dialog-contact.form";
import CreativoThankYouEmail from "@root/emails/thanks-contact-email";

export default async function newCustomerContactAction(values: z.infer<typeof dialogContactFormSchema>) {
  try {
    await sendEmail(values);

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
