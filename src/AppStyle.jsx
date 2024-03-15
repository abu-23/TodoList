import { styled, css } from "styled-components";

export const MainDiv = styled.div``;
export const BackgroundImage = styled.img`
  width: 100%;
`;

export const TodoContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 20px;
`;
export const HeaderDiv = styled.div`
  display: flex;
`;
export const HeaderText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 5px;
  color: white;
`;
export const CrescentIcon = styled.img`
  margin-left: auto;
`;
export const InputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const TaskInput = styled.input`
  width: calc(100% - 50px);
  padding: 18px 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TodoListDiv = styled.ul`
  list-style: none;
  background: white;
  border-radius: 4px;

  width: 100%;
  height: 45vh;
  overflow: scrollY;
  overflow-x: hidden;
  margin-bottom: 0rem;
  padding: 0rem;
  box-shadow: 1px 5px 5px rgb(197, 197, 197);
`;
export const DeleteBtn = styled.div`
  margin-left: auto;
  color: rgb(80, 77, 77);
  border: none;
  padding: 0px 15px;
  cursor: pointer;
  display: none;
  font-size: 16px;
  &:hover {
    color: rgb(253, 253, 253);
    background: linear-gradient(90deg, #c058f3 0%, #55ddff 100%);
    border-radius: 5px;
  }
`;

export const TodoListItems = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 14px;
  &:hover {
    ${DeleteBtn} {
      display: inline-block;
    }
  }
`;
export const CheckboxRound = styled.input`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  &:checked {
    background: linear-gradient(90deg, #c058f3 0%, #55ddff 100%);
  }
`;
export const Checkmark = styled.span`
  &:after {
    content: "";
    position: relative;
    display: none;

    left: -1.3rem;
    right: 0px;
    top: 0px;
    width: 3px;
    height: 7px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    ${(props) =>
      props.isChecked
        ? css`
            display: block;
          `
        : ""}
  }
`;

export const TodoDesc = styled.span`
inline-size: 270px;
word-break: break-all;
  ${(props) =>
    props.isCompleted
      ? css`
          text-decoration: line-through;
          opacity: 0.4;
        `
      : ""}
`;

export const HorizontalLine = styled.hr`
  border: 0.2px solid rgb(231, 226, 226);
  width: 100%;
  margin: 0px;
  padding: 0rem;
`;
export const FilterContainer = styled.div`
  padding: 15px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  background: white;
  box-shadow: 0px 5px 5px rgb(197, 197, 197);
`;
export const TodoRemainig = styled.div`
  color: rgb(156, 152, 152);
  border: none;
  padding: 0px 10px;
  cursor: pointer;
  font-size: 10px;
  margin: 0.5rem 0rem;
  background: none;
`;
export const FilterButtonDiv = styled.div`
  margin-bottom: 5px;
  padding: 0rem;
  margin-left: 30px;
`;
export const FilterBtn = styled.button`
  color: rgb(156, 152, 152);
  border: none;
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  margin: 0rem 0rem;
  background: none;
  &:hover{
    color:black;
  }
  ${(props) =>
    props.isActive
      ? css`
          color: rgba(12, 104, 165, 1);
        `
      : ""}
`;
export const ClearBtn = styled.button`
  margin: 5px;
  margin-left: 5rem;
  background: none;
  color: grey;
  border: none;
  padding: 0px;
  cursor: pointer;
  float: right;
  font-size: 11px;
  :hover {
    color: black;
  }
`;
