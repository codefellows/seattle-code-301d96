# Overview of the warm-up challenge

Problems with the server:

- `'use strict';` ideally...
- require express as a string
- require dotenv
- require and use CORS if you want it useable, but not necessary for server to "run"
- `'/username'` for route
- req/res or request/response - pick one
- userinfo: either assign as object literal, or assign properties with assignment operators.
- missing something after request for usernname and password.  ex.request or req.query.username (assuming its a query param).  QUERY is the word students will know at this point in class
- response is sending "info" that is not defined
- app.get should end with a `});`
- improper syntax for callback in app.listen
- `PORT` is not declared
