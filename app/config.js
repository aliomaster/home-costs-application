module.exports = {
  sitename: "Products Catalog",
  modules: {
    front:    { mountpath: "/" },
    admin:  { mountpath: "/admin" }
  },
  "db": {
    "url": "mongodb://localhost/costs-catalog"
  },
  cookieSecret: '1s2df1sd35f65sd46f46ds',
  sessionSecret: 'klksdlfdss2df21sd1f5sd6',
  modelsPath: './models'
};
