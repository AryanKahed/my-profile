# Aryan Kahed | Developer Portfolio

A personal portfolio for **Aryan Kahed**, a **BCA student at Career Point University** and developer in progress. Built with HTML, CSS, and vanilla JavaScript.

## About me

I am learning **C, Python, HTML, CSS, JavaScript, Git, and GitHub**. My focus is **web development, programming fundamentals, data structures, and problem solving**. I am building my skills through consistent practice and small projects.

## Connect

- GitHub: [AryanKahed](https://github.com/AryanKahed)
- LinkedIn: [Aryan Kahed](https://www.linkedin.com/in/aryan-kahed-81269b310/)
- Email: [aryankahed44@gmail.com](mailto:aryankahed44@gmail.com)

## Features

- Original responsive design and light/dark appearance
- Mobile navigation menu
- Theme preference saved in the browser when storage is available
- Smooth anchor scrolling
- Web/Learning project filters
- Automatic footer year
- GitHub, LinkedIn, and email links

The three project cards remain clearly marked **demo projects**. They are template examples, not claims about completed work. Their placeholder links stay disabled until real project URLs are added.

## Files

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

No dependencies, build step, assets folder, backend, or API key is required. Keep these files together and double-click `index.html` to preview the website.

## Source preservation

The original HTML was personalized and the original CSS and `.gitignore` were copied unchanged. The referenced conversation did not provide an accessible `script.js` attachment, so this file was recreated to implement the original README's documented behavior: menu, persistent theme, project filtering, footer year, and disabled demo links. Exact equivalence to the unavailable script cannot be verified.

## Upload or replace files on GitHub

Recommended repository name: `portfolio`. Its expected Pages address is https://aryankahed.github.io/my-profile/ after successful deployment.

### Create a repository if you do not already have one

1. Sign in to https://github.com as **AryanKahed**.
2. Click **+ → New repository**.
3. Set the owner to **AryanKahed** and repository name to **portfolio**.
4. Choose **Public**. Select **Add a README file** so the repository starts with a branch. Leave the license and generated `.gitignore` options unset.
5. Click **Create repository**.
6. Check the branch selector. The steps below assume **main**; use the actual branch name if different.

### Upload the personalized files (also works for replacing existing files)

1. Extract `Aryan-Kahed-Portfolio.zip` on your computer, or download the five individual files. Upload the files themselves, not the ZIP.
2. Open your own portfolio repository and select **main** on the **Code** tab.
3. If the old portfolio lives at the repository root, stay there. All five files must sit directly at that root for the Pages setup below. Back up the old files if you want a separate copy; GitHub also retains committed versions in history.
4. Select **Add file → Upload files**.
5. Drag in **index.html, style.css, script.js, README.md, and .gitignore** together. Do not drag the containing folder. Same-path, same-name uploads replace the existing versions when committed.
6. Enter the commit message **Personalize portfolio for Aryan Kahed**.
7. For your personal repository, select **Commit directly to the main branch**, then **Commit changes**. If the repository requires a new branch, choose **Create a new branch**, click **Propose changes**, open the pull request, and merge it into main before continuing.
8. On the Code tab, confirm all five filenames appear at the root. The entry file must be exactly `index.html`, not `index.html.txt` or `Index.html`.
9. On Windows, if `.gitignore` is difficult to select, enable **View → Show → Hidden items** and **File name extensions** in File Explorer. Alternatively use **Add file → Create new file**, name it `.gitignore`, paste the delivered contents, and commit it; if it already exists, open it and use the pencil edit button instead.

## Enable GitHub Pages

1. Open your portfolio repository's **Settings**.
2. In the left sidebar, select **Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Under **Branch**, select **main** (or the branch containing your files).
5. Select **/ (root)** as the folder and click **Save**.
6. Open the repository's **Actions** tab and wait for the Pages build/deployment to finish successfully. Allow a few minutes; deployment is not instant.
7. Return to **Settings → Pages** and use **Visit site** or the displayed website link. With repository `portfolio`, the expected URL is https://aryankahed.github.io/my-profile/.
8. Open the site and check your name, college, email, GitHub and LinkedIn links, menu on mobile, theme toggle, and All/Web/Learning filters.
9. If you see an old version, refresh with **Ctrl+F5** after deployment completes. For a 404, confirm the deployment succeeded and `index.html` is at the selected branch's root. Build failures are shown in **Actions**.
10. Future updates use the same upload/replace process. Commits to the selected publishing branch trigger another deployment.

Optional: name the repository **AryanKahed.github.io** to use https://aryankahed.github.io/ as the homepage URL. The special **AryanKahed** repository is for the GitHub profile README; it is separate from this portfolio repository.

## Add your actual projects later

In `index.html`, update each demo project's title, description, tags, and real repository URL. Remove `disabled-link` from a link once its real URL is supplied, and replace the demo label with an accurate status. Keep `data-category="web"` or `data-category="learning"` to preserve filtering.

## Official GitHub references

- [Uploading files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Configuring GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
