# Express.js User Authentication with JWT and React Frontend

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-16.8+-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green.svg)

## Project Overview

This project implements user authentication and file handling in an Express.js application using JSON Web Tokens (JWT). The React frontend interacts with the backend for user registration, login, and accessing protected routes for saving and reading JSON data.

## Features

- **User Registration**: Users can register with a username and password, which are stored in a JSON file.
- **User Login**: Validates user credentials and returns a JWT for authenticated sessions.
- **Protected Routes**: Routes for saving and reading JSON data that require a valid JWT for access.
- **Frontend Interaction**: React forms for user registration and login, with functionality to store the JWT in local storage and interact with protected routes.

## Demo

[Frontend Link](https://file-handling-plum.vercel.app/) 
[Backend Link](https://file-handling-backend.vercel.app/) 
[Frontend Repository Link](https://github.com/nks854338/fileHandling) 
[Backend Repository Link](https://github.com/nks854338/fileHandlingBackend) 

## API Endpoints

- `POST /register`: Register a new user.
- `POST /login`: Log in and receive a JWT.
- `POST /save`: Save JSON data (protected route).
- `GET /read`: Read JSON data (protected route).

## Tech Stack

- **Backend**: Express.js, JSON Web Tokens (JWT), Node.js, File System (fs)
- **Frontend**: React, Axios
