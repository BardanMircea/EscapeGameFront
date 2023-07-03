import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect } from "react";

//Fonction Footer permet de positionner le footer à la bonne place dans la page
const Footer = () => {
  useEffect(() => {
    const adjustFooterPosition = () => {
      const bodyHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const footer = document.querySelector("footer") as HTMLElement;
      const content = document.querySelector(".content") as HTMLElement;

      if (
        bodyHeight < windowHeight ||
        (content?.offsetHeight ?? 0) < windowHeight
      ) {
        footer.style.position = "static";
        footer.style.bottom = "0";
      } else {
        footer.style.position = "static";
      }
    };

    // Appel de la fonction au chargement de la page
    adjustFooterPosition();

    // Écouteur d'événement pour ajuster la position du footer lors du redimensionnement de la fenêtre
    window.addEventListener("resize", adjustFooterPosition);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", adjustFooterPosition);
    };
  }, []);

  return (
    <>
      <footer>
        <div className="Contenair">
          <div className="left">
            <p>
              <b>Escape Game</b>
            </p>
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
              <b>À propos</b>
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
    </>
  );
};

export default Footer;
