import { useTranslation } from "react-i18next";

const StudentsTable = ({ students, handleDelete, studentChecklist, filterStatus }) => {
  const { t } = useTranslation();
  console.log("hello", filterStatus, "studentChecklist", studentChecklist)
  const tableData = (item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.score}</td>
      <td>{item.class}</td>
      <td><div onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</div></td>
    </tr>
  )
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">{t("student_name")}</th>
            <th scope="col">{t("score")}</th>
            <th scope="col">{t("class")}</th>
            <th scope="col">{t("actions")}</th>

          </tr>
        </thead>
        <tbody>
          {
            students && students.map((item) => (
              filterStatus ?
                studentChecklist.includes(item.name) &&
                tableData(item)
                :
                tableData(item)
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default StudentsTable