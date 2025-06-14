import logo2 from './logo2.png';
import video_banner from './home-page-banner.mp4';
import people from './people.png'
import people_org from './people-org.png'
import credits from './credits.png'

export const assets ={
    logo2,
    video_banner,
    people,
    people_org,
    credits
}
export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description: 
            "First, choose the image you want to remove background from by clicking on 'Start from a photo'. Your image format can be PNG or JPG. We support all image dimensions."
    },
    {
        step: "Step 2",
        title: "Removing the background",
        description: 
            "Our AI will process your image and automatically remove the background with high accuracy. This typically takes just a few seconds."
    },
    {
        step: "Step 3",
        title: "Download your image",
        description: 
            "Once the background is removed, you can preview and download your image in high quality. Download formats include PNG for transparent background or JPG."
    }
];


export const categories = ["People","Products","Animals","Cars","Graphics"];

export const plans = [
    {
        id:"Basic",
        name:"Basic Package",
        price:199,
        credits:"20 credits",
        description:"Best for personal use",
        popular:false
    },
    {
        id:"Gold",
        name:"Gold Package",
        price:399,
        credits:"45 credits",
        description:"Best for business use",
        popular:true
    },
    {
        id:"Ultra",
        name:"Ultra Package",
        price:699,
        credits:"75 credits",
        description:"Best for enterprise use",
        popular:false
    }
];

export const testimonials = [
  {
    id: 1,
    quote: "ByeByeBG made my product photos look so professional. Saved hours of editing!",
    author: "Aarav Sharma",
    handle: "@pixelperfect_aarav"
  },
  {
    id: 2,
    quote: "I use it for my e-commerce site. The background remover is simply magical!",
    author: "Priya Mehta",
    handle: "@ecompriya"
  },
  {
    id: 3,
    quote: "As a freelance designer, this tool is a game-changer for quick client mockups.",
    author: "Rohan Desai",
    handle: "@rohan.designs"
  },
  {
    id: 4,
    quote: "Super clean results! ByeByeBG is now part of my daily editing toolkit.",
    author: "Sneha Kapoor",
    handle: "@snapbysneha"
  },
  {
    id: 5,
    quote: "Didn't expect such accuracy! It handled even complex backgrounds effortlessly.",
    author: "Vikram Nair",
    handle: "@vikphotos"
  },
   {
    id: 6,
    quote: "Woww! purely awesome results!.",
    author: "Tony Jain",
    handle: "@tony.jpg"
  }
];

export const footer_cons = [
    {
        url: "https://www.linkedin.com/in/rehan-sakiwala/",
    logo: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
    },
    {
        url:"https://github.com/Rehan-Sakiwala",
        logo:"https://img.icons8.com/?size=100&id=106567&format=png&color=000000"
    }
]
