const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
  bar.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}

if (close){
  close.addEventListener('click', ()=>{
    nav.classList.remove('active');})
}

const products = {
  // ==== FEATURED (Index + Shop) ====
  pro1: {
    name: "Luffy Gear5 Action Figure",
    price: "₹1499/-",
    img: "product1.jpg",
    desc: "High-quality PVC Luffy Gear 5 figure, approx 15cm tall with detailed sculpt."
  },
  pro2: {
    name: "Pain (Nagato) Action Figure",
    price: "₹1499/-",
    img: "product2.jpg",
    desc: "Collector’s edition Pain (Nagato) action figure from Naruto Shippuden."
  },
  pro3: {
    name: "Goku vs Frieza Action Figure",
    price: "₹1499/-",
    img: "product3.jpg",
    desc: "Dynamic Goku vs Frieza battle collectible figure, made with durable PVC."
  },
  pro4: {
    name: "Goku Action Figure",
    price: "₹1499/-",
    img: "product4.jpg",
    desc: "Dragon Ball Z Goku action figure with anime-accurate detailing."
  },
  pro5: {
    name: "Luffy Mini Figure Keychain",
    price: "₹149/-",
    img: "product5.jpg",
    desc: "Cute Luffy mini chibi-style figure keychain."
  },
  pro6: {
    name: "Madara Mini Figure Keychain",
    price: "₹149/-",
    img: "product6.jpg",
    desc: "Madara Uchiha mini chibi-style figure keychain."
  },
  pro7: {
    name: "Sung Jin Woo - Katana",
    price: "₹3999/-",
    img: "product7.png",
    desc: "Replica katana inspired by Sung Jin-Woo from Solo Leveling."
  },
  pro8: {
    name: "Zoro Enma - Katana",
    price: "₹4499/-",
    img: "product8.png",
    desc: "One Piece katana replica of Zoro’s legendary sword Enma."
  },

  // ==== NEW ARRIVALS (Index) ====
  pro9: {
    name: "Ichigo - Katana",
    price: "₹3499/-",
    img: "product9.png",
    desc: "Bleach-inspired katana of Ichigo Kurosaki, sharp steel replica."
  },
  pro10: {
    name: "Sanemi Black - Katana",
    price: "₹4499/-",
    img: "product10.png",
    desc: "Sanemi Shinazugawa’s sleek black katana replica from Demon Slayer."
  },
  pro11: {
    name: "Trafalgar D Law - Katana",
    price: "₹3999/-",
    img: "product11.png",
    desc: "One Piece katana carried by Trafalgar Law with fine detailing."
  },
  pro12: {
    name: "Zenitsu - Katana",
    price: "₹4499/-",
    img: "product12.png",
    desc: "Replica katana of Zenitsu Agatsuma from Demon Slayer."
  },
  pro13: {
    name: "Zoro Mini Figure (Kawai)",
    price: "₹349/-",
    img: "product13.jpg",
    desc: "Chibi-style Zoro mini kawai figure collectible."
  },
  pro14: {
    name: "Naruto-Minato-Jiraya Action Figure",
    price: "₹1949/-",
    img: "product14.jpg",
    desc: "Special edition action figure featuring Naruto, Minato, and Jiraiya."
  },
  pro15: {
    name: "Zoro Asura Action Figure",
    price: "₹1999/-",
    img: "product15.jpg",
    desc: "One Piece Zoro Asura transformation collectible figure."
  },
  pro16: {
    name: "Luffy Mini Figure (Kawai)",
    price: "₹349/-",
    img: "product16.jpg",
    desc: "Chibi-style kawaii Luffy mini figure."
  },

  // ==== SHOP PAGE EXCLUSIVES ====
  pro17: {
    name: "Luffy Nidai Kitetsu - Katana",
    price: "₹4499/-",
    img: "product17.png",
    desc: "One Piece Nidai Kitetsu sword replica carried by Luffy."
  },
  pro18: {
    name: "Zoro Meltou Shusui - Katana",
    price: "₹4499/-",
    img: "product18.png",
    desc: "Replica katana of Zoro’s Shusui blade with black steel finish."
  },
  pro19: {
    name: "Black Leg Sanji Action Figure",
    price: "₹1499/-",
    img: "product19.jpg",
    desc: "One Piece Sanji action figure in his Black Leg pose."
  },
  pro20: {
    name: "Lucy Action Figure",
    price: "₹1499/-",
    img: "product20.jpg",
    desc: "Fairy Tail Lucy Heartfilia action figure with celestial keys."
  },
  pro21: {
    name: "Inosuke Action Figure",
    price: "₹1499/-",
    img: "product21.jpg",
    desc: "Beast Hashira Inosuke figure with his dual serrated swords."
  },
  pro22: {
    name: "Daki Action Figure",
    price: "₹1499/-",
    img: "product22.jpg",
    desc: "Upper Moon Six demon Daki figure from Demon Slayer."
  },
  pro23: {
    name: "Luffy Gear5 Action Figure (Alt Pose)",
    price: "₹1499/-",
    img: "product23.jpg",
    desc: "Alternate sculpt of Luffy in Gear 5 transformation."
  },
  pro24: {
    name: "Itachi Action Figure",
    price: "₹1499/-",
    img: "product24.jpg",
    desc: "Naruto’s Itachi Uchiha action figure with Sharingan details."
  },
  pro25: {
    name: "Trunks Action Figure",
    price: "₹1999/-",
    img: "product25.jpg",
    desc: "Dragon Ball Z Trunks action figure wielding his iconic sword."
  },
  pro26: {
    name: "Dragon Ball Action Figure",
    price: "₹1949/-",
    img: "product26.jpg",
    desc: "Dragon Ball collectible featuring Goku with the dragon orbs."
  },
  pro27: {
    name: "Gyutaro Action Figure",
    price: "₹1499/-",
    img: "product27.jpg",
    desc: "Upper Moon Six demon Gyutaro action figure."
  },
  pro28: {
    name: "Goku Action Figure (Alt Pose)",
    price: "₹1499/-",
    img: "product28.jpg",
    desc: "Alternate sculpt of Goku action figure from DBZ."
  },

  // ==== MINI FIGURES (Shop bottom section) ====
  pro29: {
    name: "Dragonball Combo (Mini Figures)",
    price: "₹1999/-",
    img: "product29.jpg",
    desc: "Set of Dragonball Z mini figures featuring Goku, Vegeta, and more."
  },
  pro30: {
    name: "Sukuna Mini Figure",
    price: "₹199/-",
    img: "product31.jpg",
    desc: "Chibi Sukuna mini figure from Jujutsu Kaisen."
  },
  pro31: {
    name: "Naruto Combo (Mini Figures)",
    price: "₹699/-",
    img: "product32.jpg",
    desc: "Set of Naruto mini figures featuring Naruto, Sasuke, and Kakashi."
  },
  pro32: {
    name: "Tanjiro Mini Figure",
    price: "₹199/-",
    img: "product33.jpg",
    desc: "Cute chibi Tanjiro mini figure from Demon Slayer."
  },
  pro33: {
    name: "Naruto - Sasuke Mini Figure",
    price: "₹299/-",
    img: "product34.jpg",
    desc: "Miniature set featuring Naruto and Sasuke together."
  },
  pro34: {
    name: "Akatsuki Combo Mini Figures",
    price: "₹1499/-",
    img: "product35.jpg",
    desc: "Full Akatsuki member mini figure combo set."
  },
  pro35: {
    name: "Nezuko-chan Mini Figure",
    price: "₹199/-",
    img: "product36.jpg",
    desc: "Adorable chibi Nezuko mini figure collectible."
  },
  pro36: {
    name: "Straw Hat Combo Mini Figures",
    price: "₹1099/-",
    img: "product37.jpg",
    desc: "Set of mini chibi Straw Hat Crew figures (7–10 cm tall)."
  }
};
