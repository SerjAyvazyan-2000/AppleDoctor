import earphones from "../../src/assets/images/earphones.png"
import iPhonePro11 from "../../src/assets/images/11 pro.jpg"
import iPhoneProMax from "../../src/assets/images/11 pro max.jpg"
import iPhone11 from "../../src/assets/images/11.jpg"
import iPhoneMini12 from "../../src/assets/images/12_Mini.jpeg"
import iPhone12Pro from "../../src/assets/images/12_Pro.jpg"
import iPhone12ProMax from "../../src/assets/images/12_Pro_Max.jpeg"
import iPhoneSe2 from "../../src/assets/images/iphone se2.jpg"
import iPhone5 from "../../src/assets/images/iphone-5.jpg"
import iPhone5c from "../../src/assets/images/iphone-5c.jpg"
import iPhone5sSe from "../../src/assets/images/iphone-5s-se-.jpg"
import iPhone6Plus  from "../../src/assets/images/iphone-6-plus.jpg"
import iPhone6  from "../../src/assets/images/iphone-6.jpg"
import iPhone6SPlus  from "../../src/assets/images/iphone-6s-plus.jpg"
import iPhone6S from "../../src/assets/images/iphone-6s.jpg"
import iPhone7Plus from "../../src/assets/images/iphone-7-plus.jpg"
import iPhone7 from "../../src/assets/images/iphone-7.jpg"
import iPhone8Plus from "../../src/assets/images/iphone-8-plus.jpg"
import iPhone8 from "../../src/assets/images/iphone-8.jpg"
import iPhoneX from "../../src/assets/images/iphone-x.jpg"
import iPhoneXMax from "../../src/assets/images/iphone-xs-max.jpg"
import iPhoneXS from "../../src/assets/images/iphone-xs-3840x2160-4k-20235.jpg"
import iPhone13 from "../../src/assets/images/iphone13.png"
import iPhone13Mini from "../../src/assets/images/iphone13mini.png"
import iPhone13Pro from "../../src/assets/images/iphone13pro.png"
import iphoneXR from "../../src/assets/images/xr.jpg"
import macBookCategories from "../../src/assets/images/maxresdefault.JPG"
import iMac from  "../assets/images/pro-xdr.png"
import watch from "../assets/images/IMG_4258.JPG"
import ipad from "../../src/assets/images/ipad_mini.png"
import macBook from "../../src/assets/images/macbook.jpg"
import macBookPro from "../../src/assets/images/macbook-pro-sierra-wallpaper.jpg"
import macBookAir from "../../src/assets/images/MacBook_air-Digital_HD_Wallpaper_1280x1024.jpg"
import macBook12 from "../../src/assets/images/apple_z0te00035_5.jpg"
import star from "../../src/assets/images/star 2.jpg"


export const useInformation = () => {
    const categories = [
        {
            name: 'watch',
            img: watch,
            categories: 'clock',
            id: 1
        },
        {
            name: 'AirPods',
            img: earphones,
            categories: 'earphones',
            id: 2
        },
        {
            name: 'iPhone',
            img: iPhone11,
            categories: 'iPhone',
            id: 3
        },
        {
            name: 'Ipad',
            img: ipad,
            categories: 'iPad',
            id: 4
        },
        {
            name: 'MacBook',
            img: macBookCategories,
            categories: 'MacBook',
            id: 5
        },
        {
            name: 'iMac',
            img: iMac,
            categories: 'iMac',
            id: 6
        },
    ]
    const products = [
        {
            name: "Iphone 11 Pro Max",
            img: iPhoneProMax,
            jobs:[
                {name:"Дисплей (Копия)",price:"5500 ₽",id:1},
                {name:"Face ID",price:"8900 ₽",id:2},
                {name:"Замена заднего модуля",price:"8500 ₽",id:3},
                {name:" Аккумулятор",price:"7500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"19000 ₽",id:5},
                {name:"Разъем зарядки",price:"4000 ₽",id:6},
                {name:"Верхний динамик",price:"5000 ₽",id:7},
                {name:"Задняя камера",price:"6300 ₽",id:8},
                {name:"Динамик",price:"6500 ₽",id:9},
            ],
            id: 1,
            categories: 'iPhone',
        },
        {
            name: "Iphone 11",
            img: iPhone11,
            jobs:[
                {name:"Дисплей (Копия)",price:"6900 ₽",id:1},
                {name:"Face ID",price:"7900 ₽",id:2},
                {name:"Замена заднего модуля",price:"10500 ₽",id:3},
                {name:" Аккумулятор",price:"4500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"3500 ₽",id:5},
                {name:"Разъем зарядки",price:"4500 ₽",id:6},
                {name:"Верхний динамик",price:"5900 ₽",id:7},
                {name:"Задняя камера",price:"6100 ₽",id:8},
                {name:"Динамик",price:"5600 ₽",id:9},
            ],
            id: 2,
            categories: 'iPhone',
        },
        {
            name: "Iphone 12 Mini",
            img: iPhoneMini12,
            jobs:[
                {name:"Дисплей (Копия)",price:"5500 ₽",id:1},
                {name:"Face ID",price:"8900 ₽",id:2},
                {name:"Замена заднего модуля",price:"10500 ₽",id:3},
                {name:" Аккумулятор",price:"5500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"4900 ₽",id:5},
                {name:"Разъем зарядки",price:"14000 ₽",id:6},
                {name:"Верхний динамик",price:"6500 ₽",id:7},
                {name:"Задняя камера",price:"6300 ₽",id:8},
                {name:"Динамик",price:"6500 ₽",id:9},
            ],
            id: 3,
            categories: 'iPhone',
        },
        {
            name: "Iphone 12 Pro",
            img: iPhone12Pro,
            jobs:[
                {name:"Дисплей (Копия)",price:"5900 ₽",id:1},
                {name:"Face ID",price:"11500 ₽",id:2},
                {name:"Замена заднего модуля",price:"10500 ₽",id:3},
                {name:" Аккумулятор",price:"6500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"5900 ₽",id:5},
                {name:"Разъем зарядки",price:"19000 ₽",id:6},
                {name:"Верхний динамик",price:"5500 ₽",id:7},
                {name:"Задняя камера",price:"8300 ₽",id:8},
                {name:"Динамик",price:"2500 ₽",id:9},
            ],
            id: 4,
            categories: 'iPhone',
        },
        {
            name: "Iphone 12 Pro Max",
            img: iPhone12ProMax,
            jobs:[
                {name:"Дисплей (Копия)",price:"6500 ₽",id:1},
                {name:"Face ID",price:"12500 ₽",id:2},
                {name:"Замена заднего модуля",price:"11500 ₽",id:3},
                {name:" Аккумулятор",price:"7500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"5500 ₽",id:5},
                {name:"Разъем зарядки",price:"22500 ₽",id:6},
                {name:"Верхний динамик",price:"5900 ₽",id:7},
                {name:"Задняя камера",price:"9500 ₽",id:8},
                {name:"Динамик",price:"6500 ₽",id:9},
            ],
            id: 5,
            categories: 'iPhone',
        },
        {
            name: "Iphone SE 2",
            img: iPhoneSe2,
            jobs:[
                {name:"Дисплей (Копия)",price:"2500 ₽",id:1},
                {name:"Face ID",price:"5500 ₽",id:2},
                {name:"Замена заднего модуля",price:"5500 ₽",id:3},
                {name:" Аккумулятор",price:"7500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"5500 ₽",id:5},
                {name:"Разъем зарядки",price:"22500 ₽",id:6},
                {name:"Верхний динамик",price:"5900 ₽",id:7},
                {name:"Задняя камера",price:"9500 ₽",id:8},
                {name:"Динамик",price:"6500 ₽",id:9},
            ],
            id: 6,
            categories: 'iPhone',
        },
        {
            name: "Iphone 5",
            img: iPhone5,
            jobs:[
                {name:"Дисплей (Копия)",price:"2900 ₽",id:1},
                {name:"Face ID",price:"3000 ₽",id:2},
                {name:"Замена заднего модуля",price:"4500 ₽",id:3},
                {name:" Аккумулятор",price:"2500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"3500 ₽",id:5},
                {name:"Разъем зарядки",price:"500 ₽",id:6},
                {name:"Верхний динамик",price:"1900 ₽",id:7},
                {name:"Задняя камера",price:"6500 ₽",id:8},
                {name:"Динамик",price:"7500 ₽",id:9},
            ],
            id: 7,
            categories: 'iPhone',
        },
        {
            name: "Iphone 5 C",
            img:  iPhone5c
            ,
            jobs:[
                {name:"Дисплей (Копия)",price:"2900 ₽",id:1},
                {name:"Face ID",price:"3000 ₽",id:2},
                {name:"Замена заднего модуля",price:"4500 ₽",id:3},
                {name:" Аккумулятор",price:"2500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"3500 ₽",id:5},
                {name:"Разъем зарядки",price:"500 ₽",id:6},
                {name:"Верхний динамик",price:"1900 ₽",id:7},
                {name:"Задняя камера",price:"6500 ₽",id:8},
                {name:"Динамик",price:"7500 ₽",id:9},
            ],
            id: 8,
            categories: 'iPhone',
        },
        {
            name: "Iphone 5S SE",
            img:  iPhone5sSe
            ,
            jobs:[
                {name:"Дисплей (Копия)",price:"2900 ₽",id:1},
                {name:"Face ID",price:"3000 ₽",id:2},
                {name:"Замена заднего модуля",price:"4500 ₽",id:3},
                {name:" Аккумулятор",price:"2500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"3500 ₽",id:5},
                {name:"Разъем зарядки",price:"500 ₽",id:6},
                {name:"Верхний динамик",price:"1900 ₽",id:7},
                {name:"Задняя камера",price:"6500 ₽",id:8},
                {name:"Динамик",price:"7500 ₽",id:9},
            ],
            id: 9,
            categories: 'iPhone',
        },
        {
            name: "Iphone 6+ SE",
            img:  iPhone6Plus
            ,
            jobs:[
                {name:" Аккумулятор",price:"2500 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2500 ₽",id:5},
                {name:"Разъем зарядки",price:"1500 ₽",id:6},
                {name:"Верхний динамик",price:"2000 ₽",id:7},
                {name:"Задняя камера",price:"2500 ₽",id:8},
                {name:"Динамик",price:"2500 ₽",id:9},
            ],
            id: 10,
            categories: 'iPhone',
        },
        {
            name: "Iphone 6",
            img:  iPhone6
            ,
            jobs:[
                {name:" Аккумулятор",price:"2000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2000 ₽",id:5},
                {name:"Разъем зарядки",price:"1500 ₽",id:6},
                {name:"Верхний динамик",price:"2000 ₽",id:7},
                {name:"Задняя камера",price:"200 ₽",id:8},
                {name:"Динамик",price:"1500 ₽",id:9},
            ],
            id: 11,
            categories: 'iPhone',
        },
        {
            name: "Iphone 6S+",
            img:  iPhone6SPlus
            ,
            jobs:[
                {name:" Аккумулятор",price:"2000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2000 ₽",id:5},
                {name:"Разъем зарядки",price:"3500 ₽",id:6},
                {name:"Верхний динамик",price:"3000 ₽",id:7},
                {name:"Задняя камера",price:"200 ₽",id:8},
                {name:"Динамик",price:"1500 ₽",id:9},
            ],
            id: 12,
            categories: 'iPhone',
        },
        {
            name: "Iphone 6S",
            img:  iPhone6S
            ,
            jobs:[
                {name:" Аккумулятор",price:"2000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2000 ₽",id:5},
                {name:"Разъем зарядки",price:"3500 ₽",id:6},
                {name:"Верхний динамик",price:"3000 ₽",id:7},
                {name:"Задняя камера",price:"200 ₽",id:8},
                {name:"Динамик",price:"1500 ₽",id:9},
            ],
            id: 13,
            categories: 'iPhone',
        },
        {
            name: "Iphone 7+",
            img:  iPhone7Plus
            ,
            jobs:[
                {name:" Аккумулятор",price:"5900 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2500 ₽",id:5},
                {name:"Разъем зарядки",price:"3900 ₽",id:6},
                {name:"Верхний динамик",price:"3000 ₽",id:7},
                {name:"Задняя камера",price:"1900 ₽",id:8},
                {name:"Динамик",price:"5000 ₽",id:9},
            ],
            id: 14,
            categories: 'iPhone',
        },
        {
            name: "Iphone 7",
            img:  iPhone7
            ,
            jobs:[
                {name:" Аккумулятор",price:"4000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2500 ₽",id:5},
                {name:"Разъем зарядки",price:"2900 ₽",id:6},
                {name:"Верхний динамик",price:"3000 ₽",id:7},
                {name:"Задняя камера",price:"1900 ₽",id:8},
                {name:"Динамик",price:"5000 ₽",id:9},
                {name:"  Дисплей (Копия)",price:"2500 ₽",id:10},

            ],
            id: 15,
            categories: 'iPhone',
        },
        {
            name: "Iphone 8+",
            img:  iPhone8Plus
            ,
            jobs:[
                {name:" Аккумулятор",price:"5900 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2500 ₽",id:5},
                {name:"Разъем зарядки",price:"3500 ₽",id:6},
                {name:"Верхний динамик",price:"3500 ₽",id:7},
                {name:"Задняя камера",price:"3000 ₽",id:8},
                {name:"Динамик",price:"1900 ₽",id:9},
                {name:"  Дисплей (Копия)",price:"2500 ₽",id:10},
                {name:"Замена заднего модуля",price:"4900 ₽",id:11},

            ],
            id: 16,
            categories: 'iPhone',
        },
        {
            name: "Iphone 8",
            img:  iPhone8
            ,
            jobs:[
                {name:" Аккумулятор",price:"5900 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"2500 ₽",id:5},
                {name:"Разъем зарядки",price:"3500 ₽",id:6},
                {name:"Верхний динамик",price:"3500 ₽",id:7},
                {name:"Задняя камера",price:"3000 ₽",id:8},
                {name:"Динамик",price:"1900 ₽",id:9},
                {name:"  Дисплей (Копия)",price:"2500 ₽",id:10},
                {name:"Замена заднего модуля",price:"4900 ₽",id:11},

            ],
            id: 17,
            categories: 'iPhone',
        },
        {
            name: "Iphone X",
            img:  iPhoneX
            ,
            jobs:[
                {name:" Аккумулятор",price:"9500 ₽",id:1},
                {name:"Face ID",price:"6900 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"5000 ₽",id:3},
                {name:"Разъем зарядки",price:"5900 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4000 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"2500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 18,
            categories: 'iPhone',
        },
        {
            name: "Iphone X Max",
            img:  iPhoneXMax
            ,
            jobs:[
                {name:" Аккумулятор",price:"14000 ₽",id:1},
                {name:"Face ID",price:"4500 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"7900 ₽",id:3},
                {name:"Разъем зарядки",price:"7500 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4500 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"3500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 19,
            categories: 'iPhone',
        },
        {
            name: "Iphone XS",
            img:  iPhoneXS
            ,
            jobs:[
                {name:" Аккумулятор",price:"14000 ₽",id:1},
                {name:"Face ID",price:"4500 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"7900 ₽",id:3},
                {name:"Разъем зарядки",price:"7500 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4500 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"3500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 20,
            categories: 'iPhone',
        },
        {
            name: "Iphone 13",
            img:  iPhone13
            ,
            jobs:[
                {name:" Аккумулятор",price:"14000 ₽",id:1},
                {name:"Face ID",price:"4500 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"7900 ₽",id:3},
                {name:"Разъем зарядки",price:"7500 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4500 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"3500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 21,
            categories: 'iPhone',
        },
        {
            name: "Iphone 13 Mini",
            img:  iPhone13Mini
            ,
            jobs:[
                {name:" Аккумулятор",price:"14000 ₽",id:1},
                {name:"Face ID",price:"4500 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"7900 ₽",id:3},
                {name:"Разъем зарядки",price:"7500 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4500 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"3500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 22,
            categories: 'iPhone',
        },
        {
            name: "Iphone 13 PRO",
            img:  iPhone13Pro
            ,
            jobs:[
                {name:" Аккумулятор",price:"14000 ₽",id:1},
                {name:"Face ID",price:"4500 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"7900 ₽",id:3},
                {name:"Разъем зарядки",price:"7500 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4500 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"3500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 23,
            categories: 'iPhone',
        },
        {
            name: "Iphone XR",
            img:  iphoneXR
            ,
            jobs:[
                {name:" Аккумулятор",price:"14000 ₽",id:1},
                {name:"Face ID",price:"4500 ₽",id:2},
                {name:"Дисплей (Оригинал)",price:"7900 ₽",id:3},
                {name:"Разъем зарядки",price:"7500 ₽",id:4},
                {name:"Верхний динамик",price:"3500 ₽",id:5},
                {name:"Задняя камера",price:"4500 ₽",id:6},
                {name:"Динамик",price:"2500 ₽",id:7},
                {name:"  Дисплей (Копия)",price:"3500 ₽",id:8},
                {name:"Замена заднего модуля",price:"5900 ₽",id:9},

            ],
            id: 24,
            categories: 'iPhone',
        },

        {
            name: "MacBook Pro",
            img: macBookPro,
            jobs:[
                {name:"Дисплей (Копия)",price:"1500 ₽",id:1},
                {name:"Face ID",price:"2490 ₽",id:2},
                {name:"Замена заднего модуля",price:"2500 ₽",id:3},
                {name:" Аккумулятор",price:"14000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"5500 ₽",id:5},
                {name:"Разъем зарядки",price:"6500 ₽",id:6},
                {name:"Верхний динамик",price:"3500 ₽",id:7},
                {name:"Задняя камера",price:"3000 ₽",id:8},
                {name:"Динамик",price:"5000 ₽",id:9},
            ],
            id: 25,
            categories: 'MacBook',
        },
        {
            name: "MacBook Air ",
            img: macBookAir,
            jobs:[
                {name:"Дисплей (Копия)",price:"1500 ₽",id:1},
                {name:"Face ID",price:"2490 ₽",id:2},
                {name:"Замена заднего модуля",price:"2500 ₽",id:3},
                {name:" Аккумулятор",price:"14000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"5500 ₽",id:5},
                {name:"Разъем зарядки",price:"6500 ₽",id:6},
                {name:"Верхний динамик",price:"3500 ₽",id:7},
                {name:"Задняя камера",price:"3000 ₽",id:8},
                {name:"Динамик",price:"5000 ₽",id:9},
            ],
            id: 26,
            categories: 'MacBook',
        },
        {
            name: "MacBook 12 ",
            img: macBook12,
            jobs:[
                {name:"Дисплей (Копия)",price:"1500 ₽",id:1},
                {name:"Face ID",price:"2490 ₽",id:2},
                {name:"Замена заднего модуля",price:"2500 ₽",id:3},
                {name:" Аккумулятор",price:"14000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"5500 ₽",id:5},
                {name:"Разъем зарядки",price:"6500 ₽",id:6},
                {name:"Верхний динамик",price:"3500 ₽",id:7},
                {name:"Задняя камера",price:"3000 ₽",id:8},
                {name:"Динамик",price:"5000 ₽",id:9},
            ],
            id: 27,
            categories: 'MacBook',
        },





    ]
    const aboutUs = [
        {
            title:'Быстрый ремонт со скоростью света',
            text:'У нас все запчасти в наличии. Поэтому 70% ремонтов мы делаем за 15-20 минут при вас.',
            img:star,
            id:1
        },
        {
            title:'Быстрый ремонт со скоростью света',
            text:'Наши мастера работают на современном оборудовании ,которое позволяет нам делать быструю и точную диагностику и ремонт',
            id:2,
            img:star,

        },
        {
            title:'Гарантия 180 дней',
            text:'В обязательном порядке выдаем документы о приеме, выдаче, гарантию на 180 дней - с подписями и печатями.',
            id:3,
            img:star,

        },
        {
            title:'Безопасность',
            text:'Ремонт производится при Вас, поэтому любая информация находится под вашим контролем',
            id:4,
            img:star,

        },
        {
            title:'Наши цены превосходны, как “Млечный Путь”',
            text:'указанные цены на сайте окончательные, без всяких «хитрых» наценок и не подлежат изменению.',
            id:5,
            img:star,

        },
        {
            title:'Программы лояльности Предоставляем скидку - 10% за предварительную запись на ремонт техники Apple.”',
            text:'',
            id:6,
            img:star,

        },
        {
            title:'11+”',
            text:'ЛЕТ НА РЫНКЕ РЕМОНТА техники Apple ',
            id:7,
            img:star,

        },
        {
            title:'8 тысяч”',
            text:'БЫЛО ПОЧИНЕНО УСТРОЙСТВ',
            id:8,
            img:star,

        },
    ]
    const discount = [
        {
            title:'ПОСЛЕ ЦЕН',
            description:'  Apple Doctor - ваш космический сервисный центр для восстановления устройств Apple!. Доверьте нам свое устройство и ощутите нашу космическую экспертизу! Дарим  скидку в 10% .   (Скидка с таймером 15 минут)',
            id:1



        },
        {
            title:'Доверьте свою технику проверенным специалистам',
            description:" Добро пожаловать в космический сервисный центр, который становится вашей орбитой надежности. Наша экспертная команда готова восстановить и поддержать вашу технику с галактической точностью. Мы предлагаем высококачественный ремонт, внедряем передовые технологии и обеспечиваем вашу технику запчастями из космически надежных источников." +
                "Приходите к нам, и мы с радостью позаботимся о вашем космическом опыте с космическим Apple Doctor!  Видео",
            id:2


        },
    ]

    return {categories,products,aboutUs,discount}
}