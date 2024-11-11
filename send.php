<?php
// الحصول على البيانات من النموذج
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// تفاصيل البريد الإلكتروني
$to = "al.azhar.school.london@gmail.com";  // الإيميل اللي هيتبعت عليه
$subject = "New Contact Form Submission";  // عنوان الرسالة
$body = "Name: $name\nEmail: $email\nMessage:\n$message";  // محتوى الرسالة
$headers = "From: $email\r\n";  // من هو المرسل (الإيميل اللي دخل في النموذج)

// إرسال البريد الإلكتروني
if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for contacting us! We will get back to you soon.";  // رسالة شكر بعد إرسال
} else {
    echo "Sorry, there was an error sending your message. Please try again later.";  // رسالة لو في مشكلة
}
?>
