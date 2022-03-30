# Seller - product CRUD endpoints

## Route - /seller/products
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


## Route - /seller/products/:id
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
## Route - /seller/products/:id
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



