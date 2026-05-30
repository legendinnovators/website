import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    await setDoc(doc(db, "email_otps", email), {
      otp,
      expiresAt,
      verified: false,
    });

    await resend.emails.send({
      //from: "Legend Innovators <connect@legendinnovators.com>",
      // To this:
      from: "Legend Innovators <onboarding@resend.dev>",
      to: email,
      subject: "Your Verification Code – Legend Innovators",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <div style="background: #1B2A6B; padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: #F5A623; margin: 0; font-size: 22px;">Legend Innovators</h1>
          </div>
          <h2 style="color: #1B2A6B;">Your Verification Code</h2>
          <p style="color: #6B7280;">Use the code below to verify your email address.</p>
          <div style="background: #FFF8EC; border: 2px solid #F5A623; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0;">
            <span style="font-size: 40px; font-weight: 800; letter-spacing: 12px; color: #1B2A6B;">${otp}</span>
          </div>
          <p style="color: #9CA3AF; font-size: 13px;">This code expires in 5 minutes. Do not share it with anyone.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-email-otp error:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}