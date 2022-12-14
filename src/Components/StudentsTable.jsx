import { useTranslation } from "react-i18next";

const StudentsTable = ({ students, handleDelete, sortArrayIcon, sortArray, studentChecklist, filterStatus }) => {
  const { t } = useTranslation();
  const up = '\u25B2'
  const down = '\u25BC'
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{t("student_name")}</th>
            <th scope="col">{t("score")} <span role="button" onClick={() => sortArray(sortArrayIcon, 'score')}>{sortArrayIcon ? up : down}</span></th>
            <th scope="col">{t("class")}</th>
            <th scope="col">{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {
            students && students.map((item) => (
              tableData(item)
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default StudentsTable