import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import AdminTableButton from "../../components/AdminTableButton";

const AdminTable = () => {
  const AdminTableLogo = (
    <img src={LogoIcon} className="admin-table-logo" alt="Logo"></img>
  );

  return (
    <section className="admin-table">
      {AdminTableLogo}
      <AdminTableButton />
    </section>
  );
};

export default AdminTable;
