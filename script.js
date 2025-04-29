// Lấy các phần tử HTML cần thiết
const questionElement = document.getElementById("question");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const finalMessageElement = document.getElementById("finalMessage");
const buttonContainer = document.querySelector(".buttons");

// Mảng chứa các câu hỏi
const questions = [
  "Xin chào Vân đến với chuyên mục 'Có' hoặc 'Không'. Mời Vân nhấn 'Không' để tiếp tục",
  "Troll Vân vậy thôi hihihi, giờ Tú muốn có vài câu hỏi hỏi Vân. Vân đồng ý nha 😍",
  "Hello Vân, Vân có giận Tú chuyện hôm trước không? 😝",
  "Vân chấp nhận tha thứ cho Tú nhé 🥺🥺",
  "Cảm ơn Vân nhé, Vân nhấn CÓ để tiếp tục đi 😆😆",
  "Vân muốn đi chơi với Tú không? 🎉",
  "Vân có thích Tú không? ❤️",
  "Vân chính là định mệnh của đời Tú đấy, đúng không? 😍",
];

let currentQuestionIndex = 0;
let noButtonHoverCount = 0;
let yesButtonScale = 1; // Theo dõi kích thước nút Yes

// Hàm hiển thị câu hỏi hiện tại
function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex];
  } else {
    showFinalMessage();
  }
}

// Hàm hiển thị thông điệp cuối cùng
function showFinalMessage() {
  questionElement.classList.add("hidden");
  buttonContainer.classList.add("hidden");
  finalMessageElement.classList.remove("hidden");
}

// Xử lý sự kiện khi nhấn nút "Có"
yesButton.addEventListener("click", () => {
  currentQuestionIndex++;
  displayQuestion();
  // Phóng to nút "Có" thêm một chút nữa
  yesButtonScale += 0.1; // Tăng tỉ lệ scale lên
  yesButton.style.transform = `scale(${yesButtonScale})`;

  // Đặt lại nút "Không" về trạng thái ban đầu (vị trí và kích thước)
  resetNoButtonState();
});

// Xử lý sự kiện khi di chuột LÊN nút "Không" (Troll!)
noButton.addEventListener("mouseover", moveNoButton);
// Xử lý sự kiện khi nhấn vào nút "Không" (cũng troll luôn)
noButton.addEventListener("click", moveNoButton);

// --- HÀM DI CHUYỂN NÚT "KHÔNG" DÙNG TRANSFORM ---
function moveNoButton() {
  noButtonHoverCount++;

  // Tính toán khoảng cách di chuyển ngẫu nhiên tương đối
  // Giới hạn khoảng cách để nút không chạy quá xa khỏi vị trí gốc
  const maxMove = 80; // Di chuyển tối đa 80px theo mỗi hướng
  const randomX = (Math.random() - 0.5) * 2 * maxMove; // Từ -maxMove đến +maxMove
  const randomY = (Math.random() - 0.5) * 2 * (maxMove / 2); // Di chuyển theo Y ít hơn

  // Tính toán tỉ lệ thu nhỏ (làm nút khó bấm hơn)
  // Giảm kích thước dần nhưng không quá nhỏ
  let currentScale = 1 - noButtonHoverCount * 0.05;
  if (currentScale < 0.4) {
    // Giới hạn kích thước tối thiểu là 40%
    currentScale = 0.4;
  }

  // Áp dụng transform: translate để di chuyển và scale để thu nhỏ
  noButton.style.transform = `translate(${randomX}px, ${randomY}px) scale(${currentScale})`;
}

// --- HÀM ĐẶT LẠI TRẠNG THÁI NÚT "KHÔNG" ---
function resetNoButtonState() {
  // Reset transform về trạng thái ban đầu (không di chuyển, kích thước bình thường)
  noButton.style.transform = "translate(0, 0) scale(1)";
  // Reset bộ đếm hover để lần sau lại bắt đầu thu nhỏ từ scale 1
  // noButtonHoverCount = 0; // Bỏ dòng này nếu muốn nó tiếp tục nhỏ dần ở câu hỏi sau
}

// Hiển thị câu hỏi đầu tiên khi trang được tải
displayQuestion();
// Không cần gọi resetNoButtonPosition ban đầu nữa vì nút đã ở đúng vị trí theo flexbox
