🩺 Health Tracker Web App
This is a simple web-based health tracking system that allows users to log in, manage personal health records, and track key wellness indicators like blood pressure, sugar levels, sleep, water intake, and more.

🚀 Features
🔐 Login System (with dummy/localStorage auth)

🧍 Add Personal Information

📈 Health Tracker Logging

🎯 Visual Alerts for:

High/Low Blood Pressure

High/Low Sugar Levels

✅ Client-side validation

🖼️ Interface
login.html – Login page for users

health.html – Main dashboard after login

Data handled via JavaScript (appnew.js / login.js)

🧪 Sample Credentials (if using dummy login):
Username: admin

Password: password

(Or use localStorage to register users)

🛠️ Tech Stack
HTML5, CSS3

JavaScript (Vanilla)

📂 Project Structure
plaintext
Copy
Edit
├── index.html / login.html
├── health.html
├── appnew.js / app.js
├── login.js
├── styles.css
└── README.md
📝 How It Works
User logs in via login.html

On success, redirected to health.html

Users can:

Add personal data

Add health tracker data

Data gets displayed dynamically with indicators

✅ Future Improvements (optional)
Persistent storage with Firebase or MongoDB

User registration & logout

Dashboard charts and reports
