import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Image from "../image";
import Link from "../link";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type SectionProps = {
  title: string;
  content: string;
  link?: {
    href: string;
    name: string;
    ext?: boolean;
  };
  imageSrc: string;
  imageTinted?: boolean;
  reverse?: boolean;
};

const Section = ({
  title,
  content,
  link,
  imageSrc,
  imageTinted,
  reverse,
}: SectionProps) => (
  <div className="container mt-5 pt-5">
    <div className="row">
      <div
        className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5 order-lg-${
          reverse ? 2 : 1
        }`}
      >
        <Fade bottom>
          <div className={`m${reverse ? "l" : "r"}-lg-3`}>
            <Heading2 fontSize={{ base: fontSizes.xl4, md: fontSizes.xl5 }}>
              {title}
            </Heading2>
            <Text>{content}</Text>
            {link && <Link {...link} />}
          </div>
        </Fade>
      </div>

      <div
        className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5 order-lg-${
          reverse ? 1 : 2
        }`}
      >
        <div className={`m${reverse ? "r" : "l"}-lg-3`}>
          <Image
            alt={title}
            src={imageSrc}
            tinted={imageTinted == null ? true : imageTinted}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Section;

const Heading2 = styled.h2`
  ${Heading};
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
`;
