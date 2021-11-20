import { BsLine } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";

const SocialShare = ({url}) => {
  console.log('1', url);
  return (
    <>
      <span>
        <TwitterShareButton
          url={url}
        >
          <FaTwitter />
        </TwitterShareButton>
      </span>
      <span>
        <FacebookShareButton
          url={url}
        >
          <FaFacebook />
        </FacebookShareButton>
      </span>
      <span>
        <LineShareButton
          url={url}
        >
          <BsLine />
        </LineShareButton>
      </span>
      <span>
        <RiShareForwardFill />
      </span>
    </>

  );
}




export default SocialShare;