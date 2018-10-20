import React, { Component } from "react";
import { create } from "react-test-renderer";
import Details from "../components/Details";

test("snapshot", () => {
  //markup for details component should remain static
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("shows modal when toggle modal is called", () => {
  const c = create(<Details search={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
