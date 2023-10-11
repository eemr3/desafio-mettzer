import { getPayload, isTokenExpired } from '../common/auth';
import { parseCookies } from '../common/cookies';

export function withAuthServerSideProps(handler: any) {
  return async (context: any) => {
    const { req, res } = context;
    const cookies = parseCookies(req);

    if (!cookies.access_token || isTokenExpired(cookies.access_token)) {
      return {
        redirect: {
          permanet: false,
          destination: '/login',
        },
      };
    }

    const payload = getPayload(cookies.access_token);

    const result = await handler(context, cookies, payload);

    if ('props' in result) {
      result.props = {
        payload,
        ...result.props,
      };
    }
    return result;
  };
}
