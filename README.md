# URL Shortener Project

A web application for shortening URLs using an Express backend and a React frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a URL Shortener web application. The backend is built using [Express](https://expressjs.com/), providing APIs for creating short URLs and redirecting to the original URLs. The frontend is built with [React](https://reactjs.org/), offering a user-friendly interface for entering and managing URLs.

## Technologies Used

- **Backend**: Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Others**: Axios, shortid , cors , dotenv

## Installation

### Prerequisites
- Node.js installed on your system
- npm or yarn package manager

### Backend Setup
1. Navigate to the backend folder.
    ```bash
    cd backend
    ```
2. Install dependencies.
    ```bash
    npm install
    ```
3. Start the backend server.
    ```bash
    npm start
    ```
   The backend server will run on `http://localhost:3000` by default (you can specify your own port in the configuration).

### Frontend Setup
1. Navigate to the frontend folder.
    ```bash
    cd frontend
    ```
2. Install dependencies.
    ```bash
    npm install
    ```
3. Start the frontend development server.
    ```bash
    npm start
    ```
   The React app will run on `http://localhost:3000` by default.

## Usage

1. Open the frontend app at `http://localhost:5173/`.
2. Enter a URL in the input field to generate a shortened URL.
3. Use the generated short URL to be redirected to the original URL.

## Features

- Shorten any valid URL.
- Redirect from shortened URLs to original URLs.

## Contributing

Feel free to open issues or submit pull requests if you want to improve this project!