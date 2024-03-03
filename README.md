Michel Lopez
ML0810
CSCE 3550.002 

**Objective**
1. Develop a RESTful JWKS server that provides public keys with unique identifiers (kid) for verifying JSON Web Tokens (JWTs), implements key expiry for enhanced security, includes an authentication endpoint, and handles the issuance of JWTs with expired keys based on a query parameter.
2. Chooses an appropriate language and web server for the task.
3. Due to the simplicity of this assignment, I would prefer you complete it with an unfamiliar language… but as I have no way to verify it, it’s not considered part of the rubric.
4. This project is for educational purposes. In a real-world scenario, you’d want to integrate with a proper authentication system and ensure security best practices.

I choose to use Node.js and Javascript since in my academic journy I have primarly be using C/C++ and python/python 3.

**Requirements**
**1. Key Generation** 1. Implement RSA key pair generation. 2. Associate a Key ID (kid) and expiry timestamp with each key.


![image](https://github.com/zzyztx/Project1/assets/91233057/43f371d4-5956-4b3a-aac4-1e18ceaece56)

**2. Web server with two handlers**

    a. Serve HTTP on port 8080

    b. A RESTful JWKS endpoint that serves the public keys in JWKS format.

      1. Only serve keys that have not expired.

    c. A /auth endpoint that returns an unexpired, signed JWT on a POST request.

      1. If the “expired” query parameter is present, issue a JWT signed with the expired key pair and the expired expiry.


**3. Documentation**
    a. Code should be organized.
    b. Code should be commented where needed.
    c. Code should be linted per your language/framework.

**4. Tests**
    a. Test suite for your given language/framework with tests for you.
    b. Test coverage should be over 80%.

**5. Blackbox testing**
    a. Ensure the included test clientLinks to an external site. functions against your server.
    b. The testing client will attempt a POST to /auth with no body. There is no need to check authentication for this project.
       NOTE: We are not actually testing user authentication, just mocking authentication and returning a valid JWT for this user


