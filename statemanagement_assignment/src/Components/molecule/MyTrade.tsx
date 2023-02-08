import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import TradeCard from "../atoms/TradeCard";


interface Trade {
  title: string;
  image: string;
  nick: string;
  value: string;
  percent: string;
  dollor: string;
  status: "onList" | "wishList";
}

interface MyTradeProps {}

const MyTrade: React.FC<MyTradeProps> = () => {
  const [trades, setTrade] = useState<Trade[]>([
    {
      title: "Bitcoin",
      image: "images/Bitcoin.svg",
      nick: "BTC",
      value: "$3,285,553.73",
      percent: "+1.06%",
      dollor: "$60.1T",
      status: "onList",
    },
    {
      image: "images/Ethereum.svg",
      title: "Ethereum",
      nick: "ETH",
      value: "$216,678.10",
      percent: "-5.49%",
      dollor: "$25.4T",
      status: "wishList",
    },
    {
      image: "images/Ethereum.svg",
      title: "Ethereum 2",
      nick: "ETH2",
      value: "$216,678.10",
      percent: "-5.49%",
      dollor: "$25.4T",
      status: "wishList",
    },
    {
      image: "images/Tether.svg",
      title: "Tether",
      nick: "USDT",
      value: "$74.31",
      percent: "+0.11%",
      dollor: "$4.6T",
      status: "onList",
    },
    {
      image: "images/Cardano.svg",
      title: "Cardano",
      nick: "ADA",
      value: "$104.52",
      percent: "-1.82%",
      dollor: "$3.4T",
      status: "wishList",
    },
    {
      image: "images/XRP.svg",
      title: "XRP",
      nick: "XRP",
      value: "$57.21",
      percent: "+1.11%",
      dollor: "$2.7T",
      status: "onList",
    },
  ]);
  const [tab, setTab] = useState<"onList" | "wishList">("onList");

  const handleFinish = (trade: Trade) => {
    const updatedTrades: Trade[] = trades.map((t) => {
      if (t.title === trade.title) {
        return { ...t, status: "wishList" };
      }
      return t;
    });
    setTrade(updatedTrades);
  };

  const handleReadAgain = (trade: Trade) => {
    const updatedTrades: Trade[] = trades.map((b) => {
      if (b.title === trade.title) {
        return { ...b, status: "onList" };
      }
      return b;
    });
    setTrade(updatedTrades);
  };

  return (
    <Card>
      <Typography variant="h4">Trade</Typography>
      <Card>
        <Button variant="text" onClick={() => setTab("onList")}>
          All Assests
        </Button>
        <Button onClick={() => setTab("wishList")}>WishList</Button>
      </Card>
      {tab === "onList" && (
        <Card>
          {trades.map((trade) => (
            <Card variant="outlined">
              <TradeCard
                key={trade.title}
                trade={trade}
                wishList={handleFinish}
                onList={handleReadAgain}
              />
            </Card>
          ))}
        </Card>
      )}
      {tab === "wishList" && (
        <Card>
          {trades
            .filter((trade) => trade.status === "wishList")
            .map((trade) => (
              <Card variant="outlined">
                <TradeCard
                  key={trade.title}
                  trade={trade}
                  wishList={handleFinish}
                  onList={handleReadAgain}
                />
              </Card>
            ))}
        </Card>
      )}
    </Card>
  );
};

export default MyTrade;
