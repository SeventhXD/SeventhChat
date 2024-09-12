// chat.js

document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const messageList = document.getElementById('messageList');
  const messageInput = document.getElementById('messageInput');
  const roomCodeDisplay = document.getElementById('roomCodeDisplay');
  const userNameDisplay = document.getElementById('userNameDisplay');
  const leaveRoomButton = document.getElementById('leaveRoomButton');

  // Retrieve room code and display name from URL parameters
  const params = new URLSearchParams(window.location.search);
  const roomCode = params.get('room');
  const displayName = params.get('name');

  if (roomCode && displayName) {
      roomCodeDisplay.textContent = `Room Code: ${roomCode}`;
      userNameDisplay.textContent = `Display Name: ${displayName}`;
  } else {
      window.location.href = 'login.html'; // Redirect to login if no room code or display name
  }

  // Handle sending messages
  messageForm.addEventListener('submit', event => {
      event.preventDefault();
      const message = messageInput.value.trim();

      if (message) {
          const timestamp = new Date().toLocaleTimeString();
          const messageElement = document.createElement('li');
          messageElement.textContent = `[${timestamp}] ${displayName}: ${message}`;
          messageList.appendChild(messageElement);
          messageInput.value = '';
          messageList.scrollTop = messageList.scrollHeight;
      }
  });

  // Handle leaving room
  leaveRoomButton.addEventListener('click', () => {
      window.location.href = 'login.html'; // Redirect to login
  });
});
