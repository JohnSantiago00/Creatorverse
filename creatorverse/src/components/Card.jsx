import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

import {
  FaInfoCircle,
  FaInstagram,
  FaPencilAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomCard = ({ creator }) => {
  return (
    <div className="relative">
      <div className="absolute top-10 left-96 flex flex-col items-end z-10 space-y-2">
        <Tooltip content="View">
          <Link to={`/${creator.id}`}>
            <FaInfoCircle className="text-blue-500 hover:text-blue-600" />
          </Link>
        </Tooltip>
        <Tooltip content="Edit">
          <Link to={`/edit/${creator.id}`}>
            <FaPencilAlt className="text-green-500 hover:text-green-600 ml-2" />
          </Link>
        </Tooltip>
      </div>
      <Card className="w-96 rounded-lg mr-6 mt-6">
        <CardHeader className="h-80 relative">
          <img
            src={creator.image_url}
            alt="profile-picture"
            className="rounded-lg w-96 h-80 object-cover"
          />
        </CardHeader>

        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray">
            {creator.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-sm md:text-base leading-relaxed"
            textGradient
          >
            {creator.description}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <a
            href={creator.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600"
          >
            <FaYoutube />
          </a>
          <a
            href={creator.twitter_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaTwitter />
          </a>
          <a
            href={creator.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-600"
          >
            <FaInstagram />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
