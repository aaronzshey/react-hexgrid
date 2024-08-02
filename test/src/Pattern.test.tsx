import React from "react"
import { render } from "@testing-library/react"

import { Pattern } from "../../src/Pattern"

test("Pattern should render correctly with default props", () => {
  const { container } = render(
    <Pattern
      id={"test1"}
      link={"http://example.com"}
      size={{ x: 100, y: 200 }}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test("Pattern should render correctly with custom props", () => {
  const { container } = render(
    <Pattern
      id={"test2"}
      link={"http://example.com"}
      size={{ x: 200, y: 100 }}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
