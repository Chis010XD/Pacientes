import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { LisPacientes } from '../../interfaces/Listado.interfaces';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent {

  Lista:LisPacientes[]=[]
  constructor(private pacienteService: PacienteService){}



  ngOnInit(): void {
    this.pacienteService.getAll().subscribe(
      e=>this.Lista=e
    )    
  }

  eliminar(pacien:LisPacientes):void{
    this.pacienteService.delete(pacien.id!).subscribe(
      resp=>this.pacienteService.getAll().subscribe(
        b=>this.Lista=b
      )
    )
  }

}
