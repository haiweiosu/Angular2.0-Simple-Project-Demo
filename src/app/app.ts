import {bootstrap, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>NBA Teams</h2>
    <ul class="heroes">
      <li *ng-for="#hero of heroes" (click)="onSelect(hero)">
       <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} Teams</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ng-model)]="hero.name" placeholder="name"></div>
    </div>
    `,
    styles:[`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 20em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 2.0s ease; }
      .heroes li:hover {color: #369; background-color: #ccffcc; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
      `],
  directives: [FORM_DIRECTIVES, NgFor]
})
class AppComponent {
  public title = 'NBA: Season 2015-2016';
  public hero: Hero = {
    name: 'NBA'
  };
  public heroes = HEROES;
}
bootstrap(AppComponent);

var HEROES: Hero[] = [
  { "id": 11, "name": "Boston Celtics" },
  { "id": 12, "name": "Brooklyn Nets" },
  { "id": 13, "name": "New York Knicks" },
  { "id": 14, "name": "Philadelphia 76ers" },
  { "id": 15, "name": "Toronto Raptors" },
  { "id": 16, "name": "Chicago Bulls" },
  { "id": 17, "name": "Cleveland Cavaliers" },
  { "id": 18, "name": "Detroit Pistons" },
  { "id": 19, "name": "Indiana Pacers" },
  { "id": 20, "name": "Atlanta Hawks" }
  { "id": 21, "name": "Charlotte Hornets" }
  { "id": 22, "name": "Miami Heat" }
  { "id": 23, "name": "Orlando Magic" }
  { "id": 24, "name": "Washington Wizards" }
  { "id": 25, "name": "Dallas Mavericks" }
  { "id": 26, "name": "Houston Rockets" }
  { "id": 27, "name": "Memphis Grizzlies" }
  { "id": 28, "name": "New Orleans Pelicans" }
  { "id": 29, "name": "San Antonio Spurs" }
  { "id": 30, "name": "Denver Nuggets" }
  { "id": 31, "name": "Minnesota Timberwolves" }
  { "id": 32, "name": "Oklahoma City Thunder" }
  { "id": 33, "name": "Portland Trail Blazers" }
  { "id": 34, "name": "Utah Jazz" }
  { "id": 35, "name": "Golden State Warriors" }
  { "id": 36, "name": "Los Angeles Clippers" }
  { "id": 37, "name": "Los Angeles Lakers" }
  { "id": 38, "name": "Phoenix Suns" }
  { "id": 39, "name": "Sacramento Kings" }


];