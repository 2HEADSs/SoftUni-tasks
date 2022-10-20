import { post } from "./post.js";
import { cancel } from "./cancel.js";
const postBtn = document.querySelector('.public');
postBtn.addEventListener('click', post);
const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', cancel)
