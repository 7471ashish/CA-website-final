import React, { useEffect } from 'react';

/**
 * Dynamic SEO Component for updating document title and meta description on route changes.
 */
export default function SEO({ 
  title = "DRB & COMPANY | Chartered Accountants in Meerut", 
  description = "DRB & COMPANY is a premier Chartered Accountants Partnership Firm in Budhana Gate, Meerut led by CA Deepanshi Bansal & CA Parul. ITR, GST, Audits & Company Registrations.",
  canonical = ""
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute('href', canonical);
    }

    // 4. Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }, [title, description, canonical]);

  return null;
}
