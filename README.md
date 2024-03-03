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

**1. Key Generation** a. Implement RSA key pair generation. b. Associate a Key ID (kid) and expiry timestamp with each key.


![image](https://github.com/zzyztx/Project1/assets/91233057/43f371d4-5956-4b3a-aac4-1e18ceaece56)

![image](https://github.com/zzyztx/Project1/assets/91233057/bdb66519-ef03-4b12-923d-f9feb50d3312)


**2. Web server with two handlers** a. Serve HTTP on port 8080. b. A RESTful JWKS endpoint that serves the public keys in JWKS format. 1. Only serve keys that have not expired. c. A /auth endpoint that returns an unexpired, signed JWT on a POST request. 1. If the “expired” query parameter is present, issue a JWT signed with the expired key pair and the expired expiry.

![image](https://github.com/zzyztx/Project1/assets/91233057/b4e179c3-54aa-4fa2-9e72-0f590cd03ab8)

![image](https://github.com/zzyztx/Project1/assets/91233057/e95d93fc-b6b0-4cdb-90bd-d914a9466541)

![image](https://github.com/zzyztx/Project1/assets/91233057/58b2e622-701b-477e-9b7b-902e97ff2599)


**3. Documentation** a. Code should be organized. b. Code should be commented where needed. c. Code should be linted per your language/framework.
I did my best with this README.md and tried to post related snippets of code to the requirements.





**4. Tests** a. Test suite for your given language/framework with tests for you. b. Test coverage should be over 80%.


HOW TO RUN MY SERVER.JS TO TEST IT
1. Navigate to the folder with all my files on a terminal, in my case VS Code
2. enter "npm run serverStart" in the terminal, this will run a script and package installed in package.json and start the server locally on port 8080

![image](https://github.com/zzyztx/Project1/assets/91233057/7b454939-416f-4df0-b45d-4ef608f54c3e)





![image](https://github.com/zzyztx/Project1/assets/91233057/45657978-bbd3-4926-a6bb-2336910239d3)

These are the test cases I decided to run againist my .js server

Test Case 1
![image](https://github.com/zzyztx/Project1/assets/91233057/dc86e78a-7d3f-4f96-b9b3-892f5e0eb9cb)


Test Case 2
![image](https://github.com/zzyztx/Project1/assets/91233057/8aea9702-53a3-4f86-a68a-2821c69fa528)


Test Case 3
![image](https://github.com/zzyztx/Project1/assets/91233057/0aafa25c-f007-4fa1-8e2b-57a901f0ec07)


Test Case 4
![image](https://github.com/zzyztx/Project1/assets/91233057/2b4739b0-5477-49de-a9a6-4f14235eed3a)


Test Case 5
![image](https://github.com/zzyztx/Project1/assets/91233057/af0896bf-164c-4869-b323-4c6ea61c2746)


Test Case 6
![image](https://github.com/zzyztx/Project1/assets/91233057/96a5a59d-527c-4d63-b1ed-802766ce35be)






**5. Blackbox testing** a. Ensure the included test clientLinks to an external site. functions against your server. b. The testing client will attempt a POST to /auth with no body. There is no need to check authentication for this project. NOTE: We are not actually testing user authentication, just mocking authentication and returning a valid JWT for this user

I could not get either of the window versions of the graderbot.exe to work on my machine.
