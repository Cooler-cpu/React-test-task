test task FullstackEnginer - WellBex


technologies used   ` React Node.js postgreSQL express `

# -- npm run dev  // start back-end / front-end

write npm install in folders

/  - npm install

/client - npm install



Add the /.env folder to the root of the application
`
.env content:

fill in the data
postgress database settings

PORT = 5000
DB_NAME = testTaskReactTable
DB_USER = name db user
DB_PASSWORD = db password
DB_HOST = localhost
DB_PORT = db port value
SECRET_KEY = secret 

`

### API Documentation 

`Headers:  Content-Type: application/json`

` http://localhost:5000/api/dataTable/add `   --   add json in request as

```json
    {
    "date": "2001-10-08",
    "name": "Audi",
    "quantity": 15,
    "distance": 110.5
    }
```



` http://localhost:5000/api/dataTable/get `   --   returns json with table data










