// Check if the message is too long

const validation = Array.from(document.getElementsByClassName("validation"));
const contactForm = document.querySelector(".contactForm");
const memberForm = document.querySelector(".memberForm");
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

// Member zone

function imgPreview(event) {
  const image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
}
const imageInput = document.querySelector("#memberImage");
imageInput.addEventListener("change", imgPreview);

function passCheck(word) {
  return word === "OldOnes";
}
//
memberForm.onsubmit = (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const image = event.target.elements.image.files[0];
  const desc = event.target.elements.description.value;
  const password = event.target.elements.password.value;
  if (desc.length > 149) return alert("Too long! Much too long!");
  if (!passCheck(password))
    return alert("Ah ah ah, you didn't say the magic word!");
  const memberBox = document.createElement("section");
  memberBox.classList.add("info-box");
  const memberName = document.createElement("h3");
  memberName.append(name);
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("row");
  const memberImage = document.createElement("img");
  memberImage.src = URL.createObjectURL(image);
  const memberDesc = document.createElement("p");
  memberDesc.append(desc);
  memberDiv.append(memberImage, memberDesc);
  memberBox.append(memberName, memberDiv);
  document.querySelector("#aboutUs").append(memberBox);
  document.getElementById("output").src = "";
  memberForm.reset();
};
