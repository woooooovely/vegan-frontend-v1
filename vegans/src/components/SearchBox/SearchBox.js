import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <SearchContainer>
        <Box
          placeholder="검색어를 입력하세요."
          className={"box" + (this.state.isActive ? "Active" : "Disabled")}
          onChange={this.handleInput}
        />
        <SearchButton
          onClick={() => {
            this.setState({ isActive: !this.state.isActive});
          }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              width: "30px",
              height: "30px",
              marginTop: "-100px",
              marginBottom: "25px",
            }}
          />
        </SearchButton>
      </SearchContainer>
    );
  }
}

const SearchContainer = styled.div`
  width: 950px;
  height: 100px;
  margin-left: 370px;
  margin-top: -80px;
  .boxDisabled {
    background: transparent;
    border: none;
    &::placeholder {
      color: white;
      font-size: 12px;
    }
  }
`;

const Box = styled.input`
  width: 910px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px solid #eeeeee;
  padding-left: 15px;
  margin-left: 20px;
`;

const SearchButton = styled.button`
  border: none;
  background-color: white;
  margin-left: 1010px;
  margin-top: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export default SearchBox;
