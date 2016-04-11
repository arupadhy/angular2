import {Injectable} from 'angular2/core'
import {allHeroes} from './mock-heroes'
import {Hero} from './hero.component'

@Injectable()
export class HeroService {
    
    getHeroes() {
        return Promise.resolve(allHeroes);
    }
    
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve=>
        setTimeout(function(){
            console.log("Resolving heroservice now...This is to mimic hero's call");
            resolve(allHeroes);   
        }
            ,10000)
        );
    }
    
}