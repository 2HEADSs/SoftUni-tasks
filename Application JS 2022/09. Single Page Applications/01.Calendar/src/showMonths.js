

export function showMonth(currentId,id){
const currentMonth = document.getElementById(currentId);
let currentYearSection = document.getElementById(id);

currentMonth.style.display = 'block';

currentMonth.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.tagName == 'CAPTION'){
        console.log(e.target);
        console.log(currentMonth);
        //will clear currentMonth
        currentMonth.style.display = 'none';
        currentYearSection.style.display = 'block'
    }
})
}