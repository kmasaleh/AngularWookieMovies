import { formatDate } from "@angular/common";


/**
 *@class
 *@description to construct a strongly typed movie from json
 * 
 */


export class Movie{
    /**
     * @field
     * @description movie attributes
     */
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

    /**
     * 
     * @method maps json to class members
     * @description construct a movie object from json response
     */
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

    /**
     * @property
     * @description converts the rate of the movie from string to number and make it a rate of 5
     */
    get RateOfFive (): number {
        let r = Number(this.rating);
        return r/2;
    }
    
    /**
     * @property
     * @description flatten the actors array to a comma seperated string.
     */
     get castActors() : string {
        return this.cast.join(', ');
    }

    /**
     * @property
     * @description convert the date from the string to date object.
     */
    get  date():string {
        return formatDate(this.releasedDate,'yyyy-MM-dd',"en-us");
    }
 
    /**
     * @method
     * @param json contains the json response coming from the server
     * @description converts the response to array of  strongly yped movies
     */
        static asMovies(json:[]) : Movie[]{
        return json.map(jsonEntity=> Movie.asMovie(jsonEntity));
    }
}