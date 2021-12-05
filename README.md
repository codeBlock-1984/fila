# Fila

Fila is an application for working with file metadata. You can store your file metadata, retrieve, and delete specific file information via REST endpoints.


## Built With

This project is built with the following tools:
* [Express.js](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [TypeORM](https://typeorm.io/)
* [Postgres](https://www.postgresql.org/)

## Prerequisites
* [Node.js](https://nodejs.org/)
## Getting Started

To setup a local copy of the project, clone the repository by running the command below in your terminal.

```sh
git clone https://github.com/codeBlock-1984/fila.git
```

## Installation

1. To install the project packages, navigate to the project root and run the command below:
   ```sh
   npm install
   ```
2. Create a .env file in the project root directory. Copy the entire contents of .env.sample and paste into the .env file you created. Set the values of the .env file keys appropriately and save the file.

## Usage

To start the local server run the command below:
```sh
npm run serve
```
You should see the message `Fila server is listening on port <PORT>...` in the console.

In this section `<PORT>` will refer to the value of the `PORT` key in your local .env

1. Create a file metadata: To create a file metadata record, send a POST request
```sh
curl -d '{"name":"test file", "size":1024, "format": "PDF"}' -H "Content-Type: application/json" -X POST http://localhost:<PORT>/api/v1/files/
```

2. Get all saved file metadata: To fetch all file metadata records, send a GET request
```sh
curl -X GET http://localhost:<PORT>/api/v1/files/
```

3. Get a specific file metadata: To fetch a file metadata record with `<id>`, send a GET request
```sh
curl -X GET http://localhost:<PORT>/api/v1/files/<id>
```

4. Delete a file metadata: To delete a file metadata record with `<id>`, send a GET request
```sh
curl -X DELETE http://localhost:<PORT>/api/v1/files/<id>
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

