# IESW 2026 – Registration Form
**Pace Digitek × IESA × Lineage Power**

A clean, mobile-first event registration form for IESW 2026.

---

## 📁 Project Structure

```
iesw-2026/
├── index.html              ← Main page
├── netlify.toml            ← Netlify deployment config
├── .gitignore
├── README.md
└── assets/
    ├── css/
    │   └── style.css       ← All styles
    ├── js/
    │   └── main.js         ← Form validation & logic
    └── logos/
        ├── pace.png
        ├── iesa.png
        └── lineage.png
```

---

## 🖥️ Run Locally (VS Code)

### Option A – Open directly
Just open `index.html` in your browser (double-click or drag into Chrome/Edge/Firefox). Works without a server because there's no build step.

### Option B – Live Server extension (recommended)
1. Open the `iesw-2026` folder in **VS Code**.
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click `index.html` → **Open with Live Server**.
4. Your browser opens at `http://127.0.0.1:5500` with hot-reload.

---

## 🐙 Push to GitHub

```bash
# 1. Inside the iesw-2026 folder
git init
git add .
git commit -m "Initial commit – IESW 2026 registration form"

# 2. Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/iesw-2026.git
git branch -M main
git push -u origin main
```

---

## 🚀 Deploy on Netlify

### Drag & Drop (fastest)
1. Go to **[app.netlify.com](https://app.netlify.com)** → Log in.
2. Drag the entire `iesw-2026` folder onto the **"Sites"** page.
3. Done — your site is live in seconds.

### Connect GitHub (recommended for auto-deploy)
1. In Netlify → **Add new site** → **Import an existing project**.
2. Choose **GitHub** and select the `iesw-2026` repo.
3. Build settings:
   - **Base directory:** *(leave blank)*
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.`
4. Click **Deploy site**.

Every `git push` to `main` will automatically redeploy.

---

## ✏️ Customisation

| What               | Where                        |
|--------------------|------------------------------|
| Colors / fonts     | `assets/css/style.css`       |
| Form fields        | `index.html`                 |
| Validation rules   | `assets/js/main.js`          |
| Logos              | `assets/logos/`              |
| Submit behaviour   | `submitForm()` in `main.js`  |

### Connect a real backend
Replace the `setTimeout` block in `submitForm()` with a `fetch()` call to your API or a [Netlify Form](https://docs.netlify.com/forms/setup/) submission.

---

## 📄 License
Internal use — Pace Digitek / IESA / Lineage Power.
