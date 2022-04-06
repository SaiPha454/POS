# Seller - order endpoints

## Route - /seller/:id/orders (session)
+ ### Description
  - Get all orders of items belonged to the seller. An order can contain multiple items of multiple sellers. A seller can only see orders related to his items and  only his own items in the order, not others.
+ ### Method - Get
+ ### Params
  -  id - seller ObjectId (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 201,
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