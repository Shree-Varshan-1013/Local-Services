package com.easyBuy.app;

public class Query {
	
	//Get Role by Email
	public static String getRole = "SELECT 'user' AS role FROM user WHERE email = ? UNION SELECT 'supplier' AS role FROM supplier WHERE email = ?";

	// User Table - CRUD OPERATIONS
	public static String insertUser = "INSERT INTO user (username, name, email, password , phoneNumber, dob, address, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

	public static String updateUser = "UPDATE user SET name = ? WHERE user_id = ?";

	public static String deleteUser = "DELETE FROM user WHERE user_id = ?";

	public static String selectUsers = "SELECT * FROM user";

	public static String validateUser = "SELECT * FROM user WHERE email = ?";
	
	//Supplier Table 
	
	public static String insertSupplier = "INSERT INTO supplier (supplier_id, name, email, password , phoneNumber, address, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
	
	public static String validateSupplier = "SELECT * FROM supplier WHERE email = ?";

	// Inventory Table - CRUD OPERATIONS

	public static String insertItem = "INSERT INTO inventory (item_id, item_name, brand, supplier_name, price, quantity) VALUES (?, ?, ?, ?, ?, ?)";

	public static String updateItem = "UPDATE inventory SET quantity = ? WHERE item_id = ?";

	public static String deleteItem = "DELETE FROM inventory WHERE inventory_id = ?";

	public static String selectItem = "SELECT * FROM inventory";
	
	public static String itemExists = "SELECT * FROM inventory WHERE item_id = ?"; 
	
	public static String itemQuantity = "SELECT quantity FROM inventory WHERE item_id = ?";

	

}
