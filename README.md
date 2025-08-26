# 🚀 Next.js Starters

A **minimal and scalable starter template** for building modern web apps with **Next.js (App Router)**. This repo gives you a clean foundation to kickstart your projects without extra setup overhead.

## 📂 Project Structure

```
.
├── app/            # Next.js App Router pages
│   └── page.tsx    # Home page
├── components/     # Reusable UI components
├── context/        # React context providers
├── lib/            # Utility functions, helpers
├── pages/          # (Optional) Legacy Pages Router
├── public/         # Static assets (images, icons, etc.)
├── styles/         # Global styles
├── next.config.ts  # Next.js configuration
├── tsconfig.json   # TypeScript configuration
└── package.json
```

## ⚡ Features

* ✅ **Next.js App Router** setup (`app/` directory)
* ✅ **TypeScript** enabled by default
* ✅ **Font optimization** with `next/font` (Geist font)
* ✅ Clean folder structure for scaling projects
* ✅ Ready-to-use configuration files (`tsconfig`, `next.config`, etc.)

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/the-bipu/nextjs-starters.git
cd nextjs-starters
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your app.

## 🛠️ Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build production version |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint checks |

## 📦 Deployment

You can deploy this template easily to platforms like:

* **Vercel** (recommended)
* **Netlify** 
* **Dockerized servers**

### For Vercel:
1. Push your repo to GitHub
2. Import into Vercel dashboard
3. Done 🎉

## 📌 Roadmap

* Add Tailwind CSS + shadcn/ui integration (optional branch)
* Example API routes setup
* Authentication template (NextAuth.js)
* CI/CD workflow with GitHub Actions

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues or submit a PR.

## 📜 License

This project is licensed under the MIT License.

---

🔥 **Ready to build?** Fork this repo and start your Next.js project today!
