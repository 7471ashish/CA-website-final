import { siteConfig } from '../data/siteConfig';

/**
 * Smart Email Handler:
 * - On Mobile Phones (Android/iOS): Uses native mailto to launch the Gmail app compose screen.
 * - On Laptops & Desktop Computers: Opens web Gmail compose directly in a new tab with pre-filled recipient.
 */
export function handleSmartEmailClick(e, customSubject) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const email = siteConfig.email;
  const subject = customSubject || 'Inquiry Regarding CA Services - DRB & COMPANY';
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  } else {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  }
}
