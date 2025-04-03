# Profile Map App

## Overview
This is a **React** app that uses **Leaflet** to display user profiles and their corresponding geolocations on an interactive map. The app features an **Admin Panel** to manage users and includes capabilities such as searching, filtering, and adding/deleting user profiles.

### Key Features:
- Display user profiles with their **name**, **job**, **summary**, and **profile image**.
- Show user locations on an **interactive map** (using **Leaflet**).
- **Admin panel** for adding, editing, and deleting users.
- **Search and filter** functionality for users.
- Responsive design for mobile and tablet devices.

---

## Technologies Used:
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation, fast build tool for front-end development.
- **Leaflet**: Open-source JavaScript library for embedding interactive maps.
- **React Router**: Library for routing in React applications.
- **react-loader-spinner**: A simple spinner library used to show loading state.
- **CSS**: Custom styles to make the app responsive and interactive.

---

## Setup and Installation

### Prerequisites:
- **Node.js** and **npm** installed on your local machine.

### Steps to Run the Project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chiru4c3/user-map-app.git

2. Install dependencies:
Navigate to the project directory and install the necessary dependencies:

bash
Copy
cd profile-map-app
npm install
3. Run the app:
After the dependencies are installed, you can start the app locally with:

bash
Copy
npm run dev
This will start the app on http://localhost:5173 (or a similar port).

4. Access the App:
Once the app is running, open your browser and navigate to http://localhost:5173 to view the app.

Key Components:
MapView
Displays the interactive map using Leaflet.

Renders user location markers and popups when users are selected.

Includes error handling and loading indicators.

AdminPanel
Allows the admin to add and delete users.

Displays a list of all users and their details.

UserCard
Represents individual user profiles displayed on the landing page.

Includes a Summary button to show more details and the user’s location on the map.

LandingPage
Displays a list of user profiles with search and filter functionality.

Allows users to click on a profile to view more details on the map.

Error Handling:
The app provides the following error handling features:

Map Loading Error: If the map fails to load, an error message is shown.

Geolocation Data Error: If a user's location data is missing, an error message will be displayed.

Form Validation: Ensures that all required fields in the admin panel are filled before submitting.

Future Improvements:
Map Services Integration: Switch from Leaflet to Google Maps or Mapbox for enhanced map features.

Authentication: Add user authentication to secure the Admin Panel.

User Profiles: Expand the user profile with additional fields like contact information, interests, and social media links.

Pagination: Add pagination or infinite scroll for a large number of user profiles.

Dark Mode: Implement a dark mode toggle for a better user experience.