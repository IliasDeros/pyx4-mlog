# MLog: A pyx4 challenge
A personal log (Movie log!) of the movies you watched recently. [Trello board](https://trello.com/b/rkhHlX1v/pyx4-technical-test)

![Screenshot](https://i.ibb.co/ZcJHt5H/image.png)

### Prerequisites

* [Node & NPM](https://nodejs.org/en/download/)
* [docker](https://www.docker.com/products/docker-desktop)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Nginx](http://nginx.org/en/download.html) for enabling CORS locally

### Quickstart

```
Terminal 1, the server:
cd backend && docker-compose up

Terminal 2, the proxy:
cd frontend && nginx -c $(pwd)/nginx.conf

Terminal 3, the UI:
REACT_APP_OMDb_API_KEY=383a2e5d cd frontend && npm start

Browse app on
http://localhost/
```

### User setup
To create/edit users, use the rails-generated pages from http://localhost:3001/users

### Further Reading
* [backend](backend/README.md)
* [frontend](frontend/README.md)