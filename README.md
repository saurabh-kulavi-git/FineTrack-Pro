💰 FinTrack Pro

A modern, responsive, and browser-based Personal Finance Tracker built using HTML, CSS, and Vanilla JavaScript. Easily manage your income and expenses, monitor your financial health through interactive charts, and securely store your data using the browser's Local Storage—without any backend or database.

📖 Table of Contents
Overview
Features
Tech Stack
Project Structure
Screenshots
Installation
Usage
Application Flow
Key Concepts Used
Future Enhancements
Learning Outcomes
Author
License
📌 Overview

FinTrack Pro is a lightweight personal finance management application that allows users to track their income and expenses directly in the browser.

Unlike traditional finance applications, this project requires no backend server, no database, and no authentication system. All transaction data and user preferences are stored locally using the browser's Local Storage API, making it easy to run on any modern web browser.

The application provides real-time financial insights through summary cards, transaction history, and interactive charts.

✨ Features

📊 Dashboard
Current Balance
Total Income
Total Expenses
Total Transactions
Real-time dashboard updates

💳 Transaction Management
Add Income
Add Expense
Delete Transactions
Form Validation
Date Selection
Category Selection
Automatic Balance Calculation

📈 Analytics
Interactive Cash Flow Chart
Income vs Expense Visualization
Automatic Chart Updates

🔍 Filters
View All Transactions
View Only Income
View Only Expenses
⚙️ User Settings
Change Display Name
Currency Switcher
Dark Mode
Reset All Data

💾 Data Persistence
Local Storage Integration
Persistent User Preferences
Automatic Data Saving
No Database Required

📱 Responsive Design
Desktop
Tablet
Mobile Devices
🛠 Tech Stack
Technology	Purpose
HTML5	Structure
CSS3	Styling & Responsive Design
JavaScript (ES6)	Application Logic
Chart.js	Data Visualization
Local Storage API	Persistent Data Storage

📂 Project Structure
FinTrack-Pro/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo.png
│
├── screenshots/
│   ├── dashboard.png
│   ├── settings.png
│   ├── dark-mode.png
│   └── mobile.png
│
├── README.md
└── LICENSE

⚡ Installation
Clone the Repository
git clone https://github.com/yourusername/FinTrack-Pro.git
Navigate to Project
cd FinTrack-Pro
Run the Project

Simply open the index.html file in your preferred browser.

OR

Run using VS Code Live Server.

No installation or dependencies are required.

🚀 Usage
Add Transaction
Click Add Transaction
Select Income or Expense
Enter Description
Enter Amount
Choose Date
Select Category
Click Save
View Dashboard

The dashboard automatically updates:

Current Balance
Total Income
Total Expenses
Total Transactions
Cash Flow Chart
Filter Transactions

Use the filter buttons to display:

All Transactions
Income Only
Expense Only
Change Settings

Navigate to Settings to:

Change Display Name
Change Currency
Toggle Dark Mode
Reset All Data

🔄 Application Flow
User Opens Website
        │
        ▼
Dashboard Loads
        │
        ▼
Load Data From Local Storage
        │
        ▼
Render Dashboard
        │
        ▼
User Adds Transaction
        │
        ▼
Validate Form
        │
        ▼
Save Transaction
        │
        ▼
Update Local Storage
        │
        ▼
Refresh Dashboard
        │
        ▼
Update Chart

🧠 Key Concepts Used
HTML
Semantic Elements
Forms
Tables
Responsive Layout
CSS
Flexbox
CSS Grid
CSS Variables
Animations
Media Queries
Dark Mode
Responsive Design
JavaScript
ES6 Syntax
DOM Manipulation
Event Listeners
Array Methods
Objects
Functions
Template Literals
Form Validation
Dynamic Rendering
Browser APIs
Local Storage API
External Library
Chart.js

📌 Core Functionalities
Add Transactions
Delete Transactions
Dynamic Dashboard
Transaction Filtering
Chart Visualization
Currency Formatting
Dark Mode
Local Storage
Responsive UI

🚧 Future Enhancements
✏️ Edit Transactions
🔍 Search Transactions
📄 Export CSV
📑 PDF Report
📅 Monthly Reports
📊 Expense Category Pie Chart
💰 Budget Planner
🔔 Toast Notifications
🔄 Recurring Transactions
📈 Spending Analytics
☁️ Cloud Database Integration
🔐 User Authentication
📱 Progressive Web App (PWA)
🎯 Learning Outcomes

This project demonstrates practical knowledge of:

HTML5
CSS3
JavaScript ES6+
DOM Manipulation
Event Handling
Responsive Web Design
Local Storage API
CRUD Operations
Dynamic UI Rendering
Data Visualization
Browser APIs

🤝 Contributing

Contributions are welcome.

Fork the repository.
Create a feature branch.
git checkout -b feature/new-feature
Commit your changes.
git commit -m "Add new feature"
Push to your branch.
git push origin feature/new-feature
Open a Pull Request.