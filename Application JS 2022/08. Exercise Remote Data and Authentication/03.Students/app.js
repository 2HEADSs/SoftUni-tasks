
function csolve() {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);
    let inputs = document.querySelectorAll('input');

    const tableElement = document.querySelector('#results tbody');

    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    function submit(e) {
        let [firstName, lastName, facultyNumber, grade] = inputs;
        firstName = firstName.value;
        lastName = lastName.value;
        facultyNumber = Number(facultyNumber.value);
        grade = Number(grade.value);
        e.preventDefault()
        const body = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }

        if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => alert(err.message));
        }
        loadData()

    }

    function loadData() {
        tableElement.innerHTML = ''

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let values = Object.values(data);
                values.map(x => {
                    let newTr = document.createElement('tr');

                    let firstNameCell = newTr.insertCell(0);
                    firstNameCell.innerText = x.firstName;

                    let lastNameCell = newTr.insertCell(1);
                    lastNameCell.innerText = x.lastName

                    let facilityNumCell = newTr.insertCell(2);
                    facilityNumCell.innerText = x.facultyNumber;

                    let gradeCell = newTr.insertCell(3);
                    gradeCell.innerText = x.grade;

                    tableElement.appendChild(newTr);


                    let [firstName, lastName, facultyNumber, grade] = inputs;
                    firstName.value = ''
                    lastName.value = ''
                    facultyNumber.value = ''
                    grade.value = ''
                })
            })
    }
}
solve()