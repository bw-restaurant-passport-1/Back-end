# Backend Documentaion

If something doesn't work let me(Aiden) know!

hosting with heroku on 
https://restaurant-passport1.herokuapp.com

endpoint example: https://restaurant-passport1.herokuapp.com/api/users/login

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

example
```
{
	"username": "jacob1",
	"password": "pizza",
	"name": "jac",
	"email": "a2@a.com",
	"city": "gilbert"
}
```

returns registered message, user id, and token

<h1>Login</h1>

*`HTTP method:`***`POST`**

*`URL:`***`/api/users/login`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| username       | String |   YES    |  YES   |                       |
| password       | String |   YES    |   NO   |                       |

example
```
{
	"username": "jacob1",
	"password": "pizza"
}
```

returns login message, username, and token

<h1>Get list of all users</h1>

*`HTTP method:`***`GET`**

*`URL:`***`/api/users/users`**

requires valid token passed in through Authorization header

shows all user info except for passwords (passwords are also hashed)

<h1>Add restaurant</h1>

valid token required

*`HTTP method:`***`POST`**

*`URL:`***`/api/restaurant`**

| Name           | Type   | Required | Unique | Description           |
| :------------- | :----- | :------: | :----: | :-------------------- |
| restaurantName | String |   YES    |  NO   |                       |
| streetAddress  | String |   YES    |   NO   |                       |
| city           | String |   YES    |   NO   |                       |
| zipcode        | String |   NO    |  NO   |                       |
| phoneNumber    | String |   NO    |  NO    |                       |
| websiteURL     | String |   NO     |  NO    |                       |
|restaurantPictureURL | String |   NO     |  NO    |                       |

example
```
{
		"id": 1,
		"restaurantName": "Chili's",
		"streetAddress": "3917 S Gilbert Rd",
		"city": "Gilbert",
		"zipcode": "85296",
		"phoneNumber": "(480) 812-4636",
		"websiteURL": "www.chilis.com",
		"restaurantPictureURL": "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg"
}
```

<h1>Edit restaurant</h1>

valid token required

*`HTTP method:`***`POST`**

*`URL:`***`/api/restaurants/:id`**

pass in the id through url and edited object though axios


<h1>Get list of all restaurants</h1>

*`HTTP method:`***`GET`**

*`URL:`***`/api/restaurants`**

returns all restaurants

<h1>Get restaurant by id</h1>

*`HTTP method:`***`GET`**

*`URL:`***`/api/restaurants/:id`**

pass in the id through url

returns an array containing a single restaurant


