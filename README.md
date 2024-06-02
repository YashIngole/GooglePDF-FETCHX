# PDFFetchX

A tool to fetch protected PDFs from Google Drive.

## Description

**PDFFetchX** is a JavaScript-based tool designed to help users retrieve protected, view-only, and print-disabled PDFs from Google Drive. This tool handles downloading PDFs stored as blob URLs within Google Drive documents, making it easy to access and use secured PDFs. It also ensures that users do not encounter the "This document requires 'TrustedScriptURL' assignment" error.

## Features

- **Simple Retrieval:** Easily fetch protected, view-only, and print-disabled PDFs from Google Drive.
- **Efficient:** Works on all dimensions of PDFs, autodetecting the dimensions and downloading them accordingly.
- **Error-Free:** Avoids the "This document requires 'TrustedScriptURL' assignment" error.

## How to Use

1. **Open the PDF:**
   - First, open the PDF in your web browser.
   - Scroll through the entire document to ensure all pages are loaded. Go to the last page to make sure everything is fully loaded.

2. **Open the Console:**
   - Press `F12` (for Chrome, Firefox, and Edge) to open the console of the web browser.

3. **Enable Pasting in the Console:**
   - Type `allow pasting` in the console to enable pasting of code.

4. **Copy and Paste the Script:**
   - Go to the `script.js` file in this repository and copy the script.
   - Paste the provided JavaScript code into the console.

5. **Download the PDF:**
   - Wait for the script to download the PDF.

## Disclaimer

This tool is intended for educational purposes only. Please ensure you have the right to retrieve and use the protected PDFs you are accessing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments

- This script uses [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js) for PDF handling.
