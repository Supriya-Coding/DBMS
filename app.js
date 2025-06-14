(1)
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Dummy authentication
        if (username === 'admin' && password === 'password') {
            window.location.href = 'health.html';
        } else {
            alert('Invalid credentials, please try again.');
        }
    });
});

(2)
document.addEventListener('DOMContentLoaded', () => {
    const persons = [];
    const healthTrackers = [];

    const personForm = document.getElementById('person-form');
    const trackerForm = document.getElementById('tracker-form');
    const content = document.getElementById('content');

    personForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const person = {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            account_id: document.getElementById('account_id').value,
            phone_number: document.getElementById('phone_number').value,
            email: document.getElementById('email').value,
            address: {
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                pin_code: document.getElementById('pin_code').value
            }
        };

        persons.push(person);
        displayPersons();
        personForm.reset();
    });

    trackerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const tracker = {
            bp: document.getElementById('bp').value,
            sleep_hours: document.getElementById('sleep_hours').value,
            water_drank: document.getElementById('water_drank').value,
            blood_sugar_level: document.getElementById('blood_sugar_level').value,
            exercise: document.getElementById('exercise').value,
            no_of_steps: document.getElementById('no_of_steps').value,
            person: document.getElementById('tracker_account_id').value
        };

        healthTrackers.push(tracker);
        displayPersons();
        trackerForm.reset();
    });

    function displayPersons() {
        content.innerHTML = '';

        persons.forEach(person => {
            const personDiv = document.createElement('div');
            personDiv.className = 'person';
            personDiv.innerHTML = `
                <h2>${person.name}</h2>
                <p>DOB: ${person.dob}</p>
                <p>Phone: ${person.phone_number}</p>
                <p>Email: ${person.email}</p>
                <p>Address: ${person.address.city}, ${person.address.state}, ${person.address.pin_code}</p>
            `;

            const tracker = healthTrackers.find(ht => ht.person === person.account_id);
            if (tracker) {
                const bpIndicatorClass = getBPIndicatorClass(tracker.bp);
                const sugarIndicatorClass = getSugarIndicatorClass(tracker.blood_sugar_level);

                personDiv.innerHTML += `
                    <h3>Health Tracker</h3>
                    <p>BP: ${tracker.bp} <span class="indicator ${bpIndicatorClass}"></span></p>
                    <p>Sleep Hours: ${tracker.sleep_hours}</p>
                    <p>Water Drank: ${tracker.water_drank} L</p>
                    <p>Blood Sugar Level: ${tracker.blood_sugar_level} <span class="indicator ${sugarIndicatorClass}"></span></p>
                    <p>Exercise: ${tracker.exercise}</p>
                    <p>No of Steps: ${tracker.no_of_steps}</p>
                `;
            }

            content.appendChild(personDiv);
        });
    }

    function getBPIndicatorClass(bp) {
        const bpValue = parseInt(bp);
        if (bpValue > 120) {
            return 'high-bp';
        } else if (bpValue < 80) {
            return 'low-bp';
        } else {
            return '';
        }
    }

    function getSugarIndicatorClass(sugarLevel) {
        const sugarValue = parseInt(sugarLevel);
        if (sugarValue > 140) {
            return 'high-sugar';
        } else if (sugarValue < 70) {
            return 'low-sugar';
        } else {
            return '';
        }
    }
});