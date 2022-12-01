package com.example.demo;

import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/connection")
public class Controller {
    Operations operations = new Operations();
    @PostMapping("/+/{num1}/{num2}")
    public String ControlAdd(@PathVariable("num1") String num1, @PathVariable("num2") String num2){
        return operations.add(Double.parseDouble(num1), Double.parseDouble(num2)) +"";
    }
    @PostMapping("/-/{num1}/{num2}")
    public String ControlSub(@PathVariable("num1") String num1, @PathVariable("num2") String num2){
        return operations.subtract(Double.parseDouble(num1), Double.parseDouble(num2)) +"";
    }
    @PostMapping("/*/{num1}/{num2}")
    public String ControlMulti(@PathVariable("num1") String num1, @PathVariable("num2") String num2){
        return operations.multiply(Double.parseDouble(num1), Double.parseDouble(num2)) +"";
    }
    @PostMapping("///{num1}/{num2}")
    public String ControlDiv(@PathVariable("num1") String num1, @PathVariable("num2") String num2){
        if(Double.parseDouble(num2) == 0){
            return operations.exceptions();
        }else {
            return operations.divide(Double.parseDouble(num1), Double.parseDouble(num2)) + "";
        }
    }
    @PostMapping("/+/-/{num1}")
    public String ControlAddInv(@PathVariable("num1") String num1){
        return operations.addInverse(Double.parseDouble(num1)) + "";
    }
    @PostMapping("/1/x/{num1}")
    public String ControlMultiInv(@PathVariable("num1") String num1){
        if(Double.parseDouble(num1) == 0){
            return operations.exceptions();
        }else {
            return operations.multiInverse(Double.parseDouble(num1)) + "";
        }
    }
    @PostMapping("/X²/{num1}")
    public String ControlSquare(@PathVariable("num1") String num1){
        return operations.square(Double.parseDouble(num1)) +"";
    }
    @PostMapping("/√x/{num1}")
    public String ControlSqrt(@PathVariable("num1") String num1){
        if(Double.parseDouble(num1) < 0){
            return operations.exceptions();
        }else
             return operations.squareRoot(Double.parseDouble(num1)) +"";
    }
    @PostMapping("/p/{num1}")
    public String ControlPercent(@PathVariable("num1") String num1){
        return operations.percent(Double.parseDouble(num1)) +"";
    }
}
