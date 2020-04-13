/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.articleList = [];
  // 保证用户唯一
  this.user = new Map();
  // 清空用户关注列表
  this.tfUser = function (userId) {
    if (!this.user.has(userId)) {
      this.user.set(userId, []);
    }
  }
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  // 发布推特在 数组列表的前面
  this.articleList.unshift([userId, tweetId]);
  this.tfUser(userId);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. 
 * Each item in the news feed must be posted 
 * by users who the user followed or by the user herself. 
 * Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  this.tfUser(userId);

  let arr = this.user.get(userId);
  arr.push(userId);
  let res = [];
  this.articleList.forEach((values) => {
    if(arr.includes(values[0])) {
      res.push(values[1]);
    }
  })
  if(res.length > 10) res = res.slice(0,10);
  return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  this.tfUser(followerId);
  this.user.get(followerId).push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.tfUser(followerId);
  let index = this.user.get(followerId).indexOf(followeeId);
  // indexOf 判断的时候不能使用 > 0 有可能 index 等于 0
  if (index >= 0) {
    this.user.get(followerId).splice(index, 1);
  }
};


// ["Twitter","postTweet","getNewsFeed","follow","getNewsFeed","unfollow","getNewsFeed"]
// [[],[1,1],[1],[2,1],[2],[2,1],[2]]
