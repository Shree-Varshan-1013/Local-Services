package com.easyBuy.app.Database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {

	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DATABASE_URL = "jdbc:mysql://localhost:3306/inventorymanagement";

	static final String USERNAME = "root";
	static final String PASSWORD = "tiger";

	static Connection conn;

	public static Connection connect() {
		try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
		} catch (Exception e) {
			e.printStackTrace();
			System.err.println(e.getMessage());
		}

		return conn;
	}
	
	public static void Disconnect() throws SQLException {
		conn.close();
	}

}
