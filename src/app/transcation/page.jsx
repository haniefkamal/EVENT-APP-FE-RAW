"use client";
import React from "react";
import NavbarWeb from "../components/home/navbar";
import Checkout from "../components/transaction/checkout";

function TransactionPage() {
  return (
    <>
      <NavbarWeb />

      <Checkout />
    </>
  );
}
export default TransactionPage;
