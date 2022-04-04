# User - order endpoints

## Route - /user/carts (session)
+ ### Description
  - add an item to the shopping cart
+ ### Method - Post
+ ### Params
  -  id - product  item ObjectId (req)
  -  name - Product Name (req)
  -  price - 1200 (req)
  -  qty - 1 (req)
  -  user_id - user objectId (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 201,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //added item id
        },
        "data":{
            
            "_id": ObjectId,
            "name": "Product name", 
            "price": 1200,
            "qty": 1,
            "user_id": ObjectId
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

## Route - /user/carts/:id (session)
+ ### Description
  - remove an item from the shopping cart
+ ### Method - Delete
+ ### Params
  -  id - product item ObjectId (req)
  -  qty - 1 (req)
  -  drop - true (option) //if specified, drop the item with the specified id from the cart

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //removed item id
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

## Route - /user/carts (session)
+ ### Description
  - get all  items in the cart
+ ### Method - Get
+ ### Params
  -  No param

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{ },
        "data":[
            
            {
                "_id": ObjectId,
                "name": "Product name", 
                "price": 1200,
                "qty": 5,
                "user_id": ObjectId
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