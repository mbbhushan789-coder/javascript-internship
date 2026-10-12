// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard

// ---------- 1. Data & input initialization ----------
console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// ---------- 4. Functions & scope ----------
function getCategory(price) {                    // regular function (switch + threshold)
  switch (true) {
    case price < 50:  return "Budget";
    case price < 500: return "Standard";
    default:          return "Premium";
  }
}

const totalValue = items => items.reduce((sum, p) => sum + p.price, 0);   // arrow function

function applyTaxAndDiscount(amount, taxPercent = 0, discountPercent = 0) {
  const afterDiscount = amount - (amount * discountPercent) / 100;        // local scope only
  return afterDiscount + (afterDiscount * taxPercent) / 100;
}

// ---------- 3. Loops & flow control: ask until valid (max 3 tries) ----------
function askForProduct() {
  let attempts = 0;
  while (attempts < 3) {
    attempts++;
    const name = prompt("Enter new product name:", "Monitor");
    const price = Number(prompt("Enter product price:", "150"));

    // ---------- 2. Validation with if...else ----------
    if (name === null || name.trim() === "") {
      console.log("Missing product name. Try again.");
      continue;
    } else if (isNaN(price) || price <= 0) {
      console.log("Invalid price. Try again.");
      continue;
    }

    // loop through inventory to reject duplicates
    let duplicate = false;
    for (const item of inventory) {
      if (item.name.toLowerCase() === name.trim().toLowerCase()) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) {
      console.log(`"${name}" already exists. Try a different name.`);
      continue;
    }

    return { name: name.trim(), price };
  }
  console.log("Too many invalid attempts. No product added.");
  return null;
}

const newProduct = askForProduct();
if (newProduct) {
  inventory.push(newProduct);
  console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
}

// ---------- 5. Array methods ----------
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(p => {
  console.log(`* Item: ${p.name} ($${p.price}) -> Category: ${getCategory(p.price)}`);
});

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${totalValue(inventory)}`);

const affordable = inventory.filter(p => p.price < 200).map(p => p.name);
console.log("Filtered Affordable Items (Under $200):", affordable);

const report = inventory.map(p => `${p.name.toUpperCase()}: $${p.price}`);
console.log("Formatted Report List:", report);

// Bonus: tax & discount helper (10% tax, 5% discount)
console.log(`Total with 10% tax and 5% discount: $${applyTaxAndDiscount(totalValue(inventory), 10, 5).toFixed(2)}`);
