# Admin - Seller CRUD endpoints

## Route - /admin/sellers
+ ### Description
  - create a new seller
+ ### Method - Post
+ ### Params
  -  name - Category Name (req)
  -  email - seller@gmail.com (req)
  -  password - 123 (req)

+ ### Return
    <br/>

    ``` json
    {
        "status": 201,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //Created seller id
        },
        "data":{

            "_id": ObjectId,
            "name": "seller name",
            "email": "seller@gmail.com",
            "status": "active"
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

## Route - /admin/sellers
+ ### Description
  - get a list of all sellers
+ ### Method - Get
+ ### Params
  -  No params

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "success",
        "meta":{
            "total": 10 // number of all sellers
        },
        "data":[
            {
                "_id": ObjectId,
                "name": "seller name",
                "email": "seller@gmail.com",
                "status": "active"
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

## Route - /admin/sellers/activate/:id
+ ### Description
  - activate a seller
+ ### Method - Patch
+ ### Params
  -  id - seller ObjectId (required)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //seller id
        },
        "data":{

            "_id": ObjectId,
            "name": "seller name",
            "email": "seller@gmail.com",
            "status": "active"
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

## Route - /admin/sellers/ban/:id
+ ### Description
  - ban a seller
+ ### Method - Patch
+ ### Params
  -  id - seller ObjectId (required)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //seller id
        },
        "data":{

            "_id": ObjectId,
            "name": "seller name",
            "email": "seller@gmail.com",
            "status": "banned"
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


## Route - /admin/sellers/:id
+ ### Description
  - Delete a  seller . When delete a seller, all of its related products must be deleted too.
  
+ ### Method - Delete
+ ### Params
  -  id - seller ObjectId (required)

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



