import nodemailer from "nodemailer";

type payload = {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  description: string;
  hp?: string;
};

// smtp 정보 확인
function smtpinfo() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_USER &&
    process.env.MAIL_TO,
  );
}
// 이메일 유효성 검사
function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  let body = (await request.json()) as Partial<payload>;
  try {
    if (!body) {
      return new Response("잘못된 요청입니다", { status: 400 });
    }

    // form 데이터
    const fullName = (body.fullName ?? "").trim();
    const company = (body.company ?? "").trim();
    const email = (body.email ?? "").trim();
    const service = (body.service ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const description = (body.description ?? "").trim();
    const hp = (body.hp ?? "").trim();

    if (hp) return new Response(JSON.stringify({ ok: true }));

    // 필수 항목 확인
    if (!fullName || !email || !service || !description) {
      return new Response("필수 항목 누락", { status: 400 });
    }

    if (!smtpinfo()) {
      return new Response("SMTP Not Configured", { status: 500 });
    }

    // https://nodemailer.com/ 문서 참고
    const infotransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP 서버 호스트 정보 필요
      port: parseInt(process.env.SMTP_PORT!), // SMTP 서버 포트 정보 필요
      secure: parseInt(process.env.SMTP_PORT!) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // SMTP 사용자명 필요
        pass: process.env.SMTP_PASS, // SMTP 비밀번호 필요
      },
    });

    const mailTo = process.env.MAIL_TO!;
    const mailFrom = process.env.MAIL_FROM;
    await infotransporter.sendMail({
      from: `"${fullName}" <${mailFrom}>`,
      to: mailTo,
      subject: `[Contact Form] ${service} 문의 from ${fullName}`,
      text:
        `Full Name: ${fullName}\n` +
        `Company: ${company}\n` +
        `Email: ${email}\n ` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n` +
        `Description:${description}`,
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
}
