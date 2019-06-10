# MLog Backend

A simple rails server that does authentication and movies logging.
Requests are authenticated through browser cookie.

![screenshot](https://i.ibb.co/yYSc2M0/image.png)

### Prerequisites

* docker
* docker-compose

### Installation

Initialize the database using

```
docker-compose run --rm web rake db:create
docker-compose run --rm web rails db:migrate
```

### Usage

Run the app using

```
docker-compose up
```

Access the app through http://localhost:3001
Manage users through http://localhost:3001/users