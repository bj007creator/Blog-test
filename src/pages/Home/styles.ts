import styled from "styled-components";

import { FiUpload, FiEdit, FiX } from "react-icons/fi";

interface ContainerProps {
  background: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20rem;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  background: ${(props: ContainerProps) => props.background};
  position: relative;

  &:after {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 70px;
    background: ${(props: ContainerProps) => props.background};
    filter: blur(40px);
  }
`;

interface FieldProps {
  size: number;
}

export const Field = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;

  textarea {
    padding: 10px;

    resize: none;
    overflow-y: hidden;
    overflow-x: hidden;
    text-align: left;

    font-size: ${(props: FieldProps) => props.size}px;
    font-family: "Ubuntu", sans-serif;
    outline: 1px solid blue;
    background: transparent;
    border: 1px solid #22f5;
    outline: 1px solid transparent;

    &:focus {
      border: none;
    }
  }
`;

interface AreaProps {}

export const Area = styled.div``;

export const Menu = styled.div`
  width: 300px;
  background: white;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 0px 50px 0px 50px;
`;

export const ImageOption = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2em;
    color: black;
  }
  > div {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: 0px 0px 10px #000000a5;
  }

  input {
    height: 50px;
    width: 200px;
  }
  label {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2em;
    color: black;
  }
  button {
    width: 200px;
    height: 50px;
    margin-top: 10px;
    border-radius: 20px;
    background: #55aaffaa;
    border: none;
    cursor: pointer;
    &:hover {
      background: #55aaff77;
    }
  }
`;

export const VideoOption = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-top: 1px solid #00000025;

  h2 {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2em;
    color: black;
  }
  > div {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: 0px 0px 10px #000000a5;
  }

  input {
    height: 50px;
    width: 200px;
  }
  label {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2em;
    color: black;
  }
  button {
    width: 200px;
    height: 50px;
    margin-top: 10px;
    border-radius: 20px;
    background: #55aa33aa;
    border: none;
    cursor: pointer;
    &:hover {
      background: #55aa3388;
    }
  }
`;

export const TextOption = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-top: 1px solid #00000025;

  h2 {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2em;
    color: black;
  }
  > div {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: 0px 0px 10px #000000a5;
  }

  input {
    height: 50px;
    width: 200px;
  }
  label {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2em;
    color: black;
  }
  button {
    width: 200px;
    height: 50px;
    margin-top: 10px;
    border-radius: 20px;
    background: #f22333aa;
    border: none;
    cursor: pointer;
    &:hover {
      background: #f2233388;
    }
  }
`;

export const UploadIcon = styled(FiUpload).attrs({
  size: 30
})``;

export const TextIcon = styled(FiEdit).attrs({
  size: 30
})``;

export const XIcon = styled(FiX).attrs({
  size: 20
})`
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 100;
`;

export const DropZone = styled.div`
  flex: 1;

  border: 1px solid black;
  margin: 10px;
  height: 100%;
  width: 100%;

  min-width: 200px;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

interface ImageProps {
  link: string;
  width: number;
  height: number;
}

export const Image = styled.img`
  background: url(${(props: ImageProps) => props.link});
  background-size: ${(props: ImageProps) =>
    props.width + "px " + props.height + "px"};
  width: ${(props: ImageProps) => props.width};
  height: ${(props: ImageProps) => props.height};
`;
