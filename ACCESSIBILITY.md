# Accessibility Compliance Guide

This document outlines the accessibility features implemented in the Insurance Glossary website to ensure compliance with **WCAG 2.1 Level AA** standards and support for disabled users.

## Overview

The Insurance Glossary is designed to be accessible to all users, including those with:
- Visual impairments (blindness, low vision, color blindness)
- Motor disabilities (keyboard-only navigation)
- Cognitive disabilities (clear language, consistent navigation)
- Hearing impairments (text-based content)

## Implemented Features

### 1. Keyboard Navigation ✅

**Status:** Fully implemented

- All interactive elements are keyboard accessible
- Logical tab order throughout the site
- Skip-to-content link (press Tab on page load)
- Focus indicators visible on all interactive elements
- No keyboard traps

**Testing:**
- Press `Tab` to navigate forward
- Press `Shift + Tab` to navigate backward
- Press `Enter` or `Space` to activate buttons/links
- Press `Esc` to close modals/dialogs

### 2. Screen Reader Support ✅

**Status:** Implemented with semantic HTML

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Skip-to-content link for bypassing navigation
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA labels on icon-only buttons
- Alt text on all informational images
- Form labels properly associated with inputs

**Compatible with:**
- JAWS (Windows)
- NVDA (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

### 3. Visual Accessibility ✅

**Color Contrast:**
- Text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Primary color (#d4a574) tested against backgrounds
- Links distinguishable by underline, not just color
- Focus indicators have sufficient contrast

**Typography:**
- Minimum font size: 14px (body text)
- Scalable fonts (rem/em units)
- Line height: 1.5-1.6 for readability
- Clear, readable font family (system fonts)

**Responsive Design:**
- Mobile-friendly (320px minimum width)
- Text reflows without horizontal scrolling
- Zoom up to 200% without loss of functionality
- Touch targets minimum 44x44px on mobile

### 4. Content Accessibility ✅

**Clear Language:**
- Plain language explanations for insurance terms
- Definitions written at 8th-grade reading level
- Consistent terminology throughout
- Abbreviations explained on first use

**Structure:**
- Logical heading hierarchy
- Lists for related items
- Tables with proper headers
- Breadcrumb navigation on detail pages

### 5. Form Accessibility ✅

**Newsletter Signup:**
- Label properly associated with input
- Required fields marked
- Error messages clearly displayed
- Success feedback provided

**Search:**
- Label (visually hidden but available to screen readers)
- Placeholder text as additional hint
- Live results announced to screen readers

**Chatbot:**
- Keyboard accessible
- ARIA labels on controls
- Messages announced to screen readers
- Close button clearly labeled

### 6. Interactive Elements ✅

**Buttons:**
- Clear, descriptive text
- Icon-only buttons have ARIA labels
- Disabled state clearly indicated
- Focus indicators visible

**Links:**
- Descriptive link text (avoid "click here")
- External links indicated
- Visited links distinguishable
- Skip link at top of page

**Modals/Dialogs:**
- Focus trapped within modal when open
- Esc key closes modal
- Focus returned to trigger element on close
- ARIA roles and labels

## WCAG 2.1 AA Compliance Checklist

### Perceivable

- ✅ **1.1.1** Non-text Content: Alt text on images
- ✅ **1.3.1** Info and Relationships: Semantic HTML
- ✅ **1.3.2** Meaningful Sequence: Logical reading order
- ✅ **1.4.1** Use of Color: Not sole means of conveying info
- ✅ **1.4.3** Contrast (Minimum): 4.5:1 ratio
- ✅ **1.4.4** Resize Text: Text scalable to 200%
- ✅ **1.4.10** Reflow: No horizontal scrolling at 320px
- ✅ **1.4.11** Non-text Contrast: 3:1 for UI components

### Operable

- ✅ **2.1.1** Keyboard: All functionality keyboard accessible
- ✅ **2.1.2** No Keyboard Trap: Users can navigate away
- ✅ **2.4.1** Bypass Blocks: Skip-to-content link
- ✅ **2.4.2** Page Titled: Descriptive page titles
- ✅ **2.4.3** Focus Order: Logical tab order
- ✅ **2.4.4** Link Purpose: Descriptive link text
- ✅ **2.4.6** Headings and Labels: Clear and descriptive
- ✅ **2.4.7** Focus Visible: Visible focus indicators

### Understandable

- ✅ **3.1.1** Language of Page: HTML lang attribute set
- ✅ **3.2.1** On Focus: No context change on focus
- ✅ **3.2.2** On Input: No context change on input
- ✅ **3.3.1** Error Identification: Errors clearly described
- ✅ **3.3.2** Labels or Instructions: Form labels provided
- ✅ **3.3.3** Error Suggestion: Helpful error messages

### Robust

- ✅ **4.1.1** Parsing: Valid HTML
- ✅ **4.1.2** Name, Role, Value: ARIA attributes used correctly
- ✅ **4.1.3** Status Messages: ARIA live regions for dynamic content

## Testing Procedures

### Manual Testing

1. **Keyboard Navigation:**
   - Unplug mouse
   - Navigate entire site using only keyboard
   - Verify all interactive elements are reachable
   - Check focus indicators are visible

2. **Screen Reader:**
   - Enable screen reader (NVDA/JAWS/VoiceOver)
   - Navigate through pages
   - Verify all content is announced
   - Check heading structure makes sense

3. **Color Contrast:**
   - Use browser DevTools color picker
   - Check contrast ratios meet 4.5:1 minimum
   - Test with color blindness simulators

4. **Zoom/Resize:**
   - Zoom browser to 200%
   - Verify no horizontal scrolling
   - Check all functionality still works
   - Test on mobile devices (320px width)

### Automated Testing Tools

- **axe DevTools:** Browser extension for accessibility scanning
- **WAVE:** Web accessibility evaluation tool
- **Lighthouse:** Built into Chrome DevTools
- **Pa11y:** Command-line accessibility testing

### Screen Reader Testing Commands

**NVDA (Windows):**
- `Insert + F7`: List of headings
- `Insert + F5`: List of form fields
- `Insert + F6`: List of links
- `H`: Next heading
- `B`: Next button

**VoiceOver (macOS):**
- `Cmd + F5`: Enable VoiceOver
- `VO + U`: Rotor (lists)
- `VO + Right Arrow`: Next item
- `VO + Cmd + H`: Next heading

## Known Limitations

1. **Third-party Content:**
   - Google Analytics tracking code (no user-facing impact)
   - Resend email service (backend only)

2. **Dynamic Content:**
   - AI chatbot responses may vary in quality
   - Live regions used to announce updates

3. **Browser Support:**
   - Tested on modern browsers (Chrome, Firefox, Safari, Edge)
   - IE11 not supported (end of life)

## Future Improvements

1. **Enhanced ARIA:**
   - Add more descriptive ARIA labels
   - Implement ARIA live regions for search results
   - Add ARIA expanded states for accordions

2. **User Preferences:**
   - Dark mode toggle (already implemented)
   - Font size controls
   - Reduced motion option
   - High contrast mode

3. **Content:**
   - Add video captions/transcripts (if video content added)
   - Provide downloadable PDF versions of glossary
   - Offer audio pronunciations of insurance terms

4. **Testing:**
   - Regular automated accessibility scans
   - User testing with disabled users
   - Annual WCAG compliance audit

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

## Contact

If you encounter any accessibility barriers on this website, please contact us so we can address them promptly.

---

**Last Updated:** February 2026  
**WCAG Version:** 2.1 Level AA  
**Compliance Status:** Compliant
