'use strict';

// Fetch and display user profiles
function displayUserProfiles() {
  // Fetch data from Random User API
  fetch('https://randomuser.me/api/?nat=CA&results=10&seed=same')
    .then(response => response.json())
    .then(data => {
      // Display user profiles
      const users = data.results;
      const userList = document.getElementById('user-list');

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const profilePicture = document.createElement('img');
        profilePicture.src = user.picture.large;

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const fullName = document.createElement('h3');
        fullName.textContent = `${user.name.first} ${user.name.last}`;

        const city = document.createElement('p');
        city.textContent = user.location.city;

        const addButton = document.createElement('button');
        addButton.classList.add('add-button');
        addButton.textContent = 'Add';

        userInfo.appendChild(fullName);
        userInfo.appendChild(city);

        userCard.appendChild(profilePicture);
        userCard.appendChild(userInfo);
        userCard.appendChild(addButton);

        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call the displayUserProfiles function directly
displayUserProfiles();
