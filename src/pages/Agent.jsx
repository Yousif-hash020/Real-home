import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { VscTriangleRight } from "react-icons/vsc";
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";

const Agent = () => {



  const Posts = [
    {
      id: 1,
      title: "Modern Villa Dubai",
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
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 2,
      title: "Luxury Home in Clifton",
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
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 3,
      title: "Modern Villa Dubai",
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
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 4,
      title: "Luxury Home in Clifton",
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
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 5,
      title: "Elegant Bungalow in DHA",
      price: 780000,
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
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
    {
      id: 6,
      title: "Elegant Bungalow in DHA",
      price: 780000,
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
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
  ];








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

  motion
  return (
    <div className="bg-[#F7F7F7]">
 

      {/* Hero Section */}
      <div className="relative">
        
        <div className="relative z-10 overflow-hidden lg:py-20 sm:py-20 py-16 md:py-30 lg:px-0 md:px-10
          bg-[url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg')] 
          bg-cover bg-center 
          before:absolute before:inset-0 before:bg-[#2668A9d0] before:bg-opacity-30">
                <div className="relative bottom-16 lg:bottom-20">
                   <Header />
                </div>
          <h1
            className='heading-h1 lg:text-5xl relative z-5 text-center md:text-4xl text-4xl text-white '>
            Our Agents
          </h1>
        </div>
      
      </div>

      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 space-y-8 px-2  " data-aos="fade-up" data-aos-duration="1050">

          <div className="">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6  p-1">
              {agents.map((agent, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl p-6 mb-15 flex gap-6 items-center"
                >
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
                              <span className="text-[#1CB2FF]"> </span> <span>Listed Properties</span>
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
                    <div className="mt-4 text-sm flex gap-5 justify-between items-center text-gray-700 space-y-1">
                      <div className="flex gap-4 flex-wrap">
                        <p><span className="font-medium">Office:</span> 1-222-333-4444</p>
                        <p><span className="font-medium">Mobile:</span> {agent.phone}</p>
                        <p><span className="font-medium">Fax:</span> 1-333-444-5555</p>
                        <p><span className="font-medium">Email:</span> {agent.email}</p>

                      </div>
                      {/* Link to detail */}
                      <Link
                        to={`/agent/${index}`}
                        className="text-blue-300 lg:w-[200px] font-medium hover:underline mt-2 inline-block"
                      >
                        View My Listings →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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

export default Agent;


