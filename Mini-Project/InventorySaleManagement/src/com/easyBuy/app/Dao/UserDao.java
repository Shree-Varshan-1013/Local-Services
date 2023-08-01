package com.easyBuy.app.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.easyBuy.app.Query;
import com.easyBuy.app.Database.DB;
import com.easyBuy.app.Models.User;

public class UserDao {
	
	public static void createUser(User user) throws SQLException {
		
		Connection conn = DB.connect();
		
		String query = Query.insertUser;
		
		PreparedStatement pstmt = conn.prepareStatement(query);
		
		pstmt.setString(1, user.getUsername());
        pstmt.setString(2, user.getName());
        pstmt.setString(3, user.getEmail());
        pstmt.setString(4, user.getPassword());
        pstmt.setLong(5, user.getPhoneNumber());
        pstmt.setDate(6, java.sql.Date.valueOf(user.getDob()));
        pstmt.setString(7, user.getAddress());
        pstmt.setString(8, user.getRole());
        
        int res = pstmt.executeUpdate();
		
        if (res > 0) {
        	System.out.println("----------------------------------");
			System.out.println();
            System.out.println("User registered successfully.");
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
}
