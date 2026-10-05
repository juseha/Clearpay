# ClearPay — Responsive Fintech Website

ClearPay is a fictional fintech startup website created as part of the
Appverse Technologies Web Foundations and JavaScript Mastery track.

The project focuses on responsive web design, CSS design tokens,
JavaScript interactivity, accessibility, animations, and theme persistence.

---

## 🚀 Live Demo

Live Demo:

https://transcendent-tiramisu-68da31.netlify.app/pricing

---

## 📌 Project Overview

ClearPay is a modern responsive fintech website designed to make digital
payment services simple, clear, and easy to understand.

The website includes multiple pages, a pricing calculator, feature filters,
form validation, scroll animations, and a persistent dark/light theme.

The project was built using HTML5, CSS3, and Vanilla JavaScript without
using any frontend framework.

---

## ✨ Main Features

### 1. Responsive Design

The website is designed to work across different screen sizes:

- Mobile devices
- Tablets
- Laptops
- Desktop screens
- Large screens up to 2560px

The layout adapts using CSS Grid, Flexbox, media queries, and responsive
design techniques.

---

### 2. Multi-Page Website

ClearPay contains the following pages:

- Home
- Features
- Pricing
- About
- Contact

Each page has consistent navigation, branding, styling, and responsive
behavior.

---

### 3. Pricing Calculator

The pricing page includes an interactive pricing calculator.

Users can enter:

- Monthly payment volume
- Number of transactions
- International transaction option
- Business size

The calculator then generates an estimated:

- Monthly cost
- Annual cost
- Effective rate
- Recommended plan

The calculation is performed using JavaScript.

---

### 4. Feature Filtering

The Features page contains filter buttons that allow users to filter
features by category.

Available categories include:

- All
- Payments
- Analytics
- Security
- Automation

The filtering is handled using Vanilla JavaScript.

---

### 5. Dark and Light Theme

ClearPay includes a theme toggle for switching between:

- Light Theme
- Dark Theme

The selected theme is saved using `localStorage`.

This means the selected theme remains available when the user revisits
the website.

---

### 6. Scroll Animations

The website uses the JavaScript `IntersectionObserver` API to reveal
elements as they enter the viewport.

This creates lightweight scroll-based animations without using external
animation libraries.

---

### 7. Contact Form Validation

The Contact page includes a validated contact form.

The form checks:

- Name
- Email
- Subject / reason
- Message

Validation messages are displayed when required information is missing
or invalid.

---

### 8. Accessibility

The website follows basic accessibility practices including:

- Semantic HTML5 elements
- Proper heading structure
- Form labels
- Keyboard focus states
- Accessible buttons
- Alternative text for images
- Skip navigation support
- Reduced motion support

---

## 🎨 Design System

ClearPay uses a custom CSS design token system.

### Brand Colors

| Color | Hex |
|---|---|
| Plum | `#490839` |
| Candy | `#FDD835` |
| Pink | `#D3E0D3` |
| Carrot | `#F94500` |

### Light Theme

The light theme uses a soft neutral background with Plum as the primary
brand color.

### Dark Theme

The dark theme uses a deep Plum-based background with soft green surfaces,
Candy highlights, and Carrot accent colors.

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript ES6+

### CSS

- CSS Variables
- CSS Grid
- Flexbox
- Media Queries
- CSS Animations
- Responsive Design

### JavaScript

- DOM Manipulation
- Event Listeners
- Array Methods
- IntersectionObserver
- Form Validation
- localStorage

### Development Tools

- Visual Studio Code
- Google Chrome
- Chrome DevTools
- Git
- GitHub

---

## 📂 Project Structure

```text
ClearPay/
│
├── index.html
├── features.html
├── pricing.html
├── about.html
├── contact.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── calculator.js
│   ├── features.js
│   ├── contact.js
│   └── theme.js
│
├── images/
│
└── README.md