window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("li").forEach(function (li) {
    li.addEventListener("click", function () {
      li.classList.toggle("checked")
    });
  });
  document.querySelectorAll(".close").forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
      closeButton.parentElement.remove()
    })
  });
  document.querySelector("#addBtn").addEventListener("click", function () {
    const addSpan = document.createElement("span")
    addSpan.addEventListener("click", function () {
      addSpan.parentElement.remove()
    })
    const addButton = document.createElement('li')
    addButton.textContent = document.querySelector("#input").value
    addButton.appendChild(addSpan)
    console.log(document.querySelector("ul").appendChild(addButton))

    addButton.addEventListener("click", function () {
      addButton.classList.toggle("checked")
    });
    addSpan.classList.add("close");
    addSpan.textContent = ("x")
  })
});
