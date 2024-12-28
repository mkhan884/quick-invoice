import { jsPDF } from "jspdf";

export async function invoicePDF(invoice){
    const doc = new jsPDF()
    const marginRight = 10
    
    // Invoice Title
    doc.setFontSize(26);
    // Create the full title string
    const title = `Invoice ${invoice.invoice_number}`;
    // Calculate the width of the text in millimeters
    const textWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    // Set the x position for right alignment at 210 mm (width of an A4 page) minus textWidth and a right margin
    var xPos = 210 - textWidth - marginRight;
    // Position the text at calculated x position and y = 10 mm from the top
    doc.text(title, xPos, 25);

    // Business information
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    const nameWidth = doc.getStringUnitWidth(invoice.bill_from_name) * doc.internal.getFontSize() / doc.internal.scaleFactor
    var xPos = 210 - nameWidth - marginRight
    doc.text(invoice.bill_from_name, xPos, 32)
    doc.setFont('helvetica', 'normal')

    //Business Address
    const addressWidth = doc.getStringUnitWidth(invoice.bill_from_address) * doc.internal.getFontSize() / doc.internal.scaleFactor
    var xPos = 210 - addressWidth - marginRight
    doc.text(invoice.bill_from_address, xPos, 36)

    const cityCountry = `${invoice.bill_from_city}, ${invoice.bill_from_country}`
    const cityCountryWidth = doc.getStringUnitWidth(cityCountry) * doc.internal.getFontSize() / doc.internal.scaleFactor
    var xPos = 210 - cityCountryWidth - marginRight
    doc.text(cityCountry, xPos, 40)

    // Business Phone Number
    const phoneNumberWidth = doc.getStringUnitWidth(invoice.bill_from_phone_number) * doc.internal.getFontSize() / doc.internal.scaleFactor
    var xPos = 210 - phoneNumberWidth - marginRight
    doc.text(invoice.bill_from_phone_number, xPos, 46)

    doc. setDrawColor(228, 228, 228)
    doc.setLineWidth(0.25)
    doc.line(10, 52, 200, 52)
    
    // Customer Information
    doc.setTextColor(150,150,150)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('Bill To', 15, 60)
    
    doc.setFontSize(10);
    doc.setTextColor(0,0,0)
    doc.text(invoice.bill_to_name, 15, 66)
    doc.setFont('helvetica', 'normal')
    doc.text(invoice.bill_to_address, 15, 70)
    doc.text(`${invoice.bill_to_city}, ${invoice.bill_to_country}`, 15, 74)
    doc.text(invoice.bill_to_phone_number, 15, 80)
      
    const invoicePrefix = "Invoice No:   ";
    const datePrefix = 'Invoice Date:   ';
    const amountPrefix = 'Amount Due:   ';

    // Set font to bold to measure the prefix widths
    doc.setFont('helvetica', 'bold')
    const prefixWidths = [
        doc.getStringUnitWidth(invoicePrefix) * doc.internal.getFontSize() / doc.internal.scaleFactor,
        doc.getStringUnitWidth(datePrefix) * doc.internal.getFontSize() / doc.internal.scaleFactor,
        doc.getStringUnitWidth(amountPrefix) * doc.internal.getFontSize() / doc.internal.scaleFactor
    ];

    // Determine the maximum prefix width
    const maxPrefixWidth = Math.max(...prefixWidths);

    // Define the common endpoint position with a 40-unit right margin
    const xEnd = 210 - 40;

    // Compute the starting x-coordinate for each prefix
    const prefixPositions = prefixWidths.map(width => xEnd - width);

    doc.setFontSize(10);
    // Render each line
    doc.setFont('helvetica', 'bold')
    doc.text(invoicePrefix, prefixPositions[0], 65);
    doc.setFont("helvetica", "normal");
    doc.text(invoice.invoice_number, xEnd, 65);

    doc.setFont("helvetica", "bold");
    doc.text(datePrefix, prefixPositions[1], 69);
    doc.setFont("helvetica", "normal");
    doc.text(invoice.invoice_date, xEnd, 69);

    doc.setFont("helvetica", "bold");
    doc.text(amountPrefix, prefixPositions[2], 73);
    doc.setFont("helvetica", "normal");
    const formatter = new Intl.NumberFormat("en-US",{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    const formattedNumber = formatter.format(invoice.total)
    doc.text(`${invoice.currency}  ${formattedNumber}`, xEnd, 73);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Item", 15, 97);
    doc.text("Hours", 110, 97, { align: "center" });
    doc.text("Rate", 150, 97, { align: "center" });
    doc.text("Total", 180, 97, { align: "center" });
    doc.setLineWidth(0.5)
    doc.line(15, 99, 195, 99); // Table header underline


    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const itemLines = doc.splitTextToSize(invoice.description, 75);

    // Starting coordinates for the rows
    let startY = 104; // Adjust this based on where you want the content to start
    const lineHeight = 4; // Space between each line

    // Render each line of the text
    itemLines.forEach((line, index) => {
    doc.text(line, 15, startY + index * lineHeight);
    });

    const itemsHeight = itemLines.length * lineHeight;

    // Render the rest of the columns (Quantity, Rate, Total) for the same row
    const totalString = `${invoice.currency} ${invoice.total} `

    doc.text(String(invoice.quantity), 110, startY, { align: "center" });
    doc.text(String(invoice.rate), 150, startY, { align: "center" });
    doc.text(String(totalString), 180, startY, { align: "center" });

    const lineY = startY + itemsHeight; // Add some padding below the last text
    doc.line(15, lineY, 195, lineY); // Draw a horizontal line

    doc.setFont("helvetica", "bold"); // Set font to bold

    const amountDueText = `Amount Due: ${invoice.currency} ${formattedNumber}`;
    const textWidth2 = doc.getTextWidth(amountDueText); // Get the width of the text

    // Render the text aligned to the right, below the line
    const textX = 200 - textWidth2 - 10; // Align to the right with a 10-unit margin
    const textY = lineY + 10; // Position below the line with some padding
    doc.text(amountDueText, textX, textY);

    const notesStartY = textY + 20; // Position below the "Amount Due" text
    doc.text('Notes/Terms', 15, notesStartY)
    doc.setFont("helvetica", "normal"); // Set font to bold
    doc.text(invoice.notes, 15, notesStartY+8)

    // Save the PDF
    doc.save('invoice.pdf');
}

// export async function invoicePDF (invoice){
//     console.log(invoice)
//     const doc = new jsPDF();
//     doc.setFontSize(20);
//     doc.setFont("helvetica", "bold");
//     doc.text("Invoice", 105, 40, { align: "center" });
  
//     // Bill From Section
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");
//     doc.text("Bill From", 20, 60);
//     doc.text(invoice.bill_from_name, 20, 70);
//     doc.text(invoice.bill_from_address, 20, 80);
//     doc.text(`${invoice.bill_from_city}, ${invoice.bill_from_country}`, 20, 90);
//     doc.text(`Phone: ${invoice.bill_from_phone_number}`, 20, 100);
  
//     // Bill To Section
//     doc.text("Bill To", 105, 60);
//     doc.text(invoice.bill_to_name, 105, 70);
//     doc.text(invoice.bill_to_address, 105, 80);
//     doc.text(`${invoice.bill_to_city}, ${invoice.bill_to_country}`, 105, 90);
//     doc.text(`Phone: ${invoice.bill_to_phone_number}`, 105, 100);
  
//     // Invoice Metadata Section
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");
//     doc.text(`Invoice Number: ${invoice.invoice_number}`, 20, 120);
//     doc.text(`Invoice Date: ${new Date(invoice.invoice_date).toLocaleDateString()}`, 20, 130);
  
//     // Line Items Table Header
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "bold");
//     doc.text("Item", 20, 160);
//     doc.text("Quantity", 90, 160, { align: "center" });
//     doc.text("Rate", 130, 160, { align: "center" });
//     doc.text("Total", 170, 160, { align: "center" });
//     doc.line(20, 162, 190, 162); // Table header underline
  
//     // Line Items Table Content
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");
  
//     let startY = 170;
//     doc.text(`${invoice.description}`, 20, startY); // Example row; replace with dynamic data if applicable
//     doc.text(`${invoice.quantity}`, 90, startY, { align: "center" });
//     doc.text(`${invoice.currency} ${parseFloat(invoice.rate).toFixed(2)}`, 130, startY, { align: "center" });
//     doc.text(`${invoice.currency} ${parseFloat(invoice.total).toFixed(2)}`, 170, startY, { align: "center" });
  
//     // Notes Section
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "italic");
//     startY += 20;
//     doc.text("Notes:", 20, startY);
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "normal");
//     doc.text(`${invoice.notes}`, 20, startY + 10);
  
//     // Footer Section
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "normal");
//     doc.text("Thank you for your business!", 105, 290, { align: "center" });
  
//     // Save or Open PDF
//     doc.save(`invoice_${invoice.invoice_number}.pdf`);
// }
