# Salah Elbakri - Professional Portfolio Website

An ultra-modern, responsive, high-performance portfolio website tailored for networking, recruiter outreach, and showcasing data science, machine learning, and systems engineering projects.

---

## 🌟 Highlights & Features

- **Interdisciplinary Narrative**: Accentuates the rare crossover between electrical power engineering (ISO New England, UMass Amherst) and graduate-level data science & machine learning (University of Washington MSDS).
- **Interactive Project Filtering**: Instantly filter projects by *All*, *AI & Machine Learning*, *Data Engineering & BI*, and *Power & Physical Systems*.
- **Deep-Dive Case Study Modals**: Rich popups detailing the engineering challenges, architectural solutions, measurable results, and tech stacks for each project.
- **Dual Themes**: Polished Dark Mode (default, developer/AI aesthetic) and crisp Light Mode with automatic `localStorage` preference saving.
- **Instant Networking CTAs**: One-click "Copy Email" with animated toast notification, direct mailto links, LinkedIn integration, and instant Resume PDF download.
- **Zero Heavy Dependencies**: Pure semantic HTML5, modern CSS with responsive glassmorphism, and vanilla JavaScript. No heavy build step, no broken packages, and sub-second load times.

---

## 🚀 Quick Start (Local Preview)

You can view the portfolio locally using any of the following methods:

### Option 1: Direct File Open
Simply double-click `index.html` in your file browser (Finder) to open it directly in Chrome, Safari, Edge, or Firefox.

### Option 2: Local Python Server (Recommended)
Open your terminal, navigate to the `portfolio` folder, and run:
```bash
python3 -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Deploy (100% Free)

### Deploy to GitHub Pages (Recommended)
1. Initialize git in this folder or your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a new repository on your GitHub account (e.g., `portfolio` or `<your-username>.github.io`).
3. Push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages > Branch**, select `main` and `/ (root)`, then click **Save**. Your site will be live within seconds at `https://<your-username>.github.io/<your-repo>/`.

### Deploy to Vercel
1. Install or visit [vercel.com](https://vercel.com).
2. Import the GitHub repository and click **Deploy**. Vercel will instantly serve the static files with free worldwide CDN acceleration.

---

## 🛠️ How to Customize & Update Content

All content is cleanly separated into `projects-data.js`:

- **Update Profile / Links**: Modify `window.PORTFOLIO_DATA.profile` (e.g., change your GitHub handle, add a personal blog, or update your phone/email).
- **Add a New Project**: Append an object to the `window.PORTFOLIO_DATA.projects` array with your title, category, challenges, solutions, and tags.
- **Update Skills**: Edit the `skills` object in `projects-data.js`.
- **Replace Resume**: Place your updated resume PDF into `assets/Salah_Elbakri_Resume.pdf`.

---

## 📁 Project Structure

```text
portfolio/
├── index.html            # Main semantic HTML structure & layout
├── styles.css            # Custom glassmorphic styling, animations & dark/light themes
├── projects-data.js      # Structured data source (projects, skills, experience)
├── app.js                # Interactive controllers, filter logic, modals & toast notifications
├── assets/
│   └── Salah_Elbakri_Resume.pdf  # Downloadable resume
└── README.md             # Documentation and deployment guide
```
