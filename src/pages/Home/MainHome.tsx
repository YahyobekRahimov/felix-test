import { Button as ButtonBase, Grid, Stack } from "@mui/material";
import styled from "styled-components";
import Container from "../../components/Container";

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: var(--text-primary);
  & span {
    color: var(--color-primary);
  }
`;

const Text = styled.p`
  color: var(--text-primary);
`;

const Button = styled(ButtonBase)`
  height: max-content;
  text-transform: none !important;
  padding-left: 25px !important;
  padding-right: 25px !important;
`;

const Card = styled.li`
  background-color: white;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 32px;

  & h3 {
    margin-bottom: 7px;
  }

  & h4 {
    font-weight: 400;
    font-size: 14px;
  }

  & div h4 {
    margin-top: 20px;
  }
`;

const WrapperCard = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

export default function MainHome() {
  const data = [
    {
      "book": {
        "author": "Eben Upton",
        "cover": "https://covers.openlibrary.org/b/id/7605922-M.jpg",
        "id": 8,
        "isbn": "9781118464465",
        "pages": 264,
        "published": 2012,
        "title": "Raspberry Pi User Guide",
      },
      "status": 0,
    },
    {
      "book": {
        "author": "Eben Upton",
        "cover": "https://covers.openlibrary.org/b/id/7605922-M.jpg",
        "id": 8,
        "isbn": "9781118464465",
        "pages": 264,
        "published": 2012,
        "title": "Raspberry Pi User Guide",
      },
      "status": 0,
    },
  ];
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        marginTop="30px"
      >
        <Stack gap="1rem">
          <H1>
            You've got <span>7 books</span>
          </H1>
          <Text>Your books today</Text>
        </Stack>
        <Button
          variant="contained"
          startIcon={<span style={{ fontSize: "16px" }}>+</span>}
        >
          <span>Create a book</span>
        </Button>
      </Stack>
      <WrapperCard>
        {data.map((BookData, index) => {
          const { author, cover, isbn, pages, published, title } =
            BookData.book;
          return (
            <Card key={index}>
              <h3>{title}</h3>
              <h4>Cover: {cover}</h4>
              <h4>Pages: {pages}</h4>
              <h4>Published: {published}</h4>
              <h4>Isbn: {isbn}</h4>

              <Stack direction="row">
                <h4>
                  {author} / {published}
                </h4>
              </Stack>
            </Card>
          );
        })}
      </WrapperCard>
    </Container>
  );
}
