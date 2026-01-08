import type { Category } from "../CategoriesType";
import type { CategoryType } from "../model/CategoryType";

export default class CategoriesDao {
    static cacheCategories:Array<Category>|undefined

    static getCategories() {
        return new Promise<Array<Category>>((resolve, _) => {
            if(typeof CategoriesDao.cacheCategories != 'undefined') {
                resolve(CategoriesDao.cacheCategories)
            }
            else setTimeout(() => {
                CategoriesDao.cacheCategories = [
                    {
                        "imageUrl": "/img/63919d998959edf19a9c083bdabb9b40617382a1_150_150.jpeg",
                        "title": "Жіноча мода",
                        "slug": "zhinocha-moda" 
                    },
                    {
                        "imageUrl": "/img/df81cd59bbbb8337504d4769731e2c077c5f73af_150_150.jpeg",
                        "title": "Чоловіча мода",
                        "slug": "cholovicha-moda" 
                    },
                    {
                        "imageUrl": "/img/b2ed67f90eebaa2ccbc33852b70ad18b9b07edd9_150_150.jpeg",
                        "title": "Товари для дому",
                        "slug": "tovary-dlya-domu" 
                    },
                    {
                        "imageUrl": "/img/74f8803315d3da8a5589bb1152b1cde9cbbbb7bd_150_150.jpeg",
                        "title": "Електроніка",
                        "slug": "electronika" 
                    },
                    {
                        "imageUrl": "/img/28a75eeff86524e7c678278337e2e137166818a2_150_150.jpeg",
                        "title": "Побутова техніка",
                        "slug": "pobutova-tehnika" 
                    },
                    {
                        "imageUrl": "/img/40d0584413005d0e0f38aa58acd06a1182636e38_150_150.jpeg",
                        "title": "Чохли та сумки для телефонів",
                        "slug": "chohly-ta-sumky-dlya-telefoniv" 
                    },
                    {
                        "imageUrl": "/img/37ab5435b33aac8d8c45838d5a982b8f3cf4d6c4_150_150.jpeg",
                        "title": "Взуття",
                        "slug": "vzuttya" 
                    },
                    {
                        "imageUrl": "/img/ad957554e45977c79a5b9c7a4732e49600c638dc_150_150.jpeg",
                        "title": "Краса",
                        "slug": "krasa" 
                    },
                    {
                        "imageUrl": "/img/c6c4fdaec669cf20a70f9717ab8b6018c32b28fc_150_150.jpeg",
                        "title": "Здоров'я",
                        "slug": "zdoroviya" 
                    },
                    {
                        "imageUrl": "/img/27ff8ba8d1cf3baedf3ddde52d923824cdd1b1f3_150_150.jpeg",
                        "title": "Будівництво та ремонт",
                        "slug": "budivnuctvo-ta-remont" 
                    },
                    {
                        "imageUrl": "/img/8b139399170374a080ee674f94c6810d3c5d1d45_150_150.jpeg",
                        "title": "Дитячі товари",
                        "slug": "dutyachi-tovaru" 
                    },
                    {
                        "imageUrl": "/img/bd54137abe3f2366e68bda791a2f4f8ef2e91167_150_150.jpeg",
                        "title": "Автомобілі та мотоцикли",
                        "slug": "avtomobili-ta-motociklu" 
                    },
                    {
                        "imageUrl": "/img/728393baf49a8e21fa9b11dd1cd439b54d5b62b9_150_150.jpeg",
                        "title": "Хобі та творчість",
                        "slug": "hobi-ta-tvorchist" 
                    },
                    {
                        "imageUrl": "/img/02bb5c113c50553ce75ad66b5301910ce8427a8b_150_150.jpeg",
                        "title": "Сумки та валізи",
                        "slug": "symku-ta-valisu" 
                    },
                    {
                        "imageUrl": "/img/f2481b4894e5ec3f004a6c3cdbd1c3f57b5ae6ab_150_150.jpeg",
                        "title": "Спорт та відпочинок",
                        "slug": "sport-ta-vidpochunok" 
                    },
                    {
                        "imageUrl": "/img/f25166d0b4f905b5b64d76fc369835e48378c466_150_150.jpeg",
                        "title": "Прикраси та біжутерія",
                        "slug": "prukrasu-ta-bizhuteriya" 
                    },
                    {
                        "imageUrl": "/img/3ac400979261ead29a88f44baa55eea30912c03e_150_150.jpeg",
                        "title": "Годинники",
                        "slug": "godunnuku" 
                    },
                    {
                        "imageUrl": "/img/3fac34a3d159ad26d549b497e0e282dd906e9d86_150_150.jpeg",
                        "title": "Товари для тварин",
                        "slug": "tovaru-dlya-tvarun" 
                    },
                    {
                        "imageUrl": "/img/30406bc01727578d761227ec704aa9fdb70d9ce8_150_150.jpeg",
                        "title": "Дача, сад та город",
                        "slug": "dacha-sad-ta-gorod" 
                    },
                    {
                        "imageUrl": "/img/ad62f7f55f1dd238605672f25a3345139ddc091d_150_150.jpeg",
                        "title": "Канцелярія",
                        "slug": "kancelyariya" 
                    },
                    {
                        "imageUrl": "/img/b09976ca9b3414bba6c3f5ec85957b7eddc3c197_150_150.jpeg",
                        "title": "Вибрані смартфони",
                        "slug": "vubrani-smartfonu" 
                    },
                    {
                        "imageUrl": "/img/91d32a5e6136df7a954d791ce491703edb98a2b6_150_150.jpeg",
                        "title": "Іграшки та ігри",
                        "slug": "igrashku-ta-igru" 
                    },
                    {
                        "imageUrl": "/img/e1336f1d621350a3c73e511f6fe8e602eb92d52b_150_150.jpeg",
                        "title": "Свята",
                        "slug": "svyata" 
                    },
                    {
                        "imageUrl": "/img/264a9e9c7ddc9b65bd71dff9e7473e56e8be6b9c_150_150.jpeg",
                        "title": "Xiaomi",
                        "slug": "xiaomi" 
                    },
                    {
                        "imageUrl": "/img/bff3503892bb9a2c735f7f728966c7cf92c1bed4_150_150.jpeg",
                        "title": "K-pop",
                        "slug": "k-pop" 
                    },
                    {
                        "imageUrl": "/img/3c89a51eb2702c72fd5bfa9018b243af1a5bcb42_150_150.jpeg",
                        "title": "Книги",
                        "slug": "knugu" 
                    } 
                ]
                resolve(CategoriesDao.cacheCategories)
            }, 300)
        })
    }

    static getCategory(slug: string) {
        return new Promise<CategoryType>((resolve,reject) => {
            setTimeout(() => {
                switch(slug) {
                    case 'zhinocha-moda' : resolve(({
                        products: [
                            {id: "4", 
                                name: "Фланелеві штани для сну на Хелловін з котиком для жінок - Теплий вельвет, повсякденний одяг для осені та зими", 
                                slug: "4",
                                price: 371,
                                rating: 3.1, 
                                reviewAmount: 111,
                                imgUrl: "/img/7e6ed7fe3f06572479e257a330ed85eb536e261a_400_400.jpeg"
                            },
                            {id: "5", 
                                name: "Затишні мультяшні тапочки з великими очима: Тепла пухнаста бавовна для пар взимку", 
                                slug: "5",
                                price: 321,
                                rating: 4.9, 
                                reviewAmount: 27,
                                imgUrl: "/img/0db58442f21321642b006e34f3b980322dd8af5c_400_400.jpeg"
                            },
                            {id: "6", 
                                name: "1 пара світлових шнурків для чоловіків, жінок, шнурків для взуття, що світяться, люмінесцентних світлодіодів, для кросівок, парусинових туфель, довжиною ниток 80 см/100 см/120 см/140 см", 
                                slug: "6",
                                price: 41,
                                rating: 4.8, 
                                reviewAmount: 206,
                                imgUrl: "/img/bedcccc1de3e34e29a7e0128249b5410e911d063_400_400.jpeg"
                            },
                            {id: "7", 
                                name: "Yogodlns Жіноча сумка зі штучного хутра. Зимова плюшева сумка через плече. Пухнаста сумка-мессенджер. Жіночі м’які пухнасті сумочки. Сумка для шопперів.", 
                                slug: "7",
                                price: 483,
                                rating: 4.3, 
                                reviewAmount: 4201,
                                imgUrl: "/img/2f716b2872dcb3d55fcf12830c5a106581fb2215_400_400.jpeg"
                            },
                            {id: "8", 
                                name: "Bison Denim Модний жіночий гаманець для кредитної картки з натуральної шкіри, жіночий гаманець великої місткості на подвійній блискавці", 
                                slug: "8",
                                price: 206,
                                rating: 4.6, 
                                reviewAmount: 110,
                                imgUrl: "/img/5458c368f45162a4d180c80e1d6f5ae974788fea_400_400.jpeg"
                            },
                            {id: "9", 
                                name: "Нове міні-зелене кільце з деревною жабою Жаба, відкриті каблучки для жінок, чоловіків, металеві милі тварини, регульоване кільце для пальців, ювелірні вироби, подарунок на день народження", 
                                slug: "9",
                                price: 46,
                                rating: 4.8, 
                                reviewAmount: 414,
                                imgUrl: "/img/4c427f94f972a708811bb883912c9fb158a3c60f_400_400.jpeg"
                            },
                            {id: "10", 
                                name: "Висока якість 9 кольорів M-3XL Однотонна футболка Жіночі бавовняні еластичні базові футболки Жіночі повсякденні топи Футболка з коротким рукавом Жіноча 2024", 
                                slug: "10",
                                price: 357,
                                rating: 4.8, 
                                reviewAmount: 654,
                                imgUrl: "/img/858dc28fa6475d949c9de5c5ecb6d6bf24122057_400_400.jpeg"
                            },
                            {id: "11", 
                                name: "1 пара шкарпеток на п'ять пальців Нові бавовняні жіночі спортивні шкарпетки з низьким вирізом", 
                                slug: "11",
                                price: 67,
                                rating: 4.7, 
                                reviewAmount: 5000,
                                imgUrl: "/img/39bf06617dc01616188d17b2669ccda736eafc72_400_400.jpeg"
                            },
                            {id: "1", 
                                name: "Нові старовинні прозорі комп'ютерні окуляри в оправі для жінок і чоловіків, окуляри проти синього світла, окуляри, оптичні окуляри", 
                                slug: "1",
                                price: 48,
                                rating: 4.7, 
                                reviewAmount: 3001,
                                imgUrl: "/img/2506069c78bcba478272fb8ce9f04c54eb825ec7_400_400.jpeg"
                            },
                            {id: "2", 
                                name: "Розкішні діамантові окуляри для читання Нові модні окуляри далекого зору для жінок, чоловіків, окуляри для пресбіопії, що блокують синє світло +1,0+1,5+4,0", 
                                slug: "2",
                                price: 48,
                                rating: 4.7, 
                                reviewAmount: 3001,
                                imgUrl: "/img/eba85193816c5de408e0e74d9b8544edc08484c9_400_400.jpeg"
                            },
                            {id: "3", 
                                name: "Шикарні жіночі сітчасті шкарпетки з леопардовим принтом - 1 упаковка: Легкий, міцний і м’який, підвищить ваш стиль і комфорт", 
                                slug: "3",
                                price: 52,
                                rating: 4.6, 
                                reviewAmount: 1001,
                                imgUrl: "/img/e3a50d722b4a2ec5c0c522543102ad15d0039ab0_400_400.jpeg"
                            },
                        ]
                    })); break;
                    case 'tovary-dlya-domu' : resolve(({
                        products: [
                            {id: "1", 
                                name: "Модні зимові норкові оксамитові рукавички з п’ятьма пальцями, плюшеві теплі морозостійкі рукавички, жіночі на відкритому повітрі, велосипедні однотонні рукавиці Wistiti", 
                                slug: "1",
                                price: 78,
                                rating: 4.9, 
                                reviewAmount: 127,
                                imgUrl: "/img/9f8c6ea18203b8ee935fcf3a701769dd06a89d64_400_400.jpeg"
                            },
                            {id: "2", 
                                name: "Розкішні діамантові окуляри для читання Нові модні окуляри далекого зору для жінок, чоловіків, окуляри для пресбіопії, що блокують синє світло +1,0+1,5+4,0", 
                                slug: "2",
                                price: 48,
                                rating: 4.7, 
                                reviewAmount: 3001,
                                imgUrl: "/img/9f8c6ea18203b8ee935fcf3a701769dd06a89d64_400_400.jpeg"
                            },
                        ]
                    })); break;
                    default: reject('"Slug not found')
                }
            }, 300)
        })
    }
}