document.addEventListener("DOMContentLoaded", function () {
  const table1Body = document.querySelector("#table1 tbody");
  const table2Body = document.querySelector("#table2 tbody");
  const friendData = [
    { name: "أحمد" },
    { name: "صديق 1" },
    { name: "صديق 2" },
    // وهكذا... الأصدقاء الآخرين
  ];

  const friendDataSecondTable = [
    { name: "بهاء" },
    { name: "صديق 12" },
    { name: "صديق 13" },
    // وهكذا... الأصدقاء الآخرين في الجدول الثاني
  ];

  function generateTable(tableBody, friends) {
    friends.forEach((friend) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const counterCell = document.createElement("td");
      const passwordCell = document.createElement("td");
      const incrementCell = document.createElement("td");
      const decrementCell = document.createElement("td");

      nameCell.textContent = friend.name;
      counterCell.textContent = friend.count || 0;
      passwordCell.innerHTML = '<input type="password" placeholder="بس ابو اصيل بعدل">';
      incrementCell.innerHTML = '<button class="increment-btn">زيادة</button>';
      decrementCell.innerHTML = '<button class="decrement-btn">نقصان</button>';

      row.appendChild(nameCell);
      row.appendChild(counterCell);
      row.appendChild(passwordCell);
      row.appendChild(incrementCell);
      row.appendChild(decrementCell);

      tableBody.appendChild(row);

      const incrementButton = incrementCell.querySelector(".increment-btn");
      const decrementButton = decrementCell.querySelector(".decrement-btn");
      const passwordInput = passwordCell.querySelector("input[type='password']");
      let count = friend.count || 0;

      incrementButton.addEventListener("click", () => {
        if (passwordInput.value === "yourpassword") {
          count++;
          updateCounter();
          friend.count = count;
          saveFriendData();
        } else {
          alert("قلنالك بس ابو اصيل!!!");
        }
      });

      decrementButton.addEventListener("click", () => {
        if (passwordInput.value === "yourpassword") {
          count--;
          if (count < 0) {
            count = 0;
          }
          updateCounter();
          friend.count = count;
          saveFriendData();
        } else {
          alert("كلمة المرور غير صحيحة!");
        }
      });

      function updateCounter() {
        counterCell.textContent = count;
      }

      function saveFriendData() {
        localStorage.setItem("friendData", JSON.stringify(friendData));
      }
    });
  }

  generateTable(table1Body, friendData);
  generateTable(table2Body, friendDataSecondTable);
});
