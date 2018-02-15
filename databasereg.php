<?php
define('DB_NAME','regisercsi');
define('DB_USER','root');
define('DB_PASSWORD','root');
define('DB_HOST','localhost');
$link=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if(!$link)
{
    die('Could not connect:'.mysql_error());
}
$db_selected=mysql_select_db(DB_NAME,$link);
if(!$db_selected)
{
    die('Can not use'.DB_NAME.':'.mysql_error());
}
//echo"connected successfully";
$headers = "From:ksrctcsi@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$name=$_POST['name'];
$gender=$_POST['sex'];
$email=$_POST['mail'];
$mobile=$_POST['mbn'];
$colleg=$_POST['college'];
$depart=$_POST['branch'];
$city=$_POST['city'];
$events=implode(",",$_POST['e']);
$workshops=implode(",",$_POST['w']);
$msg="<table width='100%'  border='5px solid'>
<tr bgcolor='green'>
    <th>NAME</th>
     <th>GENDER</th>
     <th>MAIL ID</th>
     <th>MOBILE</th>
     <th>COLLEGE</th>
     <th>DEPARTMENT</th>
     <th>CITY</th>
        <th>EVENTS</th>
     <th>WORKSHOP</th>
    </tr>
    <tr>
    <td>$name</td>
     <td>$gender</td>
      <td>$email</td>
       <td>$mobile</td>
       <td>$colleg</td>
       <td>$depart</td>
       <td>$city</td>
       <td>$events</td>
       <td>$workshops</td>
    </td>
    </table>";
    $msg1="<h1>Registered Sucessfully.</h1>";
$sql="INSERT INTO registercsi(NAME, GENDER,EMAILID,MOBILE,COLLEGE,DEPARTMENT,CITY,EVENTS,WORKSHOP) VALUES('$name','$gender','$email','$mobile','$colleg','$depart','$city','$events','$workshops')";
if (mysql_query($sql)) {
	 echo'<html><body bgcolor="green"><br><br><br><br><br><br><br><br><center><h1>Registered Successfully.<br>Confirmation Mail will be sent to your registered mail id.</h1></center></body></html>';
    mail("ksrctcsi@gmail.com","ULTRON'18",$msg,$headers);
	  mail($email,"ULTRON'18",$msg1,$headers);
}
        else
        {
            echo mysql_error();
        }
mysql_close();
?>
