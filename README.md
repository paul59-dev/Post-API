# 🚀 Node.js Express API for User Posts

Welcome to the Node.js Express API for User Posts! This API, built with the powerful combination of Node.js and Express.js, allows users to seamlessly perform CRUD operations on posts, including adding, retrieving, modifying, and deleting posts. Users can also express their sentiments by liking or disliking posts.

## Setup 🛠️

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

2. **Install dependencies:**
    ```bash
    npm install

3. **Create a .env file:**
Create a .env file in the root directory with your MongoDB connection URI. 
Example:

    ```bash
    MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-database?retryWrites=true&w=majority

Replace your-username, your-password, and your-database with your MongoDB credentials.

## Running the Server 🚚

To launch the server using nodemon, run:

    ```bash
    npm run server

The server will be up and running at http://localhost:5000 by default.

## API Endpoints 🚧

- GET /posts: Retrieve all posts.
- POST /posts: Add a new post.
- PUT /posts/:postId: Update a post by ID.
- DELETE /posts/:postId: Delete a post by ID.
- POST /posts/:postId/like: Like a post.
- POST /posts/:postId/dislike: Dislike a post.

## Contributing 🤝

Feel free to contribute by opening issues or creating pull requests. Your feedback and contributions are highly appreciated.
