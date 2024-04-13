import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://cdn.vectorstock.com/i/500p/45/27/contact-us-banner-vector-46424527.jpg);
  margin: auto;
  width: 40%;
  height: 35vh;
  background-position: left 0px bottom -240px;
  background-size: cover;
  margin-bottom: 10px;
`;

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  & > h3,
  & > h5 {
    margin-top: 0px;
  }
`;

const Text = styled(Typography)`
  color: #000;
  padding-right: 1%;
`;

const Lnk = styled(Link)`
  margin-top: 2px;
  padding-right: 1%;
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Text variant="h5">Shivansh Bansal</Text>
        <Lnk href="https://github.com/shivanshhgit" target="_blank">
          <GitHub />
        </Lnk>
        <Lnk href="https://www.linkedin.com/in/shivansh-bansal-964432249" target="_blank">
          <LinkedIn />
        </Lnk>
        <Lnk href="mailto:shivanshbansal21@gmail.com" target="_blank">
          <Email />
        </Lnk>
      </Wrapper>

      <Wrapper>
        <Text variant="h5">Abhinav Tomar</Text>
        <Lnk href="https://github.com/Killer4we" target="_blank">
          <GitHub />
        </Lnk>
        <Lnk href="https://www.linkedin.com/in/abhinav-tomar-4bb88221b/" target="_blank">
          <LinkedIn />
        </Lnk>
        <Lnk href="mailto:abhinavajay20@gmail.com" target="_blank">
          <Email />
        </Lnk>
      </Wrapper>
    </Box>
  );
};

export default Contact;
