import React from 'react'
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import StudentsTable from '../Components/StudentsTable'

describe("Tests for StudentTable", () => {
  test("render without crashing", () => {
    const { container } = render(<StudentsTable />)
    expect(container).toBeTruthy()
  })
});
