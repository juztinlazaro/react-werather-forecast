import { Observable } from 'rxjs';
import * as TYPES from './types';
import { jsonplacehoder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';
import * as ACTION from './blog.action';

const getBlogUrl = `${jsonplacehoder}/posts`;
export const getBlogEpic = action$ =>
  action$.ofType(TYPES.GET_BLOG_EPIC)
   .switchMap(() => {
      const loading = Observable.of(ACTION.getBlogLoading());

     const request = Observable.ajax(getBlogUrl, headers).delay(5000)
        .takeUntil(action$.ofType(TYPES.GET_BLOG_CANCEL))
        .map(result => {
          return ACTION.getBlogSuccess(result.response)
        })
        .catch(error => {
          return Observable.of(ACTION.getBlogError(error))
        })
      ;
      
      return Observable.concat(
        loading,
        request,
      )
   })