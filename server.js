const crypto = require('crypto')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())
// npm packages used for this Project 1


const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
// RSA key pair generation implementation


const posts = [
    {
        username: 'Michel Lopez UNT ML0810',
        title: 'Post',
        body: 'If this Post is read we can assume the user is authenticated, a unique key ID, expiriation date attached to eact JWT.'
    },
]
// default post json that only appears if the user is authenticated 

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts)
})
// app.get that authenticates user JWT and if valid returns post


app.post('/login', (req, res) => {
    // User is considered Authenicated by default as per rubric 
    const expired = req.query.expired === 'true';
    const kid = crypto.randomBytes(64).toString('hex')
    const payload = {
        kid,
        "expired": expired
    };
    // Data JWT payload with expired status and unique Key ID

    const accessToken = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '30s'})
    res.json({ accessToken: accessToken })
    // JWT signs and encryptes payload using the privateKey and expires in x time, expiresIn value can be changed to change how long tokens are valid for
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    // Checks if GET request is authorized, assumed user is authorized 
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    // 401 Unauthorized If JWT expires or is incorrectly filled
  
    jwt.verify(token, publicKey, { algorithm: 'RS256'}, (err, decoded_payload) => {
      if (err) return res.sendStatus(403)
      // JWT verifies the user using the public key and decodes the payload
      // 403 Forbidden If JWT is incorrect


      console.log(decoded_payload)
      console.log('Payload expired status on creation ', decoded_payload.expired)
      console.log('Payload unique Key ID ', decoded_payload.kid)
    
      if (decoded_payload.expired) {
        decoded_payload.exp = decoded_payload.iat
        console.log('Payload timestamp on creation', decoded_payload.iat)
        console.log('Payload expiration timestamp on creation ', decoded_payload.exp)

      } else {
        console.log('Payload timestamp on creation', decoded_payload.iat)
        console.log('Payload expiration timestamp on creation ', decoded_payload.exp)
      }
      // Console logs to display relevant information like unique Key IDs, Expiration Dates, and Expiration Status


      next()
      // Exit middleware
    })
  }
//Middleware function that authenticates the JWT from the user

app.listen(8080)
// Local Host on port 8080

// Michel Lopez
// ML0810
// UNT CSCE3550