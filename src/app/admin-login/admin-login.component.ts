import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface{
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  password: string,
  gender: string,
}

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  messageType: 'success' | 'error' = 'success';

  isSuccessMessage() {
    return this.messageType === 'success';
  }
  
constructor(public routes:Router){}

public email=''
public password=''
public message: string = '';


public adminArray:StudentInterface[]=[]
ngOnInit(){
  this.adminArray=JSON.parse(localStorage['newadmin'])
  console.log(this.adminArray);
}
onSignIn(){
  let currentUser=this.adminArray.find((student, index)=>this.email==student.email && this.password==student.password)
  if(currentUser){
    localStorage.setItem('current_user', JSON.stringify(currentUser))
    this.message = 'Login successful! Redirecting...';

    // Set a timeout before navigating to the next page
    setTimeout(() => {
      this.routes.navigate(['/dashboard']);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  } else {
    this.message = 'User not found';
  }
}
}