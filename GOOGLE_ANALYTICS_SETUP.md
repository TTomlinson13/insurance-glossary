# Google Analytics 4 Setup Instructions

Google Analytics 4 (GA4) has been integrated into your Insurance Glossary website. Follow these steps to complete the setup:

## Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (gear icon in bottom left)
4. Click "+ Create Property"
5. Enter property details:
   - **Property name**: Insurance Glossary
   - **Reporting time zone**: Your timezone
   - **Currency**: Your currency
6. Click "Next"
7. Fill in business information
8. Click "Create"
9. Accept the Terms of Service

## Step 2: Set Up a Data Stream

1. After creating the property, you'll be prompted to set up a data stream
2. Select "Web"
3. Enter your website details:
   - **Website URL**: https://insurance-glossary.manus.space
   - **Stream name**: Insurance Glossary Website
4. Click "Create stream"

## Step 3: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this Measurement ID

## Step 4: Update Your Website

1. Open `client/index.html` in your project
2. Find the two instances of `G-XXXXXXXXXX` in the Google Analytics code
3. Replace both with your actual Measurement ID
4. Save the file

Example:
```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- After (with your actual ID) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123DEF4');
</script>
```

## Step 5: Deploy Your Changes

1. Save a checkpoint in Manus
2. Click the "Publish" button to deploy your updated website
3. Wait for deployment to complete

## Step 6: Verify Tracking is Working

1. Go back to Google Analytics
2. Navigate to "Reports" → "Realtime"
3. Visit your website in a new browser tab
4. You should see your visit appear in the Realtime report within 30 seconds

## What GA4 Will Track

Your Insurance Glossary will automatically track:

- **Page views**: Every page visit across your site
- **User sessions**: How long users spend on your site
- **Traffic sources**: Where your visitors come from (Google search, social media, direct, etc.)
- **Popular pages**: Which glossary terms and blog posts get the most views
- **User demographics**: Age, gender, location (if available)
- **Device types**: Desktop, mobile, tablet usage
- **Conversion events**: Form submissions, button clicks (can be configured)

## Recommended Custom Events to Track

Consider adding custom event tracking for:

1. **Chatbot interactions**:
```javascript
gtag('event', 'chatbot_message', {
  'message_count': 5
});
```

2. **Term searches**:
```javascript
gtag('event', 'search', {
  'search_term': 'deductible'
});
```

3. **Blog post reads** (track scroll depth):
```javascript
gtag('event', 'scroll', {
  'percent_scrolled': 75
});
```

4. **External link clicks**:
```javascript
gtag('event', 'click', {
  'link_text': 'Learn More',
  'link_url': 'https://example.com'
});
```

## Key Reports to Monitor

### 1. Acquisition Reports
- See which channels drive the most traffic (Organic Search, Direct, Referral, Social)
- Identify top-performing keywords bringing users to your glossary

### 2. Engagement Reports
- **Pages and screens**: Most viewed glossary terms and blog posts
- **Events**: Track form submissions, chatbot usage, downloads
- **Landing pages**: Which pages users enter your site from

### 3. User Reports
- **Demographics**: Age and gender of your audience
- **Tech**: Device types, browsers, screen resolutions
- **Locations**: Geographic distribution of your visitors

### 4. Conversion Tracking
Set up conversions for:
- Chatbot interactions
- External link clicks
- Blog post engagement
- Term page views

## SEO Integration

GA4 data helps improve your SEO strategy:

1. **Identify high-traffic terms**: Expand content around popular glossary terms
2. **Find low-bounce pages**: Replicate successful content patterns
3. **Track search queries**: See what users search for on your site
4. **Monitor referral traffic**: Identify backlink opportunities

## Privacy Compliance

GA4 is configured for privacy compliance:
- Anonymizes IP addresses by default
- Respects Do Not Track signals
- Complies with GDPR and CCPA

Consider adding a cookie consent banner if required in your jurisdiction.

## Troubleshooting

**Not seeing data?**
- Check that your Measurement ID is correct
- Verify the website is published and live
- Disable ad blockers when testing
- Wait 24-48 hours for full data population

**Data looks incomplete?**
- GA4 uses sampling for large datasets
- Some users block analytics scripts
- Check for JavaScript errors in browser console

## Next Steps

1. Set up custom conversions for quote forms
2. Create custom dashboards for key metrics
3. Set up automated email reports
4. Integrate with Google Search Console for SEO insights
5. Configure audience segments for remarketing

For detailed GA4 documentation, visit: https://support.google.com/analytics/
