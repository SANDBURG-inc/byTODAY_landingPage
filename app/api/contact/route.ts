import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, contact, email, organization } = body;

        // Validate required fields
        if (!name || !contact || !email || !organization) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create a transporter
        // Note: In production, you should use environment variables for these values
        const transporter = nodemailer.createTransport({
            // For now, we'll use a mock transport if no credentials are provided
            // This will log the message to the console
            host: process.env.SMTP_HOST || 'smtp.ethereal.email',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER || 'ethereal_user',
                pass: process.env.SMTP_PASS || 'ethereal_pass',
            },
        });

        // If we are in development or no real credentials, we might want to just log it
        // But nodemailer with ethereal or similar will actually try to send.
        // Let's make it robust: if no env vars, we just log to console to simulate success for the user
        // so they can see it working without setup.

        if (!process.env.SMTP_HOST) {
            console.log('--- MOCK EMAIL SENDING ---');
            console.log('To: cto@sandburg.co.kr');
            console.log('Subject: [Landing Page] New Beta Interest');
            console.log(`Name: ${name}`);
            console.log(`Contact: ${contact}`);
            console.log(`Email: ${email}`);
            console.log(`Organization: ${organization}`);
            console.log('--------------------------');

            return NextResponse.json({ success: true });
        }

        // Send mail with defined transport object
        await transporter.sendMail({
            from: `onboarding@resend.dev`, // sender address
            to: 'cto@sandburg.co.kr', // list of receivers
            subject: '[Landing Page] New Beta Interest', // Subject line
            text: `
        Name: ${name}
        Contact: ${contact}
        Email: ${email}
        Organization: ${organization}
      `, // plain text body
            html: `
        <h3>New Beta Interest</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
      `, // html body
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
