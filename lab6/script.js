function fetchUserData() {
  fetch('https://randomuser.me/api/?results=3')
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => data.results.forEach(updateUserInformation))
    .catch(error => {
      console.error('There was problem with fetch operation:', error);
    });
}

function updateUserInformation(user) {
  const userInfo = {
    name: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    country: user.location.country,
    postcode: user.location.postcode,
    picture: user.picture.large
  };
  const userName = `${user.name.first} ${user.name.last}`;
  const userPicture = user.picture.large;

  const userDiv = document.createElement('div');
  userDiv.className = 'user';
  userDiv.innerHTML = `
    <img src="${userInfo.picture}" alt="Фото користувача ${userInfo.name}">
    <h3>${userInfo.name}</h3>
    <p>${userInfo.city}, ${userInfo.country}</p>
    <p>Поштовий індекс: ${userInfo.postcode}</p>
  `;

  document.getElementById('userContainer').appendChild(userDiv);
}

document.getElementById('updateUsers').addEventListener('click', fetchUserData);
