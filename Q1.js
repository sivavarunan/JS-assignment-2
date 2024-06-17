let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

function groupByType(transactions) {
    let grouped = {};

    transactions.forEach(transaction => {
        if (!grouped[transaction.type]) 
            {grouped[transaction.type] = [];}
        grouped[transaction.type].push(transaction);
    });

    return grouped;
}

console.log(groupByType(transactions));

// Output:
// {
//     deposit: [{ type: "deposit", amount: 100 }, { type: "deposit", amount: 200 }],
//     withdrawal: [{ type: "withdrawal", amount: 50 }, { type: "withdrawal", amount: 30 }]
// }
