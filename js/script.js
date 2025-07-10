const restaurantData = [
  {
    name: "Anup Roll & Shake Fast Food",
    searchName: "anup roll & shake fast food",
    cuisine: "Fast Food",
    rating: "4.0 ★ (100+ reviews)",
    location: "71, Vikas Nagar, Bidholi, Dehradun",
    timings: "12PM - 4AM, 2:15PM - 12AM",
    contact: "+917088677105",
    minOrder: "₹100",
    ZomatoLink: "https://www.zomato.com/dehradun/anup-roll-shake-fast-food-bidholi",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/anup-roll-and-shake-fast-food-bidholi-rest975332",
    takesCallOrders: true,
    dishes: "Rolls, Shakes, Burgers, Wraps",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Anup_Roll.jpeg"
    ]
  },
  {
    name: "Isquare Restaurant And Cafe",
    searchName: "isquare restaurant and cafe",
    cuisine: "Multi-Cuisine",
    rating: "4.2 ★ (150+ reviews)",
    location: "Post Office Road, Near I Square Girls Hostel, Bidholi",
    timings: "1PM - 11:30PM",
    contact: "+918858857775",
    minOrder: "₹150",
    ZomatoLink: "https://www.zomato.com/dehradun/isquare-restaurant-and-cafe-bidholi/order",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/isquare-restaurant-and-cafe-bidholi-rest1080484",
    takesCallOrders: true,
    dishes: "Indian, Chinese, Continental, Beverages",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare1.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare2.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare3.jpeg"
    ]
  },
  {
    name: "All Rounder Chacha Restaurant & Cafe",
    searchName: "all rounder chacha restaurant & cafe",
    cuisine: "North Indian",
    rating: "4.1 ★ (120+ reviews)",
    location: "Near Bright Wave School, Bidholi, Dehradun",
    timings: "24 Hours",
    contact: "+918818037720",
    minOrder: "₹120",
    ZomatoLink: "https://www.zomato.com/dehradun/all-rounder-chacha-restaurant-cafe-bidholi",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/all-rounder-chacha-restaurant-and-cafe-bidholi-rest995891",
    takesCallOrders: true,
    dishes: "Roti, Dal, Sabzi, Curry, Biryani",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder1.jpeg"
    ]
  },
  {
    name: "Maal & Chooz",
    searchName: "maal & chooz",
    cuisine: "Fast Food, Snacks",
    rating: "4.0 ★ (90+ reviews)",
    location: "Vikasnagar, Bidholi, Dehradun",
    timings: "12PM - 1:45AM, 12PM - 12AM",
    contact: "+917737178155",
    minOrder: "₹80",
    ZomatoLink: "https://www.zomato.com/dehradun/maal-chooz-bidholi",
    SwiggyLink: "", // Not found on Swiggy
    takesCallOrders: true,
    dishes: "Snacks, Fast Food, Sandwiches, Momos",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Maal_&_Chooz.jpeg"
    ]
  },
  {
    name: "Swadu Cafe",
    searchName: "swadu cafe",
    cuisine: "Cafe, Continental",
    rating: "4.3 ★ (110+ reviews)",
    location: "Upper Kandoli, UPES Road, Near Girls Hostel, Bidholi",
    timings: "11AM - 10:45PM",
    contact: "+919119862486",
    minOrder: "₹150",
    ZomatoLink: "https://www.zomato.com/dehradun/swadu-cafe-bidholi",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/swadu-cafe-prem-nagar-rest814318",
    takesCallOrders: true,
    dishes: "Coffee, Sandwiches, Pasta, Desserts",
    menuImages: []
  },
  {
    name: "Romnik Pizza",
    searchName: "romnik pizza",
    cuisine: "Pizza, Fast Food",
    rating: "4.1 ★ (85+ reviews)",
    location: "Near UPES, Bidholi, Dehradun",
    timings: "11AM - 11PM",
    contact: "+917900688688",
    minOrder: "₹200",
    ZomatoLink: "https://www.zomato.com/dehradun/romnik-pizza-bidholi",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/romnik-pizza-post-office-road-subhash-nagar-rest97829",
    takesCallOrders: true,
    dishes: "Pizza, Garlic Bread, Pasta, Wings",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza1.jpeg"
    ]
  },
  {
    name: "Having Craving",
    searchName: "having craving",
    cuisine: "Fast Food, Snacks",
    rating: "3.9 ★ (75+ reviews)",
    location: "Shop 19, Bidholi Complex, Near UPES, Bidholi",
    timings: "10AM - 11PM",
    contact: "+918439333330",
    minOrder: "₹100",
    ZomatoLink: "https://www.zomato.com/dehradun/having-craving-bidholi",
    SwiggyLink: "", // Not found on Swiggy
    takesCallOrders: false,
    dishes: "Burgers, Fries, Momos, Sandwiches",
    menuImages: []
  },
  {
    name: "Emotions Confectionery",
    searchName: "emotions confectionery",
    cuisine: "Bakery, Desserts",
    rating: "4.4 ★ (130+ reviews)",
    location: "Near UPES, Bidholi, Dehradun",
    timings: "2:30PM - 9:15PM",
    contact: "+919897776785, +917505615583",
    minOrder: "₹80",
    ZomatoLink: "https://www.zomato.com/dehradun/emotions-confectionery-bidholi/order",
    SwiggyLink: "", // Not available on Swiggy
    takesCallOrders: true,
    dishes: "Cakes, Pastries, Cookies, Desserts",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary1.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary2.jpeg"
    ]
  },{
    name: "Mentl Parathe Wale",
    searchName: "mentl parathe wale",
    cuisine: "North Indian",
    rating: "4.2 ★ (95+ reviews)",
    location: "Shop 20, Bidholi Complex, Vikasnagar, Bidholi",
    timings: "Mon–Fri, Sun: 11AM–10:15PM | Sat: 10:45AM–10:15PM",
    contact: "+919151591507",
    minOrder: "₹120",
    ZomatoLink: "https://www.zomato.com/dehradun/mentl-parathe-wale-bidholi/order",
    SwiggyLink: "https://www.swiggy.com/restaurants/mentl-parathe-wale-baguluru-road-bidholi-dehradun-794781",
    takesCallOrders: true,
    dishes: "Paratha, Dal, Paneer, Lassi",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl1.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl2.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl3.jpeg",
    ]
  },
  {
    name: "Chai Sutta Bar",
    searchName: "chai sutta bar",
    cuisine: "Cafe, Beverages",
    rating: "4.3 ★ (140+ reviews)",
    location: "Bidholi Complex, Near Bidholi, Dehradun",
    timings: "Mon–Sat: 10AM–11PM | Sun: 12PM–11PM",
    contact: "+917078365600",
    minOrder: "₹80",
    ZomatoLink: "https://www.zomato.com/dehradun/chai-sutta-bar-1-bidholi/order",
    SwiggyLink: "https://www.swiggy.com/restaurants/chai-sutta-bar-balawala-dehradun-342351",
    takesCallOrders: true,
    dishes: "Tea, Coffee, Snacks, Shakes",
    menuImages: [
      "https://i.imgur.com/bcd890.jpg",
      "https://i.imgur.com/efg123.jpg"
    ]
  },
  {
    name: "Mahi",
    searchName: "mahi",
    cuisine: "Fast Food",
    rating: "4.0 ★ (50+ reviews)",
    location: "Bidholi, Misraspatti, Uttarakhand 248197",
    timings: "Not specified",
    contact: "+917895334037",
    minOrder: "₹200",
    orderLink: "",
    SwiggyLink: "", // Not found on Swiggy
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi1.jpeg"
    ]
  },
  {
    name: "Mayank",
    searchName: "mayank",
    cuisine: "Multi-Cuisine",
    rating: "4.1 ★ (80+ reviews)",
    location: "Kharakhet, Bidholi, Uttarakhand 248197",
    timings: "9AM - 9PM",
    contact: "+918958973063, +917983437338",
    minOrder: "Not specified",
    orderLink: "https://www.swiggy.com/city/dehradun/mayank-restaurant-bidholi-rest971877",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/mayank-restaurant-bidholi-rest971877",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank1.jpeg"
    ]
  },
  {
    name: "Meenakshi",
    searchName: "meenakshi",
    cuisine: "North Indian",
    rating: "4.0 ★ (60+ reviews)",
    location: "UPES petroleum, Bidholi, Prem Nagar, Dehradun, Uttarakhand 248007",
    timings: "11AM - 10PM",
    contact: "+918394024356",
    minOrder: "Not specified",
    orderLink: "",
    SwiggyLink: "", // Not found
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
  },
  {
    name: "Forkful",
    searchName: "forkful",
    cuisine: "Fast Food",
    rating: "4.2 ★ (90+ reviews)",
    location: "Chowk, opp. Woodstock hostel, Bidholi, Dehradun, Uttarakhand 248001",
    timings: "Open till 3AM",
    contact: "+919528276454",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/forkfull-bidholi",
    SwiggyLink: "", // Not found
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Forkful.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Forkful1.jpeg"
    ]
  },

// Restaurant 15
{
    name: "TNB",
    searchName: "tnb",
    cuisine: "Cafe",
    rating: "4.1 ★ (70+ reviews)",
    location: "Upper Kandoli Bidholi Road Premnagar, Uttarakhand 248007",
    timings: "Not specified",
    contact: "+917906978010",
    minOrder: "Not specified",
    ZomatoLink: "https://www.zomato.com/dehradun/tnb-taste-best-cafe-prem-nagar",
    SwiggyLink: "https://www.swiggy.com/city/dehradun/tnb-taste-and-best-kehri-gaon-prem-nagar-rest485764",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
  },
  {
    name: "Salview",
    searchName: "salview",
    cuisine: "Multi-Cuisine",
    rating: "4.0 ★ (50+ reviews)",
    location: "Bidholi, Kharakhet, Uttarakhand 248006",
    timings: "8AM - 12AM",
    contact: "+917452900298",
    minOrder: "Not specified",
    ZomatoLink: "",
    SwiggyLink: "", // No matching listing found
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
  },
  {
    name: "Mr. Burger",
    searchName: "mr burger",
    cuisine: "Fast Food",
    rating: "3.9 ★ (40+ reviews)",
    location: "Not specified",
    timings: "Not specified",
    contact: "+918191820830",
    minOrder: "Not specified",
    ZomatoLink: "",
    SwiggyLink: "", // Not found on Swiggy
    takesCallOrders: true,
    dishes: "Burgers, Fries, Shakes",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger1.jpeg"
    ]
  },
  {
    name: "BLT",
    searchName: "blt",
    cuisine: "Cafe",
    rating: "4.3 ★ (100+ reviews)",
    location: "Shop No. 17, Vikasnagar, Dehradun, Uttarakhand 248007",
    timings: "Mon–Fri: 10AM–11PM | Sun: 12PM–8PM",
    contact: "+919867854356",
    minOrder: "Not specified",
    ZomatoLink: "https://www.zomato.com/dehradun/big-little-things-bidholi",
    SwiggyLink: "", // None found
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaHub.jpeg"
    ]
  },
  {
    name: "TIF",
    searchName: "tif",
    cuisine: "Not specified",
    rating: "Not rated yet",
    location: "Not specified",
    timings: "Not specified",
    contact: "Not specified",
    minOrder: "Not specified",
    ZomatoLink: "",
    SwiggyLink: "",
    takesCallOrders: false,
    dishes: "Not specified",
    menuImages: []
  },
  {
    name: "Pizza Hub",
    searchName: "pizza hub",
    cuisine: "Pizza",
    rating: "4.0 ★ (80+ reviews)",
    location: "Dehradun Township- Bidholi, Majhaun Rd, Misraspatti, Uttarakhand",
    timings: "11AM - 11PM",
    contact: "+917900442255",
    minOrder: "Not specified",
    ZomatoLink: "https://www.zomato.com/dehradun/pizza-hub-bidholi",
    SwiggyLink: "", // Not on Swiggy
    takesCallOrders: true,
    dishes: "Pizzas, Sides, Beverages",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaHub.jpeg"
    ]
  },

// Continue with restaurants 21-42 in the same format...
{
    name: "Big Bite",
    searchName: "big bite",
    cuisine: "Fast Food",
    rating: "3.9 ★ (60+ reviews)",
    location: "Bidholi, Misraspatti, Uttarakhand 248197",
    timings: "11AM - 11PM",
    contact: "+919756799446",
    minOrder: "Not specified",
    ZomatoLink: "",
    SwiggyLink: "", // No matching listing in Bidholi; possible match elsewhere but not verified
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
  },
  {
    name: "Spicy",
    searchName: "spicy",
    cuisine: "North Indian",
    rating: "4.0 ★ (70+ reviews)",
    location: "CX78+9QW, Bidholi, Misraspatti, Uttarakhand 248197",
    timings: "9AM - 9:30PM",
    contact: "+919266951239",
    minOrder: "Not specified",
    ZomatoLink: "https://www.zomato.com/dehradun/spicy-bowl-bidholi",
    SwiggyLink: "", // No listing found on Swiggy
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
  },
  {
    name: "Snacks Adda",
    searchName: "snacks adda",
    cuisine: "Cafe",
    rating: "4.1 ★ (50+ reviews)",
    location: "Vikasnagar, Bidholi, Uttarakhand 248007",
    timings: "Mon–Sun: 12 AM–3 AM, 12:15 PM–11:45 PM",
    contact: "+91975800710, +918585992216",
    minOrder: "Not specified",
    ZomatoLink: "https://www.zomato.com/dehradun/snacks-adda-bidholi",
    SwiggyLink: "https://www.swiggy.com/restaurants/snacks-adda-vikasnagar-bidholi-dehradun-1040932",
    takesCallOrders: false,
    dishes: "Chinese, North Indian, Rolls, Momos, Shakes",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda.jpeg",
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda1.jpeg"
    ]
  },
  {
    name: "Sandeep Fast Food",
    searchName: "sandeep fast food",
    cuisine: "Fast Food",
    rating: "3.8 ★ (40+ reviews)",
    location: "CX79+5G3, near post office, Bidholi, Misraspatti, Uttarakhand 248007",
    timings: "Not specified",
    contact: "+919627143215, +917895632463",
    minOrder: "Not specified",
    ZomatoLink: "",
    SwiggyLink: "", // No listing found
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sandeep.jpeg"
    ]
  },
  {
    name: "Shubh Pahadi",
    searchName: "shubh pahadi",
    cuisine: "North Indian",
    rating: "4.2 ★ (90+ reviews)",
    location: "Shubh Pahadi Restaurant, Bidholi, Uttarakhand 248007",
    timings: "Open 24 hours",
    contact: "+917409708807, +918156053992",
    minOrder: "Not specified",
    ZomatoLink: "",
    SwiggyLink: "", // No listing found
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
      "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ShubhPahadi.jpeg"
    ]
  },

{
    name: "Deepak",
    searchName: "deepak",
    cuisine: "North Indian",
    rating: "4.0 ★ (80+ reviews)",
    location: "UPES Campus, Bidholi, Dehradun, Uttarakhand 248007",
    timings: "Open 24 hours",
    contact: "+916396591060",
    minOrder: "Not specified",
    orderLink: "",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak1.jpeg",
    ]
},

{
    name: "Kanoha",
    searchName: "kanoha",
    cuisine: "Cafe",
    rating: "4.3 ★ (100+ reviews)",
    location: "Bidholi Rd, Kharakhet, Misraspatti, Uttarakhand 248007",
    timings: "11AM - 10PM",
    contact: "+919870601929",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/konoha-cafe-bidholi",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha1.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha2.jpeg",
    ]
},

{
    name: "Gym diet",
    searchName: "gym diet",
    cuisine: "Healthy Food",
    rating: "4.4 ★ (120+ reviews)",
    location: "CX7C+29M, Bidholi, Kharakhet, Uttarakhand 248197",
    timings: "6AM - 11:30PM",
    contact: "+919759720152",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/gym-diet-bidholi",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/GymDiet.jpeg",

    ]
},

{
    name: "Pizza Dilite",
    searchName: "pizza dilite",
    cuisine: "Pizza",
    rating: "4.1 ★ (80+ reviews)",
    location: "CX7C+5X5, Bidholi Rd, Kharakhet, Uttarakhand 248197",
    timings: "Mon-Sat: 9AM-10PM, Sun: 9AM-4AM",
    contact: "+917037455700",
    minOrder: "Not specified",
    orderLink: "",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaDilite.jpeg",

    ]
},

{
    name: "4 Loser",
    searchName: "4 loser",
    cuisine: "Cafe",
    rating: "4.2 ★ (90+ reviews)",
    location: "near, via, near Sai Mandir, Prem Nagar, Bidholi, Dehradun, Uttarakhand 248007",
    timings: "Mon-Fri: 8AM-1PM, Sun: 10AM-2PM",
    contact: "+917906071734",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/4-losers-restaurant-cafe-bidholi",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser1.jpeg",


    ]
},

{
    name: "Indie Cafe",
    searchName: "indie cafe",
    cuisine: "Cafe",
    rating: "4.3 ★ (110+ reviews)",
    location: "Bishanpur, Bidholi Rd, near Royal Stay hostel, Dehradun, Uttarakhand 248007",
    timings: "3AM - 11:30PM",
    contact: "+917409181819",
    minOrder: "Not specified",
    orderLink: "https://www.swiggy.com/city/dehradun/the-indie-cafe-deheradun-township-bidholi-rest875255",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/IndieCafe.jpeg",

    ]
},

{
    name: "Burger Belly",
    searchName: "burger belly",
    cuisine: "Fast Food",
    rating: "4.0 ★ (70+ reviews)",
    location: "Bidholi, Dehradun, Uttarakhand 248007",
    timings: "2PM - 4AM",
    contact: "Not specified",
    minOrder: "Not specified",
    orderLink: "https://www.swiggy.com/city/dehradun/burger-belly-bidholi-rest999481",
    takesCallOrders: false,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BurgerBelly.jpeg",

    ]
},

{
    name: "Bunk Cafe",
    searchName: "bunk cafe",
    cuisine: "Cafe",
    rating: "4.4 ★ (130+ reviews)",
    location: "near Avalon hostel, kandoli, vishanpur, Dehradun, Kharakhet, Uttarakhand 248001",
    timings: "5PM - 4AM",
    contact: "+919891610696, +917895566236",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/bunk-cafe-bidholi/order",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BunkCafe.jpeg",
    ]
},

{
    name: "Tongue'N Taste",
    searchName: "tongue n taste",
    cuisine: "Multi-Cuisine",
    rating: "4.2 ★ (100+ reviews)",
    location: "9XW9+4C9, Infront of Jiya Hostel Upper, Kandoli, Tibet colony, Saundhon wali, Dehradun, Uttarakhand",
    timings: "9:30AM - 11PM",
    contact: "+918439010011",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/toungue-n-taste-bidholi",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT1.jpeg",


    ]
},

{
    name: "Threesome",
    searchName: "threesome",
    cuisine: "Multi-Cuisine",
    rating: "4.3 ★ (120+ reviews)",
    location: "Bidholi Road, Dehradun, Pondha, Uttarakhand 248007",
    timings: "10AM - 4AM",
    contact: "+918885552368",
    minOrder: "Not specified",
    orderLink: "https://www.swiggy.com/city/dehradun/threesome-you-me-and-food-bidholi-rest971021",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
},

{
    name: "Panjtara",
    searchName: "panjtara",
    cuisine: "Cafe",
    rating: "4.2 ★ (80+ reviews)",
    location: "House 86, Upper Colony, Kandhauli, Vikas Nagar, Dehradun",
    timings: "Not specified",
    contact: "+918625841928",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/cafe-panjtara-vikas-nagar",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara1.jpeg",

    ]
},

{
    name: "Kandoli Adda",
    searchName: "kandoli adda",
    cuisine: "Multi-Cuisine",
    rating: "4.3 ★ (110+ reviews)",
    location: "Gosai Gaon, Opposite Bella Vista Girls Hostel, Kandoli, Bidholi, Dehradun",
    timings: "11AM - 9:15PM",
    contact: "+918393870202",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/kandoli-adda-bidholi/order",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda1.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda2.jpeg",
    ]
},

{
    name: "Cafe Sky View",
    searchName: "cafe sky view",
    cuisine: "Cafe",
    rating: "4.4 ★ (130+ reviews)",
    location: "Cafe Sky, View Upper, Kandoli Gusain Gaon, Bidholi, Dehradun",
    timings: "10:30AM - 10:45PM",
    contact: "+918171652916",
    minOrder: "Not specified",
    orderLink: "https://www.zomato.com/dehradun/cafe-sky-view-bidholi/order",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView1.jpeg",
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView2.jpeg"
    ]
},
{
    name: "Kainchi Products/ Radhey Confectionary",
    searchName: "kainchi products",
    cuisine: "Bakery",
    rating: "4.0 ★ (50+ reviews)",
    location: "Not specified",
    timings: "Not specified",
    contact: "+918630273212",
    minOrder: "Not specified",
    orderLink: "",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: []
},
{
    name: "Sona Restaurant",
    searchName: "Sona Restaurant",
    cuisine: "Multi-Cuisine",
    rating: "4.0 ★ (50+ reviews)",
    location: "Not specified",
    timings: "Not specified",
    contact: "+918057411534 +919259039141",
    minOrder: "Not specified",
    orderLink: "",
    takesCallOrders: true,
    dishes: "Not specified",
    menuImages: [
    "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sona.jpeg",
    ]
},
];    // Info content for modals
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

// Function to switch between pages
function showPage(pageId) {
    // Hide all pages
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('restaurantsPage').style.display = 'none';
    
    // Show selected page
    document.getElementById(pageId + 'Page').style.display = 'block';
    
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(pageId) || 
           (pageId === 'home' && btn.textContent === 'Home')) {
            btn.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Reset search when switching to restaurants page via browse all
    if (pageId === 'restaurants') {
        if (event && event.target.classList.contains('browse-all-btn')) {
            document.getElementById('restaurantSearchInput').value = '';
            currentSearchTerm = '';
            currentFilter = 'all';
            document.querySelector('.filter-btn.active').classList.remove('active');
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            updateRestaurantDisplay();
        }
    }
}

// Show info modal
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

// Improved search functionality
function handleSearch(event) {
    const searchInput = event.target;
    const clearBtn = searchInput.nextElementSibling.nextElementSibling;
    clearBtn.classList.toggle('visible', searchInput.value.length > 0);
    
    // Update current search term
    currentSearchTerm = searchInput.value.toLowerCase();
    updateRestaurantDisplay();
    
    // If searching from home page, switch to restaurants page
    const searchTermHome = document.getElementById('homeSearchInput')?.value.toLowerCase() || '';
    if (searchTermHome && document.getElementById('homePage').style.display !== 'none') {
        showPage('restaurants');
        document.getElementById('restaurantSearchInput').value = searchTermHome;
        currentSearchTerm = searchTermHome;
        updateRestaurantDisplay();
    }
}

// Clear search input
function clearSearch(page) {
    const inputId = page === 'home' ? 'homeSearchInput' : 'restaurantSearchInput';
    const input = document.getElementById(inputId);
    input.value = '';
    input.nextElementSibling.nextElementSibling.classList.remove('visible');
    currentSearchTerm = '';
    updateRestaurantDisplay();
}

// Filter button functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        updateRestaurantDisplay();
    });
});

// Main function to update restaurant display based on current filters
function updateRestaurantDisplay() {
    const outletCards = document.querySelectorAll('.outlet-card');
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
                             cuisine.includes(currentFilter);
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update search results message
    const messageElement = document.getElementById('searchResultsMessage');
    if (currentSearchTerm) {
        messageElement.style.display = 'block';
        if (visibleCount === 0) {
            messageElement.textContent = `No restaurants found for "${currentSearchTerm}"`;
            messageElement.className = 'search-results-message show no-results';
        } else {
            messageElement.textContent = `Found ${visibleCount} restaurant${visibleCount !== 1 ? 's' : ''} matching "${currentSearchTerm}"`;
            messageElement.className = 'search-results-message show results-found';
        }
    } else if (currentFilter !== 'all') {
        messageElement.style.display = 'block';
        messageElement.textContent = `Showing ${visibleCount} ${currentFilter} restaurant${visibleCount !== 1 ? 's' : ''}`;
        messageElement.className = 'search-results-message show results-found';
    } else {
        messageElement.style.display = 'none';
    }
}

// Toggle favorite button
function toggleFavorite(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.style.color = '#ff4757';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.style.color = '#ff4757';
    }
}

// Show add form (placeholder for now)
function showAddForm() {
    alert('Add new outlet form would appear here with fields for name, cuisine, location, etc.');
}

// Restaurant Modal Functions
function showRestaurantModal(name, cuisine, rating, location, timings, contact, minOrder, orderLink, takesCallOrders, dishes, menuImages) {
    document.getElementById('modalRestaurantName').textContent = name;
    document.getElementById('modalRestaurantCuisine').textContent = cuisine;
    document.getElementById('modalRestaurantRating').textContent = rating;
    document.getElementById('modalRestaurantLocation').textContent = location;
    document.getElementById('modalRestaurantTimings').textContent = timings;
    document.getElementById('modalRestaurantContact').textContent = contact;
    document.getElementById('modalRestaurantMinOrder').textContent = minOrder;
    document.getElementById('modalRestaurantOrderLink').href = orderLink;
    document.getElementById('modalRestaurantDishes').textContent = dishes;
    
    const callOrderBadge = document.getElementById('modalRestaurantCallOrder');
    callOrderBadge.textContent = takesCallOrders ? 'Yes' : 'No';
    callOrderBadge.className = takesCallOrders ? 'badge yes' : 'badge no';
    
    // Update menu images
    const menuGallery = document.getElementById('menuGallery');
    menuGallery.innerHTML = '';
    
    if (menuImages && menuImages.length > 0) {
        document.getElementById('menuImagesSection').style.display = 'block';
        
        menuImages.forEach(imageUrl => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'menu-image';
            imageContainer.onclick = () => openImageModal(imageUrl);
            
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${name} menu`;
            
            imageContainer.appendChild(img);
            menuGallery.appendChild(imageContainer);
        });
    } else {
        document.getElementById('menuImagesSection').style.display = 'none';
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.search-section, .outlet-card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // Set up click handlers for all restaurant cards using the data
    document.querySelectorAll('.outlet-card').forEach((card, index) => {
        const data = restaurantData[index];
        card.onclick = () => showRestaurantModal(
            data.name,
            data.cuisine,
            data.rating,
            data.location,
            data.timings,
            data.contact,
            data.minOrder,
            data.orderLink,
            data.takesCallOrders,
            data.dishes,
            data.menuImages
        );
    });

    // Initialize search inputs
    document.getElementById('homeSearchInput').addEventListener('input', handleSearch);
    document.getElementById('restaurantSearchInput').addEventListener('input', handleSearch);
});
