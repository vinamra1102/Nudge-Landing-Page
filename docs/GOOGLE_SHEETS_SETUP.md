# Google Sheets Waitlist Setup

This guide walks through wiring the landing page email forms to a Google Sheet via a Google Apps Script Web App. No backend server required.

## 1. Create the Sheet

1. Go to <https://sheets.google.com> and create a new spreadsheet.
2. Rename it to **Nudge Waitlist**.
3. In row 1, add these column headers (left to right):

   | A | B | C | D |
   |---|---|---|---|
   | Timestamp | Email | Source | ReferralCode |

   Leave the **ReferralCode** column empty for now — it's reserved for future use.

## 2. Open Apps Script

1. From the Sheet, click **Extensions → Apps Script**. A new editor tab opens.
2. Delete the default `function myFunction() {}` boilerplate.
3. Paste the entire script from the next section.
4. Click **Save** (disk icon) and give the project a name like `Nudge Waitlist`.

## 3. Apps Script Code

```javascript
const SHEET_NAME = 'Sheet1'; // change if you renamed the tab
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SOURCES = ['hero', 'founding_member'];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const email = String(body.email || '').trim().toLowerCase();
    const source = String(body.source || '').trim();

    if (!EMAIL_REGEX.test(email)) {
      return jsonResponse({ success: false, error: 'invalid_email' });
    }
    if (ALLOWED_SOURCES.indexOf(source) === -1) {
      return jsonResponse({ success: false, error: 'invalid_source' });
    }

    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActive().getSheets()[0];

    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existing = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
      for (let i = 0; i < existing.length; i++) {
        const cell = String(existing[i][0] || '').trim().toLowerCase();
        if (cell === email) {
          return jsonResponse({ success: true, duplicate: true });
        }
      }
    }

    sheet.appendRow([new Date(), email, source, '']);
    return jsonResponse({ success: true, duplicate: false });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 4. Deploy as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon next to **Select type** and choose **Web app**.
3. Fill in:
   - **Description**: `Nudge waitlist v1`
   - **Execute as**: **Me** (your account)
   - **Who has access**: **Anyone**
4. Click **Deploy**.
5. Google will prompt you to authorize the script — accept the permissions (it needs to write to your sheet).
6. Copy the **Web app URL**. It looks like:

   ```
   https://script.google.com/macros/s/AKfycb...long-id.../exec
   ```

## 5. Add the URL to the Frontend

1. In the repo root, copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Paste the deployment URL as the value of `VITE_WAITLIST_SCRIPT_URL`:

   ```
   VITE_WAITLIST_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

3. Restart the Vite dev server so the new env var is picked up.

## 6. Test

1. Submit an email through the hero form — it should appear in the sheet with `source = hero`.
2. Submit the same email again — the form should report you're already on the list, and no duplicate row is added.
3. Submit through the Founding Member form — it should land with `source = founding_member`.

## Notes on CORS

Apps Script Web Apps don't respond to `OPTIONS` preflight requests. To avoid preflight, the client sends the body as `Content-Type: text/plain;charset=utf-8` (Apps Script still parses it correctly via `JSON.parse(e.postData.contents)`).

## Redeploying After Script Changes

If you edit the Apps Script, you must create a **new deployment version** for changes to take effect at the existing URL:

1. **Deploy → Manage deployments**.
2. Click the pencil (edit) icon on the active deployment.
3. Under **Version**, pick **New version**.
4. Click **Deploy**. The URL stays the same.
