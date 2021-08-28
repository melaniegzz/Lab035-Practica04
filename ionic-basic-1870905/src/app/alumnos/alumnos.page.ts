import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos : Alumno[] ;
  constructor(private alumnoService: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnoService.getAlumnos() ;
    this.alumnoService.getPersonajes().subscribe((reponse: any)=> {
      console.log(reponse) ;
    })
  }

  ionViewWillEnter(){
    this.alumnos = this.alumnoService.getAlumnos();
  }
}