function saveData() {
    const itemID = document.getElementById('itemID').value;
    const receiverName = document.getElementById('receiverName').value;
    const receiverAccount = document.getElementById('receiverAccount').value;
    const amount = document.getElementById('amount').value;
    const transactionDate = document.getElementById('transactionDate').value;
    const remarks = document.getElementById('remarks').value;
    const imageUrl = "https://github.com/useronlineid/document1/blob/main/doc.jpg?raw=true";

    // Create a container for the new image with text
    const container = document.createElement('div');
    container.style.width = '1000px';
    container.style.height = '480px';
    container.style.position = 'relative';
    container.style.backgroundImage = `url(${imageUrl})`;
    container.style.backgroundSize = 'cover';

    // Create elements for each piece of data
    const itemIDEl = document.createElement('p');
    itemIDEl.textContent = itemID;
    itemIDEl.style.position = 'absolute';
    itemIDEl.style.top = '20px';
    itemIDEl.style.left = '20px';
    itemIDEl.style.fontSize = '20px';
    itemIDEl.style.color = '#000';

    const receiverNameEl = document.createElement('p');
    receiverNameEl.textContent = receiverName;
    receiverNameEl.style.position = 'absolute';
    receiverNameEl.style.top = '60px';
    receiverNameEl.style.left = '20px';
    receiverNameEl.style.fontSize = '20px';

    const receiverAccountEl = document.createElement('p');
    receiverAccountEl.textContent = receiverAccount;
    receiverAccountEl.style.position = 'absolute';
    receiverAccountEl.style.top = '100px';
    receiverAccountEl.style.left = '20px';
    receiverAccountEl.style.fontSize = '20px';
    receiverAccountEl.style.color = '#000';

    const amountEl = document.createElement('p');
    amountEl.textContent = amount;
    amountEl.style.position = 'absolute';
    amountEl.style.top = '140px';
    amountEl.style.left = '20px';
    amountEl.style.fontSize = '20px';
    amountEl.style.color = '#000';

    const transactionDateEl = document.createElement('p');
    transactionDateEl.textContent = transactionDate;
    transactionDateEl.style.position = 'absolute';
    transactionDateEl.style.top = '180px';
    transactionDateEl.style.left = '20px';
    transactionDateEl.style.fontSize = '20px';
    transactionDateEl.style.color = '#000';

    const remarksEl = document.createElement('p');
    remarksEl.textContent = remarks;
    remarksEl.style.position = 'absolute';
    remarksEl.style.top = '220px';
    remarksEl.style.left = '20px';
    remarksEl.style.width = '960px';
    remarksEl.style.fontSize = '20px';
    remarksEl.style.color = 'red';

    // Append elements to container
    container.appendChild(itemIDEl);
    container.appendChild(receiverNameEl);
    container.appendChild(receiverAccountEl);
    container.appendChild(amountEl);
    container.appendChild(transactionDateEl);
    container.appendChild(remarksEl);

    // Use html2canvas to convert container to image
    html2canvas(container).then(canvas => {
        const imageURL = canvas.toDataURL('image/png');

        // Create a new window and display the image
        const newWindow = window.open();
        newWindow.document.write(`
            <html>
            <head><title>Generated Image</title></head>
            <body>
                <img src="${imageURL}" alt="Generated Image" style="max-width: 100%;">
                <br><br>
                <a href="${imageURL}" download="image.png">Download Image</a>
            </body>
            </html>
        `);
    });
}
