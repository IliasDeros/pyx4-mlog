# MLog: A pyx4 challenge
A personal log (Movie log!) of the movies you watched recently


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
cd frontend && npm start

Browse app on
http://localhost/
```

### User setup
To create/edit users, use the rails-generated pages from http://localhost:3000/users

### Further Reading
* [backend](backend/README.md)
* [frontend](frontend/README.md)