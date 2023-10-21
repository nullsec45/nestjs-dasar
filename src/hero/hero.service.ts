import { Injectable } from '@nestjs/common';
import Hero from './interface/hero.interface';

@Injectable()
export class HeroService {
    private readonly heroes: Hero[] = [
        {
            id: 1,
            name: "Aurora",
            type: "Mage",
            image: "aurora.jpg"
        },
        {
            id: 2,
            name: "Zilong",
            type: "Fighter",
            image: "zilong.jpg"
        },
        {
            id: 3,
            name: "Akai",
            type: "Tank",
            image: "akai.jpg"
        },
        {
            id: 4,
            name: "Aurora",
            type: "Mage",
            image: "aurora.jpg"
        }
    ]

    create(hero: Hero) {
        this.heroes.push(hero);
    }

    findAll(): Hero[] {
        return this.heroes;
    }

    findById(id: number) {
        return this.heroes.find((hero) => hero.id == id)
    }

    delete(id: number) {
        return this.heroes.filter((hero) => hero.id != id);
    }
}
