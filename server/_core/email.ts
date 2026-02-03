import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
};

/**
 * Send an email using Resend
 */
export async function sendEmail(params: SendEmailParams) {
  const { to, subject, html, from = "Insurance Glossary <noreply@updates.resend.dev>" } = params;

  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return {
      success: true,
      id: result.data?.id,
    };
  } catch (error: any) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: error.message || "Failed to send email",
    };
  }
}

/**
 * Send welcome email to new newsletter subscriber
 */
export async function sendWelcomeEmail(email: string) {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Insurance Glossary</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #d4a574 0%, #c8956a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Welcome to Insurance Glossary!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Thank you for subscribing to our newsletter! We're excited to help you understand insurance terminology and make informed decisions.
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                <strong>What you'll receive:</strong>
              </p>
              
              <ul style="margin: 0 0 30px; padding-left: 20px; font-size: 16px; line-height: 1.8; color: #333333;">
                <li>Weekly insurance tips and insights</li>
                <li>New glossary term highlights</li>
                <li>Latest blog articles on insurance topics</li>
                <li>Exclusive educational content</li>
              </ul>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://insurance-glossary.manus.space" style="display: inline-block; padding: 14px 32px; background-color: #d4a574; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Explore the Glossary
                </a>
              </div>
              
              <p style="margin: 30px 0 0; font-size: 14px; line-height: 1.6; color: #666666;">
                Have questions? Just reply to this email—we'd love to hear from you!
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px; font-size: 14px; color: #999999;">
                Insurance Glossary - Your Complete Guide to Insurance Terms
              </p>
              <p style="margin: 0; font-size: 12px; color: #999999;">
                <a href="https://insurance-glossary.manus.space" style="color: #d4a574; text-decoration: none;">Visit Website</a> · 
                <a href="https://insurance-glossary.manus.space/blog" style="color: #d4a574; text-decoration: none;">Read Blog</a>
              </p>
              <p style="margin: 15px 0 0; font-size: 11px; color: #bbbbbb;">
                You're receiving this because you subscribed to our newsletter.<br>
                Don't want these emails? <a href="#" style="color: #999999; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return sendEmail({
    to: email,
    subject: "Welcome to Insurance Glossary! 📚",
    html,
  });
}

/**
 * Send custom newsletter to subscribers
 */
export async function sendNewsletter(params: {
  to: string[];
  subject: string;
  content: string;
}) {
  const { to, subject, content } = params;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #d4a574 0%, #c8956a 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Insurance Glossary Newsletter</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px; font-size: 14px; color: #999999;">
                Insurance Glossary - Your Complete Guide to Insurance Terms
              </p>
              <p style="margin: 0; font-size: 12px; color: #999999;">
                <a href="https://insurance-glossary.manus.space" style="color: #d4a574; text-decoration: none;">Visit Website</a> · 
                <a href="https://insurance-glossary.manus.space/blog" style="color: #d4a574; text-decoration: none;">Read Blog</a>
              </p>
              <p style="margin: 15px 0 0; font-size: 11px; color: #bbbbbb;">
                You're receiving this because you subscribed to our newsletter.<br>
                Don't want these emails? <a href="#" style="color: #999999; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // Send to all subscribers (Resend handles batching)
  return sendEmail({
    to,
    subject,
    html,
  });
}
