import { Controller, Get, HttpCode, Res } from "@nestjs/common";

// routing nya taru di decorator controller di mana dikelompokkan berdasarkan jalur routingnya
@Controller("hero")
export class HeroController {
    @Get("index")
    @HttpCode(200)
    index(@Res() response) {
        response.json({
            title: "Hero Index"
        });
    }

    @Get("create")
    create() {
        return "hero create";
    }
}