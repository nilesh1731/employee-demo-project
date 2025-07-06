## Table of Contents
- [Backend setup](#backend-setup--employee-management-system)
- [API Documentation](#api-documentation)
- [Frontend Implementation](#frontend)


## Screen shot of the project
![image](https://github.com/user-attachments/assets/59515b27-f003-47e3-a3a3-7dd6bce101b3)
![image](https://github.com/user-attachments/assets/a4d478b2-e3bf-47e0-a4f3-7fd59d235fb4)
![image](https://github.com/user-attachments/assets/2705e6ac-716d-4ecc-9936-e215813bee5f)



##  Backend Setup – Employee Management System

### Getting Started

#### 1. **Clone the Repository**

```bash
git clone https://github.com/nilesh1731/employee-demo-project.git
cd server
```

---

#### 2. **Install Dependencies**

```bash
npm install
```

---

#### 3. **Create a `.env` File**

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGODB_URI=your-mongodb-connection-uri
```

> Replace `mongodb-connection-uri` with your actual MongoDB connection string.

---

#### 4. **Start the Server**

* **In development (with hot reload using Nodemon):**

```bash
npm run dev
```
---

###  API Base URL

```
http://localhost:3000/api/v1
```

---

###  Sample Endpoint

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/v1/employees`     | Add a new employee    |
| GET    | `/api/v1/employees`     | Get all employees     |
| GET    | `/api/v1/employees/:id` | Get an employee by ID |
| PUT    | `/api/v1/employees/:id` | Update an employee    |
| DELETE | `/api/v1/employees/:id` | Delete an employee    |



### 🛠 Technologies Used

* Node.js
* Express.js
* MongoDB & Mongoose
* Joi (for validation)
* Dotenv
* CORS





## API documentation

###  A. **Add New Employee** – `POST /api/employees`

**Method:** `POST`

**URL:** `http://localhost:5000/api/employees`

**Body → raw → JSON**

```json
{
  "fullName": "Nilesh Tiwari",
  "email": "nilesh@example.com",
  "designation": "Software Engineer",
  "phone": "9876543210",
  "employmentType": "Full-time"
}
```

**Response:**
```json
{
    "message": "Employee created successfully",
    "data": {
        "fullName": "Riya Sharma",
        "email": "riya.sharma@example.com",
        "designation": "HR Manager",
        "phone": "9123456780",
        "employmentType": "Part-time",
        "_id": "6868b569506b5181aa6db540",
        "createdAt": "2025-07-05T05:17:29.212Z",
        "updatedAt": "2025-07-05T05:17:29.212Z",
        "__v": 0
    },
    "success": true
}
```
---

###  B. **Get All Employees** – `GET /api/employees`

**Method:** `GET`

**URL:** `http://localhost:5000/api/employees`

**Response:**
```json
{
    "message": "Employees fetched successfully",
    "data": [
        {
            "_id": "68689fb5aebe9c3bce417609",
            "fullName": "Nilesh Tiwari",
            "email": "nilesh@example.com",
            "designation": "Software Engineer",
            "phone": "9876543210",
            "employmentType": "Full-time",
            "createdAt": "2025-07-05T03:44:53.772Z",
            "updatedAt": "2025-07-05T03:44:53.772Z",
            "__v": 0
        },
        {
            "_id": "6868b569506b5181aa6db540",
            "fullName": "Riya Sharma",
            "email": "riya.sharma@example.com",
            "designation": "HR Manager",
            "phone": "9123456780",
            "employmentType": "Part-time",
            "createdAt": "2025-07-05T05:17:29.212Z",
            "updatedAt": "2025-07-05T05:17:29.212Z",
            "__v": 0
        },
        {
            "_id": "6868b5c1506b5181aa6db542",
            "fullName": "Amit Verma",
            "email": "amit.verma@example.com",
            "designation": "UI/UX Designer",
            "phone": "9988776655",
            "employmentType": "Full-time",
            "createdAt": "2025-07-05T05:18:57.345Z",
            "updatedAt": "2025-07-05T05:18:57.345Z",
            "__v": 0
        },
        {
            "_id": "6868b5ca506b5181aa6db544",
            "fullName": "Sneha Kapoor",
            "email": "sneha.kapoor@example.com",
            "designation": "Backend Developer",
            "phone": "9090909090",
            "employmentType": "Part-time",
            "createdAt": "2025-07-05T05:19:06.711Z",
            "updatedAt": "2025-07-05T05:19:06.711Z",
            "__v": 0 
        },
        {
            "_id": "6868b5d3506b5181aa6db546",
            "fullName": "Rahul Mehta",
            "email": "rahul.mehta@example.com",
            "designation": "Project Manager",
            "phone": "9876501234",
            "employmentType": "Full-time",
            "createdAt": "2025-07-05T05:19:15.560Z",
            "updatedAt": "2025-07-05T05:19:15.560Z",
            "__v": 0
        }
    ],
    "success": true
}
```
 

Optional: Test with search query:

**URL:** : `http://localhost:3000/api/v1/employees?search=engineer`

**Response:**
```json
{
    "message": "Employees fetched successfully",
    "data": [
        {
            "_id": "68689fb5aebe9c3bce417609",
            "fullName": "Nilesh Tiwari",
            "email": "nilesh@example.com",
            "designation": "Software Engineer",
            "phone": "9876543210",
            "employmentType": "Full-time",
            "createdAt": "2025-07-05T03:44:53.772Z",
            "updatedAt": "2025-07-05T03:44:53.772Z",
            "__v": 0
        }
    ],
    "success": true
}
```

---

###  C. **Get Single Employee by ID** – `GET /api/employees/:id`

**Method:** `GET`
**URL:** `http://localhost:5000/api/employees/<id>`

**Response:** 
```json
{
    "message": "Employee fetched successfully",
    "data": {
        "_id": "68689fb5aebe9c3bce417609",
        "fullName": "Nilesh Tiwari",
        "email": "nilesh@example.com",
        "designation": "Software Engineer",
        "phone": "9876543210",
        "employmentType": "Full-time",
        "createdAt": "2025-07-05T03:44:53.772Z",
        "updatedAt": "2025-07-05T03:44:53.772Z",
        "__v": 0
    },
    "success": true
}
```

---

###  D. **Update Employee** – `PUT /api/employees/:id`

**Method:** `PUT`

**URL:** `http://localhost:5000/api/employees/<id>`

**Body → raw → JSON**

```json
{
  "fullName": "Nilesh Tiwari Updated",
  "email": "nilesh.updated@example.com",
  "designation": "Senior Developer",
  "phone": "9999999999",
  "employmentType": "Part-time"
}
```

**Response:**
```json
{
    "message": "Employee updated successfully",
    "data": {
        "_id": "68689fb5aebe9c3bce417609",
        "fullName": "Nilesh Tiwari Updated",
        "email": "nilesh.updated@example.com",
        "designation": "Senior Developer",
        "phone": "9999999999",
        "employmentType": "Part-time",
        "createdAt": "2025-07-05T03:44:53.772Z",
        "updatedAt": "2025-07-05T05:27:06.169Z",
        "__v": 0
    },
    "success": true
}
```
---

###  E. **Delete Employee** – `DELETE /api/employees/:id`

**Method:** `DELETE`

**URL:** `http://localhost:5000/api/employees/<id>`

**Response :**

```json
{
    "message": "Employee deleted successfully",
    "data": {
        "_id": "68689fb5aebe9c3bce417609",
        "fullName": "Nilesh Tiwari Updated",
        "email": "nilesh.updated@example.com",
        "designation": "Senior Developer",
        "phone": "9999999999",
        "employmentType": "Part-time",
        "createdAt": "2025-07-05T03:44:53.772Z",
        "updatedAt": "2025-07-05T05:27:06.169Z",
        "__v": 0
    },
    "success": true
}

```

## Frontend 

### Technical Stack
- **Framework**: Vue 3 (Composition API)
- **UI Library**: Vuetify 3
- **State Management**: Pinia
- **Routing**: Vue Router
- **Internationalization**: Vue I18n
- **Form Validation**: Vee-Validate
- **HTTP Client**: Axios

## Key Features

### 1. Employee Management
- **Add Employees**: Centered form with real-time validation
- **Edit Employees**: Pre-filled form with update capabilities
- **View Employees**: Responsive data table with pagination
- **Delete Employees**: With confirmation dialog
- **Search Employees* : we can search employee with employee name 

### 2. Technical Implementation
- **Centralized State**: Pinia store for all employee data
- **Form Validation**: Comprehensive field validation
- **Error Handling**: Graceful error states and notifications
- **Loading States**: Visual feedback during operations
- **Multi-language Support**: English/Spanish toggle

### 3. UI/UX Features
- Responsive design (mobile/desktop)
- Dark/light mode toggle
- Accessible components
- Animated transitions

## Component Structure

### Core Views
| View | Path | Description |
|------|------|-------------|
| Dashboard | `/` | Main view with employee stats and table |
| Add Employee | `/add` | Form for new employee creation |
| Edit Employee | `/edit/:id` | Form for employee updates |




## Installation & Setup

### 1. Prerequisites
- Node.js v16+
- npm v8+

### 2. Project Setup
```bash
git clone `https://github.com/nilesh1731/employee-demo-project.git`
```
```bash
cd client
```

### 3. Development
```bash
# Run dev server
npm run dev
```





1. **VS Code Extensions**:
   - Volar (Vue 3 support)
   - ESLint
   - Prettier
   - Vuetify VSCode

2. **Browser Tools**:
   - Vue Devtools
   - Pinia Devtools

## API Integration

The frontend expects a REST API with these endpoints:

```javascript
// Base URL: /api/v1/employees
{
  GET '/',          // List all employees
  GET '/:id',       // Get single employee
  POST '/',         // Create employee
  PUT '/:id',       // Update employee
  DELETE '/:id',    // Remove employee
  GET '/pagination' // Paginated results
}
```


