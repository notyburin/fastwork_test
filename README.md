# fastwork_test
* See demo app [here](http://128.199.252.186:3000/)

## Description of the problem and solution
* ใช้เวลาเยอะพอสมควร ในการเรียนรู้ docker เพื่อ setup (nodejs, mysql, phpmyadmin)
* ใช้ knexjs ต่อ database ลองใช้ครั้งแรกค่อนข้างใช้งานง่าย
* ติดปัญหาเรื่องการเขียน api ไม่รู้จัดการอย่างไร เลยรวมไว้ในไฟล์เดียว (ทั้ง front และ api)
* ใช้ redux มาคุม flow front ช่วงแรกอาจต้องริ้อฟื้นหน่อย
* ใช้ bootstrap 4 เป็น main theme และปรับแต่งด้วย style ด้วย style-components
* สรุป โปรเจคนี้ ค่อนข้างเสียเวลาไปกับการเรียนรู้ส่วนใหญ่คิดเป็นสัดส่วน 8/2

## Reasoning behind your technical choices
* **docker**: ง่ายต่อการ run project ทั้ง dev และ prod
* **knexjs**: ง่ายต่อการ setup mysql การ query ก็ทำออกมาเข้าใจง่าย
* **redux**: จัดการ action และความคุม flow ได้สะดวก
* **style-components**: จัดการ style แต่ละ component ได้สะดวก
* **bootstrap 4**: ไม่เรียนรู้เยอะ เป็น main theme ที่ดีเลย