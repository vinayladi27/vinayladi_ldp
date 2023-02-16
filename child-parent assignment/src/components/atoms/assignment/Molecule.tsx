import React from "react";
import Atom from  "./Atom"
import { FC } from "react";
import "./Molecule.css";
import Stack from '@mui/material/Stack';
interface MoleculeProps{
  size?:"small" | "medium" | "large";
}

const Molecule:FC<MoleculeProps>=(props)=> {
  const images:string[] = ["images/image1.svg", "images/image2.svg","images/image3.svg","images/image4.svg","images/image5.svg","images/image6.svg"];
  const { size = "small",...rest } = props;
  return (
    <Stack>
      {images.map((items) => (
        <Atom img={items} className={`${size}`} {...rest}/>
      ))}
    </Stack>
  );
}

export default Molecule;
