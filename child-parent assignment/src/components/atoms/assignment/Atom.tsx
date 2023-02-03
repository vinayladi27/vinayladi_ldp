import React from "react";
import Stack from '@mui/material/Stack';
import "./Atom.css";
import { FC } from "react";
interface ImageProps {
  img: string;
  className:string;
}

const Atom:FC<ImageProps>=(props)=> {
  const{img,className}=props
  return (
    <Stack>
      <img src={img} className={className} alt="backup"></img>
    </Stack>
  );
}

export default Atom;
