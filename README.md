# Muvik - Digital Agency Website

A modern, responsive digital agency website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Fast loading times and SEO-friendly
- **Contact Form** - Functional contact form with validation
- **WhatsApp Integration** - Direct WhatsApp contact button
- **Accessible** - WCAG compliant with proper ARIA labels
- **SEO Ready** - Meta tags, structured data, and sitemap

## 🛠️ Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Yup validation
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
muvik-agency/
├── components/
│   ├── Layout.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSlider.jsx
│   ├── ContactForm.jsx
│   ├── WhatsAppButton.jsx
│   └── SEOHead.jsx
├── pages/
│   ├── index.js (Home)
│   ├── contact.js
│   └── api/
│       └── contact.js
├── public/
│   ├── muvik-logo.svg
│   └── muvik-mark.svg
├── styles/
│   └── globals.css
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd muvik-agency
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your configuration:
```env
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-password
CONTACT_EMAIL=vinaychaudhary9899@gmail.com
WHATSAPP_NUMBER=918252911976
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

The contact form requires SMTP configuration to send emails. You can use:

- **Gmail**: Use your Gmail account with an app password
- **SendGrid**: Professional email service
- **Mailgun**: Developer-friendly email API
- **Nodemailer**: Works with any SMTP provider

### Gmail Setup Example:

1. Enable 2-factor authentication on your Google account
2. Generate an app password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use these settings:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#2563eb', // Blue
  },
  purple: {
    600: '#7c3aed', // Purple
  }
}
```

### Contact Information
Update contact details in:
- `.env.local` for backend
- Components for display
- `components/WhatsAppButton.jsx` for WhatsApp link

### Images
Replace placeholder images with your own:
- Use high-quality images from Pexels, Unsplash, or your own
- Optimize images for web (WebP format recommended)
- Update alt text for accessibility

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: ≤ 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: ≥ 1025px

## 🔍 SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Semantic HTML markup
- Fast loading times
- Mobile-first design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on each push

### Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure environment variables

### Traditional Hosting

1. Run: `npm run build && npm run export`
2. Upload the `out` folder to your hosting provider

## 📞 Contact Information

- **Email**: vinaychaudhary9899@gmail.com
- **Phone**: +91-8252911976  
- **LinkedIn**: [linkedin.com/in/vinay-chaudhary2608](https://www.linkedin.com/in/vinay-chaudhary2608/)
- **WhatsApp**: [Direct Chat](https://wa.me/918252911976)

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new file in `pages/`
2. Follow the existing page structure
3. Add navigation link in `Header.jsx`
4. Update sitemap if needed

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images from [Pexels](https://pexels.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://framer.com/motion/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

**Need help or have questions?** Contact us at vinaychaudhary9899@gmail.com or [WhatsApp](https://wa.me/918252911976)!