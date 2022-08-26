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
        <div className="col-6">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">{t("student_name")}</label>
              <input name="name" onChange={(e) => handleChange(e)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("enter_student_name")} />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">{t("score")}</label>
              <input onChange={(e) => handleChange(e)} name="score" type="number" className="form-control" id="exampleInputPassword1" placeholder={t("enter_score")} />
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">{t("class")}</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input onChange={(e) => handleChange(e)} name="class" className="form-check-input" type="radio" id="gridRadios1" value="A" />
                    <label className="form-check-label" for="gridRadios1">
                      A
                    </label>
                  </div>
                  <div className="form-check">
                    <input onChange={(e) => handleChange(e)} name="class" className="form-check-input" type="radio" id="gridRadios2" value="B" />
                    <label className="form-check-label" for="gridRadios2">
                      B
                    </label>
                  </div>
                  <div className="form-check">
                    <input onChange={(e) => handleChange(e)} name="class" className="form-check-input" type="radio" id="gridRadios3" value="C" />
                    <label className="form-check-label" for="gridRadios3">
                      C
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateRecord