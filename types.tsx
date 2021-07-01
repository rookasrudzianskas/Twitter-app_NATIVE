/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewTweet: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
}

export type TweetType = {
  id: string,
  createdAt: string,
  content: string,
  user: UserType,
  image?: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
};
