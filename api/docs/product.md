# Product  endpoints

## Route - /products
+ ### Description
  - upload a product item
+ ### Method - Post
+ ### Params
  -  name - Product Name (req)
  -  price - 1200 (req)
  -  seller - seller ObjectId (req)
  -  category - category ObjectId (req)
  -  description - some description about the item (option)

+ ### Return
    <br/>

    ``` json
    {
        "status": 201,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //uploaded item id
        },
        "data":{
            
            "_id": ObjectId,
            "name": "Product name", 
            "price": 1200,
            "description": "description for the item",
            "seller": ObjectId,
            "category": ObjectId
        }
    }
    ```
+ ### Error
    <br/>
     
     ```json
        {
            "status": 400,
            "message": "fail"
        }
     ```


## Route - /products/:id
+ ### Description
  - update a product item
+ ### Method - PUT
+ ### Params
  -  name - Product Name (req)
  -  price - 1200 (req)
  -  seller - seller ObjectId (req)
  -  category - category ObjectId (req)
  -  description - some description about the item (option)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "message": "sucess",
        "meta":{
            "_id": ObjectId //updated item id
        },
        "data":{
            
            "_id": ObjectId,
            "name": "product name", 
            "price": 1200,
            "description": "description for the item",
            "seller": ObjectId,
            "category": ObjectId
        }
    }
    ```

+ ### Error
    <br/>
     
     ```json
        {
            "status": 400,
            "message": "fail"
        }
    ```
## Route - /products/:id
+ ### Description
  - delete a  product item
+ ### Method - Delete
+ ### Params
  -  id - product item ObjectId (required)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "deleted successfully"
    }
    ```
+ ### Error
    <br/>
     
     ```json
        {
            "status": 400,
            "message": "fail"
        }
    ```


## Route - /products/:id
+ ### Description
  - get a  product item
+ ### Method - Get
+ ### Params
  -  id - product item ObjectId (required)

+ ### Return
    <br/>

    ``` json
        {
            "status": 200,
            "message": "sucess",
            "meta":{
                "_id": ObjectId
            },
            "data":{
                
                "_id": ObjectId,
                "name": "product name", 
                "price": 1200,
                "description": "description for the item",
                "seller": ObjectId,
                "category": ObjectId
            }
        }
    ```
+ ### Error
    <br/>
     
     ```json
        {
            "status": 400,
            "message": "fail"
        }
    ```

## Route - /products?page=`number`&limit=`number`&filter[category]=`id`&sort[ field ]=` 1/-1`
+ ### Description
  - get all product items if options are not specified ( eg. /products ). Other pagionation options and filter options are vailable.
+ ### Method - Get
+ ### Params
  -  page - pagination page index number (option)
  -  limit - number of items per page (option, if not specified, default 15)
  -  filter -  filter items by category. (eg. filter[category]= id ) (option)
  -  sort - sort items with the specified field in ascending or descending. 
    Sortable with multiple fields by specify multiple sorts with different fields.( available fields:  name, price )


+ ### Return
    <br/>

    ``` json
        {
            "status": 200,
            "message": "sucess",
            "meta":{
                "total_items": 75, //all found products
                "total_pages": 5, //calculated
                "page": 0,
                "limit": 15, 
                "skip": 0,
                "filter": {
                    "category": category ObjectId
                },
                "sort": {
                    "name": 1,
                    "price": -1
                }
            },
            "data":[
                {
                    "_id": ObjectId,
                    "name": "product name", 
                    "price": 1200,
                    "description": "description for the item",
                    "seller": ObjectId,
                    "category": ObjectId
                },
                ...
            ],
            "links": {
                "first": "localhost:3000/products?page=1&limit=15&filter[category]=id&sort[price]=1",
                "last": "localhost:3000/products?page=5&limit=15&filter[category]=id&sort[price]=1",
                "self": "localhost:3000/products?page=3&limit=15&filter[category]=id&sort[price]=1",
                "next": "localhost:3000/products?page=4&limit=15&filter[category]=id&sort[price]=1",
                "prev": "localhost:3000/products?page=2&limit=15&filter[category]=id&sort[price]=1",
            }
        }
    ```

+ ### Return  ( No Options )
    <br/>

    ``` json
        {
            "status": 200,
            "message": "sucess",
            "meta":{
                "total": 20
            },
            "data":[
                {
                    "_id": ObjectId,
                    "name": "product name", 
                    "price": 1200,
                    "description": "description for the item",
                    "seller": ObjectId,
                    "category": ObjectId
                },
                ...
            ]
        }
    ```

+ ### Error
    <br/>
     
     ```json
        {
            "status": 400,
            "message": "fail"
        }
    ```



