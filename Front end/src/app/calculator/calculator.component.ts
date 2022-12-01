import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions : object = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : 'my-auth-token'
  }), responseType : 'string'
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  first_click = true;
  first_click_operator = true;
  equal_pressed = false;
  one_operator_pressed = false;
  two_operand_operator = '';
  one_operand_operator = '';
  content:string = '0';
  num1:string = '';
  num2:string = '';
  result:string = '';
  eqn:string = '.';


  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
  }

  request(){
    
  }

  clicked(num :string ){
    if(this.equal_pressed || this.one_operator_pressed ){
      this.clear();
    }
    if(this.first_click){
      this.content = '';
      this.first_click = false;
    }
    this.content += num;
    this.one_operator_pressed = false;
  }

  two_operator(op : string){
    if(this.content == "Error"){
      this.clear();
    }
    if(this.first_click_operator){
      this.num1 = this.content;
      this.first_click_operator = false;
    }
    this.two_operand_operator = op;
    this.first_click = true;
    this.content = op;
    this.equal_pressed = false;
    this.one_operator_pressed = false;
  }

  equal(){
    if(!this.equal_pressed){
      this.equal_pressed = true;
      this.num2 = this.content;
      this.eqn = this.num1 + ' ' + this.two_operand_operator + ' ' +  this.num2 + '=';
      this.http.post<string>(`http://localhost:8080/connection/${this.two_operand_operator}/${this.num1}/${this.num2}`, JSON, httpOptions)
      .subscribe(back_to_front => {
        this.result = back_to_front;
        this.content = this.result;
        this.num1 = this.result;
      })
    }
  }

  one_operator(op : string){
    this.one_operator_pressed = true;
    this.equal_pressed = false;
    this.first_click_operator = true;
    this.one_operand_operator = op;
    if(op == 'X²'){
      this.eqn = "sqr(" + this.content + ")"
    }else if(op == '√x'){
      this.eqn = "√("+ this.content + ")"
    }else if(op == '1/x'){
      this.eqn = "1/(" + this.content + ")"
    }
    this.http.post<string>(`http://localhost:8080/connection/${this.one_operand_operator}/${this.content}`, JSON, httpOptions)
    .subscribe(back_to_front => {
      this.result = back_to_front;
      this.content = this.result;
    })
    
  }

  clear(){
    this.first_click = true;
    this.first_click_operator = true;
    this.content = '0';
    this.two_operand_operator = '';
    this.one_operand_operator = '';
    this.num1 = '';
    this.num2 = '';
    this.result= '';
    this.equal_pressed = false;
    this.eqn = '.';
  }

  remove(){
    if(this.content.length == 1){
      this.content = '0';
    }else{
      this.content = this.content.slice(0, this.content.length-1);
    }
  }
 
}
