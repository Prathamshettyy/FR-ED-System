Method: POST
URL: http://localhost:3000/register
code :
{
    "location": "Central Park",
    "severity": "High",
    "contact": "1234567890"
}
Expected Response:
Status Code: 201 Created
Body:
{
    "message": "Emergency report created",
    "reportId": <random_number>
}



Method: POST
URL: http://localhost:3000/dispatch
code:
{
    "reportId": 1234,
    "teamId": "TeamA"
}

Expected Response:
Status Code: 200 OK
{
    "message": "Rescue team dispatched",
    "reportId": 1234,
    "teamId": "TeamA"
}



Method: GET
URL: http://localhost:3000/status/1234 (Replace 1234 with the actual reportId obtained from /register)
Expected Response:
Status Code: 200 OK

{
    "message": "Status retrieved",
    "reportId": "1234",
    "status": "In Progress"
}

 Edge Case Testing
/register - Missing Required Fields:
code :

{
    "location": "Central Park"
}
Expected Response:
Status Code: 400 Bad Request
Body:

{
    "error": "Missing required fields"
}


/dispatch - Missing Required Fields:
code :
{
    "teamId": "TeamA"
}
Expected Response:
Status Code: 400 Bad Request
Body:
{
    "error": "Missing required fields"
}


/status/:reportId - Invalid reportId:
URL: http://localhost:3000/status/abcd
Expected Response:
Status Code: 200 OK
Body:
{
    "message": "Status retrieved",
    "reportId": "abcd",
    "status": "In Progress"
}
