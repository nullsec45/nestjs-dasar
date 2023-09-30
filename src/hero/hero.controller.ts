import { Controller, Get } from "@nestjs/common";

@Controller()
export class HeroController {
    @Get("hero/index")
    index() {
        return "Hero index";
    }

    @Get("hero/create")
    create() {
        return "hero create";
    }
}