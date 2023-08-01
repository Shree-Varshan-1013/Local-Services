package com.easyBuy.app.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.easyBuy.app.Query;
import com.easyBuy.app.Database.DB;
import com.easyBuy.app.Models.Supplier;

public class SupplierDao {

	public static void createSupplier(Supplier supplier) throws SQLException {

		Connection conn = DB.connect();

		String query = Query.insertSupplier;

		PreparedStatement pstmt = conn.prepareStatement(query);

		pstmt.setInt(1, supplier.getSupplier_id());
		pstmt.setString(2, supplier.getName());
		pstmt.setString(3, supplier.getEmail());
		pstmt.setString(4, supplier.getPassword());
		pstmt.setLong(5, supplier.getPhoneNumber());
		pstmt.setString(6, supplier.getAddress());
		pstmt.setString(7, supplier.getRole());

		int res = pstmt.executeUpdate();

		if (res > 0) {
			System.out.println("----------------------------------");
			System.out.println();
			System.out.println("Supplier registered successfully.");
			System.out.println();
			System.out.println("----------------------------------");
		} else {
			System.out.println("----------------------------------");
			System.out.println();
			System.out.println("Something went wrong.");
			System.out.println();
			System.out.println("----------------------------------");
		}
		

	}

	public static Supplier getInfo(String email) throws SQLException {
		
		Connection connection = DB.connect();
		
		PreparedStatement statement = connection.prepareStatement(Query.validateSupplier);
		
		statement.setString(1, email);
		
		ResultSet rs = statement.executeQuery();
		
		Supplier supplier = new Supplier();
		
		while(rs.next()) {
			supplier.setSupplier_id(rs.getInt(1));
			supplier.setName(rs.getString(2));
			supplier.setEmail(rs.getString(3));
			supplier.setPhoneNumber(rs.getLong(5));
			supplier.setAddress(rs.getString(6));
			supplier.setRole(rs.getString(7));
		}
		
		return supplier;
		
	}

}
