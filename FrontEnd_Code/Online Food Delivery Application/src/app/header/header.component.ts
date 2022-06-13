import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
ImagePath:string="";

  constructor(private router:Router) { 
    this.ImagePath='/assets/logo.jpg';
  }
  ngOnInit(): void {
  }
}
