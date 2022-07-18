import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { 
  }

  ngOnInit(): void {

  }

  irInicio(){this.router.navigateByUrl('')}
  irDeportes(){this.router.navigateByUrl('deportes')}
  irNacional(){this.router.navigateByUrl('nacional')}
  irCovid(){this.router.navigateByUrl('covid')}
  

}
