import { useState } from "react"
import { useTranslation } from "react-i18next";
const CreateRecord = ({
  handleCreateRecord
}) => {
  const { t } = useTranslation();
  const [record, setRecord] = useState({
    name: "",
    score: 0,
    class: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setRecord({ ...record, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (record.name !== "" && record.class !== "") {
      handleCreateRecord(record)
    }
    setRecord({
      name3: "",
      score: 0,
      class: "",
    })
  }

  return (
    <>
      <div className="row mx-0 d-flex justify-content-center">
        <div className="col-9 border rounded-4 shadow bg-white px-4 py-5">
          <form className="px-4">
          <label className="h4 pb-3 text-center w-100">Create Student Record</label>
            <div className="form-group mb-3">
              <label for="exampleInputEmail1" className="pb-1">{t("student_name")}</label>
              <input name="name" onChange={(e) => handleChange(e)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("enter_student_name")} />
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputPassword1" className="pb-1">{t("score")}</label>
              <input onChange={(e) => handleChange(e)} name="score" type="number" className="form-control" id="exampleInputPassword1" placeholder={t("enter_score")} />
            </div>
            <fieldset className="form-group mb-3">
              <div className="row">
                <legend className="col-sm-1 col-form-label pt-0 pb-1">{t("class")}</legend>
                <div className="col-sm-11 d-flex align-items-center">
                  <div className="form-check me-3">
                    <input onChange={(e) => handleChange(e)} name="class" className="form-check-input" type="radio" id="gridRadios1" value="A" />
                    <label className="form-check-label" for="gridRadios1">
                      A
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input onChange={(e) => handleChange(e)} name="class" className="form-check-input" type="radio" id="gridRadios2" value="B" />
                    <label className="form-check-label" for="gridRadios2">
                      B
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input onChange={(e) => handleChange(e)} name="class" className="form-check-input" type="radio" id="gridRadios3" value="C" />
                    <label className="form-check-label" for="gridRadios3">
                      C
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary px-5 py-2 ms-auto d-flex">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateRecord