const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Placeholder for password validation (replace with actual logic)
  if (password !== 'password123') {
    loginStatus.textContent = 'Invalid password';
    return;
  }

  if (email.endsWith('.np')) {
    loginStatus.textContent = 'Logged in as admin';
  } else if (email.endsWith('.com')) {
    loginStatus.textContent = 'Logged in as user';
  } else {
    loginStatus.textContent = 'Invalid email domain';
  }
});