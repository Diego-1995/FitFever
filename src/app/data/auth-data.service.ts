import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../shared/interfaces/api-responses.interface";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    constructor(private _http: HttpClient) {
  }

  login(body: any): Observable<ApiResponse<any>> {
    return this._http.post<any>(environment.urlApi + '/login', body)
  }
}
