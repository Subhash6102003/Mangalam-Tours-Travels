// Google Ads Conversion Tracking Utility
// Conversion ID: AW-17895816129
// Conversion Label: Zq7CPaxquobEMH3sdVC

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Send a page view conversion event to Google Ads
 * This tracks when users view important pages on your site
 */
export const sendPageViewConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17895816129/Zq7CPaxquobEMH3sdVC'
    });
    console.log('Google Ads Page View conversion sent');
  }
};

/**
 * Send a custom conversion event
 * @param action - The action name for the event
 * @param params - Additional parameters for the event
 */
export const sendConversionEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      'send_to': 'AW-17895816129',
      ...params
    });
    console.log(`Google Ads conversion event sent: ${action}`, params);
  }
};

/**
 * Track booking submission as a conversion
 */
export const sendBookingConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17895816129/Zq7CPaxquobEMH3sdVC',
      'transaction_id': '',
      'event_callback': () => {
        console.log('Booking conversion tracked');
      }
    });
  }
};

/**
 * Track when users view specific pages (alternate method)
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-17895816129', {
      'page_path': url
    });
    window.gtag('config', 'GT-MRLX98K9', {
      'page_path': url
    });
  }
};
