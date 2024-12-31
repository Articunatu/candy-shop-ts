import { HttpClient } from "@angular/common/http";
import { Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "./response-models";

export const BASE_PATH = new InjectionToken<string>('basePath');

@Injectable({
  providedIn: 'root'
})

export class GenericService<TEntity, TId> {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    if (!process.env['BASE_URL']) {
      throw new Error("BASE_URL is not defined in the environment variables.");
    }
    this.baseUrl = process.env['BASE_URL'];
  }

  findValues(endpoint: string, id?: TId): Observable<ApiResponse<TEntity>> {
    return this.http.get<ApiResponse<TEntity>>(this.baseUrl + endpoint);
  }  

  add(endpoint: string, entity: TEntity): Observable<ApiResponse<TEntity>> {
    return this.http.post<ApiResponse<TEntity>>(this.baseUrl + endpoint, entity);
  }
}

