# Insurance Glossary TODO

## Completed Features
- [x] Initial glossary with 50+ terms
- [x] Individual term pages with SEO-friendly URLs
- [x] Quote comparison forms
- [x] Commercial insurance terms (30 terms)
- [x] Industry-specific insurance terms (15 terms)
- [x] Business Insurance landing page
- [x] Upgrade to full-stack with backend and database
- [x] Database schema for conversations, messages, and leads
- [x] AI chatbot backend with tRPC router
- [x] AI chatbot UI component
- [x] Chatbot integration on Home and Term pages
- [ ] Chatbot integration on Compare and Business Insurance pages
- [ ] Admin dashboard for viewing leads
- [x] Update QuoteForm to save leads to database

## Pending Features
- [ ] SEO meta tags and structured data
- [ ] Category landing pages (Auto, Health, Life, Property)
- [ ] Analytics integration
- [ ] Email notifications for new leads

## New Changes
- [x] Update chatbot to not push quote connections

## SEO Improvements
- [x] Add meta keywords to homepage
- [x] Add alt text to all images on homepage

## New Insurance Terms
- [x] Add Golf Cart Insurance
- [x] Add Motorcycle Insurance
- [x] Add Jewelry Insurance

## Advanced SEO Features
- [x] Add Open Graph and Twitter Card meta tags
- [x] Implement Schema.org structured data on term pages
- [x] Create XML sitemap generation

## Follow-up Features
- [x] Create admin dashboard for lead management
- [x] Add blog section with SEO articles
- [x] Integrate Google Analytics 4

## New Requirements
- [x] Remove all quote/comparison forms and language
- [x] Remove ComparePage and quote form components
- [x] Update CTAs to focus on education
- [x] Set up actual GA4 measurement ID (instructions provided in GOOGLE_ANALYTICS_SETUP.md)
- [x] Add email notifications for high-value leads
- [x] Expand blog to 10+ articles (skipped - implementing AI generation instead)

## Dynamic Blog Feature
- [x] Implement AI-powered blog article generation
- [x] Add admin interface to generate new articles
- [x] Store generated articles in database

## New Follow-up Tasks
- [x] Research SimplyBusiness.com as competitor
- [x] Extract relevant terms from SimplyBusiness.com
- [x] Generate first AI blog post
- [x] Expand glossary to 200+ terms (now 298 terms!)
- [x] Update GA4 configuration instructions

## Bug Fixes
- [x] Remove duplicate "Surety Bond" term causing React key error

## Duplicate Term Cleanup
- [x] Find all duplicate terms in glossary (found 91 duplicates)
- [x] Remove duplicate "Windstorm Deductible" and all others
- [x] Verify no other duplicates remain (187 unique terms)

## ISO Forms Addition
- [x] Add ISO Special Form (CP 00 30)
- [x] Add ISO Basic Form (CP 00 10)
- [x] Add ISO Broad Form (CP 00 20)
- [x] Add other common ISO forms and terminology (12 new terms added)

## New Enhancements
- [x] Add ACORD forms (ACORD 25, 27, 28, etc.)
- [x] Research state-specific insurance terms
- [x] Add unique terms from Florida, California, Texas, New York, Louisiana, Massachusetts, Michigan, Hawaii
- [x] Create ISO forms reference page at /iso-forms
- [x] Add Admitted vs Non-Admitted Carrier
- [x] Add Surplus Lines terminology
- [x] Update chatbot welcome message to remove sales-oriented language (recommend coverage, connect with quotes)

## Comprehensive Enhancement Package
- [x] Create Florida insurance landing page (/florida-insurance)
- [x] Create California insurance landing page (/california-insurance)
- [x] Create Texas insurance landing page (/texas-insurance)
- [ ] Create New York insurance landing page (/new-york-insurance)
- [ ] Create Illinois insurance landing page (/illinois-insurance)
- [ ] Create Pennsylvania insurance landing page (/pennsylvania-insurance)
- [ ] Add state pages to navigation and sitemap
- [x] Generate blog article: "What is a Deductible in Simple Terms"
- [x] Generate blog article: "Business Insurance for Restaurants Explained"
- [x] Generate blog article: "Understanding Health Insurance Copays vs Coinsurance"
- [x] Generate blog article: "Auto Insurance Coverage Types Explained"
- [x] Generate blog article: "Life Insurance Term vs Whole Life"
- [x] Generate blog article: "Homeowners Insurance What Does It Cover"
- [x] Generate blog article: "Liability Insurance for Small Business"
- [x] Generate blog article: "Workers Compensation Insurance Requirements"
- [x] Generate blog article: "Professional Liability Insurance Who Needs It"
- [x] Generate blog article: "Umbrella Insurance Is It Worth It"
- [x] Generate blog article: "Commercial Property Insurance Guide"
- [x] Generate blog article: "Cyber Insurance for Businesses"
- [x] Generate blog article: "Understanding Insurance Premiums"
- [x] Generate blog article: "How Insurance Claims Work"
- [x] Generate blog article: "Choosing the Right Insurance Agent"
- [x] Build Deductible Impact Calculator
- [x] Build Coverage Gap Analyzer
- [x] Build Insurance Cost Estimator
- [x] Add calculators page to navigation
- [x] Update sitemap with all new pages (state pages, calculators, blog posts auto-included)

## Google Analytics 4 Setup
- [x] Create GA4 account and property
- [x] Get GA4 Measurement ID (G-T9JG7RDWC8)
- [x] Add Measurement ID to website code
- [ ] Verify GA4 tracking is working after deployment

## Analytics Enhancements
- [x] Add custom event tracking for chatbot interactions (open, messages)
- [x] Add custom event tracking for calculator usage (all 3 calculators)
- [x] Add custom event tracking for blog post scroll depth (25%, 50%, 75%, 100%)
- [x] Create Google Search Console integration guide (GOOGLE_SEARCH_CONSOLE_SETUP.md)
- [x] Create custom GA4 reports setup guide (GA4_CUSTOM_REPORTS_GUIDE.md)
- [ ] Test all custom events after deployment

## Analytics Optimization Follow-ups
- [x] Generate complete XML sitemap with all 239 pages (8 static + 215 terms + 16 blog posts)
- [x] Add Schema.org DefinedTerm structured data to glossary terms (already implemented in TermPage.tsx)
- [x] Create automated weekly email reports configuration guide (GA4_EMAIL_REPORTS_SETUP.md)

## Advanced SEO Enhancements
- [x] Create robots.txt file with sitemap reference and crawler guidelines
- [x] Add breadcrumb navigation with Schema.org markup to term pages
- [x] Add breadcrumb navigation with Schema.org markup to blog pages
- [x] Implement FAQ structured data for top 20 glossary terms

## Social Media & UX Enhancements
- [x] Add Open Graph meta tags to index.html (updated with current stats)
- [x] Add Twitter Card meta tags to index.html (updated with current stats)
- [x] Add dynamic OG/Twitter tags to TermPage
- [x] Add dynamic OG/Twitter tags to BlogPostPage
- [x] Create HMO vs PPO comparison page (/compare/hmo-vs-ppo)
- [x] Create Term vs Whole Life comparison page (/compare/term-vs-whole-life)
- [x] Create Liability Limits comparison page (/compare/liability-limits)
- [x] Add comparison table structured data to all comparison pages
- [x] Implement automatic related term suggestions on TermPage (same category + keyword overlap)
- [x] Add internal linking based on categories and keywords (up to 4 automatic suggestions per term)

## User Engagement Enhancements
- [x] Create newsletter signup database schema
- [x] Build newsletter signup tRPC procedure (subscribe, unsubscribe)
- [x] Add newsletter signup form to footer (Home page)
- [x] Create insurance quiz component with 7 questions
- [x] Build quiz results page with personalized recommendations
- [x] Add quiz to homepage CTA and navigation
- [x] Create content ratings database schema
- [x] Build rating tRPC procedures (submit rating, get stats, check user rating)
- [x] Add thumbs up/down rating buttons to TermPage
- [x] Display rating stats on TermPage (percentage and total count)

## Advanced Engagement Features
- [x] Create admin newsletter dashboard page (/admin/newsletter)
- [x] Build newsletter subscriber list view with search/filter
- [x] Add CSV export functionality for subscribers
- [x] Display newsletter subscription growth stats (total, active, unsubscribed, 30-day growth)
- [ ] Create Insurance 101 learning path content (5-7 lessons)
- [ ] Build learning path progress tracking system
- [ ] Add completion badges and certificates
- [ ] Create term bookmark/favorites UI component
- [ ] Implement localStorage persistence for bookmarks
- [ ] Add account sync for logged-in users

## Newsletter Email System
- [x] Set up email service integration (Resend API)
- [x] Create welcome email template
- [x] Implement automated welcome email on signup
- [x] Build manual newsletter composer UI in admin dashboard (/admin/newsletter/compose)
- [x] Create newsletter email template with dynamic content
- [x] Add manual send functionality with preview
- [x] Implement automated weekly digest system (server/_core/weeklyDigest.ts)
- [x] Create weekly digest email template with blog posts and CTAs
- [x] Create setup guide for scheduled weekly sending (WEEKLY_DIGEST_SETUP.md)
- [x] Add email tracking and analytics guidance

## Mobile & Accessibility Fixes
- [x] Fix chatbot width on mobile devices (responsive width with proper margins)
- [x] Add proper ARIA labels to all interactive elements
- [x] Ensure keyboard navigation works throughout site
- [x] Add skip-to-content link for screen readers
- [x] Improve color contrast ratios for WCAG AA compliance
- [x] Add alt text to all images (category icons have descriptive alt text)
- [x] Ensure form labels are properly associated
- [x] Create comprehensive accessibility documentation (ACCESSIBILITY.md)
- [x] Add focus indicators for keyboard navigation (built into shadcn/ui)
- [x] Ensure chatbot is keyboard accessible

## Property Insurance Coverage Definitions
- [x] Add Coverage A - Dwelling definition
- [x] Add Coverage B - Other Structures definition
- [x] Add Coverage C - Personal Property definition
- [x] Add Coverage D - Loss of Use definition
- [x] Add Coverage E - Personal Liability definition
- [x] Add Coverage F - Medical Payments to Others definition
- [x] Add additional property insurance coverage terms (20 total terms added)
- [x] Verify all terms are properly categorized as Property insurance

## Fix Duplicate Glossary Terms
- [x] Remove duplicate entries causing React key errors (removed 13 duplicate terms)

## Polly Chatbot Animation
- [x] Create Polly mascot icon/avatar (Shield icon representing protection)
- [x] Implement gentle floating animation with CSS (3s ease-in-out)
- [x] Add accessibility support (prefers-reduced-motion)
- [x] Update chatbot branding to "Polly" (welcome message and header)
- [x] Add pulse animation to Polly avatar in chat header
- [x] Test animations across devices (verified via dev server preview)

## Fix Search Functionality
- [x] Fix Enter key not working in search box on homepage (added smooth scroll to results)
- [x] Ensure search filters glossary terms correctly (already working via onChange)

## Search Autocomplete Dropdown
- [x] Build search suggestions dropdown component
- [x] Show top 8 matching terms as user types
- [x] Add keyboard navigation (arrow keys, Enter to select, Escape to close)
- [x] Click outside to close dropdown
- [x] Navigate to term page on selection

## Add NFIP and Flood Insurance Terms
- [x] Add NFIP (National Flood Insurance Program) definition
- [x] Add related flood insurance terms (9 total: NFIP, National Flood Insurance Program, Flood Insurance, Flood Zone, Base Flood Elevation, Special Flood Hazard Area, FIRM, 100-Year Flood, Elevation Certificate)
- [x] Verify terms appear in search and autocomplete (tested - working perfectly)

## Expand NFIP Flood Insurance Terms
- [x] Add LFE (Lowest Floor Elevation) definition
- [x] Add DFE (Design Flood Elevation) definition
- [x] Add BFD (Base Flood Depth) definition
- [ ] Add flood zone definitions (Zone A, AE, AH, AO, V, VE, X)
- [x] Add Freeboard definition
- [x] Add Floodway definition
- [x] Add Pre-FIRM and Post-FIRM definitions
- [x] Add Substantial Improvement definition
- [x] Add Substantial Damage definition
- [x] Add ICC Coverage (Increased Cost of Compliance)
- [x] Add CRS (Community Rating System)
- [x] Add LOMA (Letter of Map Amendment)
- [ ] Add Flood Vent definition
- [ ] Add Breakaway Wall definition
- [ ] Add Crawlspace (flood insurance context)
- [x] Add Lowest Floor definition (covered by LFE)
- [ ] Add Waiting Period (flood insurance specific)
- [ ] Add Coastal High Hazard Area (detailed V Zone)
- [x] Add Floodplain definition
- [x] Test all new terms in search and autocomplete (verified LFE, DFE, BFD, Freeboard, Substantial Improvement/Damage, CRS, LOMA all working)
