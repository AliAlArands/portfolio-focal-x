const messageBox = document.querySelector(".message-box");

messageBox.addEventListener("click", () => {
    messageBox.querySelector("textarea").focus();
})