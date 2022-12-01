package com.example.demo;

public class Operations {
    public double add(double num1, double num2){
        return num1 + num2;
    }
    public double subtract(double num1, double num2){
        return num1 - num2;
    }
    public double multiply(double num1, double num2){
        return num1 * num2;
    }
    public double divide(double num1, double num2){
        return num1 / num2;
    }
    public double addInverse(double num1){
        return num1 * -1.0;
    }
    public double multiInverse(double num1){
        return 1.0 / num1;
    }
    public double square(double num1){
        return num1 * num1;
    }
    public double squareRoot(double num1){
        return Math.sqrt(num1);
    }
    public double percent(double num1){
        return num1 / 100;
    }
    public String exceptions(){
        return "Error";
    }
}
