function solve() {
    let budget = document.getElementById('sum');
    let hireBtn = document.getElementById('add-worker').addEventListener('click', hireFn);

    let firstNameEl = document.getElementById('fname')
    let lastNameEl = document.getElementById('lname')
    let emailEl = document.getElementById('email')
    let birthEl = document.getElementById('birth')
    let positionEl = document.getElementById('position')
    let salaryEl = document.getElementById('salary');

    function hireFn(e) {
        e.preventDefault();

        if (firstNameEl.value !== '' && lastNameEl.value !== '' && emailEl.value !== '' && birthEl.value !== '' && positionEl.value !== '' && salaryEl.value !== '') {
            let trWithData = document.createElement('tr');

            let tdFirstName = document.createElement('td');
            tdFirstName.textContent = firstNameEl.value;
            trWithData.appendChild(tdFirstName);

            let tdLastName = document.createElement('td');
            tdLastName.textContent = lastNameEl.value;
            trWithData.appendChild(tdLastName);

            let tdEmail = document.createElement('td');
            tdEmail.textContent = emailEl.value;
            trWithData.appendChild(tdEmail);

            let tdBirth = document.createElement('td');
            tdBirth.textContent = birthEl.value;
            trWithData.appendChild(tdBirth);

            let tdPosition = document.createElement('td');
            tdPosition.textContent = positionEl.value;
            trWithData.appendChild(tdPosition);

            let tdSalary = document.createElement('td');
            tdSalary.textContent = Number(salaryEl.value);
            tdSalary.setAttribute('id', 'current-salary')
            trWithData.appendChild(tdSalary);
            
            let tdForBtns = document.createElement('td');
            
            let firedBtn = document.createElement('button');
            firedBtn.setAttribute('class', 'fired');
            firedBtn.textContent = 'Fired';
            firedBtn.addEventListener('click', fireFn)
            tdForBtns.appendChild(firedBtn);

            let editBtn = document.createElement('button');
            editBtn.setAttribute('class', 'edit');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', editFn)
            tdForBtns.appendChild(editBtn)


            trWithData.appendChild(tdForBtns);
            document.getElementById('tbody').appendChild(trWithData)
           
            
            
            let total = 0
            let allSalary = Array.from(document.querySelectorAll('#current-salary'));
            
            function editFn(e){
                firstNameEl.value = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[0].textContent
                lastNameEl.value = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[1].textContent
                emailEl.value = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[2].textContent
                birthEl.value = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[3].textContent
                positionEl.value = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[4].textContent
                salaryEl.value = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[5].textContent
                
                e.currentTarget.parentElement.parentElement.remove()
                total = 0
                allSalary = Array.from(document.querySelectorAll('#current-salary'));
                for (let el of allSalary) {
                    let currentSum = el.textContent
                    total += Number(currentSum)
                }
                budget.textContent = total.toFixed(2)

            }
            function fireFn(e){
                e.currentTarget.parentElement.parentElement.remove()
                total = 0
                allSalary = Array.from(document.querySelectorAll('#current-salary'));
                for (let el of allSalary) {
                    let currentSum = el.textContent
                    total += Number(currentSum)
                }
                budget.textContent = total.toFixed(2)
            }
            total = 0
            for(let el of allSalary){
                let currentSum = el.textContent
                total += Number(currentSum)
            }

            budget.textContent = total.toFixed(2)


            firstNameEl.value = ''
            lastNameEl.value = ''
            emailEl.value = ''
            birthEl.value = ''
            positionEl.value = ''
            salaryEl.value = ''
        }
    }


}
solve()