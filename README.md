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





