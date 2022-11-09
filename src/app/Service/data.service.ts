import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string='https://api.themoviedb.org/3'
  constructor(private http:HttpClient) { }

  getLatestMovie():Observable<any>{
    return this.http.get<any>(this.url+'/movie/latest?api_key='+environment.api_key)
  }
  getPopularMovies():Observable<Movie>{
   return this.http.get<Movie>(this.url+'/movie/popular?api_key='+environment.api_key)
  }
  getNowPlayingMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/now_playing?api_key='+environment.api_key)
   }
   getTopRatedMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/top_rated?api_key='+environment.api_key)
   }
   getUpComingMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/upcoming?api_key='+environment.api_key)
   }
   getTrendingrMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/trending/all/week?api_key='+environment.api_key)
   }
   getOriginals():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/discover/tv?api_key='+environment.api_key)
   }

}
