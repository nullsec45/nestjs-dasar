import { Controller, Get } from "@nestjs/common";

// routing nya taru di decorator controller di mana dikelompokkan berdasarkan jalur routingnya
@Controller("hero")
export class HeroController {
    @Get("index")
    index() {
        return "Hero index";
    }

    @Get("create")
    create() {
        return "hero create";
    }
}