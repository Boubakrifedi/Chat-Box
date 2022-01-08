const boolColor = (from) => {
  switch (from) {
    case "me":
      return "blue";

    case "you":
      return "green";

    default:
      return "";
  }
};

export { boolColor };
