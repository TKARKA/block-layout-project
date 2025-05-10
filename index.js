document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("block-container");

  // Функция за добавяне на блокче
  function createBlock(className) {
    const block = document.createElement("div");
    block.classList.add(className);
    container.appendChild(block);
  }

  // Добавяне на блокчета за Слой 1
  for (let i = 0; i < 9; i++) {
    createBlock("block");
  }
  
  // Добавяне на 2x2 блокчета за Слой 1 (това ще заеме 2 клетки по ширина)
  for (let i = 0; i < 2; i++) {
    createBlock("block-2x2");
  }

  // Добавяне на блокчета за Слой 2, 3, 4, 5 (на същия принцип)
  // Това ще изисква повече логика, но основната идея е да се добавят блокове
  // в подредени редове и да се използват класове за всеки слой.
});
