import { showMonth } from './showMonths.js'

let allMonths = document.querySelectorAll('.monthCalendar');
let sectionElemenWithYears = document.getElementById('years');


export function showYear(id) {
    allMonths.forEach(x => x.style.display = 'none');
    let currentYearSection = document.getElementById(id);
    currentYearSection.style.display = 'block';
    currentYearSection.addEventListener('click', (e) => {

        e.preventDefault();
        if (e.target.tagName == 'CAPTION') {
            sectionElemenWithYears.style.display = 'block';
            currentYearSection.style.display = 'none';
            return;
        }
        if (e.target.classList.contains('date')) {
            let month = e.target.textContent;
            month = months[month];
            let year = id.split('-')[1];
            let idForMonth = `month-${year}-${month}`
            currentYearSection.style.display = 'none';
            showMonth(idForMonth,id)
            console.log(idForMonth);
        }
    });

}

let months = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sept': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12,

}
