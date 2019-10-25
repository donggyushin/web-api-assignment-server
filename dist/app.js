"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var API_1 = __importDefault(require("./API"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.json());
// As we are developing an API that will serve data for any kind of 
// client-side applications, we need to enable the CORS’s middleware 
// for the endpoints become public. Meaning that some clients can 
// make requests on our API.
app.use(cors_1.default());
// we are going to set up our application to report and generate logs files 
// about the user’s requests. To do this let’s use the module morgan which is 
// a middleware for generating request’s logs in the server.
app.use(morgan_1.default("common"));
// To make requests lighter and load faster, let’s enable another middleware 
// which is going to be responsible for compacting the JSON responses and 
// also the static files which your application will serve to GZIP format, 
// a compatible format to several browsers.
app.use(compression_1.default());
// Finishing the development of our API, let’s include a very important module, 
// which is a security middleware that handles several kinds of attacks in the 
// HTTP/HTTPS protocols. This module is called helmet which is a set of nine internal 
// middlewares, responsible to treat the following HTTP settings:
// Configures the Content Security Policy;
// Removes the header X-Powered-By that informs the name and the version of a server;
// Configures rules for HTTP Public Key Pinning;
// Configures rules for HTTP Strict Transport Security;
// Treats the header X-Download-Options for Internet Explorer 8+;
// Disables the client-side caching;
// Prevents sniffing attacks on the client Mime Type;
// Prevents ClickJacking attacks;
// Protects against XSS (Cross-Site Scripting) attacks.
app.use(helmet_1.default());
app.use('/api', API_1.default);
exports.default = app;
