import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  platosBusqueda:any = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private servicioDelivery:DeliveryService,private router:Router) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.servicioDelivery.getPlatosBusquedaFromDataBase(this.termino)
      .subscribe(dataPlatos => {
        this.platosBusqueda = [];
        for(let plato in dataPlatos){
          this.platosBusqueda.push(dataPlatos[plato]);
        }
      });
    });
  }

  public verPlato(idx:string){
    this.router.navigate(['/detallePlato',idx])
  }
}
