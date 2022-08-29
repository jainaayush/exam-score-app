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
  }
  const handleFilterBtn = (status) => {
    handleFilter(filter, Checklist, status)
  }
  return (
    <>
      <div className="row mx-0 my-4">
        <div className="col-12 px-0 d-flex align-items-baseline justify-content-between">
          <div className="">
            <label className="col-form-label pt-0 pb-1">{t("score")}</label>
            <div className="d-flex">
              <div className="form-group mb-3 me-2">
                <input onChange={(e) => handleChange(e)}
                  name="from"
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder={t("From")} />
              </div>
              <div className="form-group mb-3 ms-2">
                <input onChange={(e) => handleChange(e)}
                  name="to" type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder={t("To")} />
              </div>
            </div>
          </div>
          <div className="d-block">
            <label className="col-form-label pt-0 pb-1">{t("class")}</label>
            <div className="">
              <div class="form-check form-check-inline">
                <input onChange={handleCheckBox}
                  checked={Checklist.includes("A")}
                  name="A" class="form-check-input"
                  type="checkbox" id="inlineCheckbox1"
                  value="A" />
                <label class="form-check-label" for="inlineCheckbox1">A</label>
              </div>
              <div class="form-check form-check-inline">
                <input onChange={handleCheckBox}
                  checked={Checklist.includes("B")}
                  name="B"
                  class="form-check-input"
                  type="checkbox" id="inlineCheckbox2"
                  value="B" />
                <label class="form-check-label" for="inlineCheckbox2">B</label>
              </div>
              <div class="form-check form-check-inline">
                <input onChange={handleCheckBox}
                  checked={Checklist.includes("C")}
                  name="C"
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="C" />
                <label class="form-check-label" for="inlineCheckbox3">C</label>
              </div>
            </div>
          </div>
          <div className="">
            <div onClick={() => handleFilterBtn(true)}
              className="btn btn-secondary px-4 py-2 me-2">Filter</div>
            <div onClick={() => { handleFilterStatusFunc(false) }}
              className="btn btn-secondary px-4 py-2 ms-2">Reset</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterRecord