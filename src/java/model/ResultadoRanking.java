/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.ArrayList;

/**
 *
 * @author ricardo
 */
public class ResultadoRanking {
    private ArrayList<Actor> actor;
    private ArrayList<Integer> quant;
    
    public ResultadoRanking(){
        this.actor = new ArrayList();
        this.quant = new ArrayList();
    }
    
    public void popula(Actor a, int i){
        this.actor.add(a);
        this.quant.add(i);
    }
    
    public String returnDados(int i){
        return  "<td>" + this.quant.get(i) + "</td>" + 
                "<td>" + this.actor.get(i).getName() + "</td>" +
                "<td>" + this.actor.get(i).getSex() + "</td>";
    }
    
    public int size(){
        return this.actor.size();
    }
}
