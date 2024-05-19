# buttonCounter-freeAccess
Note - The node_modules folder was far too large to upload, so if someone wants to run this locally they would have to run npm install before opening with a server like VSC Live Server.
This is a learning exercise to showcase that I can create full-stack web development projects. It is relatively simple because of this.
The code uses Google Firestore as the database and Webpack as a JS bundler.
The frontend is simple; the HTML has a title, an h1 line, a button, and CSS to style it to where it looks nice using button states, flex containers, a border radius to make the button circular, shadows, and a background image. The button displays the number of times it has been clicked, with a default number of 0.

The backend imports needed libraries from Firebase and provide the necessary config, and then initializes Firebase, pointing to a specific document in Firestore with a singular field named button, which holds the number of times the button was clicked.
When the page is loaded, it calls a function that fetches the document if it was found and turns it into a string, then removes the brackets at the start and the end and splits the string into an array to isolate the number. The number is then returned as an int but in the form of a promise due to the function being asynchronous.
This promise is stored into a variable once returned, which then has the then() function called on it to set the inner HTML of the button upon loading the page as well as a counter variable.
An event listener listens for every time the button is clicked. Upon clicking the button a function is called to increment the counter and then set the inner HTML to display the new value. The Firestore document is then updated with the new value.
Currently, the security rules for the database are to accept any read or write calls which is objectively bad, but authorization is outside the scope of this project.
