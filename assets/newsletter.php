<?php
if($_POST["email_newsletter"]) {
    mail("suyashsonawane@gmail.com", "Form to email message", $_POST["email_newsletter"], "From: an@email.address");
}
?>