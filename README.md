z# Dagu Blog
dagu blog is a blog website where users can signup and read blogs and create their own

## Technologies used 

### fronted
- React
- tailwind css
- shadcn
- axios 

### backend
- express.js
- jwt and bcryptjs 
- mongodb

## Setup instructions

## client side
cd client
npm install
npm run dev

## server side
cd server 
npm install 
npm start

## API
 - `GET /api/posts/`: Get all blog posts
  - `GET /api/posts/mypost`: Get a specific blog post
  - `POST /api/posts`: Create a new blog post
  - `PUT /api/posts/:id`: Update an existing blog post
  - `DELETE /api/posts/:id`: Delete a blog post
  - `GET /api/categories`: Get all categories
  - `POST /api/categories`: Create a new category
