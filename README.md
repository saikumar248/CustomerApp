# Customer App

This is a customer management app with frontend and backend.

## Project Structure

```
Customer-App/
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── CustomerTable.js
│ │ ├── index.js
│ │ ├── Pagination.js
│ │ └── SearchPagination.js
├── Backend/
│ ├── server.js
└── node_modules/
```


## Installation

# Setting up PostgreSQL
Install PostgreSQL on your system by following the instructions on the official website.

Create a new PostgreSQL database for this project.

# Configuration
Configure the database connection in Customer-App/Backend/server.js file.

Replace the connection details in server.js with your PostgreSQL database credentials.

### Frontend

```bash
cd Frontend
npm install
npm install axios
```

### Backend

```bash 
cd Backend
npm install
npm install express pg
```

## Usage

### Frontend

```bash
cd Frontend 
npm start
```

### Backend

```bash
cd Backend
node server.js
```

The frontend will run on http://localhost:3000 and the backend on http://localhost:5000


