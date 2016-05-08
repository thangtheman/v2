<?php
$f1= htmlentities($_POST['f1'],ENT_QUOTES);
$f2= htmlentities($_POST['f2'],ENT_QUOTES);
$f3= htmlentities($_POST['f3'],ENT_QUOTES);
$f4= htmlentities($_POST['f4'],ENT_QUOTES);
$f5= htmlentities($_POST['f5'],ENT_QUOTES);
$f5= htmlentities($_POST['f6'],ENT_QUOTES);


$subject = "Request For Essel University Account";

$message = $message. "Name:".$f1."----------";
$message = $message. "Email:".$f2."----------";
$message = $message. "Phone:".$f3."----------";
$message = $message. "Designation:".$f4."----------";
$message = $message. "Business & Region:".$f5."----------";
$message = $message. "Message:".$f6."----------";






$emailto = "esseldigital@asiatvusa.com";
$emailsubject = "Request For Essel University Account";
$emailmessage = '<html>
    <head>
      <title>Test</title>
    </head>
    <body>
      <table>
     <tr><td>Name:</td><td>'.$f1.'</td></tr>
     <tr><td>Email:</td><td>'.$f2.'</td></tr>
     <tr><td>Phone:</td><td>'.$f3.'</td></tr>
     <tr><td>Title:</td><td>'.$f4.'</td></tr>
     <tr><td>Business & Region:</td><td>'.$f5.'</td></tr>
     <tr><td>Message:</td><td>'.$f6.'</td></tr>
      </table>
    </body>
    </html>';
$emailfrom = "no-reply@coreesseldigital.com";



$headers = "MIME-Version: 1.0\\r\
";
$headers .= "Content-type: text/html; charset=iso-8859-1\\r\
";
$headers .= "From: esseldigital@asiatvusa.com \\r\ 
";
$headers .= "X-Mailer: PHP \\r\
";

if(mail($emailto, $emailsubject, $emailmessage, $headers)) {
  $err ="Your request was submitted successfully. We will be in touch with you soon.";
}else{
   $err = "Please provide complete information";
}
?>


<script>
	alert("<?php echo $err;?>");
	window.history.back();
</script>
