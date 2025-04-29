const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questions = [
  "Vân có thích Tú không? 😝",
  "Vân muốn đi chơi với Tú không? 🎉",
  "Vân muốn hẹn hò với Tú không? ❤️",
  "Vân chính là định mệnh của đời Tú đấy, đúng không? 😍",
];

let currentQuestion = 0;
yesBtn.addEventListener("click", () => {
  currentQuestion++;

  // Cập nhật câu hỏi
  if (currentQuestion < questions.length) {
    questionEl.innerText = questions[currentQuestion];

    // Reset vị trí nút "Không"
    noBtn.style.position = "relative";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
  } else {
    questionEl.innerText = "Hihi, mình biết mà! 🥰";
    document.querySelector(".buttons").style.display = "none";
  }
});

// Di chuyển nút "Không" khi chuột đến gần
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();
  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height - noBtn.offsetHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
});
