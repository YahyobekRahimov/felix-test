import Logo from "../../icons/Logo";
import Container from "../Container";
import SearchInput from "../SearchInput/SearchInput";
import {
  Avatar as AvatarBase,
  Badge as BadgeBase,
  Stack,
} from "@mui/material";
import BellIcon from "../../icons/BellIcon";
import styled from "styled-components";

const Badge = styled(BadgeBase)`
  cursor: pointer;
`;

const Avatar = styled(AvatarBase)`
  cursor: pointer;
`;

export default function Header() {
  return (
    <>
      <header>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            justifyContent="space-between"
          >
            <Stack direction="row" gap="2rem" alignItems="center">
              <Logo />
              <SearchInput />
            </Stack>
            <Stack direction="row" gap="2rem" alignItems="center">
              <Badge variant="dot" badgeContent=" " color="primary">
                <BellIcon />
              </Badge>
              <Avatar alt="User" src="/src/assets/avatar.png" />
            </Stack>
          </Stack>
        </Container>
      </header>
    </>
  );
}
