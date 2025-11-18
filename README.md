- this is a base nodejs template as it has been prepared by keeping some of the most importants code principles and project managemnwt recommendetaion..

-'src' - inside the src folder all the actual source code regarding the project will reside , this will not include any kind of test

-let take inside the src foilder

-config
'routes'- in this routes folder, we register a route and the corresponding middleware and controllers to it ...

-'middleares' - they are just going to intercept the incoming requests where we can write our validators, authenicators etc

-'controllers'- they ae kind of last middleawre as post them you call yo business layer to execute the business logic.in controllers we just receive incoming request and data and then pass it to the business layer , and once business layer returns an output we, structure the api response in controlllers and send the output ..

'repositories' - ths folder contains all the logic using which we interect the DB by writing queries, all the raw queries or ORM queries will go here

-'services' - contains the business logic and interacts with repositories for data from the database

-'utils'- contains helper methods, error classes etc

-'seeders'- Seeder files ka use hota hai backend me initial data automatically daalne ke liye.

```
npx sequelize seed:generate --name add-airplanes
 for generating seed files and you have add data manually in these files and after that run the commnd for adding into the data

 npx sequelize db:seed:all    finally data add karne ke liye

 npx sequelize db:seed:undo:all   for undo

```

### setup the project

- download this template from github and open it in your favourite text-editor
- in the given root directory create a '.env' file and add thge following env variables .

```
PORT=<port number of your choice>

```

ex:

```
PORT=3000

```

```
npx
```

npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer

```

for giving initial data in form of seeders we use
```

npx sequelize db:seed:all

```

```

npx sequelize db:migrate

```
queries related all things happen inside queries any queries ....
```

--controllers pass to the services and services use repositories to interact with data bases

flow are - somebody gives a request to /api/vi/airplanes
so -- /api - apiroutes then /v1 - v1routes after
/airplanes - airplaneroutes

in aeroplanesrouted we mapped them into controllers and the controllers call the services and the services call the repository and th is repoistory intenally called crud repository

//// project notes -----

```

Api gateway - in Api gateway we have reverse proxies ....

Asuume frontend makes a request to search something and load balancer actually forwaded request to api gateway and inside api gateway we have reverse proxies.......
api gateway collect all the req from from frontend through load balancer
and the api gateway forwared the req to the corresponding services...

Api gateway can also help you to add a autheniticate services ..
Api gateway can also include the logic of ratelimiter........

Load Balancer = Traffic Distributor
API Gateway = Security + Router + Rate Limit + Auth
Reverse Proxy = Actual service forwarder inside Gateway

```
