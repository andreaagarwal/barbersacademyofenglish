// Canonical host + HTTPS: send http:// and www. to https://barbersacademyofenglish.com
const CANONICAL_HOST = "barbersacademyofenglish.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === "http:" || url.hostname === "www." + CANONICAL_HOST) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
