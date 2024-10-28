<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ebook = $_POST['ebook'];
    
    // Data Ebook
    $ebookList = [
        'ebook1' => [
            'title' => 'Judul Ebook 1',
            'price' => 50000,
            'file' => 'ebook1.pdf'
        ],
        // Tambahkan ebook lainnya di sini
    ];

    if (array_key_exists($ebook, $ebookList)) {
        $selectedEbook = $ebookList[$ebook];

        // Integrasi dengan PayPal
        echo "<h1>Anda akan membeli: " . $selectedEbook['title'] . "</h1>";
        echo "<p>Harga: Rp " . $selectedEbook['price'] . "</p>";
        echo "<form action='https://www.paypal.com/cgi-bin/webscr' method='post'>
                <input type='hidden' name='cmd' value='_xclick'>
                <input type='hidden' name='business' value='email_penjual@domain.com'>
                <input type='hidden' name='item_name' value='" . $selectedEbook['title'] . "'>
                <input type='hidden' name='amount' value='" . ($selectedEbook['price'] / 15000) . "'>
                <input type='hidden' name='currency_code' value='USD'>
                <input type='hidden' name='return' value='http://website-anda.com/success.php'>
                <input type='hidden' name='cancel_return' value='http://website-anda.com/cancel.php'>
                <input type='submit' value='Bayar dengan PayPal'>
              </form>";
    } else {
        echo "Ebook tidak ditemukan.";
    }
} else {
    echo "Tidak ada ebook yang dipilih.";
}
?>
