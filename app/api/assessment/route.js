import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export const runtime = "nodejs";


export async function POST(request) {
  try {
   const formData = await request.formData();

const name = formData.get("name");
const email = formData.get("email");
const phone = formData.get("phone");
const age = formData.get("age");
const qualification = formData.get("qualification");
const experience = formData.get("experience");
const resume = formData.get("resume"); // file (optional)


    const referer =
      request.headers.get("referer") || "Direct visit";

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ===============================
       1️⃣ ADMIN EMAIL (YOU)
    =============================== */
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,
      subject: `🇦🇺 New Australia PR Lead - ${name}`,
      html: `
        <h2 style="color:#f97316;">New Australia PR Eligibility Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> <strong>${phone}</strong></p>
        <p><strong>Age Group:</strong> ${age}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Experience:</strong> ${experience}</p>

        <p><strong>Landing Page:</strong>
          <a href="${referer}" target="_blank">${referer}</a>
        </p>

        <div style="background:#fef3c7;padding:16px;border-left:5px solid #f59e0b;margin:20px 0;">
          <p style="margin:0;">
            <strong>📞 Call Immediately: +91 91604 49000</strong>
          </p>
        </div>

        <hr />
        <p style="font-size:12px;color:#666;">
          VJC Overseas · Australia PR Leads
        </p>
      `,
       attachments: resume
    ? [
        {
          filename: resume.name,
          content: Buffer.from(await resume.arrayBuffer()),
        },
      ]
    : [],
    });

    /* ===============================
       2️⃣ AUTO-REPLY TO USER
    =============================== */
    await transporter.sendMail({
     from: `"VJC Overseas" <${process.env.EMAIL_USER}>`,

      to: email,
      subject: `✅ Thank You ${name} – Australia PR Assessment Received`,
      html: `
        <h2 style="color:#f97316;">Thank You ${name}!</h2>

        <p>
          We have successfully received your
          <strong>Australia PR eligibility assessment</strong>.
        </p>

        <p>
          One of our certified Australia immigration consultants
          will contact you within <strong>24 hours</strong>.
        </p>

        <div style="background:#dbeafe;padding:20px;border-left:5px solid #3b82f6;margin:20px 0;">
          <p><strong>📞 Need immediate assistance?</strong></p>
          <p style="font-size:22px;margin:8px 0;color:#1e40af;">
            <strong>+91 91604 49000</strong>
          </p>
        </div>

        <p style="font-size:14px;color:#555;">
          Regards,<br />
          <strong>VJC Overseas Team</strong><br />
          <a href="https://vjcoverseas.com">vjcoverseas.com</a><br />
          Hyderabad · Bangalore · USA
        </p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Australia PR email error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
