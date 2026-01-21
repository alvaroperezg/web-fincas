import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, website } = await req.json();
    if (website && String(website).trim() !== "") {
      return NextResponse.json({ ok: true });
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.MAIL_USER}>`,
      to: "fincasdobleg@gmail.com",
      replyTo: email,
      subject: `Nueva consulta web - ${name}`,
      html: `
        <h3>Nueva consulta recibida</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "-"}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
