<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>網頁內容瀏覽</title>
    <style>
        body { background: #232526; color: #eee; font-family: 'Segoe UI', Arial, sans-serif; }
        .container { max-width: 480px; margin: 60px auto; background: #323232; border-radius: 16px; padding: 2em 2.5em; box-shadow: 0 2px 12px #0009;}
        h2 { text-align: center; }
        .note { color: #2193b0; margin-bottom: 1.5em; text-align: center;}
        .links { display: flex; gap: 1em; justify-content: center; margin-top: 1em; }
        a { color: #fff; text-decoration: none; background: #2193b0; padding: 0.5em 1em; border-radius: 6px;}
        a:hover { background: #6dd5ed; color: #232526;}
    </style>
</head>
<body>
    <div class="container">
        <h2>網頁內容瀏覽</h2>
        <div class="note">所有登入者皆可瀏覽這頁面。</div>
        <p>（這裡可以放網頁內容展示，例如文章列表等）</p>
        <div class="links">
            <a href="admin.php">返回後台</a>
            <a href="index.html">Sanxain Blog</a>
        </div>
    </div>
</body>
</html>