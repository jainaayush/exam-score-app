import { fireEvent, render,screen } from "@testing-library/react"
import FilterRecord from "../Components/FilterRecord"

const studentChecklist = [
  "Def4",
  "Def5"
]

describe("Filter Record",()=>{
  test("",()=>{
    const{container} = render(<FilterRecord studentChecklist={studentChecklist}/>)
    expect(container).toBeTruthy()
  })
  test("",()=>{
    render(<FilterRecord studentChecklist={studentChecklist}/>)
    const from = screen.getByPlaceholderText(/From/i)
    fireEvent.input(from,"from")
    const To = screen.getByPlaceholderText(/To/i)
    fireEvent.input(To,"To")
    const CheckA = screen.getByLabelText("A")
    expect(CheckA).toBeInTheDocument()
    const CheckB = screen.getByLabelText("B")
    expect(CheckB).toBeInTheDocument()
    const CheckC = screen.getByLabelText("D")
    expect(CheckC).toBeInTheDocument()

  })
})