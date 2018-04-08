import data from "./streets";
import bmh from "./bmh";
import naive from "./naive";
import logger, { formatStreets } from "./helpers";

import indexOf from "./indexOf";

const perf1 = document.getElementById("perf1");
const perf2 = document.getElementById("perf2");
const perf3 = document.getElementById("perf3");

const inputIndexOf = document.getElementById("street1");
const outputIndexOf = document.getElementById("found1");
const inputNaive = document.getElementById("street2");
const outputNaive = document.getElementById("found2");
const inputBmh = document.getElementById("street3");
const outputBmh = document.getElementById("found3");

const getInputText = e => e.target.value;

const handlerIndexOf = (e) => {
  const pattern = getInputText(e);
  if (pattern === "") {
    outputIndexOf.innerHTML = "";
    return;
  }
  const wrapped = logger(indexOf, perf1);
  const streets = wrapped(data, pattern);
  const first10 = streets.sort((a, b) => a[1] - b[1]).slice(0, 10);
  const formated = formatStreets(first10, pattern);
  outputIndexOf.innerHTML = formated;
};

const handlerNaive = (e) => {
  const pattern = getInputText(e);
  if (pattern === "") {
    outputNaive.innerHTML = "";
    return;
  }
  const wrapped = logger(naive, perf2);
  const streets = wrapped(data, pattern);
  const first10 = streets.sort((a, b) => a[1] - b[1]).slice(0, 10);
  const formated = formatStreets(first10, pattern);
  outputNaive.innerHTML = formated;
};

const handlerBmh = (e) => {
  const pattern = getInputText(e);
  if (pattern === "") {
    outputBmh.innerHTML = "";
    return;
  }
  const wrapped = logger(bmh, perf3);
  const streets = wrapped(data, pattern);
  const first10 = streets.sort((a, b) => a[1] - b[1]).slice(0, 10);
  const formated = formatStreets(first10, pattern);
  outputBmh.innerHTML = formated;
};

inputIndexOf.addEventListener("input", handlerIndexOf);
inputNaive.addEventListener("input", handlerNaive);
inputBmh.addEventListener("input", handlerBmh);
