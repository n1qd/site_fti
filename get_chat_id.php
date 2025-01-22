<?php
$token = '7942652743:AAETaTEaP3cPz3GDv_N2JK2mlPud4nRXJkA'; // Замените на ваш токен
$url = "https://api.telegram.org/bot$token/getUpdates";

$response = file_get_contents($url);
$updates = json_decode($response, true);

if (isset($updates['result'][0]['message']['chat']['id'])) {
    $chat_id = $updates['result'][0]['message']['chat']['id'];
    echo "Ваш chat_id: $chat_id";
} else {
    echo "Не удалось получить chat_id. Убедитесь, что вы отправили сообщение вашему боту.";
}
?>
