// 11. Write a function to manage inventory for a store using a Map. The Map should store item
// names as keys and their quantities as values. Provide functions to add new items,
// update item quantities, and check the quantity of an item.

let inventory = new Map();

function addItem(itemName, quantity) {
    // Use Map Object's set method to add the item to the inventory
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    // Use Map Object's has, set, get methods to update the quantity
    // Check if the item exists in the inventory
    if (inventory.has(itemName)) {
        let currentQuantity = inventory.get(itemName);
        inventory.set(itemName, currentQuantity + quantity);
    } else {
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    // Check item quantity in the inventory
    if (inventory.has(itemName)) {
        return inventory.get(itemName);
    } else {
        return "Item not found";
    }
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150
console.log(checkItemQuantity("orange")); // Output: Item not found
