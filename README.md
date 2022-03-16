# JWT Auth
Authentication with using JSON Web Token

# Tech Stack
1. Server: Node.js, Express, MongoDB + Mongoose
4. Client: React + MobX + TypeScript

# Features
1 Access/Refresh tokens
2 Email and password validation 
3 After registration user gets email to confirm account
4 Endpoint only for autharized user

# Models 
    TokenSchema {
      user: User
      refreshToken: String 
    }
    
    UserSchema {
      email: String,
      password: String,
      isActivated: Boolean,
      activationLink: String, 
    }

# API /api
1. POST /registration

Create user in data base, send email.

    {
      email, 
      password
    }

2. POST /login

Generate access/refresh tokens for user.

    {
      email, 
      password
    }

3. POST /logout

Delete user's tokens

4. GET /activate/:link

Activate account with link sended on email.

5. GET /refresh

Generate new access token with using refresh token

6. GET /users (Auth required)

Get list of users
