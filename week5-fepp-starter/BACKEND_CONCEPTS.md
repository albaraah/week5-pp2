## Iteration 8: Backend and Proxy Insights

1. Understanding the Virtual Field in Backend
What does this code accomplish? Why is it useful in your application? 
- This code modifies the given schema into JSON while keeping virtuals and adding a more readable id. This is useful because it makes it easier for the frontend and API perform. 

jobSchema.set("toJSON", { //customizes how a mongo doc is converted to json when you send it back from API
  virtuals: true, // keeps virtual fields 
  transform: (doc, ret) => { //modify object
    ret.id = ret._id; //makes id more readable
    return ret;
  },
});

2. CORS Middleware
What is CORS, and why is it necessary for the application to include this middleware?
- CORS means cross-origin resource and it is a node.js middleware package. It helps the frontend and backend to connect since they are separate servers.

// CORS = cross-origin resource sharing
app.use(cors()) //node.js middleware package
app.use(express.json());

3. Proxy Configuration in Frontend

How does the proxy setting work, and what problems does it solve in the development environment?
- The proxy acts as a middle man that works in a way where it makes sure that the frontent and backend servers know to work only in their own servers. It makes the frontend code simpler and easier to read. 

proxy: {
    "/api": { //matches request path with /api
    target: "http://localhost:4000", // where to send
    changeOrigin: true, // talks to the middleman
    },
},