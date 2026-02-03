# Weekly Newsletter Digest - Setup Guide

This guide explains how to set up automated weekly newsletter digests for your Insurance Glossary subscribers.

## Overview

The weekly digest system automatically:
- Sends every Monday at 9:00 AM (configurable)
- Features the latest 3 blog posts from the past week
- Includes insurance tips and call-to-actions
- Sends to all active newsletter subscribers

## Setup Instructions

### Option 1: Manual Testing (Immediate)

You can manually trigger a weekly digest send from the admin dashboard:

1. Go to `/admin/newsletter/compose`
2. Click "Generate Weekly Digest" button (to be added)
3. Review the auto-generated content
4. Click "Send" to deliver to all active subscribers

### Option 2: Automated Schedule (Recommended)

To set up automated weekly sending using Manus scheduled tasks:

1. **Create the scheduled task:**
   - The task will call the `sendWeeklyDigest()` function
   - Located in `server/_core/weeklyDigest.ts`

2. **Configure schedule:**
   - Use cron expression: `0 0 9 * * 1` (Every Monday at 9:00 AM)
   - Or use interval: 604800 seconds (7 days) with repeat enabled

3. **Test the schedule:**
   - Run a test send to verify email formatting
   - Check that blog posts are correctly fetched
   - Confirm all active subscribers receive the email

### Option 3: External Cron Service

If you prefer using an external service like Cron-job.org or EasyCron:

1. Create an API endpoint in your server that calls `sendWeeklyDigest()`
2. Set up the external cron service to hit that endpoint weekly
3. Add authentication to prevent unauthorized access

## Weekly Digest Content

The automated digest includes:

### 1. Latest Blog Posts (3)
- Fetches posts published in the past 7 days
- Falls back to 3 most recent posts if none in past week
- Includes title, excerpt, and "Read More" link

### 2. Insurance Tip
- Rotating educational content
- Currently features deductible information
- Can be customized in `server/_core/weeklyDigest.ts`

### 3. Call-to-Actions
- Browse Glossary (215+ terms)
- Take Insurance Quiz
- Try Calculators
- Read All Articles

### 4. Branding
- Consistent with website design
- Professional email template
- Mobile-responsive layout

## Customization

### Change Send Time

Edit the cron expression:
- `0 0 9 * * 1` - Monday 9:00 AM
- `0 0 9 * * 3` - Wednesday 9:00 AM
- `0 0 18 * * 5` - Friday 6:00 PM

### Modify Content

Edit `server/_core/weeklyDigest.ts`:

```typescript
// Change number of featured posts
.limit(5)  // Instead of 3

// Customize the tip section
<p>Your custom insurance tip here...</p>

// Add new sections
<div style="margin: 32px 0;">
  <h3>🎉 New Feature</h3>
  <p>Check out our new insurance calculator!</p>
</div>
```

### Add Dynamic Content

You can enhance the digest with:
- Most viewed glossary terms this week
- User engagement stats
- Seasonal insurance tips
- Upcoming insurance deadlines

## Testing

Before enabling automated sending:

1. **Test with your own email:**
   ```typescript
   const result = await sendNewsletter({
     to: ["your-email@example.com"],
     subject: digest.subject,
     content: digest.content,
   });
   ```

2. **Check spam score:**
   - Use mail-tester.com
   - Ensure SPF/DKIM records are configured
   - Avoid spam trigger words

3. **Test on multiple devices:**
   - Desktop email clients
   - Mobile devices (iOS/Android)
   - Web email (Gmail, Outlook, Yahoo)

## Monitoring

Track digest performance:

1. **Email Delivery:**
   - Check Resend dashboard for delivery rates
   - Monitor bounce and complaint rates

2. **Engagement:**
   - Add UTM parameters to links
   - Track clicks in Google Analytics
   - Monitor unsubscribe rates

3. **Content Performance:**
   - Which blog posts get most clicks?
   - Which CTAs are most effective?
   - Optimal send time based on open rates

## Troubleshooting

### No subscribers receiving emails
- Check that subscribers have `status: 'active'` in database
- Verify Resend API key is valid
- Check Resend dashboard for error logs

### Emails going to spam
- Configure SPF and DKIM records in Resend
- Add custom domain in Resend (instead of resend.dev)
- Reduce frequency if complaint rate is high

### Wrong blog posts featured
- Check `publishedDate` field in database
- Verify timezone settings
- Adjust date range logic in `weeklyDigest.ts`

## Best Practices

1. **Consistency:** Send same day/time each week
2. **Quality:** Only send if you have valuable content
3. **Testing:** Always test before enabling automation
4. **Monitoring:** Check metrics weekly
5. **Optimization:** A/B test subject lines and content
6. **Compliance:** Include unsubscribe link (already in template)
7. **Timing:** Monday morning or Wednesday afternoon typically perform best

## Next Steps

1. Test manual digest generation
2. Review and customize content
3. Set up automated schedule
4. Monitor first few sends
5. Optimize based on engagement data

For questions or issues, check the Resend documentation or contact support.
