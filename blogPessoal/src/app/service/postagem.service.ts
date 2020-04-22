import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

getAllPostagens(){
  return this.http.get('htto://31.220.57.14:8080/postagens')
}

}
