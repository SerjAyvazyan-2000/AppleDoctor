
import iPhone1 from "../../src/assets/images/Untitled.jpg"
import earphones from "../../src/assets/images/earphones.png"
import iPhone from "../../src/assets/images/iphone14promax.jpg"
import ipad from "../../src/assets/images/ipad_mini.png"
import iMac1 from "../../src/assets/images/MacBook.jpg"
import iMac from "../../src/assets/images/imac24.png"


 export  const useInformation = () => {

    const  categories = [
        {
            name:'watch',
            img:iMac1,
            categories:'clock',
            id:1
        },
        {
            name:'AirPods',
            img:earphones,
            categories:'earphones',
            id:2
        },
        {
            name:'iPhone',
            img:iPhone,
            categories:'iPhone',
            id:3
        },
        {
            name:'ipad',
            img:ipad,
            categories:'ipad',
            id:4
        },
        {
            name:'MacBook',
            img:iPhone1,
            categories:'MacBook',
            id:5
        },
        {
            name:'iMac',
            img:iMac,
            categories:'iMac',
            id:6
        },
    ]

    return {categories}
}