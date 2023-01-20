import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import axios from "axios";

afterEach(() => {
  cleanup();
});

test("renders app", async () => {
  render(<App />);

  const linkElement = screen.getByText(/Repo Information/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders input", async () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Search for repo/i);
  expect(inputElement).toBeInTheDocument();
});

test("retrieve data", () => {});
