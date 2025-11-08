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

### setup the project

- download this template from github and open it in your favourite text-editor
- in the given root directory create a '.env' file and add thge following env variables ..

```
PORT=<port number of your choice>

```

ex:

```
PORT=3000

```
