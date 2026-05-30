import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, company, phone, email, service, businessType, message } = await req.json();

    // Check email was verified
    const emailOtpRef = doc(db, "email_otps", email);
    const emailOtpSnap = await getDoc(emailOtpRef);

    if (!emailOtpSnap.exists() || !emailOtpSnap.data().verified) {
      return NextResponse.json({ error: "Email not verified" }, { status: 403 });
    }

    // Save enquiry to Firestore
    await addDoc(collection(db, "contact_enquiries"), {
      name,
      company: company || "",
      phone,
      email,
      service,
      businessType: businessType || "",
      message,
      verified: true,
      submittedAt: new Date().toISOString(),
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Legend Innovators <connect@legendinnovators.com>",
      to: email,
      subject: "We received your consultation request!",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <div style="background: #1B2A6B; padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: #F5A623; margin: 0; font-size: 22px;">Legend Innovators</h1>
          </div>
          <h2 style="color: #1B2A6B;">Thank you, ${name}!</h2>
          <p style="color: #6B7280; line-height: 1.7;">
            We've received your consultation request for <strong>${service}</strong>. 
            One of our experts will contact you within 24 hours.
          </p>
          <div style="background: #F9FAFB; border-radius: 10px; padding: 16px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #9CA3AF;">YOUR DETAILS</p>
            <p style="margin: 4px 0; font-size: 14px; color: #1B2A6B;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #1B2A6B;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #1B2A6B;"><strong>Service:</strong> ${service}</p>
          </div>
          <p style="color: #9CA3AF; font-size: 13px;">
            Legend Innovators · Bhubaneswar, Odisha · connect@legendinnovators.com
          </p>
        </div>
      `,
    });

    // Notify the Legend Innovators team
    await resend.emails.send({
      from: "Legend Innovators Website <connect@legendinnovators.com>",
      to: "connect@legendinnovators.com",
      subject: `New Verified Enquiry: ${name} – ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #1B2A6B;">New Verified Enquiry</h2>
          <div style="background: #F9FAFB; border-radius: 10px; padding: 16px;">
            <p style="margin: 4px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Company:</strong> ${company || "N/A"}</p>
            <p style="margin: 4px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 4px 0;"><strong>Service:</strong> ${service}</p>
            <p style="margin: 4px 0;"><strong>Business Type:</strong> ${businessType || "N/A"}</p>
            <p style="margin: 4px 0;"><strong>Message:</strong> ${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("submit-contact error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}