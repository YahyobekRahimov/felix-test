import styled from "styled-components";
import SearchIcon from "../../icons/SearchIcon";
import XCircle from "../../icons/XCircle";
import { ChangeEvent, useContext, useRef } from "react";
import { SearchInputContext } from "../../context/SearchInputContext";

const InputWrapper = styled.div<{ isvalue: string }>`
  background: transparent;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => (props.isvalue ? "1rem" : "0rem")};
  padding-right: ${(props) => (props.isvalue ? "1rem" : "0rem")};
  border-radius: ${(props) => (props.isvalue ? "6px" : "0px")};
  gap: 0.5rem;
  max-width: 600px;
  width: 100%;
  transition: all 0.2s ease-in;
  background-color: ${(props) =>
    props.isvalue ? "white" : "transparent"};
  &:focus-within {
    background-color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 6px;
  }
  &:focus-within path {
    stroke: black;
  }
  & path {
    stroke: ${(props) => (props.isvalue ? "black" : "white")};
  }
  & .input-reset-button {
    display: ${(props) => (props.isvalue ? "block" : "none")};
  }
`;

const TextInput = styled.input`
  background: transparent;
  border: none;
  font-family: "Mulish", sans-serif;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const ButtonInputReset = styled.button`
  width: max-content;
  height: max-content;
  display: flex;
  justify-items: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default function SearchInput() {
  const { searchValue, setSearchValue } = useContext(
    SearchInputContext
  );
  const InputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleResetForm = () => {
    setSearchValue("");
    if (InputRef?.current) {
      InputRef.current.focus();
    }
  };

  return (
    <InputWrapper isvalue={searchValue.length > 0 ? "true" : ""}>
      <SearchIcon />
      <TextInput
        type="text"
        placeholder="Search for any training you want"
        value={searchValue}
        onChange={handleChange}
        ref={InputRef}
      />
      <ButtonInputReset
        className="input-reset-button"
        onClick={handleResetForm}
      >
        <XCircle className="x-circle-icon" />
      </ButtonInputReset>
    </InputWrapper>
  );
}
