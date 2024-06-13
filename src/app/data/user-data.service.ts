import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { BaseDataService } from "../shared/services/base-data-service.class";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseDataService<void, void, void> {

    currentApiUri: string = environment.urlApi + '/users';
  constructor(protected http: HttpClient) {
    super();
  }


}
