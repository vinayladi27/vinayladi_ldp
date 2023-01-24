import React from "react";
import Stack from '@mui/material/Stack';
import "./Atom.css";
import { FC } from "react";
interface Props {
  img: string;
  className:string;
}

const Atom:FC<Props>=(props)=> {
  return (
    <Stack>
      <img src={props.img} className={props.className} alt="backup"></img>
    </Stack>
  );
}

export default Atom;
