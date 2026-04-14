"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendBookingRequest(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not provided";
  const checkin = formData.get("checkin") as string;
  const checkout = formData.get("checkout") as string;
  const guests = formData.get("guests") as string;
  const message = (formData.get("message") as string) || "None";

  if (!name || !email || !checkin || !checkout || !guests) {
    return { error: "Please fill in all required fields." };
  }

  const html = `
    <h2>New Booking Request</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Name</td><td>${name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Email</td><td>${email}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Phone</td><td>${phone}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Check-in</td><td>${checkin}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Check-out</td><td>${checkout}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Guests</td><td>${guests}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Message</td><td>${message}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Little Louisa Website" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_EMAIL || "info@littlelouisa.co.za",
      replyTo: email,
      subject: `Booking Request from ${name} (${checkin} → ${checkout})`,
      html,
    });
    return { success: true };
  } catch {
    return { error: "Failed to send your request. Please try again or email us directly." };
  }
}
