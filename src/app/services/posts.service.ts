import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// export interface Post {
//   id?: number;
//   title: string;
//   author: string;
// }  



@Injectable({
  providedIn: 'root'
})



export class PostsService {
  



   private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getTasks(api:string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + api );
  }
  // getInprogressTasks(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  // getDoneTasks(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  addTask(api: string, post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + api, post);
  }
  editTask(api: string, post: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + api, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
