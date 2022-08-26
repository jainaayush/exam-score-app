import { fireEvent, render,screen } from "@testing-library/react";
import CreateRecord from "../Components/CreateRecord";

describe("Component",()=>{
  const submit = jest.fn()
  test("should component render",()=>{
    const{container} = render(<CreateRecord/>)
    expect(container).toBeTruthy()
  })
  test("Create Record",()=>{
    render(<CreateRecord/>)
    const name = screen.getByPlaceholderText(/Enter email/i)
    fireEvent.input(name,"xyz@email")
    const Password = screen.getByPlaceholderText(/score/i)
    fireEvent.input(Password,"1234")
    const button = screen.getByTestId("submit")
    fireEvent.click(button)
    const CheckA = screen.getByLabelText("A")
    expect(CheckA).toBeInTheDocument()
    const CheckB = screen.getByLabelText("B")
    expect(CheckB).toBeInTheDocument()
    const CheckC = screen.getByLabelText("C")
    expect(CheckC).toBeInTheDocument()
  })
})