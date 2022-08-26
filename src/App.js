import { useState } from 'react';
import CreateRecord from './Components/CreateRecord';
import FilterRecord from './Components/FilterRecord';
import StudentsTable from './Components/StudentsTable';
import { studentDetails } from './constants'
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const [students, setStudents] = useState(studentDetails)
  const [studentChecklist, setStudentChecklist] = useState([])
  const handleCreateRecord = (record) => {
    setStudents([...students, record])
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleDelete = (recordId) => {
    const up = students && students.filter((item) => item.id !== recordId)
    setStudents(up)
  }

  const handleFilter = (filter) => {
    console.log(filter)
  }

  const handleCheckBox = (event) => {
    const { value } = event.target
    const selected = studentChecklist;
    let find = selected.indexOf(value);
    if (find > -1 && selected.length >= 1) {
      selected.splice(find, 1);
    } else if (find === -1) {
      selected.push(value);
    }
    setStudentChecklist([...selected])
    console.log("87654", studentChecklist)
  }


  return (
    <>
      <div className='row mx-0 d-flex justify-content-center'>
        <div className='d-flex justify-content-end mt-2'>
          <span className='mt-2'>{t("choose_your_language")}:-&nbsp;</span>
          <button className='btn btn-secondary ms-2' onClick={() => changeLanguage("hi")}>HI</button>
          <button className='btn btn-secondary ms-2' onClick={() => changeLanguage("en")}>EN</button>
        </div>
        <div className='col-8 p-0'>
          <div className='my-5'>
            <CreateRecord handleCreateRecord={handleCreateRecord} />
          </div>
          <div className='border my-5'>
            <FilterRecord handleFilter={handleFilter} handleCheckBox={handleCheckBox} studentChecklist={studentChecklist} />
            <StudentsTable students={students} handleDelete={handleDelete} studentChecklist={studentChecklist} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
