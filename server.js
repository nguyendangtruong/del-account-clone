const express = require('express');
const path = require('path');

const app = express();

// Sử dụng các tệp tĩnh đã build trong thư mục 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Phục vụ index.html khi truy cập trang chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Khởi động máy chủ
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
