**🔌 1. What is Node.js and why is it used?**

**Answer:**

Node.js is a runtime environment that executes JavaScript code on the server side. It’s built on Chrome’s V8 engine and is ideal for building scalable, event-driven applications like APIs and real-time apps.
---

**🔁 2. How does the event loop work in Node.js?**

**Answer:**

The event loop is a single-threaded mechanism that handles async callbacks using a queue. It allows non-blocking I/O operations by offloading tasks to the event loop and worker threads when needed.
---

**🧵 3. Is Node.js single-threaded? How does it handle concurrency?**

**Answer:**

Yes, Node.js uses a single-threaded event loop for I/O, but it can handle concurrency via asynchronous callbacks and the internal thread pool (libuv) for CPU-bound or blocking operations.
---

**🧠 4. What are the differences between process.nextTick(), setImmediate(), and setTimeout()?**

**Answer:**

• process.nextTick() queues a callback to run *before* the next event loop tick.
• setImmediate() runs a callback *after* I/O events in the current loop.
• setTimeout() runs after a minimum delay, not precisely timed.
---

**📦 5. What are CommonJS and ES Modules in Node.js?**

**Answer:**

• **CommonJS** uses require() and module.exports (default in Node).
• **ES Modules (ESM)** use import and export, and are supported with "type": "module" in package.json.
---

**🔐 6. How do you handle environment variables in Node.js?**

**Answer:**

Using the dotenv package to load .env files. Access variables via process.env. This keeps credentials and config secure and separate from code.
---

**⚙️ 7. How do you manage asynchronous code in Node.js?**

**Answer:**

Use async/await, Promises, or callbacks. async/await is preferred for readability and error handling using try/catch.
---

**🛠️ 8. How does Node.js handle errors?**

**Answer:**

Node handles sync errors via try/catch. For async code, use .catch() or try/catch with async/await. Also, add global error handling via process.on('uncaughtException') and process.on('unhandledRejection').
---

**🧱 9. What is middleware in Node.js (especially in Express)?**

**Answer:**

Middleware functions have access to req, res, and next. They’re used to handle tasks like logging, parsing, auth, and routing before reaching the final request handler.
---

**🧩 10. What is the difference between require() and import?**

**Answer:**

require() is used in CommonJS modules (synchronous), while import is used in ES Modules (asynchronous, top-level only). Node supports both with configuration.
---

**🚀 11. How do you ensure scalability in a Node.js application?**

**Answer:**

• Use **clustering** to run on multiple CPU cores
• Use **load balancers**
• Leverage **caching** (Redis)
• Optimize **I/O** and **DB** calls
• Use **message queues** for background tasks
---

**🧪 12. How do you test a Node.js application?**

**Answer:**

Use testing frameworks like **Jest**, **Mocha**, **Chai**, or **Supertest** for APIs. Focus on unit, integration, and E2E testing, mocking dependencies when necessary.
---

**🌐 13. How do you handle CORS in Node.js?**

**Answer:**

Use the cors middleware in Express. Configure allowed origins, methods, headers, and credentials support as needed.
---

**🔒 14. What are best practices for securing a Node.js app?**

**Answer:**

• Sanitize user inputs to prevent injection
• Use HTTPS
• Set security headers (Helmet)
• Implement auth (OAuth, JWT)
• Limit rate requests (rate-limiter)
• Keep dependencies updated
---

**🧠 15. How does Node.js handle file uploads and streams?**

**Answer:**

Use multer for file uploads in Express. Use Node.js **streams** (fs.createReadStream) for efficient processing of large files without loading them entirely in memory.
---

**📁 16. What is the fs module used for?**

**Answer:**

The fs module allows interaction with the file system—reading, writing, and modifying files and directories.
---

**🧬 17. How does clustering work in Node.js?**

**Answer:**

Clustering allows multiple instances of Node.js to run on different cores, sharing the same server port using the cluster module.
---

**🔗 18. What is the purpose of the crypto module?**

**Answer:**

The crypto module provides cryptographic functionality like hashing (SHA256), encryption, and signing.
---

**🗃️ 19. How do you connect Node.js with a database?**

**Answer:**

Use drivers or ORMs like mongoose (MongoDB), pg (PostgreSQL), or Sequelize/Prisma for relational DBs.
---

**📡 20. What is an EventEmitter in Node.js?**

**Answer:**

EventEmitter is a class that lets you create and handle custom events using .on(), .emit(), and .once().
---

**📦 21. What is the package.json file for?**

**Answer:**

package.json defines project metadata, dependencies, scripts, and config for Node projects.
---

**🚦 22. What is Express.js and why is it popular?**

**Answer:**

Express is a minimal and flexible web framework for Node.js that simplifies routing, middleware, and request handling.
---

**📬 23. What is the purpose of body-parser?**

**Answer:**

body-parser is middleware that parses incoming request bodies into req.body (JSON, URL-encoded). Now included in Express 4.16+.
---

**🪝 24. How do you create an API in Node.js?**

**Answer:**

Use Express or Fastify. Define endpoints using app.get, app.post, etc., and connect them to controller logic.
---

**⚙️ 25. How do you manage processes in Node.js apps?**

**Answer:**

Use tools like PM2 or nodemon to manage, monitor, and restart Node apps in production or development.
---

**🔒 26. How do you implement authentication in Node.js?**

**Answer:**

Use sessions (express-session), cookies, or tokens (JWT). Passport.js helps manage various strategies.
---

**🧾 27. What is the difference between synchronous and asynchronous methods in Node.js?**

**Answer:**

Synchronous blocks the thread, while async allows other operations to continue via callbacks, Promises, or async/await.
---

**🧰 28. How do you implement logging in Node.js?**

**Answer:**

Use libraries like Winston or pino for structured logging. Console.log is fine for debugging, but not production.
---

**🚨 29. What are unhandledPromiseRejection and uncaughtException?**

**Answer:**

Events emitted when a promise is rejected without a .catch() or when an error escapes all try/catch blocks.
---

**🎯 30. What are some common performance tuning techniques in Node.js?**

**Answer:**

• Avoid synchronous code
• Use caching
• Reuse DB connections
• Use streams
• Monitor with profiling tools (e.g., Clinic.js)
---