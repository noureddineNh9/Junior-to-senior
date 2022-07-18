> # Traditional Cookie-Based Auth

> # Modern Token-Based Auth

-  ## Advantages

   -  ### Performance :

      For example, say you had an API resource /api/orders that retrieves the
      latest orders placed via your app, but only users with the role of admin have
      access to view this data. In a cookie based approach, once the request is
      made, you'd have one call to the database to verify that the session is
      valid, another to get the user data and verify that the user has the role of
      admin, and finally a third call to get the data. On the other hand, with a
      JWT approach, you can store the user role in the JWT, so once the request is
      made and the JWT verified, you can make a single call to the database to
      retrieve the orders.

   -  ### dsdq :
   -  ### Some to code
      `dqsdsq`

---

-  JWT vs Cookie Auth

|                    | Cookie        | JWT                             |
| ------------------ | ------------- | ------------------------------- |
| Stateless          | No            | Yes                             |
| Cross domain usage | No            | Yes                             |
| Mobile ready       | No            | Yes                             |
| Performance        | Low           | High (no need in request to DB) |
| Add to request     | Automatically | Manually (if not in cookie)     |
