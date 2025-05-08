import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Received data:", { email, subject, message });

    if (!email || !subject || !message) {
      console.error("Error: Missing required fields");
      return NextResponse.json({ error: "Por favor, preencha todos os campos." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      console.error("Error: RESEND_API_KEY or FROM_EMAIL environment variables not set.");
      return NextResponse.json({ error: "Erro de configuração do servidor." }, { status: 500 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email], // Sending a copy to the sender as well
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Obrigado por entrar em contato!</p>
          <p>Nova mensagem recebida:</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json({ message: "Email enviado com sucesso" }, { status: 200 });

  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return NextResponse.json({ error: "Ocorreu um erro ao enviar o email." }, { status: 500 });
  }
}