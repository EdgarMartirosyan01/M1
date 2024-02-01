<?php
// submit_form.php

header('Content-Type: application/json');

// Function to sanitize and validate form data
function sanitizeInput($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// Function to send email
function sendEmail($formData) {
  $to = 'your-business-email@example.com'; // Replace with your business email
  $subject = 'New Form Submission';
  $message = "Name: {$formData['fullName']}\n";
  $message .= "Email: {$formData['email']}\n";
  $message .= "Message:\n{$formData['message']}";

  // Adjust additional headers as needed
  $headers = 'From: ' . $formData['email'] . "\r\n" .
    'Reply-To: ' . $formData['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  // Send email
  mail($to, $subject, $message, $headers);
}

// Get form data from the POST request
$formData = json_decode(file_get_contents('php://input'), true);

// Validate form data
$formData['fullName'] = sanitizeInput($formData['fullName']);
$formData['email'] = sanitizeInput($formData['email']);
$formData['message'] = sanitizeInput($formData['message']);

// Validate email (you can add more robust email validation if needed)
if (!filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
  echo json_encode(['error' => 'Invalid email address']);
  exit;
}

// Validate other form fields as needed

// Send email
sendEmail($formData);

// Respond with a success message
echo json_encode(['message' => 'Form submitted successfully']);
?>
