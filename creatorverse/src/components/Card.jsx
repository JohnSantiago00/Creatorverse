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
    <Card className="w-96">
      <CardHeader floated={false} className="h-80 flex justify-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="profile-picture"
          className="rounded-lg"
        />

        <div className="flex flex-col items-start ml-2 space-y-2">
          <Tooltip content="View">
            <Link to={`/${creator.id}`}>
              <FaInfoCircle className="text-blue-500 hover:text-blue-600 mb-2" />
            </Link>
          </Tooltip>
          <Tooltip content="Edit">
            <Link to={`/edit/${creator.id}`}>
              <FaPencilAlt className="text-green-500 hover:text-green-600 mb-2" />
            </Link>
          </Tooltip>
        </div>
      </CardHeader>

      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray">
          {creator.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {creator.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <a
          href={creator.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-600"
        >
          <FaYoutube />
        </a>
        <a
          href={creator.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          <FaTwitter />
        </a>
        <a
          href={creator.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-600"
        >
          <FaInstagram />
        </a>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
