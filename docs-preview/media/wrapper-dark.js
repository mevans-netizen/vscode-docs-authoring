var body = document.getElementsByClassName("vscode-body")[0];
body.setAttribute("class", "vscode-body scrollBeyondLastLine wordWrap showEditorSelection vscode-dark");

var mainContainer = document.createElement('div');
mainContainer.classList.add("content")
mainContainer.classList.add("has-top-padding")
mainContainer.classList.add("uhf-container")
// Move the body's children into this wrapper
while (body.firstChild) {
  mainContainer.appendChild(body.firstChild);
}

// Append the wrapper to the body
document.body.appendChild(mainContainer);