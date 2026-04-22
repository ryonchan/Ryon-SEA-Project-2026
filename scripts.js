
//Data of hawker stalls come from Google ratings, food reviewers, menus, Michelin Guide website
const hawkerStalls = [
 
  {
    id: 1,
    name: "Hill Street Tai Hwa Pork Noodle",
    hawkerCentre: "Tai Hwa Eating House, Crawford Lane",
    region: "Central",
    price: 8,
    rating: 3.9,
    michelinStatus: "One Michelin-Starred",
    description: "Singapore's only active Michelin-starred hawker stall since 2016. Springy mee pok tossed in black vinegar and chili, topped with minced pork, liver, dumplings, and crispy sole fish. Expect 1-2 hour queues.",
    mustOrder: "Bak Chor Mee (Dry)",
    image: "images/id1.webp"
  },
  {
    id: 2,
    name: "Liao Fan / Hawker Chan (Soya Sauce Chicken Rice)",
    hawkerCentre: "Chinatown Complex Food Centre",
    region: "Central",
    price: 3.5,
    rating: 3.8,
    michelinStatus: "Bib Gourmand",
    description: "The world's first Michelin-starred hawker stall (2016). Chan Hon Meng's soya sauce chicken is silky, affordable and famous worldwide — a significant part of Singapore food history.",
    mustOrder: "Soya Sauce Chicken Rice",
    image: "images/id2.jpg"
  },
  {
    id: 3,
    name: "Tian Tian Hainanese Chicken Rice",
    hawkerCentre: "Maxwell Food Centre",
    region: "Central",
    price: 6.8,
    rating: 3.9,
    michelinStatus: "Bib Gourmand",
    description: "Singapore's most famous chicken rice. Velvety poached chicken, aromatic oil rice, and a briny-sweet sauce. Anthony Bourdain approved. Expect queues especially on weekends.",
    mustOrder: "Hainanese Chicken Rice(Medium)",
    image: "images/id3.webp"
  },
  {
    id: 4,
    name: "Outram Park Fried Kway Teow Mee",
    hawkerCentre: "Hong Lim Market & Food Centre",
    region: "Central",
    price: 5,
    rating: 4.2,
    michelinStatus: "Bib Gourmand",
    description: "Uncle Ng wakes at 3am to prep his famous char kway teow. Smoky wok hei, plump cockles, and crispy lard. A gold standard in Singapore",
    mustOrder: "Char Kway Teow",
    image: "images/id4.jpg"
  },
  {
    id: 5,
    name: "Mr and Mrs Mohgan's Super Crispy Roti Prata",
    hawkerCentre: "Upper Thompson Road",
    region: "Central",
    price: 5,
    rating: 4.3,
    michelinStatus: "None",
    description: "Singapore's most famous roti prata stall run by a husband-wife duo since 1992. Paper-thin, impossibly crispy prata with fluffy layers. The coin prata — smaller, thicker, crispier — is legendary. Queue starts before they open at 6am. Cash only.",
    mustOrder: "Coin Prata with Curry",
    image: "images/id5.jpg"
  },
  {
    id: 6,
    name: "A Noodle Story",
    hawkerCentre: "Amoy Street Food Centre",
    region: "Central",
    price: 10.80,
    rating: 4.1,
    michelinStatus: "Bib Gourmand",
    description: "Singapore-style ramen with sous-vide pork smoked in wood chips, crispy potato-wrapped prawn, and homemade sambal. Modern hawker reinvention at its most creative.",
    mustOrder: "Singapore-Style Ramen",
    image: "images/id6.webp"
  },
  {
    id: 7,
    name: "Heng Kee Curry Chicken Noodles",
    hawkerCentre: "Hong Lim Market & Food Centre",
    region: "Central",
    price: 6,
    rating: 4.0,
    michelinStatus: "Bib Gourmand",
    description: "Rich, spicy curry broth with freshly chopped chicken and tau pok soaked in gravy. The sambal chilli sauce on the side is essential.",
    mustOrder: "Curry Chicken Noodles",
    image: "images/id7.webp"
  },
  {
    id: 8,
    name: "Nam Sing Hokkien Fried Mee",
    hawkerCentre: "Old Airport Road Food Centre",
    region: "East",
    price: 5,
    rating: 3.3,
    michelinStatus: "Bib Gourmand",
    description: "Serving just one dish since 1960 — Hokkien mee wok-fried in a prawn-infused broth made from shells and tomalley. Over 60 years perfecting a single recipe.",
    mustOrder: "Hokkien Fried Mee",
    image: "images/id8.webp"
  },
  {
    id: 9,
    name: "Jian Bo Tiong Bahru Shui Kueh",
    hawkerCentre: "Tiong Bahru Market",
    region: "Central",
    price: 3.5,
    rating: 3.6,
    michelinStatus: "Bib Gourmand",
    description: "Steamed water rice cakes topped with preserved radish and chili. A Tiong Bahru institution since 1958. Simple, cheap, and entirely addictive.",
    mustOrder: "Shui Kueh(5 pieces)",
    image: "images/id9.jpg",
  },
  {
    id: 10,
    name: "Hong Heng Fried Sotong Prawn Mee",
    hawkerCentre: "Tiong Bahru Market",
    region: "Central",
    price: 5,
    rating: 4.1,
    michelinStatus: "Bib Gourmand",
    description: "Hokkien mee stir-fried with squid, sliced fish, prawn and lime. Wok hei that lingers. Only open Tues-Sun, 10:30am-2:30pm.",
    mustOrder: "Hokkien Mee",
    image: "images/id10.webp",
  },
  {
    id: 11,
    name: "Lian He Ben Ji Claypot Rice",
    hawkerCentre: "Chinatown Complex Food Centre",
    region: "Central",
    price: 8,
    rating: 3.9,
    michelinStatus: "Bib Gourmand",
    description: "Claypot rice with a crispy bottom crust, Chinese sausage, and waxed duck. Only available from 3pm — and it sells out. One of Singapore's most celebrated claypot rice stalls.",
    mustOrder: "Mixed Claypot Rice",
    image: "images/id11.webp"
  },
  {
    id: 12,
    name: "Haron Satay",
    hawkerCentre: "East Coast Lagoon Food Village",
    region: "East",
    price: 8,
    rating: 3.7,
    michelinStatus: "Bib Gourmand",
    description: "Charcoal-grilled satay by the beach. Tender chicken and mutton skewers with fragrant peanut sauce. Best enjoyed at sunset overlooking the sea.",
    mustOrder: "Chicken Satay(10 sticks)",
    image: "images/id12.webp"
  },
  {
    id: 13,
    name: "Allauddin's Biryani",
    hawkerCentre: "Tekka Centre",
    region: "Central",
    price: 7,
    rating: 3.7,
    michelinStatus: "Bib Gourmand",
    description: "Fragrant mutton biryani with saffron-tinged basmati rice. A Little India legend drawing queues from across the island. Portions are generous and prices are fair.",
    mustOrder: "Mutton Biryani",
    image: "images/id13.jpg"
  },
  {
    id: 14,
    name: "Ah Ter Teochew Fish Ball Noodles",
    hawkerCentre: "Amoy Street Food Centre",
    region: "Central",
    price: 4,
    rating: 4.0,
    michelinStatus: "Bib Gourmand",
    description: "Three generations of handmade fish balls served in pork rib broth or dry with chili sauce. Bouncy, fresh, honest. The broth is boiled for hours from pork ribs.",
    mustOrder: "Fish Ball Noodles(Dry)",
    image: "images/id14.webp"
  },
  {
    id: 15,
    name: "Eminent Frog Porridge & Seafood",
    hawkerCentre: "Geylang Road",
    region: "East",
    price: 12,
    rating: 3.8,
    michelinStatus: "Bib Gourmand",
    description: "A Geylang supper institution. Smooth congee with frog legs — a uniquely Singaporean late-night ritual. Best visited after 10pm when the neighbourhood comes alive.",
    mustOrder: "Frog Leg Porridge",
    image: "images/id15.webp"
  },
  {
    id: 16,
    name: "New Lucky Claypot Rice",
    hawkerCentre: "Holland Village Market & Food Centre",
    region: "West",
    price: 8,
    rating: 3.8,
    michelinStatus: "Bib Gourmand",
    description: "Crispy-bottomed claypot rice in the heart of Holland Village. A neighbourhood favourite with decades of history. Worth the wait for the smoky crust.",
    mustOrder: "Claypot Chicken Rice",
    image: "images/id16.jpg"
  },
  {
    id: 17,
    name: "Hai Nan Xing Zhou Beef Noodle",
    hawkerCentre: "Kim Keat Palm Market & Food Centre",
    region: "Central",
    price: 6,         
    rating: 4.2,        
    michelinStatus: "Bib Gourmand",
    description: "70 years of Hainanese-style beef noodles from a friendly uncle who still refuses to use tenderiser. The dry version — thick gloopy gravy simmered for days, thinly blanched beef slices, and a punchy lime-chilli — is the one to order. Often sells out before closing time.",
    mustOrder: "Dry Beef Noodles with Tendon",
    image: "images/id17.jpg"
  },
  {
    id: 18,
    name: "Chef Kang's Noodle House",
    hawkerCentre: "Upper Weld Road",
    region: "Central",
    price: 6,
    rating: 4.4,
    michelinStatus: "Bib Gourmand",
    description: "Wonton noodles with springy handmade noodles and plump shrimp dumplings in a clean, flavourful broth. One of the better wonton noodle specialists in the city.",
    mustOrder: "Wonton Noodles",
    image: "images/id18.webp"
  },
  {
    id: 19,
    name: "Jalan Sultan Prawn Mee",
    hawkerCentre: "Lorong 1 Geylang",
    region: "Central",
    price: 8,         
    rating: 4.0,        
    michelinStatus: "Bib Gourmand",
    description: "Over 70 years of history. Intensely prawn-forward broth with crispy lard and fried shallots. The dry version tossed in tangy old-school sambal is equally good. A 3-minute walk from Kallang MRT.",
    mustOrder: "King Prawn Pork Ribs Mee",
    image: "images/id19.webp"
  },
  {
    id: 20,
    name: "Song Kee Teochew Fish Porridge",
    hawkerCentre: "Newton Food Centre",
    region: "Central",
    price: 6,
    rating: 4.1,
    michelinStatus: "Bib Gourmand",
    description: "Light, clean Teochew-style fish porridge with fresh sliced fish and a delicate ginger broth. New 2025 Bib Gourmand addition. Simple and comforting.",
    mustOrder: "Fish Porridge",
    image: "images/id20.webp",
  },
  {
    id: 21,
    name: "Tiong Bahru Hainanese Boneless Chicken Rice",
    hawkerCentre: "Tiong Bahru Market",
    region: "Central",
    price: 5,
    rating: 4.8,
    michelinStatus: "Bib Gourmand",
    description: "Turmeric-fragrant rice and tender boneless Hainanese chicken. A Tiong Bahru staple since 1988. The boneless preparation makes it easy to eat — no fussing with bones.",
    mustOrder: "Boneless Chicken Rice",
    image: "images/id21.webp",
  },
  {
    id: 22,
    name: "J2 Famous Crispy Curry Puff",
    hawkerCentre: "Amoy Street Food Centre",
    region: "Central",
    price: 2,
    rating: 4.5,
    michelinStatus: "Bib Gourmand",
    description: "Shatteringly crispy curry puffs with a well-spiced potato and egg filling. One of the best value bites in Singapore at under $2. Always a queue.",
    mustOrder: "Original Curry Puff",
    image: "images/id22.jpg"
  },
  {
    id: 23,
    name: "Han Kee Fish Soup",
    hawkerCentre: "Amoy Street Food Centre",
    region: "Central",
    price: 6,
    rating: 4.0,
    michelinStatus: "Bib Gourmand",
    description: "Light, clear broth loaded with deboned fresh mackerel, Chinese celery, and coriander. Queue forms before they open. Deeply comforting and clean.",
    mustOrder: "Fish Soup with Rice Noodles",
    image: "images/id23.webp"
  },
  {
    id: 24,
    name: "Zai Shun Curry Fish Head",
    hawkerCentre: "Blk 254 Jurong East St 24",
    region: "West",
    price: 18,
    rating: 4.4,
    michelinStatus: "Bib Gourmand",
    description: "Rich, tangy curry fish head packed with okra, eggplant, and tofu. Worth the trip to Jurong. A hidden gem that serious food lovers make the pilgrimage for.",
    mustOrder: "Curry Fish Head",
    image: "images/id24.jpg"
  },
  {
    id: 25,
    name: "Kwee Heng Duck Rice",
    hawkerCentre: "Newton Food Centre",
    region: "Central",
    price: 5,
    rating: 3.8,
    michelinStatus: "Bib Gourmand",
    description: "Over 40 years of boneless braised duck — tender, juicy, and flavoursome. Served with rice, congee, or noodles. One of Newton Food Centre's most beloved stalls.",
    mustOrder: "Boneless Braised Duck Rice",
    image: "images/id25.webp"
  },
  {
    id: 26,
    name: "Sin Heng Claypot Bak Koot Teh",
    hawkerCentre: "Jalan Bukit Merah",
    region: "Central",
    price: 10,
    rating: 4.0,
    michelinStatus: "Bib Gourmand",
    description: "Claypot bak kut teh with peppery, garlicky broth and fall-off-the-bone pork ribs. New 2025 Bib Gourmand. Second-generation owner helms the stall.",
    mustOrder: "Claypot Pork Ribs Bak Kut Teh",
    image: "images/id26.jpg"
  },
  {
    id: 27,
    name: "Wok Hei Hor Fun",
    hawkerCentre: "Redhill Market",
    region: "Central",
    price: 5,
    rating: 4.2,
    michelinStatus: "Bib Gourmand",
    description: "Silky flat rice noodles wok-fried with egg gravy and that elusive smoky wok hei. New 2025 Bib Gourmand. Simple but perfectly executed.",
    mustOrder: "Beef Hor Fun",
    image: "images/id27.webp"
  },
  {
    id: 28,
    name: "Kitchenman Nasi Lemak",
    hawkerCentre: "Geylang Serai Market & Food Centre",
    region: "East",
    price: 12.80,
    rating: 4.5,
    michelinStatus: "Bib Gourmand",
    description: "Fragrant pandan-infused coconut rice with crispy anchovies, roasted peanuts, and a punchy sambal. New 2025 Bib Gourmand. Add ayam berempah for the full experience.",
    mustOrder: "Nasi Lemak with Ayam Berempah",
    image: "images/id28.webp"
  },
  {
    id: 29,
    name: "To-Ricos Kway Chap",
    hawkerCentre: "Old Airport Road Food Centre",
    region: "East",
    price: 8,
    rating: 4.2,
    michelinStatus: "Bib Gourmand",
    description: "Broad flat rice sheets in a light herbal broth, served with braised pig offal, tofu, and hard-boiled eggs. New 2025 Bib Gourmand. A classic Teochew comfort dish.",
    mustOrder: "Kway Chap with Mixed Offal",
    image: "images/id29.webp"
  },
  {
    id: 30,
    name: "Zhen Zhen Porridge",
    hawkerCentre: "Maxwell Food Centre",
    region: "Central",
    price: 4,
    rating: 4.3,
    michelinStatus: "None",
    description: "Maxwell's most beloved congee. Silky Cantonese porridge with sliced fish, pork, and century egg. Opens at 6am and sells out fast. Possibly the best way to start a day in Singapore.",
    mustOrder: "Fish & Century Egg Congee",
    image: "images/id30.webp"
  },
  {
    id: 31,
    name: "Fatty Cheong - Roast Meat Rice",
    hawkerCentre: "ABC Brickworks Market & Food Centre",
    region: "West",
    price: 5,
    rating: 4.5,
    michelinStatus: "None",
    description: "Legendary char siew with a caramelised, sticky glaze and the right fat-to-meat ratio. Consistently ranked among Singapore's best roast meat. Expect a queue daily.",
    mustOrder: "Char Siew Rice",
    image: "images/id31.jpg"
  },
  {
    id: 32,
    name: "Selera Rasa Nasi Lemak",
    hawkerCentre: "Adam Road Food Centre",
    region: "Central",
    price: 4,
    rating: 4.0,
    michelinStatus: "None",
    description: "Coconut-fragrant rice with crispy ikan bilis, peanuts, egg, and a punchy sambal. Said to be a favourite of Singapore's royal family. A strong contender for best nasi lemak on the island.",
    mustOrder: "Nasi Lemak",
    image: "images/id32.jpeg"
  },
  {
    id: 33,
    name: "Sungei Road Laksa",
    hawkerCentre: "Jalan Berseh Food Centre",
    region: "Central",
    price: 4,
    rating: 4.2,
    michelinStatus: "None",
    description: "Laksa cooked over charcoal in small batches. One of the cheapest and most authentic bowls on the island. The charcoal gives the broth a subtle smokiness no gas stove can replicate.",
    mustOrder: "Charcoal Laksa",
    image: "images/id33.jpg"
  },
  {
    id: 34,
    name: "Katong Laksa 328",
    hawkerCentre: "East Coast Road",
    region: "East",
    price: 7.30,
    rating: 3.9,
    michelinStatus: "None",
    description: "The Katong-style laksa Gordon Ramsay challenged and lost to. Thick coconut gravy, cut noodles, and cockles — eaten entirely with a spoon. A cultural landmark.",
    mustOrder: "Katong Laksa",
    image: "images/id34.jpg"
  },
  {
    id: 35,
    name: "Depot Road Zhen Shan Mei Claypot Laksa",
    hawkerCentre: "Alexandra Village Food Centre",
    region: "West",
    price: 6,
    rating: 3.8,
    michelinStatus: "None",
    description: "Claypot laksa with a rich coconut-heavy broth, lala clams, and cockles. Served bubbling hot in a traditional clay pot. A unique serving style that keeps the laksa hotter for longer.",
    mustOrder: "Claypot Laksa",
    image: "images/id35.jpg"
  },
  {
    id: 36,
    name: "Beach Road Scissor-Cut Curry Rice",
    hawkerCentre: "Beach Road (Prinsep Street area)",
    region: "Central",
    price: 4,
    rating: 4.1,
    michelinStatus: "None",
    description: "Scissors snip through pork chop, braised pork, and vegetables piled over rice, doused in rich curry gravy. A uniquely Singaporean dining experience that's impossible to replicate elsewhere.",
    mustOrder: "Curry Pork Chop Rice",
    image: "images/id36.jpg"
  },
  {
    id: 37,
    name: "Ng Ah Sio Bak Kut Teh",
    hawkerCentre: "Rangoon Road",
    region: "Central",
    price: 10,
    rating: 4.4,
    michelinStatus: "None",
    description: "Peppery Teochew-style pork rib soup with a rich dark broth. Decades-old recipe, tender fall-off-the-bone ribs, and you tiao for dipping. A morning ritual for many Singaporeans.",
    mustOrder: "Pork Ribs Bak Kut Teh",
    image: "images/id37.jpg"
  },
  {
    id: 38,
    name: "Song Kee Fried Oyster",
    hawkerCentre: "East Coast Lagoon Food Village",
    region: "East",
    price: 6,          
    rating: 4.3,        
    michelinStatus: "Bib Gourmand",
    description: "The stall with one of the longest queues at East Coast Lagoon. Tapioca starch and egg fried to a gooey-crispy balance, topped with fresh briny oysters and finished with parsley. The lime-infused chilli is what sets it apart. Queues of 30+ minutes are normal.",
    mustOrder: "Fried Oyster Omelette",
    image: "images/id38.jpg"
  },
  {
    id: 39,
    name: "No. 18 Zion Road Fried Kway Teow",
    hawkerCentre: "Zion Riverside Food Centre",
    region: "Central",
    price: 5,           
    rating: 3.9,        
    michelinStatus: "Bib Gourmand",
    description: "Widely regarded as Singapore's best char kway teow. Uncle Ho fries each plate individually with fierce wok hei, fresh cockles, crispy lard, and lap cheong. PM Lee Hsien Loong is a regular — his swearing-in invitation hangs proudly at the stall. Expect 30–60 minute waits.",
    mustOrder: "Char Kway Teow",
    image: "images/id39.webp"
  },
  {
    id: 40,
    name: "Punggol Nasi Lemak Centre",
    hawkerCentre: "Tanjong Katong Road",
    region: "East",
    price: 4,
    rating: 4.2,
    michelinStatus: "None",
    description: "Famous for otah-stuffed nasi lemak. Fragrant coconut rice with a lemongrass-marinated fish cake tucked inside. A uniquely Singaporean east-side variant of the national dish.",
    mustOrder: "Otah Nasi Lemak",
    image: "images/id40.jpg"
  },
  {
    id: 41,
    name: "Cheok Kee Boneless Braised Duck",
    hawkerCentre: "Geylang Bahru Market & Food Centre",
    region: "Central",
    price: 5,
    rating: 3.6,
    michelinStatus: "None",
    description: "Duck braised for two hours in a 20-ingredient spiced soy liquid. Tender, deeply savoury, sold out by late afternoon most days. Get there before 2pm.",
    mustOrder: "Braised Duck Rice",
    image: "images/id41.webp"
  },
{
    id: 42,
    name: "Song Fa Bak Kut Teh",
    hawkerCentre: "New Bridge Road",
    region: "Central",
    price: 8.80,          
    rating: 4.4,
    michelinStatus: "Bib Gourmand",
    description: "Singapore's most iconic BKT institution, started from a pushcart on Johor Road in 1969. Teochew-style clear, peppery broth with garlic and white pepper — free refills until you're done. Tender ribs, braised sides, and Kung Fu tea. Bib Gourmand every year since 2016.",
    mustOrder: "Pork Ribs Soup",
    image: "images/id42.JPG"
},
  {
    id: 43,
    name: "Lor Mee 178",
    hawkerCentre: "Tiong Bahru Market",
    region: "Central",
    price: 4.5,
    rating: 3.7,
    michelinStatus: "None",
    description: "Thick noodles in a starchy, savoury dark gravy with braised pork, fish cake, and a hard-boiled egg. Old-school comfort food. One of the last great lor mee stalls in Singapore.",
    mustOrder: "Lor Mee",
    image: "images/id43.jpg"
  },
  {
    id: 44,
    name: "Toa Payoh Rojak",
    hawkerCentre: "Lorong 1 Toa Payoh Food Centre",
    region: "Central",
    price: 5,
    rating: 4.6,
    michelinStatus: "None",
    description: "Crispy you tiao, tau pok, and fresh fruit tossed in a thick prawn paste sauce. A true Singaporean rojak that balances sweet, sour, and savoury in every bite.",
    mustOrder: "Rojak",
    image: "images/id44.webp"
  },
  {
    id: 45,
    name: "Yong Chun Wan Ton Noodle",
    hawkerCentre: "Bukit Merah View Market & Hawker Centre",
    region: "Central",
    price: 4,           
    rating: 4.4,       
    michelinStatus: "Bib Gourmand",
    description: "Singapore's highest-rated wonton mee stall. Husband-wife duo Gary and Linda prep from 3am daily, opening at 5:30am — and sell out before lunch. Tailor-made springy eggy noodles, plump wantons with water chestnuts, and pork lard. Queue starts at 6am.",
    mustOrder: "Wanton Noodles Dry",
    image: "images/id45.jpg"
  },
  {
    id: 46,
    name: "Swee Guan Hokkien Mee",
    hawkerCentre: "Geylang Lorong 29",
    region: "East",
    price: 8,          
    rating: 3.5,
    michelinStatus: "None",
    description: "One of the last stalls in Singapore still frying Hokkien mee over charcoal since 1968. The smoky charcoal wok hei penetrates every strand of noodle — a flavour no gas stove can replicate. Second-generation uncle is famously gruff and efficient. Queues form before opening. No photos of the cooking allowed.",
    mustOrder: "Hokkien Mee",
    image: "images/id46.webp"
  },
  {
    id: 47,
    name: "Heng",
    hawkerCentre: "Newton Food Centre",
    region: "Central",
    price: 8,         
    rating: 3.8,        
    michelinStatus: "Bib Gourmand",
    description: "Over 50 years of fried carrot cake at Newton Food Centre. The owner steams his own carrot cake from scratch — rare among hawkers today — giving it a tender, almost fluffy texture. Order the yuan yang ($6) to get both the white and black versions on one plate. Fried oysters also worth ordering.",
    mustOrder: "Yuan Yang Carrot Cake",
    image: "images/id47.jpg"
  },
  {
    id: 48,
    name: "Balestier Road Hoover Rojak",
    hawkerCentre: "Whampoa Makan Place",
    region: "Central",
    price: 5,
    rating: 4.2,
    michelinStatus: "None",
    description: "Generous portions of crispy fritters and fresh fruit with a thick, intensely flavoured prawn paste sauce. Balestier's answer to the rojak question — and a very good answer it is.",
    mustOrder: "Rojak",
    image: "images/id48.jpg"
  },
  {
    id: 49,
    name: "Ji Ji Noodle House",
    hawkerCentre: "Hong Lim Market & Food Centre",
    region: "Central",
    price: 5.5,      
    rating: 4.4,       
    michelinStatus: "Bib Gourmand",
    description: "Family-run since 1965, now helmed by third-generation sisters Kristen and Jill. The noodles are specially sourced and ghee-free, giving them a uniquely chewy bite. Each bowl is generously loaded — 3 fried wantons, 3 boiled wantons, char siew, bok choy, and pork lard. The house-made chilli is non-negotiable.",
    mustOrder: "Ji Ji Signature Char Siew Wanton Noodle(Dry)",
    image: "images/id49.webp"
  },
  {
    id: 50,
    name: "Koh Brother Pig's Organ Soup",
    hawkerCentre: "Tiong Bahru Market",
    region: "Central",
    price: 6,
    rating: 4.3,
    michelinStatus: "None",
    description: "Pork offal — tripe, liver, intestines — in a peppery broth with meatballs and pickled mustard greens. A Tiong Bahru institution for adventurous eaters. Dip into chili for full effect.",
    mustOrder: "Mixed Pig Organ Soup",
    image: "images/id50.avif"
  }
];

//state variables which control what html and css shows
let currentMichelin = "all";
let currentRegion = "all";
let minPrice = 0;
let maxPrice = 20;
let minRating = 0;
let maxRating = 5;
let currentSort = "default";
let searchQuery = "";
let favorites = []; //array of ids of favorite objects


function renderStalls(stallsToDisplay) {
  const container = document.getElementById("stalls-container"); //grabbing stalls container from HTML doc
  container.innerHTML = ""; //clearing container everytime renderStalls is called
  for (let i = 0; i < stallsToDisplay.length; i++) //for every element in the stallsToDisplay array
  {
    const stall = stallsToDisplay[i]; //pointing to particular stall in the array passed through
    const card = document.createElement("div"); //create a card for every stall
    card.className = "card";

    const isPick = stall.rating >= 4.3 && stall.price <= 8;
    const isFavorite = favorites.includes(stall.id); 

    //outputs card number
    const cardNumber = `<div class="card-number"><span style="font-size: 12px;">No</span> ${String(i + 1).padStart(2, '0')}</div>`;
    
    //Ryon's Picks badge
    const pickBadge = isPick ? '<div class="picks-badge">★ RYON\'S PICK</div>' : '';
    
    //favorite button
    const heartIcon = isFavorite ? '❤️' : '🤍';
    const favoriteButton = `<button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${stall.id})">${heartIcon}</button>`;
    
    //show image
    const image =`<img class="card-image" src="${stall.image}" alt="${stall.name}">`;

    //title of each card
    const title = `<div class="card-header"><h2>${stall.name}</h2></div>`;
    
    //location and rating of each card
    const location = `<p>📍 ${stall.hawkerCentre}, ${stall.region}</p>`;
    const rating = `<p class="rating">⭐ ${stall.rating.toFixed(1)}</p>`;
    
    //michelin badge for each card unless its "none"
    const michelinBadge = stall.michelinStatus !== "None" 
      ? `<span class="michelin-badge">${stall.michelinStatus.toUpperCase()}</span>` 
      : '';
    
    //must order section
    const mustOrder = `
      <div class="must-order-section">
        <div class="must-order-label">MUST ORDER</div>
        <div class="must-order-dish">${stall.mustOrder} — $${stall.price.toFixed(2)}</div>
      </div>`;
    
    //description and button
    const description = `<p class="description" style="display: none;">${stall.description}</p>`;
    const viewMoreBtn = `<button class="view-more-btn" onclick="this.previousElementSibling.style.display = this.previousElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'View More' ? 'View Less' : 'View More';">View More</button>`;
    
    //combining all together
    card.innerHTML = `
      ${cardNumber}
      ${pickBadge}
      ${favoriteButton}
      ${image}
      ${title}
      <div class="card-body">
        <div class="card-meta">
          ${location}
          ${rating}
        </div>
        ${michelinBadge}
        ${mustOrder}
        ${description}
        ${viewMoreBtn}
      </div>`;
    
    container.appendChild(card);//adds card to html container
  }
}

function renderStallsWithFilter() //goes through all filter, search, sorting functions to update cards
{
  let stallsToDisplay = filterByMichelin(hawkerStalls, currentMichelin);
  stallsToDisplay = filterByRegion(stallsToDisplay, currentRegion);
  stallsToDisplay = filterByPrice(stallsToDisplay, minPrice, maxPrice);
  stallsToDisplay = filterByRating(stallsToDisplay, minRating, maxRating);
  stallsToDisplay = searchStalls(stallsToDisplay, searchQuery);
  stallsToDisplay = sortStallsByOption (stallsToDisplay, currentSort);
  renderStalls(stallsToDisplay);
}

function filterByMichelin(hawkerStalls, michelinStatus) //filter by Michelin status
{ 
  if (michelinStatus === "all")
  {
    return hawkerStalls;
  }
  else
  {
    let temporaryHawkerStalls = [];
    for(let i = 0; i < hawkerStalls.length; i++)
    {
      const stall = hawkerStalls[i];
      if (stall.michelinStatus === michelinStatus)
      {
        temporaryHawkerStalls.push(stall);//pushback into this array
      }
    }
    return temporaryHawkerStalls; //return hawkerStalls.filter(stall => stall.michelinStatus === michelinStatus);
  }
} 

function filterByRegion(hawkerStalls, region) //filter by Central/East/West
{
  if (region == "all")
  {
    return hawkerStalls;
  }
  else
  {
    return hawkerStalls.filter(stall => stall.region === region); //go through array, return array only with elements from the region
  }
}

function filterByPrice(hawkerStalls, min, max) //filter by price range
{
  return hawkerStalls.filter(stall => stall.price >= min && stall.price <= max); //go through array, return array only with elements within price range
}

function filterByRating(hawkerStalls, min, max) //filter by minimum rating
{
    return hawkerStalls.filter(stall => stall.rating >= min && stall.rating <= max); //go through array, return array only with elements within rating range
}

function sortStallsByOption(hawkerStalls, sortingOption) //sort by name(A-Z), price or rating
{
  let sortedStalls = [...hawkerStalls]; //creating a copy of hawkerstalls
  switch(sortingOption) {
    case "Name(A-Z)": //sort by name
      sortedStalls.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "price(high - low)": //sort by price, high to low
      sortedStalls.sort((a, b) => b.price - a.price);
      break;
    case "price(low - high)": //sort by price, low to high
      sortedStalls.sort((a, b) => a.price - b.price);
      break;
    case "rating(high - low)": //sort by rating, high to low
      sortedStalls.sort((a, b) => b.rating - a.rating);
      break;
    case "rating(low - high)": //sort by rating, low to high
      sortedStalls.sort((a, b) => a.rating - b.rating);
      break;
    default: //default to sort by name
      sortedStalls.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return sortedStalls;
}

function searchStalls(hawkerStalls, query) // live substring search
{
  if(query === "") //if query is empty, return the all the cards
  {
    return hawkerStalls;
  }
  else
  {
    let lowCaseQuery = query.toLowerCase(); //create a lower case version of query
    return hawkerStalls.filter(stall => stall.name.toLowerCase().includes(lowCaseQuery) //boolean if stall name is in query
    || stall.hawkerCentre.toLowerCase().includes(lowCaseQuery) //boolean if hawker centre is in query
    || stall.description.toLowerCase().includes(lowCaseQuery)); //boolean if description is in query
  }
}

function showRecommended() // if rating ≥ 4.3 and price ≤ $8
{
  let stallsToDisplay = hawkerStalls.filter(stall => stall.rating >= 4.3 && stall.price <= 8); //filter out stalls
  renderStalls(stallsToDisplay); //call render functions to show updated stalls
}

function toggleFavorite(stallId) // add/remove from favorites
{
  //user clicks a favourites button, the card is added to a favourites array
  //if user clicks again, it gets removed
  const index = favorites.indexOf(stallId);  //determines index of the particular stallId
  if (index === -1)
  {
    favorites.push(stallId); //not in favorites, so i add it
  }
  else
  {
    favorites.splice(index, 1); //already in favorites, so i remove it
  }

  renderStallsWithFilter(); //re-render to update favorites page
}

function renderFavorites() {
  const favoriteStalls = hawkerStalls.filter(stall => favorites.includes(stall.id)); //goes through the hawkerStalls to find stalls with the same stallsId in favourites
  renderStalls(favoriteStalls); //calls the render function but with the favourites array
}

function addStall(newStall) //add new stall to array
{
  newStall.id = hawkerStalls.length + 1; //new stall added gets a a new id
  hawkerStalls.push(newStall); //push a new object to an hawkerStalls.
  renderStallsWithFilter(); //calls the renderStalls function again to re-render
}

function removeStall(stallId) // remove object from array
{
  hawkerStalls = hawkerStalls.filter(stall => stall.id !== stallId) //remove object from hawkerStalls array by filtering
  renderStallsWithFilter(); //calls the renderStalls function again to re-render
}

//event listener for price slider
document.getElementById("price-slider").addEventListener("input", function() //grabs html price slider element, runs function
{ 
  maxPrice = this.value; //updates maxPrice state variable to current event value
  document.getElementById("price-value").textContent = this.value; //update text showing new price 
  renderStallsWithFilter(); //re-renders according to price
});

//event listener for rating slider
document.getElementById("rating-slider").addEventListener("input", function() 
{
  minRating = this.value;  //updates minRating state variable to current event rating
  document.getElementById("rating-value").textContent = this.value; //update text on screen to show rating
  renderStallsWithFilter(); //re-renders
});

//event listener for search bar
document.getElementById("search-bar").addEventListener("input", function() 
{
  searchQuery = this.value;
  renderStallsWithFilter();
});

//event listener for michelin filter
document.getElementById("michelin-filter").addEventListener("change", function() 
{
  currentMichelin = this.value;
  renderStallsWithFilter();
});

//event listener for filter
document.getElementById("region-filter").addEventListener("change", function() 
{
  currentRegion = this.value;
  renderStallsWithFilter();
});

//event lsitener for sort
document.getElementById("sort").addEventListener("change", function() 
{
  currentSort = this.value;
  renderStallsWithFilter();
});

//event listener for recommended button
document.getElementById("recommended-btn").addEventListener("click", function() 
{
  showRecommended();
});

document.getElementById("view-favorites-btn").addEventListener("click", function() 
{
  renderFavorites(); //for
});

//event listener for clicking view all button
document.getElementById("view-all-btn").addEventListener("click", function() 
{
  renderStallsWithFilter();
});

renderStalls(hawkerStalls);

