# Meta Pixel (Facebook Pixel) Tracking Setup

## Overview

Meta Pixel tracking has been successfully integrated into your EvocLabs website to track user conversions and activities. This allows you to measure the effectiveness of your Facebook/Instagram ad campaigns.

## What's Been Implemented

### 1. **Base Pixel Installation** (index.html)

The Meta Pixel base code is installed in `index.html` with your Pixel ID: `693663340366678`

**Location:** `<head>` section

- **Script:** Loads the Facebook Pixel SDK and initializes tracking
- **PageView Event:** Automatically tracks every page view
- **Noscript Fallback:** Located in `<body>` for users with JavaScript disabled

### 2. **Conversion Tracking**

#### Book Demo Page (`components/BookDemo.tsx`)

**Event Type:** `Lead`
**Triggers When:** User successfully submits the Book Demo form

**Tracked Data:**

```javascript
fbq("track", "Lead", {
  content_name: "Book Demo Form",
  content_category: formData.category, // e.g., "fashion", "beauty", etc.
  value: 0,
  currency: "INR",
});
```

#### Contact Us Page (`components/Contact.tsx`)

**Event Type:** `Contact`
**Triggers When:** User successfully submits the Contact form

**Tracked Data:**

```javascript
fbq("track", "Contact", {
  content_name: "Contact Form",
  value: 0,
  currency: "INR",
});
```

## How It Works

1. **Page Load:** When a user visits any page, the base pixel fires a `PageView` event
2. **Form Submission:** When a user submits the Book Demo or Contact form:
   - Form data is saved to Firebase
   - Meta Pixel event is triggered
   - API call is made to your backend
3. **Data Flow:** The conversion data is sent to Facebook's servers and appears in your Events Manager

## Viewing Your Data in Facebook

### Events Manager

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel ID: `693663340366678`
3. You'll see these events:
   - **PageView** - Every page visit
   - **Lead** - Book Demo form submissions
   - **Contact** - Contact form submissions

### Testing the Pixel

Use the **Meta Pixel Helper** Chrome extension:

1. Install: [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your website
3. Click the extension icon to see which events are firing

## Using This Data for Ads

### 1. Create Custom Conversions

In Events Manager, you can create custom conversions based on these events:

- **Lead Conversion:** Track Book Demo submissions
- **Contact Conversion:** Track Contact form submissions

### 2. Optimize Ad Campaigns

When creating Facebook/Instagram ads:

- Set your conversion objective to "Leads" or "Conversions"
- Choose your custom conversion event
- Facebook will optimize ad delivery to people likely to convert

### 3. Create Custom Audiences

Build audiences based on user behavior:

- **Website Visitors:** People who viewed any page
- **Lead Submitters:** People who submitted the Book Demo form
- **Contact Submitters:** People who submitted the Contact form

### 4. Retargeting

Create retargeting campaigns for:

- People who visited but didn't submit a form
- People who submitted one form but not the other
- Recent converters (for upselling)

## Advanced Tracking (Optional)

If you want to add more tracking events in the future, use this pattern:

```typescript
// Check if fbq is available
if (typeof window !== "undefined" && (window as any).fbq) {
  (window as any).fbq("track", "EventName", {
    // Optional parameters
    content_name: "Description",
    value: 100,
    currency: "INR",
  });
}
```

### Standard Events You Can Track

- `Purchase` - When someone makes a purchase
- `AddToCart` - When someone adds to cart
- `InitiateCheckout` - When checkout begins
- `ViewContent` - When someone views a specific page
- `Search` - When someone uses search
- `CompleteRegistration` - When someone completes signup

## Privacy & Compliance

### GDPR/Privacy Considerations

- The pixel collects user data for advertising purposes
- Consider adding a cookie consent banner if targeting EU users
- Update your Privacy Policy to mention Facebook Pixel usage

### Current Implementation

- No personally identifiable information (PII) is sent to Facebook
- Only form submission events and categories are tracked
- User email/phone numbers are NOT sent to the pixel

## Troubleshooting

### Events Not Showing Up?

1. **Check Browser Console:** Look for any JavaScript errors
2. **Verify Pixel ID:** Ensure `693663340366678` is correct
3. **Test with Pixel Helper:** Use the Chrome extension
4. **Check Events Manager:** Events may take 15-30 minutes to appear

### Common Issues

- **Ad Blockers:** May prevent pixel from loading
- **Browser Privacy Settings:** May block tracking
- **Incorrect Pixel ID:** Double-check in Facebook Events Manager

## Files Modified

1. **index.html** - Base pixel installation
2. **components/BookDemo.tsx** - Lead event tracking
3. **components/Contact.tsx** - Contact event tracking
4. **meta-pixel.d.ts** - TypeScript declarations for type safety

## Next Steps

1. ✅ **Verify Installation:** Use Meta Pixel Helper to confirm events are firing
2. ✅ **Test Forms:** Submit both forms and check Events Manager
3. 📊 **Create Custom Conversions:** Set up conversion tracking in Events Manager
4. 🎯 **Launch Campaigns:** Use these conversions to optimize your ad campaigns
5. 📈 **Monitor Performance:** Track conversion rates and ROI

## Support

For issues with:

- **Pixel Installation:** Check Facebook's [Pixel Setup Guide](https://www.facebook.com/business/help/952192354843755)
- **Events Manager:** Visit [Facebook Business Help Center](https://www.facebook.com/business/help)
- **Code Issues:** Review the implementation in the files listed above

---

**Pixel ID:** 693663340366678  
**Last Updated:** January 20, 2026  
**Status:** ✅ Active and Tracking
