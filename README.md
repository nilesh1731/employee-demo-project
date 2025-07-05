# employee-demo-project

## API Documentation

### Create Employee

**Endpoint:**
```
POST http://localhost:3000/api/v1/employees
```

**Request Body:**
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
    "fullName": "Nilesh Tiwari",
    "email": "nilesh@example.com",
    "designation": "Software Engineer",
    "phone": "9876543210",
    "employmentType": "Full-time",
    "_id": "68689fb5aebe9c3bce417609",
    "createdAt": "2025-07-05T03:44:53.772Z",
    "updatedAt": "2025-07-05T03:44:53.772Z",
    "__v": 0
  },
  "success": true
}
```

**Description:**
Creates a new employee record in the system. All fields are required.