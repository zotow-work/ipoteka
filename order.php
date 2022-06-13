<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1424962959:AAHecEZWNRJ4PzZrMBIaFdhlnM55JZc5S6s";

//Сюда вставляем chat_id
$chat_id = "-1001299351910";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

}

header('Location: success.php?phone='.$_POST['phone'].'&name='.$_POST['name']);

?>