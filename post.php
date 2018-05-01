<?
// ----------------------------конфигурация-------------------------- //

mb_internal_encoding("UTF-8");

$adminemail="emuratov@yandex.ru";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://dev.emuratov.ru";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$phone=$_POST['phone'];

$email=$_POST['email'];

$msg=$_POST['message'];






$msg="


Имя: $name

телефон: $phone

E-mail: $email

Сообщение: $msg


";



 // Отправляем письмо админу

mail("$adminemail", "$date $time Сообщение
от $name", "$msg");


// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 500);
//--></script>

";
exit;
?>