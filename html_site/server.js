const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Статические файлы
app.use(express.static(__dirname));

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(`HTML версия сайта запущена на порту ${PORT}`);
});