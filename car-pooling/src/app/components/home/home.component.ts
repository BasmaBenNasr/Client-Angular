import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private tokenStorage: TokenStorageService, private router : Router) {}


  ngOnInit(): void {
    console.log(this.tokenStorage.getUser())
    if(this.tokenStorage.getUser())
     this.router.navigate([this.tokenStorage.getUser().type]);
  }

}

