import {
    Controller,
    Get,
    HttpCode,
    Post,
    Req,
    Res,
    Header,
    Redirect,
    Param,
    Body,
    Put,
    Delete
} from "@nestjs/common";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { HeroService } from "./hero.service";

// routing nya taru di decorator controller di mana dikelompokkan berdasarkan jalur routingnya
@Controller("hero")
export class HeroController {
    constructor(private heroService: HeroService) {

    }

    @Get("index")
    @HttpCode(200)
    @Header("Content-Type", "application/json")
    index(@Res() response) {
        response.json(
            this.heroService.findAll()
        );
    }

    // Untuk route/url yang terdapat parameternya, taruh di atas route yang statis
    @Get("detail/:id")
    show(@Param() params, @Res() response) {
        let hero = this.heroService.findById(params.id);
        if (hero == undefined) {
            response.json(
                {
                    status: 404,
                    message: "Hero Not Found"
                }
            );
            return;
        }
        response.json(
            {
                status: 200,
                hero
            }
        );
    }

    @Get("create")
    create(@Res({ passthrough: true }) res): string {
        res.cookie("name", "Fajar");
        return "hero create";
    }

    @Post("store")
    store(@Res() response, @Body() createHeroDto: CreateHeroDto) {

        try {
            this.heroService.create(createHeroDto);
            response.status(200).json(this.heroService.findAll());
        } catch (error) {
            response.status(500).json({ message: "error" });
        }
    }


    @Put("/update/:id")
    update(@Param("id") id: number, @Res() response, @Body() updateHeroDto: UpdateHeroDto) {
        const hero = this.heroService.findById(id);

        if (hero == undefined) {
            response.json(
                {
                    status: 404,
                    message: "Hero Not Found"
                }
            );
            return
        }

        hero.name = updateHeroDto.name;
        hero.type = updateHeroDto.type;
        hero.image = updateHeroDto.image;

        response.status(200).json(this.heroService.findAll());
    }

    @Delete("destroy/:id")
    destroy(@Param("id") id: number) {
        const hero = this.heroService.delete(id);

        return hero;

    }
    // Jika menggunakan passhthrough kita bisa mengirimkan data nya lewat body dan juga return data nya
    @Post("kirim")
    kirim(@Req() request, @Res({ passthrough: true }) response) {
        return {
            data: request.body
        }
    }


    @Get("/welcome")
    @Redirect("https://docs.nestjs.com/", 301)
    hello() {
        return "Welcome";
    }


}