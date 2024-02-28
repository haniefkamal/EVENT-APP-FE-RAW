"use client";
import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function ReferralButton() {
  const [refCoupon, setRefCoupon] = React.useState("");
  const onChange = ({ target }) => setRefCoupon(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="referral"
        label="Referral Coupon"
        value={refCoupon}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0 text-black",
        }}
      />
      <Button
        size="sm"
        color={refCoupon ? "gray" : "blue-gray"}
        disabled={!refCoupon}
        className="!absolute right-1 top-1 rounded"
      >
        APPLY
      </Button>
    </div>
  );
}
