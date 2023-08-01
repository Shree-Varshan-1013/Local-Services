package com.easyBuy.app;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

import com.easyBuy.app.Auth.Login;
import com.easyBuy.app.Dao.InventoryManagement;
import com.easyBuy.app.Dao.SupplierDao;
import com.easyBuy.app.Dao.UserDao;
import com.easyBuy.app.Dao.UserOrSupplier;
import com.easyBuy.app.Database.DB;
import com.easyBuy.app.Models.Inventory;
import com.easyBuy.app.Models.Supplier;
import com.easyBuy.app.Models.User;

public class InventorySalesAndPurchaseManagement {

	static UserOrSupplier obj = null;

	public static void main(String[] args) throws SQLException, IOException {
		System.out.println();
		System.out.println("|--------------------Welcome to Easy buy--------------------|");
		System.out.println("|                                                           |");

		Scanner scanner = new Scanner(System.in);

		System.out.print("|                     Hey welcome you !!                    |");
		System.out.println();
		System.out.println("|                                                           |");
		System.out.println("|-----------------------------------------------------------|");
		System.out.print("                Are You a Registered User(Y/N)                   ");
		System.out.println();
		char z = scanner.next().charAt(0);
		System.out.println();

		scanner.nextLine();

		if (z == 'Y' || z == 'y') {
			System.out.println("---------------------------------------------");
			System.out.println();
			System.out.println("     Thats great !! so let's get started !");
			System.out.println();
			System.out.println("---------------------------------------------");
			System.out.println();
			System.out.println("--------------------LOGIN--------------------");
			System.out.println();
			System.out.print("Enter your email : ");
			String email = scanner.nextLine();
			System.out.print("Enter your password : ");
			String password = scanner.nextLine();

			obj = Login.validate(email, password);

			if (Objects.nonNull(obj)) {

				System.out.println("========== <- Successfully Logged In -> ==========");
				System.out.println();
				System.out.println("========== <- Welcome back " + obj.getName() + " ! -> ==========");

				if (obj.getRole().equals("user")) {
					int choice;

					ArrayList<Inventory> items = new ArrayList<>();

					do {
						System.out.println("----------Menu----------");
						System.out.println("1. View Inventory");
						System.out.println("2. Add Items to cart");
						System.out.println("3. View cart");
						System.out.println("4. Purchase item");
						System.out.println("5. Exit");
						System.out.println("------------------------");

						System.out.print("Enter your choice (1-5): ");

						choice = scanner.nextInt();

						switch (choice) {
						case 1:

							List<Inventory> res = InventoryManagement.getAllItems();

							System.out.println(
									"---------------------------------------------------------------------------------");
							System.out.println(
									"ID    | Name            | Brand    | Supplier        | Price(₹)      | Quantity");
							System.out.println(
									"---------------------------------------------------------------------------------");
							ArrayList<Inventory> outOfStock = new ArrayList<>();

							for (Inventory item : res) {
								if (item.getQuantity() != 0) {
									String formattedRow = String.format("%-5d | %-15s | %-8s | %-15s | %-13d | %-6d",
											item.getItem_id(), item.getItem_name(), item.getBrand(),
											item.getSupplier_name(), item.getPrice(), item.getQuantity());
									System.out.println(formattedRow);
								} else {
									outOfStock.add(item);
								}
							}

							System.out.println(
									"---------------------------------------------------------------------------------");

							if (outOfStock.size() != 0) {
								System.out.println(
										"--------------------------------- Out Of Stock Items ----------------------------");
								System.out.println(
										"---------------------------------------------------------------------------------");
								System.out.println(
										"ID    | Name            | Brand    | Supplier        | Price(₹)      | Quantity");
								System.out.println(
										"--------------------------------------------------------------------------------");
								for (Inventory item : outOfStock) {

									String formattedRow = String.format("%-5d | %-15s | %-8s | %-15s | %-13d | %-6d",
											item.getItem_id(), item.getItem_name(), item.getBrand(),
											item.getSupplier_name(), item.getPrice(), item.getQuantity());
									System.out.println(formattedRow);
								}
								System.out.println(
										"--------------------------------------------------------------------------------");
							}

							break;
						case 2:
							try {
								System.out.print("Enter the item id you want to purchase : ");
								int id = scanner.nextInt();

								Inventory item = InventoryManagement.itemAvailable(id);

								if (Objects.nonNull(item)) {
									System.out.print("Enter the quantity : ");
									int quantity = scanner.nextInt();

									if (quantity > item.getQuantity()) {
										System.out.println("Item quantity exceeded the available limit !!");
									} else {
										Inventory obj = new Inventory();
										obj.setItem_id(item.getItem_id());
										obj.setItem_name(item.getItem_name());
										obj.setSupplier_name(item.getSupplier_name());
										obj.setBrand(item.getBrand());
										obj.setPrice(item.getPrice());
										obj.setQuantity(quantity);
										int flag = 0;
										for (Inventory existingItem : items) {
											if (existingItem.getSupplier_name().equals(item.getSupplier_name())) {
												// If it exists, update the quantity and return
												flag++;
												existingItem.setQuantity(existingItem.getQuantity() + quantity);
											}
										}

										if (flag == 0)
											items.add(obj);
										System.out.println("-----------------------------------");
										System.out.println();
										System.out.println("    Item successfully added !!");
										System.out.println();
										System.out.println("------------------------------------");
									}

								} else {
									System.out.println("----------------------------------");
									System.out.println();
									System.out.println("     Item doesn't exist !!");
									System.out.println();
									System.out.println("----------------------------------");
									break;
								}
							} catch (InputMismatchException e) {
								System.out.println("----------------------------------");
								System.out.println();
								System.out.println("Please Enter the valid Input !!");
								System.out.println();
								System.out.println("----------------------------------");
							}

							break;
						case 3:

							if (items.size() != 0) {
								System.out.println(
										"------------------------------------------------------------------------------");
								System.out.println(
										"ID    | Name            | Brand    | Supplier        | Price(₹)      | Quantity");
								System.out.println(
										"------------------------------------------------------------------------------");

								for (Inventory k : items) {
									String formattedRow = String.format("%-5d | %-15s | %-8s | %-15s | %-13d | %-6d",
											k.getItem_id(), k.getItem_name(), k.getBrand(), k.getSupplier_name(),
											k.getPrice(), k.getQuantity());
									System.out.println(formattedRow);
								}

								System.out.println(
										"------------------------------------------------------------------------------");
								int amount = 0;
								for (Inventory ele : items) {
									amount += (ele.getQuantity() * ele.getPrice());
								}
								System.out.println("Total Amount     :    ₹" + amount);
								System.out.println(
										"------------------------------------------------------------------------------");
							} else {
								System.out.println("----------------------------------");
								System.out.println();
								System.out.println("     Your cart is Empty :) ");
								System.out.println();
								System.out.println("----------------------------------");
							}

							break;
						case 4:
							if (InventoryManagement.purchaseOrder(items)) {
								items.clear();
								System.out.println("----------------------------------");
								System.out.println();
								System.out.println("     Succesfully purchased !!");
								System.out.println();
								System.out.println("----------------------------------");

							} else {
								System.out.println("----------------------------------");
								System.out.println();
								System.out.println("     Something went wrong !!");
								System.out.println();
								System.out.println("----------------------------------");
							}
							break;
						case 5:
							DB.Disconnect();
							System.out.println("----------------------------------");
							System.out.println();
							System.out.println("     Have a Good Day : ) See you soon !!!");
							System.out.println();
							System.out.println("----------------------------------");
							System.exit(0);
							break;
						default:
							System.out.println("----------------------------------");
							System.out.println();
							System.out.println("Invalid choice. Please try again.");
							System.out.println();
							System.out.println("----------------------------------");
							break;
						}

					} while (choice != 5);
				} else {

					int choice;

					do {
						System.out.println("----------Menu----------");
						System.out.println("1. View Inventory");
						System.out.println("2. Add new Inventory Item");
						System.out.println("3. Refill Inventory Item");
						System.out.println("4. View Profile");
						System.out.println("5. Exit");
						System.out.println("------------------------");

						System.out.print("Enter your choice (1-5): ");

						choice = Integer.parseInt(scanner.nextLine());

						switch (choice) {
						case 1:

							List<Inventory> res = InventoryManagement.getAllItems();

							System.out.println(
									"------------------------------------------------------------------------------");
							System.out.println(
									"ID    | Name            | Brand    | Supplier        | Price(₹)      | Quantity");
							System.out.println(
									"------------------------------------------------------------------------------");

							for (Inventory item : res) {
								String formattedRow = String.format("%-5d | %-15s | %-8s | %-15s | %-13d | %-6d",
										item.getItem_id(), item.getItem_name(), item.getBrand(),
										item.getSupplier_name(), item.getPrice(), item.getQuantity());
								System.out.println(formattedRow);
							}

							System.out.println(
									"------------------------------------------------------------------------------");

							break;
						case 2:
							try {
								System.out.println("Enter details of the Inventory item : ");
								System.out.print("Enter the Item ID : ");
								int id = Integer.parseInt(scanner.nextLine());
								System.out.print("Enter the Item Name : ");
								String name = scanner.nextLine();
								System.out.print("Enter the Brand : ");
								String brand = scanner.nextLine();
								System.out.print("Enter the Supplier Name : ");
								String supplier_name = scanner.nextLine();
								System.out.print("Enter the Price : ");
								int price = Integer.parseInt(scanner.nextLine());
								System.out.print("Enter the Quantity : ");
								int quantity = Integer.parseInt(scanner.nextLine());

								Inventory item = new Inventory(id, name, brand, supplier_name, price, quantity);
								if (InventoryManagement.addItem(item)) {
									System.out.println("----------------------------------");
									System.out.println();
									System.out.println("Item added to Inventory !!");
									System.out.println();
									System.out.println("----------------------------------");
								} else {
									System.out.println("----------------------------------");
									System.out.println();
									System.out.println("Item did not added to the Inventory !!");
									System.out.println();
									System.out.println("----------------------------------");
								}
							} catch (InputMismatchException e) {
								System.out.println("Please Enter the valid input !!");
								break;
							}

							break;
						case 3:
							System.out.print("Enter the Item ID : ");
							int item_id = Integer.parseInt(scanner.nextLine());

							Inventory item1 = InventoryManagement.itemAvailable(item_id);

							if (Objects.nonNull(item1)) {
								System.out.print("Enter the Item Quantity : ");
								int item_quantity = Integer.parseInt(scanner.nextLine());
								if (InventoryManagement.updateStock(item_id, item_quantity, item1.getQuantity())) {
									System.out.println("----------------------------------");
									System.out.println();
									System.out.println("   Successfully Item refilled !!");
									System.out.println();
									System.out.println("----------------------------------");
								} else {
									System.out.println("----------------------------------");
									System.out.println();
									System.out.println("Something went wrong");
									System.out.println();
									System.out.println("----------------------------------");
								}
							} else {
								System.out.println("------------------------");
								System.out.println();
								System.out.println("     Item doesn't exists !!");
								System.out.println();
								System.out.println("------------------------");
							}

							break;
						case 4:
							Supplier supplier = SupplierDao.getInfo(obj.getEmail());
							System.out.println("-----------------------------------------");
							System.out.println();
							System.out.println("Supplier ID : " + supplier.getSupplier_id());
							System.out.println("Supplier Name : " + supplier.getName());
							System.out.println("Supplier Email : " + supplier.getEmail());
							System.out.println("Role : " + supplier.getRole());
							System.out.println("Supplier Phone Number : " + supplier.getPhoneNumber());
							System.out.println();
							System.out.println("----------------------------------------");
							break;
						case 5:
							DB.Disconnect();
							System.out.println("----------------------------------");
							System.out.println();
							System.out.println("See you soon !!!");
							System.out.println();
							System.out.println("----------------------------------");
							System.exit(0);
							break;
						default:
							System.out.println("----------------------------------");
							System.out.println();
							System.out.println("Invalid choice. Please try again.");
							System.out.println();
							System.out.println("----------------------------------");
							break;
						}

					} while (choice != 5);
				}

			} else {
				System.out.println("---------------------------------------------");
				System.out.println();
				System.out.println("     Logging Failed !!");
				System.out.println("     Please Try again !");
				System.out.println();
				System.out.println("---------------------------------------------");
			}

		} else

		{
			System.out.println("-------------REGISTER------------");
			System.out.print("Enter your role (user/supplier) : ");
			String role = scanner.nextLine();

			if (role.equalsIgnoreCase("user")) {

				System.out.print("Enter your name : ");
				String name = scanner.nextLine();
				System.out.print("Choose a username for you : ");
				String username = scanner.nextLine();
				System.out.print("Enter your email : ");
				String email = scanner.nextLine();
				System.out.print("Enter your password : ");
				String password = scanner.nextLine();
				System.out.print("Enter your phonenumber : ");
				Long phonenumber = Long.parseLong(scanner.nextLine());
				System.out.print("Enter your Date of Birth : ");
				String dob = scanner.nextLine();
				System.out.print("Enter your adddress : ");
				String address = scanner.nextLine();

				User user = new User(username, name, email, password, phonenumber, dob, address, role);
				UserDao.createUser(user);

			} else {
				System.out.print("Enter Supplier id : ");
				int supplier_id = Integer.parseInt(scanner.nextLine());
				System.out.print("Enter Supplier name : ");
				String name = scanner.nextLine();
				System.out.print("Enter your email : ");
				String username = scanner.nextLine();
				System.out.print("Enter your password : ");
				String password = scanner.nextLine();
				System.out.print("Enter your phonenumber : ");
				Long phonenumber = Long.parseLong(scanner.nextLine());
				System.out.print("Enter your adddress : ");
				String address = scanner.nextLine();

				Supplier supplier = new Supplier(supplier_id, name, username, password, phonenumber, address, role);
				SupplierDao.createSupplier(supplier);
			}

		}

	}
}
