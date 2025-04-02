// import { createClient } from '@supabase/supabase-js'
// the above line is better suited if you are using react, vue
const bt = document.getElementById("LogIn");
bt.addEventListener('click', ()=>{
    window.location.href = "https://fxupgkzprrbkzapufdpu.supabase.co"
});

const supabase = supabase.createClient('https://fxupgkzprrbkzapufdpu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4dXBna3pwcnJia3phcHVmZHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTUyODIsImV4cCI6MjA1ODU5MTI4Mn0.CCaUd4sqk_NN9N19-pglJa-B4JiSZTTVR_Mwj4pMcWk');


// if you are using react then you need to install the "supabase library" on your codespace using:
//the below command in the terminal : -
// npm install @supabase/supabase-js