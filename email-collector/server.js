const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const xlsx = require('xlsx');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const filePath = 'emails.xlsx';
  let workbook;
  let worksheet;

  // التحقق من وجود الملف
  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
  } else {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.aoa_to_sheet([['Email']]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  }

  const newRow = [email];
  xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });
  xlsx.writeFile(workbook, filePath);

  res.status(200).json({ message: 'تم حفظ البريد الإلكتروني بنجاح' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
