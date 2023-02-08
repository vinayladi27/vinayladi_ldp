import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import theme from "../themes/Theme";
import { ThemeProvider } from "@mui/material";

interface Trade {
  title: string;
  image: string;
  nick: string;
  value: string;
  percent: string;
  dollor: string;
  status: "onList" | "wishList";
}

interface TradeCardProps {
  trade: Trade;
  onList: (trade: Trade) => void;
  wishList: (trade: Trade) => void;
}

const TradeCard: React.FC<TradeCardProps> = ({ trade, onList, wishList }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row">
        <img src={trade.image} alt="backup"></img>
        <Stack direction="column">
          <Typography variant="h1">{trade.title}</Typography>
          <Typography variant="body1">{trade.nick}</Typography>
        </Stack>
        <Typography variant="h2">{trade.value}</Typography>
        <Typography variant="h2">{trade.percent}</Typography>
        <Typography variant="h2">{trade.dollor}</Typography>
        {trade.status === "onList" && (
          <StarBorderIcon onClick={() => wishList(trade)}>
            Finish
          </StarBorderIcon>
        )}
        {trade.status === "wishList" && (
          <StarIcon onClick={() => onList(trade)}>Read Again</StarIcon>
        )}
      </Stack>
    </ThemeProvider>
  );
};

export default TradeCard;
