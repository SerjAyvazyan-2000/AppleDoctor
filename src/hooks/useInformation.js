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



import ipad from "../../src/assets/images/ipad_mini.png"
import iMac1 from "../../src/assets/images/iphone14promax.jpg"


export const useInformation = () => {
    const categories = [
        {
            name: 'watch',
            img: iMac1,
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
            img: iMac1,
            categories: 'MacBook',
            id: 5
        },
        {
            name: 'iMac',
            img: ipad,
            categories: 'iMac',
            id: 6
        },
    ]
    const products = [
        {
            name: "Iphone 11 Pro",
            img: iPhoneProMax,
            jobs:[
                {name:"Дисплей (Копия)",price:"7500 ₽",id:1},
                {name:"Face ID",price:"8900 ₽",id:2},
                {name:"Замена заднего модуля",price:"4900 ₽",id:3},
                {name:" Аккумулятор",price:"6000 ₽",id:4},
                {name:"Дисплей (Оригинал)",price:"16000 ₽",id:5},
                {name:"Разъем зарядки",price:"5000 ₽",id:6},
                {name:"Верхний динамик",price:"4000 ₽",id:7},
                {name:"Задняя камера",price:"6500 ₽",id:8},
                {name:"Динамик",price:"6500 ₽",id:9},
            ],
            id: 1,
            categories: 'iPhone',
        },
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 23,
            categories: 'iPhone',
        },



        {
            name: "Clock",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'clock',
            id: 7
        },
        {
            name: "Clock",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'clock',
            id: 8
        },
        {
            name: "Clock",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'clock',
            id: 9
        },
        {
            name: "Clock",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            img: earphones,
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            touchScreenIf:'14 900 ₽',
            categories: 'clock',
            id: 10

        },
        {
            name: "AirPods",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'earphones',
            id: 11
        },
        {
            name: "AirPods",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'earphones',
            id: 11
        },
        {
            name: "AirPods",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'earphones',
            id: 11
        },
        {
            name: "AirPods",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'earphones',
            id: 12
        },
        {
            name: "AirPods",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'earphones',
            id: 13
        },
        {
            name: "AirPods",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: earphones,
            categories: 'earphones',
            id: 14
        },
        {
            name: "MacBook",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: ipad,
            categories: 'MacBook',
            id: 15
        },
        {
            name: "MacBook",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: ipad,
            categories: 'MacBook',
            id: 16},
        {
            name: "MacBook",
            diagnostics: 'бесплатно',
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: ipad, categories: 'MacBook',
            DataRecovery:"4 500 ₽",
            id: 17
        },
        {
            name: "MacBook",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: ipad,
            categories: 'MacBook',
            id: 18
        },
        {
            name: "iMac",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            img: iMac1,
            categories: 'iMac',
            id: 19
        },
        {
            name: "iMac",
            DataRecovery:"4 500 ₽",
            diagnostics: 'бесплатно',
            dataTransfer:'от 500 ₽',
            img: iMac1,
            polishingScreen:'от 5000 ₽',
            categories: 'iMac',
            id: 20,
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',
            bodyReplacement :'от 16000 ₽',

            faceIDRepair:'10 500 ₽',

        },
        {

            name: "iMac",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            img: iMac1,
            categories: 'iMac',
            touchScreenIf:'14 900 ₽',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            replacingBattery:'6 500 ₽',
            batteryError:'5200 ₽',
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            speakerMesh:'от 2500 ₽',

            bodyReplacement :'от 16000 ₽',
            id: 21,
            faceIDRepair:'10 500 ₽',
            polishingScreen:'от 5000 ₽',
            touchScreen :'12 490 ₽',


        },
        {
            name: "iMac",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            img: iMac1,
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            categories: 'iMac',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            faceIDRepair:'10 500 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            polishingScreen:'от 5000 ₽',
            id: 22,
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',

            batteryError:'5200 ₽',
            replacingBattery:'6 500 ₽',

        },

        {
            name: "iPad",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            img: ipad,
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            categories: 'iPad',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            faceIDRepair:'10 500 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            polishingScreen:'от 5000 ₽',
            id: 22,
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',
            batteryError:'5200 ₽',
            replacingBattery:'6 500 ₽',

        },
        {
            name: "iPad",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            img: ipad,
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            categories: 'iPad',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            faceIDRepair:'10 500 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            polishingScreen:'от 5000 ₽',
            id: 22,
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',

            batteryError:'5200 ₽',
            replacingBattery:'6 500 ₽',

        },
        {
            name: "iPad",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            img: ipad,
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            categories: 'iPad',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            faceIDRepair:'10 500 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            polishingScreen:'от 5000 ₽',
            id: 22,
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',

            batteryError:'5200 ₽',
            replacingBattery:'6 500 ₽',

        },
        {
            name: "iPad",
            diagnostics: 'бесплатно',
            DataRecovery:"4 500 ₽",
            dataTransfer:'от 500 ₽',
            img: ipad,
            touchScreen :'12 490 ₽',
            touchScreenIf:'14 900 ₽',
            categories: 'iPad',
            replacementDisplay:'18 900 ₽',
            replacementDisplayOriginal:'22 100 ₽',
            faceIDRepair:'10 500 ₽',
            resolvingError:'4 500 ₽',
            displayModule:'10 490 ₽',
            polishingScreen:'от 5000 ₽',
            id: 22,
            replacingMainCamera:'3 900 ₽',
            replacingMainRearCamera:'6 900 ₽',

            batteryError:'5200 ₽',
            replacingBattery:'6 500 ₽',

        },



    ]
    const aboutWork  = [
        {job:'Диагностика',id:1},
        {job:'Восстановление данных (телефон перезагружается на "яблоке"',id:2},
        {job:'Перенос данных',id:3},
        {job:'Ремонт Face ID',id:4},
        {job:'Полировка экрана от царапин',id:5},
        {job:'Замена сенсорного стекла (стекло экрана)\n' +
                '\n',id:6},
        {job:'Замена сенсорного стекла + тачскрин (если сильно разбит или не работает сенсор)\n' +
                '\n',id:7},
        {job:'Замена дисплея (экрана), Original переклеенный\n' +
                '\n',id:8},
        {job:'Замена дисплея (экрана), Original переклеенный\n' +
                '\n',id:9},
        {job:'Замена дисплея (экрана), Original снятый\n' +
                '\n',id:10},
        {job:'Замена дисплея (экрана), Original снятый\n' +
                '\n',id:11},
        {job:'Устранение ошибки дисплея (проверка подлинности экрана)\n' +
                '\n',id:12},
        {job:'Замена дисплея (экрана), Original снятый' +
                '',id:13},
        {job:'Замена дисплейного модуля (TFT High Copy) копия высокого качества\n'
                ,id:14},
        {job:'Замена дисплейного модуля (OLED High Copy) копия высокого качества\n' +
                '\n' ,id:15},
        {job:'Замена аккумуляторной батареи\n' +
                '\n',id:16},
        {job:'Устранение ошибки АКБ (проверка подлинности аккумуляторной батареи)',id:17},
        {job:'Замена линзы основной камеры (стекло камеры)\n' +
                '\n',id:18},
        {job:'Замена основной (задней) камеры\n' +
                '\n',id:19},
        {job:'Замена сетки динамика\n' +
                '\n',id:20},
        {job:'Замена корпуса (только снятый оригинал)\n' +
                '\n',id:21},


    ]
    return {categories,products ,aboutWork}
}