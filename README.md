# Nuclear Safety Engineering — website

Static website for Nuclear Safety Engineering Limited, hosted free on GitHub Pages at www.nuclearsafetyengineering.com.

## Files

| File | Purpose |
|---|---|
| `index.html`, `services.html`, `about.html`, `sectors.html`, `policies.html`, `privacy.html`, `contact.html` | Site pages |
| `404.html` | "Page not found" page |
| `css/style.css` | All styling (colours are set at the top) |
| `js/main.js` | Mobile menu and contact form |
| `images/logo.png`, `images/logo-white.png` | Official NSE logos (colour, and white for the dark footer) |
| `images/favicon-32.png`, `images/apple-touch-icon.png`, `images/icon-512.png` | Browser tab and phone icons |
| `images/hero.jpg` | **Optional**: add a photo here for the home page banner (about 1920×1080 px, under 400 KB). Without it the banner is plain navy. |
| `CNAME` | Tells GitHub Pages the custom domain |
| `sitemap.xml`, `robots.txt` | Help search engines find the pages |

To edit text, open the relevant `.html` file on GitHub, click the pencil icon, change the words, and click **Commit changes**. The site updates within a minute or two.

## 1. Put the site on GitHub

1. Sign in at github.com (or create a free account).
2. Click **+** (top right) → **New repository**.
3. Name it `nse-website`, set it to **Public** (free GitHub Pages needs a public repository), and click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Unzip the site folder on your computer, then drag **everything inside it** (the files and the `css`, `js`, `images` folders, not the outer folder itself) into the upload area.
6. Click **Commit changes**.

## 2. Turn on GitHub Pages

1. In the repository, go to **Settings** → **Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, and click **Save**.
3. Under **Custom domain**, enter `www.nuclearsafetyengineering.com` and click **Save**. (The CNAME file already contains this.)
4. After a few minutes the site is live at `https://<your-username>.github.io/nse-website/` and, once DNS is set up below, at your own domain.

## 3. Point your GoDaddy domain at GitHub

In GoDaddy: **My Products** → your domain → **DNS** → **DNS Records**.

1. **Remove** any existing `A` records for `@`, and any `CNAME` for `www` (these currently point at Airo / GoDaddy's site builder; you may need to disconnect the Airo site from the domain first).
2. **Do not touch** the `MX`, `TXT` (SPF/DKIM/DMARC) or other email records, so your email keeps working.
3. Add four `A` records, Name `@`, TTL 1 hour:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add a `CNAME` record: Name `www`, Value `<your-username>.github.io` (your GitHub username, no repository name).
5. Wait for DNS to update (usually under an hour, occasionally up to 24 hours). Back in GitHub **Settings → Pages**, tick **Enforce HTTPS** once the option becomes available.

Recommended: in GitHub go to your profile **Settings → Pages → Add a domain** and verify `nuclearsafetyengineering.com`. This stops anyone else using your domain on GitHub.

## 4. Make the contact form send emails

GitHub Pages cannot send email by itself, so the form uses Formspree (free for up to 50 enquiries a month).

1. Create a free account at formspree.io using the email address that should receive enquiries.
2. Create a new form; Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. In `contact.html`, replace `YOUR_FORM_ID` with your ID (e.g. `abcdwxyz`) and commit.
4. Send a test enquiry from the live site and confirm it in the email Formspree sends you.

Until this is done, the Send button opens the visitor's own email program with the enquiry pre-filled, addressed to info@nuclearsafetyengineering.com.
