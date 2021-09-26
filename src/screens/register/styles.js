import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  aling-items: center;
  margin-top: 20px;
  width: 400px;
  margin-left: 30%;
  height: 520px;
  background-color: #f8c471;
  border-radius: 10px;
  margin-top: 5%;
`;

export const Title = styled.h1`
  font-family: KoHo;
  color: #d35400;
`;

export const Subtitle = styled.h3`
  font-family: KoHo;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  aling-items: center;
  width: 80%;
  height: 450px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 55px;
  text-aling: left;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: orange;
  margin: 3px;
  border-radius: 3px;
`;

export const Error = styled.text`
  font-family: arial;
  text-align: center;
  font-size: 10px;
  color: red;
`;

export const Input = styled.input`
  border-radius: 5px;
  background-color: #def;
  width: 100%;
`;
