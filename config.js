import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Icad_Bot",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=900316331101016094&permissions=396738428598&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "24/7 online",
      description:
        "Bot is active 24/7 :).",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Chat bot",
      description:
        "Type @Icad_Bot active chat. if you want to know more information please type /active-chat-bot",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 30, //-  - Your
  memberCount: 700, //--   - Bot
  availableCommand: 28, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: ( 
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  discordLink: "https://discord.gg/9RtC58VJgW",
  youtubeLink: "https://www.youtube.com/@IcadMY/featured",
};

export default config;
