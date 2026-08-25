# 📊 Google Spreadsheet Integration for DRB & COMPANY CA Website

All forms on the website (`ConsultationModal`, `ContactPage`, `CareersPage`) are automatically configured to send live lead submissions directly to your Google Spreadsheet via a Google Apps Script Web App.

---

## 🚀 How to Set Up Your Google Spreadsheet (Step-by-Step)

### Step 1: Create a Google Spreadsheet
1. Open [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. Name it: **`DRB & COMPANY - Website Inquiries`**
3. In Row 1 (Header Row), add the following column titles:

| A | B | C | D | E | F |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Timestamp** | **Name** | **Phone** | **Email** | **Service / Subject** | **Message / Details** | **Source** |

---

### Step 2: Add Google Apps Script
1. In your Google Sheet, click on **Extensions** in the top menu -> select **Apps Script**.
2. Delete any code in the editor, and paste the following Google Apps Script code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = data.name || "";
    var phone = data.phone || "";
    var email = data.email || "";
    var service = data.service || data.subject || "";
    var message = data.message || "";
    var source = data.source || "Website Form";
    
    // Append the row
    sheet.appendRow([timestamp, name, phone, email, service, message, source]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy as Web App
1. In the top right of the Apps Script window, click the blue **Deploy** button -> select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" -> choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `DRB Website Leads API`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial: Select "Anyone" so website forms can submit without login)*
4. Click **Deploy** -> Authorize access if prompted.
5. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Paste URL in `siteConfig.js`
Open `src/data/siteConfig.js` and paste your URL into `googleSheetWebhookUrl`:

```javascript
googleSheetWebhookUrl: "YOUR_COPIED_WEB_APP_URL_HERE"
```

---

## 🛡️ Zero Data Loss Safeguard
Every submission is **also saved locally in browser `localStorage` (`drb_ca_leads`)** so even if there is a temporary network glitch, no lead is ever lost!
