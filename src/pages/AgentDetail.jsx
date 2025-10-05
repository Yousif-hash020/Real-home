import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { FaHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import SubmitButton from "../components/SubmitButton";

const agents = [
  {
    name: "Nathan James",
    phone: "+1-234-456-7893",
    email: "robot@inspirythemes.com",
    listed: 4,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-300x300.jpg",
  },
  {
    name: "Melissa William",
    phone: "+1-234-456-7892",
    email: "robot@inspirythemes.com",
    listed: 4,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
  },
  {
    name: "Alice Brian",
    phone: "+1-234-456-7891",
    email: "robot@inspirythemes.com",
    listed: 3,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6.jpg",
  },
  {
    name: "John David",
    phone: "+1-234-456-7890",
    email: "robot@inspirythemes.com",
    listed: 5,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
  },
];

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents[parseInt(id, 10)];


  // Random number for listed properties (max 6)
  const randomListed = Math.floor(Math.random() * 6) + 1;




  const Posts = [
    {
      id: 1,
      title: "Villa in Coral Gables",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-488x326.jpg",
    },
    {
      id: 2,
      title: "Villa on Hollywood Boulevard",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/zac-gudakov-0qir5hBOj18-unsplash-488x326.jpg",
    },
    {
      id: 3,
      title: "Villa on Grand Avenue",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-488x326.jpg",
    },
    {
      id: 4,
      title: "Single Home at Florida 5, Pinecrest",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-03-488x326.jpg",
    },
  ];


  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const postsPerPage = 4;
  const totalPages = Math.ceil(Posts.length / postsPerPage);

  const getPaginatedPosts = () => {
    const start = (currentPage - 1) * postsPerPage;
    return Posts.slice(start, start + postsPerPage);
  };

  const paginatedPosts = getPaginatedPosts();
  console.log(paginatedPosts);



  const categories = [
    {
      title: "Commercial",
      subcategories: ["Office", "Shop"],
    },
    {
      title: "Residential",
      subcategories: [
        "Apartment",
        "Apartment Building",
        "Condominium",
        "Single Family",
        "Villa",
      ],
    },
    {
      title: "Commercial",
      subcategories: ["Office", "Shop"],

    },
  ];


  if (!agent) {
    return <div className="p-10 text-center text-red-500">Agent not found</div>;
  }


  motion
  return (
    <div className="bg-[#F7F7F7]">

      {/* Hero Section */}
      <div className="relative">
        <div className="relative overflow-hidden lg:py-20 py-20 md:py-30 lg:px-0 md:px-10 
          bg-[url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg')] 
          bg-cover bg-center 
          before:absolute before:inset-0 before:bg-[#2668A9d0] before:bg-opacity-30">
            <div className="relative bottom-20 lg:bottom-20">
                   <Header />
                </div>
          <h1
          
            className='max-w-6xl mx-auto heading-h1 lg:text-5xl relative z-5 lg:text-left text-center md:text-4xl text-4xl text-white'>
            {agent.name}
          </h1>
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[100%] max-w-6xl"
          data-aos="fade-up" data-aos-duration="1050">

          <div className="relative p-5">
       
          </div>
        </div>

        
      </div>

      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 space-y-8 px-2  " data-aos="fade-up" data-aos-duration="1050">
          <div className="">
            <div className="grid grid-cols-1  gap-6 mb-15">
              <div className="max-w-4xl mx-auto shadow-md p-6 rounded bg-white">

                {/* Card */}
                <div className=" rounded-2xl ">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0 relative ">
                      <span className=" ">
                        <img
                          src={agent.image}
                          alt={agent.name}
                          className="w-32 h-32 lg:-mt-[60px] rounded-lg   object-cover"
                        />
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col items-center justify-center mb-2 gap-3">
                          <span className="text-lg flex gap-3 flex-row justify-center items-center font-bold text-[black]  group-hover:text-[#1CB2FF] transition-colors duration-300">
                            {agent.name}
                            <span className="text-xs bg-[#1CB2FF] text-white px-1 py-1 rounded-full"> <TiTick /></span>
                          </span>
                          <p className="text-gray-500 text-sm mt-1">
                            <span className="text-[#1CB2FF]"> {randomListed}</span> <span>Listed Properties</span>
                          </p>
                        </div>

                        {/* Social */}
                        <div className="flex gap-3 mt-2 text-gray-400 text-lg">
                          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                          <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                          <FaInstagram className="hover:text-[#ffb3c2] cursor-pointer" />
                          <FaPinterestP className="hover:text-red-600 cursor-pointer" />
                        </div>
                      </div>




                    </div>
                  </div>
                  {/* Static description */}
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Interactively procrastinate high-payoff content without backward-compatible data.
                    Quickly cultivate optimal processes and tactical architectures. Completely iterate
                    strategic theme areas via accuratee-markets.
                    <br />                       <br />
                    Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                    <br />                       <br />
                    Credibly intermediate backend ideas for cross-platform models. Continually re intermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.
                  </p>

                  {/* Static contact */}
                  <div className="mt-4 text-sm flex gap-5 text-gray-700 space-y-1">
                    <p><span className="font-medium">Office:</span> 1-222-333-4444</p>
                    <p><span className="font-medium">Mobile:</span> {agent.phone}</p>
                    <p><span className="font-medium">Fax:</span> 1-333-444-5555</p>
                    <p><span className="font-medium">Email:</span> {agent.email}</p>
                  </div>
                </div>

              </div>


              <div className="lg:p-1 p-6">
                {Posts.map((prop, index) => (
                  <div key={index} className="flex lg:flex-row mb-15 flex-col bg-white relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">

                    <div className="relative  lg:w-[400px] w-full h-60 bg-cover bg-center lg:rounded-s-[6px] overflow-hidden" >
                      <div className="relative group lg:w-[400px] w-full h-60 bg-cover bg-center lg:rounded-s-[6px] " style={{ backgroundImage: `url(${prop.image})` }}>

                        {/* Overlay Shade (hidden by default, visible on hover) */}
                        <div className="absolute inset-0 bg-[#1CB2FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>

                        {/* View Property Button (hidden by default, visible on hover) */}
                        <div className="absolute top-[100px] lg:left-[130px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <Link
                            to={`/ListLayout/${prop.id}`}
                            className="transition-colors duration-300 border-2 border-white hover:border-[#1CB2FF] hover:bg-[#1CB2FF] hover:text-white text-white text-xs font-semibold px-5 py-3 rounded"
                          >
                            View Property
                          </Link>
                        </div>
                      </div>

                      <div className="absolute top-[10px] left-0 bg-[#0054A5] text-white text-xs font-semibold px-5 py-1 rounded-r z-5"  >
                        Featured
                      </div>


                      {/* lower svg */}
                      <div className="absolute bottom-0 flex flex-row justify-between items-center px-5 w-full p-1 ">
                        <div className=" ">
                          <span className="bg-[#ff0000] text-white rounded text-sm font-semibold p-2">{prop.sale}</span>
                        </div>

                        <div className='flex gap-1 justify-center lg:pt-1 items-center'>
                          <span className="relative group cursor-pointer" onClick={() => toggleFavorite(index)}>
                            <FaHeart
                              className={`w-7 h-7 p-1 transition-colors duration-300 ${favorites.includes(index) ? "fill-[#ff0000]" : "fill-white"
                                }`}
                            />
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                              {favorites.includes(index) ? "Remove Favorite" : "Add to Favorites"}
                            </span>
                          </span>


                          <span className="relative group">
                            <MdCompareArrows className="  w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-orange-500 fill-white" />
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                              Compare Property
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 relative flex lg:flex-row flex-col w-full">

                      <div className=" flex lg:flex-wrap flex-col lg:mx-0 mx-auto lg:gap-5 gap-2 items-center justify-between  text-gray-700">
                        <div className='relative flex gap-2 justify-between  items-center'>
                          <div className='flex flex-col'>
                            <h3 className="lg:text-[18px] sm:text-lg text-[15px] lg:text-left text-center font-semibold  mt-2 ">{prop.title}</h3>
                            <p className="text-[13px] w-full mt-1 ">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          </div>
                        </div>
                        <div className='flex  pb-6 px-4 gap-5 lg:justify-between justify-center mx-auto items-center'>

                          <div className="flex flex-col items-center justify-center group">
                            <span className='text-[12px] font-bold'>
                              Bedrooms
                            </span>
                            <span className=' flex flex-row'>
                              {prop.beds.icon}
                              <span className='ms-2 text-[11px] font-bold'>{prop.beds.count}</span>

                            </span>
                          </div>

                          <div className="flex flex-col items-center justify-center group">
                            <span className='text-[12px] font-bold'>
                              Bathrooms
                            </span>
                            <span className=' flex flex-row'>
                              {prop.baths.icon}
                              <span className='ms-2 text-[11px] font-bold'>{prop.baths.count}</span>
                            </span>
                          </div>

                          <div className="flex flex-col items-center justify-center group">
                            <span className='text-[12px] font-bold'>
                              Area
                            </span>
                            <span className=' flex flex-row'>
                              {prop.sqft.icon}

                              <span className='ms-2 text-[11px] font-bold flex gap-2'>{prop.sqft.count}
                                <span className="text-gray-400">sq ft</span></span>
                            </span>
                          </div>
                        </div>
                      </div>


                      <div className="flex flex-col lg:border-l lg:text-left text-center lg:border-gray-200 border-0 border-gray-200 lg:ps-15 px-2 py-5 justify-between">
                        <div className="float-top">
                          <span className='text-[12px] font-semibold'>For sale</span>
                          <p className="text-[#1CB2FF] lg:text-[25px] text-sm font-bold">${prop.price.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className='text-[11px] font-medium'>{agent.name}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="p-3 border border-gray-400 bg-white rounded-full transition"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                <FaChevronLeft />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button className={`px-4 py-2 rounded  ${currentPage === i + 1
                  ? "bg-[#1CB2FF] text-white  border border-gray-400 rounded-full"
                  : " border border-gray-400 bg-white rounded-full text-[#041C33] hover:bg-[#1CB2FF] hover:text-white"
                  } transition`}
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button className="p-3 border border-gray-400 bg-white rounded-full transition"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8 px-2">

          {/* Categories */}
          <div className="px-4 py-8 rounded-lg lg:text-left text-center" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-xl mb-4 text-[#041C33]" >Property Types</h2>
            <ul className="flex flex-col sm:flex-col-reverse md:flex-row lg:flex-col gap-3 lg:justify-start justify-center lg:items-start items-center  text-sm text-gray-700">
              {categories.map((cat, i) => (
                <li key={i} className="cursor-pointer">
                  <div className="hover:text-[#1CB2FF] flex justify-between items-center">
                    <span className="heading flex gap-1 font-semibold">
                      <VscTriangleRight />
                      {cat.title}
                    </span>
                  </div>

                  <ul className="ml-6 mt-2 space-y-1">
                    {cat.subcategories.map((sub, j) => (
                      <li
                        key={j}
                        className="flex gap-1 items-center text-gray-600 hover:text-[#1CB2FF]"
                      >
                        <VscTriangleRight className="text-xs" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentDetail;


