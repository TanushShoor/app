// import { createClient } from '@supabase/supabase-js'
// the above line is better suited if you are using react, vue



// PREVIOUS METHOD :
const bt = document.getElementById("LogIn");
bt.addEventListener('click', ()=>{
    window.location.href = "https://fxupgkzprrbkzapufdpu.supabase.co"
});

// const supabase = createClient('https://fxupgkzprrbkzapufdpu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4dXBna3pwcnJia3phcHVmZHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTUyODIsImV4cCI6MjA1ODU5MTI4Mn0.CCaUd4sqk_NN9N19-pglJa-B4JiSZTTVR_Mwj4pMcWk');


// import { createClient } from '@supabase/supabase-js'
const createClient = require('@supabase/supabase-js');
const supabaseUrl = 'https://fxupgkzprrbkzapufdpu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4dXBna3pwcnJia3phcHVmZHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTUyODIsImV4cCI6MjA1ODU5MTI4Mn0.CCaUd4sqk_NN9N19-pglJa-B4JiSZTTVR_Mwj4pMcWk';
const supabase = createClient(supabaseUrl, supabaseKey)












// if you are using react then you need to install the "supabase library" on your codespace using:
//the below command in the terminal : -
// npm install @supabase/supabase-js


// NEW METHOD :
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseApp = {
//   apiKey: "AIzaSyDDdU1nwX6ntNb8A4zbJ0ga6sbEZqCpiWk",
//   authDomain: "threatsim-e4e11.firebaseapp.com",
//   projectId: "threatsim-e4e11",
//   storageBucket: "threatsim-e4e11.firebasestorage.app",
//   messagingSenderId: "953324003218",
//   appId: "1:953324003218:web:9ba8cf66acfca594fe2b4b",
//   measurementId: "G-Q6CBT4JN83"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseApp);
// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://127.0.0.1:4000/auth")



