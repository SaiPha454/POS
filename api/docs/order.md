# Order endpoints
## Route - /orders 
+ ### Description
  - make an order
+ ### Method - Post
+ ### Params
  -  user_id - user ObjectId (req)
  -  address - user address (req)
  -  list of order items -  need to fetch from the `carts session` on the server side

+ ### Return
    <br/>

    ``` json
    {
        "status": 201,
        "message": "sucess",
        "meta":{ 
            "_id": ObjectId //created order id
        },
        "data":{

            "_id": ObjectId,
            "status": "pending",
            "user": {
                "_id": ObjectId,
                "address": "user address"
            },
            "items": [
            
                {
                    "_id": ObjectId,
                    "name": "Product name", 
                    "price": 1200,
                    "qty": 5,
                    "seller_id": ObjectId
                },
                ...
            ]
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

## Route - /users/:id/orders
+ ### Description
  - get a list of order histories which user had maked
+ ### Method - Get
+ ### Params
  -  id - user ObjectId (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{ 
            "total": 5
        },
        "data":[
            {
                "_id": ObjectId,
                "status": "pending",
                "user": {
                    "_id": ObjectId,
                    "address": "user address"
                },
                "items": [
                
                    {
                        "_id": ObjectId,
                        "name": "Product name", 
                        "price": 1200,
                        "qty": 5,
                        "seller_id": ObjectId
                    },
                    ...
                ]
            },
            {
                "_id": ObjectId,
                "status": "confirmed",
                "user": {
                    "_id": ObjectId,
                    "address": "user address"
                },
                "items": [
                
                    {
                        "_id": ObjectId,
                        "name": "Product name", 
                        "price": 1200,
                        "qty": 5,
                        "seller_id": ObjectId
                    },
                    ...
                ]
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


## Route - /sellers/:id/orders
+ ### Description
  - Get all orders of items belonged to the seller. An order can contain multiple items of multiple sellers. A seller can only see orders related to his items and  only his own items in the order, not others.
+ ### Method - Get
+ ### Params
  -  id - seller ObjectId (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "total": 10 //total orders
        },
        "data": [
                    {
                        "_id": ObjectId, // order id
                        "status": "pending",
                        "user": {
                            "_id": ObjectId,
                            "address": "user address"
                        },
                        "items": [
                        
                            {
                                "_id": ObjectId,
                                "name": "Product name", 
                                "price": 1200,
                                "qty": 5,
                                "seller_id": ObjectId 
                            },
                            ...
                        ]
                    },
                    {
                        "_id": ObjectId,
                        "status": "confirmed",
                        "user": {
                            "_id": ObjectId,
                            "address": "user address"
                        },
                        "items": [
                        
                            {
                                "_id": ObjectId,
                                "name": "Product name", 
                                "price": 1200,
                                "qty": 5,
                                "seller_id": ObjectId 
                            },
                            ...
                        ]
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


## Route - /orders?page=`int`&limit=`int`&filter[status]=`pending or confirmed`
+ ### Description
  - get all orders
+ ### Method - Get
+ ### Params
  -  page - page index for pagination (option)
  -  limit - number of orders per page (option, default `15`)
  -  filter - filter by status pending or confirmed (option)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "total_orders": 50,
            "total_pages": 5,
            "limit": 10,
            "skip": 0,
            "page":0,
            "filter":{
                "status": "pending"
            }
        },
        "data": [
                    {

                        "_id": ObjectId,
                        "status": "confirmed",
                        "user": {
                            "_id": ObjectId,
                            "address": "user address"
                        },
                        "items": [
                        
                            {
                                "_id": ObjectId,
                                "name": "Product name", 
                                "price": 1200,
                                "qty": 5,
                                "seller_id": ObjectId
                            },
                            ...
                        ]
                    },
                    ...
        ],
        "links":{
            "first": "/admin/orders?page=0&limit=15&filter[status]=pending",
            "last": "/admin/orders?page=5&limit=15&filter[status]=pending",
            "self": "/admin/orders?page=3&limit=15&filter[status]=pending",
            "next": "/admin/orders?page=4&limit=15&filter[status]=pending",
            "prev": "/admin/orders?page=2&limit=15&filter[status]=pending"
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

## Route - /orders/confirm/:id
+ ### Description
  - confirm an order 
+ ### Method - Patch
+ ### Params
  -  id - order ObjectId (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": order ObjectId 
        },
        "data": {

            "_id": ObjectId,
            "status": "confirmed",
            "user": {
                "_id": ObjectId,
                "address": "user address"
            },
            "items": [
            
                {
                    "_id": ObjectId,
                    "name": "Product name", 
                    "price": 1200,
                    "qty": 5,
                    "seller_id": ObjectId
                },
                ...
            ]
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