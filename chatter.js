/* textarea chat */
function tSend() {
  var userBox = document.getElementById("userBox");
  var chat = document.getElementById("chat");
  chat.append("You: " + userBox.value+ "\n");
}

/* div chat */
function dSend() {
  var userBox = document.getElementById("userBox");
  var chat = document.getElementById("chat");
  var br = document.createElement("br");
  chat.append("You: " + userBox.value+ "\n");
  chat.appendChild(br);
}

/* reset userBox */
function reset() {
  document.getElementById("userBox").value = "";
}