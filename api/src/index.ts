const path: any = require("path");
global.PATH = path.resolve(__dirname);
global.CONFIG = require(`${global.PATH}/config/defaultConfig`);

global.LIBRARY = require(`${global.PATH}/helper/library`);
global.HELPER = require(`${global.PATH}/helper/helper`);
global.RESPONSE = require(`${global.PATH}/helper/response`);

global.MODEL = require(`${global.PATH}/models`);
global.DAO = require(`${global.PATH}/dao`);

const app: any = global.LIBRARY.express();
const router: any = global.LIBRARY.express();

global.LIBRARY.mongoose.connect(
  global.LIBRARY.process.env.MONGODB_URI || global.CONFIG.db,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use(global.LIBRARY.bodyParser.json());

app.use((req: any, res: any, next: any) => {
  let origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", whiteList(origin));
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept, Authorization, Proxy-Authorization, X-session, Pragma, Cache-control, Expires,*"
  );
  res.header(
    "Access-Control-Expose-Headers",
    "accessToken, Content-Disposition"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
  res.header("X-XSS-Protection", "1");
  res.header("X-Content-Type-Options", "nosniff");
  res.header(
    "Content-Security-Policy",
    "object-src 'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self';style-src 'self'"
  );
  res.header("Content-Type", "application/json");

  global.HELPER.logging(
    "======================================================"
  );
  global.HELPER.logging("incomming origin :" + origin);
  global.HELPER.logging("incoming request host : " + req.headers.host);
  global.HELPER.logging("Incoming request method : " + req.method);
  global.HELPER.logging("Incoming request path : " + req.path);

  res.json = function (param: any) {
    let data: any = param;
    if (data != undefined) {
      if (typeof data != "object") {
        global.HELPER.logging("ERROR TYPE OBJECT");
      }
      data = JSON.stringify(data);
    }
    res.send.call(this, data);
  };

  if (
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE"
  ) {
    if (req.body !== undefined) {
      let jsonBody: any = JSON.parse(JSON.stringify(req.body));
      req.body = jsonBody;
    }
    global.HELPER.logging("Body : " + JSON.stringify(req.body));
  }

  next();
});

app.use("/pi/", router);
require("./routes")(router);

app.listen(parseInt(global.CONFIG.port), function () {
  let host = this.address().address;
  let port = this.address().port;
  global.HELPER.logging(`Listening at http://${host}:${port}`);
});

//#region Function
let whiteList = (origin: string) => {
  let whitelist = global.CONFIG.whitelist_domain;
  for (let item in whitelist) {
    if (origin == whitelist[item]) {
      return origin;
    }
  }
  if (whitelist.length == 0) return null;
  else return whitelist[0];
};
//#endregion
