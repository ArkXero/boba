// Type a message, press Enter to "send" it, and it locks in place

const note = document.getElementById("note");
const sentLabel = document.getElementById("sent-label");

function lockMessage(text) {
    note.innerText = text;
    note.contentEditable = "false";
    note.classList.add("sent");
    sentLabel.hidden = false;
}

note.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    const text = note.innerText.trim();

    if (text) {
        lockMessage(text);
    }
});

// Clear leftover line breaks so the placeholder shows again when the box is empty
note.addEventListener("input", () => {
    if (note.innerText.trim() === "") {
        note.innerHTML = "";
    }
});


// Load the whole video into memory so it can loop smoothly.
// Simple local servers can't jump back to the start of a file,
// which makes the video freeze on its last frame instead of looping.

const video = document.querySelector(".background");

fetch(video.src)
    .then((response) => response.blob())
    .then((blob) => {
        video.src = URL.createObjectURL(blob);
    });
