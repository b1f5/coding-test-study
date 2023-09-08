function solution(queries) {
  const descendant = {
    RR: ["RR", "RR", "RR", "RR"],
    Rr: ["RR", "Rr", "Rr", "rr"],
    rr: ["rr", "rr", "rr", "rr"],
  };

  const branchOrders = queries.map((query) => traceBackBranchOrders(query));

  const traits = branchOrders.map((orders) => {
    let trait = "Rr";

    for (const order of orders) {
      trait = descendant[trait][order - 1];
      if (trait === "RR" || trait === "rr") break;
    }

    return trait;
  });

  return traits;
}

function traceBackBranchOrders(leafDescendant) {
  let [generation, order] = leafDescendant;
  const branchOrders = [];

  while (generation !== 1) {
    branchOrders.push(order);
    order = Math.ceil(order / 4);
    generation -= 1;
  }

  return branchOrders.map((order) => order % 4 || 4).reverse();
}
