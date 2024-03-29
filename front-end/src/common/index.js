export const formatMoney = (n, c, d, t) => {
  c = c == undefined ? 2 : d;
  var c = isNaN(c = Math.abs(c)) ? 3 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

export const getParams = (props) => {
  const {match} = props;
  if (match && match.params) {
    return match.params;
  }
  return {};
};
