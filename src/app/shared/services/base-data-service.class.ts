import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-responses.interface';

/**
 * The base data service is a front-end
 * service used to setup methods for simple CRUD operations,
 * linked to the backend's `baseCrudService`.
 */
export abstract class BaseDataService<T, CreateT, UpdateT> {
  protected abstract currentApiUri: string;
  protected abstract http: HttpClient;

  /**
   * Create entries.
   */
  create(data: CreateT): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(this.currentApiUri, data);
  }

  /**
   * Update entries, based on the given `id`.
   */
  update(id: string | number, data: UpdateT): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.currentApiUri}/${id}`, data);
  }

  /**
   * Delete entries, based on the given `id`.
   */
  delete(id: string | number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.currentApiUri}/${id}`);
  }

  /**
   * Get one entry, based on the given `id`.
   */
  getOne(id: string | number): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.currentApiUri}/${id}`);
  }
}
