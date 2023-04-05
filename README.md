# WebDesign_002704393
This assignment uses React, Node, Express, and MongoDb to build a complete stack application. 
The Front-end portion of the program was developed using React. Pages like Home, About Us, Contact, Login, and Jobs have been added to the Interface. 
React Router has been utilized to generate a navigation bar and redirect to these specific pages in order to route to them. 
React cards have also been utilized as templates for contact page data. This can be accomplished by passing the required props. 
Also, the login page makes an API call to Node to confirm the user credentials, and depending on whether the validation was successful or unsuccessful, the output is presented. To verify the user credentials, a new endpoint has been added to the Node server. 
This endpoint requests data from mongoDb, compares hashes using bcrypt, and accepts an email and password.