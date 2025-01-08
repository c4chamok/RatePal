# RatePal Platform Documentation

RatePal is a platform where users can post reviews on various services. The platform includes features for service management, user authentication, and dynamic content rendering. This document provides details about the client and server setups, technologies used, and key functionalities.

## Live Demo
[RatePal | View the Live Website ](https://ratepal-4cd33.firebaseapp.com/) 

## Server URL
[Api URL](https://rate-pal-server.vercel.app/) 

---


## Features

1. **Dynamic Pages**: 
- Service Details Page showing comprehensive information about a selected service.

- Add Service Page for logged-in users to create new services.

- My Services Page listing user-created services with options to update and delete entries.

- My Reviews Page listing user-submitted reviews with update and delete options
2. **Search and Filter**: 
- Search functionality for services based on keywords like title, category, or company name.
- Filter services by category.
3. **Authentication System**: 

- Firebase-based login and registration with Auth Context for state management.

- JWT-based authentication integrated with backend APIs.

4. **Spinners and Toast Notifications**:

- Spinners for data loading states.

- Toasts for CRUD operation feedback
5. **Countup**: 
- Shows the number of users, reviews, and services using react-countup

## Client-Side

### Technologies Used:


- **React**: For building the UI components and managing state.
- **Tailwind CSS & DaisyUI**:  For styling the components with ease and flexibility.
- **Firebase**:  For user authentication
- **React-Router**:  For handling dynamic routing.

### Backend:
- **Node.js**: A runtime environment for running JavaScript applications on the server-side efficiently.
- **Express.js**: A minimalist web framework for Node.js that simplifies building robust APIs and web servers.
- **MongoDB**:A NoSQL database for storing and managing data in a flexible, JSON-like document format.

- **CORS**: To handle cross-origin resource sharing.

- **jsonwebtoken**: For token-based authentication.

- **cookie-parser** :  To parse cookies for storing JWTs.

- **cookie-parser** : For managing environment variables.
