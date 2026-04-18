const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerHTML = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("html")) {
    return "HTML — это язык разметки, который используется для создания структуры веб-страницы. Например: заголовки, абзацы, кнопки, изображения.";
  }

  if (text.includes("css")) {
    return "CSS — это язык стилей. Он отвечает за внешний вид сайта: цвета, шрифты, отступы, размеры и расположение элементов.";
  }

  if (text.includes("javascript")) {
    return "JavaScript — это язык программирования для добавления интерактивности на сайт. Например: кнопки, анимации, формы и чат-боты.";
  }

  if (text.includes("python")) {
    return "Python — это популярный язык программирования. Он используется для учебы, автоматизации, сайтов, анализа данных и создания ИИ.";
  }

  if (text.includes("помоги с учебой")) {
    return "Конечно! Напиши тему, и я постараюсь объяснить ее простыми словами и с примерами.";
  }

  if (text.includes("привет")) {
    return "Привет! Я StudentBot. Помогу тебе с учебными вопросами.";
  }

  if (text.includes("спасибо")) {
    return "Пожалуйста! Удачи в учебе 😊";
  }

  return "Я пока знаю ответы только на базовые учебные вопросы. Попробуй спросить про HTML, CSS, JavaScript или Python.";
}

function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") return;

  addMessage(text, "user");

  setTimeout(() => {
    const botReply = getBotResponse(text);
    addMessage(botReply, "bot");
  }, 500);

  userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
