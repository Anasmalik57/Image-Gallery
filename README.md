

# Image Gallery React App

## Overview

This project is a React-based image gallery application built using Vite. It fetches and displays images from the Sling Academy API. The application allows users to view a list of images and see details of each image when clicked. The project demonstrates the use of React components, state management, and routing to create an interactive user experience.

## Features

- **Image List Display:** Fetches and displays a list of images from the Sling Academy API.
- **Image Details View:** Displays detailed information about a selected image, including title and description.
- **Routing:** Implements React Router for navigating between the image list and image details.
- **Responsive Design:** The UI is responsive and adapts to different screen sizes.

## Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   │   ├── ImageList/
│   │   │   ├── ImageList.jsx
│   │   │   ├── ImageList.css
│   │   ├── ImageDetails/
│   │   │   ├── ImageDetails.jsx
│   │   │   ├── ImageDetails.css
│   │   ├── Gallery/
│   │       ├── Gallery.jsx
│   │       ├── Gallery.css
│   ├── routes/
│   │   ├── CustomRoutes.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
```

## Installation

### 1. Install Vite

If you haven't installed Vite yet, follow these steps:

1. Install Vite using npm:
   ```bash
   npm create vite@latest my-image-gallery-app
   ```

2. Navigate to the project directory:
   ```bash
   cd my-image-gallery-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### 2. Clone the Repository and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Anasmalik57/Image-Gallery.git
   ```
2. Navigate to the cloned directory:
   ```bash
   cd your-repo
   ```

3. Install the dependencies (if not done in the Vite setup):
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Information

- The images are fetched from the Sling Academy API:
  - **Base URL:** `https://api.slingacademy.com/v1/sample-data/photos`
  - **Image Details URL:** `https://api.slingacademy.com/v1/sample-data/photos/:id`

## Usage

- Visit the home page to view the gallery of images.
- Click on any image to view its details, including title and description.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **Vite:** A fast development environment and build tool.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Router:** For managing routing in the application.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
