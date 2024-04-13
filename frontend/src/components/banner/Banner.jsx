import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  background: url(https://scx2.b-cdn.net/gfx/news/hires/2014/whyisspacebl.jpg) center/40% repeat-x #000;
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 22px;
    color: #ffffff;
    // background: #FFFFFF;
`;

function Banner() {
  return (
    <Image>
      <Heading>StellarScribe</Heading>
      <SubHeading>Read and Write Blogs</SubHeading>
    </Image>
  );
}

export default Banner;
