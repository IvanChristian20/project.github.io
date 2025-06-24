emailjs.init("mgTgfljZ1kSpJh6GV");

let selectedEmoji = "";

window.onload = function () {
  document.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", function () {
      document.querySelectorAll(".emoji").forEach(e => e.classList.remove("selected"));
      this.classList.add("selected");
      selectedEmoji = this.dataset.value;
    });
  });

  document.querySelector(".send-button").addEventListener("click", () => {
    const message = document.getElementById("feedback-text").value;

    if (!selectedEmoji || !message.trim()) {
      alert("Please select an emoji and write your feedback.");
      return;
    }

    const templateParams = {
      emoji: selectedEmoji,
      feedback: message,
    };

    emailjs.send("service_ud81zbo", "template_va72cph", templateParams)
      .then(() => {
        alert("Feedback sent successfully!");
        document.getElementById("feedback-text").value = "";
        document.querySelectorAll(".emoji").forEach(e => e.classList.remove("selected"));
        selectedEmoji = "";
      }, (error) => {
        console.error("FAILED...", error);
        alert("Failed to send feedback.");
      });
  });
};