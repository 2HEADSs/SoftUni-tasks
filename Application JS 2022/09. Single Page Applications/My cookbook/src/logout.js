 import { updateAuth } from "./auth.js";

 export function logout(){
     localStorage.removeItem('user');
     updateAuth()
 }