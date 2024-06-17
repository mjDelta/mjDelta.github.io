<?php
$file = 'counter.txt';

// Check if the file exists
if (!file_exists($file)) {
    // Create the file and initialize with 0 if it does not exist
    file_put_contents($file, '0');
}

// Read the current count from the file
$count = (int)file_get_contents($file);

// Increment the count
$count++;

// Write the new count back to the file
file_put_contents($file, (string)$count);

// Return the count as JSON
echo json_encode(['count' => $count]);
?>
