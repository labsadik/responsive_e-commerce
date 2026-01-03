
---

## 🛒 MAISON — Modern Responsive E-Commerce UI

**MAISON** is a modern, responsive e-commerce frontend built with **React**, **TypeScript**, and **Vite**.
The project emphasizes clean UI architecture, reusable components, and polished UX interactions, including smooth transitions and a preloader animation that enhances perceived performance.

This codebase is designed to be scalable, maintainable, and easily extensible for real-world e-commerce applications.

---

## 🚀 Key Features

* ⚡ **High-performance development workflow** powered by Vite
* ⚛️ **React + TypeScript** for type safety and predictable UI behavior
* 📱 **Fully responsive layout** optimized for mobile, tablet, and desktop
* 🧩 **Modular, reusable components** with clear separation of concerns
* 🛒 **Global cart state management** using React Context
* 🔍 **Search dialog** with accessible modal behavior
* ⏳ **Preloader animation** with smooth fade-out transition
* 🎨 **Clean and scalable UI structure** suitable for design iteration

---

## 🎯 UI / UX Highlights

* Consistent layout spacing and visual hierarchy
* Clear call-to-action patterns for product discovery and checkout
* Drawer-based cart experience for non-disruptive shopping flow
* Mobile-first navigation behavior
* Lightweight animations to improve feedback without impacting performance

---

## 🧱 Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **CSS / Modern styling practices**
* **ESLint** for code quality

---

## 📂 Project Structure

```
responsive_e-commerce/
│
├── public/
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NavLink.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CartDrawer.tsx
│   │   └── SearchDialog.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/
│   │   ├── products.ts
│   │   └── utils.ts
│   │
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Checkout.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── main.tsx
│   │
│   └── index.tsx
│
├── index.html
├── components.json
├── eslint.config.js
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## 📌 Notes

* This project focuses on **frontend UI and UX logic only**
* No backend services or payment gateway integrations are included
* Architecture is intentionally designed for easy integration with APIs, CMS, or headless commerce platforms

---

## 📄 License

This project is intended for **learning and personal use**.
You are free to modify, extend, and adapt it to suit your needs.

---

