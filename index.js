document.addEventListener("DOMContentLoaded", function () {
  const ques = document.querySelectorAll("h4");
  const ans = document.querySelectorAll("p");

  ques.forEach((header, index) => {
    header.addEventListener("click", () => {
      ans[index].classList.toggle("visible");
      const img = header.querySelector("img");
      img.src = ans[index].classList.contains("visible")
        ? "./assets/images/icon-minus.svg"
        : "./assets/images/icon-plus.svg";
    });
  });
});
