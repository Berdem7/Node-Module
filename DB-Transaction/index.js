const mysql = require("mysql2/promise");
const config = require("./config");

async function createOrder() {
  const items = ["RI0002", "CB0004"];
  const connection = await mysql.createConnection(config.db);
  await connection.execute("SET TRANSACTION ISOLATION LEVEL READ COMMITTED");
  console.log("Finished setting the isolation level to read committed");
  await connection.beginTransaction();

  try {
    await connection.execute(
      `SELECT id, name from product where sku in ("${items[0]}", "${items[1]}"
      ) for update`
    );
    console.log(`Locked rows for skus ${items.join()}`);
    const [itemsToOrder] = await connection.execute(
      "select name, quantity, price from product where sku in (?, ?) order by id",
      items
    );
    console.log("Selected quantities for items");
    let orderTotal = 0;
    let orderItems = [];
    for (itemToOrder of itemsToOrder) {
      if (itemToOrder.quantity < 1) {
        throw new Error(`One of the items is out of stock ${itemToOrder.name}`);
      }
      console.log(
        `Quantity for ${itemToOrder.name} is ${itemToOrder.quantity}`
      );
      orderTotal += itemToOrder.price;
      orderItems.push(itemToOrder.name);
    }
    await connection.execute(
      "insert into sales_order (items, total) values (?, ?)",
      [orderItems.join(), orderTotal]
    );
    console.log("Order created");
    await connection.execute(
      `update product set quantity = quantity - 1 where sku in (?, ?)`,
      items
    );
    console.log(`Deducted quantites by 1 for ${items.join()}`);
    await connection.commit();
    const [rows] = await connection.execute(
      "select last_insert_id() as order_id"
    );
    return `order created with id ${rows[0].order_id}`;
  } catch (err) {
    console.error(`Error occurred while creating order: ${err.message}`, err);
    connection.rollback();
    console.info("Rollback successful");
    return "error creating order";
  }
}

(async function testOrderCreate() {
  console.log(await createOrder());
  process.exit(0);
})();
