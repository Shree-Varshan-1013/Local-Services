package com.easyBuy.app.Dao;

import java.sql.CallableStatement;
import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

import com.easyBuy.app.Query;
import com.easyBuy.app.Database.DB;
import com.easyBuy.app.Models.Inventory;

public class InventoryManagement {

	public static List<Inventory> getAllItems() throws SQLException {
		List<Inventory> inventory = new ArrayList<>();

		Connection connection = DB.connect();

		Statement statement = connection.createStatement();

		String query = Query.selectItem;

		ResultSet rs = statement.executeQuery(query);

		while (rs.next()) {
			Inventory item = new Inventory(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
					rs.getInt(5), rs.getInt(6));
			inventory.add(item);

		}

		return inventory;

	}

	public static Inventory itemAvailable(int id) throws SQLException {

		Connection connection = DB.connect();

		PreparedStatement ps = connection.prepareStatement(Query.itemExists);

		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();
		Inventory item = null;

		while (rs.next()) {
			int item_id = rs.getInt(1);
			String name = rs.getString(2);
			String brand = rs.getString(3);
			String supplier = rs.getString(4);
			int price = rs.getInt(5);
			int quantity = rs.getInt(6);

			item = new Inventory(item_id, name, brand, supplier, price, quantity);

		}

		return item;
	}

	public static Boolean purchaseOrder(ArrayList<Inventory> arr) throws SQLException {

		Connection connection = DB.connect();

		int limit = arr.size();

		int count = 0;

		for (Inventory element : arr) {
			PreparedStatement pstmt = connection.prepareStatement(Query.updateItem);

			PreparedStatement statement = connection.prepareStatement(Query.itemQuantity);
			statement.setInt(1, element.getItem_id());

			ResultSet rs = statement.executeQuery();

			int original = 0;
			while (rs.next()) {
				original = rs.getInt(1);
			}

			pstmt.setInt(1, original - element.getQuantity());
			pstmt.setInt(2, element.getItem_id());
			int res = pstmt.executeUpdate();

			if (res == 1) {
				count++;
			}
		}

		if (count == limit) {
			return true;
		}

		return false;
	}

	public static boolean addItem(Inventory item) {

		Connection connection = DB.connect();
		try {

			CallableStatement cs = connection.prepareCall(Query.insertItem);

			cs.setInt(1, item.getItem_id());
			cs.setString(2, item.getItem_name());
			cs.setString(3, item.getBrand());
			cs.setString(4, item.getSupplier_name());
			cs.setInt(5, item.getPrice());
			cs.setInt(6, item.getQuantity());
			boolean rs = cs.execute();

			if (rs) {
				return true;
			}
		} catch (SQLException e) {
			return false;
		}
		
		return false;
		
	}

	public static boolean updateStock(int id, int item_quantity, int original) throws SQLException {

		Connection connection = DB.connect();
		PreparedStatement pstmt = connection.prepareStatement(Query.updateItem);
		 int stocks = item_quantity + original ;
		 
		pstmt.setInt(1, stocks);
		pstmt.setInt(2, id);

		int res = pstmt.executeUpdate();

		if (res == 1) {
			return true;
		}

		return false;
	}

}
