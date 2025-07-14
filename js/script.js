// Current time in Kota, Rajasthan, India (Monday, July 14, 2025 at 9:17:33 PM IST)
// This will be used to determine if a restaurant is open or closed.
const currentTime = new Date();
// For demonstration, let's set a fixed time within operating hours to easily test "open" status.
// In a real app, you'd use new Date() directly.
// Example: Setting time to 3 PM for testing:
// currentTime.setHours(15, 0, 0, 0); // Sets to 3:00 PM
// You can uncomment the line below for real-time operation:
// const currentTime = new Date(); // Use this for actual current time

// Restaurant Data
const restaurantData = [
    {
        id: "anup-roll-shake-fast-food",
        name: "Anup Roll & Shake Fast Food",
        searchName: "anup roll & shake fast food",
        cuisine: "Fast Food",
        rating: 4.0,
        reviewCount: 100,
        reviewText: "4.0 ★ (100+ reviews)",
        location: "71, Vikas Nagar, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "12:00", end: "04:00" }],
        contact: ["+917088677105"],
        minOrder: 100,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/anup-roll-shake-fast-food-bidholi" }
        ],
        takesCallOrders: true,
        dishes: ["Rolls", "Shakes", "Burgers", "Wraps"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Anup_Roll.jpeg"
        ]
    },
    {
        id: "isquare-restaurant-and-cafe",
        name: "Isquare Restaurant And Cafe",
        searchName: "isquare restaurant and cafe",
        cuisine: "Multi-Cuisine",
        rating: 4.2,
        reviewCount: 150,
        reviewText: "4.2 ★ (150+ reviews)",
        location: "Post Office Road, Near I Square Girls Hostel, Bidholi",
        timings: [{ day: "daily", start: "13:00", end: "23:30" }],
        contact: ["+918858857775"],
        minOrder: 150,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/isquare-restaurant-and-cafe-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: ["Indian", "Chinese", "Continental", "Beverages"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare1.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare2.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare3.jpeg"
        ]
    },
    {
        id: "all-rounder-chacha-restaurant-cafe",
        name: "All Rounder Chacha Restaurant & Cafe",
        searchName: "all rounder chacha restaurant & cafe",
        cuisine: "North Indian",
        rating: 4.1,
        reviewCount: 120,
        reviewText: "4.1 ★ (120+ reviews)",
        location: "Near Bright Wave School, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "00:00", end: "24:00" }],
        contact: ["+918818037720"],
        minOrder: 120,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/all-rounder-chacha-restaurant-cafe-bidholi" }
        ],
        takesCallOrders: true,
        dishes: ["Roti", "Dal", "Sabzi", "Curry", "Biryani"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder1.jpeg",
        ]
    },
    {
        id: "maal-chooz",
        name: "Maal & Chooz",
        searchName: "maal & chooz",
        cuisine: "Fast Food, Snacks",
        rating: 4.0,
        reviewCount: 90,
        reviewText: "4.0 ★ (90+ reviews)",
        location: "Vikasnagar, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "12:00", end: "01:45" }],
        contact: ["+917737178155"],
        minOrder: 80,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/maal-chooz-bidholi" }
        ],
        takesCallOrders: true,
        dishes: ["Snacks", "Fast Food", "Sandwiches", "Momos"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Maal_&_Chooz.jpeg"
        ]
    },
    {
        id: "swadu-cafe",
        name: "Swadu Cafe",
        searchName: "swadu cafe",
        cuisine: "Cafe, Continental",
        rating: 4.3,
        reviewCount: 110,
        reviewText: "4.3 ★ (110+ reviews)",
        location: "Upper Kandoli, UPES Road, Near Girls Hostel, Bidholi",
        timings: [{ day: "daily", start: "11:00", end: "22:45" }],
        contact: ["+919119862486"],
        minOrder: 150,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/swadu-cafe-bidholi" }
        ],
        takesCallOrders: true,
        dishes: ["Coffee", "Sandwiches", "Pasta", "Desserts"],
        menuImages: []
    },
    {
        id: "romnik-pizza",
        name: "Romnik Pizza",
        searchName: "romnik pizza",
        cuisine: "Pizza, Fast Food",
        rating: 4.1,
        reviewCount: 85,
        reviewText: "4.1 ★ (85+ reviews)",
        location: "Near UPES, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "11:00", end: "23:00" }],
        contact: ["+917900688688"],
        minOrder: 200,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/romnik-pizza-bidholi" }
        ],
        takesCallOrders: true,
        dishes: ["Pizza", "Garlic Bread", "Pasta", "Wings"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza1.jpeg"
        ]
    },
    {
        id: "having-craving",
        name: "Having Craving",
        searchName: "having craving",
        cuisine: "Fast Food, Snacks",
        rating: 3.9,
        reviewCount: 75,
        reviewText: "3.9 ★ (75+ reviews)",
        location: "Shop 19, Bidholi Complex, Near UPES, Bidholi",
        timings: [{ day: "daily", start: "10:00", end: "23:00" }],
        contact: ["+918439333330"],
        minOrder: 100,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/having-craving-bidholi" }
        ],
        takesCallOrders: false,
        dishes: ["Burgers", "Fries", "Momos", "Sandwiches"],
        menuImages: []
    },
    {
        id: "emotions-confectionery",
        name: "Emotions Confectionery",
        searchName: "emotions confectionery",
        cuisine: "Bakery, Desserts",
        rating: 4.4,
        reviewCount: 130,
        reviewText: "4.4 ★ (130+ reviews)",
        location: "Near UPES, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "14:30", end: "21:15" }],
        contact: ["+919897776785", "+917505615583"],
        minOrder: 80,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/emotions-confectionery-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: ["Cakes", "Pastries", "Cookies", "Desserts"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary1.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary2.jpeg"
        ]
    },
    {
        id: "mentl-parathe-wale",
        name: "Mentl Parathe Wale",
        searchName: "mentl parathe wale",
        cuisine: "North Indian",
        rating: 4.2,
        reviewCount: 95,
        reviewText: "4.2 ★ (95+ reviews)",
        location: "Shop 20, Bidholi Complex, Vikasnagar, Bidholi",
        timings: [
            { day: "Mon-Fri, Sun", start: "11:00", end: "22:15" },
            { day: "Sat", start: "10:45", end: "22:15" }
        ],
        contact: ["+919151591507"],
        minOrder: 120,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/mentl-parathe-wale-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: ["Paratha", "Dal", "Paneer", "Lassi"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl1.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl2.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl3.jpeg",
        ]
    },
    {
        id: "chai-sutta-bar",
        name: "Chai Sutta Bar",
        searchName: "chai sutta bar",
        cuisine: "Cafe, Beverages",
        rating: 4.3,
        reviewCount: 140,
        reviewText: "4.3 ★ (140+ reviews)",
        location: "Bidholi Complex, Near Bidholi, Dehradun",
        timings: [
            { day: "Mon-Sat", start: "10:00", end: "23:00" },
            { day: "Sun", start: "12:00", end: "23:00" }
        ],
        contact: ["+917078365600"],
        minOrder: 80,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/chai-sutta-bar-1-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: ["Tea", "Coffee", "Snacks", "Shakes"],
        menuImages: [
            "https://i.imgur.com/bcd890.jpg",
            "https://i.imgur.com/efg123.jpg"
        ]
    },
    {
        id: "mahi",
        name: "Mahi",
        searchName: "mahi",
        cuisine: "Fast Food",
        rating: 4.0,
        reviewCount: 50,
        reviewText: "4.0 ★ (50+ reviews)",
        location: "Bidholi, Misraspatti, Uttarakhand 248197",
        timings: null,
        contact: ["+917895334037"],
        minOrder: 200,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi1.jpeg",
        ]
    },
    {
        id: "mayank",
        name: "Mayank",
        searchName: "mayank",
        cuisine: "Multi-Cuisine",
        rating: 4.1,
        reviewCount: 80,
        reviewText: "4.1 ★ (80+ reviews)",
        location: "Kharakhet, Bidholi, Uttarakhand 248197",
        timings: [{ day: "daily", start: "09:00", end: "21:00" }],
        contact: ["+918958973063", "+917983437338"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Swiggy", link: "https://www.swiggy.com/city/dehradun/mayank-restaurant-bidholi-rest971877" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank1.jpeg",
        ]
    },
    {
        id: "meenakshi",
        name: "Meenakshi",
        searchName: "meenakshi",
        cuisine: "North Indian",
        rating: 4.0,
        reviewCount: 60,
        reviewText: "4.0 ★ (60+ reviews)",
        location: "UPES petroleum, bidholi, Prem Nagar, Dehradun, Uttarakhand 248007",
        timings: [{ day: "daily", start: "11:00", end: "22:00" }],
        contact: ["+918394024356"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "forkful",
        name: "Forkful",
        searchName: "forkful",
        cuisine: "Fast Food",
        rating: 4.2,
        reviewCount: 90,
        reviewText: "4.2 ★ (90+ reviews)",
        location: "Chowk, opp. Woodstock hostel, Bidholi, Dehradun, Uttarakhand 248001",
        timings: [{ day: "daily", start: null, end: "03:00" }], // "Open till 3AM" - start time unknown
        contact: ["+919528276454"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/forkfull-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Forkful.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Forkful1.jpeg",
        ]
    },
    {
        id: "tnb",
        name: "TNB",
        searchName: "tnb",
        cuisine: "Cafe",
        rating: 4.1,
        reviewCount: 70,
        reviewText: "4.1 ★ (70+ reviews)",
        location: "Upper Kandoli Bidholi Road Premnagar, Uttarakhand 248007",
        timings: null,
        contact: ["+917906978010"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/tnb-taste-best-cafe-prem-nagar" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "salview",
        name: "Salview",
        searchName: "salview",
        cuisine: "Multi-Cuisine",
        rating: 4.0,
        reviewCount: 50,
        reviewText: "4.0 ★ (50+ reviews)",
        location: "Bidholi, Kharakhet, Uttarakhand 248006",
        timings: [{ day: "daily", start: "08:00", end: "00:00" }],
        contact: ["+917452900298"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "mr-burger",
        name: "Mr. Burger",
        searchName: "mr burger",
        cuisine: "Fast Food",
        rating: 3.9,
        reviewCount: 40,
        reviewText: "3.9 ★ (40+ reviews)",
        location: null,
        timings: null,
        contact: ["+918191820830"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: ["Burgers", "Fries", "Shakes"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger1.jpeg",
        ]
    },
    {
        id: "blt",
        name: "BLT",
        searchName: "blt",
        cuisine: "Cafe",
        rating: 4.3,
        reviewCount: 100,
        reviewText: "4.3 ★ (100+ reviews)",
        location: "Shop No. 17, Comprising in abadi land bearing Khasra Nos, 518 Ka, Vikasnagar, Dehradun, Uttarakhand 248007",
        timings: [
            { day: "Mon-Fri", start: "10:00", end: "23:00" },
            { day: "Sun", start: "12:00", end: "20:00" }
        ],
        contact: ["+919867854356"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/big-little-things-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: null // Corrected as the original image was for Pizza Hub
    },
    {
        id: "tif",
        name: "TIF",
        searchName: "tif",
        cuisine: null,
        rating: null,
        reviewCount: null,
        reviewText: "Not rated yet",
        location: null,
        timings: null,
        contact: null,
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: false,
        dishes: null,
        menuImages: []
    },
    {
        id: "pizza-hub",
        name: "Pizza Hub",
        searchName: "pizza hub",
        cuisine: "Pizza",
        rating: 4.0,
        reviewCount: 80,
        reviewText: "4.0 ★ (80+ reviews)",
        location: "Dehradun Township- Bidholi, Majhaun Rd, Misraspatti, Uttarakhand",
        timings: [{ day: "daily", start: "11:00", end: "23:00" }],
        contact: ["+917900442255"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/pizza-hub-bidholi" }
        ],
        takesCallOrders: true,
        dishes: ["Pizzas", "Sides", "Beverages"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaHub.jpeg",
        ]
    },
    {
        id: "big-bite",
        name: "Big Bite",
        searchName: "big bite",
        cuisine: "Fast Food",
        rating: 3.9,
        reviewCount: 60,
        reviewText: "3.9 ★ (60+ reviews)",
        location: "Bidholi, Misraspatti, Uttarakhand 248197",
        timings: [{ day: "daily", start: "11:00", end: "23:00" }],
        contact: ["+919756799446"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "spicy",
        name: "Spicy",
        searchName: "spicy",
        cuisine: "North Indian",
        rating: 4.0,
        reviewCount: 70,
        reviewText: "4.0 ★ (70+ reviews)",
        location: "CX78+9QW, Bidholi, Misraspatti, Uttarakhand 248197",
        timings: [{ day: "daily", start: "09:00", end: "21:30" }],
        contact: ["+919266951239"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/spicy-bowl-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "snacks-adda",
        name: "Snacks Adda",
        searchName: "snacks adda",
        cuisine: "Cafe",
        rating: 4.1,
        reviewCount: 50,
        reviewText: "4.1 ★ (50+ reviews)",
        location: "Vikasnagar, Bidholi, Uttarakhand 248007",
        timings: [
            { day: "Mon - Sun", start: "00:00", end: "03:00" },
            { day: "Mon - Sun", start: "12:15", end: "23:45" }
        ],
        contact: ["+91975800710", "+918585992216"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/snacks-adda-bidholi" }
        ],
        takesCallOrders: false,
        dishes: ["Chinese", "North Indian", "Rolls", "Momos", "Shake"],
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda1.jpeg",
        ]
    },
    {
        id: "anavrin",
        name: "Anavrin",
        searchName: "anavrin",
        cuisine: null,
        rating: null,
        reviewCount: null,
        reviewText: "Not rated yet",
        location: null,
        timings: null,
        contact: null,
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: false,
        dishes: null,
        menuImages: []
    },
    {
        id: "sandeep-fast-food",
        name: "Sandeep Fast Food",
        searchName: "sandeep fast food",
        cuisine: "Fast Food",
        rating: 3.8,
        reviewCount: 40,
        reviewText: "3.8 ★ (40+ reviews)",
        location: "CX79+5G3, nearby post office, Bidholi, Misraspatti, Uttarakhand 248007",
        timings: null,
        contact: ["+919627143215", "+917895632463"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sandeep.jpeg",
        ]
    },
    {
        id: "shubh-pahadi",
        name: "Shubh Pahadi",
        searchName: "shubh pahadi",
        cuisine: "North Indian",
        rating: 4.2,
        reviewCount: 90,
        reviewText: "4.2 ★ (90+ reviews)",
        location: "Shubh pahadi restaurant, Bidholi, Uttarakhand 248007",
        timings: [{ day: "daily", start: "00:00", end: "24:00" }],
        contact: ["+917409708807", "+918156053992"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ShubhPahadi.jpeg",
        ]
    },
    {
        id: "deepak",
        name: "Deepak",
        searchName: "deepak",
        cuisine: "North Indian",
        rating: 4.0,
        reviewCount: 80,
        reviewText: "4.0 ★ (80+ reviews)",
        location: "UPES Campus, Bidholi, Dehradun, Uttarakhand 248007",
        timings: [{ day: "daily", start: "00:00", end: "24:00" }],
        contact: ["+916396591060"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak1.jpeg",
        ]
    },
    {
        id: "kanoha",
        name: "Kanoha",
        searchName: "kanoha",
        cuisine: "Cafe",
        rating: 4.3,
        reviewCount: 100,
        reviewText: "4.3 ★ (100+ reviews)",
        location: "Bidholi Rd, Kharakhet, Misraspatti, Uttarakhand 248007",
        timings: [{ day: "daily", start: "11:00", end: "22:00" }],
        contact: ["+919870601929"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/konoha-cafe-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha1.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha2.jpeg",
        ]
    },
    {
        id: "gym-diet",
        name: "Gym diet",
        searchName: "gym diet",
        cuisine: "Healthy Food",
        rating: 4.4,
        reviewCount: 120,
        reviewText: "4.4 ★ (120+ reviews)",
        location: "CX7C+29M, Bidholi, Kharakhet, Uttarakhand 248197",
        timings: [{ day: "daily", start: "06:00", end: "23:30" }],
        contact: ["+919759720152"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/gym-diet-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/GymDiet.jpeg",
        ]
    },
    {
        id: "pizza-dilite",
        name: "Pizza Dilite",
        searchName: "pizza dilite",
        cuisine: "Pizza",
        rating: 4.1,
        reviewCount: 80,
        reviewText: "4.1 ★ (80+ reviews)",
        location: "CX7C+5X5, Bidholi Rd, Kharakhet, Uttarakhand 248197",
        timings: [
            { day: "Mon-Sat", start: "09:00", end: "22:00" },
            { day: "Sun", start: "09:00", end: "04:00" }
        ],
        contact: ["+917037455700"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaDilite.jpeg",
        ]
    },
    {
        id: "4-loser",
        name: "4 Loser",
        searchName: "4 loser",
        cuisine: "Cafe",
        rating: 4.2,
        reviewCount: 90,
        reviewText: "4.2 ★ (90+ reviews)",
        location: "near, via, near Sai Mandir, Prem Nagar, Bidholi, Dehradun, Uttarakhand 248007",
        timings: [
            { day: "Mon-Fri", start: "08:00", end: "13:00" },
            { day: "Sun", start: "10:00", end: "14:00" }
        ],
        contact: ["+917906071734"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/4-losers-restaurant-cafe-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser1.jpeg",
        ]
    },
    {
        id: "indie-cafe",
        name: "Indie Cafe",
        searchName: "indie cafe",
        cuisine: "Cafe",
        rating: 4.3,
        reviewCount: 110,
        reviewText: "4.3 ★ (110+ reviews)",
        location: "Bishanpur, Bidholi Rd, near Royal Stay hostel, Dehradun, Uttarakhand 248007",
        timings: [{ day: "daily", start: "03:00", end: "23:30" }],
        contact: ["+917409181819"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Swiggy", link: "https://www.swiggy.com/city/dehradun/the-indie-cafe-deheradun-township-bidholi-rest875255" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/IndieCafe.jpeg",
        ]
    },
    {
        id: "burger-belly",
        name: "Burger Belly",
        searchName: "burger belly",
        cuisine: "Fast Food",
        rating: 4.0,
        reviewCount: 70,
        reviewText: "4.0 ★ (70+ reviews)",
        location: "Bidholi, Dehradun, Uttarakhand 248007",
        timings: [{ day: "daily", start: "14:00", end: "04:00" }],
        contact: null,
        minOrder: null,
        deliveryPlatforms: [
            { name: "Swiggy", link: "https://www.swiggy.com/city/dehradun/burger-belly-bidholi-rest999481" }
        ],
        takesCallOrders: false,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BurgerBelly.jpeg",
        ]
    },
    {
        id: "bunk-cafe",
        name: "Bunk Cafe",
        searchName: "bunk cafe",
        cuisine: "Cafe",
        rating: 4.4,
        reviewCount: 130,
        reviewText: "4.4 ★ (130+ reviews)",
        location: "near Avalon hostel, kandoli, vishanpur, Dehradun, Kharakhet, Uttarakhand 248001",
        timings: [{ day: "daily", start: "17:00", end: "04:00" }],
        contact: ["+919891610696", "+917895566236"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/bunk-cafe-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BunkCafe.jpeg",
        ]
    },
    {
        id: "tongue-n-taste",
        name: "Tongue'N Taste",
        searchName: "tongue n taste",
        cuisine: "Multi-Cuisine",
        rating: 4.2,
        reviewCount: 100,
        reviewText: "4.2 ★ (100+ reviews)",
        location: "9XW9+4C9, Infront of Jiya Hostel Upper, Kandoli, Tibet colony, Saundhon wali, Dehradun, Uttarakhand",
        timings: [{ day: "daily", start: "09:30", end: "23:00" }],
        contact: ["+918439010011"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/toungue-n-taste-bidholi" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT1.jpeg",
        ]
    },
    {
        id: "threesome",
        name: "Threesome",
        searchName: "threesome",
        cuisine: "Multi-Cuisine",
        rating: 4.3,
        reviewCount: 120,
        reviewText: "4.3 ★ (120+ reviews)",
        location: "Bidholi Road, Dehradun, Pondha, Uttarakhand 248007",
        timings: [{ day: "daily", start: "10:00", end: "04:00" }],
        contact: ["+918885552368"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Swiggy", link: "https://www.swiggy.com/city/dehradun/threesome-you-me-and-food-bidholi-rest971021" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "panjtara",
        name: "Panjtara",
        searchName: "panjtara",
        cuisine: "Cafe",
        rating: 4.2,
        reviewCount: 80,
        reviewText: "4.2 ★ (80+ reviews)",
        location: "House 86, Upper Colony, Kandhauli, Vikas Nagar, Dehradun",
        timings: null,
        contact: ["+918625841928"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/cafe-panjtara-vikas-nagar" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara1.jpeg",
        ]
    },
    {
        id: "kandoli-adda",
        name: "Kandoli Adda",
        searchName: "kandoli adda",
        cuisine: "Multi-Cuisine",
        rating: 4.3,
        reviewCount: 110,
        reviewText: "4.3 ★ (110+ reviews)",
        location: "Gosai Gaon, Opposite Bella Vista Girls Hostel, Kandoli, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "11:00", end: "21:15" }],
        contact: ["+918393870202"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/kandoli-adda-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda1.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda2.jpeg",
        ]
    },
    {
        id: "cafe-sky-view",
        name: "Cafe Sky View",
        searchName: "cafe sky view",
        cuisine: "Cafe",
        rating: 4.4,
        reviewCount: 130,
        reviewText: "4.4 ★ (130+ reviews)",
        location: "Cafe Sky, View Upper, Kandoli Gusain Gaon, Bidholi, Dehradun",
        timings: [{ day: "daily", start: "10:30", end: "22:45" }],
        contact: ["+918171652916"],
        minOrder: null,
        deliveryPlatforms: [
            { name: "Zomato", link: "https://www.zomato.com/dehradun/cafe-sky-view-bidholi/order" }
        ],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView1.jpeg",
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView2.jpeg"
        ]
    },
    {
        id: "kainchi-products-radhey-confectionary",
        name: "Kainchi Products/ Radhey Confectionary",
        searchName: "kainchi products",
        cuisine: "Bakery",
        rating: 4.0,
        reviewCount: 50,
        reviewText: "4.0 ★ (50+ reviews)",
        location: null,
        timings: null,
        contact: ["+918630273212"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: []
    },
    {
        id: "sona-restaurant",
        name: "Sona Restaurant",
        searchName: "sona restaurant",
        cuisine: "Multi-Cuisine",
        rating: 4.0,
        reviewCount: 50,
        reviewText: "4.0 ★ (50+ reviews)",
        location: null,
        timings: null,
        contact: ["+918057411534", "+919259039141"],
        minOrder: null,
        deliveryPlatforms: [],
        takesCallOrders: true,
        dishes: null,
        menuImages: [
            "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sona.jpeg",
        ]
    },
];
// Info content for modals
const infoContent = {
    about: {
        title: "About FoodieSpot",
        content: `
            <p>FoodieSpot is your ultimate guide to discovering the best food options around UPES campus, Dehradun.</p>
            <p>Our mission is to help students and faculty find great places to eat, with detailed information about each outlet including menus, prices, and ordering options.</p>
            <p>This platform was created by UPES students for UPES students, with love for good food!</p>
        `
    },
    contact: {
        title: "Contact Us",
        content: `
            <p><i class="fas fa-envelope"></i> Email: contact@foodiespot.upes</p>
            <p><i class="fas fa-map-marker-alt"></i> Address: UPES Bidholi Campus, Dehradun</p>
            <p>We'd love to hear your feedback and suggestions for improving FoodieSpot!</p>
        `
    },
    privacy: {
        title: "Privacy Policy",
        content: `
            <p>FoodieSpot respects your privacy. This policy explains how we collect, use, and protect your information.</p>
            <h4>Information We Collect</h4>
            <p>We may collect basic usage data to improve our service, but we don't store personal information without your consent.</p>
            <h4>How We Use Information</h4>
            <p>Any data collected is used solely to enhance your experience on FoodieSpot and improve our services.</p>
        `
    },
    terms: {
        title: "Terms of Service",
        content: `
            <p>By using FoodieSpot, you agree to these terms:</p>
            <h4>Content Accuracy</h4>
            <p>We strive to provide accurate information but cannot guarantee all details are current or correct.</p>
            <h4>User Responsibilities</h4>
            <p>Users are responsible for verifying restaurant details before visiting or ordering.</p>
            <h4>Service Modifications</h4>
            <p>We reserve the right to modify or discontinue the service at any time.</p>
        `
    }
};

// Track current search state
let currentSearchTerm = '';
let currentFilter = 'all';

// --- Utility Functions ---

/**
 * Checks if a restaurant is currently open based on its timings.
 * @param {string} timings - The timing string (e.g., "12:00PM - 4:00AM", "24 Hours").
 * @returns {{isOpen: boolean, closeTime: string}}
 */
function checkRestaurantStatus(timings) {
    if (timings === "24 Hours") {
        return { isOpen: true, closeTime: "24 Hours" };
    }
    if (timings.includes("Closed") || timings.includes("Not specified")) {
        return { isOpen: false, closeTime: "Closed" };
    }

    const [openStr, closeStr] = timings.split(' - ');
    if (!openStr || !closeStr) {
        return { isOpen: false, closeTime: "N/A" };
    }

    try {
        const parseTime = (timeStr) => {
            const date = new Date(currentTime.toDateString() + ' ' + timeStr);
            return date;
        };

        let openTime = parseTime(openStr);
        let closeTime = parseTime(closeStr);

        // Handle overnight timings (e.g., 12PM - 4AM)
        if (closeTime.getHours() < openTime.getHours()) {
            closeTime.setDate(closeTime.getDate() + 1); // Add a day to the close time
        }

        // Adjust openTime for previous day if current time is past midnight but before closeTime
        if (currentTime.getHours() < openTime.getHours() && currentTime.getHours() < closeTime.getHours()) {
            openTime.setDate(openTime.getDate() - 1);
        }

        const isOpen = currentTime >= openTime && currentTime < closeTime;
        const displayCloseTime = closeTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

        return { isOpen, closeTime: displayCloseTime };

    } catch (e) {
        console.error("Error parsing timings:", timings, e);
        return { isOpen: false, closeTime: "N/A" };
    }
}


// --- Page Navigation ---

function showPage(pageId, triggerEvent = null) {
    // Hide all pages
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('restaurantsPage').style.display = 'none';
    document.getElementById('addOutletPage').style.display = 'none'; // Hide add outlet page too

    // Show selected page
    document.getElementById(pageId + 'Page').style.display = 'block';

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        // Check for 'add outlet' specifically as textContent is 'Add Outlet'
        const btnText = btn.textContent.toLowerCase();
        if ((pageId === 'home' && btnText.includes('home')) ||
            (pageId === 'restaurants' && btnText.includes('restaurants')) ||
            (pageId === 'addOutlet' && btnText.includes('outlet'))) {
            btn.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);

    // Logic for search/filters when navigating to restaurants page
    if (pageId === 'restaurants') {
        const homeSearchInput = document.getElementById('homeSearchInput');
        const restaurantSearchInput = document.getElementById('restaurantSearchInput');

        // If navigating from a search or filter on the home page
        if (triggerEvent && (triggerEvent.target.classList.contains('browse-all-btn') || triggerEvent.target.closest('#homeFilterButtons'))) {
            restaurantSearchInput.value = homeSearchInput.value; // Transfer search term
            currentSearchTerm = homeSearchInput.value.toLowerCase();
            // The filter would have already been set by the filter button handler
        } else if (triggerEvent && triggerEvent.target.classList.contains('nav-btn') && triggerEvent.target.textContent.toLowerCase().includes('restaurants')) {
            // If navigating directly to restaurants page via nav button, and no home search was active, reset everything
            if (!homeSearchInput.value) { // Only reset if home search was empty
                restaurantSearchInput.value = '';
                currentSearchTerm = '';
                currentFilter = 'all';
                // Deactivate all filter buttons and activate 'All' on the restaurants page
                document.querySelectorAll('#restaurantsPage .filter-btn').forEach(b => b.classList.remove('active'));
                const allFilterBtn = document.querySelector('#restaurantsPage .filter-btn[data-filter="all"]');
                if (allFilterBtn) allFilterBtn.classList.add('active');
            } else {
                // If there's text in home search, transfer it
                restaurantSearchInput.value = homeSearchInput.value;
                currentSearchTerm = homeSearchInput.value.toLowerCase();
            }
        }
        updateRestaurantDisplay();
    }
}


// --- Modals ---

// Show info modal (About, Contact, Privacy, Terms)
function showInfoModal(type) {
    const info = infoContent[type];
    if (!info) return;

    document.getElementById('infoModalTitle').textContent = info.title;
    document.getElementById('infoModalContent').innerHTML = info.content;
    document.getElementById('infoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
    document.getElementById('infoModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Restaurant Detail Modal
function showRestaurantModal(data) { // Pass the whole data object
    document.getElementById('modalRestaurantName').textContent = data.name;
    document.getElementById('modalRestaurantCuisine').textContent = data.cuisine;
    document.getElementById('modalRestaurantRating').textContent = data.rating;
    document.getElementById('modalRestaurantLocation').textContent = data.location;
    document.getElementById('modalRestaurantTimings').textContent = data.timings;
    document.getElementById('modalRestaurantContact').textContent = data.contact;
    document.getElementById('modalRestaurantMinOrder').textContent = data.minOrder;

    const onlineOrderButtonsDiv = document.getElementById('onlineOrderButtons');
    onlineOrderButtonsDiv.innerHTML = ''; // Clear previous buttons

    if (data.swiggyLink) {
        const swiggyBtn = document.createElement('a');
        swiggyBtn.href = data.swiggyLink;
        swiggyBtn.target = '_blank';
        swiggyBtn.className = 'order-link swiggy';
        swiggyBtn.innerHTML = '<i class="fas fa-shopping-bag"></i> Order on Swiggy';
        onlineOrderButtonsDiv.appendChild(swiggyBtn);
    }

    if (data.zomatoLink) {
        const zomatoBtn = document.createElement('a');
        zomatoBtn.href = data.zomatoLink;
        zomatoBtn.target = '_blank';
        zomatoBtn.className = 'order-link zomato';
        zomatoBtn.innerHTML = '<i class="fas fa-pizza-slice"></i> Order on Zomato';
        onlineOrderButtonsDiv.appendChild(zomatoBtn);
    }

    // Hide the container if no links are present
    if (!data.swiggyLink && !data.zomatoLink) {
        onlineOrderButtonsDiv.style.display = 'none';
    } else {
        onlineOrderButtonsDiv.style.display = 'flex'; // Show if at least one link
    }


    document.getElementById('modalRestaurantDishes').textContent = data.dishes;

    const callOrderBadge = document.getElementById('modalRestaurantCallOrder');
    callOrderBadge.textContent = data.takesCallOrders ? 'Yes' : 'No';
    callOrderBadge.className = data.takesCallOrders ? 'badge yes' : 'badge no';

    // Update menu images
    const menuImagesSection = document.getElementById('menuImagesSection');
    const menuGallery = document.getElementById('menuGallery');
    menuGallery.innerHTML = '';

    if (data.menuImages && data.menuImages.length > 0) {
        menuImagesSection.style.display = 'block';

        data.menuImages.forEach(imageUrl => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'menu-image';
            imageContainer.onclick = () => openImageModal(imageUrl);

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${data.name} menu`;

            imageContainer.appendChild(img);
            menuGallery.appendChild(imageContainer);
        });
    } else {
        menuImagesSection.style.display = 'none';
    }

    document.getElementById('restaurantModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('restaurantModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Image Modal Functions
function openImageModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('imageModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    document.getElementById('imageModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// --- Search and Filter ---

// Improved search functionality
function handleSearch(event) {
    const searchInput = event.target;
    // The clear button is typically a sibling element or nested. Assuming it's the next sibling for now.
    // If your HTML structure for search bars changes, you might need to adjust this selector.
    const clearBtn = searchInput.parentElement.querySelector('.clear-search-btn');

    if (clearBtn) {
        clearBtn.classList.toggle('visible', searchInput.value.length > 0);
    }

    currentSearchTerm = searchInput.value.toLowerCase();

    // If searching from home page input, and it's not empty, navigate to restaurants page
    if (searchInput.id === 'homeSearchInput') {
        if (currentSearchTerm.length > 0) {
            document.getElementById('restaurantSearchInput').value = searchInput.value;
            showPage('restaurants'); // This will trigger updateRestaurantDisplay
        } else {
            // If home search is cleared, and we are on restaurants page, clear restaurant search
            if (document.getElementById('restaurantsPage').style.display === 'block') {
                document.getElementById('restaurantSearchInput').value = '';
                currentSearchTerm = ''; // Reset currentSearchTerm
                updateRestaurantDisplay(); // Update display
            }
        }
    } else if (searchInput.id === 'restaurantSearchInput') {
        updateRestaurantDisplay();
    }
}

// Clear search input
function clearSearch(page) {
    const inputId = page === 'home' ? 'homeSearchInput' : 'restaurantSearchInput';
    const input = document.getElementById(inputId);
    input.value = '';
    const clearBtn = input.parentElement.querySelector('.clear-search-btn');
    if (clearBtn) {
        clearBtn.classList.remove('visible');
    }
    currentSearchTerm = '';
    // If clearing search on home, ensure filter remains 'all' for next restaurant page navigation
    if (page === 'home') {
        currentFilter = 'all';
        // Deselect all filter buttons on home and select 'All'
        document.querySelectorAll('#homeFilterButtons .filter-btn').forEach(b => b.classList.remove('active'));
        const allHomeFilterBtn = document.querySelector('#homeFilterButtons .filter-btn[data-filter="all"]');
        if (allHomeFilterBtn) allHomeFilterBtn.classList.add('active');
    }
    updateRestaurantDisplay();
}

// Filter button functionality (for both home and restaurants page)
document.querySelectorAll('.filter-buttons').forEach(filterContainer => {
    filterContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('filter-btn')) {
            const clickedFilter = event.target.dataset.filter;

            // Remove active class from all filter buttons in this container
            filterContainer.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            // Add active class to the clicked button
            event.target.classList.add('active');

            currentFilter = clickedFilter;

            // If a filter button on the home page is clicked, navigate to restaurants page
            if (filterContainer.id === 'homeFilterButtons') {
                // Ensure the search input on the restaurants page is synced if a search was active on home
                document.getElementById('restaurantSearchInput').value = document.getElementById('homeSearchInput').value;
                currentSearchTerm = document.getElementById('homeSearchInput').value.toLowerCase();
                showPage('restaurants', event); // Pass event to showPage to handle search/filter transfer
            } else {
                updateRestaurantDisplay(); // If on restaurants page, just update display
            }
        }
    });
});


// --- Restaurant Grid & Card Creation ---

// Function to generate and append a single restaurant card
function createRestaurantCard(data) {
    const card = document.createElement('div');
    card.className = 'outlet-card';
    card.setAttribute('data-name', data.searchName);
    card.setAttribute('data-cuisine', data.cuisine.toLowerCase());
    card.setAttribute('data-dishes', data.dishes ? data.dishes.toLowerCase() : ''); // Added data-dishes

    const phoneOrderIcon = data.takesCallOrders ? '<i class="fas fa-phone-alt"></i>' : '<i class="fas fa-times-circle"></i>';
    const phoneOrderStatus = data.takesCallOrders ? 'Accepts phone orders' : 'No phone orders';

    // Get current status using the new utility function
    const { isOpen, closeTime } = checkRestaurantStatus(data.timings);
    const statusClass = isOpen ? "open" : "closed";
    const statusText = isOpen ? `Open • Closes at ${closeTime}` : `Closed ${closeTime !== "Closed" ? `• Opens at ${data.timings.split(' - ')[0]}` : ''}`; // More detailed closed status

    card.innerHTML = `
        <button class="favorite-btn" onclick="event.stopPropagation(); toggleFavorite(this)">
            <i class="far fa-heart"></i>
        </button>
        <div class="outlet-header">
            <h2 class="outlet-name">${data.name}</h2>
            <p class="outlet-cuisine">${data.cuisine}</p>
            <span class="rating">${data.rating}</span>
            <div class="phone-order">
                ${phoneOrderIcon} ${phoneOrderStatus}
            </div>
        </div>
        <div class="outlet-details">
            <div class="detail-row">
                <span class="detail-label">Min. Order:</span>
                <span class="detail-value">${data.minOrder}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location:</span>
                <span class="detail-value">${data.location}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status:</span>
                <span class="status ${statusClass}">${statusText}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => showRestaurantModal(data));

    return card;
}


// Main function to populate the restaurant grid
function populateRestaurantGrid() {
    const gridContainer = document.getElementById('restaurantsGrid');
    gridContainer.innerHTML = ''; // Clear existing cards

    restaurantData.forEach(data => {
        const card = createRestaurantCard(data);
        gridContainer.appendChild(card);
    });
}

// Main function to update restaurant display based on current filters and search
function updateRestaurantDisplay() {
    const outletCards = document.querySelectorAll('#restaurantsGrid .outlet-card');
    let visibleCount = 0;

    outletCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const cuisine = card.dataset.cuisine.toLowerCase();
        const dishes = card.dataset.dishes?.toLowerCase() || '';

        // Check if matches current search term
        const matchesSearch = !currentSearchTerm ||
                               name.includes(currentSearchTerm) ||
                               cuisine.includes(currentSearchTerm) ||
                               dishes.includes(currentSearchTerm);

        // Check if matches current filter
        const matchesFilter = currentFilter === 'all' ||
                               cuisine.includes(currentFilter); // Assuming filter is always a cuisine

        if (matchesSearch && matchesFilter) {
            card.style.display = 'flex'; // Use flex for proper layout
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update search results message
    const messageElement = document.getElementById('searchResultsMessage');
    // Only show message if a search term OR a filter (other than 'all') is active
    if (currentSearchTerm || currentFilter !== 'all') {
        messageElement.style.display = 'block';
        let messageText = '';

        const filterDescription = currentFilter === 'all' ? '' : `${currentFilter} `;
        const searchDescription = currentSearchTerm ? ` matching "${currentSearchTerm}"` : '';

        if (visibleCount === 0) {
            messageElement.textContent = `No ${filterDescription}results found${searchDescription}.`;
            messageElement.className = 'search-results-message show no-results';
        } else {
            messageElement.textContent = `Found ${visibleCount} ${filterDescription}restaurant${visibleCount !== 1 ? 's' : ''}${searchDescription}.`;
            messageElement.className = 'search-results-message show results-found';
        }
    } else {
        messageElement.style.display = 'none'; // Hide message if no search or filter
    }
}


// ====== THEME TOGGLE FUNCTIONALITY ======

const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = '<i class="fas fa-moon"></i>'; // Make sure you have Font Awesome linked
const sunIcon = '<i class="fas fa-sun"></i>';

// Function to apply the saved theme on page load
function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? sunIcon : moonIcon;
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
});

// Toggle favorite button
function toggleFavorite(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        // The heart color is defined in CSS .favorite-btn. If you want it to change
        // to a 'filled' color, you might need a separate class or specific CSS for .fas.fa-heart
        // Example: btn.style.color = '#ff4757'; // This directly sets color, but CSS is preferred
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        // Example: btn.style.color = 'var(--primary-color)'; // Resets to default from CSS
    }
}


// --- Add Outlet Form Handler ---
document.addEventListener('DOMContentLoaded', function() {
    const addOutletForm = document.getElementById('addOutletForm');
    if (addOutletForm) {
        addOutletForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formMessage = document.getElementById('formMessage');
            formMessage.style.display = 'block';

            const outletName = document.getElementById('outletName').value;
            const outletCuisine = document.getElementById('outletCuisine').value;
            const outletLocation = document.getElementById('outletLocation').value;
            const yourEmail = document.getElementById('yourEmail').value;

            if (outletName && outletCuisine && outletLocation && yourEmail) {
                // In a real application, you would send this data to a server
                console.log('New Outlet Suggestion:', {
                    name: outletName,
                    cuisine: outletCuisine,
                    location: outletLocation,
                    email: yourEmail
                });

                formMessage.textContent = 'Thank you for your suggestion! We will review it shortly.';
                formMessage.className = 'form-message success';
                addOutletForm.reset(); // Clear the form
            } else {
                formMessage.textContent = 'Please fill in all required fields.';
                formMessage.className = 'form-message error';
            }
        });
    }

    // --- Initialization on DOM Content Loaded ---
    populateRestaurantGrid(); // Populate grid with all restaurants initially
    applyInitialTheme();     // Apply theme from localStorage

    showPage('home'); // Show home page initially

    // Add animation to elements when they come into view using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Unobserve once animated if you only want the animation once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of element is visible

    // Observe elements for animation
    document.querySelectorAll('.search-section, .outlet-card, .add-outlet-form-section').forEach(el => {
        el.style.opacity = 0; // Start invisible
        el.style.transform = 'translateY(20px)'; // Start slightly below
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // Animation properties
        observer.observe(el);
    });

    // Initialize search inputs event listeners
    document.getElementById('homeSearchInput').addEventListener('input', handleSearch);
    document.getElementById('restaurantSearchInput').addEventListener('input', handleSearch);

    // Initial display update for restaurants page (important if it's the first page shown or navigated to)
    // This is called by showPage('restaurants') if navigated to, but if starting directly on restaurants page
    // you'd want it to run. Since showPage('home') is called, this will be handled.
    // However, if you remove showPage('home') and want to start on 'restaurants' by default, uncomment the line below.
    // updateRestaurantDisplay();
});
