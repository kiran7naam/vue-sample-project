import firstGuitar from './assets/firstguitar.jpg';
import secondGuitar from './assets/secondguitar.jpg';
import thirdGuitar from './assets/thirdguitar.jpg';
import fourthGuitar from './assets/fourthguitar.jpg';
import fifthGuitar from './assets/fifthguitar.jpg';
import sixthGuitar from './assets/sixthguitar.jpg';
import lastGuitar from './assets/lastguitar.jpg';

export const cartItems  = [{
    "id" : '1',
    "product_name" : "Squier Guitar",
    "price": "$204.99",
    "image_path": firstGuitar,
},{
    "id" : '2',
    "product_name" : "Gibson SG Guitar",    
    "price": "$249.00",
    "image_path": secondGuitar,

},{
    "id" : '3',
    "product_name" : "Pacifica Guitar",
    "price": "$179.99",
    "image_path": thirdGuitar,

}];

export const products  = [{
        "id" : '1',
        "product_name" : "Squier Guitar",
        "product_description": "This are one of several Squier models available that offer a pretty good product for a reasonably low price. For the price, these are a very good beginner guitar choice.",
        "shipping_details": "charges for shipping $20",
        "customer_reviews": " Hmm...well, sounds like a tele at low volumes...the higher the volume, the worse the squeals;like a pig really...ah well, it's a cheap guitar...also tends to rattle above the 10th fret; on the 1st and 2nd strings (to the point of fretting out completely); and on the 5 and 6 stings on the 1st through 3rd frets...weird...action; settings help, but not much...hard to set the intonation as well (read, damn near impossible)... ",
        "price": "$204.99",
        "image_path": firstGuitar,
        "stock_availability": "true",
        "no_of_items": "10"
    },
    {
        "id" : '2',
        "product_name" : "Gibson SG Guitar",
        "product_description": "Modelled after the much more expensive Gibson SG guitars, the Epiphone SG G310 keeps it's cost low by using cheaper hardware and lower quality humbucking pick-ups. ",
        "shipping_details": "charges for shipping $25",
        "customer_reviews": "  Heck...I bought it as a knock around guitar I could beat up a little as I carried it around with me; (I hate not having a guitar next to me...)...but it hasn't even fit this role very well;I considered putting in new pickups and tuners...but the whole buzzing thing seems impossible to cure;well, there you go...I'm planning to sell it, or failing that; when my new band plays our first show I guess I'll pull a Townsend on it...",
        "price": "$249.00",
        "image_path": secondGuitar,
        "stock_availability": "true",
        "no_of_items": "14"
    },
    {
        "id" : '3',
        "product_name" : "Pacifica Guitar",
        "product_description": "Here's another guitar many people feel is a great value. This Pacifica features an agathis body, maple neck, and rosewood fretboard, with two single coil pick-ups, and one humbucker.",
        "shipping_details": "charges for shipping $18",
        "customer_reviews": "  yep...those were the pros above...basically this guitar;I guess it might be okay if you need something that looks and feels like a guitar;hmm...well, hit it hard and it chips...no finish flaws though;the tuners suck so bad it's hard to describe...tuning it is a real pain...but it doesn't go out too quickly I guess... ; just to practice on if you don't care what it sounds like at all... ",
        "price": "$179.99",
        "image_path": thirdGuitar,
        "stock_availability": "true",
        "no_of_items": "14"
    },
    {
        "id" : '4',
        "product_name" : "Beginner Guitar",
        "product_description": "Guitarists like Keith Richards, Steve Cropper, Albert Lee, and Danny Gatton favor the look and sound of the Telecaster. If you're a fan of any of those guitarists, this beginner guitar is for you. ",
        "shipping_details": "charges for shipping $20",
        "customer_reviews": "It's got a fatter sound to it than a standard strat for obvious reasons.; I only have a couple complaints. First of all, there's a slight buzzing problem on the sixth string; especially if you're not pressing hard. Also, the strings that came on it were very low quality; On several strings I couldn't even get a note below the 12th fret; but I put Elixirs on it and that's fixed.  ",
        "price": "$150.00",
        "image_path": fourthGuitar,
        "stock_availability": "true",
        "no_of_items": "10"
    },
    {
        "id" : '5',
        "product_name" : "Rock & Roll Guitar",
        "product_description": "The Les Paul is perhaps the most famous guitar in rock and roll. Epiphone has done a good job of visually re-creating the Les Paul in this lower-cost guitar marketed towards beginners. ",
        "shipping_details": "charges for shipping $15",
        "customer_reviews": "  Nice tone with use of quality strings, highs are clear and lows are decent; in depth considering this really is a beginner's guitar; Set up must be with quality strings.  No apparent flaws, guitar now 11 years old and still sounds great; Finish is still impeccable. I'm really surprised as I did not expect it to last this long; No apparent flaws, guitar now 11 years old and still sounds great. Finish is still impeccable",
        "price": "$125.50",
        "image_path": fifthGuitar,
        "stock_availability": "true",
        "no_of_items": "15"
    },
    {
        "id" : '6',
        "product_name" : "Terrific Guitar",
        "product_description": "These Canadian-made instruments are terrific guitars - very highly regarded, for beautiful sound, and excellent value.  The S6 features a solid cedar top, and mahogany back and sides. ",
        "shipping_details": "charges for shipping $20",
        "customer_reviews": " It's a solid guitar and it's great for a beginner; It feels very sturdy; On the negative side one of the pickups is kind of wobbly; Buy a Squier Standard if you want something better than an Affinity (even cheaper); but don't have the money for a regular Fender. ",
        "price": "$419.99",
        "image_path": sixthGuitar,
        "stock_availability": "true",
        "no_of_items": "12"
    },
    {
        "id" : '7',
        "product_name" : "Acoustic Guitar",
        "product_description": "Perhaps not in the same league as the Seagull, the FG700S is still a solid beginner acoustic guitar, and for the price (significantly cheaper than the S6), it's a good value.",
        "shipping_details": "charges for shipping $20",
        "customer_reviews": "  I think it's a decent value for the money; I've never had any real troubles with it. I'm not an advanced player, I've only been playing for about six months; but this guitar has done me well so far; I'm sure when I get more serious years from now I'll buy something better; but this is fine for now. ",
        "price": "$199.99",
        "image_path": lastGuitar,
        "stock_availability": "true",
        "no_of_items": "15"
    }
]
