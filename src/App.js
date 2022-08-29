import { useEffect, useState } from 'react';
import CreateRecord from './Components/CreateRecord';
import FilterRecord from './Components/FilterRecord';
import StudentsTable from './Components/StudentsTable';
import { studentDetails } from './constants'
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const [students, setStudents] = useState(studentDetails)
  const [tempStudents, setTempStudents] = useState(studentDetails)

  const [studentChecklist, setStudentChecklist] = useState([])
  const [filterStatus, handleFilterStatus] = useState(false)
  const [sortArrayIcon, setSortArrayIcon] = useState(true)

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

  const handleFilter = (filter, checkList, status) => {
    let record = students
    if (filter.to > 0) {
      record = record.filter((item) => {
        if (item.score >= parseInt(filter.from) && item.score <= parseInt(filter.to)) {
          return item
        }
      })
      setTempStudents(record)
    }
    if (checkList.length) {
      record = record.filter((item) => checkList.includes(item.class))
    }
    setTempStudents(record)
    handleFilterStatus(status)
  }

  console.log("Filter Students", students)

  const handleFilterStatusFunc = (status) => {
    if (!status) {
      setStudentChecklist([])
      handleFilterStatus(false)
    }
  }

  const sortArray = (order, by) => {
    if (order) {
      setStudents([...(filterStatus ? tempStudents : students).sort((a, b) => (a[by]) - (b[by]))])
      setSortArrayIcon(!order)
    } else {
      setStudents([...(filterStatus ? tempStudents : students).sort((a, b) => (b[by]) - (a[by]))])
      setSortArrayIcon(!order)
    }
  }


  return (
    <>
      <div className='row mx-0 d-flex justify-content-center'>
        <div className='d-flex justify-content-end mt-2'>
          <span className='mt-2'>{t("choose_your_language")}:-&nbsp;</span>
          <button className='btn btn-secondary ms-2' onClick={() => changeLanguage("hi")}>HI</button>
          <button className='btn btn-secondary ms-2' onClick={() => changeLanguage("en")}>EN</button>
        </div>
        <div className='col-xl-8 col-lg-10 col-md-12 col-12 p-0'>
          <div className='my-5'>
            <CreateRecord
              handleCreateRecord={handleCreateRecord}
            />
          </div>
          <div className='border my-5 shadow rounded-4 bg-white p-4'>
            <FilterRecord
              sortArray={sortArray}
              handleFilter={handleFilter}
              setStudentChecklist={setStudentChecklist}
              handleFilterStatusFunc={handleFilterStatusFunc}
            />
            <StudentsTable
              sortArray={sortArray}
              students={filterStatus ? tempStudents : students}
              handleDelete={handleDelete} studentChecklist={studentChecklist}
              filterStatus={filterStatus}
              setSortArrayIcon={setSortArrayIcon}
              sortArrayIcon={sortArrayIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
