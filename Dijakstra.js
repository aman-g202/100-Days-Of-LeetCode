/* minimum amount needed to exchange items to get A behalf of D */

/**
 * @param {{[key: string]: number | null}} costs
 * @param {{[key: string]: boolean}} visitedNode
 * @description Find the minimum cost node in graph which is not visited
 * @returns string
 */
function findMinimumCostNode(costs, visitedNode) {
  let node = null;
  let minimum = Number.NEGATIVE_INFINITY;
  for (const key in costs) {
    if (Object.hasOwnProperty.call(costs, key)) {
      if (!visitedNode[key] && costs[key] > minimum) {
        minimum = costs[key];
        node = key;
      }
    }
  }
  return node;
}

/**
 * @param {string} exchangeItem - Node name
 */
function dijakstra(exchangeItem) {
  const rootItem = "A";

  /* Difined constants considering source as A */
  const graph = {
    A: { B: 3, C: 2 },
    B: { C: 4, D: 1 },
    C: { D: 3 },
    D: null,
  };

  const costs = {
    A: null,
    B: 3,
    C: 2,
    D: null,
  };

  const parent = {
    A: null,
    B: "A",
    C: "A",
    D: null,
  };
  const visitedNodes = { [rootItem]: 1 };

  let node = findMinimumCostNode(costs, visitedNodes);
  while (node !== null) {
    const directedNodes = graph[node];
    const cost = costs[node];
    if (directedNodes) {
      Object.keys(directedNodes).forEach((key) => {
        const newCosts = cost + directedNodes[key];
        if (!costs[key] || newCosts < costs[key]) {
          costs[key] = newCosts;
          parent[key] = node;
        }
      });
    }
    visitedNodes[node] = 1;
    node = findMinimumCostNode(costs, visitedNodes);
  }

  /* Logging process begins */
  console.log(
    `Minimum costs to get item ${exchangeItem} for exchange of ${rootItem} is - ${costs[exchangeItem]}`
  );
  let pathToFollow = exchangeItem;
  let root = parent[exchangeItem];
  while (root) {
    pathToFollow = root + " --> " + pathToFollow;
    root = parent[root];
  }

  console.log("Path to follow as: ", pathToFollow);
  /* Logging process ends */
}

dijakstra("D");
dijakstra("B");
dijakstra("C");
