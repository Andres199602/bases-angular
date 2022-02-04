import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: "inicio",
      path: "/inicio"
    },
    {
      name: "sabermas",
      path: "/sabermas"
    },
    {
      name: "contacto",
      path: "/contacto"
    },
    {
      name: "post",
      path: "/posts"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
