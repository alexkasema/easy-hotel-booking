
# EasyHotel Booking
EasyHotel Booking is a comprehensive web application designed to simplify apartment, hotel booking and management for both people looking for a place to stay and hotel owners. Built with the MERN stack, TypeScript, and Tailwind CSS, our platform offers an intuitive, user-friendly interface for seamless booking experiences.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://alex-portfolio-lun2.onrender.com/)

[![portfolio](https://img.shields.io/badge/deployed_project-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://easy-hotel-booking-prod.onrender.com/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexkasema/)



## Inspiration Behind EasyHotel Booking

The desire to simplify this experience for both people looking for a place to stay and hotel owners inspired the creation of EasyHotel Booking. Our platform aims to bridge the gap, providing a user-friendly interface for travelers to discover and book their perfect stay while offering robust tools for hotel managers to efficiently manage their properties and enhance guest satisfaction.

EasyHotel Booking is driven by the vision of creating a seamless, enjoyable, and memorable travel experience for everyone. By leveraging modern technologies and focusing on user-centric design, we strive to make the process of finding and managing hotel stays as delightful as the trips themselves.

## Features

- User authentication with role-based access
- Comprehensive hotel management system
- Easy-to-use booking interface
- Secure Stripe payment integration
- Responsive design with Tailwind CSS
- Built with modern technologies: React, Express.js, MongoDB, and TypeScript
- Apartment reviews and ratings
- Featured Apartments and Hotels
- Pagination
- Apartments and Hotels search feature
- User Booked Apartments and Hotels Section
- User Created Apartments and Hotels Section



## Setting Up the EasyBooking App
This guide will walk you through the process of setting up the MERN Booking App on your local machine.
## Prerequisites
Before you begin, ensure you have Node.js installed on your system.
## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
  https://github.com/alexkasema/easy-hotel-booking
  cd easy-hotel-booking
```
    
## Backend Configuration

Environment Files: Navigate to the backend folder and create two files: .env and .env.e2e. Add the following contents to both files:

`MONGO_URI=`

`JWT_SECRET_KEY=`

`FRONTEND_URL=`

`CLOUDINARY_CLOUD_NAME=`

`CLOUDINARY_API_KEY=`

`CLOUDINARY_API_SECRET=`

`STRIPE_API_KEY=`

### JWT_SECRET_KEY
- This just needs to be any long, random string. You can google "secret key generator".
### FRONTEND_URL
- The FRONTEND_URL should point to the URL where your frontend application is running.

## Frontend Configuration
- Environment Files: Navigate to the frontend folder and create a file: .env:

`VITE_API_BASE_URL=`

`VITE_STRIPE_PUB_KEY=`

### VITE_API_BASE_URL
- The VITE_API_BASE_URL should point to the URL where your backend application is running




## Running the App

### Backend:

- Navigate to the `backend` directory.
- Install dependencies: `npm install`.
- Start the server: `npm start`.

### Frontend:
- Open a new terminal and navigate to the `frontend` directory.
- Install dependencies: `npm install`.
- Start the frontend application: `npm run dev`.
- The application should now be running on `http://localhost:5173` but verify this in your command line terminal



## Contributing

Contributions are always welcome!

1. Clone repo and create a new branch: $ git checkout https://github.com/alexkasema/easy-hotel-booking -b name_for_new_branch.

2. Make changes and test

3. Submit Pull Request with comprehensive description of changes



