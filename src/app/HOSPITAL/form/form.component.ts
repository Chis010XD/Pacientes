import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LisPacientes } from '../../interfaces/Listado.interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit{

  lis:LisPacientes={
    //id:0,
    nombre:'',
    apellidos:'',
    direccion:'',
    telefono:''
  }
  constructor( private pacienteService:PacienteService,
               private router: Router,
               private activateRouter: ActivatedRoute ){}

    ngOnInit(): void {
      this.cargar();
    }
    agregar():void{
      this.pacienteService.create(this.lis).subscribe(
        resp=>this.router.navigate(['/crud'])
      )
    }
    cargar():void{
      this.activateRouter.params.subscribe(
        resp=>{
          let id=resp['id'];
          if(id){
            this.pacienteService.get(id).subscribe(
              d=>this.lis=d
            )
          }
        }
      )
    }
     actualizar():void{
      this.pacienteService.update(this.lis).subscribe(
        resp=>this.router.navigate(['/crud'])
      )
     }
}
