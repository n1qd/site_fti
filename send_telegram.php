<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);

    $token = '7942652743:AAETaTEaP3cPz3GDv_N2JK2mlPud4nRXJkA'; // Замените на ваш токен
    $chat_id = '850388979'; // Замените на ваш chat_id

    $message = urlencode("Имя: $name\nТелефон: $phone");

    $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$message";

    $response = file_get_contents($url);

    if ($response === FALSE) {
        echo 'error: ' . error_get_last()['message'];
    } else {
        echo 'success';
    }
} else {
    echo 'invalid request';
}
?>