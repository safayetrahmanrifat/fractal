// DOM Elements
const userList = document.getElementById("userList");

// Function to fetch data from an API
async function fetchUsers() {
  try {
    // Simulating a public API request
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check for response errors
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    // Parse JSON data
    const users = await response.json();

    // Display users on the page
    displayUsers(users);
  } catch (error) {
    // Handle errors
    userList.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Function to dynamically display users
function displayUsers(users) {
  if (users.length === 0) {
    userList.innerHTML = "<p>No users found.</p>";
    return;
  }

  // Clear loading message
  userList.innerHTML = "";

  // Create user cards dynamically
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>City: ${user.address.city}</p>
    `;

    userList.appendChild(userDiv);
  });
}

// Fetch users when the page loads
fetchUsers();
