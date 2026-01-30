function trickyComparisons() {
  console.log(1 == "1");
  console.log(1 === "1");
  console.log(null == undefined);
  console.log(null === undefined);
  console.log([] == "");
  // console.log([] === "");
  console.log({} == {});
}

trickyComparisons();
