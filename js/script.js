(function() {
    'use strict';
    
    // Your existing restaurant data (unchanged)
        const restaurantData = [
    { name: "Anup Roll & Shake Fast Food", searchName: "anup roll & shake fast food", cuisine: "Fast Food", rating: "4.0 ★ (100+)", location: "71, Vikas Nagar, Bidholi, Dehradun", timings: "Closes at 4AM", contact: "+917088677105", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/anup-roll-shake-fast-food-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Rolls, Shakes, Burgers, Wraps", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Anup_Roll.jpeg"] },
    { name: "Isquare Restaurant And Cafe", searchName: "isquare restaurant and cafe", cuisine: "Multi-Cuisine, Cafe", rating: "4.2 ★ (150+)", location: "Post Office Road, Near I Square Girls Hostel, Bidholi", timings: "Closes at 11:30PM", contact: "+918858857775", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/isquare-restaurant-and-cafe-bidholi/order", swiggy: " " }, takesCallOrders: true, dishes: "Indian, Chinese, Continental, Beverages", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare2.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare3.jpeg"] },
    { name: "All Rounder Chacha", searchName: "all rounder chacha restaurant & cafe", cuisine: "North Indian", rating: "4.1 ★ (120+)", location: "Near Bright Wave School, Bidholi, Dehradun", timings: "Open 24 Hours", contact: "+918818037720", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/all-rounder-chacha-restaurant-cafe-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Roti, Dal, Sabzi, Curry, Biryani", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder1.jpeg"] },
    { name: "Maal & Chooz", searchName: "maal & chooz", cuisine: "Fast Food, Snacks", rating: "4.0 ★ (90+)", location: "Vikasnagar, Bidholi, Dehradun", timings: "Closes at 1:45AM", contact: "+917737178155", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/maal-chooz-bidholi", swiggy: "" }, takesCallOrders: true, dishes: "Snacks, Fast Food, Sandwiches, Momos", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Maal_&_Chooz.jpeg"] },
    { name: "Swadu Cafe", searchName: "swadu cafe", cuisine: "Cafe, Continental", rating: "4.3 ★ (110+)", location: "Upper Kandoli, UPES Road, Near Girls Hostel, Bidholi", timings: "Closes at 10:45PM", contact: "+919119862486", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/swadu-cafe-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Coffee, Sandwiches, Pasta, Desserts", menuImages: [] },
    { name: "Romnik Pizza", searchName: "romnik pizza", cuisine: "Pizza, Fast Food", rating: "4.1 ★ (85+)", location: "Near UPES, Bidholi, Dehradun", timings: "Closes at 11PM", contact: "+917900688688", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/romnik-pizza-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Pizza, Garlic Bread, Pasta, Wings", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza1.jpeg"] },
    { name: "Having Craving", searchName: "having craving", cuisine: "Fast Food, Snacks", rating: "3.9 ★ (75+)", location: "Shop 19, Bidholi Complex, Near UPES, Bidholi", timings: "Closes at 11PM", contact: "+918439333330", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/having-craving-bidholi", swiggy: "" }, takesCallOrders: false, dishes: "Burgers, Fries, Momos, Sandwiches", menuImages: [] },
    { name: "Emotions Confectionery", searchName: "emotions confectionery", cuisine: "Bakery, Desserts", rating: "4.4 ★ (130+)", location: "Near UPES, Bidholi, Dehradun", timings: "Closes at 9:15PM", contact: "+919897776785, +917505615583", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/emotions-confectionery-bidholi/order", swiggy: "" }, takesCallOrders: true, dishes: "Cakes, Pastries, Cookies, Desserts", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary2.jpeg"] },
    { name: "Mentl Parathe Wale", searchName: "mentl parathe wale", cuisine: "North Indian", rating: "4.2 ★ (95+)", location: "Shop 20, Bidholi Complex, Vikasnagar, Bidholi", timings: "Closes at 10:15PM", contact: "+919151591507", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/mentl-parathe-wale-bidholi/order", swiggy: " " }, takesCallOrders: true, dishes: "Paratha, Dal, Paneer, Lassi", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl2.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl3.jpeg"] },
    { name: "Chai Sutta Bar", searchName: "chai sutta bar", cuisine: "Cafe, Beverages", rating: "4.3 ★ (140+)", location: "Bidholi Complex, Near Bidholi, Dehradun", timings: "Closes at 11PM", contact: "+917078365600", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/chai-sutta-bar-1-bidholi/order", swiggy: " " }, takesCallOrders: true, dishes: "Tea, Coffee, Snacks, Shakes", menuImages: [] },
    { name: "Mahi", searchName: "mahi", cuisine: "Fast Food", rating: "4.0 ★ (50+)", location: "Bidholi, Misraspatti, Uttarakhand 248197", timings: "Not specified", contact: "+917895334037", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi1.jpeg"] },
    { name: "Mayank", searchName: "mayank", cuisine: "Multi-Cuisine", rating: "4.1 ★ (80+)", location: "Kharakhet, Bidholi, Uttarakhand 248197", timings: "9AM - 9PM", contact: "+918958973063, +917983437338", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: " " }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank1.jpeg"] },
    { name: "Meenakshi", searchName: "meenakshi", cuisine: "North Indian", rating: "4.0 ★ (60+)", location: "UPES petroleum, bidholi, Prem Nagar, Dehradun", timings: "11AM - 10PM", contact: "+918394024356", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Forkful", searchName: "forkful", cuisine: "Fast Food", rating: "4.2 ★ (90+)", location: "Chowk, opp. Woodstock hostel, Bidholi, Dehradun", timings: "Open till 3AM", contact: "+919528276454", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/forkfull-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot/main/images/Forkful.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot/main/images/Forkful1.jpeg"] },
    { name: "TNB Taste Best Cafe", searchName: "tnb", cuisine: "Cafe", rating: "4.1 ★ (70+)", location: "Upper Kandoli Bidholi Road Premnagar, Uttarakhand 248007", timings: "Not specified", contact: "+917906978010", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/tnb-taste-best-cafe-prem-nagar", swiggy: " " }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Salview", searchName: "salview", cuisine: "Multi-Cuisine", rating: "4.0 ★ (50+)", location: "Bidholi, Kharakhet, Uttarakhand 248006", timings: "8AM - 12AM", contact: "+917452900298", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Mr. Burger", searchName: "mr burger", cuisine: "Fast Food", rating: "3.9 ★ (40+)", location: "Not specified", timings: "Not specified", contact: "+918191820830", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Burgers, Fries, Shakes", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger1.jpeg"] },
    { name: "Big Little Things", searchName: "blt", cuisine: "Cafe", rating: "4.3 ★ (100+)", location: "Shop No. 17, Vikasnagar, Dehradun", timings: "Closes at 11PM", contact: "+919867854356", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/big-little-things-bidholi", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BLT.jpeg"] },
    { name: "TIF", searchName: "tif", cuisine: "Not specified", rating: "Not rated", location: "Not specified", timings: "Not specified", contact: "Not specified", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: false, dishes: "Not specified", menuImages: [] },
    { name: "Pizza Hub", searchName: "pizza hub", cuisine: "Pizza", rating: "4.0 ★ (80+)", location: "Dehradun Township- Bidholi, Majhaun Rd, Misraspatti", timings: "11AM - 11PM", contact: "+917900442255", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/pizza-hub-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Pizzas, Sides, Beverages", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaHub.jpeg"] },
    { name: "Big Bite", searchName: "big bite", cuisine: "Fast Food", rating: "3.9 ★ (60+)", location: "Bidholi, Misraspatti, Uttarakhand 248197", timings: "11AM - 11PM", contact: "+919756799446", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Spicy Bowl", searchName: "spicy bowl", cuisine: "North Indian", rating: "4.0 ★ (70+)", location: "CX78+9QW, Bidholi, Misraspatti, Uttarakhand 248197", timings: "9AM - 9:30PM", contact: "+919266951239", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/spicy-bowl-bidholi", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Snacks Adda", searchName: "snacks adda", cuisine: "Cafe", rating: "4.1 ★ (50+)", location: "Vikasnagar, Bidholi, Uttarakhand 248007", timings: "Closes at 3AM", contact: "+91975800710, +918585992216", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/snacks-adda-bidholi", swiggy: "" }, takesCallOrders: false, dishes: "Chinese, North Indian, Rolls, Momos, Shake", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda1.jpeg"] },
    { name: "Anavrin", searchName: "anavrin", cuisine: "Not specified", rating: "Not rated", location: "Not specified", timings: "Not specified", contact: "Not specified", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: false, dishes: "Not specified", menuImages: [] },
    { name: "Sandeep Fast Food", searchName: "sandeep fast food", cuisine: "Fast Food", rating: "3.8 ★ (40+)", location: "Nearby post office, Bidholi, Misraspatti", timings: "Not specified", contact: "+919627143215, +917895632463", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sandeep.jpeg"] },
    { name: "Shubh Pahadi", searchName: "shubh pahadi", cuisine: "North Indian", rating: "4.2 ★ (90+)", location: "Shubh pahadi restaurant, Bidholi, Uttarakhand 248007", timings: "Open 24 hours", contact: "+917409708807, +918156053992", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ShubhPahadi.jpeg"] },
    { name: "Deepak Restaurant", searchName: "deepak", cuisine: "North Indian", rating: "4.0 ★ (80+)", location: "UPES Campus, Bidholi, Dehradun, Uttarakhand 248007", timings: "Open 24 hours", contact: "+916396591060", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak1.jpeg"] },
    { name: "Kanoha Cafe", searchName: "kanoha cafe", cuisine: "Cafe", rating: "4.3 ★ (100+)", location: "Bidholi Rd, Kharakhet, Misraspatti, Uttarakhand 248007", timings: "11AM - 10PM", contact: "+919870601929", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/konoha-cafe-bidholi", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha2.jpeg"] },
    { name: "Gym Diet", searchName: "gym diet", cuisine: "Healthy Food", rating: "4.4 ★ (120+)", location: "CX7C+29M, Bidholi, Kharakhet, Uttarakhand 248197", timings: "6AM - 11:30PM", contact: "+919759720152", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/gym-diet-bidholi", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/GymDiet.jpeg"] },
    { name: "Pizza Dilite", searchName: "pizza dilite", cuisine: "Pizza", rating: "4.1 ★ (80+)", location: "CX7C+5X5, Bidholi Rd, Kharakhet, Uttarakhand 248197", timings: "Closes at 10PM", contact: "+917037455700", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaDilite.jpeg"] },
    { name: "4 Loser Restaurant", searchName: "4 loser", cuisine: "Cafe", rating: "4.2 ★ (90+)", location: "Near Sai Mandir, Prem Nagar, Bidholi, Dehradun", timings: "Closes at 1PM", contact: "+917906071734", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/4-losers-restaurant-cafe-bidholi", swiggy: " " }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser1.jpeg"] },
    { name: "Indie Cafe", searchName: "indie cafe", cuisine: "Cafe", rating: "4.3 ★ (110+)", location: "Near Royal Stay hostel, Dehradun, Uttarakhand 248007", timings: "Closes at 11:30PM", contact: "+917409181819", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: " " }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/IndieCafe.jpeg"] },
    { name: "Burger Belly", searchName: "burger belly", cuisine: "Fast Food", rating: "4.0 ★ (70+)", location: "Bidholi, Dehradun, Uttarakhand 248007", timings: "Closes at 4AM", contact: "Not specified", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: " " }, takesCallOrders: false, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BurgerBelly.jpeg"] },
    { name: "Bunk Cafe", searchName: "bunk cafe", cuisine: "Cafe", rating: "4.4 ★ (130+)", location: "Near Avalon hostel, kandoli, vishanpur, Dehradun", timings: "Closes at 4AM", contact: "+919891610696, +917895566236", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/bunk-cafe-bidholi/order", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BunkCafe.jpeg"] },
    { name: "Tongue'N Taste", searchName: "tongue n taste", cuisine: "Multi-Cuisine", rating: "4.2 ★ (100+)", location: "Infront of Jiya Hostel Upper, Kandoli, Tibet colony", timings: "Closes at 11PM", contact: "+918439010011", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/toungue-n-taste-bidholi", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT1.jpeg"] },
    { name: "Threesome (You Me & Food)", searchName: "threesome", cuisine: "Multi-Cuisine", rating: "4.3 ★ (120+)", location: "Bidholi Road, Dehradun, Pondha, Uttarakhand 248007", timings: "Closes at 4AM", contact: "+918885552368", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: " " }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Cafe Panjtara", searchName: "panjtara", cuisine: "Cafe", rating: "4.2 ★ (80+)", location: "House 86, Upper Colony, Kandhauli, Vikas Nagar, Dehradun", timings: "Not specified", contact: "+918625841928", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/cafe-panjtara-vikas-nagar", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara1.jpeg"] },
    { name: "Kandoli Adda", searchName: "kandoli adda", cuisine: "Multi-Cuisine", rating: "4.3 ★ (110+)", location: "Opposite Bella Vista Girls Hostel, Kandoli, Bidholi", timings: "Closes at 9:15PM", contact: "+918393870202", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/kandoli-adda-bidholi/order", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda2.jpeg"] },
    { name: "Cafe Sky View", searchName: "cafe sky view", cuisine: "Cafe", rating: "4.4 ★ (130+)", location: "Cafe Sky, View Upper, Kandoli Gusain Gaon, Bidholi, Dehradun", timings: "Closes at 10:45PM", contact: "+918171652916", minOrder: "Not specified", orderLinks: { zomato: "https://www.zomato.com/dehradun/cafe-sky-view-bidholi/order", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView2.jpeg"] },
    { name: "Kainchi Products", searchName: "kainchi products", cuisine: "Bakery", rating: "4.0 ★ (50+)", location: "Not specified", timings: "Not specified", contact: "+918630273212", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: [] },
    { name: "Sona Restaurant", searchName: "sona restaurant", cuisine: "Multi-Cuisine", rating: "4.0 ★ (50+)", location: "Not specified", timings: "Not specified", contact: "+918057411534, +919259039141", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sona.jpeg"] },
    { name: "Shagun Fast Food", searchName: "shagun fast food", cuisine: "Fast Food", rating: "4.0 ★ (50+)", location: "Not specified", timings: "Not specified", contact: "+917534963827, +918433145002", minOrder: "Not specified", orderLinks: { zomato: "", swiggy: "" }, takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ShagunFastFood.jpeg"] }

];

    const infoContent = {
        about: { title: "About FoodieSpot", content: `<p>FoodieSpot is your ultimate guide to discovering the best food options around UPES campus, Dehradun.</p><p>Our mission is to help students and faculty find great places to eat, with detailed information about each outlet including menus, prices, and ordering options.</p>` },
        contact: { title: "Contact Us", content: `<p><i class="fas fa-envelope"></i> Email: contactfoodiespot@gmail.com</p><p><i class="fas fa-map-marker-alt"></i> Address: UPES Bidholi Campus, Dehradun</p>` },
        terms: { title: "Terms of Service", content: `<p>By using FoodieSpot, you agree to these terms: We strive to provide accurate information but cannot guarantee all details are current or correct. Users are responsible for verifying restaurant details before visiting or ordering.</p>`},
        privacy: { title: "Privacy Policy", content: `<p>FoodieSpot respects your privacy. We may collect basic usage data to improve our service, but we don't store personal information without your consent. Any data collected is used solely to enhance your experience.</p>` }
    };

    let currentSearchTerm = '', currentFilter = 'all', searchDebounceTimer;
    let favoriteRestaurants = JSON.parse(localStorage.getItem('favoriteRestaurants')) || [];
    
    // Popular search suggestions
    const popularSearches = [
        { term: "pizza", icon: "fas fa-pizza-slice" },
        { term: "burger", icon: "fas fa-hamburger" },
        { term: "chinese", icon: "fas fa-utensils" },
        { term: "roll", icon: "fas fa-hotdog" },
        { term: "cafe", icon: "fas fa-coffee" },
        { term: "fast food", icon: "fas fa-clock" }
    ];

    const DOMElements = {
        homePage: document.getElementById('homePage'), 
        restaurantsPage: document.getElementById('restaurantsPage'),
        restaurantsGrid: document.getElementById('restaurantsGrid'), 
        homeSearchInput: document.getElementById('homeSearchInput'),
        restaurantSearchInput: document.getElementById('restaurantSearchInput'), 
        searchResultsMessage: document.getElementById('searchResultsMessage'),
        homeFilterButtons: document.getElementById('homeFilterButtons'), 
        restaurantFilterButtons: document.getElementById('restaurantFilterButtons'),
        restaurantModal: document.getElementById('restaurantModal'), 
        infoModal: document.getElementById('infoModal'),
        addOutletModal: document.getElementById('addOutletModal'), 
        imageModal: document.getElementById('imageModal'),
        modalImage: document.getElementById('modalImage'), 
        darkModeToggle: document.querySelector('.dark-mode-toggle'),
        loadingState: document.getElementById('loadingState'),
        pageSearchBox: document.getElementById('pageSearchBox'),
        scrollToTopFab: document.getElementById('scrollToTopFab'),
        homeSearchSuggestions: document.getElementById('homeSearchSuggestions'),
        restaurantSearchSuggestions: document.getElementById('restaurantSearchSuggestions')
    };

    // Enhanced render function with animations
    function renderRestaurants() {
        const filteredData = restaurantData.filter(resto => {
            const s = (str) => str ? str.toLowerCase() : '';
            const matchesFilter = currentFilter === 'all' || s(resto.cuisine).includes(currentFilter);
            const matchesSearch = !currentSearchTerm || s(resto.searchName).includes(currentSearchTerm) || s(resto.cuisine).includes(currentSearchTerm) || s(resto.dishes).includes(currentSearchTerm);
            return matchesFilter && matchesSearch;
        });

        // Show loading state
        DOMElements.loadingState.style.display = 'flex';
        DOMElements.restaurantsGrid.innerHTML = '';

        setTimeout(() => {
            DOMElements.loadingState.style.display = 'none';
            
            if (filteredData.length === 0 && (currentSearchTerm || currentFilter !== 'all')) {
                DOMElements.searchResultsMessage.innerHTML = `No results found for "<strong>${currentSearchTerm || currentFilter}</strong>". Try another search or filter.`;
                DOMElements.searchResultsMessage.className = 'search-results-message show';
            } else { 
                DOMElements.searchResultsMessage.className = 'search-results-message'; 
            }

            const fragment = document.createDocumentFragment();
            filteredData.forEach((resto, index) => {
                const card = document.createElement('div');
                card.className = 'outlet-card';
                card.dataset.name = resto.searchName;
                const isFavorite = favoriteRestaurants.includes(resto.searchName);
                
                // Determine status based on timings
                let statusBadge = '';
                const timings = resto.timings.toLowerCase();
                if (timings.includes('24') || timings.includes('4am')) {
                    statusBadge = '<div class="outlet-status status-open">Open Late</div>';
                } else if (timings.includes('11pm') || timings.includes('10pm')) {
                    statusBadge = '<div class="outlet-status status-closing-soon">Open</div>';
                }

                // Quick tags based on restaurant features
                let quickTags = '';
                if (resto.takesCallOrders) quickTags += '<span class="tag-pill">Phone Orders</span>';
                if (resto.orderLinks.zomato) quickTags += '<span class="tag-pill">Zomato</span>';
                if (resto.orderLinks.swiggy) quickTags += '<span class="tag-pill">Swiggy</span>';

                card.innerHTML = `
                    ${statusBadge}
                    <button class="favorite-btn" aria-label="Toggle Favorite">
                        <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="share-btn" aria-label="Share restaurant">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <div class="outlet-header">
                        <h2 class="outlet-name">${resto.name}</h2>
                        <p class="outlet-cuisine">${resto.cuisine}</p>
                    </div>
                    <div class="outlet-details">
                        <div class="rating">
                            <i class="fas fa-star"></i> ${resto.rating}
                        </div>
                        <div class="phone-order">
                            <i class="fas ${resto.takesCallOrders ? 'fa-phone-alt' : 'fa-times-circle'}"></i> 
                            ${resto.takesCallOrders ? 'Phone Orders' : 'No Phone Orders'}
                        </div>
                        <div class="quick-tags">${quickTags}</div>
                    </div>
                `;
                
                fragment.appendChild(card);
            });
            
            DOMElements.restaurantsGrid.appendChild(fragment);
            addScrollAnimations();
        }, 300);
    }

    // Intersection Observer for scroll animations
    function addScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.outlet-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Enhanced search with suggestions
    function showSearchSuggestions(input, suggestionsContainer) {
        const query = input.value.toLowerCase().trim();
        
        if (query.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const suggestions = popularSearches.filter(item => 
            item.term.includes(query)
        ).slice(0, 5);

        if (suggestions.length > 0) {
            suggestionsContainer.innerHTML = suggestions.map(item => `
                <div class="suggestion-item" data-term="${item.term}">
                    <i class="${item.icon} suggestion-icon"></i>
                    <span>${item.term}</span>
                </div>
            `).join('');
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }

    function hideSearchSuggestions(suggestionsContainer) {
        setTimeout(() => {
            suggestionsContainer.style.display = 'none';
        }, 200);
    }

    function populateFilters() {
        const cuisines = ['all', ...new Set(restaurantData.flatMap(r => r.cuisine.toLowerCase().split(/, | & /)).filter(c => c && c !== 'not specified'))];
        const createButtons = (container) => {
            container.innerHTML = '';
            cuisines.forEach(cuisine => {
                const btn = document.createElement('button');
                btn.className = `filter-btn ${cuisine === 'all' ? 'active' : ''}`;
                btn.dataset.filter = cuisine;
                btn.textContent = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
                btn.setAttribute('aria-label', `Filter by ${cuisine}`);
                container.appendChild(btn);
            });
        };
        createButtons(DOMElements.homeFilterButtons);
        createButtons(DOMElements.restaurantFilterButtons);
    }

    function handleSearch(event) {
        const input = event.target;
        const isHome = input === DOMElements.homeSearchInput;
        const suggestionsContainer = isHome ? DOMElements.homeSearchSuggestions : DOMElements.restaurantSearchSuggestions;
        
        input.nextElementSibling.nextElementSibling.classList.toggle('visible', input.value.length > 0);
        
        // Show suggestions
        showSearchSuggestions(input, suggestionsContainer);
        
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            currentSearchTerm = input.value.toLowerCase().trim();
            if (currentSearchTerm && DOMElements.homePage.style.display !== 'none') {
                showPage('restaurants');
                DOMElements.restaurantSearchInput.value = currentSearchTerm;
                DOMElements.restaurantSearchInput.nextElementSibling.nextElementSibling.classList.add('visible');
            }
            renderRestaurants();
        }, 300);
    }

    function clearSearch(input) { 
        input.value = ''; 
        input.dispatchEvent(new Event('input')); 
    }

    function handleFilterClick(event) {
        if (!event.target.matches('.filter-btn')) return;
        currentFilter = event.target.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
        renderRestaurants();
    }

    // Enhanced page navigation with sticky search
    function showPage(pageId) {
        DOMElements.homePage.style.display = 'none';
        DOMElements.restaurantsPage.style.display = 'none';
        const pageToShow = document.getElementById(`${pageId}Page`);
        if(pageToShow) pageToShow.style.display = 'block';
        DOMElements.darkModeToggle.style.display = pageId === 'home' ? 'flex' : 'none';
        
        if (pageId === 'restaurants') { 
            DOMElements.restaurantSearchInput.value = DOMElements.homeSearchInput.value;
            // Make search sticky on scroll
            setTimeout(() => {
                window.addEventListener('scroll', handleSticky);
            }, 100);
        } else {
            window.removeEventListener('scroll', handleSticky);
        }
        
        window.scrollTo(0, 0);
    }

    // Sticky search functionality
    function handleSticky() {
        if (DOMElements.restaurantsPage.style.display !== 'none') {
            const scrollY = window.scrollY;
            DOMElements.pageSearchBox.classList.toggle('sticky', scrollY > 100);
        }
    }

    // FAB scroll to top functionality
    function handleScrollFab() {
        const scrollY = window.scrollY;
        DOMElements.scrollToTopFab.classList.toggle('visible', scrollY > 300);
    }

    function toggleFavorite(restoName) {
        const index = favoriteRestaurants.indexOf(restoName);
        if (index > -1) { 
            favoriteRestaurants.splice(index, 1); 
        } else { 
            favoriteRestaurants.push(restoName); 
        }
        localStorage.setItem('favoriteRestaurants', JSON.stringify(favoriteRestaurants));
        renderRestaurants();
    }

    // Share functionality
    function shareRestaurant(restoName) {
        const resto = restaurantData.find(r => r.searchName === restoName);
        if (resto && navigator.share) {
            navigator.share({
                title: `Check out ${resto.name} on FoodieSpot`,
                text: `${resto.name} - ${resto.cuisine} near UPES campus`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const text = `Check out ${resto.name} on FoodieSpot!`;
            navigator.clipboard.writeText(text).then(() => {
                // You could show a toast notification here
                console.log('Copied to clipboard');
            });
        }
    }

    function showModal(modalElement) { 
        modalElement.classList.add('active'); 
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal(modalElement) { 
        modalElement.classList.remove('active'); 
        document.body.style.overflow = 'auto'; 
    }
    
    function showRestaurantModal(resto) {
        const setContent = (id, content) => { DOMElements.restaurantModal.querySelector(`#${id}`).textContent = content || 'N/A'; };
        setContent('modalRestaurantName', resto.name); 
        setContent('modalRestaurantCuisine', resto.cuisine); 
        setContent('modalRestaurantRating', resto.rating);
        setContent('modalRestaurantLocation', resto.location); 
        setContent('modalRestaurantTimings', resto.timings); 
        setContent('modalRestaurantContact', resto.contact);
        setContent('modalRestaurantMinOrder', resto.minOrder); 
        setContent('modalRestaurantDishes', resto.dishes);
        
        const orderLinksContainer = DOMElements.restaurantModal.querySelector('#modalOrderLinksContainer');
        orderLinksContainer.innerHTML = ''; 

        if (resto.orderLinks) {
            if (resto.orderLinks.zomato) {
                orderLinksContainer.innerHTML += `
                    <a href="${resto.orderLinks.zomato}" class="order-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Order on Zomato
                    </a>`;
            }
            if (resto.orderLinks.swiggy) {
                orderLinksContainer.innerHTML += `
                    <a href="${resto.orderLinks.swiggy}" class="order-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Order on Swiggy
                    </a>`;
            }
        }

        const callOrderBadge = DOMElements.restaurantModal.querySelector('#modalRestaurantCallOrder');
        callOrderBadge.textContent = resto.takesCallOrders ? 'Yes' : 'No';
        callOrderBadge.className = `badge ${resto.takesCallOrders ? 'yes' : 'no'}`;
        
        const menuGallery = DOMElements.restaurantModal.querySelector('#menuGallery'); 
        menuGallery.innerHTML = '';
        DOMElements.restaurantModal.querySelector('#menuImagesSection').style.display = (resto.menuImages && resto.menuImages.length > 0) ? 'block' : 'none';
        if (resto.menuImages) { 
            resto.menuImages.forEach(src => menuGallery.innerHTML += `<div class="menu-image"><img src="${src}" alt="${resto.name} menu" loading="lazy"></div>`); 
        }
        
        showModal(DOMElements.restaurantModal);
    }
    
    function initializeDarkMode() {
        const savedMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('light-mode', savedMode === 'light' || (!savedMode && !prefersDark));
        updateDarkModeIcon();
    }

    function toggleDarkMode() { 
        document.body.classList.toggle('light-mode'); 
        localStorage.setItem('darkMode', document.body.classList.contains('light-mode') ? 'light' : 'dark'); 
        updateDarkModeIcon(); 
        
        // Add haptic feedback simulation
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    function updateDarkModeIcon() { 
        DOMElements.darkModeToggle.querySelector('i').className = document.body.classList.contains('light-mode') ? 'fas fa-moon' : 'fas fa-sun'; 
    }

    // Enhanced event listeners
    function setupEventListeners() {
        document.getElementById('logoLink').addEventListener('click', (e) => { e.preventDefault(); showPage('home'); });
        document.getElementById('homeBtn').addEventListener('click', () => showPage('home'));
        document.getElementById('browseAllBtn').addEventListener('click', (e) => { e.preventDefault(); showPage('restaurants'); });
        document.getElementById('addOutletBtn').addEventListener('click', () => showModal(DOMElements.addOutletModal));

        // Enhanced search listeners
        [DOMElements.homeSearchInput, DOMElements.restaurantSearchInput].forEach(input => {
            input.addEventListener('input', handleSearch);
            input.addEventListener('focus', (e) => {
                const suggestionsContainer = e.target === DOMElements.homeSearchInput ? 
                    DOMElements.homeSearchSuggestions : DOMElements.restaurantSearchSuggestions;
                if (e.target.value.trim()) {
                    showSearchSuggestions(e.target, suggestionsContainer);
                }
            });
            input.addEventListener('blur', (e) => {
                const suggestionsContainer = e.target === DOMElements.homeSearchInput ? 
                    DOMElements.homeSearchSuggestions : DOMElements.restaurantSearchSuggestions;
                hideSearchSuggestions(suggestionsContainer);
            });
            input.nextElementSibling.nextElementSibling.addEventListener('click', () => clearSearch(input));
        });

        // Search suggestions click handlers
        [DOMElements.homeSearchSuggestions, DOMElements.restaurantSearchSuggestions].forEach(container => {
            container.addEventListener('click', (e) => {
                const suggestionItem = e.target.closest('.suggestion-item');
                if (suggestionItem) {
                    const term = suggestionItem.dataset.term;
                    const input = container === DOMElements.homeSearchSuggestions ? 
                        DOMElements.homeSearchInput : DOMElements.restaurantSearchInput;
                    input.value = term;
                    input.dispatchEvent(new Event('input'));
                    container.style.display = 'none';
                }
            });
        });

        // Quick category handlers
        document.querySelector('.quick-categories').addEventListener('click', (e) => {
            if (e.target.matches('.category-pill')) {
                const category = e.target.dataset.category;
                DOMElements.homeSearchInput.value = category;
                DOMElements.homeSearchInput.dispatchEvent(new Event('input'));
            }
        });

        [DOMElements.homeFilterButtons, DOMElements.restaurantFilterButtons].forEach(c => c.addEventListener('click', handleFilterClick));
        
        document.querySelectorAll('.modal-overlay').forEach(m => m.querySelector('.modal-close').addEventListener('click', () => closeModal(m)));
        DOMElements.imageModal.querySelector('.image-modal-close').addEventListener('click', () => closeModal(DOMElements.imageModal));
        
        document.querySelector('.footer-links').addEventListener('click', e => {
            if (e.target.matches('.footer-link')) {
                e.preventDefault();
                const info = infoContent[e.target.dataset.modal];
                if (info) {
                    DOMElements.infoModal.querySelector('#infoModalTitle').textContent = info.title;
                    DOMElements.infoModal.querySelector('#infoModalContent').innerHTML = info.content;
                    showModal(DOMElements.infoModal);
                }
            }
        });

        // Enhanced restaurant grid handlers
        DOMElements.restaurantsGrid.addEventListener('click', e => {
            const card = e.target.closest('.outlet-card');
            if (!card) return;
            const restoData = restaurantData.find(r => r.searchName === card.dataset.name);
            
            if (e.target.closest('.favorite-btn')) { 
                toggleFavorite(card.dataset.name); 
            } else if (e.target.closest('.share-btn')) {
                shareRestaurant(card.dataset.name);
            } else if (restoData) { 
                showRestaurantModal(restoData); 
            }
        });

        DOMElements.restaurantModal.addEventListener('click', e => {
            if(e.target.matches('.menu-image img')) {
                DOMElements.modalImage.src = e.target.src;
                showModal(DOMElements.imageModal);
            }
        });

        DOMElements.darkModeToggle.addEventListener('click', toggleDarkMode);
        
        // FAB functionality
        DOMElements.scrollToTopFab.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Scroll handlers
        window.addEventListener('scroll', handleScrollFab);
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('darkMode')) { 
                document.body.classList.toggle('light-mode', !e.matches); 
                updateDarkModeIcon(); 
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'k':
                        e.preventDefault();
                        DOMElements.homeSearchInput.focus();
                        break;
                    case 'd':
                        e.preventDefault();
                        toggleDarkMode();
                        break;
                }
            }
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
            }
        });
    }

    // Initialize the application
    document.addEventListener('DOMContentLoaded', () => { 
        initializeDarkMode(); 
        populateFilters(); 
        renderRestaurants(); 
        setupEventListeners(); 
        showPage('home'); 
    });
})();
