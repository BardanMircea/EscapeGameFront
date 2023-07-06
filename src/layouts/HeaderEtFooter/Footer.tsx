import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Fonction Footer permet de positionner le footer à la bonne place dans la page
const Footer = () => {
  const navigate = useNavigate();

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
              <Link
                href="/"
                underline="none"
                color="inherit"
                onClick={() => navigate("/")}
              >
                Home
              </Link>
            </p>
          </div>

          <div className="center">
            <p>55 Rue du Faubourg Saint-Honoré</p>
            <p>75008 Paris</p>

            <p>+ 33 1 42 92 81 00</p>
            <p>dictateurs@escape-game.com</p>
          </div>
          <div className="right">
            <p>
              <b>À propos</b>
            </p>
            <p>
              Escape Game vous propose différentes salles de jeux où vous
              pourrez découvrir vos talents d'aventurier et de détective.
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
            Copyright© <u>Dictateurs</u> 2023.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
