import { Controller, Get, HttpCode, Post, Req, Res, Header, Redirect } from "@nestjs/common";

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

    @Get("create")
    create(@Res({ passthrough: true }) res): string {
        res.cookie("name", "Fajar");
        return "hero create";
    }

    @Post("store")
    store(@Req() request, @Res() response) {
        const { id, name, type, image } = request.body;
        heroes.push({
            id,
            name,
            type,
            image
        })
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