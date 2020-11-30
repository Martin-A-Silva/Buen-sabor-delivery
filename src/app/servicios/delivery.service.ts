import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/platos.json';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Plato } from 'src/app/entidades/Plato';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  platosFile: any = (data as any).default;
  constructor(public http: HttpClient) {
    console.log("ServicioCargado!!!");
    console.log(this.platosFile);
  }

  public getPlatos(): any[] {
    return this.platosFile.platos;
    console.log(this.platosFile);
  }

  public getPlatoXId(idx: string): any {
    for (let plato of this.platosFile.platos) {
      if (plato.id == idx) {
        return plato;
      }
    }
  }

  public buscarPlatos(termino: string): any[] {
    let platosArr: any[] = [];
    termino = termino.toLocaleLowerCase();
    for (let plato of this.platosFile.platos) {
      let nombre = plato.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        platosArr.push(plato);
      }
    }
    return platosArr;
  }

  //lee todos los platos 
  getPlatosFromDataBase() {
    return this.http.get("http://localhost:9000/api/v1/platos").pipe(
      map(platosData => platosData));
  }

  //busca un plato por el id 
  getPlatoEnBaseDatosXId(idx:string){ 
    return this.http.get("http://localhost:9000/api/v1/platos/" + idx).pipe( 
      map( (platoEncontrado :any) => platoEncontrado)); 
  }

  //busca los platos por un terminode busqueda
  getPlatosBusquedaFromDataBase(termino:string){ 
    return this.http.get("http://localhost:9000/api/v1/platos/search?filtro=" + termino).pipe( 
      map( platosSearch => platosSearch)); 
  }

  platoAdminUrl:string = "http://localhost:9000/api/v1/platos/";
  newPlato( platoNuevo: Plato) {
    return this.http.post<Plato>( this.platoAdminUrl,platoNuevo).pipe(map( nuevoPlato => {
            console.log(nuevoPlato.nombre);
            return nuevoPlato;
          }));
    /*return this.http.post<Plato>( this.platoAdminUrl, null, {params: new HttpParams().set("action", "insertar").set("id", "0")
    .set("nombre", platoNuevo.nombre).set("imagenPath", platoNuevo.imagenPath).set("precio", platoNuevo.precio).set("rubro", platoNuevo.rubro)
    }).pipe(map( nuevoPlato => {
            console.log(nuevoPlato.nombre);
            return nuevoPlato;
          }));*/
  }

  updatePlato( platoUpdate: Plato) {
    return this.http.put(this.platoAdminUrl+platoUpdate.id,platoUpdate ).pipe(map( res => {
            console.log(res);
            return res;
          }));
    /*return this.http.post<Plato>( this.platoAdminUrl, null, {params: new HttpParams().set("action", "actualizar").set("id", platoUpdate.id)
    .set("nombre", platoUpdate.nombre).set("imagenPath", platoUpdate.imagenPath).set("precio", platoUpdate.precio).set("rubro", platoUpdate.rubro)
    }).pipe(map( res => {
            console.log(res.nombre);
            return res;
          }));*/
  }

  deletePlato(idPlato: string){
    return this.http.delete(this.platoAdminUrl+idPlato)
          .pipe(
          map( res => {
            console.log(res);
            return res;
          }))
    /*return this.http.post( this.platoAdminUrl, null, {params: new HttpParams().set("action", "eliminar").set("id", idPlato)})
          .pipe(
          map( res => {
            console.log(res);
            return res;
          }));*/
  }
}
