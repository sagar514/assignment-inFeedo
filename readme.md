Here's a `README.md` file for the `tasks_app` project that provides instructions for users to set up and run the application:

```markdown
# Tasks App

Welcome to the Tasks App! This is a simple Node.js application for managing tasks with a MySQL database backend. Follow the steps below to get started.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database Setup](#database-setup)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)

## Prerequisites

Before you can run the Tasks App, ensure you have the following prerequisites installed on your system:

- Node.js
- MySQL Server

## Database Setup

Create a new database in MySQL for the Tasks App. Please refer schema.sql file located in the project's root directory. All required SQL commands are available in the file. This will set up the necessary `tasks` table and insert some initial data.

## Installation

To install the required dependencies for the Tasks App, navigate to the project directory and run the following command:

```bash
npm install
```

This will install the Node.js packages specified in the `package.json` file.

## Running the Application

To start the Tasks App, run the following command in the project directory:

```bash
npm run start
```

The application will start and listen on port 8080 by default. You can access it in your web browser at `http://localhost:8080`.

## Documentation

This `README.md` file provides users with clear instructions for setting up the database, installing dependencies, and running the Tasks App.