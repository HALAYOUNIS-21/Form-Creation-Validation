// Function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert response to JSON
        
        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user names
        const userList = document.createElement('ul');
        
        // Loop through the users and create a <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        dataContainer.appendChild(userList); // Append the <ul> to the data container
    } catch (error) {
        // Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);