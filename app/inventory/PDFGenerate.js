export default function generatePDF(decodedResults) {
    const PDFDocument = require('pdfkit');
    const fs = require('fs');
    
    const doc = new PDFDocument();
    
    doc.pipe(fs.createWriteStream('output.pdf'));

    // Embed a font, set the font size, and render some text
    doc
      .fontSize(25)
      .text('Some text with an embedded font!', 100, 100);
    
    // Add another page
    doc
      .addPage()
      .fontSize(25)
      .text('Here is some vector graphics...', 100, 100);
    
    // Finalize PDF file
    doc.end();
}