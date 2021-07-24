/* Member box baybeee */
function addMember() {
  var name = document.querySelector("#memberName").value
  var image = document.querySelector("#memberImage").files[0]
  var desc = document.querySelector("#memberDesc").value
  const memberBox = document.createElement("section")
  memberBox.classList.add("content-box")
  const memberName = document.createElement("h3")
  memberName.append(name)
  memberBox.append(memberName)
  const memberDiv = document.createElement("div")
  // memberDiv.style.display = "flex"
  // memberDiv.style.alignItems = "flex-end"
  const memberImage = document.createElement("img")
  memberImage.src = URL.createObjectURL(image)
  // memberImage.style.width = "150px"
  memberDiv.append(memberImage)
  const memberDesc = document.createElement("p")
  memberDesc.append(desc)
  memberDiv.append(memberDesc)
  memberBox.append(memberDiv)
  document.querySelector("#aboutUs").append(memberBox)
}
function imgPreview(event) {
  const image = document.getElementById("output")
  image.src = URL.createObjectURL(event.target.files[0])
}
const imageInput = document.querySelector("#memberImage")
imageInput.addEventListener("change", imgPreview)
const submit = document.querySelector("#memberSubmit")
submit.addEventListener("click", addMember)
