# MLog: A pyx4 challenge
A personal log (Movie log!) of the movies you watched recently

![Screenshot](https://i.ibb.co/ZcJHt5H/image.png)

### Prerequisites

* Nodejs/npm
* docker
* docker-compose
* [Nginx](http://nginx.org/en/download.html) for enabling CORS locally

### Quickstart

```
Terminal 1:
cd backend && docker-compose up

Terminal 2:
cd frontend && nginx -c $(pwd)/nginx.conf

Terminal 3:
REACT_APP_OMDb_API_KEY=383a2e5d cd frontend && npm start

Browse app on
http://localhost/
```

### User setup
To create/edit users, use the rails-generated pages from http://localhost:3001/users

### Further Reading
* [backend](backend/README.md)
* [frontend](frontend/README.md)