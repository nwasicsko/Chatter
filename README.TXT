README
# Chatter

## Do not use if you are a beginner!

Chatter can be used with a textarea tag:
README
---snippet---
   <div id="chat">
    <textarea id="chatbox" readonly></textarea><br>
    <div id="user-msg-bar" contenteditable></div>
    <button id="Send" onclick="send(); reset();"><h5>Send</h5></button>
    </div>
    ---snippet---

Chatter can also be used with a div tag:
  ---snippet---
  <div id="chat">
  <div id="chatbox" readonly></div><br>
      <div id="toolbar">
      <div id="user-msg-bar" contenteditable></div>
      <button id="Send" onclick="send(); reset();"><h5>Send</h5></button>
  </div>
  </div>
  ---snippet---
  
Chatter's id's:

1. chat
2. chatbox
3. toolbar
4. Send

Chatter's javascript functions:
1. send()
2. reset()
