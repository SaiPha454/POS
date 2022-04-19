# Category endpoints

## Route - /categories
+ ### Description
  - get a list of all categories
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
            "total": 10 // number of all categories
        },
        "data":[
            {
                "_id": ObjectId,
                "name:" "Category Name"
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


## Route - /categories
+ ### Description
  - create a new category
+ ### Method - Post
+ ### Params
  -  name - Category Name (required)

+ ### Return
    <br/>

    ``` json
    {
        "status": 201,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //Created category id
        },
        "data":{
            "_id":  ObjectId,
            "name": "Category Name"
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


## Route - /categories/:id
+ ### Description
  - update a category
+ ### Method - Patch
+ ### Params
  -  name - Category Name (required)
  -  id - category ObjectId (required)

+ ### Return
    <br/>

    ``` json
    {
        "status": 200,
        "message": "sucess",
        "meta":{
            "_id": ObjectId //category id
        },
        "data":{
            "_id":  ObjectId,
            "name": "Category Name"
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
## Route - /categories/:id
+ ### Description
  - delete a  category
+ ### Method - Delete
+ ### Params
  -  id - category ObjectId (required)

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



