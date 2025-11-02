# Equinox Login Page

A modern, tech-futuristic themed fake login page for the Equinox app, deployed to GitHub Pages with custom domain support.

## Features

- 🚀 Modern glassmorphism design with futuristic aesthetics
- ⚡ Smooth animations and transitions
- 📱 Fully responsive for all devices
- 🔒 Fake authentication error handling
- ✨ Animated starfield background
- 🎨 Dark theme with cyan and purple gradients

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Instructions

1. **Push this repository to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Equinox login page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Configure GitHub Pages in Repository Settings**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the changes

3. **Configure Custom Domains**

   After the first deployment, you need to add all three custom domains in your repository settings:
   
   - Go to Settings → Pages
   - Scroll to "Custom domain"
   - Add these domains:
     - `equinox.hellosingularity.com`
     - `equinox-hub.hellosingularity.com`
     - `equinoxhub.hellosingularity.com`

### DNS Configuration

You need to create **CNAME records** in your DNS provider for `hellosingularity.com`:

| Type  | Name                 | Value                           |
|-------|----------------------|---------------------------------|
| CNAME | equinox              | YOUR_USERNAME.github.io         |
| CNAME | equinox-hub          | YOUR_USERNAME.github.io         |
| CNAME | equinoxhub           | YOUR_USERNAME.github.io         |

Replace `YOUR_USERNAME` with your actual GitHub username.

**Example for Cloudflare, Namecheap, or other DNS providers:**
- Host: `equinox` → Value: `yourusername.github.io`
- Host: `equinox-hub` → Value: `yourusername.github.io`
- Host: `equinoxhub` → Value: `yourusername.github.io`

**Note:** Make sure to enable "Enforce HTTPS" in your GitHub Pages settings after DNS propagation is complete.

## Local Development

To view the page locally:

1. Clone the repository
2. Open `index.html` in a web browser
   
Or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-cyan: #00ffff;
    --primary-blue: #6366f1;
    --primary-purple: #8b5cf6;
    --dark-bg: #0a0a0f;
    /* ... more variables */
}
```

### Error Message

Edit the error message in `script.js`:

```javascript
showErrorMessage('Your custom error message here.');
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your projects.

