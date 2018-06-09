function shareChocolate(children) {
  if (!Number.isInteger(children) || children <= 0) {
    return null;
  }

  let initialChocolates = [1, 2, 3, 4, 5, 6];
  let chocolatesOnTables = [1, 2, 3, 4, 5, 6,];
  let seated = [0, 0, 0, 0, 0, 0];


  for (let i = 0; i < children; i++) {
    // Find table with most initialChocolates
    let tableWithMostChocolates = chocolatesOnTables.indexOf(Math.max(...chocolatesOnTables));

    // Update seated array
    seated[tableWithMostChocolates]++;

    // Update value of chocolatesOnTables[index]
    chocolatesOnTables[tableWithMostChocolates] = initialChocolates[tableWithMostChocolates] / (seated[tableWithMostChocolates] + 1);
  }
  return seated;
}

shareChocolate(10);
