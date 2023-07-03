import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <div className="Contenair">
        <div className="left">
          <p>Escape Game</p>
          <p>
            <a href="https://openclassrooms.com/fr/">Home</a> Blog| Pricing|
            About| Faq| Contact
          </p>
        </div>

        <div className="center">
          <p>55 Rue du Faubourg Saint-Honoré</p>
          <p>75008 Paris</p>
          
          <p>+ 33 1 42 92 81 00</p>
          <p>contact@escape-game.com</p>
        </div>
        <div className="right">
          <p>
            <b>A propos</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <p>
            <FacebookIcon /> <TwitterIcon />
            <LinkedInIcon />
            <GitHubIcon />
          </p>
        </div>
      </div>
      <div className="Down">
        <p>
          Copyright© <u>SLI & SYL</u> 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
