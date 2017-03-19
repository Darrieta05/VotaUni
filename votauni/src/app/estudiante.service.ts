import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Estudiante } from './estudiante';

@Injectable()
export class EstudianteService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  getEstudiante(): Promise<Estudiante[]>{
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json().data as Estudiante[])
      .catch(this.handleError);
  }

  getProducts(): Observable<Estudiante[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => <Estudiante[]>response.json())
            .catch(this.handleError);
  }

  private getHeaders(){
    let headers = new Headers({'Content-Type': 'application/json'});
    return headers;
  }

  handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
  }


  send(urlcomplement: string, body: string): Promise<Estudiante[]> {
    return this.http.post(this.baseUrl+urlcomplement, body, {headers: this.getHeaders()})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError)
  }
}
