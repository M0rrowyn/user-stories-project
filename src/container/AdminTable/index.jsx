import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import UserIcon from "../../assets/images/admin-table/user.svg";
import PlusIcon from "../../assets/images/admin-table/plus.svg";
import AdminTableButton from "../../components/AdminTableButton";
import ProductsTable from "../../components/ProductsTable";

const AdminTable = () => (
  <section className="admin-header">
    <img src={LogoIcon} className="admin-header-logo" alt="Logo"></img>
    <div className="admin-header-button-container">
      <AdminTableButton
        text="Preview"
        image={<img src={UserIcon} className="user-icon" alt="User"></img>}
      />
      <AdminTableButton
        text="Add product"
        image={<img src={PlusIcon} alt="User"></img>}
      />
    </div>
    <ProductsTable />
  </section>
);

export default AdminTable;
