# Cart endpoints

## Route - /carts
+ ### Description
  - add an item to the shopping cart
+ ### Method - Post
+ ### Params
  -  id - product  item ObjectId (req)
  -  name - Product Name (req)
  -  price - 1200 (req)
  -  qty - 1 (req)
  -  seller_id - seller id of the product

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
            "seller_id": ObjectId
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

## Route - /carts/:id 
+ ### Description
  - reduce an item quantity from the shopping cart
+ ### Method - Patch
+ ### Params
  -  id - product item ObjectId (req)
  -  qty - 1  (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //removed item id
        },
        "data": [
            
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
    ```
+ ### Error
    <br/>
     
     ```json
        {
            "status": 400,
            "message": "fail"
        }
     ```

## Route - /carts/:id 
+ ### Description
  - drop an item from the shopping cart
+ ### Method - Delete
+ ### Params
  -  id - product item ObjectId (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //deleted item id
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

## Route - /carts 
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
                "seller_id": ObjectId
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
