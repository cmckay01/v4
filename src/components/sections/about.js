import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Kotlin', 'Node.js', 'Swift'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Ciaran, a seeker of knowledge and a creator of cool projects in the realms
              of physics and computer science. As a kid, stargazing wasn't just a pastime; it was
              the beginning of my fascination with the universe, inevitably leading me towards a
              passion in physics. Every moment spent unraveling the mysteries of the cosmos has
              fueled my passion for understanding the world around us.{' '}
            </p>
            <p>
              As far my foray into CS, my coding story began in a high school robotics team. It was
              there, amidst the hum of machines and the camaraderie of my team, that I found the
              beauty in writing code. It's not like any other form of writing; it's crafting a
              language that breathes life into ideas. Code is essentially an enigmatic, magical
              language that allows you to become a wizard. Your wand is your keyboard. The limits of
              what you can create have no bound. Seeing a robot come to life — performing complex
              maneuvers through a series of logical steps and instructions — was my first thrill.
              The initial magic of it is what never failed to excite me, and since then I’ve been
              hooked.{' '}
            </p>
            <p>
              Fast forward through years of hard work, a physics degree at West Chester University,
              and further studies at Columbia University for a second bachelors in CS (for the 3-2
              Combined Plan program), here I am. This site is a window into my world — a blend of
              intellectual curiosity and hands-on project making. It's an intimate resume of sorts,
              showcasing a journey fueled by a love for the stars and the satisfaction of solving a
              tricky coding problem.
            </p>
            <p>
              So, welcome to my corner of the internet — a place where physics meets programming,
              and where curiosity is always the driving force — or something like that.
            </p>

            <p>
              Up until this point, I've had the privilege of contributing to a diverse range of
              teams ranging from <a href="https://www.jlab.org/Hall-D/">a particle physics lab</a>,
              to various startups, including a company that helps{' '}
              <a href="https://www.columbiabuildlab.com/"> boost traffic for small businesses</a>, a{' '}
              <a href="https://idzyns.com/project/livitlab/"> VR/AR ed-tech startup</a>, and a firm
              specialized in{' '}
              <a href="https://www.promote2sell.com/">
                {' '}
                topographical and structural data collection
              </a>
              . My journey through these dynamic environments has been marked by a wonderful variety
              of experiences. This path has afforded me significant flexibility and control over my
              work, enabling me to thrive in fast-paced settings. I've relished the opportunity to
              contribute my ideas to projects, gain extensive hands-on experience, and feel like a
              valuable member of each team. As I look to the future, my goal is to leverage these
              rich experiences into a long-term role where I can continue to offer meaningful
              contributions and fresh perspectives.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
