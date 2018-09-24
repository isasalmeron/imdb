/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/**
 *
 * @author ricardo
 */
public class DBConnection {
    protected Connection conn;
    protected Statement stmt;
    
    public DBConnection(){
        try {
            Class.forName("org.postgresql.Driver").newInstance();
            String connection="jdbc:postgresql://localhost:5432/banco_projeto";
            String user="postgres", password="1234";
            
            conn = DriverManager.getConnection(connection, user, password);
            stmt = conn.createStatement();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error: something went wrong...");
        }
    }
}
