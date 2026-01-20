// Meta Pixel (Facebook Pixel) type declarations
interface Window {
  fbq?: (
    action: "track" | "trackCustom" | "init",
    eventName: string,
    parameters?: {
      content_name?: string;
      content_category?: string;
      value?: number;
      currency?: string;
      [key: string]: any;
    },
  ) => void;
  _fbq?: any;
}
