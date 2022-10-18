function lockedProfile() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let mainElement = document.getElementById('main');
    let div = document.getElementById('container')
    mainElement.addEventListener('click', check)
    mainElement.innerHTML = ''
    fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
            let keys = Object.keys(data);
            keys.map(x => {
                let personDiv = document.createElement('div');
                personDiv.className = 'profile';
                personDiv.innerHTML = `	<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="${data[x].username}" value="${data[x].username}" disabled readonly />
				<div class="${data[x].username}">
					<hr>
					<label>Email:</label>
					<input type="email" name="${data[x].email}" value="${data[x].email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="${data[x].age}" value="${data[x].age}" disabled readonly />
				</div>
				
				<button>Show more</button>`
                mainElement.appendChild(personDiv)
            })

        })
        .catch(err => console.log(err))

    function check(e) {
        if (e.target.textContent === "Show more") {
            let profile = e.target.parentNode;
            let radioLock = profile.querySelector(`:nth-child(3)`);
            let radioUnlock = profile.querySelector(`:nth-child(5)`);
            let emailField = profile.children[8];
            // emailField.value = `${data[x].username}`
            emailField.style.display.disabled = 
            console.log(emailField);


            if (radioLock.checked === true) {
                console.log('lock');
            } else if (radioUnlock.checked === true) {
                console.log('unlock');
            }

        }
    }
}