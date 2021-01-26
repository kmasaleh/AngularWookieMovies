import { formatDate } from "@angular/common";
import { HttpClientJsonpModule } from "@angular/common/http";
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Movie{
    backdropUrl :string;
    cast : string[];
    classification:string;
    director:string;
    genres:string[];
    id:string;
    rating : string;
    length:string;
    overview:string;
    posterUrl :string;
    releasedDate:Date;
    slug:string;
    title:string;

    static asMovie(json:any):Movie{
        let movie :Movie = new Movie();
        movie.backdropUrl = json['backdrop'];
        movie.cast = json['cast'];
        movie.classification = json['classification'];
        movie.director = json['director'];
        movie.genres = json['genres'];
        movie.id = json['id'];
        movie.length = json['length'];
        movie.overview = json['overview'];
        movie.posterUrl = json['poster'];
        movie.rating = json['imdb_rating'];
        movie.releasedDate =  new Date( json['released_on']);
        movie.slug = json['slug'];
        movie.title = json['title'];
        return movie;
    }

    get RateOfFive (): number {
        let r = Number(this.rating);
        return r/2;
    }
    get castActors() : string {
        return this.cast.join(', ');
    }
    get  date():string {
        return formatDate(this.releasedDate,'yyyy-MM-dd',"en-us");
        //return this.releasedDate.toLocaleString();
    }
    static asMovies(json:[]) : Movie[]{
        return json.map(jsonEntity=> Movie.asMovie(jsonEntity));
    }
}