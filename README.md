# 🐔 MLU Poultry Farm - Modern React Website

A modern, responsive website for MLU Poultry Farm built with **Vite + React** featuring animations, glassmorphism UI, and WhatsApp integration.

## ✨ Features

- 🎬 **Cinematic Hero Section** with video background
- 📊 **Live Animated Counters** (eggs produced, chickens in stock, etc.)
- 🛍️ **Interactive Product Showcase** with glassmorphism cards
- 💬 **WhatsApp Order Integration** for instant customer contact
- ⭐ **Customer Testimonials** with smooth animations
- 📱 **Fully Responsive** design for mobile and desktop
- 🎨 **Premium Dark Theme** with gold accents
- ⚡ **Smooth Animations** using Framer Motion

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
mlu-poultry-farm/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Deployment (Vercel)

1. Create a new GitHub repository and push this project (see commands below).
2. In Vercel, import the GitHub repository and set the framework preset to "Vite".
3. Build command: `npm run build`
4. Output directory: `dist`

Deployment will auto-trigger on every push to the `main` branch.


## 🎨 Customization

### Update Contact Information

Edit `src/components/Contact.jsx`:
- Update phone number in WhatsApp URL (line 21)
- Change email, address, and business hours

### Add Your Products

Edit `src/App.jsx` - modify the `products` array:
```javascript
const products = [
  {
    id: 1,
    name: "Table Eggs - 30s Pack",
    price: 65,
    image: "your-image-url",
    description: "Farm-fresh table eggs with full traceability",
    features: ["Traceable", "Fresh Daily", "Barcoded"]
  }
]
```

Current products include:
- Table Eggs (30s & 60s packs)
- Day-Old Chicks
- Chicken Meat (Roosters & Spent Hens)
- Organic Fertilizer
- Wholesale Packages

### Change Colors

Edit `src/styles/global.css`:
```css
:root {
  --primary: #0b3d2e;      /* Dark green */
  --accent: #d4af37;        /* Gold */
  --background: #0a0a0a;    /* Dark background */
}
```

### Replace Hero Video

In `src/components/Hero.jsx`, update the video source URL or add your own video to the `public` folder.

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **CSS3** - Styling with glassmorphism effects

## 🌐 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

## 📱 WhatsApp Integration

The contact form automatically opens WhatsApp with a pre-filled message. Update the phone number in:
- `src/components/Contact.jsx` (line 21)

Format: `27760000000` (country code + number, no spaces or +)

## 🎯 Features Roadmap

- [ ] Shopping cart with checkout
- [ ] Admin dashboard for inventory
- [ ] Firebase integration for real-time stock
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] Customer login/registration

## 📄 License

This project is created for MLU Poultry Farm.

## 🤝 Support

For questions or support, contact:
- 📧 Email: info@mlupoultryfarm.co.za
- 📞 Phone: +27 76 000 0000

---

**Built with ❤️ for MLU Poultry Farm**
