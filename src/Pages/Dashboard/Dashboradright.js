import React from "react";
import FAQ from "./FAQ/FAQ";
import Profileedit from "./Profileedit/Profileedit";
import Wallet from "./Wallet/Wallet";
import Compareprice from "./Compareprice/Compareprice";
import Dispute from "./Dispute/Dispute";
import Scanqr from "./Scanqr/Scanqr";
import Order from "./Order/Order";
import Address from "./Address/Address";
import Cartcheckout from "./Cart/CartCheckout";
import ChangePassword from "./ChangePassword/Index";
// import Cartcheckout from "../Securecheckout/CartCheckout";

export default function Dashboradright({ tab }) {
  return (
    <section className="Dashboradright-main">
      {tab === "address" && <Address />}
      {tab === "wallet" && <Wallet />}
      {tab === "order" && <Order />}
      {tab === "compare" && <Compareprice />}
      {tab === "scan" && <Scanqr />}
      {tab === "dispute" && <Dispute />}
      {tab === "faq" && <FAQ />}
      {tab === "hlo" && "hlo8"}
      {(tab === "profile" || tab === undefined) && <Profileedit />}
      {tab === "cart" && <Cartcheckout />}
      {tab === "changepassword" && <ChangePassword />}
    </section>
  );
}
