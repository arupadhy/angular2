import {Component, Input} from 'angular2/core'
import {Hero} from './hero.component'

@Component({
    selector: 'my-hero-detail',
    template: `
                <div *ngIf="hero">
                    <h2>{{hero.name}} Details:</h2>
                    <div>
                        <label>Id:</label>{{hero.id}}
                    </div>
                   <div>
                        <label>name:</label>
                        <input [(ngModel)]="hero.name" placeholder="name"/>
                   </div>
               </div>
              `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}

