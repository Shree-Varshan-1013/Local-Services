package com.easyBuy.app.Auth;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.easyBuy.app.Query;
import com.easyBuy.app.Dao.UserOrSupplier;
import com.easyBuy.app.Database.DB;
import com.easyBuy.app.Models.Supplier;
import com.easyBuy.app.Models.User;

public class Login {

	public static UserOrSupplier validate(String email, String password) throws SQLException {

		Connection connection = DB.connect();

		PreparedStatement pStatement = connection.prepareStatement(Query.getRole);

		pStatement.setString(1, email);
		pStatement.setString(2, email);

		ResultSet rs1 = pStatement.executeQuery();
		String role = "";

		while (rs1.next()) {
			role = rs1.getString(1);
		}

		if (role.equals("user")) {

			PreparedStatement statement = connection.prepareStatement(Query.validateUser);

			statement.setString(1, email);

			ResultSet rs = statement.executeQuery();

			while (rs.next()) {

				if (rs.getString(5).equals(password)) {
					User user = new User();
					user.setUsername(rs.getString(2));
					user.setName(rs.getString(3));
					user.setEmail(rs.getString(4));
					user.setPassword(rs.getString(5));
					user.setPhoneNumber(rs.getLong(6));
					user.setDob(rs.getString(7));
					user.setAddress(rs.getString(8));
					user.setRole(rs.getString(9));

					return user;
				}
			}

		} else {

			PreparedStatement statement = connection.prepareStatement(Query.validateSupplier);

			statement.setString(1, email);

			ResultSet rs = statement.executeQuery();

			while (rs.next()) {

				if (rs.getString(4).equals(password)) {
					Supplier supplier = new Supplier();

					supplier.setSupplier_id(rs.getInt(1));
					supplier.setName(rs.getString(2));
					supplier.setEmail(rs.getString(3));
					supplier.setPassword(rs.getString(4));
					supplier.setPhoneNumber(rs.getLong(5));
					supplier.setAddress(rs.getString(6));
					supplier.setRole(rs.getString(7));

					return supplier;
				}
			}
		}

		return null;
	}
}
