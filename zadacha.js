function calculateChange() {
    const amount = parseInt(document.getElementById('amount').value);
    let remaining = amount;

    if (isNaN(remaining) || remaining <= 0) {
        document.getElementById('result').innerText = "Введите корректную сумму.";
        return;
    }

    const notes = {
        '500': Math.floor(remaining / 500),
        '100': Math.floor((remaining % 500) / 100),
        '10': Math.floor((remaining % 100) / 10),
        '2': Math.floor((remaining % 10) / 2)
    };

    remaining %= 2; // оставшаяся сумма после размена

    // Формирование результата
    let resultString = `Размен для суммы ${amount} руб.:\n`;
    for (const [note, count] of Object.entries(notes)) {
        if (count > 0) {
            resultString += `${count} купюра(ы) по ${note} руб.\n`;
        }
    }

    if (remaining > 0) {
        resultString += `Невозможно разменять оставшуюся сумму. ${remaining}`;
    }

    document.getElementById('result').innerText = resultString;
}