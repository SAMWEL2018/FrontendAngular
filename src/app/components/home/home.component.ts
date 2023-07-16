import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import api from "../../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  balance: number = 0;
  userId: string = '';

  ngOnInit(): void {
    this.fetchBalance();
    this.fetchUserId();
  }

  fetchBalance(): void {

    const tokenData = localStorage.getItem('token');

      // Parse the token data JSON string to extract the access token
    const token = tokenData ? JSON.parse(tokenData).access_token : null;
    
    api.get<number>('api/v1/balance',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const mybalance = response.data;
        this.balance = mybalance;
        console.log(this.balance); // Output: 2000

      })
      .catch(error => {
        console.error('Error fetching balance:', error);
      });
  }

  fetchUserId(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.userId = user.accountId;
    }
  }
}
