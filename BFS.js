const Queue = require("./queue");

/**
 * @param {string} name
 * @returns boolean
 */
function isCoder(name) {
  return name === "H";
}

/**
 * @param {number[]} friends
 * @param {Queue} queue
 * @param {{[key: string]: boolean}} visitedFriend
 * @param {number} level 
 * @description Push connected friends in queue if not already visited that he/she is coder
 * @returns void
 */
function pushFriendsInQueue(friends, queue, visitedFriend, level) {
  friends.forEach((friend) => {
    if (!visitedFriend[friend]) {
      queue.enqueue({ name: friend, level });
    }
  });
}

/**
 * @description lets find a nearest coder from a group of friends as i want to build a website following MACH alliance
 */
function BFS() {
  const graphMap = {
    A: ["B", "C", "D"],
    B: ["G"],
    C: ["E", "F"],
    D: ["H", "I"],
    G: null,
    E: ["C", "G"],
    F: null,
    H: null,
    I: null,
  };
  const visitedNode = { A: 1 };
  const rootNode = "A";
  const queue = new Queue();
  let foundCoderFriend = null;
  let friend;

  pushFriendsInQueue(graphMap[rootNode], queue, visitedNode, 1);

  while ((friend = queue.dequeue())) {
    if (isCoder(friend.name)) {
      foundCoderFriend = friend;
      break;
    }
    visitedNode[friend.name] = 1;
    if (graphMap[friend.name]) {
      pushFriendsInQueue(graphMap[friend.name], queue, visitedNode, ++friend.level);
    }
  }

  if (foundCoderFriend) {
    console.log("Friend is found - ", foundCoderFriend);
  } else {
    console.info("No known friend or friend of friend is coder.");
  }
}

BFS();
