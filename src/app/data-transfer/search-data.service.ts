import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Phương thức call api lọc dữ liệu phòng ban và dự án
   * Author: NQMinh (02/10/2021)
   */
  getSearchData(): Observable<object[]> {
    const url = 'https://localhost:44323/api/v1/Departments/search?searchKeyword=';
    return this.http.get<object[]>(url);
  }
}
