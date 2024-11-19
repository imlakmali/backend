<?php
session_start();

if (!isset($_SESSION['items'])) {
    $_SESSION['items'] = [];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Add item
    $item = [
        'name' => $_POST['name'],
        'price' => $_POST['price']
    ];
    $_SESSION['items'][] = $item;
    echo json_encode($_SESSION['items']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Delete item
    parse_str(file_get_contents("php://input"), $data);
    $index = $data['index'];

    if (isset($_SESSION['items'][$index])) {
        unset($_SESSION['items'][$index]);
        $_SESSION['items'] = array_values($_SESSION['items']); // Reindex the array
    }
    echo json_encode($_SESSION['items']);
    exit;
}

// For GET request, return current items
echo json_encode($_SESSION['items']);
?>
