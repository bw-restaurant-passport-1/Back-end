# Backend Documentaion

if something doesn't work let me(Aiden) know!

<h1>Register</h1>

*`HTTP method:`***`POST`**

*`URL:`***`/api/users/register`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |
| name           | String |   YES    |   NO   |                       |
| email          | String |   YES    |  YES   |                       |
| city           | String |   YES    |  NO    |                       |
| avatarURL      | String |   NO     |  NO    |                       |

<h1>Login</h1>

*`HTTP method:`***`POST`**

*`URL:`***`/api/users/login`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |

<h1>get list of all users</h1>

*`HTTP method:`***`POST`**

*`URL:`***`/api/users/users`**

this is for testing and would be like an admin thing