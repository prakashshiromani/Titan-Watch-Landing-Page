# 📸 Screenshots & Visual Assets Guide

This guide helps you capture and organize visual assets for the Titan Watch Landing Page project to showcase in your README and portfolio.

---

## 🎬 What Screenshots to Capture

### 1. **Hero Section** (Desktop)
**File**: `/public/screenshots/01-hero-desktop.png`
- **What**: Full hero section with animated headline
- **Size**: 1920x1080
- **When**: Homepage load
- **Purpose**: Show cinematic first impression

```bash
# Quick tip: Use Chrome DevTools
# F12 → Ctrl+Shift+P → Screenshot (Capture full page)
```

---

### 2. **Product Showcase Animation** (Desktop)
**File**: `/public/screenshots/02-product-showcase.png`
- **What**: Product reveal section mid-animation
- **Size**: 1920x1080
- **When**: After scrolling 30% down
- **Purpose**: Highlight scroll animation quality

---

### 3. **Features Section** (Desktop)
**File**: `/public/screenshots/03-features-section.png`
- **What**: Feature highlights with icons
- **Size**: 1920x1080
- **When**: Mid-page features section
- **Purpose**: Show UI/UX quality

---

### 4. **Mobile View - Hero** (Mobile)
**File**: `/public/screenshots/04-mobile-hero.png`
- **What**: Full hero on mobile (375x667)
- **Size**: 375x667
- **When**: Mobile homepage
- **Purpose**: Prove responsive design

---

### 5. **Mobile View - Scroll Animation** (Mobile)
**File**: `/public/screenshots/05-mobile-product.png`
- **What**: Product section on mobile
- **Size**: 375x667
- **When**: Mobile product section
- **Purpose**: Show mobile performance

---

### 6. **Footer/CTA Section** (Desktop)
**File**: `/public/screenshots/06-footer.png`
- **What**: Call-to-action / footer section
- **Size**: 1920x1080
- **When**: Bottom of page
- **Purpose**: Show conversion funnel

---

## 🎥 How to Create GIFs (Optional but Powerful!)

### GIF 1: Scroll Animation Demo
**File**: `/public/screenshots/animation-scrolltelling.gif`

**Steps**:
1. Install ScreenToGif (free): https://www.screentogif.com/
2. Open your site on localhost
3. Record yourself scrolling through the hero section (5-7 seconds)
4. Export as GIF (reduce size to ~2MB)

**What to record**:
- Smooth scroll animation
- Product revealing
- Parallax effects
- Micro-interactions

---

### GIF 2: Mobile Responsiveness
**File**: `/public/screenshots/responsive-demo.gif`

**Steps**:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Record browser resizing from desktop → mobile
4. Export as GIF

---

## 📁 Folder Structure

Create this folder structure in your repo:

```
public/
└── screenshots/
    ├── 01-hero-desktop.png
    ├── 02-product-showcase.png
    ├── 03-features-section.png
    ├── 04-mobile-hero.png
    ├── 05-mobile-product.png
    ├── 06-footer.png
    ├── animation-scrolltelling.gif
    └── responsive-demo.gif
```

---

## 🖼️ How to Reference in README

Add this to your README after the "Visual Preview" section:

```markdown
## 🎬 Project Preview

### Desktop Experience
![Hero Section](./public/screenshots/01-hero-desktop.png)
*Premium dark theme with cinematic scrollytelling*

![Product Showcase](./public/screenshots/02-product-showcase.png)
*Scroll-triggered product reveal animation*

![Features Section](./public/screenshots/03-features-section.png)
*Clean UI with strong visual hierarchy*

### Mobile Responsiveness
![Mobile Hero](./public/screenshots/04-mobile-hero.png)
![Mobile Product](./public/screenshots/05-mobile-product.png)
*Fully responsive design optimized for all devices*

### Animation Demo
![Scroll Animation](./public/screenshots/animation-scrolltelling.gif)
*Smooth 60FPS scroll-based animations*

![Responsive Demo](./public/screenshots/responsive-demo.gif)
*Mobile-first responsive design*
```

---

## 📸 Capture Instructions by Tool

### **Chrome DevTools** (Easiest)
```
1. Open DevTools (F12)
2. Ctrl + Shift + P
3. Type "Screenshot"
4. Choose "Capture full page screenshot"
```

### **macOS Screenshot** (Native)
```
Command + Shift + 4  (Select area)
Command + Shift + 5  (Full screen / record)
```

### **Windows Screenshot** (Native)
```
Windows + Shift + S  (Snip & Sketch)
PrtScn → Paste in Paint
```

### **Online Screenshot Tools**
- [Screencastify](https://www.screencastify.com/) - Record video/GIF
- [CloudApp](https://www.getcloudapp.com/) - Quick screenshots
- [Gyroflow Toolbox](https://gyroflow.com/) - GIF creation

---

## ✨ Screenshot Quality Tips

✅ **DO**:
- Use high resolution (1920x1080 for desktop)
- Capture at natural scroll position
- Include full viewport
- Use consistent lighting
- Show animations at peak moments
- Compress images (use TinyPNG)

❌ **DON'T**:
- Use blurry screenshots
- Include browser tabs/bookmarks
- Show cursor in middle of screen
- Use extreme zoom levels
- Include debug tools/console

---

## 🗜️ Optimize Images

Before uploading, compress images to reduce file size:

### Using TinyPNG (Free)
1. Go to https://tinypng.com
2. Upload PNG/JPG files
3. Download compressed versions
4. File sizes reduced by 50-80%

### Using ImageOptim (Mac)
```bash
brew install imageoptim
# Drag files into ImageOptim app
```

### Using ImageMagick (CLI)
```bash
convert input.png -strip -quality 85 output.png
```

---

## 📊 Example README Integration

Here's how it looks in a professional README:

````markdown
## 🎬 Project Preview

### Desktop Experience
![Hero Section](./public/screenshots/01-hero-desktop.png)

### Mobile Responsiveness
![Mobile Hero](./public/screenshots/04-mobile-hero.png)

### Live Animation
![Scroll Animation](./public/screenshots/animation-scrolltelling.gif)
````

---

## 🎯 Checklist Before Uploading

- [ ] Created `/public/screenshots/` folder
- [ ] Captured 6 static screenshots (desktop + mobile)
- [ ] Created 2 GIF demos (optional but recommended)
- [ ] Compressed all images with TinyPNG
- [ ] Renamed files with clear numbering (01, 02, 03...)
- [ ] Updated README with image references
- [ ] Tested image links in README preview
- [ ] Committed and pushed to GitHub

---

## 💡 Pro Tips for Freelancing

1. **Show Before/After** - Add a screenshot of the original design vs. your version
2. **Add Annotations** - Use tools like Figma to annotate key features
3. **Include Metrics** - Screenshot Lighthouse scores alongside design
4. **Show Process** - Include wireframe → design → final screenshots
5. **Mobile-First** - Always show mobile version prominently

---

## 🚀 Next Steps

1. ✅ Create screenshots folder
2. ✅ Capture 6 screenshots
3. ✅ Create 2 GIFs (optional)
4. ✅ Compress images with TinyPNG
5. ✅ Update README with image links
6. ✅ Commit and push to GitHub

Once done, your project will be **portfolio-ready**! 🎉

---

**Created**: June 2026
**For**: Titan Watch Landing Page
