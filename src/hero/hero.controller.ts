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
    Put
} from "@nestjs/common";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";

let heroes = [
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
];
// routing nya taru di decorator controller di mana dikelompokkan berdasarkan jalur routingnya
@Controller("hero")
export class HeroController {
    @Get("index")
    @HttpCode(200)
    @Header("Content-Type", "application/json")
    index(@Res() response) {
        response.json(
            heroes
        );
    }

    // Untuk route/url yang terdapat parameternya, taruh di atas route yang statis
    @Get("detail/:id")
    show(@Param() params, @Res() response) {
        let hero = heroes.find((hero) => hero.id == params.id);
        if (hero == undefined) {
            response.json(
                {
                    status: 404,
                    message: "Hero Not Found"
                }
            );
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
        // const { id, name, type, image } = request.body;
        heroes.push(createHeroDto)
        response.status(200).json(heroes);
    }


    @Put("/update/:id")
    update(@Param("id") id: number, @Res() response, @Body() updateHeroDto: UpdateHeroDto) {
        const hero = heroes.find((hero) => hero.id == id);
        // console.log(hero.name);
        // return;
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
        // hero.status = updateHeroDto.status;

        response.status(200).json(heroes);
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