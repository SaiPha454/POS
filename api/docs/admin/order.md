# Admin - order endpoints

## Route - /admin/orders?page=`int`&limit=`int`&filter[status]=`pending or confirmed`
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

## Route - /admin/orders/:id/confirm 
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