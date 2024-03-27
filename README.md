#Booking Appointment API built with MERN Stack.

## About the Project

This REST API was built with NodeJS, Express, and MongoDB for the databases. The main goal for this project was to build a REST API for the Booking appointment App for Salon and that can be used with front-end framework like React. 

This API has 3 database models
- user model
- items model
- appointment model
- To authorize the users, this app uses [JWT](https://jwt.io/)


## Built With

* [MongoDB](https://cloud.mongodb.com/)
* [NodeJS](https://nodejs.org)
* [Express]()

## Getting Started

To get a local copy up and running follow these simple example steps.
- [ ] Open your terminal
- [ ]  Navigate to the directory where you will like to install the repo by running `cd FOLDER-NAME` 
- [ ] Clone this repository
 > `git clone https://github.com/Div685/MERN-Booking-app.git`
- [ ] To install all dependencies and necessary packages, run `npm installl`, `yarn install`
- [ ] Run `npm start` to run node application in your local server


## Authentication

- To manage Appointments and items, user needs to login with a username and a password. Then you need to pass token, which is issued when user logged in, Pass the token in the header like below:
`headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
},`
- To manage items, user or administrator needs to log in as a admin.
- To login as a admin Account follow the section below called "How to create admin user".


## Author

👤 **Divyesh Patel**

- GitHub: [@Div685](https://github.com/Div685)
- Twitter: [@div_685](https://twitter.com/div_685)
- LinkedIn: [Divyesh Patel](https://www.linkedin.com/in/divyesh-daxa-patel/)


## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Show your support

Give an ⭐️ if you like this project!
