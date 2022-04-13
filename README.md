# Project Name
### POS ( Point of Sale System )

# Table of contents
 <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#built-with">Built with</a>
    </li>
    <li>
      <a href="#get-started">Get started</a>
    </li>
    <li>
      <a href="#api">API</a>
    </li>
    <li>
      <a href="#collaborators">Collaborators</a>
    </li>
  </ol>
  
# About the project
- This project is an e-commerce store api. User can shop, add to shopping cart and make order. Seller can upload their products and see their related orders. Admin can manage the sellers and product shipping.
- Then, let us introduce the project's goal.
We, Sai Marn Pha, Ko Soe Thet Paing Htwe, Ko Kaung Myat Soe and Mg Pyi Hein Htun, made this project to gain the experience of how we can collaborate with each other while we have different knowledge backgrounds. The project is not about production and just for educational purposes.
- We think that, as developers, collaboration is the must have skill on the software developer career's long journey. As said, '`Nothing great could be done alone`'. So, it would be better to have a team experience ahead before getting a job.
- We learned how we can collaborate with each other in both technical skill and soft skill. We listened to each other's ideas and combined them.

# Built with
- Nodejs
- Express.js
- express-session
- connect-mongodb-session
- MongoDB
- Mongoose
- dotenv
- bcrypt
- nodemon
- Slack as main communication channel
- Git as the version control system

# Get started

- config .env file
  ```
  PORT - the port number for the express server running [eg. PORT = 4200 ]

  mongodbUri - MongoDB URi [eg. mongodbUri = mongodb://localhost:2500/pos]

  CART_SESSION_SECRETE - the secrete for the express session using for shopping carts [eg. CART_SESSION_SECRETE = 'hello world']
  ```
- installing and running project
  ```
    cd api // navigate to the api folder
    npm install // install dependencies
    npm start // run the project server
  ```

# API

- ## Cart
  - /carts [ POST ] - add item to the shopping cart
  - /carts [ GET ] - get all items in the cart
  - /carts/:id [ DELETE ] - drop an item from the shopping cart
  - /carts/:id [PATCH ] - descease item quantity in the cart
  - full documentation refer to the [cart endpoint docs](https://github.com/SaiPha454/POS/blob/develop/api/docs/cart.md)

- ## Order
  - /orders [ POST ] - make an order
  - /orders [ GET ] - get all orders
  - /orders/confirm/:id [ PATCH ] - confirm an order
  - /users/:id/orders [ GET ] - get user order history
  - /sellers/:id/orders [GET] - get seller orders
  - full documentation refer to [orders docs](https://github.com/SaiPha454/POS/blob/develop/api/docs/order.md)

- ## Category
  - /categories [ POST ] - create a new category
  - /categories [ GET ] - get list of all categories
  - /categories/:id [ PATCH ] - update a category
  - /categories/:id [ DELETE ] - delete  a category
  - full documentation refer to [category docs](https://github.com/SaiPha454/POS/blob/develop/api/docs/category.md)

- ## Product
  - /products [ POST ] - upload a new product
  - /products [ GET ] - get products
  - /products/:id [ PATCH ] - update a product
  - products/:id [ DELETE ] - delete a product
  - products/:id [ GET ] - get a product by id
  - full documentation refer to [product docs](https://github.com/SaiPha454/POS/blob/develop/api/docs/product.md)

- ## Seller
  - /sellers [ POST ] - register a new seller by admin
  - /sellers  [ GET ] - get all sellers
  - /sellers/activate/:id [ PATCH ] - activate a seller
  - /sellers/ban/:id [ PATCH ] - ban a seller
  - /sellers/:id [ DELETE ] - delete a seller
  - /sellers/:id [ GET ] - get a seller detail
  - full documentation refer to [seller doc](https://github.com/SaiPha454/POS/blob/develop/api/docs/seller.md)

# Collaborators
 - [Sai Marn Pha](https://github.com/SaiPha454/)
 - [Ko Soe Thet Paing Htwe](https://github.com/faerylay)
 - [Ko Kaung Myat Soe](https://github.com/KMSoe)
 - [Mg Pyi Hein Tun](https://github.com/PyiHeinTun)
