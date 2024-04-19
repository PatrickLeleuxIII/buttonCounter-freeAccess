import { initializeApp } from "firebase/app";
import {doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

//step 1:get number from database
//step 2:assign number to an int and the button to that int.
//step 3:onclick, increase int by one and update database with new number.


const firebaseConfig = {
  apiKey: "AIzaSyB18XL-scFeMGF-rRiEvM9d0oBoOy17vqc",
  authDomain: "first-fullstack-thing.firebaseapp.com",
  projectId: "first-fullstack-thing",
  storageBucket: "first-fullstack-thing.appspot.com",
  messagingSenderId: "592997904095",
  appId: "1:592997904095:web:86eac1303bfe91aa33036a",
  measurementId: "G-65CVVW84P3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const databaseNumber = doc(firestore, 'numbers/buttonNumber');

//function to read number from database and turn it from string field to integer
async function readDocument(){
  const mySnapshot = await getDoc(databaseNumber);
  if (mySnapshot.exists()){
    const docData = mySnapshot.data();
    let field = JSON.stringify(docData); //should be a string that reads {"button":(whatever the number is)}
    field = field.substring(1, field.length-1); //remove brackets at start and end to make the string "button":(whatever the number is)
    const strArr = field.split(':');//should split the string as "button" and (number)
    return parseInt(strArr[1]);// returns as just the number but as a promise object due to being async function

  }
}

async function setDocument(arg){
  await setDoc(databaseNumber, {
    button: arg
  });
}


const myButton = document.getElementById("button1");
let buttonValue = 0;//set initial button value to what is on the database at the time, default value of 0
const testPromise=readDocument();
  testPromise.then((value) => {
    myButton.innerHTML = value;
    buttonValue = value;
  });

//every time the button is clicked, update the button in the html and the database
function buttonClicked(){
  buttonValue++;
    myButton.innerHTML = buttonValue;
  setDocument(buttonValue);
}
myButton.addEventListener("click",buttonClicked);


