import { createTheme} from "@mui/material";

const theme=createTheme({
    typography:{
        h1:{
            //styleName: beta/body 1;
            fontFamily: "Graphik",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing:" 0.01em",
            textAlign: "left",
            height: "22px",
            width: "266px",
            left: "24px",
            top: "8px",
            borderRadius: "nullpx",
        },
        body1:{
            //styleName: gamma/overline;
            fontFamily: "Graphik",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "14px",
            letterSpacing: "0.005em",
            textAlign: "left",
            height: "14px",
            width: "23px",
            left: "0px",
            top: "26px",
            borderRadius: "nullpx",

        },
        h2:{
            //styleName: beta/body 1;
            fontFamily: "Graphik",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "22px",
            letterSpacing:" 0.01em",
            textAlign: "left",
            //styleName: beta/body 2;
            height: "42px",
            width: "340px",
            left: "831px",
            top: "8px",
            borderRadius: "0px",


        },
       
    },
    
});

export default theme;