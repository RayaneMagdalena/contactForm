document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from Local Storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    const selectedInterests = JSON.parse(localStorage.getItem('selectedInterests'));
  
    // Populate the fields in the report
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-email').textContent = userData.email;
    document.getElementById('user-message').textContent = userData.message;
      document.getElementById('user-interested').textContent = selectedInterests.join(', ');
  });