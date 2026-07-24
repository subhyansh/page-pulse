# 🚀 Page Pulse

**Page Pulse** is a lightweight full-stack web application that analyzes a website and provides key SEO and webpage metrics. Simply enter a URL, and the application fetches the webpage, analyzes its content, and returns useful insights such as HTTP status, response time, page title, meta description, H1 count, images missing `alt` attributes, and approximate word count.

This project was developed as part of the **Digital Heroes Training Task**.

---

## 🌐 Live Demo

**Frontend:**  
https://page-pulse-swart.vercel.app/

**Backend API:**  
https://page-pulse-backend-ns22.onrender.com

---

## 📸 Preview

> **Homepage**

![Homepage Screenshot](screenshots/home.png)

> *(Optional: Add screenshots by creating a `screenshots` folder in your repository.)*

---

## ✨ Features

- 🔍 Website URL Analysis
- ⚡ HTTP Status Detection
- ⏱️ Response Time Measurement
- 📄 Page Title Extraction
- 📝 Meta Description Extraction
- 📌 H1 Tag Count
- 🖼️ Count Images Missing `alt` Attributes
- 📚 Approximate Word Count
- ✅ URL Validation
- 🚫 Handles Invalid URLs
- ⏳ Handles Request Timeouts
- 📄 Detects Non-HTML Responses
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js
- Axios
- Cheerio
- CORS
- Dotenv

### Deployment
- **Frontend:** Vercel
- **Backend:** Render

---

## 📂 Project Structure

```text
page-pulse/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/subhyansh/page-pulse.git
```

```bash
cd page-pulse
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Create Environment File

Create a `.env` file inside the `backend` folder.

```env
PORT=3000
```

---

### 4. Run the Backend

```bash
npm run dev
```

or

```bash
npm start
```

Backend runs at:

```
http://localhost:3000
```

---

### 5. Run the Frontend

Open:

```
frontend/index.html
```

using Live Server or any static server.

---

## 📡 API Documentation

### Analyze Website

**Endpoint**

```
POST /api/audit
```

### Request

```json
{
  "url": "https://example.com"
}
```

### Successful Response

```json
{
  "success": true,
  "status": 200,
  "responseTime": "95 ms",
  "title": "Example Domain",
  "metaDescription": "",
  "h1Count": 1,
  "imagesWithoutAlt": 0,
  "wordCount": 30
}
```

---

## 🧪 Error Handling

The application gracefully handles:

- Invalid URLs
- Empty Input
- Website Not Found
- Request Timeout
- Server Errors
- Non-HTML Responses

---

## 🎯 Future Improvements

- Lighthouse Performance Audit
- Open Graph Metadata Analysis
- Broken Link Detection
- SSL Certificate Information
- Accessibility Score
- Export Report as PDF
- Keyword Density Analysis
- Mobile Friendliness Check

---

## 👨‍💻 Author

**Prahallad Padhan**

- GitHub: https://github.com/subhyansh

---

## 📜 License

This project is intended for educational and internship evaluation purposes.

---

## 🙏 Acknowledgements

This project was developed as part of the **Digital Heroes Training Task**.

Special thanks to the Digital Heroes team for providing this practical full-stack development assignment.