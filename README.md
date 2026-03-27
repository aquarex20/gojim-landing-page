# GoJim Landing Page

A modern, responsive landing page for the GoJim fitness app.

## 🚀 Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, contemporary UI with smooth animations
- **Interactive Elements**: Engaging user experience with hover effects and transitions
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📋 Structure

```
landing-page/
├── index.html       # Main HTML file
├── styles.css       # CSS styles and animations
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Features**: Showcase of 8 key features with icons and descriptions
3. **How It Works**: 3-step process explanation
4. **Workout Types**: Different activity types supported by the app
5. **Download**: App store buttons and download CTA
6. **Footer**: Links, social media, and additional information

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Getting Started

### Option 1: Local Development

1. Simply open `index.html` in your web browser
2. No build process or server required!

### Option 2: Local Server (Recommended)

For best results, serve the files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 🌐 Deployment

### Deploy to Netlify

1. Create a new site on [Netlify](https://netlify.com)
2. Drag and drop the `landing-page` folder
3. Your site will be live in seconds!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the landing-page directory
3. Follow the prompts

### Deploy to GitHub Pages

1. Create a new repository
2. Push the landing-page files
3. Go to Settings > Pages
4. Select the main branch as source
5. Your site will be live at `https://username.github.io/repo-name`

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #ec4899;
    /* ... more colors */
}
```

### Content

1. **Text**: Edit directly in `index.html`
2. **Images**: Replace the emoji icons with actual images/icons
3. **Links**: Update download links when app is live

### Fonts

Change the Google Font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@...&display=swap" rel="stylesheet">
```

And update the CSS variable:

```css
--font-sans: 'YourFont', sans-serif;
```

## 📊 Analytics (Optional)

Add Google Analytics by inserting before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔗 Adding Actual App Store Links

When your app is published, update the download buttons in `index.html`:

```html
<!-- App Store -->
<a href="https://apps.apple.com/app/your-app-id" class="store-button">

<!-- Google Play -->
<a href="https://play.google.com/store/apps/details?id=com.hriouen.gojim" class="store-button">
```

## 📸 Screenshots

To add real app screenshots:

1. Replace the phone mockup content in the hero section
2. Add an `images` folder
3. Update the HTML to reference your images:

```html
<img src="images/screenshot-1.png" alt="GoJim App Screenshot">
```

## 🐛 Known Issues

- Mobile menu toggle is styled but needs JavaScript enhancement for smooth animations
- App store links are placeholders and show alerts
- Phone mockup uses CSS only - consider adding actual screenshots

## 🚀 Future Enhancements

- [ ] Add blog section
- [ ] Include testimonials
- [ ] Add video demo
- [ ] Create pricing page
- [ ] Add contact form
- [ ] Implement dark mode
- [ ] Add more animations
- [ ] Include app screenshots
- [ ] Add FAQ section

## 📝 License

This landing page is part of the GoJim project.

## 🤝 Contributing

Feel free to customize this landing page for your needs!

## 📧 Contact

For questions or feedback about GoJim, visit the contact section on the website.

---

**Built with ❤️ for the fitness community**



# gojim-landing-page
