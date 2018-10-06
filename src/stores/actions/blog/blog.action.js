import { createAction } from 'redux-actions'
import * as TYPES from './types';

export const getBlogEpic = createAction(TYPES.GET_BLOG_EPIC);
export const getBlogLoading = createAction(TYPES.GET_BLOG_LOADING);
export const getBlogSuccess = createAction(TYPES.GET_BLOG_SUCCESS);
export const getBlogError = createAction(TYPES.GET_BLOG_ERROR);
export const getBlogCancel = createAction(TYPES.GET_BLOG_CANCEL);