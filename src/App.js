import { useState } from 'react';
import CreateRecord from './Components/CreateRecord';
import FilterRecord from './Components/FilterRecord';
import StudentsTable from './Components/StudentsTable';
import { studentDetails } from './constants'

const App = () => {
  const [students, setStudents] = useState(studentDetails)

  const handleCreateRecord = (record) => {
    setStudents([...students, record])
  }

  const handleDelete = (recordId) => {
    const up = students && students.filter((item) => item.id !== recordId)
    setStudents(up)
  }

  const handleFilter = (filter) => {
    console.log(filter)
  }

  return (
    <>
      <div className='row mx-0 d-flex justify-content-center'>
        <div className='col-8 p-0'>
          <div className='my-5'>
            <CreateRecord handleCreateRecord={handleCreateRecord} />
          </div>
          <div className='border my-5'>
            <FilterRecord handleFilter={handleFilter} />
            <StudentsTable students={students} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
