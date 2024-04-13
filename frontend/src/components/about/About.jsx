import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://static.vecteezy.com/system/resources/previews/007/932/867/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg);
  margin: auto;
  width: 38%;
  height: 35vh;
  background-position: left 0px bottom -100px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 0px;
  }
`;

const Mid = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const Text = styled(Typography)`
  color: #000;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Text variant="h5">
          StellarScribe is more than just a collection of articles; it's a
          platform for discovery and exploration. Whether you're a seasoned
          enthusiast or just starting to explore this fascinating area, our goal
          is to provide you with engaging and informative content that enriches
          your understanding and experience.
          <br />
          We believe in the power of knowledge-sharing and aim to foster
          meaningful discussions and connections among our readers. Through our
          articles, guides, and reviews,we aim to cover a wide range of topics.
          <br />
          We encourage you to join the conversation by sharing your thoughts,
          questions, and experiences in the comments section. Your input helps
          us create a richer and more diverse community.
          <br />
          We hope you find inspiration and value in our content, and we look
          forward to embarking on this journey together.
          <br />
          <br />
        </Text>
        <Mid variant="h4">
          Thank you for visiting StellarScribe. Happy reading!
        </Mid>
      </Wrapper>
    </Box>
  );
};

export default About;
