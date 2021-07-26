/* Member box baybeee */
function addMember() {
  var name = document.querySelector("#memberName").value;
  var image = document.querySelector("#memberImage").files[0];
  var desc = document.querySelector("#memberDesc").value;
  const memberBox = document.createElement("section");
  memberBox.classList.add("content-box");
  const memberName = document.createElement("h3");
  memberName.append(name);
  memberBox.append(memberName);
  const memberDiv = document.createElement("div");
  // memberDiv.style.display = "flex"
  // memberDiv.style.alignItems = "flex-end"
  const memberImage = document.createElement("img");
  memberImage.src = URL.createObjectURL(image);
  // memberImage.style.width = "150px"
  memberDiv.append(memberImage);
  const memberDesc = document.createElement("p");
  memberDesc.append(desc);
  memberDiv.append(memberDesc);
  memberBox.append(memberDiv);
  document.querySelector("#aboutUs").append(memberBox);
}
function imgPreview(event) {
  const image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
}
const imageInput = document.querySelector("#memberImage");
imageInput.addEventListener("change", imgPreview);
const submit = document.querySelector("#memberSubmit");
submit.addEventListener("click", addMember);

// Check if the message is too long

const validation = Array.from(document.getElementsByClassName("validation"));
const contactForm = document.querySelector(".contactForm");
const requestList = document.querySelector(".requestList");

function validateMessage(textarea) {
  const length = textarea.value.length;
  textarea.setAttribute("aria-invalid", length > 149 ? true : false);
}

validation.forEach((el) => {
  function validateMessageOnInput() {
    el.addEventListener("input", () => {
      validateMessage(el);
    });
  }

  validateMessageOnInput();
});

// Robot check, show request on page

contactForm.onsubmit = (event) => {
  event.preventDefault();
  const message = event.target.elements.message.value;
  if (message.length > 149) return alert("Your message is too long!");
  const robotValue = event.target.elements.robotCheck.value;
  if (robotValue !== "I am not a robot") return alert("Robot detected!!!");
  const clientName = event.target.elements.clientName.value;
  const clientEmail = event.target.elements.clientEmail.value;
  const clientInputs = [
    ["Name:", clientName],
    ["Email:", clientEmail],
    ["Your message:", message],
  ];
  clientInputs.forEach((input) => {
    const detail = document.createElement("li");
    const text = document.createTextNode(`${input[0]} ${input[1]}`);
    detail.appendChild(text);
    requestList.appendChild(detail);
  });
  contactForm.reset();
};
