# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in theme switching capability
- **Component-Based**: Modular architecture with reusable components
- **Performance Optimized**: Built with Next.js for optimal performance

## 📋 Sections

- **Hero**: Eye-catching landing section with call-to-action buttons
- **About**: Personal introduction and background
- **Skills**: Showcase of technical skills and expertise
- **Experience**: Professional work history
- **Testimonials**: Client feedback and reviews
- **Contact**: Contact form for inquiries
- **Footer**: Social links and additional information

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SAHDEVSHARMA/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```
or
```bash
pnpm install
```
or
```bash
yarn install
```

3. Run the development server:
```bash
npm run dev
```
or
```bash
pnpm dev
```
or
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

To create a production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── skills.tsx
│   └── testimonials.tsx
├── public/               # Static assets
│   └── ss_resume.pdf    # Resume file
├── lib/                 # Utility functions
└── hooks/               # Custom React hooks
```

## 🎨 Customization

1. **Personal Information**: Update the content in component files to reflect your information
2. **Resume**: Replace `/public/ss_resume.pdf` with your own resume
3. **Images**: Add your photos to the `/public` directory
4. **Styling**: Modify `tailwind.config.ts` for custom theme colors
5. **Content**: Edit component files in `/components` directory

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sahdev Sharma**

- GitHub: [@SAHDEVSHARMA](https://github.com/SAHDEVSHARMA)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!