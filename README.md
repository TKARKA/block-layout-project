1. **Създай `index.html`** (главният HTML файл):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Блокчета на Палет</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>13 блокчета в 5 слоя</h1>
  <div id="block-container"></div>
  <script src="index.js"></script>
</body>
</html>
```

2. **Създай `style.css`** (за стилизиране на блокчетата и подреждането):

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

#block-container {
  display: grid;
  grid-template-columns: repeat(13, 80px);
  grid-template-rows: repeat(5, 80px);
  gap: 5px;
  justify-content: center;
  margin-top: 20px;
}

.block {
  width: 80px;
  height: 80px;
  background-color: #4CAF50;
  border: 2px solid #333;
  border-radius: 5px;
}

.block-2x2 {
  width: 160px;
  height: 160px;
  background-color: #2196F3;
}
```

3. **Създай `index.js`** (за добавяне на логиката за подреждане на блокчетата):

```javascript
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
  // Това е основата за динамично създаване на подреждането.
});
```
