# Developer Profile Portfolio

A beginner-friendly developer portfolio for the **GitHub & Profile Building Workshop**, organized by **Coding Club**. It is a complete static website made with HTML, CSS, and vanilla JavaScript. It works by opening `index.html` directly—no Node.js, backend, database, API key, or paid service is needed.

> **Important:** This is a demo profile. Search for `STUDENT CUSTOMIZATION` in the project files and replace the demo information with your own information.

## Features

- Responsive portfolio sections: hero, about, skills, projects, education, learning journey, links, contact, and footer
- Mobile navigation menu
- Light/dark theme toggle (saved in the browser)
- Smooth anchor scrolling
- Project category filtering
- Current year generated automatically
- Working GitHub, LinkedIn, and `mailto:` links
- No fake statistics, testimonials, achievements, backend, or project URLs

## Technologies

HTML5 · CSS3 · Vanilla JavaScript

## Folder structure

```text
github-workshop-simple-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── assets/
    └── README.md
```

## How to run

1. Download or clone this repository.
2. Open the folder.
3. Double-click `index.html`, or right-click it and choose a browser.
4. No installation or build command is required.

## How the JavaScript works

- The menu button adds/removes `.open` on mobile navigation.
- The theme button adds/removes `.dark` and remembers the choice with `localStorage`.
- The browser's smooth scrolling is enabled in `style.css`.
- `new Date().getFullYear()` fills the footer year.
- Project buttons compare each card's `data-category` with the selected filter and hide non-matching cards.

## 🎓 STUDENT CUSTOMIZATION GUIDE

Start by searching the whole project for **`STUDENT CUSTOMIZATION`**. The demo profile is intentionally marked in `index.html` and `script.js`. Make your changes in these exact places:

| Item | FILE | SECTION | WHAT TO CHANGE |
|---|---|---|---|
| Name | `index.html` | Hero, footer, code card | Replace Salman Khan with your name. Also update the page `<title>` and meta description. |
| Role | `index.html` | Hero heading | Replace “BCA Student \| Developer in Progress” with your honest role. |
| Bio | `index.html` | About and hero copy | Rewrite both paragraphs in your own words. Do not claim achievements you do not have. |
| University | `index.html` | About and Education | Replace Career Point University, Kota with your institution. |
| Skills | `index.html` | Skills section | Add/remove beginner technologies you are actually learning. |
| Projects | `index.html` | Demo projects | Change titles, descriptions, tags, and categories. Replace `disabled-link` placeholders only with real URLs. |
| Education | `index.html` | Education card | Replace BCA and university. Add dates/grades only if you want to and they are accurate. |
| GitHub URL | `index.html` | Hero and Contact links | Replace both `https://github.com/skaadil786` links with your profile URL. |
| LinkedIn URL | `index.html` | Hero and Contact links | Replace both LinkedIn URLs with your real profile URL. |
| Email | `index.html` | Contact | Replace the `mailto:` address and visible email destination if you add one. |
| Theme/design | `style.css` | `:root` variables | Change `--accent`, `--bg`, `--dark`, and other color values. |
| Footer | `index.html` | Footer | Replace organizer/workshop text if your workshop uses different details. |

The starter project keeps demo project buttons disabled as placeholders so students do not accidentally publish fake URLs. Use real repository/demo links only.

## Workshop challenge

### STEP 1 — Clone the workshop project

```bash
git clone <WORKSHOP-REPOSITORY-URL>
```

This downloads the source project. Replace the placeholder with the URL supplied by your instructor.

### STEP 2 — Run it locally

```bash
cd github-workshop-simple-portfolio
```

Open `index.html` in your browser and check the site.

### STEP 3 — Find `STUDENT CUSTOMIZATION`

Search the project files for that exact phrase.

### STEP 4 — Replace Salman Khan's information

Update the marked profile content with your own honest information.

### STEP 5 — Add at least 2 of your own projects

Update the three cards. Use real GitHub URLs only; do not invent links.

### STEP 6 — Customize the colors/design

Change the CSS variables in `style.css` and keep text readable.

### STEP 7 — Add your GitHub and LinkedIn links

Test each link in a new tab.

### STEP 8 — Test the website

Check desktop, tablet, and mobile widths, navigation, theme, filters, links, and spelling.

### STEP 9 — Commit the changes

```bash
git status
git add .
git commit -m "Customize portfolio for my profile"
```

`git status` shows changed files. `git add .` stages them. `git commit` records a snapshot locally.

### STEP 10 — Create YOUR OWN GitHub repository

On GitHub, create a new empty repository under your account, for example `my-developer-portfolio`. Do not initialize it with another README if this folder already has one.

### STEP 11 — Change the Git remote

```bash
git remote -v
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY`. The workshop repository is the **SOURCE** project. Changing `origin` prevents accidentally pushing to Salman Khan's repository. Verify with `git remote -v`.

### STEP 12 — Push to YOUR GitHub

```bash
git branch -M main
git push -u origin main
```

Replace the placeholders before running commands. **Never force push** for this workshop. If GitHub asks you to sign in, use GitHub's normal authentication flow.

## GitHub Pages deployment

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
5. Wait for the Pages URL to appear. Your entry file must be named `index.html`.

## Future improvements

- Add real project screenshots that you created or have permission to use.
- Add a downloadable résumé you wrote yourself.
- Add more accessible focus states and keyboard testing.
- Add a blog or project detail pages using only static files.

## What students learned

- Semantic HTML page structure
- Responsive CSS layouts and design variables
- Beginner DOM event handling
- Git status, staging, commits, remotes, branches, and pushes
- How to safely create and deploy a personal GitHub repository

## Safety reminder

Do not push to the workshop source repository. Create **your own** repository, remove the workshop `origin`, add your own `origin`, and then push normally. Never commit passwords, API keys, or private information.
