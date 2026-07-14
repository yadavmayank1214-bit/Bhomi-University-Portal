# 🎓 Bhomi University Student Portal

A modern, highly responsive, and interactive Student Dashboard Portal designed for seamless academic tracking. This web application provides students with dynamic access to their profiles, academic grades, real-time course registration tools, and administrative utilities.

---

## 🚀 Live Demo Accounts
To test the portal, navigate to the login screen and use any of the following credentials:
* **Passwords for all accounts:** `123`
* **Demo Student IDs (Usernames):**
  * `mayank` (Mayank Raj — BCA)
  * `anshuman` (Anshuman Sahay — Diploma CS)
  * `riya` (Riya Kumari — B.Tech CS)
  * `samar` (Samar Kumar — BCA)

---

## ✨ Key Features

* **Interactive Session Management:** Secure validation using Vanilla JavaScript and `localStorage` to retain active student sessions across pages.
* **Dynamic Profile Rendering:** Automatically populates individual student avatars, department details, personalized grades, and customized GPA metrics upon login.
* **Choice-Based Credit System (CBCS) Registration:** An interactive course selector featuring a live credit hour accumulator that prevents submission if requirements (minimum 10 credits) are not met.
* **Instant Search & Query Filter:** Responsive, real-time client-side search utility allowing users to instantly filter enrolled subjects and registration course options.
* **Administrative Utility Modals:** Integrated responsive modals for simulated safe fee payments (UPI option) and directory guidelines.
* **Fully Responsive UI:** Engineered with robust CSS Grid, Flexbox layouts, and custom typography to ensure a beautiful experience on both desktop monitors and mobile devices.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Modern Flexbox & Grid layouts)
* **Interactivity:** Vanilla JavaScript (ES6+), Web Storage API (`localStorage`)
* **Icons & Fonts:** FontAwesome Icons, Google Fonts (Poppins)

---

## 📁 Project Directory Structure

```text
Bhomi-University-Portal/
│
├── index.html          # Main Dashboard Layout
├── login.html          # Portal Authentication Screen
│
├── css/
│   └── style.css       # Core UI Styles & Accent Palettes
│
├── javascript/
│   └── script.js      # Core Logic, Search Systems & State Controls
│
└── images/             # Profile Photos & Campus Assets
    ├── bhomi.png.jpeg  # University Logo
    └── ...             # Student Avatars