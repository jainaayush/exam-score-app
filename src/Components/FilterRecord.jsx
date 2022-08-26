import { useState } from "react"
import { useTranslation } from "react-i18next";

const FilterRecord = ({ handleFilter, sortArray, handleFilterStatusFunc }) => {
  const { t } = useTranslation();
  const [Checklist, setChecklist] = useState([])
  const [filter, setFilter] = useState({
    from: 0,
    to: 0,
    class: [],
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilter({ ...filter, [name]: value })
  }

  const handleCheckBox = (event) => {
    const { value } = event.target
    const selected = Checklist;
    let find = selected.indexOf(value);
    if (find > -1 && selected.length >= 1) {
      selected.splice(find, 1);
    } else if (find === -1) {
      selected.push(value);
    }
    setChecklist([...selected])
    console.log(Checklist)
  }
  const handleFilterBtn = (status) => {
    handleFilter(filter, Checklist, status)
  }
  return (
    <>
      <div className="row mx-0">
        <div className="col-12">
          <div className="">
            <label className="col-form-label col-sm-2 pt-0">{t("score")}</label>
            <div className="form-group">
              <label for="exampleInputPassword1">{t("student_name")}</label>
              <input onChange={(e) => handleChange(e)}
                name="from"
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder={t("enter_student_name")} />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">{t("score")}</label>
              <input onChange={(e) => handleChange(e)}
                name="to" type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder={t("enter_score")} />
            </div>
          </div>
          <div className="">
            <label className="col-form-label col-sm-2 pt-0">{t("class")}</label>
            <div class="form-check form-check-inline">
              <input onChange={handleCheckBox}
                checked={Checklist.includes("Def3")}
                name="Def3" class="form-check-input"
                type="checkbox" id="inlineCheckbox1"
                value="Def3" />
              <label class="form-check-label" for="inlineCheckbox1">A</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleCheckBox}
                checked={Checklist.includes("Def4")}
                name="Def4"
                class="form-check-input"
                type="checkbox" id="inlineCheckbox2"
                value="Def4" />
              <label class="form-check-label" for="inlineCheckbox2">B</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleCheckBox}
                checked={Checklist.includes("Def5")}
                name="Def5"
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Def5" />
              <label class="form-check-label" for="inlineCheckbox3">D</label>
            </div>
          </div>
          <div onClick={() => handleFilterBtn(true)}
            className="btn btn-secondary">Filter</div>
          <div onClick={() => { handleFilterStatusFunc(false) }}
            className="btn btn-secondary">Reset</div>
          <div onClick={() => sortArray("asc")}
            className="btn btn-secondary">accending</div>
          <div onClick={() => sortArray("desc")}
            className="btn btn-secondary">descending</div>

        </div>
      </div>
    </>
  )
}

export default FilterRecord