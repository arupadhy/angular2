import {Component} from 'angular2/core'
import {Hero} from './hero.component'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './hero.service'
import {OnInit} from 'angular2/core'

@Component({
    selector: 'my-heroes',
    template: `<h1>{{title}}</h1>
                <h2>My Heroes</h2>
               <ul class="heroes" *ngFor="#hero of allHeroes">
                    <li [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                     <span class="badge">{{hero.id}}</span> {{hero.name}}
                     </li>
               </ul>
               <my-hero-detail [hero]="selectedHero"></my-hero-detail>
               `,
    styleUrls: ["./styles/heroes.css"],
    directives: [HeroDetailComponent]
   

})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    title: string = "Hero Tours";
    allHeroes:Hero[];
    
    getAllHeroes() {
        this._heroService.getHeroes().then(heroes=>this.allHeroes=heroes);
    }
    
    constructor(private _heroService: HeroService) {
    }
    
    ngOnInit() {
        this.getAllHeroes();
        //this._heroService.getHeroesSlowly();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
   
}