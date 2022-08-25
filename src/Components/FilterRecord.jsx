import { useState } from "react"

const FilterRecord = ({ handleFilter }) => {
  const [filter, setFilter] = useState({
    from: 0,
    to: 0,
    class: [],
  })
  const [studentlist,setStudentlist] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilter({ ...filter, [name]: value })
  }

  const handleCheckBox = () => {

  }

  return (
    <>
      <div className="row mx-0">
        <div className="col-12">
          <div className="">
            <label className="col-form-label col-sm-2 pt-0">Score</label>
            <div className="form-group">
              <label for="exampleInputPassword1">Score</label>
              <input onChange={(e) => handleChange(e)} name="from" type="number" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Score</label>
              <input onChange={(e) => handleChange(e)} name="to" type="number" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
          </div>
          <div className="">
            <label className="col-form-label col-sm-2 pt-0">Class</label>
            <div class="form-check form-check-inline">
              <input name="class" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="A" />
              <label class="form-check-label" for="inlineCheckbox1">A</label>
            </div>
            <div class="form-check form-check-inline">
              <input name="class" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="B" />
              <label class="form-check-label" for="inlineCheckbox2">B</label>
            </div>
            <div class="form-check form-check-inline">
              <input name="class" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="C" />
              <label class="form-check-label" for="inlineCheckbox3">D</label>
            </div>
          </div>

          <div onClick={() => handleFilter(filter)} className="btn btn-secondary">Filter</div>

        </div>
      </div>
    </>
  )
}

export default FilterRecord