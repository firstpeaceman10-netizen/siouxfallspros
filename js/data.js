// ── All categories and subcategories ─────────────────────────────
const CATEGORIES = {
  home: {
    name:'Home Services',desc:'Trusted home service professionals serving Sioux Falls and surrounding areas',spotlight:null,
    subcategories:[
      {key:'plumbers',    name:'Plumbers',          icon:'🚿',desc:'Repairs, installs & emergencies'},
      {key:'electricians',name:'Electricians',       icon:'⚡',desc:'Wiring, panels & installations'},
      {key:'hvac',        name:'HVAC',               icon:'❄️',desc:'Heating, cooling & air quality'},
      {key:'roofers',     name:'Roofers',            icon:'🏠',desc:'Repair, replace & inspect'},
      {key:'painters',    name:'Painters',           icon:'🎨',desc:'Interior & exterior painting'},
      {key:'lawncare',    name:'Lawn Care',          icon:'🌿',desc:'Mowing, landscaping & snow removal'},
      {key:'contractors', name:'General Contractors',icon:'🏗️',desc:'Remodeling & construction'},
      {key:'handyman',    name:'Handyman',           icon:'🔨',desc:'Odd jobs & home repairs'},
      {key:'flooring',    name:'Flooring',           icon:'🪵',desc:'Install, repair & refinish'},
      {key:'cleaning',    name:'Cleaning Services',  icon:'✨',desc:'Home & commercial cleaning'},
      {key:'garage',      name:'Garage Door Repair', icon:'🚪',desc:'Repair, replace & install'},
      {key:'pestcontrol', name:'Pest Control',       icon:'🐛',desc:'Extermination & prevention'},
      {key:'windows',     name:'Window Repair',      icon:'🪟',desc:'Repair, replace & install'},
      {key:'fencing',     name:'Fencing',            icon:'🏡',desc:'Install & repair all fence types'},
      {key:'concrete',    name:'Concrete & Driveways',icon:'🛣️',desc:'Paving, repair & stamped concrete'},
      {key:'gutters',     name:'Gutters',            icon:'🌧️',desc:'Clean, repair & install gutters'},
      {key:'treeservice', name:'Tree Service',       icon:'🌳',desc:'Trimming, removal & stump grinding'},
      {key:'security',    name:'Security Systems',   icon:'🔒',desc:'Cameras, alarms & smart home'},
    ]
  },
  auto:{
    name:'Auto',desc:'Top-rated auto repair and services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'mechanics',name:'Auto Mechanics',      icon:'🔧',desc:'Repairs, diagnostics & maintenance'},
      {key:'autobody', name:'Auto Body & Collision',icon:'🚗',desc:'Dent repair & collision work'},
      {key:'tires',    name:'Tire Shops',           icon:'🛞',desc:'Sales, repair & rotation'},
      {key:'oilchange',name:'Oil Change',           icon:'🛢️',desc:'Quick lube & oil services'},
      {key:'towing',   name:'Towing',               icon:'🚚',desc:'24/7 towing & roadside assistance'},
    ]
  },
  health:{
    name:'Health & Wellness',desc:'Trusted healthcare professionals in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'dentists',    name:'Dentists',          icon:'🦷',desc:'General & cosmetic dentistry'},
      {key:'doctors',     name:'Doctors & Family',  icon:'⚕️',desc:'Primary care & family medicine'},
      {key:'chiropractic',name:'Chiropractors',     icon:'🦴',desc:'Spinal & joint care'},
      {key:'eyecare',     name:'Eye Care',          icon:'👁️',desc:'Optometrists & vision care'},
      {key:'mentalhealth',name:'Mental Health',     icon:'🧠',desc:'Therapy & counseling'},
      {key:'urgentcare',  name:'Urgent Care',       icon:'🏥',desc:'Walk-in & immediate care'},
      {key:'vets',        name:'Veterinarians',     icon:'🐾',desc:'Pet health & animal care'},
    ]
  },
  legal:{
    name:'Legal & Financial',desc:'Trusted legal and financial professionals in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'attorneys',  name:'Attorneys',         icon:'⚖️',desc:'Legal representation & advice'},
      {key:'accountants',name:'Accountants & Tax', icon:'💰',desc:'Tax prep & accounting'},
      {key:'insurance',  name:'Insurance Agents',  icon:'🛡️',desc:'Auto, home & life insurance'},
      {key:'financial',  name:'Financial Advisors',icon:'📈',desc:'Investment & retirement planning'},
    ]
  },
  food:{
    name:'Food & Dining',desc:'Top-rated restaurants and dining in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'restaurants',name:'Restaurants',      icon:'🍽️',desc:'Full service dining'},
      {key:'pizza',      name:'Pizza',            icon:'🍕',desc:'Pizza delivery & dine-in'},
      {key:'mexican',    name:'Mexican Food',     icon:'🌮',desc:'Tacos, burritos & more'},
      {key:'asian',      name:'Asian Food',       icon:'🍜',desc:'Chinese, Thai, sushi & more'},
      {key:'breakfast',  name:'Breakfast & Brunch',icon:'🍳',desc:'Morning dining favorites'},
      {key:'bars',       name:'Bars & Nightlife', icon:'🍺',desc:'Bars, pubs & entertainment'},
      {key:'foodtrucks', name:'Food Trucks',      icon:'🚐',desc:'Local mobile food vendors'},
    ]
  },
  beauty:{
    name:'Beauty & Personal Care',desc:'Top-rated salons and personal care in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'hairsalons', name:'Hair Salons',    icon:'💇',desc:'Cuts, color & styling'},
      {key:'barbershops',name:'Barbershops',    icon:'💈',desc:'Cuts, shaves & grooming'},
      {key:'nailsalons', name:'Nail Salons',    icon:'💅',desc:'Manicures & pedicures'},
      {key:'spas',       name:'Spas & Massage', icon:'💆',desc:'Relaxation & body work'},
      {key:'tattoo',     name:'Tattoo Shops',   icon:'🎨',desc:'Tattoos & piercing'},
    ]
  },
  lifestyle:{
    name:'Home & Lifestyle',desc:'Home goods, services and lifestyle businesses in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'furniture',    name:'Furniture Stores', icon:'🛋️',desc:'Home & office furniture'},
      {key:'appliances',   name:'Appliance Repair', icon:'🔌',desc:'Washer, dryer, fridge repair'},
      {key:'locksmiths',   name:'Locksmiths',       icon:'🔑',desc:'Lock repair & emergency'},
      {key:'movers',       name:'Moving Companies', icon:'📦',desc:'Local & long distance moves'},
      {key:'storage',      name:'Storage Units',    icon:'🏪',desc:'Self storage facilities'},
      {key:'photographers',name:'Photographers',    icon:'📷',desc:'Portrait, wedding & events'},
    ]
  },
  kids:{
    name:'Kids & Family',desc:'Trusted family and children services in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'daycares',      name:'Daycares',       icon:'👶',desc:'Childcare & daycare centers'},
      {key:'tutoring',      name:'Tutoring',       icon:'📚',desc:'Academic tutoring & test prep'},
      {key:'pediatrics',    name:'Pediatricians',  icon:'🩺',desc:"Children's health care"},
      {key:'kidsactivities',name:'Kids Activities',icon:'🎠',desc:'Classes, camps & fun'},
    ]
  },
  pets:{
    name:'Pets & Veterinarians',desc:'Trusted pet care in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'petgrooming',name:'Pet Grooming',  icon:'🐩',desc:'Baths, cuts & styling'},
      {key:'dogtraining',name:'Dog Training',  icon:'🐕',desc:'Obedience & behavior training'},
      {key:'petboarding',name:'Pet Boarding',  icon:'🏡',desc:'Overnight & daycare boarding'},
      {key:'petvets',    name:'Veterinarians', icon:'🐾',desc:'Full service animal care'},
    ]
  },
  realestate:{
    name:'Real Estate',desc:'Top-rated real estate professionals in Sioux Falls, SD',spotlight:null,
    subcategories:[
      {key:'realtors',          name:'Realtors',           icon:'🏡',desc:'Buy & sell homes'},
      {key:'propertymanagement',name:'Property Management',icon:'🏢',desc:'Rental & property management'},
      {key:'mortgage',          name:'Mortgage Lenders',   icon:'🏦',desc:'Home loans & financing'},
      {key:'homeinspectors',    name:'Home Inspectors',    icon:'🔍',desc:'Pre-purchase inspections'},
    ]
  },
};

// ── Spotlight businesses (pay $50/month, 1 per category page) ────
// Set to null when unclaimed — shows "Claim this spot" card
// Set to business object when claimed
const SPOTLIGHTS = {
  plumbers:null, electricians:null, hvac:null, roofers:null,
  painters:null, lawncare:null, contractors:null, handyman:null,
  flooring:null, cleaning:null, garage:null, pestcontrol:null,
  mechanics:null, autobody:null, tires:null,
  dentists:null, doctors:null, attorneys:null,
  restaurants:null, pizza:null, hairsalons:null, barbershops:null,
  realtors:null, mortgage:null,
  // Example of a claimed spotlight:
  // plumbers: {
  //   name:'Krohmer Plumbing', phone:'(605) 336-6909',
  //   website:'https://krohmerpluming.com', emoji:'🚿',
  //   description:'Serving Sioux Falls since 1947.',
  //   rating:4.7, reviews:312
  // }
};

// ── Homepage spotlights (one per main category) ───────────────────
// These appear on the homepage — click goes directly to their website
const HOMEPAGE_SPOTLIGHTS = [
  // { category:'Home Services', catKey:'home', name:'...', phone:'...', website:'https://...', emoji:'🏠', rating:4.8, reviews:200, description:'...' },
  // Add businesses here when they pay $50/month for homepage spot
];

// ── Business listings ─────────────────────────────────────────────
// featured:true = Page 1 ($30/mo, 3.0+ stars)
// featured:false = free listing
// DO NOT list anyone below 3.0 stars
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
    {id:'el-2',name:'Frisbees Electrical',phone:'(605) 338-4861',website:'https://frisbeesinc.com',description:'Full electrical service from breakers and fuses to generator installation. All work to latest safety codes.',rating:4.5,reviews:189,featured:false,emoji:'⚡'},
  ],
  hvac:[
    {id:'hv-1',name:'Waterbury Heating & Cooling',phone:'(605) 338-8118',website:'https://waterburyheating.com',description:'Lennox Premier Dealer. Expert HVAC repair, replacement and maintenance. Emergency service available.',rating:4.8,reviews:274,featured:false,emoji:'❄️'},
    {id:'hv-2',name:'Frisbees Heating & AC',phone:'(605) 338-4861',website:'https://frisbeesinc.com',description:'Complete HVAC services. Often same-day scheduling across Sioux Falls metro.',rating:4.6,reviews:341,featured:false,emoji:'❄️'},
    {id:'hv-3',name:'Midwestern Mechanical',phone:'(605) 221-0958',website:'https://midwesternmechanical.com',description:'Founded 1983. Largest non-union mechanical contractor in the region.',rating:4.7,reviews:198,featured:false,emoji:'❄️'},
  ],
  handyman:[
    {id:'hm-1',name:'Dakota Handyman',phone:'(605) 000-0000',website:'https://dakotahandyman.com',description:'Sioux Falls handyman focused on excellent service. Repairs, assembly, installations and maintenance.',rating:4.6,reviews:44,featured:false,emoji:'🔨'},
  ],
  // All other subcategories empty — add as businesses sign up
  roofers:[],painters:[],lawncare:[],contractors:[],flooring:[],cleaning:[],
  garage:[],pestcontrol:[],windows:[],fencing:[],concrete:[],gutters:[],treeservice:[],security:[],
  mechanics:[],autobody:[],tires:[],oilchange:[],towing:[],
  dentists:[],doctors:[],chiropractic:[],eyecare:[],mentalhealth:[],urgentcare:[],vets:[],
  attorneys:[],accountants:[],insurance:[],financial:[],
  restaurants:[],pizza:[],mexican:[],asian:[],breakfast:[],bars:[],foodtrucks:[],
  hairsalons:[],barbershops:[],nailsalons:[],spas:[],tattoo:[],
  furniture:[],appliances:[],locksmiths:[],movers:[],storage:[],photographers:[],
  daycares:[],tutoring:[],pediatrics:[],kidsactivities:[],
  petgrooming:[],dogtraining:[],petboarding:[],petvets:[],
  realtors:[],propertymanagement:[],mortgage:[],homeinspectors:[],
};

// ── Dropdown search data ──────────────────────────────────────────
const DROPDOWN_DATA = [
  {group:'🏠 Home Services',items:[
    {icon:'🚿',name:'Plumbers',         desc:'Repairs & emergencies', url:'category.html?cat=home&sub=plumbers'},
    {icon:'⚡',name:'Electricians',     desc:'Wiring & panels',        url:'category.html?cat=home&sub=electricians'},
    {icon:'❄️',name:'HVAC',             desc:'Heating & cooling',      url:'category.html?cat=home&sub=hvac'},
    {icon:'🏠',name:'Roofers',          desc:'Repair & replace',       url:'category.html?cat=home&sub=roofers'},
    {icon:'🚪',name:'Garage Door Repair',desc:'Install & repair',      url:'category.html?cat=home&sub=garage'},
    {icon:'🎨',name:'Painters',         desc:'Interior & exterior',    url:'category.html?cat=home&sub=painters'},
    {icon:'🌿',name:'Lawn Care',        desc:'Mowing & landscaping',   url:'category.html?cat=home&sub=lawncare'},
    {icon:'🔨',name:'Handyman',         desc:'Repairs & odd jobs',     url:'category.html?cat=home&sub=handyman'},
    {icon:'✨',name:'Cleaning Services',desc:'Home & commercial',      url:'category.html?cat=home&sub=cleaning'},
    {icon:'🌳',name:'Tree Service',     desc:'Trimming & removal',     url:'category.html?cat=home&sub=treeservice'},
    {icon:'🐛',name:'Pest Control',     desc:'Extermination',          url:'category.html?cat=home&sub=pestcontrol'},
    {icon:'🪵',name:'Flooring',         desc:'Install & repair',       url:'category.html?cat=home&sub=flooring'},
    {icon:'🏗️',name:'Contractors',      desc:'Remodeling',             url:'category.html?cat=home&sub=contractors'},
    {icon:'🏡',name:'Fencing',          desc:'Install & repair',       url:'category.html?cat=home&sub=fencing'},
    {icon:'🛣️',name:'Concrete',         desc:'Driveways & patios',     url:'category.html?cat=home&sub=concrete'},
    {icon:'🪟',name:'Window Repair',    desc:'Repair & replace',       url:'category.html?cat=home&sub=windows'},
    {icon:'🔒',name:'Security Systems', desc:'Cameras & alarms',       url:'category.html?cat=home&sub=security'},
  ]},
  {group:'🚗 Auto',items:[
    {icon:'🔧',name:'Auto Mechanics',     desc:'Repairs & diagnostics', url:'category.html?cat=auto&sub=mechanics'},
    {icon:'🚗',name:'Auto Body & Collision',desc:'Dent repair',         url:'category.html?cat=auto&sub=autobody'},
    {icon:'🛞',name:'Tire Shops',         desc:'Sales & repair',        url:'category.html?cat=auto&sub=tires'},
    {icon:'🛢️',name:'Oil Change',         desc:'Quick lube',            url:'category.html?cat=auto&sub=oilchange'},
    {icon:'🚚',name:'Towing',             desc:'24/7 roadside',         url:'category.html?cat=auto&sub=towing'},
  ]},
  {group:'⚕️ Health & Wellness',items:[
    {icon:'🦷',name:'Dentists',          desc:'General & cosmetic',    url:'category.html?cat=health&sub=dentists'},
    {icon:'⚕️',name:'Doctors',           desc:'Family medicine',       url:'category.html?cat=health&sub=doctors'},
    {icon:'🦴',name:'Chiropractors',     desc:'Spinal & joint care',   url:'category.html?cat=health&sub=chiropractic'},
    {icon:'👁️',name:'Eye Care',          desc:'Vision & optometry',    url:'category.html?cat=health&sub=eyecare'},
    {icon:'🧠',name:'Mental Health',     desc:'Therapy & counseling',  url:'category.html?cat=health&sub=mentalhealth'},
    {icon:'🏥',name:'Urgent Care',       desc:'Walk-in care',          url:'category.html?cat=health&sub=urgentcare'},
  ]},
  {group:'⚖️ Legal & Financial',items:[
    {icon:'⚖️',name:'Attorneys',         desc:'Legal representation',  url:'category.html?cat=legal&sub=attorneys'},
    {icon:'💰',name:'Accountants & Tax', desc:'Tax prep',              url:'category.html?cat=legal&sub=accountants'},
    {icon:'🛡️',name:'Insurance Agents', desc:'Auto, home & life',     url:'category.html?cat=legal&sub=insurance'},
    {icon:'📈',name:'Financial Advisors',desc:'Investment planning',   url:'category.html?cat=legal&sub=financial'},
  ]},
  {group:'🍕 Food & Dining',items:[
    {icon:'🍽️',name:'Restaurants',      desc:'Full service dining',   url:'category.html?cat=food&sub=restaurants'},
    {icon:'🍕',name:'Pizza',            desc:'Delivery & dine-in',    url:'category.html?cat=food&sub=pizza'},
    {icon:'🌮',name:'Mexican Food',     desc:'Tacos & burritos',      url:'category.html?cat=food&sub=mexican'},
    {icon:'🍜',name:'Asian Food',       desc:'Chinese, Thai, sushi',  url:'category.html?cat=food&sub=asian'},
    {icon:'🍳',name:'Breakfast & Brunch',desc:'Morning dining',       url:'category.html?cat=food&sub=breakfast'},
    {icon:'🍺',name:'Bars & Nightlife', desc:'Bars & entertainment',  url:'category.html?cat=food&sub=bars'},
  ]},
  {group:'💇 Beauty & Care',items:[
    {icon:'💇',name:'Hair Salons',      desc:'Cuts & color',          url:'category.html?cat=beauty&sub=hairsalons'},
    {icon:'💈',name:'Barbershops',      desc:'Cuts & grooming',       url:'category.html?cat=beauty&sub=barbershops'},
    {icon:'💅',name:'Nail Salons',      desc:'Manicures & pedicures', url:'category.html?cat=beauty&sub=nailsalons'},
    {icon:'💆',name:'Spas & Massage',  desc:'Relaxation & wellness', url:'category.html?cat=beauty&sub=spas'},
    {icon:'🎨',name:'Tattoo Shops',    desc:'Tattoos & piercing',    url:'category.html?cat=beauty&sub=tattoo'},
  ]},
  {group:'🏡 Real Estate',items:[
    {icon:'🏡',name:'Realtors',              desc:'Buy & sell homes',     url:'category.html?cat=realestate&sub=realtors'},
    {icon:'🏦',name:'Mortgage Lenders',      desc:'Home loans',           url:'category.html?cat=realestate&sub=mortgage'},
    {icon:'🔍',name:'Home Inspectors',       desc:'Pre-purchase checks',  url:'category.html?cat=realestate&sub=homeinspectors'},
    {icon:'🏢',name:'Property Management',   desc:'Rental management',    url:'category.html?cat=realestate&sub=propertymanagement'},
  ]},
  {group:'🐾 Pets',items:[
    {icon:'🐩',name:'Pet Grooming',    desc:'Baths & cuts',          url:'category.html?cat=pets&sub=petgrooming'},
    {icon:'🐕',name:'Dog Training',    desc:'Obedience training',    url:'category.html?cat=pets&sub=dogtraining'},
    {icon:'🐾',name:'Veterinarians',   desc:'Animal health care',    url:'category.html?cat=pets&sub=petvets'},
    {icon:'🏡',name:'Pet Boarding',    desc:'Overnight boarding',    url:'category.html?cat=pets&sub=petboarding'},
  ]},
];
