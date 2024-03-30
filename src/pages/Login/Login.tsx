import { Box, Stack } from "@mui/material";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
`;

export default function Login() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      component="main"
    >
      <Box
        bgcolor="var(--text-primary)"
        maxWidth="90vw"
        width="430px"
        borderRadius="12px"
        paddingY="48px"
        paddingX="28px"
      >
        <H1>Sign in</H1>
      </Box>
    </Stack>
  );
}
