# SiouxFallsPros.com

Your local Sioux Falls business directory.

---

## How to get this live on your domain — step by step

Follow these steps exactly. Take them one at a time.

---

### STEP 1 — Put the files on your computer

1. Download the zip file I gave you
2. Right-click the zip → Extract All (or unzip it)
3. You'll see a folder called `siouxfallspros`
4. Put that folder somewhere easy to find — like your Desktop

---

### STEP 2 — Create a GitHub repository

1. Go to github.com and log in
2. Click the green **New** button (top left)
3. Name it: `siouxfallspros`
4. Make sure it says **Public**
5. Do NOT check any of the "initialize" boxes
6. Click **Create repository**
7. GitHub shows you a page with setup instructions — leave that open

---

### STEP 3 — Push your files to GitHub using Git Bash

1. Open **Git Bash** on your computer
2. Navigate to your folder by typing:
   ```
   cd Desktop/siouxfallspros
   ```
   (If it's somewhere else, adjust the path)
3. Run these commands one at a time, pressing Enter after each:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/siouxfallspros.git
   git push -u origin main
   ```
   Replace YOUR-GITHUB-USERNAME with your actual GitHub username.
4. It will ask for your GitHub username and password
5. When done, refresh your GitHub repo page — you should see all the files

---

### STEP 4 — Deploy to Cloudflare Pages

1. Log into Cloudflare dashboard at dash.cloudflare.com
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your GitHub account and pick the `siouxfallspros` repo
6. Click **Begin setup**
7. On the next screen:
   - Framework preset: **None**
   - Build command: leave it **blank**
   - Build output directory: leave it **blank** (or type `/`)
8. Click **Save and Deploy**
9. Wait about 1 minute — Cloudflare will give you a URL like `siouxfallspros.pages.dev`
10. Click that URL — your site is live!

---

### STEP 5 — Connect your domain (siouxfallspros.com)

1. In Cloudflare Pages, go to your project → **Custom domains**
2. Click **Set up a custom domain**
3. Type: `siouxfallspros.com`
4. Click **Continue**
5. Since your domain is already on Cloudflare, it will connect automatically
6. Do the same for `www.siouxfallspros.com`
7. Wait 5-10 minutes and visit siouxfallspros.com — it will be live

---

### STEP 6 — Set up your contact form (so businesses can reach you)

The contact form on your Advertise page needs somewhere to send emails.
The easiest free option is Formspree:

1. Go to formspree.io and create a free account
2. Create a new form
3. Copy your form ID (looks like `xpzgkrqb`)
4. Open `js/main.js` in any text editor (Notepad works fine)
5. Find the commented-out section that says `// fetch('https://formspree.io/f/YOUR_FORM_ID'`
6. Uncomment it and replace YOUR_FORM_ID with your actual ID
7. Save the file
8. Push to GitHub again:
   ```
   git add .
   git commit -m "Add form"
   git push
   ```
9. Cloudflare will auto-redeploy in about 30 seconds

---

## How to add a business to your directory

Open `js/listings.js` in any text editor.

Find the category you want (e.g. `plumbers:`) and add a new business block:

```javascript
{
  id: 'pl-6',
  name: 'Business Name Here',
  phone: '(605) 000-0000',
  website: 'https://theirwebsite.com',
  description: 'Short description of what they do.',
  rating: 4.8,
  reviews: 120,
  featured: true,    // true = Page 1 paying spot, false = free listing
  emoji: '🔧',
},
```

Save the file, push to GitHub, and it's live in 30 seconds.

---

## How to mark someone as a Page 1 featured listing

In their business block in `listings.js`, set:
```
featured: true
```

To move them back to free:
```
featured: false
```

That's it. Save and push.

---

## Files explained simply

| File | What it is |
|---|---|
| `index.html` | Your homepage |
| `category.html` | The page that shows businesses for each category |
| `categories.html` | The page listing all categories |
| `advertise.html` | The page for businesses to contact you |
| `css/style.css` | All the styling — colors, layout, fonts |
| `js/listings.js` | All business data — add businesses here |
| `js/main.js` | Search, navigation, form handling |

---

## Questions?

Every time you need a change — new category, new page, update the design —
just come back and ask. Everything is in plain files, nothing complicated.
