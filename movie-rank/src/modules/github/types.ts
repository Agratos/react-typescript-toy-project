import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IGithubProfile } from 'src/apis/github/types';

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: IGithubProfile | null;
  };
};