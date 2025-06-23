import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.jpg'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.jpg'
import profile_img_2 from './profile_img_2.jpg'
import profile_img_3 from './profile_img_3.jpg'


export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "The Maharaja Studio",
      type: "studio",
      price: "Rs1,50,000",
      location: "New Delhi",
      image: project_img_1
    },
    {
      title: "Luxury Villa",
      type: "villa",
      price: "Rs2,50,000",
      location: "Bengaluru",
      image: project_img_2
    },
    {
      title: "Suburban House",
      type: "house",
      price: "Rs2,25,000",
      location: "Mumbai",
      image: project_img_3
    },
    {
      title: "Cozy Cottage",
      type: "cottage",
      price: "Rs2,00,000",
      location: "Hydrabad",
      image: project_img_4
    },
    {
      title: "Penthouse Suite",
      type: "penthouse",
      price: "Rs1,50,000",
      location: "Gurgaon",
      image: project_img_5
    },
    {
      title: "Country Farmhouse",
      type: "farmhouse",
      price: "Rs1,00,000",
      location: "Pune",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Cristiano Ronaldo",
        title: "Footballer",
        image: profile_img_1,
        alt: "Portrait of Cristiano Ronaldo",
        rating: 5,
        text: "From the very first meeting, they understood my son's vision and helped me find the perfect property for my son. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Lionel Messi",
        title: "Footballer",
        image: profile_img_2,
        alt: "Portrait of Lionel Messi",
        rating: 4,
        text: "My daughter wanted a flat for her college and they helped us to find a perfect flat. My working experience was good with them."
    },
    {
        name: "Virat Kohli",
        title: "King of cricket",
        image: profile_img_3,
        alt: "Portrait of Virat Kohli",
        rating: 5,
        text: "I wanted to gift flat to my nephew and she loved it. The entire process was smooth, and working with you was an absolute pleasure. Your professionalism, guidance, and support made everything so much easier."
    }
];