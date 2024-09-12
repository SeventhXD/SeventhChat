// login.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const roomCodeDisplay = document.getElementById('roomCodeDisplay');
  const createRoomButton = document.getElementById('createRoomButton');
  const roomCodeInput = document.getElementById('roomCode');

  // Function to generate a unique room code
  function generateRoomCode() {
      return Math.random().toString(36).substr(2, 8).toUpperCase();
  }

  // Handle room creation
  createRoomButton.addEventListener('click', () => {
      const roomCode = generateRoomCode();
      roomCodeDisplay.textContent = `Room Code: ${roomCode}`;
      // Store the generated room code in local storage or somewhere accessible
      localStorage.setItem('currentRoomCode', roomCode);
  });

  // Handle form submission for joining rooms
  form.addEventListener('submit', event => {
      event.preventDefault();
      const displayName = document.getElementById('displayName').value.trim();
      const roomCode = roomCodeInput.value.trim();
      
      if (displayName && roomCode) {
          // Redirect to the chat page with room code and display name
          window.location.href = `chat.html?room=${encodeURIComponent(roomCode)}&name=${encodeURIComponent(displayName)}`;
      } else {
          alert('Please fill out both fields.');
      }
  });
});
