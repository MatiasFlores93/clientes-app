import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] =[
    {id:1, nombre:'Matias', apellido:'Flores', email:'matias@gmail.com',createAt:'2020-11-02'},
    {id:2, nombre:'Eduardo', apellido:'Flores', email:'m@gmail.com',createAt:'2020-12-01'},
    {id:3, nombre:'Sebastian', apellido:'Flores', email:'atias@gmail.com',createAt:'2020-23-05'},
    {id:4, nombre:'Alonso', apellido:'Flores', email:'ias@gmail.com',createAt:'2020-10-03'},
    {id:5, nombre:'Juan', apellido:'Flores', email:'s@gmail.com',createAt:'2020-21-01'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
