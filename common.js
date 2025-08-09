function showPopup(message, isError = true) {
  const popupMessage = document.getElementById("popupMessage");
  const popupOverlay = document.getElementById("popupOverlay");
  popupMessage.textContent = message;
  popupMessage.className = isError ? "error-message" : "success-message";
  popupOverlay.style.display = "block";
  popupMessage.style.display = "block";
  setTimeout(hidePopup, isError ? 3000 : 5000);
}

function hidePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  document.getElementById("popupMessage").style.display = "none";
}

function showMessage(elementId, message, isError = true) {
  const messageDiv = document.getElementById(elementId);
  messageDiv.textContent = message;
  messageDiv.style.color = isError ? "#ff4444" : "#00cc00";
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 3000);
}

function logout() {
  firebase.auth().signOut().then(() => {
    localStorage.clear();
    window.location.href = "index.html";
  }).catch(error => {
    console.error("Logout failed:", error);
    showPopup(`Failed to log out: ${error.message}`, true);
  });
}