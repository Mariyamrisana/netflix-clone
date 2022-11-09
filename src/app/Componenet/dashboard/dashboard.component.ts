import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latestMovie:any;
  popularMovies !:Movie
  nowPlayingMovies !:Movie
  topRatedMovies !:Movie
  UpComongMovies !:Movie
  trendingMovies !:Movie
  originals !:Movie

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getLatestMovie()
    this.getPopularMovie()
    this.getUpcomingMovie()
    this.getNowPlayingMovie()
    this.getOriginals()
    this.getTopRatedMovie()
    this.getTrendingMovie()
  }

  getLatestMovie(){
    this.dataService.getLatestMovie().subscribe(res=>{
      this.latestMovie=this.changeData(res)
      console.log(this.latestMovie);
      
    },err=>{
      console.log('not able to get latest',err);
      
    })
  }
  changeData(res:any):any{
    if(!res.backdrop_path){
      res.backdrop_path='https://image.tmdb.org/t/p/original/'+res.poster_path+'?api_key='+environment.api_key
    }else{
      res.backdrop_path='https://image.tmdb.org/t/p/original/'+res.backdrop_path+'?api_key='+environment.api_key
    }
    return res
  }
  getPopularMovie(){
    this.dataService.getPopularMovies().subscribe(res=>{
      this.popularMovies=this.modifyData(res)
      console.log(this.popularMovies);
      
    },err=>{
      console.log('not able to get popular',err);
      
    })
  }
  modifyData(movies:Movie):Movie{
    if(movies.results){
      movies.results.forEach(element => {
        element.backdrop_path='https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key'+environment.api_key
        if(!element.title){
          element.title=element?.name
        }
      });
      
    }
    return movies
  }
  getUpcomingMovie(){
    this.dataService.getUpComingMovies().subscribe(res=>{
      this.UpComongMovies=this.modifyData(res)
      console.log(this.UpComongMovies);
      
    },err=>{
      console.log('not able to get upcoming',err);
      
    })
  }
  getTopRatedMovie(){
    this.dataService.getTopRatedMovies().subscribe(res=>{
      this.topRatedMovies=this.modifyData(res)
      console.log(this.topRatedMovies);
      
    },err=>{
      console.log('not able to get toprated',err);
      
    })
  }
  getNowPlayingMovie(){
    this.dataService.getNowPlayingMovies().subscribe(res=>{
      this.nowPlayingMovies=this.modifyData(res)
     
      
    },err=>{
      console.log('not able to get nowplaying',err);
      
    })
  }
  getTrendingMovie(){
    this.dataService.getTrendingrMovies().subscribe(res=>{
      this.trendingMovies=this.modifyData(res)
      console.log(this.trendingMovies);
      
    },err=>{
      console.log('not able to get trending',err);
      
    })
  }
  getOriginals(){
    this.dataService.getOriginals().subscribe(res=>{
      this.originals=this.modifyData(res)
      console.log(this.originals);
      
    },err=>{
      console.log('not able to get upcoming',err);
      
    })
  }
}
