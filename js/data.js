// ── SiouxFallsPros — Complete Category & Business Data ───────────

const CATEGORIES = {

  home:{name:'Home Services',desc:'Trusted home professionals serving Sioux Falls and surrounding areas',spotlight:null,
    subcategories:[
      {key:'plumbers',    name:'Plumbers',           icon:'🚿',desc:'Repairs, installs & emergencies',paid:true},
      {key:'electricians',name:'Electricians',        icon:'⚡',desc:'Wiring, panels & installations',paid:true},
      {key:'hvac',        name:'HVAC',                icon:'❄️',desc:'Heating, cooling & air quality',paid:true},
      {key:'roofers',     name:'Roofers',             icon:'🏠',desc:'Repair, replace & inspect',paid:true},
      {key:'painters',    name:'Painters',            icon:'🎨',desc:'Interior & exterior painting',paid:true},
      {key:'lawncare',    name:'Lawn Care',           icon:'🌿',desc:'Mowing, landscaping & snow removal',paid:true},
      {key:'contractors', name:'General Contractors', icon:'🏗️',desc:'Remodeling & construction',paid:true},
      {key:'handyman',    name:'Handyman',            icon:'🔨',desc:'Repairs & odd jobs',paid:true},
      {key:'flooring',    name:'Flooring',            icon:'🪵',desc:'Install, repair & refinish',paid:true},
      {key:'cleaning',    name:'Cleaning Services',   icon:'✨',desc:'Home & commercial cleaning',paid:true},
      {key:'garage',      name:'Garage Door Repair',  icon:'🚪',desc:'Repair, replace & install',paid:true},
      {key:'pestcontrol', name:'Pest Control',        icon:'🐛',desc:'Extermination & prevention',paid:true},
      {key:'windows',     name:'Window Repair',       icon:'🪟',desc:'Repair, replace & install',paid:true},
      {key:'fencing',     name:'Fencing',             icon:'🏡',desc:'Install & repair all fence types',paid:true},
      {key:'concrete',    name:'Concrete & Driveways',icon:'🛣️',desc:'Paving, repair & stamped concrete',paid:true},
      {key:'gutters',     name:'Gutters',             icon:'🌧️',desc:'Clean, repair & install',paid:true},
      {key:'treeservice', name:'Tree Service',        icon:'🌳',desc:'Trimming, removal & stump grinding',paid:true},
      {key:'security',    name:'Security Systems',    icon:'🔒',desc:'Cameras, alarms & smart home',paid:true},
    ]},

  auto:{name:'Auto',desc:'Top-rated auto repair and services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'mechanics',  name:'Auto Mechanics',        icon:'🔧',desc:'Repairs, diagnostics & maintenance',paid:true},
      {key:'autobody',   name:'Auto Body & Collision',  icon:'🚗',desc:'Dent repair & collision work',paid:true},
      {key:'tires',      name:'Tire Shops',             icon:'🛞',desc:'Sales, repair & rotation',paid:true},
      {key:'oilchange',  name:'Oil Change',             icon:'🛢️',desc:'Quick lube & oil services',paid:true},
      {key:'towing',     name:'Towing & Roadside',      icon:'🚚',desc:'24/7 towing & roadside assistance',paid:true},
    ]},

  health:{name:'Health & Wellness',desc:'Trusted healthcare professionals in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'dentists',    name:'Dentists',           icon:'🦷',desc:'General & cosmetic dentistry',paid:true},
      {key:'doctors',     name:'Doctors & Family',   icon:'⚕️',desc:'Primary care & family medicine',paid:true},
      {key:'chiropractic',name:'Chiropractors',      icon:'🦴',desc:'Spinal & joint care',paid:true},
      {key:'eyecare',     name:'Eye Care',           icon:'👁️',desc:'Optometrists & vision care',paid:true},
      {key:'mentalhealth',name:'Mental Health',      icon:'🧠',desc:'Therapy & counseling',paid:true},
      {key:'urgentcare',  name:'Urgent Care',        icon:'🏥',desc:'Walk-in & immediate care',paid:true},
      {key:'vets',        name:'Veterinarians',      icon:'🐾',desc:'Pet health & animal care',paid:true},
    ]},

  legal:{name:'Legal & Financial',desc:'Trusted legal and financial professionals in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'attorneys',  name:'Attorneys',          icon:'⚖️',desc:'Legal representation & advice',paid:true},
      {key:'accountants',name:'Accountants & Tax',  icon:'💰',desc:'Tax prep & accounting',paid:true},
      {key:'insurance',  name:'Insurance Agents',   icon:'🛡️',desc:'Auto, home & life insurance',paid:true},
      {key:'financial',  name:'Financial Advisors', icon:'📈',desc:'Investment & retirement planning',paid:true},
    ]},

  food:{name:'Food & Dining',desc:'Top-rated restaurants and dining in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'restaurants',name:'Restaurants',        icon:'🍽️',desc:'Full service dining',paid:true},
      {key:'pizza',      name:'Pizza',              icon:'🍕',desc:'Pizza delivery & dine-in',paid:true},
      {key:'mexican',    name:'Mexican Food',       icon:'🌮',desc:'Tacos, burritos & more',paid:true},
      {key:'asian',      name:'Asian Food',         icon:'🍜',desc:'Chinese, Thai, sushi & more',paid:true},
      {key:'breakfast',  name:'Breakfast & Brunch', icon:'🍳',desc:'Morning dining favorites',paid:true},
      {key:'bars',       name:'Bars & Nightlife',   icon:'🍺',desc:'Bars, pubs & entertainment',paid:true},
      {key:'foodtrucks', name:'Food Trucks',        icon:'🚐',desc:'Local mobile food vendors',paid:true},
      {key:'bakeries',   name:'Bakeries',           icon:'🥐',desc:'Fresh baked goods & cakes',paid:true},
      {key:'coffee',     name:'Coffee Shops',       icon:'☕',desc:'Coffee, espresso & cafe',paid:true},
      {key:'desserts',   name:'Ice Cream & Desserts',icon:'🍦',desc:'Sweet treats & desserts',paid:true},
    ]},

  beauty:{name:'Beauty & Personal Care',desc:'Top-rated salons and personal care in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'hairsalons', name:'Hair Salons',        icon:'💇',desc:'Cuts, color & styling',paid:true},
      {key:'barbershops',name:'Barbershops',        icon:'💈',desc:'Cuts, shaves & grooming',paid:true},
      {key:'nailsalons', name:'Nail Salons',        icon:'💅',desc:'Manicures & pedicures',paid:true},
      {key:'spas',       name:'Spas & Massage',     icon:'💆',desc:'Relaxation & body work',paid:true},
      {key:'tattoo',     name:'Tattoo Shops',       icon:'🎨',desc:'Tattoos & piercing',paid:true},
      {key:'tanning',    name:'Tanning Salons',     icon:'🌞',desc:'Tanning beds & spray tan',paid:true},
    ]},

  fitness:{name:'Fitness & Wellness',desc:'Stay active with top-rated fitness businesses in Sioux Falls',spotlight:null,
    subcategories:[
      {key:'gyms',       name:'Gyms & Fitness',     icon:'💪',desc:'Gyms, crossfit & fitness centers',paid:true},
      {key:'yoga',       name:'Yoga Studios',       icon:'🧘',desc:'Yoga, pilates & meditation',paid:true},
      {key:'trainers',   name:'Personal Trainers',  icon:'🏋️',desc:'One on one fitness training',paid:true},
      {key:'martialarts',name:'Martial Arts',       icon:'🥋',desc:'Karate, BJJ & self defense',paid:true},
      {key:'dance',      name:'Dance Studios',      icon:'💃',desc:'Dance classes for all ages',paid:true},
      {key:'sports',     name:'Sports & Recreation',icon:'⚽',desc:'Leagues, courts & recreation',paid:true},
    ]},

  entertainment:{name:'Entertainment & Events',desc:'Fun things to do in Sioux Falls for everyone',spotlight:null,
    subcategories:[
      {key:'venues',     name:'Event Venues',       icon:'🎪',desc:'Weddings, parties & events',paid:true},
      {key:'wedding',    name:'Wedding Planners',   icon:'💍',desc:'Full service wedding planning',paid:true},
      {key:'catering',   name:'Catering',           icon:'🍱',desc:'Food & catering for events',paid:true},
      {key:'djs',        name:'DJs & Entertainment',icon:'🎧',desc:'DJs, bands & performers',paid:true},
      {key:'partyrentals',name:'Party Rentals',     icon:'🎈',desc:'Tents, tables & party supplies',paid:true},
      {key:'escape',     name:'Escape Rooms',       icon:'🔐',desc:'Puzzle rooms & group fun',paid:true},
      {key:'arcades',    name:'Arcades & Gaming',   icon:'🕹️',desc:'Arcades, bowling & fun centers',paid:true},
      {key:'bowling',    name:'Bowling Alleys',     icon:'🎳',desc:'Bowling leagues & open play',paid:true},
      {key:'minigolf',   name:'Mini Golf & Fun',    icon:'⛳',desc:'Mini golf & outdoor fun',paid:true},
      {key:'comedy',     name:'Comedy & Nightlife', icon:'🎭',desc:'Comedy clubs & live shows',paid:true},
    ]},

  shopping:{name:'Shopping & Retail',desc:'Local shops and retail in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'clothing',   name:'Clothing Stores',    icon:'👕',desc:'Fashion & apparel',paid:true},
      {key:'thrift',     name:'Thrift & Consignment',icon:'🛍️',desc:'Second hand & vintage finds',paid:true},
      {key:'jewelry',    name:'Jewelry',            icon:'💎',desc:'Jewelry stores & repair',paid:true},
      {key:'sporting',   name:'Sporting Goods',     icon:'⚽',desc:'Sports equipment & gear',paid:true},
      {key:'electronics',name:'Electronics Repair', icon:'📱',desc:'Phone, computer & device repair',paid:true},
      {key:'pawn',       name:'Pawn Shops',         icon:'💳',desc:'Buy, sell & loans',paid:true},
      {key:'antiques',   name:'Antiques & Gifts',   icon:'🏺',desc:'Antiques, collectibles & gifts',paid:true},
      {key:'florists',   name:'Florists',           icon:'🌸',desc:'Fresh flowers & arrangements',paid:true},
    ]},

  education:{name:'Education & Learning',desc:'Education and learning resources in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'driving',    name:'Driving Schools',    icon:'🚗',desc:'Teen & adult driver education',paid:true},
      {key:'music',      name:'Music Lessons',      icon:'🎵',desc:'Guitar, piano, vocals & more',paid:true},
      {key:'art',        name:'Art Classes',        icon:'🎨',desc:'Painting, drawing & crafts',paid:true},
      {key:'language',   name:'Language Learning',  icon:'🗣️',desc:'Foreign language classes',paid:true},
      {key:'tutoring',   name:'Tutoring Centers',   icon:'📚',desc:'Academic tutoring & test prep',paid:true},
      {key:'tradeschool',name:'Trade Schools',      icon:'🔧',desc:'Vocational & trade training',paid:true},
    ]},

  senior:{name:'Senior Services',desc:'Trusted senior care and services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'assistedliving',name:'Assisted Living',  icon:'🏠',desc:'Assisted living communities',paid:true},
      {key:'memorycare',  name:'Memory Care',        icon:'💜',desc:'Alzheimers & dementia care',paid:true},
      {key:'homehealth',  name:'Home Health Aides',  icon:'🩺',desc:'In home health care services',paid:true},
      {key:'seniorcenters',name:'Senior Centers',    icon:'👴',desc:'Activities & community for seniors',paid:false},
    ]},

  professional:{name:'Professional Services',desc:'Business and professional services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'printing',   name:'Printing & Signage',  icon:'🖨️',desc:'Signs, banners & print services',paid:true},
      {key:'marketing',  name:'Marketing Agencies',  icon:'📢',desc:'Digital marketing & advertising',paid:true},
      {key:'webdesign',  name:'Web Design',          icon:'💻',desc:'Websites & digital services',paid:true},
      {key:'staffing',   name:'Staffing Agencies',   icon:'👔',desc:'Hiring & employment services',paid:true},
      {key:'notary',     name:'Notary Services',     icon:'📋',desc:'Notary public & legal docs',paid:true},
      {key:'translation',name:'Translation Services',icon:'🌐',desc:'Document & language translation',paid:true},
    ]},

  lifestyle:{name:'Home & Lifestyle',desc:'Home goods and lifestyle services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'furniture',    name:'Furniture Stores',  icon:'🛋️',desc:'Home & office furniture',paid:true},
      {key:'appliances',   name:'Appliance Repair',  icon:'🔌',desc:'Washer, dryer, fridge repair',paid:true},
      {key:'locksmiths',   name:'Locksmiths',        icon:'🔑',desc:'Lock repair & emergency lockout',paid:true},
      {key:'movers',       name:'Moving Companies',  icon:'📦',desc:'Local & long distance moves',paid:true},
      {key:'storage',      name:'Storage Units',     icon:'🏪',desc:'Self storage facilities',paid:true},
      {key:'photographers',name:'Photographers',     icon:'📷',desc:'Portrait, wedding & events',paid:true},
    ]},

  kids:{name:'Kids & Family',desc:'Trusted family and children services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'daycares',      name:'Daycares',          icon:'👶',desc:'Childcare & daycare centers',paid:true},
      {key:'pediatrics',    name:'Pediatricians',     icon:'🩺',desc:"Children's health care",paid:true},
      {key:'kidsactivities',name:'Kids Activities',   icon:'🎠',desc:'Classes, camps & fun for kids',paid:true},
      {key:'kidsclothing',  name:"Children's Clothing",icon:'👗',desc:'Kids fashion & shoes',paid:true},
    ]},

  pets:{name:'Pets & Veterinarians',desc:'Trusted pet care in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'petgrooming',name:'Pet Grooming',     icon:'🐩',desc:'Baths, cuts & styling',paid:true},
      {key:'dogtraining',name:'Dog Training',     icon:'🐕',desc:'Obedience & behavior training',paid:true},
      {key:'petboarding',name:'Pet Boarding',     icon:'🏡',desc:'Overnight & daycare boarding',paid:true},
      {key:'petvets',    name:'Veterinarians',    icon:'🐾',desc:'Full service animal care',paid:true},
      {key:'petstore',   name:'Pet Stores',       icon:'🐠',desc:'Supplies, food & accessories',paid:true},
    ]},

  realestate:{name:'Real Estate',desc:'Top-rated real estate professionals in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'realtors',          name:'Realtors',            icon:'🏡',desc:'Buy & sell homes',paid:true},
      {key:'propertymanagement',name:'Property Management', icon:'🏢',desc:'Rental & property management',paid:true},
      {key:'mortgage',          name:'Mortgage Lenders',    icon:'🏦',desc:'Home loans & financing',paid:true},
      {key:'homeinspectors',    name:'Home Inspectors',     icon:'🔍',desc:'Pre-purchase inspections',paid:true},
    ]},

  community:{name:'Community & Faith',desc:'Community organizations and faith communities in Sioux Falls',spotlight:null,
    subcategories:[
      {key:'churches',    name:'Churches & Faith',   icon:'⛪',desc:'Local churches & religious communities',paid:false},
      {key:'nonprofits',  name:'Nonprofits',         icon:'🤝',desc:'Local nonprofit organizations',paid:false},
      {key:'community',   name:'Community Centers',  icon:'🏛️',desc:'Recreation & community spaces',paid:false},
      {key:'volunteer',   name:'Volunteer Orgs',     icon:'💛',desc:'Volunteer & service opportunities',paid:false},
    ]},

  // ── Tourist Attractions — mix of free and paid ────────────────
  explore:{name:'Explore Sioux Falls',desc:'Things to see and do in Sioux Falls and South Dakota',spotlight:null,
    subcategories:[
      {key:'fallspark',   name:'Falls Park',          icon:'💧',desc:'The iconic Sioux Falls waterfall',paid:false,free:true},
      {key:'outdoors',    name:'Outdoor Activities',  icon:'🌲',desc:'Hiking, biking & outdoor fun',paid:false,free:true},
      {key:'museums',     name:'Museums & History',   icon:'🏛️',desc:'Local history & cultural museums',paid:false,free:true},
      {key:'nativeheritage',name:'Native American Heritage',icon:'🦅',desc:'Cultural sites & heritage',paid:false,free:true},
      {key:'familyfun',   name:'Family Attractions',  icon:'🎡',desc:'Fun for the whole family',paid:true},
      {key:'fairs',       name:'Fairs & Festivals',   icon:'🎪',desc:'Annual events & seasonal festivals',paid:true},
      {key:'tours',       name:'Tours & Experiences', icon:'🗺️',desc:'Guided tours & unique experiences',paid:true},
      {key:'shopping_district',name:'Shopping Districts',icon:'🛍️',desc:'Downtown & local shopping areas',paid:false,free:true},
    ]},
};

// ── Spotlight businesses ──────────────────────────────────────────
const SPOTLIGHTS = {
  plumbers:null,electricians:null,hvac:null,roofers:null,
  painters:null,lawncare:null,contractors:null,handyman:null,
  flooring:null,cleaning:null,garage:null,pestcontrol:null,
  mechanics:null,autobody:null,tires:null,towing:null,
  dentists:null,doctors:null,attorneys:null,restaurants:null,
  pizza:null,hairsalons:null,barbershops:null,realtors:null,
  gyms:null,venues:null,bakeries:null,coffee:null,
};

// ── Sioux Falls Radio Stations ────────────────────────────────────
const RADIO_STATIONS = [
  {name:'KKLS',freq:'104.7',format:'Country',url:'https://kkls.com'},
  {name:'KRRO',freq:'103.7',format:'Rock',url:'https://krro.com'},
  {name:'KELO',freq:'92.5',format:'Top 40',url:'https://keloam.com'},
  {name:'KXRB',freq:'1000',format:'Country Classic',url:'https://kxrb.com'},
  {name:'KWSN',freq:'1230',format:'Sports',url:'https://kwsn.com'},
  {name:'KDLT',freq:'89.3',format:'Christian',url:'https://kdlt.com'},
  {name:'KELO-AM',freq:'1320',format:'News/Talk',url:'https://keloam.com'},
  {name:'KQRV',freq:'107.9',format:'Variety Hits',url:'#'},
];

// ── Business listings ─────────────────────────────────────────────
const BUSINESSES = {
  plumbers:[
    {id:'pl-1',name:'Krohmer Plumbing',phone:'(605) 336-6909',website:'https://krohmerpluming.com',description:'Serving Sioux Falls since 1947. Expert plumbing, heating, and drain cleaning for residential and commercial.',rating:4.7,reviews:312,featured:false,emoji:'🚿'},
    {id:'pl-2',name:'Frisbees Plumbing & Heating',phone:'(605) 338-4861',website:'https://frisbeesinc.com',description:'Full-service plumbing, heating, AC and electrical. 140+ employees, fast response across Sioux Falls metro.',rating:4.5,reviews:428,featured:false,emoji:'🚿'},
    {id:'pl-3',name:'Sioux Falls Plumbing',phone:'(605) 250-7473',website:'https://siouxfalls-plumbing.com',description:'Family-owned. Honest pricing, no commissions, 90-day workmanship guarantee on every job.',rating:4.9,reviews:87,featured:false,emoji:'🚿'},
    {id:'pl-4',name:'Hander Inc Plumbing & Heating',phone:'(605) 336-3000',website:'',description:'Emergency service 24/7. Plumbing and heating specialists serving the five-state area.',rating:4.4,reviews:156,featured:false,emoji:'🚿'},
    {id:'pl-5',name:'Roto-Rooter',phone:'(605) 331-5222',website:'https://rotorooter.com',description:'24/7 plumbing and drain cleaning. No extra charge for nights or weekends.',rating:4.2,reviews:203,featured:false,emoji:'🚿'},
  ],
  electricians:[
    {id:'el-1',name:'Waterbury Electric',phone:'(605) 338-8118',website:'https://waterburyheating.com',description:'BBB A+ rated. Serving Sioux Falls families since 1950 with honest professional service.',rating:4.8,reviews:274,featured:false,emoji:'⚡'},
    {id:'el-2',name:'Frisbees Electrical',phone:'(605) 338-4861',website:'https://frisbeesinc.com',description:'Full electrical service from breakers to generator installation. All work to latest safety codes.',rating:4.5,reviews:189,featured:false,emoji:'⚡'},
  ],
  hvac:[
    {id:'hv-1',name:'Waterbury Heating & Cooling',phone:'(605) 338-8118',website:'https://waterburyheating.com',description:'Lennox Premier Dealer. Expert HVAC repair, replacement and maintenance. Emergency service available.',rating:4.8,reviews:274,featured:false,emoji:'❄️'},
    {id:'hv-2',name:'Frisbees Heating & AC',phone:'(605) 338-4861',website:'https://frisbeesinc.com',description:'Complete HVAC services. Often same-day scheduling across Sioux Falls metro.',rating:4.6,reviews:341,featured:false,emoji:'❄️'},
    {id:'hv-3',name:'Midwestern Mechanical',phone:'(605) 221-0958',website:'https://midwesternmechanical.com',description:'Founded 1983. Largest non-union mechanical contractor in the region.',rating:4.7,reviews:198,featured:false,emoji:'❄️'},
  ],
  handyman:[
    {id:'hm-1',name:'Dakota Handyman',phone:'(605) 000-0000',website:'https://dakotahandyman.com',description:'Sioux Falls handyman focused on excellent service. Repairs, assembly, installations and maintenance.',rating:4.6,reviews:44,featured:false,emoji:'🔨'},
  ],
  // Tourist attractions — Falls Park is always free
  fallspark:[
    {id:'fp-1',name:'Falls Park',phone:'(605) 367-7430',website:'https://siouxfalls.org/fallspark',description:'The crown jewel of Sioux Falls. The Big Sioux River cascades over ancient pink quartzite rock formations. Free admission, open daily.',rating:4.9,reviews:3241,featured:false,emoji:'💧',free:true},
    {id:'fp-2',name:'Falls Park Visitor Center',phone:'(605) 367-7430',website:'https://siouxfalls.org/fallspark',description:'Learn the history of Sioux Falls and the falls. Gift shop and observation tower with panoramic views.',rating:4.8,reviews:892,featured:false,emoji:'🏛️',free:true},
  ],
  museums:[
    {id:'mu-1',name:'Siouxland Heritage Museums',phone:'(605) 367-4210',website:'https://siouxlandmuseums.com',description:'Explore the history of Sioux Falls and the surrounding region. Includes the Old Courthouse Museum and Pettigrew Home.',rating:4.7,reviews:412,featured:false,emoji:'🏛️',free:true},
    {id:'mu-2',name:'Washington Pavilion',phone:'(605) 367-6000',website:'https://washingtonpavilion.org',description:'Arts, sciences and performing arts under one roof. Science center, art galleries and the Husby Performing Arts Center.',rating:4.8,reviews:1205,featured:false,emoji:'🎭',free:false},
  ],
  // All other subcategories empty — add as businesses sign up
  roofers:[],painters:[],lawncare:[],contractors:[],flooring:[],cleaning:[],
  garage:[],pestcontrol:[],windows:[],fencing:[],concrete:[],gutters:[],treeservice:[],security:[],
  mechanics:[],autobody:[],tires:[],oilchange:[],towing:[],
  dentists:[],doctors:[],chiropractic:[],eyecare:[],mentalhealth:[],urgentcare:[],vets:[],
  attorneys:[],accountants:[],insurance:[],financial:[],
  restaurants:[],pizza:[],mexican:[],asian:[],breakfast:[],bars:[],foodtrucks:[],bakeries:[],coffee:[],desserts:[],
  hairsalons:[],barbershops:[],nailsalons:[],spas:[],tattoo:[],tanning:[],
  gyms:[],yoga:[],trainers:[],martialarts:[],dance:[],sports:[],
  venues:[],wedding:[],catering:[],djs:[],partyrentals:[],escape:[],arcades:[],bowling:[],minigolf:[],comedy:[],
  clothing:[],thrift:[],jewelry:[],sporting:[],electronics:[],pawn:[],antiques:[],florists:[],
  driving:[],music:[],art:[],language:[],tutoring:[],tradeschool:[],
  assistedliving:[],memorycare:[],homehealth:[],seniorcenters:[],
  printing:[],marketing:[],webdesign:[],staffing:[],notary:[],translation:[],
  furniture:[],appliances:[],locksmiths:[],movers:[],storage:[],photographers:[],
  daycares:[],pediatrics:[],kidsactivities:[],kidsclothing:[],
  petgrooming:[],dogtraining:[],petboarding:[],petvets:[],petstore:[],
  realtors:[],propertymanagement:[],mortgage:[],homeinspectors:[],
  churches:[],nonprofits:[],community:[],volunteer:[],
  outdoors:[],nativeheritage:[],familyfun:[],fairs:[],tours:[],shopping_district:[],
};

// ── Dropdown search data ──────────────────────────────────────────
const DROPDOWN_DATA = [
  {group:'🏠 Home Services',items:[
    {icon:'🚿',name:'Plumbers',          desc:'Repairs & emergencies',  url:'category.html?cat=home&sub=plumbers'},
    {icon:'⚡',name:'Electricians',      desc:'Wiring & panels',         url:'category.html?cat=home&sub=electricians'},
    {icon:'❄️',name:'HVAC',              desc:'Heating & cooling',       url:'category.html?cat=home&sub=hvac'},
    {icon:'🏠',name:'Roofers',           desc:'Repair & replace',        url:'category.html?cat=home&sub=roofers'},
    {icon:'🚪',name:'Garage Door Repair',desc:'Install & repair',        url:'category.html?cat=home&sub=garage'},
    {icon:'🎨',name:'Painters',          desc:'Interior & exterior',     url:'category.html?cat=home&sub=painters'},
    {icon:'🌿',name:'Lawn Care',         desc:'Mowing & landscaping',    url:'category.html?cat=home&sub=lawncare'},
    {icon:'🔨',name:'Handyman',          desc:'Repairs & odd jobs',      url:'category.html?cat=home&sub=handyman'},
    {icon:'✨',name:'Cleaning Services', desc:'Home & commercial',       url:'category.html?cat=home&sub=cleaning'},
    {icon:'🌳',name:'Tree Service',      desc:'Trimming & removal',      url:'category.html?cat=home&sub=treeservice'},
    {icon:'🐛',name:'Pest Control',      desc:'Extermination',           url:'category.html?cat=home&sub=pestcontrol'},
    {icon:'🪵',name:'Flooring',          desc:'Install & repair',        url:'category.html?cat=home&sub=flooring'},
    {icon:'🏗️',name:'Contractors',       desc:'Remodeling',              url:'category.html?cat=home&sub=contractors'},
    {icon:'🏡',name:'Fencing',           desc:'Install & repair',        url:'category.html?cat=home&sub=fencing'},
    {icon:'🛣️',name:'Concrete',          desc:'Driveways & patios',      url:'category.html?cat=home&sub=concrete'},
    {icon:'🪟',name:'Window Repair',     desc:'Repair & replace',        url:'category.html?cat=home&sub=windows'},
    {icon:'🔒',name:'Security Systems',  desc:'Cameras & alarms',        url:'category.html?cat=home&sub=security'},
  ]},
  {group:'🚗 Auto',items:[
    {icon:'🔧',name:'Auto Mechanics',       desc:'Repairs & diagnostics',url:'category.html?cat=auto&sub=mechanics'},
    {icon:'🚗',name:'Auto Body & Collision',desc:'Dent & collision repair',url:'category.html?cat=auto&sub=autobody'},
    {icon:'🛞',name:'Tire Shops',           desc:'Sales & repair',        url:'category.html?cat=auto&sub=tires'},
    {icon:'🛢️',name:'Oil Change',           desc:'Quick lube',            url:'category.html?cat=auto&sub=oilchange'},
    {icon:'🚚',name:'Towing & Roadside',    desc:'24/7 roadside help',    url:'category.html?cat=auto&sub=towing'},
  ]},
  {group:'⚕️ Health & Wellness',items:[
    {icon:'🦷',name:'Dentists',        desc:'General & cosmetic',    url:'category.html?cat=health&sub=dentists'},
    {icon:'⚕️',name:'Doctors',         desc:'Family medicine',       url:'category.html?cat=health&sub=doctors'},
    {icon:'🦴',name:'Chiropractors',   desc:'Spinal & joint care',   url:'category.html?cat=health&sub=chiropractic'},
    {icon:'👁️',name:'Eye Care',        desc:'Vision & optometry',    url:'category.html?cat=health&sub=eyecare'},
    {icon:'🧠',name:'Mental Health',   desc:'Therapy & counseling',  url:'category.html?cat=health&sub=mentalhealth'},
    {icon:'🏥',name:'Urgent Care',     desc:'Walk-in care',          url:'category.html?cat=health&sub=urgentcare'},
  ]},
  {group:'💪 Fitness & Wellness',items:[
    {icon:'💪',name:'Gyms & Fitness',  desc:'Gyms & fitness centers', url:'category.html?cat=fitness&sub=gyms'},
    {icon:'🧘',name:'Yoga Studios',    desc:'Yoga & pilates',         url:'category.html?cat=fitness&sub=yoga'},
    {icon:'🏋️',name:'Personal Trainers',desc:'One on one training',  url:'category.html?cat=fitness&sub=trainers'},
    {icon:'🥋',name:'Martial Arts',    desc:'Karate & self defense',  url:'category.html?cat=fitness&sub=martialarts'},
    {icon:'💃',name:'Dance Studios',   desc:'Classes for all ages',   url:'category.html?cat=fitness&sub=dance'},
  ]},
  {group:'🍕 Food & Dining',items:[
    {icon:'🍽️',name:'Restaurants',     desc:'Full service dining',    url:'category.html?cat=food&sub=restaurants'},
    {icon:'🍕',name:'Pizza',           desc:'Delivery & dine-in',     url:'category.html?cat=food&sub=pizza'},
    {icon:'🌮',name:'Mexican Food',    desc:'Tacos & burritos',       url:'category.html?cat=food&sub=mexican'},
    {icon:'🍜',name:'Asian Food',      desc:'Chinese, Thai, sushi',   url:'category.html?cat=food&sub=asian'},
    {icon:'🍳',name:'Breakfast & Brunch',desc:'Morning dining',       url:'category.html?cat=food&sub=breakfast'},
    {icon:'☕',name:'Coffee Shops',    desc:'Coffee & cafe',          url:'category.html?cat=food&sub=coffee'},
    {icon:'🥐',name:'Bakeries',        desc:'Fresh baked goods',      url:'category.html?cat=food&sub=bakeries'},
    {icon:'🍺',name:'Bars & Nightlife',desc:'Bars & entertainment',   url:'category.html?cat=food&sub=bars'},
    {icon:'🍦',name:'Ice Cream',       desc:'Desserts & sweets',      url:'category.html?cat=food&sub=desserts'},
  ]},
  {group:'💇 Beauty & Care',items:[
    {icon:'💇',name:'Hair Salons',     desc:'Cuts & color',           url:'category.html?cat=beauty&sub=hairsalons'},
    {icon:'💈',name:'Barbershops',     desc:'Cuts & grooming',        url:'category.html?cat=beauty&sub=barbershops'},
    {icon:'💅',name:'Nail Salons',     desc:'Manicures & pedicures',  url:'category.html?cat=beauty&sub=nailsalons'},
    {icon:'💆',name:'Spas & Massage',  desc:'Relaxation',             url:'category.html?cat=beauty&sub=spas'},
    {icon:'🎨',name:'Tattoo Shops',    desc:'Tattoos & piercing',     url:'category.html?cat=beauty&sub=tattoo'},
  ]},
  {group:'🎪 Entertainment',items:[
    {icon:'🎪',name:'Event Venues',    desc:'Weddings & parties',     url:'category.html?cat=entertainment&sub=venues'},
    {icon:'🎧',name:'DJs & Entertainment',desc:'DJs & performers',    url:'category.html?cat=entertainment&sub=djs'},
    {icon:'🔐',name:'Escape Rooms',    desc:'Puzzle rooms & fun',     url:'category.html?cat=entertainment&sub=escape'},
    {icon:'🕹️',name:'Arcades & Gaming',desc:'Arcades & fun centers',  url:'category.html?cat=entertainment&sub=arcades'},
    {icon:'🎳',name:'Bowling',         desc:'Leagues & open play',    url:'category.html?cat=entertainment&sub=bowling'},
    {icon:'🍱',name:'Catering',        desc:'Food for events',        url:'category.html?cat=entertainment&sub=catering'},
  ]},
  {group:'🛍️ Shopping',items:[
    {icon:'👕',name:'Clothing Stores', desc:'Fashion & apparel',      url:'category.html?cat=shopping&sub=clothing'},
    {icon:'🛍️',name:'Thrift Stores',  desc:'Second hand finds',      url:'category.html?cat=shopping&sub=thrift'},
    {icon:'💎',name:'Jewelry',         desc:'Jewelry & repair',       url:'category.html?cat=shopping&sub=jewelry'},
    {icon:'📱',name:'Electronics Repair',desc:'Phone & device repair', url:'category.html?cat=shopping&sub=electronics'},
    {icon:'🌸',name:'Florists',        desc:'Fresh flowers',          url:'category.html?cat=shopping&sub=florists'},
  ]},
  {group:'⚖️ Legal & Financial',items:[
    {icon:'⚖️',name:'Attorneys',        desc:'Legal representation',  url:'category.html?cat=legal&sub=attorneys'},
    {icon:'💰',name:'Accountants & Tax',desc:'Tax prep',              url:'category.html?cat=legal&sub=accountants'},
    {icon:'🛡️',name:'Insurance Agents', desc:'Auto, home & life',     url:'category.html?cat=legal&sub=insurance'},
    {icon:'📈',name:'Financial Advisors',desc:'Investment planning',  url:'category.html?cat=legal&sub=financial'},
  ]},
  {group:'🏡 Real Estate',items:[
    {icon:'🏡',name:'Realtors',              desc:'Buy & sell homes',  url:'category.html?cat=realestate&sub=realtors'},
    {icon:'🏦',name:'Mortgage Lenders',      desc:'Home loans',        url:'category.html?cat=realestate&sub=mortgage'},
    {icon:'🔍',name:'Home Inspectors',       desc:'Pre-purchase checks',url:'category.html?cat=realestate&sub=homeinspectors'},
    {icon:'🏢',name:'Property Management',   desc:'Rental management', url:'category.html?cat=realestate&sub=propertymanagement'},
  ]},
  {group:'🐾 Pets',items:[
    {icon:'🐩',name:'Pet Grooming',    desc:'Baths & cuts',           url:'category.html?cat=pets&sub=petgrooming'},
    {icon:'🐕',name:'Dog Training',    desc:'Obedience training',     url:'category.html?cat=pets&sub=dogtraining'},
    {icon:'🐾',name:'Veterinarians',   desc:'Animal health care',     url:'category.html?cat=pets&sub=petvets'},
    {icon:'🏡',name:'Pet Boarding',    desc:'Overnight boarding',     url:'category.html?cat=pets&sub=petboarding'},
  ]},
  {group:'💧 Explore Sioux Falls',items:[
    {icon:'💧',name:'Falls Park',          desc:'Free — iconic waterfall',url:'category.html?cat=explore&sub=fallspark'},
    {icon:'🏛️',name:'Museums & History',   desc:'Free & paid attractions', url:'category.html?cat=explore&sub=museums'},
    {icon:'🦅',name:'Native American Heritage',desc:'Cultural sites',     url:'category.html?cat=explore&sub=nativeheritage'},
    {icon:'🎪',name:'Fairs & Festivals',   desc:'Seasonal events',         url:'category.html?cat=explore&sub=fairs'},
    {icon:'🎡',name:'Family Attractions',  desc:'Fun for the whole family', url:'category.html?cat=explore&sub=familyfun'},
    {icon:'🌲',name:'Outdoor Activities',  desc:'Hiking & outdoor fun',    url:'category.html?cat=explore&sub=outdoors'},
  ]},
];
