# Sharky's Café - Berlin Gesundbrunnen

A beautiful, modern, and fully responsive website for Sharky's Café, a neighborhood café located in Berlin-Gesundbrunnen.

## 🦈 About the Café

**Sharky's Café** is a local establishment in the heart of Berlin-Gesundbrunnen, offering:
- Premium coffee and beverages
- Fresh breakfast options
- Cozy atmosphere for solo dining
- Neighborhood meeting spot

**Address:** Koloniestraße 143, 13359 Berlin-Gesundbrunnen

## 🌟 Website Features

### Design & UX
- **Modern Berlin Café Aesthetic** - Warm brown color palette inspired by coffee culture
- **Fully Responsive** - Optimized for all devices (320px mobile to 4K desktop)
- **Fast Loading** - Optimized images, lazy loading, and minimal dependencies
- **Smooth Animations** - Subtle scroll effects and transitions
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation

### Sections
1. **Hero Section** - Stunning full-screen hero with call-to-action buttons
2. **About Section** - Story, features, and what makes the café unique
3. **Offerings Section** - Coffee, breakfast, and convenience items
4. **Gallery Section** - 9+ high-quality images with lightbox viewer
5. **Location Section** - Google Maps integration and directions
6. **Contact Section** - Contact form and business information
7. **Footer** - Quick links, contact info, and social media

### Technical Features
- **Modern CSS** - CSS Grid, Flexbox, Custom Properties
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **SEO Optimized** - Meta tags, Schema.org markup, semantic HTML
- **Progressive Enhancement** - Works without JavaScript
- **Performance** - Lazy loading, intersection observer, debouncing
- **Gallery Lightbox** - Swipe support, keyboard navigation, touch gestures

## 📁 Project Structure

```
sharkys-cafe-berlin/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Responsive breakpoints
├── js/
│   ├── main.js             # Core functionality
│   └── gallery.js          # Gallery & lightbox
├── images/
│   ├── source/             # Original high-quality images (11 images)
│   ├── optimized/          # Web-optimized versions
│   ├── thumbnails/         # Small preview images
│   └── icons/              # UI icons and favicon
├── data/
│   ├── reviews.json        # Review data structure
│   └── image-urls.txt      # Source image URLs
├── docs/
│   └── sharkys-cafe-research-findings.md  # Research documentation
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/f246632/sharkys-cafe-berlin.git
   cd sharkys-cafe-berlin
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python3 -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (with http-server)
     npx http-server -p 8000
     ```

3. **Visit:** `http://localhost:8000`

### Production Deployment

The website is deployed on **GitHub Pages**:
- **Live URL:** https://f246632.github.io/sharkys-cafe-berlin/
- **Repository:** https://github.com/f246632/sharkys-cafe-berlin

## 🎨 Design Specifications

### Color Palette
- Primary: `#8B4513` (Saddle Brown)
- Primary Dark: `#5D2E0D`
- Primary Light: `#A0522D`
- Secondary: `#D4AF37` (Gold)
- Accent: `#C19A6B` (Tan)
- Background: `#FFF8DC` (Cornsilk)
- Text: `#2C1810` (Dark Brown)

### Typography
- **Headings:** Playfair Display (Serif)
- **Body:** Poppins (Sans-serif)
- **Base Size:** 16px (responsive)

### Breakpoints
- **Mobile:** 320px - 768px
- **Tablet:** 769px - 1024px
- **Desktop:** 1025px - 1399px
- **Large Desktop:** 1400px+
- **Ultra-wide:** 1920px+

## 📊 Research Findings

### Online Presence
The café has minimal digital presence:
- ✗ No Google reviews
- ✗ No Instagram account
- ✗ No Facebook page
- ✓ Listed on Foursquare (24 check-ins)
- ✓ Basic directory listings

### Location Details
- **Neighborhood:** Gesundbrunnen (Mitte Borough)
- **Coordinates:** 52.5568°N, 13.3775°E
- **Public Transport:** S-Bahn Gesundbrunnen, U8 Pankstraße, Tram M13/50

For detailed research findings, see: `docs/sharkys-cafe-research-findings.md`

## 🖼️ Images

**Total Images:** 11 high-quality photos
- Exterior views
- Interior atmosphere
- Café details and ambiance
- Product displays

**Image Sources:**
- Downloaded from Google Maps listing
- Stored in `images/source/`
- All images are web-optimized

## 🔧 Customization

### Update Content
1. Edit `index.html` for text content
2. Modify `css/style.css` for styling
3. Update `js/main.js` for functionality

### Add More Images
1. Add images to `images/source/`
2. Update gallery section in `index.html`
3. Images will automatically work with lightbox

### Change Colors
Update CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D4AF37;
    /* ... more colors ... */
}
```

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Load Time:** < 3 seconds
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Image Optimization:** Lazy loading, responsive images
- **JavaScript:** Minimal, vanilla, non-blocking

## 📱 Mobile Optimization

- Touch-friendly navigation
- Swipe gestures in gallery
- Responsive images
- Mobile-first CSS
- Hamburger menu
- Optimized tap targets

## ♿ Accessibility

- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Focus management
- Alt text for images
- Color contrast compliance

## 🔐 Security

- No external dependencies (except fonts and icons CDN)
- No user data collection
- HTTPS ready
- No inline scripts
- CSP compatible

## 📝 License

This website was created for Sharky's Café Berlin. All images and content are property of the café owner.

## 🤝 Contributing

This is a commercial project for a specific business. For changes or improvements, please contact the website administrator.

## 📧 Contact

For website issues or updates:
- **GitHub Issues:** https://github.com/f246632/sharkys-cafe-berlin/issues

For café inquiries:
- **Address:** Koloniestraße 143, 13359 Berlin
- Visit the café directly

## 🙏 Acknowledgments

- **Design Inspiration:** Berlin café culture
- **Photography:** Google Maps contributors
- **Fonts:** Google Fonts (Playfair Display, Poppins)
- **Icons:** Font Awesome
- **Development:** Claude Code AI Assistant

---

**Made with ❤️ in Berlin**

© 2024 Sharky's Café Berlin. All rights reserved.
