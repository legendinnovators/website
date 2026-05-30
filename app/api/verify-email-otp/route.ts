import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    const ref = doc(db, "email_otps", email);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json({ error: "OTP not found. Please request a new one." }, { status: 404 });
    }

    const data = snap.data();

    if (Date.now() > data.expiresAt) {
      return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 410 });
    }

    if (data.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP. Please try again." }, { status: 400 });
    }

    await updateDoc(ref, { verified: true });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("verify-email-otp error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}