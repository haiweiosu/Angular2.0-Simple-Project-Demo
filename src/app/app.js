var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'NBA: Season 2015-2016';
        this.hero = {
            name: 'NBA'
        };
        this.heroes = HEROES;
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>NBA Teams</h2>\n    <ul class=\"heroes\">\n      <li *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\">\n       <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <h2>{{hero.name}} Teams</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <div><input [(ng-model)]=\"hero.name\" placeholder=\"name\"></div>\n    </div>\n    ",
            styles: ["\n      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 20em;}\n      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 2.0s ease; }\n      .heroes li:hover {color: #369; background-color: #ccffcc; left: .2em;}\n      .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n      "],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
var HEROES = [
    { "id": 11, "name": "Boston Celtics" },
    { "id": 12, "name": "Brooklyn Nets" },
    { "id": 13, "name": "New York Knicks" },
    { "id": 14, "name": "Philadelphia 76ers" },
    { "id": 15, "name": "Toronto Raptors" },
    { "id": 16, "name": "Chicago Bulls" },
    { "id": 17, "name": "Cleveland Cavaliers" },
    { "id": 18, "name": "Detroit Pistons" },
    { "id": 19, "name": "Indiana Pacers" },
    { "id": 20, "name": "Atlanta Hawks" },
    { "id": 21, "name": "Charlotte Hornets" },
    { "id": 22, "name": "Miami Heat" },
    { "id": 23, "name": "Orlando Magic" },
    { "id": 24, "name": "Washington Wizards" },
    { "id": 25, "name": "Dallas Mavericks" },
    { "id": 26, "name": "Houston Rockets" },
    { "id": 27, "name": "Memphis Grizzlies" },
    { "id": 28, "name": "New Orleans Pelicans" },
    { "id": 29, "name": "San Antonio Spurs" },
    { "id": 30, "name": "Denver Nuggets" },
    { "id": 31, "name": "Minnesota Timberwolves" },
    { "id": 32, "name": "Oklahoma City Thunder" },
    { "id": 33, "name": "Portland Trail Blazers" },
    { "id": 34, "name": "Utah Jazz" },
    { "id": 35, "name": "Golden State Warriors" },
    { "id": 36, "name": "Los Angeles Clippers" },
    { "id": 37, "name": "Los Angeles Lakers" },
    { "id": 38, "name": "Phoenix Suns" },
    { "id": 39, "name": "Sacramento Kings" }
];
//# sourceMappingURL=app.js.map