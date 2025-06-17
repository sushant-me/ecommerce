<?php
$conn = mysqli_connect("localhost", "username", "password", "database_name");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
if (mysqli_query($conn, $sql)) {
    echo "Account created successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>