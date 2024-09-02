import React from "react";
import Image from "next/image";
import bard from "../../images/TSUTAYA佐賀大学.jpg";
import HomeBar from "@/app/components/HomeBar";
import HeaderBar from "@/app/components/HeaderBar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Confirm = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar />

      <div className="flex justify-center items-center pt-20 pb-4">
        <div className="w-11/12">
          <Image
            src={bard}
            layout="responsive"
            width={100}
            height={100}
            alt="food"
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-4">
        <Typography variant="h4" component="h5" className="pt-5">
          Restrant Name
        </Typography>
        <Typography variant="h5" component="h6" className="pt-5">
          参加者： 10人
        </Typography>
      </div>

      <div className="flex flex-col items-center pt-16">
        <Button variant="contained" sx={{ width: "70%" }}>
          予約する
        </Button>
      </div>

      <HomeBar />
    </div>
  );
};

export default Confirm;
