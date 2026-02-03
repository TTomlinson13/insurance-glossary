# Google Analytics 4 Custom Reports & Dashboards Guide

This guide shows you how to create custom reports and dashboards in GA4 specifically tailored for your insurance glossary website to track the metrics that matter most.

## Why Custom Reports?

**Standard GA4 reports** show general website metrics, but **custom reports** let you:
- Track insurance-specific engagement (chatbot usage, calculator interactions)
- Monitor content performance (glossary terms vs. blog posts vs. state pages)
- Measure educational value (scroll depth, time on educational content)
- Identify conversion opportunities (high-engagement users, popular calculators)

## Part 1: Set Up Custom Events (Already Implemented!)

Your insurance glossary now tracks these custom events:

### Event 1: `chatbot_opened`
**Tracks**: When users open the AI chatbot
**Parameters**:
- `event_category`: "engagement"

### Event 2: `chatbot_message`
**Tracks**: When users send messages in the chatbot
**Parameters**:
- `message_length`: Length of the message
- `message_count`: Number of messages in the conversation

### Event 3: `calculator_used`
**Tracks**: When users interact with any of the 3 calculators
**Parameters**:
- `calculator_type`: "deductible_impact", "coverage_gap_analyzer", or "life_insurance_estimator"
- Calculator-specific parameters (deductible amount, coverage amounts, age, etc.)

### Event 4: `blog_scroll`
**Tracks**: When users scroll through blog posts
**Parameters**:
- `percent_scrolled`: 25, 50, 75, or 100
- `article_title`: Title of the blog post

## Part 2: Create Custom Dashboards

### Dashboard 1: Content Performance Dashboard

**Purpose**: Track which insurance content performs best

**How to Create**:
1. In GA4, go to "Explore" (left sidebar)
2. Click "Blank" to create a new exploration
3. Name it "Insurance Content Performance"
4. Set up the following:

**Dimensions to Add**:
- Page title
- Page path
- Landing page
- Content group (if configured)

**Metrics to Add**:
- Views
- Users
- Average engagement time
- Scroll depth (custom metric)
- Bounce rate

**Visualization**: Table

**Segments to Create**:
- **Glossary Term Visitors**: Users who viewed `/term/*` pages
- **Blog Readers**: Users who viewed `/blog/*` pages
- **Calculator Users**: Users who triggered `calculator_used` event
- **State Page Visitors**: Users who viewed state-specific pages

**How to Use**:
- Sort by "Average engagement time" to find most engaging content
- Identify underperforming glossary terms (low engagement time)
- Find popular blog topics for future content ideas

### Dashboard 2: User Engagement Dashboard

**Purpose**: Measure how users interact with educational tools

**How to Create**:
1. Go to "Explore" → "Blank"
2. Name it "User Engagement Metrics"

**Dimensions**:
- Event name
- Calculator type (custom parameter)
- Percent scrolled (custom parameter)

**Metrics**:
- Event count
- Users
- Events per user
- Average engagement time

**Visualization**: Bar chart + Table

**Key Questions to Answer**:
- Which calculator is most popular?
- What percentage of blog readers scroll to 75%+?
- How many users engage with the chatbot?
- What's the average messages per chatbot session?

### Dashboard 3: Conversion Funnel Dashboard

**Purpose**: Track user journey from discovery to engagement

**How to Create**:
1. Go to "Explore" → "Funnel exploration"
2. Name it "Insurance Education Funnel"

**Funnel Steps**:
1. **Step 1**: Page view (any page)
2. **Step 2**: Viewed glossary term (`/term/*`)
3. **Step 3**: Engaged with tool (chatbot OR calculator)
4. **Step 4**: Viewed multiple pages (2+ pages)
5. **Step 5**: High engagement (3+ minutes on site)

**Breakdown Dimension**: Traffic source

**How to Use**:
- Identify where users drop off
- See which traffic sources bring most engaged users
- Optimize pages with high drop-off rates

### Dashboard 4: SEO Performance Dashboard

**Purpose**: Monitor organic search performance

**How to Create**:
1. Go to "Explore" → "Blank"
2. Name it "SEO & Organic Traffic"

**Dimensions**:
- Session source/medium
- Landing page
- Device category
- Country

**Metrics**:
- Sessions
- New users
- Engagement rate
- Average session duration
- Pages per session

**Filter**: Session source/medium = "google / organic"

**Segments**:
- **Organic Search Users**: Users from Google organic
- **High-Value Organic**: Organic users with 3+ page views
- **Mobile Organic**: Organic users on mobile devices

**How to Use**:
- Track organic traffic growth month-over-month
- Identify top-performing landing pages from search
- Monitor mobile vs. desktop organic performance

## Part 3: Create Custom Metrics

### Custom Metric 1: Calculator Engagement Rate

**Formula**: (Users who used calculator ÷ Total users) × 100

**How to Create**:
1. Go to "Admin" → "Custom definitions" → "Custom metrics"
2. Click "Create custom metric"
3. Name: "Calculator Engagement Rate"
4. Event parameter: `calculator_used` (event count)
5. Scope: Event

### Custom Metric 2: Average Chatbot Messages

**Formula**: Total chatbot messages ÷ Chatbot sessions

**How to Create**:
1. Go to "Admin" → "Custom definitions" → "Custom metrics"
2. Click "Create custom metric"
3. Name: "Average Chatbot Messages"
4. Event parameter: `message_count` from `chatbot_message` event
5. Scope: Event

### Custom Metric 3: Blog Completion Rate

**Formula**: (Users who scrolled 100% ÷ Blog viewers) × 100

**How to Create**:
1. Go to "Admin" → "Custom definitions" → "Custom metrics"
2. Click "Create custom metric"
3. Name: "Blog Completion Rate"
4. Event parameter: `percent_scrolled` = 100 from `blog_scroll` event
5. Scope: Event

## Part 4: Set Up Audiences for Remarketing

### Audience 1: Engaged Insurance Learners

**Criteria**:
- Viewed 3+ glossary terms OR
- Used any calculator OR
- Scrolled 75%+ on blog post

**Use Case**: Target with advanced insurance content

### Audience 2: Calculator Users

**Criteria**:
- Triggered `calculator_used` event

**Use Case**: Target with related insurance products or deeper educational content

### Audience 3: Chatbot Engagers

**Criteria**:
- Triggered `chatbot_opened` AND `chatbot_message` events

**Use Case**: Highly engaged users seeking personalized help

### Audience 4: High-Intent Visitors

**Criteria**:
- Visited state-specific page AND
- Used calculator AND
- Spent 5+ minutes on site

**Use Case**: Most likely to need insurance (for future monetization)

**How to Create Audiences**:
1. Go to "Admin" → "Audiences"
2. Click "New audience"
3. Click "Create a custom audience"
4. Add conditions based on criteria above
5. Save and wait 24-48 hours for data to populate

## Part 5: Automated Reports & Alerts

### Set Up Email Reports

1. Go to any report or exploration
2. Click the "Share" icon (top right)
3. Click "Schedule email"
4. Configure:
   - **Frequency**: Weekly or Monthly
   - **Recipients**: Your email
   - **Format**: PDF
   - **Include**: Link to report

**Recommended Weekly Reports**:
- Content Performance Dashboard (every Monday)
- User Engagement Dashboard (every Friday)

**Recommended Monthly Reports**:
- SEO Performance Dashboard (1st of month)
- Conversion Funnel Dashboard (1st of month)

### Set Up Custom Alerts

1. Go to "Admin" → "Custom Insights"
2. Click "Create"
3. Configure alert conditions

**Recommended Alerts**:

**Alert 1: Traffic Drop**
- Condition: Sessions decrease >20% week-over-week
- Action: Email notification
- Purpose: Catch sudden traffic issues

**Alert 2: Calculator Usage Spike**
- Condition: `calculator_used` events increase >50% day-over-day
- Action: Email notification
- Purpose: Identify viral calculator content

**Alert 3: Low Blog Engagement**
- Condition: Average scroll depth <25% for new blog posts
- Action: Email notification
- Purpose: Flag underperforming content for optimization

## Part 6: Key Reports to Check Weekly

### Monday: Content Review
**Report**: Content Performance Dashboard
**Look For**:
- Top 10 glossary terms by views
- Blog posts with high engagement time
- Pages with low bounce rate

**Actions**:
- Create more content similar to top performers
- Update underperforming glossary terms
- Promote high-engagement blog posts

### Wednesday: Engagement Check
**Report**: User Engagement Dashboard
**Look For**:
- Calculator usage trends
- Chatbot interaction rates
- Blog scroll depth metrics

**Actions**:
- Optimize calculator UX if usage is low
- Improve chatbot prompts if engagement drops
- Enhance blog formatting if scroll depth is low

### Friday: SEO Performance
**Report**: SEO Performance Dashboard (+ Search Console)
**Look For**:
- Organic traffic trends
- Top landing pages from search
- Keyword rankings (from Search Console)

**Actions**:
- Identify quick-win keywords (position 11-20)
- Optimize meta titles/descriptions for low-CTR pages
- Plan next week's content based on search queries

## Part 7: Advanced Analysis Techniques

### Cohort Analysis: User Retention

**Purpose**: See if users return to learn more

**How to Create**:
1. Go to "Explore" → "Cohort exploration"
2. Set cohort by "First visit date"
3. Measure "Return visits" over time
4. Breakdown by "Acquisition source"

**Insight**: If organic search users return more than social media users, focus on SEO.

### Path Analysis: User Journey

**Purpose**: Understand how users navigate your site

**How to Create**:
1. Go to "Explore" → "Path exploration"
2. Set starting point: Homepage OR any glossary term
3. Show next 3-4 steps
4. Identify common paths

**Insight**: If users go Homepage → Glossary Term → Calculator, place calculator CTAs on glossary pages.

### Segment Overlap: Multi-Tool Users

**Purpose**: Find users who use multiple features

**How to Create**:
1. Go to "Explore" → "Segment overlap"
2. Add segments:
   - Calculator users
   - Chatbot users
   - Blog readers
3. See overlap

**Insight**: Users who engage with multiple tools are most valuable. Create content that encourages multi-tool usage.

## Part 8: Benchmarking & Goals

### Set Baseline Metrics (Month 1)

Track these for your first full month:
- Total sessions
- Average engagement time
- Calculator usage rate
- Chatbot open rate
- Blog completion rate (100% scroll)

### Set Growth Goals (Month 2-6)

| Metric | Month 1 Baseline | Month 6 Goal | Growth |
|--------|------------------|--------------|--------|
| Organic Sessions | 1,000 | 5,000 | +400% |
| Calculator Usage Rate | 5% | 15% | +200% |
| Chatbot Open Rate | 10% | 25% | +150% |
| Blog Completion Rate | 20% | 40% | +100% |
| Average Engagement Time | 2 min | 4 min | +100% |

### Monthly Goal Tracking

Create a simple spreadsheet:
- Column A: Metric name
- Column B: Baseline (Month 1)
- Column C-H: Months 2-7
- Column I: Goal (Month 6)
- Column J: % to Goal

## Part 9: Data-Driven Decision Making

### Use Case 1: Which Calculator to Promote?

**Data to Check**:
- Calculator usage by type (from `calculator_used` event)
- Average engagement time on calculator page
- Bounce rate on calculator page

**Decision**:
- If "Deductible Impact Calculator" has 2x more usage than others → Feature it prominently on homepage
- If "Coverage Gap Analyzer" has highest engagement time → Create blog post explaining how to use it

### Use Case 2: Which Blog Topics to Write?

**Data to Check**:
- Top glossary terms by views (users want to learn about these)
- Search Console queries with high impressions, low clicks (content gaps)
- Blog posts with highest scroll depth (successful formats)

**Decision**:
- If "Deductible" is #1 glossary term → Write blog post "Understanding Deductibles: A Complete Guide"
- If Search Console shows "umbrella insurance explained" has high impressions → Create dedicated blog post
- If listicle-style posts have 80% scroll depth → Use that format more

### Use Case 3: Where to Place CTAs?

**Data to Check**:
- Path analysis (where users go after each page)
- Exit pages (where users leave the site)
- Heatmaps (if using Hotjar/Microsoft Clarity)

**Decision**:
- If users often go Glossary → Blog → Exit → Add "Related Blog Posts" section to glossary pages
- If calculator page has high exit rate → Add "Learn More" links to related glossary terms

## Part 10: Troubleshooting & Best Practices

### Issue: Events Not Showing Up

**Symptoms**: Custom events don't appear in reports

**Solutions**:
1. Check DebugView in GA4 (Admin → DebugView)
2. Verify `gtag` is loaded (check browser console)
3. Wait 24-48 hours for data to populate
4. Test events in incognito mode (ad blockers may interfere)

### Issue: Low Data Quality

**Symptoms**: High bounce rate, low engagement time

**Solutions**:
1. Exclude internal traffic (Admin → Data Filters)
2. Filter out bot traffic (Admin → Data Settings → Data collection)
3. Set up cross-domain tracking if using subdomains

### Best Practices

1. **Review data weekly**, not daily (daily data is noisy)
2. **Compare week-over-week**, not day-over-day
3. **Use segments** to understand different user types
4. **Set up annotations** for major changes (new blog posts, design updates)
5. **Export data monthly** for long-term trend analysis

## Resources

- [GA4 Explore Reports](https://support.google.com/analytics/answer/9327972)
- [Custom Metrics & Dimensions](https://support.google.com/analytics/answer/10075209)
- [Audience Builder](https://support.google.com/analytics/answer/9267572)
- [GA4 Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)

---

**Next Steps**: After your site is live for 7 days, create your first custom dashboard using the templates above. Review it weekly and adjust your content strategy based on the data.
