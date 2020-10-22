/**
 * to use this code: import ctysketch from this js file as well as the GI module
 * run ctysketch with the GI module as input along with other start node input
 * e.g.:
 * const ctysketch = require('./ctysketch.js').ctysketch
 * const module = require('gi-module')
 * const result = await ctysketch(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"geojson","value":"''","type":0}
// Parameter: {"name":"geolocation","value":"{}","type":0}


async function ctysketch(__modules__, geojson, geolocation) {

const __debug__ = true;
const __model__ = null;
/** * **/
const PI = Math.PI;
const XY = __modules__._constants.XY;
const YZ = __modules__._constants.YZ;
const ZX = __modules__._constants.ZX;
const YX = __modules__._constants.YX;
const ZY = __modules__._constants.ZY;
const XZ = __modules__._constants.XZ;
const isNum = __modules__._types.isNum;
const isInt = __modules__._types.isInt;
const isFlt = __modules__._types.isFlt;
const isBool = __modules__._types.isBool;
const isStr = __modules__._types.isStr;
const isList = __modules__._types.isList;
const isDict = __modules__._types.isDict;
const isVec2 = __modules__._types.isVec2;
const isVec3 = __modules__._types.isVec3;
const isCol = __modules__._types.isCol;
const isRay = __modules__._types.isRay;
const isPln = __modules__._types.isPln;
const isNaN = __modules__._types.isNaN;
const isNull = __modules__._types.isNull;
const isUndef = __modules__._types.isUndef;
const strRepl = __modules__._strs.strRepl;
const strUpp = __modules__._strs.strUpp;
const strLow = __modules__._strs.strLow;
const strTrim = __modules__._strs.strTrim;
const strTrimR = __modules__._strs.strTrimR;
const strTrimL = __modules__._strs.strTrimL;
const strSub = __modules__._strs.strSub;
const strStarts = __modules__._strs.strStarts;
const strEnds = __modules__._strs.strEnds;
const strPadL = __modules__._strs.strPadL;
const strPadR = __modules__._strs.strPadR;
const isApprox = __modules__._util.isApprox;
const isIn = __modules__._util.isIn;
const isWithin = __modules__._util.isWithin;
const min = __modules__._math.min;
const max = __modules__._math.max;
const pow = Math.pow;
const sqrt = Math.sqrt;
const exp = Math.exp;
const log = Math.log;
const round = __modules__._math.round;
const sigFig = __modules__._math.sigFig;
const ceil = Math.ceil;
const floor = Math.floor;
const abs = Math.abs;
const sin = Math.sin;
const asin = Math.asin;
const sinh = Math.sinh;
const asinh = Math.asinh;
const cos = Math.cos;
const acos = Math.acos;
const cosh = Math.cosh;
const acosh = Math.acosh;
const tan = Math.tan;
const atan = Math.atan;
const tanh = Math.tanh;
const atanh = Math.atanh;
const atan2 = Math.atan2;
const boolean = __modules__._mathjs.boolean;
const number = __modules__._mathjs.number;
const string = __modules__._mathjs.string;
const mad = __modules__._mathjs.mad;
const mean = __modules__._mathjs.mean;
const median = __modules__._mathjs.median;
const mode = __modules__._mathjs.mode;
const prod = __modules__._mathjs.prod;
const std = __modules__._mathjs.std;
const vari = __modules__._mathjs.var;
const sum = __modules__._mathjs.sum;
const hypot = __modules__._mathjs.hypot;
const norm = __modules__._mathjs.norm;
const mod = __modules__._mathjs.mod;
const square = __modules__._mathjs.square;
const cube = __modules__._mathjs.cube;
const remap = __modules__._arithmetic.remap;
const distance = __modules__._geometry.distance;
const distanceM = __modules__._geometry.distanceM;
const distanceMS = __modules__._geometry.distanceMS;
const intersect = __modules__._geometry.intersect;
const project = __modules__._geometry.project;
const range = __modules__._list.range;
const len = __modules__._list.listLen;
const listLen = __modules__._list.listLen;
const listCount = __modules__._list.listCount;
const listCopy = __modules__._list.listCopy;
const listRep = __modules__._list.listRep;
const listLast = __modules__._list.listLast;
const listGet = __modules__._list.listGet;
const listFind = __modules__._list.listFind;
const listHas = __modules__._list.listHas;
const listJoin = __modules__._list.listJoin;
const listFlat = __modules__._list.listFlat;
const listSlice = __modules__._list.listSlice;
const listCull = __modules__._list.listCull;
const listZip = __modules__._list.listZip;
const listZip2 = __modules__._list.listZip2;
const listSort = __modules__._list.listSort;
const listRev = __modules__._list.listRev;
const setMake = __modules__._set.setMake;
const setUni = __modules__._set.setUni;
const setInt = __modules__._set.setInt;
const setDif = __modules__._set.setDif;
const length = __modules__._list.length;
const shuffle = __modules__._list.shuffle;
const concat = __modules__._list.concat;
const zip = __modules__._list.zip;
const zip2 = __modules__._list.zip2;
const vecAdd = __modules__._vec.vecAdd;
const vecSub = __modules__._vec.vecSub;
const vecDiv = __modules__._vec.vecDiv;
const vecMult = __modules__._vec.vecMult;
const vecSum = __modules__._vec.vecSum;
const vecLen = __modules__._vec.vecLen;
const vecSetLen = __modules__._vec.vecSetLen;
const vecNorm = __modules__._vec.vecNorm;
const vecRev = __modules__._vec.vecRev;
const vecFromTo = __modules__._vec.vecFromTo;
const vecAng = __modules__._vec.vecAng;
const vecAng2 = __modules__._vec.vecAng2;
const vecDot = __modules__._vec.vecDot;
const vecCross = __modules__._vec.vecCross;
const vecEqual = __modules__._vec.vecEqual;
const vecLtoG = __modules__._vec.vecLtoG;
const vecGtoL = __modules__._vec.vecGtoL;
const plnMake = __modules__._plane.plnMake;
const plnCopy = __modules__._plane.plnCopy;
const plnMove = __modules__._plane.plnMove;
const plnRot = __modules__._plane.plnRot;
const plnLMove = __modules__._plane.plnLMove;
const plnLRotX = __modules__._plane.plnLRotX;
const plnLRotY = __modules__._plane.plnLRotY;
const plnLRotZ = __modules__._plane.plnLRotZ;
const rayMake = __modules__._ray.rayMake;
const rayCopy = __modules__._ray.rayCopy;
const rayMove = __modules__._ray.rayMove;
const rayRot = __modules__._ray.rayRot;
const rayLMove = __modules__._ray.rayLMove;
const rayFromPln = __modules__._ray.rayFromPln;
const rayLtoG = __modules__._ray.rayLtoG;
const rayGtoL = __modules__._ray.rayGtoL;
const colFalse = __modules__._colors.colFalse;
const colScale = __modules__._colors.colScale;
const radToDeg = __modules__._conversion.radToDeg;
const degToRad = __modules__._conversion.degToRad;
const numToStr = __modules__._conversion.numToStr;
const rand = __modules__._rand.rand;
const randInt = __modules__._rand.randInt;
const randPick = __modules__._rand.randPick;
const setattr = __modules__._model.__setAttrib__;
const getattr = __modules__._model.__getAttrib__;


async function exec_ctysketch(__params__, geojson_, geolocation_){

async function exec_ctysketch_node_oxioodul0w(__params__, geojson_, geolocation_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.attrib.Set(__params__.model, null, 'geolocation',  geolocation_ );

let coll_ = await __modules__.io.Import( __params__.model, geojson_, 'geojson' );

let pgs_ = __modules__.query.Get( __params__.model, 'pg', coll_ );

let extrusions_ = __modules__.make.Extrude( __params__.model, pgs_, rand(50, 100), 1, 'quads' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_ctysketch_node_3mp1h998zz(__params__, geojson_, geolocation_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

return null;
break; }
}

var merged;
let result_exec_ctysketch_node_ldu2rif25o = __params__.model;

__params__.model = result_exec_ctysketch_node_ldu2rif25o;

let result_exec_ctysketch_node_oxioodul0w = await exec_ctysketch_node_oxioodul0w(__params__, geojson_, geolocation_);

__params__.model = result_exec_ctysketch_node_oxioodul0w;

let result_exec_ctysketch_node_3mp1h998zz = await exec_ctysketch_node_3mp1h998zz(__params__, geojson_, geolocation_);

return result_exec_ctysketch_node_3mp1h998zz;
}


function pythonList(x, l){
    if (x < 0) {
        return x + l;
    }
    return x;
}

function mergeInputs(models){
    let result = null;
    if (models.length === 0) {
        result = __modules__._model.__new__();
    } else if (models.length === 1) {
        result = models[0].clone();
    } else {
        result = models[0].clone();
        for (let i = 1; i < models.length; i++) {
            __modules__._model.__merge__(result, models[i]);
        }
    }
    try {
        result.debug = __debug__;
    } catch (ex) {}
    return result;
}
function duplicateModel(model){
    const result = model.clone();
    try {
        result.debug = __debug__;
    } catch (ex) {}
    return result;
}

function printFunc(_console, name, value){
    let val;
    let padding_style = 'padding: 2px 0px 2px 10px;';
    if (!value) {
        val = value;
    } else if (value === '__null__') {
        _console.push('<p style="' + padding_style + '"><b><i>_ ' + name + '</i></b></p>');
        return value;
    } else if (typeof value === 'number' || value === undefined) {
        val = value;
    } else if (typeof value === 'string') {
        val = '"' + value.replace(/\n/g, '<br>') + '"';
    } else if (value.constructor === [].constructor) {
        let __list_check__ = false;
        let __value_strings__ = [];
        for (const __item__ of value) {
            if (!__item__) {
                __value_strings__.push('' + __item__);
                continue;
            }
            if (__item__.constructor === [].constructor || __item__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push(JSON.stringify(__item__).replace(/,/g, ', '));
        }
        if (__list_check__) {
            padding_style = 'padding: 2px 0px 0px 10px;';
            val = '[<p style="padding: 0px 0px 2px 40px;">' +
                  __value_strings__.join(',</p><p style="padding: 0px 0px 2px 40px;">') +
                  '</p><p style="padding: 0px 0px 2px 30px;">]</p>';
        } else {
            val = '[' + __value_strings__.join(', ') + ']';
        }
    } else if (value.constructor === {}.constructor) {
        let __list_check__ = false;
        let __value_strings__ = [];
        for (const __item__ in value) {
            const __value__ = value[__item__];
            if (!__value__) {
                __value_strings__.push('\<b>"' + __item__ + '\"</b>' + ': ' + __value__);
                continue;
            }
            if (__value__.constructor === [].constructor || __value__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push('\<b>"' + __item__ + '\"</b>' + ': ' + JSON.stringify(__value__).replace(/,/g, ', '));
        }
        if (__list_check__) {
            padding_style = 'padding: 2px 0px 0px 10px;';
            val = '{<p style="padding: 0px 0px 2px 40px;">' +
                  __value_strings__.join(',</p><p style="padding: 0px 0px 2px 40px;">') +
                  '</p><p style="padding: 0px 0px 2px 30px;">}</p>';
        } else {
            val = '{' + __value_strings__.join(', ') + '}';
        }
    } else {
        val = value;
    }
    _console.push('<p style="' + padding_style + '"><b><i>_ ' + name+'</i></b>  = ' + val + '</p>');
    return val;
}


const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = await exec_ctysketch(__params__, geojson, geolocation);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

module.exports = ctysketch;
