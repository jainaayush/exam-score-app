import { useState } from "react"

const FilterRecord = ({ handleFilter, handleCheckBox, studentChecklist }) => {
  const [filter, setFilter] = useState({
    from: 0,
    to: 0,
    class: [],
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilter({ ...filter, [name]: value })
  }

  return (
    <>
      <div className="row mx-0">
        <div className="col-12">
          <div className="">
            <label className="col-form-label col-sm-2 pt-0">Score</label>
            <div className="form-group">
              <label for="exampleInputPassword1">Score</label>
              <input data-testid="score" onChange={(e) => handleChange(e)} name="from" type="number" className="form-control" id="exampleInputPassword1" placeholder="From" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Score</label>
              <input onChange={(e) => handleChange(e)} name="to" type="number" className="form-control" id="exampleInputPassword1" placeholder="To" />
            </div>
          </div>
          <div className="">
            <label className="col-form-label col-sm-2 pt-0">Class</label>
            <div class="form-check form-check-inline">
              <input onChange={handleCheckBox} checked={studentChecklist.includes("Def3")} name="Def3" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Def3" />
              <label class="form-check-label" for="inlineCheckbox1">A</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleCheckBox} checked={studentChecklist.includes("Def4")} name="Def4" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Def4" />
              <label class="form-check-label" for="inlineCheckbox2">B</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleCheckBox} checked={studentChecklist.includes("Def5")} name="Def5" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Def5" />
              <label class="form-check-label" for="inlineCheckbox3">D</label>
            </div>
          </div>

          <div data-testid="submit" onClick={() => handleFilter(filter)} className="btn btn-secondary">Filter</div>

        </div>
      </div>
    </>
  )
}

export default FilterRecord