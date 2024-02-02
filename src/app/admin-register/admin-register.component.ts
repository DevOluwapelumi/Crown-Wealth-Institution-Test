import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface StudentInterface{
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  password: string,
  gender: string,
}

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {

  messageType: 'success' | 'error' = 'success';

  isSuccessMessage() {
    return this.messageType === 'success';
  }

constructor(public routes:Router){}
public firstname=''
public lastname=''
public email=''
public password=''
public address=''
public gender=''
public message =''

public adminArray:StudentInterface[]=[]
ngOnInit(){
  this.adminArray=JSON.parse(localStorage.getItem('newadmin')!)
}
onSubmit(){
let studentObj:StudentInterface={
  firstname:this.firstname,
  lastname:this.lastname,
  email:this.email,
  address:this.address,
  password:this.password,
  gender:this.gender,
}
if (!this.adminArray) {
  this.adminArray = [];
}

this.adminArray.push(studentObj)
localStorage.setItem('newadmin', JSON.stringify(this.adminArray))
// alert("Account Created Successfully!")

this.message = 'Registration Successful';

setTimeout(() => {
  this.routes.navigate(['/adminLog']).catch(err => {
    console.error('Navigation Error:', err);
    this.message = 'Navigation failed!';
  });
}, 3000);
}
}