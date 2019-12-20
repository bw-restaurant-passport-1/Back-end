# Backend Documentaion

If something doesn't work let me(Aiden) know!

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

returns registered message, user id,and token

<h1>Login</h1>

*`HTTP method:`***`POST`**

*`URL:`***`/api/users/login`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |

returns login message, username, and token

<h1>Get list of all users</h1>

*`HTTP method:`***`GET`**

*`URL:`***`/api/users/users`**

requires valid token passed in through Authorization header

shows all user info except for passwords (passwords are also hashed)