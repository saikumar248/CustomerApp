# Customer App

This is a customer management app with frontend and backend.

## Project Structure

```
CustomerApp/
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── CustomerTable.js
│ │ ├── index.js
│ │ ├── Pagination.js
│ │ └── SearchSortPagination.js
├── Backend/
│ ├── server.js
└── node_modules/
```


## Installation


# PostgreSQL Installation and Setup

### Step 1: Installation

- Install PostgreSQL on your system.

### Step 2: Creation of Database Customer DB

- Create a database named `CustomerDB` in PostgreSQL.

### Step 3: Navigating to Schemas in CustomerDB

- Navigate to the schemas section in `CustomerDB`.

### Step 4: Navigating to Tables in Schemas

- Within schemas, navigate to the tables.

### Step 5: Right-click on Tables and Open Query Tool

- Right-click on the tables and open the query tool.

### Step 6: Code Editor for Query

- In the query tool, you can use the code editor to run SQL queries.

### Step 7: Creating Table Customers and Inserting Dummy Data

- Copy and paste the following code into the code editor to create the `customer` table and insert dummy data:

```sql
-- Create the customer table
CREATE TABLE customer (
    sno SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    age INT,
    phone VARCHAR(15),
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert dummy data into the customer table
INSERT INTO customer (customer_name, age, phone, location, created_at)
VALUES
    ('Ramesh Kumar', 32, '91-12345-67890', 'Mumbai', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sneha Patel', 28, '91-98765-43210', 'Delhi', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Amit Singh', 35, '91-87654-32109', 'Bangalore', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Priya Sharma', 30, '91-23456-78901', 'Chennai', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Vikas Gupta', 45, '91-78901-23456', 'Kolkata', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Neha Gupta', 27, '91-34567-89012', 'Hyderabad', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Anil Sharma', 40, '91-65432-10987', 'Pune', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Pooja Singh', 33, '91-89012-34567', 'Ahmedabad', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rajesh Patel', 29, '91-21098-76543', 'Jaipur', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Meena Kumari', 38, '91-54321-09876', 'Lucknow', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sanjay Verma', 31, '91-67890-12345', 'Chandigarh', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Nisha Gupta', 26, '91-43210-98765', 'Indore', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Ashok Kumar', 42, '91-10987-65432', 'Surat', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Aarti Sharma', 34, '91-78901-23456', 'Kanpur', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Vinod Singh', 39, '91-87654-32109', 'Nagpur', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Shweta Patel', 36, '91-23456-78901', 'Varanasi', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rajni Verma', 25, '91-89012-34567', 'Bhopal', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rakesh Gupta', 41, '91-21098-76543', 'Visakhapatnam', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sunita Kumari', 37, '91-54321-09876', 'Patna', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Vishal Kumar', 43, '91-67890-12345', 'Thane', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Kavita Singh', 32, '91-12345-67890', 'Coimbatore', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Alok Sharma', 29, '91-98765-43210', 'Ludhiana', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Manisha Patel', 28, '91-87654-32109', 'Agra', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Deepak Gupta', 35, '91-23456-78901', 'Madurai', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Preeti Verma', 30, '91-78901-23456', 'Guwahati', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sunil Kumar', 45, '91-34567-89012', 'Jodhpur', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Radha Sharma', 27, '91-65432-10987', 'Raipur', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Amar Singh', 40, '91-89012-34567', 'Kochi', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Kiran Patel', 33, '91-21098-76543', 'Allahabad', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Anjali Gupta', 31, '91-54321-09876', 'Nashik', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rajat Verma', 38, '91-67890-12345', 'Vadodara', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Kumar Sharma', 26, '91-12345-67890', 'Bhubaneswar', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sarita Devi', 42, '91-98765-43210', 'Ghaziabad', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Gaurav Singh', 34, '91-87654-32109', 'Rajkot', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Lalita Patel', 39, '91-23456-78901', 'Faridabad', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Avinash Gupta', 36, '91-78901-23456', 'Amritsar', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rita Sharma', 25, '91-34567-89012', 'Mangalore', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Prakash Verma', 41, '91-65432-10987', 'Noida', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Anita Singh', 37, '91-89012-34567', 'Dehradun', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rajeev Kumar', 43, '91-21098-76543', 'Gurgaon', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sangeeta Patel', 32, '91-54321-09876', 'Vijayawada', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Ashish Gupta', 29, '91-67890-12345', 'Jamshedpur', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Poonam Sharma', 28, '91-12345-67890', 'Kota', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Shivam Patel', 35, '91-98765-43210', 'Ranchi', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Nidhi Singh', 30, '91-87654-32109', 'Srinagar', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Arun Kumar', 45, '91-23456-78901', 'Gwalior', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Riya Gupta', 29, '91-75432-10987', 'Kochi', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Rahul Sharma', 31, '91-87650-98765', 'Guwahati', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Sunita Devi', 33, '91-67895-43210', 'Patna', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Amita Singh', 37, '91-12340-12345', 'Thane', NOW() - INTERVAL '1 year' * RANDOM() * 10),
    ('Raj Kumar', 40, '91-89012-67890', 'Bhubaneswar', NOW() - INTERVAL '1 year' * RANDOM() * 10);

-- Check if the number of records is 50
SELECT COUNT(*) FROM customer;
```

### Configuration
Configure the database connection in CustomerApp/Backend/server.js file.

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


