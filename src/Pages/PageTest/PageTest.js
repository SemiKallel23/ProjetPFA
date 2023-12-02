import { useState } from "react";
import Table from "../../Component/Table/Table";
import { Pagination } from "../../Atoms";

function PageTest(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const tableColumns = [
    { key: "selection", title: "Select" },
    { key: "nom", title: "Nom" },
    { key: "prenom", title: "Prenom" },
    { key: "email", title: "Email" },
    { key: "telephone", title: "Telephone" },
    {
      key: "active",
      title: "Active",
      render: (rowData) => <CustomComponent data={rowData.active} />,
    },
    { key: "action", title: "Action" },
  ];
  const CustomComponent = ({ data }) => {
    return <div style={{ backgroundColor: "blue" }}>{data}</div>;
  };
  const tableData = [
    {
      
    },
  ];
  const handleSelectionChange = (selectedRows) => {};
  const onEdit = (index) => {};
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div style={{ width: "100%", padding: 20 }}>
      <Table
        columns={tableColumns}
        data={tableData}
        onSelectionChange={handleSelectionChange}
        onEdit={onEdit}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default PageTest;
