const StudentsTable = ({ students, handleDelete, studentChecklist }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Score</th>
            <th scope="col">Class</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students && students.map((item) => (
              studentChecklist && studentChecklist.includes(item.name) &&
              <tr>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{item.class}</td>
                <td><div data-testid="delete" onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</div></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default StudentsTable