import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend client with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, businessType, city, phone } = body;

    // Basic validation
    if (!name || !email || !businessName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      // For free tier without a verified domain, use standard onboarding address
      from: 'Cited Leads <onboarding@resend.dev>',
      // The email address where you want to receive these leads:
      to: process.env.NOTIFICATION_EMAIL as string,
      subject: `🔥 New AI Visibility Audit Request from ${name}`,
      html: `
        <h2>New Lead!</h2>
        <p>You have received a new request for an AI Visibility Audit from the Cited website.</p>
        <hr />
        <h3>Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Business Name:</strong> ${businessName}</li>
          <li><strong>Business Type:</strong> ${businessType}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Success', data }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
