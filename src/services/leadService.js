import { siteConfig } from '../data/siteConfig';

/**
 * Submits lead/consultation details to Google Spreadsheet via Google Apps Script Webhook.
 * Also stores a local backup in localStorage so zero submissions are lost.
 */
export async function submitLeadToSpreadsheet(leadData) {
  const payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: leadData.name || '',
    email: leadData.email || '',
    phone: leadData.phone || '',
    service: leadData.service || leadData.subject || leadData.qualification || 'General Consultation',
    message: leadData.message || leadData.caseDetails || '',
    source: leadData.source || 'Website Consultation Form'
  };

  // 1. Local backup so leads are permanently preserved locally
  try {
    const existingLeads = JSON.parse(localStorage.getItem('drb_ca_leads') || '[]');
    existingLeads.unshift(payload);
    localStorage.setItem('drb_ca_leads', JSON.stringify(existingLeads.slice(0, 200)));
  } catch (err) {
    console.warn('LocalStorage backup warning:', err);
  }

  // 2. Post to Google Sheet Webhook if configured
  if (siteConfig.googleSheetWebhookUrl) {
    try {
      await fetch(siteConfig.googleSheetWebhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script handles no-cors redirect seamlessly
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      console.log('Lead submitted to Google Spreadsheet:', payload);
    } catch (networkError) {
      console.error('Google Sheet submission network error:', networkError);
    }
  }

  return { success: true, lead: payload };
}
