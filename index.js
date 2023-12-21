document.addEventListener("DOMContentLoaded", function () {
  const questionContainers = document.querySelectorAll(".ques");

  questionContainers.forEach((container) => {
    const question = container.querySelector(".imagePlus");
    const answer = container.nextElementSibling;
    const image = container.querySelector(".imagePlus");

    question.addEventListener("click", () => {
      answer.classList.toggle("showAns");
      image.src = answer.classList.contains("showAns")
        ? "./assets/images/icon-minus.svg"
        : "./assets/images/icon-plus.svg";
    });
  });
});
