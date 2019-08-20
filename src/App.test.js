import React from "react";
let enzyme = require("enzyme");
import App from "./App";

var Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const application = enzyme.mount(<App />);

  it("should have a header", () => {
    expect(application.find("h1").length).toEqual(1);
  });

  it("should have a text input", () => {
    expect(application.find('input[type="text"]').length).toEqual(1);
  });

  it("should have a submit button", () => {
    expect(application.find("button").length).toEqual(1);
  });
});
