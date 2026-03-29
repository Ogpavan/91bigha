const SNAPSHOT_ROOT = require("node:path").join(process.cwd(), "src", "template-snapshots");

function absolutizeTemplatePath(target) {
  if (/^(https?:|mailto:|tel:|#|javascript:|\/)/i.test(target)) {
    return target;
  }

  if (target.startsWith("assets/")) {
    return `/${target}`;
  }

  return `/${target}`;
}

function normalizeTemplateMarkup(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;

  body = body.replace(
    /<script[^>]*>\s*document\.write\(new Date\(\)\.getFullYear\(\)\)\s*<\/script>/gi,
    String(new Date().getFullYear())
  );

  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  body = body.replace(/Dreams Estate/g, "91bigha.com");
  body = body.replace(/Dream Estate/g, "91bigha.com");
  body = body.replace(/src=(["'])assets\//gi, 'src=$1/assets/');
  body = body.replace(/href=(["'])assets\//gi, 'href=$1/assets/');
  body = body.replace(/(href|action)=(["'])index\.html\2/gi, `$1=$2/$2`);
  body = body.replace(/(href|action)=(["'])buy-details\.html\2/gi, `$1=$2/buy-details$2`);
  body = body.replace(/(href|action)=(["'])buy-property-grid-sidebar\.html\2/gi, `$1=$2/buy-property-grid-sidebar$2`);
  body = body.replace(
    /(href|action|src)=(["'])((?!https?:|mailto:|tel:|#|javascript:|\/)[^"']+)\2/gi,
    (_, attr, quote, target) => `${attr}=${quote}${absolutizeTemplatePath(target)}${quote}`
  );

  return body;
}

module.exports = { SNAPSHOT_ROOT, normalizeTemplateMarkup };
