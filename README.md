# RatePal Platform Documentation

**RatePal** is a platform where users can post reviews on various services. The platform includes features for service management, user authentication, and dynamic content rendering. This document provides details about the client and server setups, technologies used, and key functionalities.

## Live Demo
[RatePal | View the Live Website ](https://ratepal-4cd33.firebaseapp.com/)

## Server URL
[API URL](https://rate-pal-server.vercel.app/)

---

## Features

1. **Dynamic Pages**:
   - Service Details Page showing comprehensive information about a selected service.
   - Add Service Page for logged-in users to create new services.
   - My Services Page listing user-created services with options to update and delete entries.
   - My Reviews Page listing user-submitted reviews with update and delete options.
2. **Search and Filter**:
   - Search functionality for services based on keywords like title, category, or company name.
   - Filter services by category.
3. **Authentication System**:
   - Firebase-based login and registration with Auth Context for state management.
   - JWT-based authentication integrated with backend APIs.
4. **Spinners and Toast Notifications**:
   - Spinners for data loading states.
   - Toasts for CRUD operation feedback.
5. **Countup**:
   - Shows the number of users, reviews, and services using `react-countup`.

---

## Client-Side

### Technologies Used:
- **React**: For building the UI components and managing state.
- **Tailwind CSS & DaisyUI**: For styling the components with ease and flexibility.
- **Firebase**: For user authentication.
- **React Router**: For handling dynamic routing.

---

## Backend
- **Node.js**: A runtime environment for running JavaScript applications on the server-side efficiently.
- **Express.js**: A minimalist web framework for Node.js that simplifies building robust APIs and web servers.
- **MongoDB**: A NoSQL database for storing and managing data in a flexible, JSON-like document format.
- **CORS**: To handle cross-origin resource sharing.
- **jsonwebtoken**: For token-based authentication.
- **cookie-parser**: To parse cookies for storing JWTs.

---

## Running RatePal Locally

### Prerequisites
1. **Node.js**: Ensure you have Node.js installed on your system. Download it [here](https://nodejs.org/).
2. **Git**: Make sure Git is installed for cloning the repository. Download it [here](https://git-scm.com/).
3. **Firebase Project**: You need to create a Firebase project to set up authentication.
4. **MongoDB Atlas**: Create a MongoDB Atlas cluster and get your database credentials.

---

### Folder Structure
1. **RatePal-Client-Side-Main**: Contains the frontend code built with React.
2. **RatePal-Server-Side-Main**: Contains the backend code built with Node.js and Express.js.

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/ratepal.git
cd ratepal
```

---

### Step 2: Setup Client-Side
1. Navigate to the client folder:
   ```bash
   cd RatePal-Client-Side-Main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a file named `.env.local` in the `RatePal-Client-Side-Main` directory.
4. Add the Firebase configuration to the `.env.local` file:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

---

### Step 3: Setup Server-Side
1. Navigate to the server folder:
   ```bash
   cd RatePal-Server-Side-Main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `RatePal-Server-Side-Main` directory.
4. Add MongoDB Atlas credentials to the `.env` file:
   ```env
   DB_USERNAME=your_db_username
   DB_USERPASS=your_db_password
   ```
5. Start the server:
   ```bash
   npm run server
   ```

---

### Step 4: Update API URL in Client-Side
1. Ensure the API URL in the client-side code points to the running server. Update the API base URL in the appropriate configuration file.

---

### Additional Notes
- **Environment Variables**: Ensure `.env.local` and `.env` files are added to `.gitignore` to prevent accidental uploads of sensitive credentials.
- **Firebase Rules**: Update Firebase Firestore and Realtime Database rules (if used) to match your project's requirements.

Enjoy exploring **RatePal Platform** locally! 🌟🚀
