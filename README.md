# log.R
The idea is just to extend the power of the JS console log.

## Instalation

````
npm install --save logr
````

### In your package.json remember to put
````
"type": "module",

````

## Simple usage example

```
const log = new logger.R();

log.R(ANYobject);
```

### Printing two dimensions array with headers

```
log.Args({ head: ["H1", "H2", "H3", "66"] }).R(twoDimensionsArray);
````

### Printing Simple object with template and colorized
````
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "brakets", date: true, title: "objectPerson" })
  .R(objectPerson);
  ````
## Setting up configuration object

```
const configuration = {
  logger: true,
    multiarray: "defualt_table",
};

const log = new logger.R(configuration);la

log.Args({ head: ["H1", "H2", "H3", "66"] }).R(twoDimensionsArray);
```

## THE PROJECT CONTAINS EXAMPLE.JS FULL OF EXAMPLES

## Variables in configuration object:

**logger:** Activate or deactivate the logger in console.

**enableColors:** Activate the colors on templates. Colors JS library is used.

**string_caps:** Only converts variable type string to ALL CAPS.


### array:


**default** Prints out the array, as default.


**default_table** Prints out the array as a table on screen. Uses default table from console.log

**custom_table:** Prints out the array showing the index number at the front.

###  multiarray:

**default:** Prints out the multidimensional array, as default.

**default_table:** Prints out the multidimensional array as a table on screen. Uses default table from console.log

**custom_table:** Prints out the multidimensional array as a table on screen. Max 2 dimensions. Uses cli-table2 library.


### Objects:

**default:** Prints out the object, as default.

**default_table:** Prints out the object as a table on screen. Uses default table from console.log

**string:** Prints out the object using JSON.stringify.




## TEMPLATES 

Templates for objects. It is very useful to use with Splunk for instance.

It is possible to add a **title** and the **date**.

So far there are only two templates.

**Brakets:**
```
[TitledObject][2022-07-05T01:12:53.432Z][name:"Mario"][lastname:"Gamboa"][bool:true][age:45][friends:["jamime","roberto","luis"]][nickname:"Mao"][gender:"male"][country:"Ecuador"][phone:"2533-6421"][email:"info@domain.com"][website:"https://www.yahoo.com"]
```
**Keys:**
````
{"title":"TitledObject","Date":"2022-07-05T01:13:02.083Z","name":""Mario"","lastname":""Salazar"","bool":"true","age":"45","friends":"["jamime","roberto","luis"]","nickname":""Lau"","gender":""male"","country":""Costa Rica"","phone":""2233-2533"","email":""info@domain.com"","website":""https://www.yahoo.com"}
````

## COLORIZE


You can only colorize strings alone and objects using templates.

## HEADER:
You can set header only to multiarray using custom_table.

    