const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Event listener for the "Create" button
createBtn.addEventListener("click", () => {
  // Create a new note element (a div)
  const note = document.createElement("div");
  note.className = "note"; // Apply a class for styling

  // Create an input box for text content
  const inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.className = "input-box";
  inputBox.setAttribute("placeholder", "Enter your note");

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Event listener for the delete button
  deleteBtn.addEventListener("click", () => {
    notesContainer.removeChild(note); // Remove the note when the delete button is clicked
  });

  // Append the input box and delete button to the note
  note.appendChild(inputBox);
  note.appendChild(deleteBtn);

  // Append the note to the notes container
  notesContainer.appendChild(note);
});
 