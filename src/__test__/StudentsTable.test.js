import React from 'react'
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import StudentsTable from '../Components/StudentsTable'
import { studentDetails } from '../constants';

afterEach(cleanup)

describe("Tests for StudentTable", () => {
  const data = studentDetails
  const length = data.length;

  it("render without crashing", () => {
    const div = document.createElement("div")
    render(<StudentsTable></StudentsTable>, div)
  })
  it("for deleting a record", () => {
    const doc = render(<StudentsTable students={data}></StudentsTable>);
    // Click the delete button on the record table.
    const recordDeleteButton = screen.getByTestId("deleteButton");
    fireEvent.click(recordDeleteButton);
    data.pop();
    expect(data.length).toBe(length - 1);
  });
});
