import{showYear} from './showYear.js'


let sectionElemenWithYears = document.getElementById('years');
sectionElemenWithYears.addEventListener('click', selectYear)
function selectYear(e) {
    e.preventDefault()
    let element = e.target
    // console.log(element);
    if (element.classList.contains('date') ) {
        let year = element.textContent
            let currentYear = `year-${year}`
           showYear(currentYear);

           ///clear All years
           sectionElemenWithYears.style.display = 'none'
    }
}
