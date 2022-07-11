# OsoLog

The idea is just to extend the power of the JS console.log.

## Instalation

```
npm install osolog
```

## Simple usage example

```js
const osolog = require("osolog");

const log = new osolog();

log.R(ANYobject);
```

### Printing two dimensions array with headers

```js
log.Args({ head: ["H1", "H2", "H3", "66"] }).R(twoDimensionsArray);
```

### Printing Simple object with template and colorized

```js
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "brakets", date: true, title: "objectPerson" })
  .R(objectPerson);
```

## Setting up configuration object

```js
const configuration = {
  logger: true,
  multiarray: "defualt_table",
};

const log = new osolog.R(configuration);
la;

log.Args({ head: ["H1", "H2", "H3", "66"] }).R(twoDimensionsArray);
```

### In nthe file EXAMPLE.JS there are many examples of use
## Atributes in configuration object:


| Attribute Name | Options            | Description                                                                                            |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| logger         |                    | Activate or deactivate the logger in console.                                                          |
| enableColors   |                    | Activate the colors on templates. Colors JS library is used.                                           |
| string_caps    |                    | Only converts variable type string to ALL CAPS.                                                        |
| array          |                    |                                                                                                        |
|                | **default**        | Prints out the array, as default.                                                                      |
|                | **default_table**  | Prints out the array as a table on screen. Uses default table from console.log                         |
|                | **custom_table:**  | Prints out the array showing the index number at the front.                                            |
| multiarray     |                    |                                                                                                        |
|                | **default:**       | Prints out the multidimensional array, as default.                                                     |
|                | **default_table:** | Prints out the multidimensional array as a table on screen. Uses default table from console.log        |
|                | **custom_table:**  | Prints out the multidimensional array as a table on screen. Max 2 dimensions. Uses cli-table2 library. |
| Objects        |                    |                                                                                                        |
|                | **default:**       | Prints out the object, as default.                                                                     |
|                | **default_table:** | Prints out the object as a table on screen. Uses default table from console.log                        |
|                | **string:**        | Prints out the object using JSON.stringify.                                                            |

## TEMPLATES

Templates for objects. It is very useful to use with Splunk for instance.

It is possible to add a **title** and the **date**.

So far there are only two templates.

**Brakets:**
``` js
//Printing Object using colors and "Brakets" Template
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "brackets", date: true, title: "objectPerson" })
  .R(objectPerson);
```
Output

```
[TitledObject][2022-07-05T01:12:53.432Z][name:"Mario"][lastname:"Gamboa"][bool:true][age:45][friends:["jamime","roberto","luis"]][nickname:"Mao"][gender:"male"][country:"Ecuador"][phone:"2533-6421"][email:"info@domain.com"][website:"https://www.yahoo.com"]
```

**Keys:**
``` js
//Printing Object using colors and "Keys" Template
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "keys", date: true, title: "objectPerson" })
  .R(objectPerson);

```
Output

```
{"title":"TitledObject","Date":"2022-07-05T01:13:02.083Z","name":""Mario"","lastname":""Salazar"","bool":"true","age":"45","friends":"["jamime","roberto","luis"]","nickname":""Lau"","gender":""male"","country":""Costa Rica"","phone":""2233-2533"","email":""info@domain.com"","website":""https://www.yahoo.com"}
```

## COLORIZE

You can only colorize strings alone and objects using templates.

## HEADER:

You can set header only to multiarray using custom_table.

## Using custom function

``` js
//Creating my own Function. 
// In this case array is  [1, 2, 3, 4, 5]
const sumNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

log.Funcs(sumNumbers).R([1, 2, 3, 4, 5]);

```
Output

```
15
```