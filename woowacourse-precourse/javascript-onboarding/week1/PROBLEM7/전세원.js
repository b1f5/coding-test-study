let friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];

let user = "mrko";

let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

function problem7(user, friends, visitors) {
  firendWithUser();
  function firendWithUser() {
    let notFriendTemp = [];
    let friendListTemp = [];
    friends.forEach((element) => {
      if (!element.includes(user)) {
        notFriendTemp.push(...element);
      } else {
        friendListTemp.push(...element);
      }
    });
    //친구인 사람들 리스트에서 빼주기.
    let finalNotFriend = [];
    notFriendTemp.forEach((element) => {
      if (!friendListTemp.includes(element)) {
        finalNotFriend.push(element);
      }
    });
    //set으로 중복 제거한 친구리스트, 친구아닌리스트 만들기
    let friend = [...new Set(friendListTemp)];
    let notFriend = [...new Set(finalNotFriend)];
    console.log(friend);
    console.log(notFriend);
    //점수 더해주기

    console.log(friendScore, notFriendScore);
  }
}
problem7(user, friends, visitors);
