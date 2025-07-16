(function() {
    'use strict';

    // --- DATA ---
    // The complete list of all 42 restaurants.
    const restaurantData = [
        { name: "Anup Roll & Shake Fast Food", searchName: "anup roll & shake fast food", cuisine: "Fast Food", rating: "4.0 ★ (100+)", location: "71, Vikas Nagar, Bidholi, Dehradun", timings: "Closes at 4AM", contact: "+917088677105", minOrder: "₹100", orderLink: "https://www.zomato.com/dehradun/anup-roll-shake-fast-food-bidholi", takesCallOrders: true, dishes: "Rolls, Shakes, Burgers, Wraps", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Anup_Roll.jpeg"] },
        { name: "Isquare Restaurant And Cafe", searchName: "isquare restaurant and cafe", cuisine: "Multi-Cuisine, Cafe", rating: "4.2 ★ (150+)", location: "Post Office Road, Near I Square Girls Hostel, Bidholi", timings: "Closes at 11:30PM", contact: "+918858857775", minOrder: "₹150", orderLink: "https://www.zomato.com/dehradun/isquare-restaurant-and-cafe-bidholi/order", takesCallOrders: true, dishes: "Indian, Chinese, Continental, Beverages", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare2.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ISquare3.jpeg"] },
        { name: "All Rounder Chacha", searchName: "all rounder chacha restaurant & cafe", cuisine: "North Indian", rating: "4.1 ★ (120+)", location: "Near Bright Wave School, Bidholi, Dehradun", timings: "Open 24 Hours", contact: "+918818037720", minOrder: "₹120", orderLink: "https://www.zomato.com/dehradun/all-rounder-chacha-restaurant-cafe-bidholi", takesCallOrders: true, dishes: "Roti, Dal, Sabzi, Curry, Biryani", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/AllRounder1.jpeg"] },
        { name: "Maal & Chooz", searchName: "maal & chooz", cuisine: "Fast Food, Snacks", rating: "4.0 ★ (90+)", location: "Vikasnagar, Bidholi, Dehradun", timings: "Closes at 1:45AM", contact: "+917737178155", minOrder: "₹80", orderLink: "https://www.zomato.com/dehradun/maal-chooz-bidholi", takesCallOrders: true, dishes: "Snacks, Fast Food, Sandwiches, Momos", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Maal_&_Chooz.jpeg"] },
        { name: "Swadu Cafe", searchName: "swadu cafe", cuisine: "Cafe, Continental", rating: "4.3 ★ (110+)", location: "Upper Kandoli, UPES Road, Near Girls Hostel, Bidholi", timings: "Closes at 10:45PM", contact: "+919119862486", minOrder: "₹150", orderLink: "https://www.zomato.com/dehradun/swadu-cafe-bidholi", takesCallOrders: true, dishes: "Coffee, Sandwiches, Pasta, Desserts", menuImages: [] },
        { name: "Romnik Pizza", searchName: "romnik pizza", cuisine: "Pizza, Fast Food", rating: "4.1 ★ (85+)", location: "Near UPES, Bidholi, Dehradun", timings: "Closes at 11PM", contact: "+917900688688", minOrder: "₹200", orderLink: "https://www.zomato.com/dehradun/romnik-pizza-bidholi", takesCallOrders: true, dishes: "Pizza, Garlic Bread, Pasta, Wings", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Romnik_Pizza1.jpeg"] },
        { name: "Having Craving", searchName: "having craving", cuisine: "Fast Food, Snacks", rating: "3.9 ★ (75+)", location: "Shop 19, Bidholi Complex, Near UPES, Bidholi", timings: "Closes at 11PM", contact: "+918439333330", minOrder: "₹100", orderLink: "https://www.zomato.com/dehradun/having-craving-bidholi", takesCallOrders: false, dishes: "Burgers, Fries, Momos, Sandwiches", menuImages: [] },
        { name: "Emotions Confectionery", searchName: "emotions confectionery", cuisine: "Bakery, Desserts", rating: "4.4 ★ (130+)", location: "Near UPES, Bidholi, Dehradun", timings: "Closes at 9:15PM", contact: "+919897776785, +917505615583", minOrder: "₹80", orderLink: "https://www.zomato.com/dehradun/emotions-confectionery-bidholi/order", takesCallOrders: true, dishes: "Cakes, Pastries, Cookies, Desserts", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Emotions_Confectionary2.jpeg"] },
        { name: "Mentl Parathe Wale", searchName: "mentl parathe wale", cuisine: "North Indian", rating: "4.2 ★ (95+)", location: "Shop 20, Bidholi Complex, Vikasnagar, Bidholi", timings: "Closes at 10:15PM", contact: "+919151591507", minOrder: "₹120", orderLink: "https://www.zomato.com/dehradun/mentl-parathe-wale-bidholi/order", takesCallOrders: true, dishes: "Paratha, Dal, Paneer, Lassi", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl2.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mentl3.jpeg"] },
        { name: "Chai Sutta Bar", searchName: "chai sutta bar", cuisine: "Cafe, Beverages", rating: "4.3 ★ (140+)", location: "Bidholi Complex, Near Bidholi, Dehradun", timings: "Closes at 11PM", contact: "+917078365600", minOrder: "₹80", orderLink: "https://www.zomato.com/dehradun/chai-sutta-bar-1-bidholi/order", takesCallOrders: true, dishes: "Tea, Coffee, Snacks, Shakes", menuImages: [] },
        { name: "Mahi", searchName: "mahi", cuisine: "Fast Food", rating: "4.0 ★ (50+)", location: "Bidholi, Misraspatti, Uttarakhand 248197", timings: "Not specified", contact: "+917895334037", minOrder: "₹200", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mahi1.jpeg"] },
        { name: "Mayank", searchName: "mayank", cuisine: "Multi-Cuisine", rating: "4.1 ★ (80+)", location: "Kharakhet, Bidholi, Uttarakhand 248197", timings: "9AM - 9PM", contact: "+918958973063, +917983437338", minOrder: "Not specified", orderLink: "https://www.swiggy.com/city/dehradun/mayank-restaurant-bidholi-rest971877", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Mayank1.jpeg"] },
        { name: "Meenakshi", searchName: "meenakshi", cuisine: "North Indian", rating: "4.0 ★ (60+)", location: "UPES petroleum, bidholi, Prem Nagar, Dehradun", timings: "11AM - 10PM", contact: "+918394024356", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Forkful", searchName: "forkful", cuisine: "Fast Food", rating: "4.2 ★ (90+)", location: "Chowk, opp. Woodstock hostel, Bidholi, Dehradun", timings: "Open till 3AM", contact: "+919528276454", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/forkfull-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Forkful.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Forkful1.jpeg"] },
        { name: "TNB Taste Best Cafe", searchName: "tnb", cuisine: "Cafe", rating: "4.1 ★ (70+)", location: "Upper Kandoli Bidholi Road Premnagar, Uttarakhand 248007", timings: "Not specified", contact: "+917906978010", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/tnb-taste-best-cafe-prem-nagar", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Salview", searchName: "salview", cuisine: "Multi-Cuisine", rating: "4.0 ★ (50+)", location: "Bidholi, Kharakhet, Uttarakhand 248006", timings: "8AM - 12AM", contact: "+917452900298", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Mr. Burger", searchName: "mr burger", cuisine: "Fast Food", rating: "3.9 ★ (40+)", location: "Not specified", timings: "Not specified", contact: "+918191820830", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Burgers, Fries, Shakes", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/MrBurger1.jpeg"] },
        { name: "Big Little Things", searchName: "blt", cuisine: "Cafe", rating: "4.3 ★ (100+)", location: "Shop No. 17, Vikasnagar, Dehradun", timings: "Closes at 11PM", contact: "+919867854356", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/big-little-things-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BLT.jpeg"] },
        { name: "TIF", searchName: "tif", cuisine: "Not specified", rating: "Not rated", location: "Not specified", timings: "Not specified", contact: "Not specified", minOrder: "Not specified", orderLink: "", takesCallOrders: false, dishes: "Not specified", menuImages: [] },
        { name: "Pizza Hub", searchName: "pizza hub", cuisine: "Pizza", rating: "4.0 ★ (80+)", location: "Dehradun Township- Bidholi, Majhaun Rd, Misraspatti", timings: "11AM - 11PM", contact: "+917900442255", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/pizza-hub-bidholi", takesCallOrders: true, dishes: "Pizzas, Sides, Beverages", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaHub.jpeg"] },
        { name: "Big Bite", searchName: "big bite", cuisine: "Fast Food", rating: "3.9 ★ (60+)", location: "Bidholi, Misraspatti, Uttarakhand 248197", timings: "11AM - 11PM", contact: "+919756799446", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Spicy Bowl", searchName: "spicy bowl", cuisine: "North Indian", rating: "4.0 ★ (70+)", location: "CX78+9QW, Bidholi, Misraspatti, Uttarakhand 248197", timings: "9AM - 9:30PM", contact: "+919266951239", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/spicy-bowl-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Snacks Adda", searchName: "snacks adda", cuisine: "Cafe", rating: "4.1 ★ (50+)", location: "Vikasnagar, Bidholi, Uttarakhand 248007", timings: "Closes at 3AM", contact: "+91975800710, +918585992216", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/snacks-adda-bidholi", takesCallOrders: false, dishes: "Chinese, North Indian, Rolls, Momos, Shake", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SnacksAdda1.jpeg"] },
        { name: "Anavrin", searchName: "anavrin", cuisine: "Not specified", rating: "Not rated", location: "Not specified", timings: "Not specified", contact: "Not specified", minOrder: "Not specified", orderLink: "", takesCallOrders: false, dishes: "Not specified", menuImages: [] },
        { name: "Sandeep Fast Food", searchName: "sandeep fast food", cuisine: "Fast Food", rating: "3.8 ★ (40+)", location: "Nearby post office, Bidholi, Misraspatti", timings: "Not specified", contact: "+919627143215, +917895632463", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sandeep.jpeg"] },
        { name: "Shubh Pahadi", searchName: "shubh pahadi", cuisine: "North Indian", rating: "4.2 ★ (90+)", location: "Shubh pahadi restaurant, Bidholi, Uttarakhand 248007", timings: "Open 24 hours", contact: "+917409708807, +918156053992", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/ShubhPahadi.jpeg"] },
        { name: "Deepak Restaurant", searchName: "deepak", cuisine: "North Indian", rating: "4.0 ★ (80+)", location: "UPES Campus, Bidholi, Dehradun, Uttarakhand 248007", timings: "Open 24 hours", contact: "+916396591060", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Deepak1.jpeg"] },
        { name: "Kanoha Cafe", searchName: "kanoha cafe", cuisine: "Cafe", rating: "4.3 ★ (100+)", location: "Bidholi Rd, Kharakhet, Misraspatti, Uttarakhand 248007", timings: "11AM - 10PM", contact: "+919870601929", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/konoha-cafe-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Kanoha2.jpeg"] },
        { name: "Gym Diet", searchName: "gym diet", cuisine: "Healthy Food", rating: "4.4 ★ (120+)", location: "CX7C+29M, Bidholi, Kharakhet, Uttarakhand 248197", timings: "6AM - 11:30PM", contact: "+919759720152", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/gym-diet-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/GymDiet.jpeg"] },
        { name: "Pizza Dilite", searchName: "pizza dilite", cuisine: "Pizza", rating: "4.1 ★ (80+)", location: "CX7C+5X5, Bidholi Rd, Kharakhet, Uttarakhand 248197", timings: "Closes at 10PM", contact: "+917037455700", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/PizzaDilite.jpeg"] },
        { name: "4 Loser Restaurant", searchName: "4 loser", cuisine: "Cafe", rating: "4.2 ★ (90+)", location: "Near Sai Mandir, Prem Nagar, Bidholi, Dehradun", timings: "Closes at 1PM", contact: "+917906071734", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/4-losers-restaurant-cafe-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/4Loser1.jpeg"] },
        { name: "Indie Cafe", searchName: "indie cafe", cuisine: "Cafe", rating: "4.3 ★ (110+)", location: "Near Royal Stay hostel, Dehradun, Uttarakhand 248007", timings: "Closes at 11:30PM", contact: "+917409181819", minOrder: "Not specified", orderLink: "https://www.swiggy.com/city/dehradun/the-indie-cafe-deheradun-township-bidholi-rest875255", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/IndieCafe.jpeg"] },
        { name: "Burger Belly", searchName: "burger belly", cuisine: "Fast Food", rating: "4.0 ★ (70+)", location: "Bidholi, Dehradun, Uttarakhand 248007", timings: "Closes at 4AM", contact: "Not specified", minOrder: "Not specified", orderLink: "https://www.swiggy.com/city/dehradun/burger-belly-bidholi-rest999481", takesCallOrders: false, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BurgerBelly.jpeg"] },
        { name: "Bunk Cafe", searchName: "bunk cafe", cuisine: "Cafe", rating: "4.4 ★ (130+)", location: "Near Avalon hostel, kandoli, vishanpur, Dehradun", timings: "Closes at 4AM", contact: "+919891610696, +917895566236", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/bunk-cafe-bidholi/order", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/BunkCafe.jpeg"] },
        { name: "Tongue'N Taste", searchName: "tongue n taste", cuisine: "Multi-Cuisine", rating: "4.2 ★ (100+)", location: "Infront of Jiya Hostel Upper, Kandoli, Tibet colony", timings: "Closes at 11PM", contact: "+918439010011", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/toungue-n-taste-bidholi", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/T'nT1.jpeg"] },
        { name: "Threesome (You Me & Food)", searchName: "threesome", cuisine: "Multi-Cuisine", rating: "4.3 ★ (120+)", location: "Bidholi Road, Dehradun, Pondha, Uttarakhand 248007", timings: "Closes at 4AM", contact: "+918885552368", minOrder: "Not specified", orderLink: "https://www.swiggy.com/city/dehradun/threesome-you-me-and-food-bidholi-rest971021", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Cafe Panjtara", searchName: "panjtara", cuisine: "Cafe", rating: "4.2 ★ (80+)", location: "House 86, Upper Colony, Kandhauli, Vikas Nagar, Dehradun", timings: "Not specified", contact: "+918625841928", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/cafe-panjtara-vikas-nagar", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Panjtara1.jpeg"] },
        { name: "Kandoli Adda", searchName: "kandoli adda", cuisine: "Multi-Cuisine", rating: "4.3 ★ (110+)", location: "Opposite Bella Vista Girls Hostel, Kandoli, Bidholi", timings: "Closes at 9:15PM", contact: "+918393870202", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/kandoli-adda-bidholi/order", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/KandoliAdda2.jpeg"] },
        { name: "Cafe Sky View", searchName: "cafe sky view", cuisine: "Cafe", rating: "4.4 ★ (130+)", location: "Cafe Sky, View Upper, Kandoli Gusain Gaon, Bidholi, Dehradun", timings: "Closes at 10:45PM", contact: "+918171652916", minOrder: "Not specified", orderLink: "https://www.zomato.com/dehradun/cafe-sky-view-bidholi/order", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView1.jpeg", "https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/SkyView2.jpeg"] },
        { name: "Kainchi Products", searchName: "kainchi products", cuisine: "Bakery", rating: "4.0 ★ (50+)", location: "Not specified", timings: "Not specified", contact: "+918630273212", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: [] },
        { name: "Sona Restaurant", searchName: "sona restaurant", cuisine: "Multi-Cuisine", rating: "4.0 ★ (50+)", location: "Not specified", timings: "Not specified", contact: "+918057411534, +919259039141", minOrder: "Not specified", orderLink: "", takesCallOrders: true, dishes: "Not specified", menuImages: ["https://raw.githubusercontent.com/aarohim24/FoodieSpot_images/main/Sona.jpeg"] }
    ];

    const infoContent = {
        about: { title: "About FoodieSpot", content: `<p>FoodieSpot is your ultimate guide to discovering the best food options around UPES campus, Dehradun.</p><p>Our mission is to help students and faculty find great places to eat, with detailed information about each outlet including menus, prices, and ordering options.</p>` },
        contact: { title: "Contact Us", content: `<p><i class="fas fa-envelope"></i> Email: contact@foodiespot.upes</p><p><i class="fas fa-map-marker-alt"></i> Address: UPES Bidholi Campus, Dehradun</p>` },
        terms: { title: "Terms of Service", content: `<p>By using FoodieSpot, you agree to these terms: We strive to provide accurate information but cannot guarantee all details are current or correct. Users are responsible for verifying restaurant details before visiting or ordering.</p>`},
        privacy: { title: "Privacy Policy", content: `<p>FoodieSpot respects your privacy. We may collect basic usage data to improve our service, but we don't store personal information without your consent. Any data collected is used solely to enhance your experience.</p>` }
    };

    // --- STATE ---
    let currentSearchTerm = '';
    let currentFilter = 'all';
    let searchDebounceTimer;
    let favoriteRestaurants = JSON.parse(localStorage.getItem('favoriteRestaurants')) || [];

    // --- DOM ELEMENTS ---
    const DOMElements = {
        homePage: document.getElementById('homePage'),
        restaurantsPage: document.getElementById('restaurantsPage'),
        restaurantsGrid: document.getElementById('restaurantsGrid'),
        homeSearchInput: document.getElementById('homeSearchInput'),
        restaurantSearchInput: document.getElementById('restaurantSearchInput'),
        clearHomeSearch: document.getElementById('clearHomeSearch'),
        clearRestaurantSearch: document.getElementById('clearRestaurantSearch'),
        searchResultsMessage: document.getElementById('searchResultsMessage'),
        homeFilterButtons: document.getElementById('homeFilterButtons'),
        restaurantFilterButtons: document.getElementById('restaurantFilterButtons'),
        restaurantModal: document.getElementById('restaurantModal'),
        infoModal: document.getElementById('infoModal'),
        imageModal: document.getElementById('imageModal'),
        modalImage: document.getElementById('modalImage'),
    };

    // --- FUNCTIONS ---

    /** Renders restaurant cards based on filtered data. */
    function renderRestaurants() {
        const filteredData = restaurantData.filter(resto => {
            const searchName = resto.searchName || resto.name.toLowerCase();
            const cuisine = resto.cuisine ? resto.cuisine.toLowerCase() : '';
            const dishes = resto.dishes ? resto.dishes.toLowerCase() : '';

            const matchesFilter = currentFilter === 'all' || cuisine.includes(currentFilter);
            const matchesSearch = !currentSearchTerm ||
                searchName.includes(currentSearchTerm) ||
                cuisine.includes(currentSearchTerm) ||
                dishes.includes(currentSearchTerm);

            return matchesFilter && matchesSearch;
        });

        DOMElements.restaurantsGrid.innerHTML = ''; // Clear existing cards
        
        if (filteredData.length === 0) {
            DOMElements.searchResultsMessage.innerHTML = `No restaurants found for "<strong>${currentSearchTerm || currentFilter}</strong>"`;
            DOMElements.searchResultsMessage.className = 'search-results-message show no-results';
        } else {
            if (currentSearchTerm || currentFilter !== 'all') {
                DOMElements.searchResultsMessage.innerHTML = `Found <strong>${filteredData.length}</strong> matching results`;
                DOMElements.searchResultsMessage.className = 'search-results-message show results-found';
            } else {
                DOMElements.searchResultsMessage.style.display = 'none';
            }
        }
        
        const fragment = document.createDocumentFragment();
        filteredData.forEach(resto => {
            const card = document.createElement('div');
            card.className = 'outlet-card';
            card.dataset.name = resto.searchName;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            
            const isFavorite = favoriteRestaurants.includes(resto.searchName);

            card.innerHTML = `
                <button class="favorite-btn" aria-label="Add to favorites">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <div class="outlet-header">
                    <h2 class="outlet-name">${resto.name}</h2>
                    <p class="outlet-cuisine">${resto.cuisine}</p>
                    <span class="rating">${resto.rating}</span>
                    <div class="phone-order">
                        <i class="fas ${resto.takesCallOrders ? 'fa-phone-alt' : 'fa-times-circle'}"></i> 
                        ${resto.takesCallOrders ? 'Accepts phone orders' : 'No phone orders'}
                    </div>
                </div>
                <div class="outlet-details">
                    <div class="detail-row">
                        <span class="detail-label">Min. Order:</span>
                        <span class="detail-value">${resto.minOrder || 'N/A'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Status:</span>
                        <span class="status">${resto.timings || 'N/A'}</span>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
        });
        DOMElements.restaurantsGrid.appendChild(fragment);
    }
    
    /** Populates filter buttons in the DOM. */
    function populateFilters() {
        const cuisines = ['all', ...new Set(restaurantData.flatMap(r => r.cuisine.toLowerCase().split(/, | & /)).filter(c => c && c !== 'not specified'))];
        const createButtons = (container) => {
            container.innerHTML = '';
            cuisines.forEach(cuisine => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn';
                btn.dataset.filter = cuisine;
                btn.textContent = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
                if (cuisine === 'all') btn.classList.add('active');
                container.appendChild(btn);
            });
        };
        createButtons(DOMElements.homeFilterButtons);
        createButtons(DOMElements.restaurantFilterButtons);
    }

    /** Handles search input with debouncing. */
    function handleSearch(event) {
        const input = event.target;
        const clearBtn = input.nextElementSibling.nextElementSibling;
        
        clearBtn.classList.toggle('visible', input.value.length > 0);
        
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            currentSearchTerm = input.value.toLowerCase().trim();
            if (currentSearchTerm && DOMElements.homePage.style.display !== 'none') {
                showPage('restaurants');
                DOMElements.restaurantSearchInput.value = currentSearchTerm;
                DOMElements.restaurantSearchInput.focus();
                DOMElements.clearRestaurantSearch.classList.add('visible');
            }
            renderRestaurants();
        }, 300);
    }

    /** Clears a search input field. */
    function clearSearch(inputElement) {
        inputElement.value = '';
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    }

    /** Handles filter button clicks. */
    function handleFilterClick(event) {
        if (!event.target.matches('.filter-btn')) return;
        event.preventDefault();
        
        const filter = event.target.dataset.filter;
        currentFilter = filter;
        
        const parentContainer = event.target.closest('.filter-buttons');
        parentContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        renderRestaurants();
    }

    /** Shows a specific page and hides others. */
    function showPage(pageId) {
        DOMElements.homePage.style.display = 'none';
        DOMElements.restaurantsPage.style.display = 'none';
        
        const pageToShow = document.getElementById(`${pageId}Page`);
        if(pageToShow) pageToShow.style.display = 'block';

        if (pageId === 'restaurants') {
            DOMElements.restaurantSearchInput.value = DOMElements.homeSearchInput.value;
        }
        
        window.scrollTo(0, 0);
    }
    
    /** Toggles the favorite status of a restaurant. */
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

    /** Shows the modal with restaurant details. */
    function showRestaurantModal(resto) {
        document.getElementById('modalRestaurantName').textContent = resto.name;
        document.getElementById('modalRestaurantCuisine').textContent = resto.cuisine;
        document.getElementById('modalRestaurantRating').textContent = resto.rating;
        document.getElementById('modalRestaurantLocation').textContent = resto.location;
        document.getElementById('modalRestaurantTimings').textContent = resto.timings;
        document.getElementById('modalRestaurantContact').textContent = resto.contact;
        document.getElementById('modalRestaurantMinOrder').textContent = resto.minOrder;
        document.getElementById('modalRestaurantDishes').textContent = resto.dishes;

        const orderLink = document.getElementById('modalRestaurantOrderLink');
        if(resto.orderLink) {
            orderLink.href = resto.orderLink;
            orderLink.style.display = 'inline-block';
        } else {
            orderLink.style.display = 'none';
        }

        const callOrderBadge = document.getElementById('modalRestaurantCallOrder');
        callOrderBadge.textContent = resto.takesCallOrders ? 'Yes' : 'No';
        callOrderBadge.className = `badge ${resto.takesCallOrders ? 'yes' : 'no'}`;

        const menuGallery = document.getElementById('menuGallery');
        const menuSection = document.getElementById('menuImagesSection');
        menuGallery.innerHTML = '';
        if (resto.menuImages && resto.menuImages.length > 0) {
            menuSection.style.display = 'block';
            resto.menuImages.forEach(src => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'menu-image';
                imgContainer.innerHTML = `<img src="${src}" alt="${resto.name} menu" loading="lazy">`;
                menuGallery.appendChild(imgContainer);
            });
        } else {
            menuSection.style.display = 'none';
        }
        
        DOMElements.restaurantModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    /** Shows the info modal (About, Contact, etc.). */
    function showInfoModal(type) {
        const info = infoContent[type];
        if (!info) return;
        document.getElementById('infoModalTitle').textContent = info.title;
        document.getElementById('infoModalContent').innerHTML = info.content;
        DOMElements.infoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalElement) {
        modalElement.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    /** Dark Mode Logic */
    function initializeDarkMode() {
        const savedMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        if (savedMode === 'light' || (savedMode === null && !prefersDark)) {
            document.body.classList.add('light-mode');
        }
        updateDarkModeIcon();
    }

    function toggleDarkMode() {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        updateDarkModeIcon();
    }

    function updateDarkModeIcon() {
        const icon = document.querySelector('.dark-mode-toggle i');
        if (icon) {
            icon.className = document.body.classList.contains('light-mode') ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        document.getElementById('homeBtn').addEventListener('click', () => showPage('home'));
        document.getElementById('browseAllBtn').addEventListener('click', (e) => {
            e.preventDefault();
            showPage('restaurants');
        });
        document.getElementById('addOutletBtn').addEventListener('click', () => alert('Feature to add an outlet coming soon!'));
        document.getElementById('fabBtn').addEventListener('click', () => alert('Feature to add an outlet coming soon!'));

        DOMElements.homeSearchInput.addEventListener('input', handleSearch);
        DOMElements.restaurantSearchInput.addEventListener('input', handleSearch);
        DOMElements.clearHomeSearch.addEventListener('click', () => clearSearch(DOMElements.homeSearchInput));
        DOMElements.clearRestaurantSearch.addEventListener('click', () => clearSearch(DOMElements.restaurantSearchInput));
        
        DOMElements.homeFilterButtons.addEventListener('click', handleFilterClick);
        DOMElements.restaurantFilterButtons.addEventListener('click', handleFilterClick);
        
        document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('darkMode')) {
                document.body.classList.toggle('light-mode', !e.matches);
                updateDarkModeIcon();
            }
        });
        
        document.getElementById('closeRestaurantModalBtn').addEventListener('click', () => closeModal(DOMElements.restaurantModal));
        document.getElementById('closeInfoModalBtn').addEventListener('click', () => closeModal(DOMElements.infoModal));
        document.getElementById('closeImageModalBtn').addEventListener('click', () => closeModal(DOMElements.imageModal));

        document.querySelector('.footer-links').addEventListener('click', e => {
            if (e.target.matches('.footer-link')) {
                e.preventDefault();
                showInfoModal(e.target.dataset.modal);
            }
        });
        
        DOMElements.restaurantsGrid.addEventListener('click', e => {
            const card = e.target.closest('.outlet-card');
            if (!card) return;

            const restoName = card.dataset.name;
            const restoData = restaurantData.find(r => (r.searchName || r.name.toLowerCase()) === restoName);

            if (e.target.closest('.favorite-btn')) {
                toggleFavorite(restoName);
            } else if (restoData) {
                showRestaurantModal(restoData);
            }
        });
        
        DOMElements.restaurantModal.addEventListener('click', e => {
            if(e.target.matches('.menu-image img')) {
                DOMElements.modalImage.src = e.target.src;
                DOMElements.imageModal.classList.add('active');
            }
        });
    }

    // --- INITIALIZATION ---
    document.addEventListener('DOMContentLoaded', () => {
        initializeDarkMode();
        populateFilters();
        renderRestaurants();
        setupEventListeners();
        showPage('home');
    });

})();
