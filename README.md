# Evento

## Using JWT in Application :
- Created a token  in CustomerRoute
- Extracted the token from the `Authorization` header (expects `Bearer <token>` format).
- Verified the token using verify funcationality of jsonwebtoken.
- If valid, attaches the decoded user info to `req.user` and calls `next()`.
- Established proper error handling with suitable error messages.
- Called the authMiddleware in customerRoutes.js
