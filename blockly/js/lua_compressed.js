// Do not edit this file; automatically generated by build.py.
'use strict';


Blockly.Lua=new Blockly.Generator("Lua");Blockly.Lua.addReservedWords("_,__inext,assert,bit,colors,colours,coroutine,disk,dofile,error,fs,fetfenv,getmetatable,gps,help,io,ipairs,keys,loadfile,loadstring,math,native,next,os,paintutils,pairs,parallel,pcall,peripheral,print,printError,rawequal,rawget,rawset,read,rednet,redstone,rs,select,setfenv,setmetatable,sleep,string,table,term,textutils,tonumber,tostring,turtle,type,unpack,vector,write,xpcall,_VERSION,__indext,HTTP,and,break,do,else,elseif,end,false,for,function,if,in,local,nil,not,or,repeat,return,then,true,until,while,add,sub,mul,div,mod,pow,unm,concat,len,eq,lt,le,index,newindex,call,assert,collectgarbage,dofile,error,_G,getmetatable,inpairs,load,loadfile,next,pairs,pcall,print,rawequal,rawget,rawlen,rawset,select,setmetatable,tonumber,tostring,type,_VERSION,xpcall,require,package,string,table,math,bit32,io,file,os,debug");
Blockly.Lua.ORDER_ATOMIC=0;Blockly.Lua.ORDER_HIGH=1;Blockly.Lua.ORDER_EXPONENTIATION=2;Blockly.Lua.ORDER_UNARY=3;Blockly.Lua.ORDER_MULTIPLICATIVE=4;Blockly.Lua.ORDER_ADDITIVE=5;Blockly.Lua.ORDER_CONCATENATION=6;Blockly.Lua.ORDER_RELATIONAL=7;Blockly.Lua.ORDER_AND=8;Blockly.Lua.ORDER_OR=9;Blockly.Lua.ORDER_NONE=99;
Blockly.Lua.init=function(a){Blockly.Lua.definitions_=Object.create(null);Blockly.Lua.functionNames_=Object.create(null);Blockly.Lua.variableDB_?Blockly.Lua.variableDB_.reset():Blockly.Lua.variableDB_=new Blockly.Names(Blockly.Lua.RESERVED_WORDS_);Blockly.Lua.variableDB_.setVariableMap(a.getVariableMap())};
Blockly.Lua.finish=function(a){var b=[],c;for(c in Blockly.Lua.definitions_)b.push(Blockly.Lua.definitions_[c]);delete Blockly.Lua.definitions_;delete Blockly.Lua.functionNames_;Blockly.Lua.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.Lua.scrubNakedValue=function(a){return"local _ = "+a+"\n"};Blockly.Lua.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Lua.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.Lua.COMMENT_WRAP-3))&&(c+=Blockly.Lua.prefixLines(d,"-- ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Lua.allNestedComments(d))&&(c+=Blockly.Lua.prefixLines(d,"-- "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Lua.blockToCode(e);
return c+b+e};Blockly.Lua.colour={};Blockly.Lua.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.colour_random=function(a){return['string.format("#%06x", math.random(0, 2^24 - 1))',Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.colour_rgb=function(a){var b=Blockly.Lua.provideFunction_("colour_rgb",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b)","  r = math.floor(math.min(100, math.max(0, r)) * 2.55 + .5)","  g = math.floor(math.min(100, math.max(0, g)) * 2.55 + .5)","  b = math.floor(math.min(100, math.max(0, b)) * 2.55 + .5)",'  return string.format("#%02x%02x%02x", r, g, b)',"end"]),c=Blockly.Lua.valueToCode(a,"RED",Blockly.Lua.ORDER_NONE)||0,d=Blockly.Lua.valueToCode(a,"GREEN",Blockly.Lua.ORDER_NONE)||
0;a=Blockly.Lua.valueToCode(a,"BLUE",Blockly.Lua.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.colour_blend=function(a){var b=Blockly.Lua.provideFunction_("colour_blend",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(colour1, colour2, ratio)","  local r1 = tonumber(string.sub(colour1, 2, 3), 16)","  local r2 = tonumber(string.sub(colour2, 2, 3), 16)","  local g1 = tonumber(string.sub(colour1, 4, 5), 16)","  local g2 = tonumber(string.sub(colour2, 4, 5), 16)","  local b1 = tonumber(string.sub(colour1, 6, 7), 16)","  local b2 = tonumber(string.sub(colour2, 6, 7), 16)","  local ratio = math.min(1, math.max(0, ratio))",
"  local r = math.floor(r1 * (1 - ratio) + r2 * ratio + .5)","  local g = math.floor(g1 * (1 - ratio) + g2 * ratio + .5)","  local b = math.floor(b1 * (1 - ratio) + b2 * ratio + .5)",'  return string.format("#%02x%02x%02x", r, g, b)',"end"]),c=Blockly.Lua.valueToCode(a,"COLOUR1",Blockly.Lua.ORDER_NONE)||"'#000000'",d=Blockly.Lua.valueToCode(a,"COLOUR2",Blockly.Lua.ORDER_NONE)||"'#000000'";a=Blockly.Lua.valueToCode(a,"RATIO",Blockly.Lua.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.lists={};Blockly.Lua.lists_create_empty=function(a){return["{}",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Lua.valueToCode(a,"ADD"+c,Blockly.Lua.ORDER_NONE)||"None";return["{"+b.join(", ")+"}",Blockly.Lua.ORDER_ATOMIC]};
Blockly.Lua.lists_repeat=function(a){var b=Blockly.Lua.provideFunction_("create_list_repeated",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(item, count)","  local t = {}","  for i = 1, count do","    table.insert(t, item)","  end","  return t","end"]),c=Blockly.Lua.valueToCode(a,"ITEM",Blockly.Lua.ORDER_NONE)||"None";a=Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_NONE)||"0";return[b+"("+c+", "+a+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.lists_length=function(a){return["#"+(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_UNARY)||"{}"),Blockly.Lua.ORDER_UNARY]};Blockly.Lua.lists_isEmpty=function(a){return["#"+(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_UNARY)||"{}")+" == 0",Blockly.Lua.ORDER_RELATIONAL]};
Blockly.Lua.lists_indexOf=function(a){var b=Blockly.Lua.valueToCode(a,"FIND",Blockly.Lua.ORDER_NONE)||"''",c=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"{}";return[("FIRST"==a.getFieldValue("END")?Blockly.Lua.provideFunction_("first_index",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t, elem)","  for k, v in ipairs(t) do","    if v == elem then","      return k","    end","  end","  return 0","end"]):Blockly.Lua.provideFunction_("last_index",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+
"(t, elem)","  for i = #t, 1, -1 do","    if t[i] == elem then","      return i","    end","  end","  return 0","end"]))+"("+c+", "+b+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.lists.getIndex_=function(a,b,c){return"FIRST"==b?"1":"FROM_END"==b?"#"+a+" + 1 - "+c:"LAST"==b?"#"+a:"RANDOM"==b?"math.random(#"+a+")":c};
Blockly.Lua.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_HIGH)||"{}",e=Blockly.Lua.lists.getIndex_;if("LAST"!=c&&"FROM_END"!=c&&"RANDOM"!=c||d.match(/^\w+$/)){f="GET"==b&&"FROM_END"==c?Blockly.Lua.ORDER_ADDITIVE:Blockly.Lua.ORDER_NONE;a=Blockly.Lua.valueToCode(a,"AT",f)||"1";a=e(d,c,a);if("GET"==b)return[d+"["+a+"]",Blockly.Lua.ORDER_HIGH];c="table.remove("+d+", "+a+")";return"GET_REMOVE"==
b?[c,Blockly.Lua.ORDER_HIGH]:c+"\n"}if("REMOVE"==b){var f="FROM_END"==c?Blockly.Lua.ORDER_ADDITIVE:Blockly.Lua.ORDER_NONE;a=Blockly.Lua.valueToCode(a,"AT",f)||"1";b=Blockly.Lua.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE);a=e(b,c,a);return b+" = "+d+"\ntable.remove("+b+", "+a+")\n"}a=Blockly.Lua.valueToCode(a,"AT",Blockly.Lua.ORDER_NONE)||"1";return[("GET"==b?Blockly.Lua.provideFunction_("list_get_"+c.toLowerCase(),["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t"+("FROM_END"==
c||"FROM_START"==c?", at)":")"),"  return t["+e("t",c,"at")+"]","end"]):Blockly.Lua.provideFunction_("list_remove_"+c.toLowerCase(),["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t"+("FROM_END"==c||"FROM_START"==c?", at)":")"),"  return table.remove(t, "+e("t",c,"at")+")","end"]))+"("+d+("FROM_END"==c||"FROM_START"==c?", "+a:"")+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.lists_setIndex=function(a){var b=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_HIGH)||"{}",c=a.getFieldValue("MODE")||"SET",d=a.getFieldValue("WHERE")||"FROM_START",e=Blockly.Lua.valueToCode(a,"AT",Blockly.Lua.ORDER_ADDITIVE)||"1";a=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_NONE)||"None";var f=Blockly.Lua.lists.getIndex_,g="";if(("LAST"==d||"FROM_END"==d||"RANDOM"==d)&&!b.match(/^\w+$/)){var h=Blockly.Lua.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE);
g=h+" = "+b+"\n";b=h}g="SET"==c?g+(b+"["+f(b,d,e)+"] = "+a):g+("table.insert("+b+", "+(f(b,d,e)+("LAST"==d?" + 1":""))+", "+a+")");return g+"\n"};
Blockly.Lua.lists_getSublist=function(a){var b=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"{}",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Lua.valueToCode(a,"AT1",Blockly.Lua.ORDER_NONE)||"1";a=Blockly.Lua.valueToCode(a,"AT2",Blockly.Lua.ORDER_NONE)||"1";var f=Blockly.Lua.lists.getIndex_;return[Blockly.Lua.provideFunction_("list_sublist_"+c.toLowerCase()+"_"+d.toLowerCase(),["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(source"+("FROM_END"==c||"FROM_START"==
c?", at1":"")+("FROM_END"==d||"FROM_START"==d?", at2":"")+")","  local t = {}","  local start = "+f("source",c,"at1"),"  local finish = "+f("source",d,"at2"),"  for i = start, finish do","    table.insert(t, source[i])","  end","  return t","end"])+"("+b+("FROM_END"==c||"FROM_START"==c?", "+e:"")+("FROM_END"==d||"FROM_START"==d?", "+a:"")+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.lists_sort=function(a){var b=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"{}",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");return[Blockly.Lua.provideFunction_("list_sort",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(list, typev, direction)","  local t = {}","  for n,v in pairs(list) do table.insert(t, v) end","  local compareFuncs = {","    NUMERIC = function(a, b)","      return (tonumber(tostring(a)) or 0)","          < (tonumber(tostring(b)) or 0) end,",
"    TEXT = function(a, b)","      return tostring(a) < tostring(b) end,","    IGNORE_CASE = function(a, b)","      return string.lower(tostring(a)) < string.lower(tostring(b)) end","  }","  local compareTemp = compareFuncs[typev]","  local compare = compareTemp","  if direction == -1","  then compare = function(a, b) return compareTemp(b, a) end","  end","  table.sort(t, compare)","  return t","end"])+"("+b+',"'+a+'", '+c+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.lists_split=function(a){var b=Blockly.Lua.valueToCode(a,"INPUT",Blockly.Lua.ORDER_NONE),c=Blockly.Lua.valueToCode(a,"DELIM",Blockly.Lua.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a=Blockly.Lua.provideFunction_("list_string_split",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(input, delim)","  local t = {}","  local pos = 1","  while true do","    next_delim = string.find(input, delim, pos)","    if next_delim == nil then","      table.insert(t, string.sub(input, pos))",
"      break","    else","      table.insert(t, string.sub(input, pos, next_delim-1))","      pos = next_delim + #delim","    end","  end","  return t","end"]);else if("JOIN"==a)b||(b="{}"),a="table.concat";else throw Error("Unknown mode: "+a);return[a+"("+b+", "+c+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.lists_reverse=function(a){a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"{}";Blockly.Lua.provideFunction_("list_reverse",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(input)","  local reversed = {}","  for i = #input, 1, -1 do","    table.insert(reversed, input[i])","  end","  return reversed","end"]);return["list_reverse("+a+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.logic={};Blockly.Lua.controls_if=function(a){var b=0,c="";do{var d=Blockly.Lua.valueToCode(a,"IF"+b,Blockly.Lua.ORDER_NONE)||"false";var e=Blockly.Lua.statementToCode(a,"DO"+b);c+=(0<b?"else":"")+"if "+d+" then\n"+e;++b}while(a.getInput("IF"+b));a.getInput("ELSE")&&(e=Blockly.Lua.statementToCode(a,"ELSE"),c+="else\n"+e);return c+"end\n"};Blockly.Lua.controls_ifelse=Blockly.Lua.controls_if;
Blockly.Lua.logic_compare=function(a){var b={EQ:"==",NEQ:"~=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c=Blockly.Lua.valueToCode(a,"A",Blockly.Lua.ORDER_RELATIONAL)||"0";a=Blockly.Lua.valueToCode(a,"B",Blockly.Lua.ORDER_RELATIONAL)||"0";return[c+" "+b+" "+a,Blockly.Lua.ORDER_RELATIONAL]};
Blockly.Lua.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"and":"or",c="and"==b?Blockly.Lua.ORDER_AND:Blockly.Lua.ORDER_OR,d=Blockly.Lua.valueToCode(a,"A",c);a=Blockly.Lua.valueToCode(a,"B",c);if(d||a){var e="and"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Lua.logic_negate=function(a){return["not "+(Blockly.Lua.valueToCode(a,"BOOL",Blockly.Lua.ORDER_UNARY)||"true"),Blockly.Lua.ORDER_UNARY]};
Blockly.Lua.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.logic_null=function(a){return["nil",Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.logic_ternary=function(a){var b=Blockly.Lua.valueToCode(a,"IF",Blockly.Lua.ORDER_AND)||"false",c=Blockly.Lua.valueToCode(a,"THEN",Blockly.Lua.ORDER_AND)||"nil";a=Blockly.Lua.valueToCode(a,"ELSE",Blockly.Lua.ORDER_OR)||"nil";return[b+" and "+c+" or "+a,Blockly.Lua.ORDER_OR]};Blockly.Lua.loops={};Blockly.Lua.CONTINUE_STATEMENT="goto continue\n";Blockly.Lua.addContinueLabel=function(a){return-1<a.indexOf(Blockly.Lua.CONTINUE_STATEMENT)?a+Blockly.Lua.INDENT+"::continue::\n":a};Blockly.Lua.controls_repeat=function(a){var b=parseInt(a.getFieldValue("TIMES"),10);a=Blockly.Lua.statementToCode(a,"DO")||"";a=Blockly.Lua.addContinueLabel(a);return"for "+Blockly.Lua.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" = 1, "+b+" do\n"+a+"end\n"};
Blockly.Lua.controls_repeat_ext=function(a){var b=Blockly.Lua.valueToCode(a,"TIMES",Blockly.Lua.ORDER_NONE)||"0";b=Blockly.isNumber(b)?parseInt(b,10):"math.floor("+b+")";a=Blockly.Lua.statementToCode(a,"DO")||"\n";a=Blockly.Lua.addContinueLabel(a);return"for "+Blockly.Lua.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" = 1, "+b+" do\n"+a+"end\n"};
Blockly.Lua.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Lua.valueToCode(a,"BOOL",b?Blockly.Lua.ORDER_UNARY:Blockly.Lua.ORDER_NONE)||"false",d=Blockly.Lua.statementToCode(a,"DO")||"\n";d=Blockly.Lua.addLoopTrap(d,a.id);d=Blockly.Lua.addContinueLabel(d);b&&(c="not "+c);return"while "+c+" do\n"+d+"end\n"};
Blockly.Lua.controls_for=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Lua.valueToCode(a,"FROM",Blockly.Lua.ORDER_NONE)||"0",d=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_NONE)||"0",e=Blockly.Lua.valueToCode(a,"BY",Blockly.Lua.ORDER_NONE)||"1",f=Blockly.Lua.statementToCode(a,"DO")||"\n";f=Blockly.Lua.addLoopTrap(f,a.id);f=Blockly.Lua.addContinueLabel(f);a="";if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=
parseFloat(c)<=parseFloat(d);e=Math.abs(parseFloat(e));g=(g?"":"-")+e}else a="",g=Blockly.Lua.variableDB_.getDistinctName(b+"_inc",Blockly.Variables.NAME_TYPE),a+=g+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+"\n"):a+("math.abs("+e+")\n"),a=a+("if ("+c+") > ("+d+") then\n")+(Blockly.Lua.INDENT+g+" = -"+g+"\n"),a+="end\n";return a+("for "+b+" = "+c+", "+d+", "+g)+(" do\n"+f+"end\n")};
Blockly.Lua.controls_forEach=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"{}";a=Blockly.Lua.statementToCode(a,"DO")||"\n";a=Blockly.Lua.addContinueLabel(a);return"for _, "+b+" in ipairs("+c+") do \n"+a+"end\n"};
Blockly.Lua.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break\n";case "CONTINUE":return Blockly.Lua.CONTINUE_STATEMENT}throw Error("Unknown flow statement.");};Blockly.Lua.math={};Blockly.Lua.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));return[a,0>a?Blockly.Lua.ORDER_UNARY:Blockly.Lua.ORDER_ATOMIC]};
Blockly.Lua.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Lua.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Lua.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Lua.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Lua.ORDER_MULTIPLICATIVE],POWER:[" ^ ",Blockly.Lua.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.Lua.valueToCode(a,"A",b)||"0";a=Blockly.Lua.valueToCode(a,"B",b)||"0";return[d+c+a,b]};
Blockly.Lua.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"==b)return a=Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_UNARY)||"0",["-"+a,Blockly.Lua.ORDER_UNARY];if("POW10"==b)return a=Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_EXPONENTIATION)||"0",["10 ^ "+a,Blockly.Lua.ORDER_EXPONENTIATION];a="ROUND"==b?Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_ADDITIVE)||"0":Blockly.Lua.valueToCode(a,"NUM",Blockly.Lua.ORDER_NONE)||"0";switch(b){case "ABS":b="math.abs("+a+")";break;
case "ROOT":b="math.sqrt("+a+")";break;case "LN":b="math.log("+a+")";break;case "LOG10":b="math.log("+a+", 10)";break;case "EXP":b="math.exp("+a+")";break;case "ROUND":b="math.floor("+a+" + .5)";break;case "ROUNDUP":b="math.ceil("+a+")";break;case "ROUNDDOWN":b="math.floor("+a+")";break;case "SIN":b="math.sin(math.rad("+a+"))";break;case "COS":b="math.cos(math.rad("+a+"))";break;case "TAN":b="math.tan(math.rad("+a+"))";break;case "ASIN":b="math.deg(math.asin("+a+"))";break;case "ACOS":b="math.deg(math.acos("+
a+"))";break;case "ATAN":b="math.deg(math.atan("+a+"))";break;default:throw Error("Unknown math operator: "+b);}return[b,Blockly.Lua.ORDER_HIGH]};Blockly.Lua.math_constant=function(a){return{PI:["math.pi",Blockly.Lua.ORDER_HIGH],E:["math.exp(1)",Blockly.Lua.ORDER_HIGH],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",Blockly.Lua.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",Blockly.Lua.ORDER_HIGH],SQRT1_2:["math.sqrt(1 / 2)",Blockly.Lua.ORDER_HIGH],INFINITY:["math.huge",Blockly.Lua.ORDER_HIGH]}[a.getFieldValue("CONSTANT")]};
Blockly.Lua.math_number_property=function(a){var b=Blockly.Lua.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Lua.ORDER_MULTIPLICATIVE)||"0",c=a.getFieldValue("PROPERTY");if("PRIME"==c)return[Blockly.Lua.provideFunction_("math_isPrime",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(n)","  -- https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if n == 2 or n == 3 then","    return true","  end","  -- False if n is NaN, negative, is 1, or not whole.","  -- And false if n is divisible by 2 or 3.",
"  if not(n > 1) or n % 1 ~= 0 or n % 2 == 0 or n % 3 == 0 then","    return false","  end","  -- Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for x = 6, math.sqrt(n) + 1.5, 6 do","    if n % (x - 1) == 0 or n % (x + 1) == 0 then","      return false","    end","  end","  return true","end"])+"("+b+")",Blockly.Lua.ORDER_HIGH];switch(c){case "EVEN":var d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=
b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Lua.valueToCode(a,"DIVISOR",Blockly.Lua.ORDER_MULTIPLICATIVE);if(!a||"0"==a)return["nil",Blockly.Lua.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.Lua.ORDER_RELATIONAL]};Blockly.Lua.math_change=function(a){var b=Blockly.Lua.valueToCode(a,"DELTA",Blockly.Lua.ORDER_ADDITIVE)||"0";a=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = "+a+" + "+b+"\n"};Blockly.Lua.math_round=Blockly.Lua.math_single;
Blockly.Lua.math_trig=Blockly.Lua.math_single;
Blockly.Lua.math_on_list=function(a){function b(){return Blockly.Lua.provideFunction_("math_sum",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)","  local result = 0","  for _, v in ipairs(t) do","    result = result + v","  end","  return result","end"])}var c=a.getFieldValue("OP");a=Blockly.Lua.valueToCode(a,"LIST",Blockly.Lua.ORDER_NONE)||"{}";switch(c){case "SUM":c=b();break;case "MIN":c=Blockly.Lua.provideFunction_("math_min",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)",
"  if #t == 0 then","    return 0","  end","  local result = math.huge","  for _, v in ipairs(t) do","    if v < result then","      result = v","    end","  end","  return result","end"]);break;case "AVERAGE":c=Blockly.Lua.provideFunction_("math_average",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)","  if #t == 0 then","    return 0","  end","  return "+b()+"(t) / #t","end"]);break;case "MAX":c=Blockly.Lua.provideFunction_("math_max",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+
"(t)","  if #t == 0 then","    return 0","  end","  local result = -math.huge","  for _, v in ipairs(t) do","    if v > result then","      result = v","    end","  end","  return result","end"]);break;case "MEDIAN":c=Blockly.Lua.provideFunction_("math_median",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)","  -- Source: http://lua-users.org/wiki/SimpleStats","  if #t == 0 then","    return 0","  end","  local temp={}","  for _, v in ipairs(t) do",'    if type(v) == "number" then',"      table.insert(temp, v)",
"    end","  end","  table.sort(temp)","  if #temp % 2 == 0 then","    return (temp[#temp/2] + temp[(#temp/2)+1]) / 2","  else","    return temp[math.ceil(#temp/2)]","  end","end"]);break;case "MODE":c=Blockly.Lua.provideFunction_("math_modes",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)","  -- Source: http://lua-users.org/wiki/SimpleStats","  local counts={}","  for _, v in ipairs(t) do","    if counts[v] == nil then","      counts[v] = 1","    else","      counts[v] = counts[v] + 1",
"    end","  end","  local biggestCount = 0","  for _, v  in pairs(counts) do","    if v > biggestCount then","      biggestCount = v","    end","  end","  local temp={}","  for k, v in pairs(counts) do","    if v == biggestCount then","      table.insert(temp, k)","    end","  end","  return temp","end"]);break;case "STD_DEV":c=Blockly.Lua.provideFunction_("math_standard_deviation",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)","  local m","  local vm","  local total = 0","  local count = 0",
"  local result","  m = #t == 0 and 0 or "+b()+"(t) / #t","  for _, v in ipairs(t) do","    if type(v) == 'number' then","      vm = v - m","      total = total + (vm * vm)","      count = count + 1","    end","  end","  result = math.sqrt(total / (count-1))","  return result","end"]);break;case "RANDOM":c=Blockly.Lua.provideFunction_("math_random_list",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(t)","  if #t == 0 then","    return nil","  end","  return t[math.random(#t)]","end"]);break;
default:throw Error("Unknown operator: "+c);}return[c+"("+a+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.math_modulo=function(a){var b=Blockly.Lua.valueToCode(a,"DIVIDEND",Blockly.Lua.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Lua.valueToCode(a,"DIVISOR",Blockly.Lua.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Lua.ORDER_MULTIPLICATIVE]};
Blockly.Lua.math_constrain=function(a){var b=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"0",c=Blockly.Lua.valueToCode(a,"LOW",Blockly.Lua.ORDER_NONE)||"-math.huge";a=Blockly.Lua.valueToCode(a,"HIGH",Blockly.Lua.ORDER_NONE)||"math.huge";return["math.min(math.max("+b+", "+c+"), "+a+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.math_random_int=function(a){var b=Blockly.Lua.valueToCode(a,"FROM",Blockly.Lua.ORDER_NONE)||"0";a=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_NONE)||"0";return["math.random("+b+", "+a+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.math_random_float=function(a){return["math.random()",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.procedures={};
Blockly.Lua.procedures_defreturn=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Lua.statementToCode(a,"STACK");if(Blockly.Lua.STATEMENT_PREFIX){var d=a.id.replace(/\$/g,"$$$$");c=Blockly.Lua.prefixLines(Blockly.Lua.STATEMENT_PREFIX.replace(/%1/g,"'"+d+"'"),Blockly.Lua.INDENT)+c}Blockly.Lua.INFINITE_LOOP_TRAP&&(c=Blockly.Lua.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);(d=Blockly.Lua.valueToCode(a,"RETURN",Blockly.Lua.ORDER_NONE)||
"")?d=Blockly.Lua.INDENT+"return "+d+"\n":c||(c="");for(var e=[],f=0;f<a.arguments_.length;f++)e[f]=Blockly.Lua.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE);c="function "+b+"("+e.join(", ")+")\n"+c+d+"end\n";c=Blockly.Lua.scrub_(a,c);Blockly.Lua.definitions_["%"+b]=c;return null};Blockly.Lua.procedures_defnoreturn=Blockly.Lua.procedures_defreturn;
Blockly.Lua.procedures_callreturn=function(a){for(var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Lua.valueToCode(a,"ARG"+d,Blockly.Lua.ORDER_NONE)||"nil";return[b+"("+c.join(", ")+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.procedures_callnoreturn=function(a){for(var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Lua.valueToCode(a,"ARG"+d,Blockly.Lua.ORDER_NONE)||"nil";return b+"("+c.join(", ")+")\n"};
Blockly.Lua.procedures_ifreturn=function(a){var b="if "+(Blockly.Lua.valueToCode(a,"CONDITION",Blockly.Lua.ORDER_NONE)||"false")+" then\n";a.hasReturnValue_?(a=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"nil",b+=Blockly.Lua.INDENT+"return "+a+"\n"):b+=Blockly.Lua.INDENT+"return\n";return b+"end\n"};Blockly.Lua.texts={};Blockly.Lua.text=function(a){return[Blockly.Lua.quote_(a.getFieldValue("TEXT")),Blockly.Lua.ORDER_ATOMIC]};
Blockly.Lua.text_join=function(a){if(0==a.itemCount_)return["''",Blockly.Lua.ORDER_ATOMIC];if(1==a.itemCount_)return["tostring("+(Blockly.Lua.valueToCode(a,"ADD0",Blockly.Lua.ORDER_NONE)||"''")+")",Blockly.Lua.ORDER_HIGH];if(2==a.itemCount_){var b=Blockly.Lua.valueToCode(a,"ADD0",Blockly.Lua.ORDER_CONCATENATION)||"''";a=Blockly.Lua.valueToCode(a,"ADD1",Blockly.Lua.ORDER_CONCATENATION)||"''";return[b+" .. "+a,Blockly.Lua.ORDER_CONCATENATION]}b=[];for(var c=0;c<a.itemCount_;c++)b[c]=Blockly.Lua.valueToCode(a,
"ADD"+c,Blockly.Lua.ORDER_NONE)||"''";a="table.concat({"+b.join(", ")+"})";return[a,Blockly.Lua.ORDER_HIGH]};Blockly.Lua.text_append=function(a){var b=Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_CONCATENATION)||"''";return b+" = "+b+" .. "+a+"\n"};Blockly.Lua.text_length=function(a){return["#"+(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_UNARY)||"''"),Blockly.Lua.ORDER_UNARY]};
Blockly.Lua.text_isEmpty=function(a){return["#"+(Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_UNARY)||"''")+" == 0",Blockly.Lua.ORDER_RELATIONAL]};
Blockly.Lua.text_indexOf=function(a){var b=Blockly.Lua.valueToCode(a,"FIND",Blockly.Lua.ORDER_NONE)||"''",c=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"''";return[("FIRST"==a.getFieldValue("END")?Blockly.Lua.provideFunction_("firstIndexOf",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str, substr) ","  local i = string.find(str, substr, 1, true)","  if i == nil then","    return 0","  else","    return i","  end","end"]):Blockly.Lua.provideFunction_("lastIndexOf",["function "+
Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str, substr)","  local i = string.find(string.reverse(str), string.reverse(substr), 1, true)","  if i then","    return #str + 2 - i - #substr","  end","  return 0","end"]))+"("+c+", "+b+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Lua.valueToCode(a,"AT","FROM_END"==b?Blockly.Lua.ORDER_UNARY:Blockly.Lua.ORDER_NONE)||"1";a=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"''";if("RANDOM"==b)b=Blockly.Lua.provideFunction_("text_random_letter",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str)","  local index = math.random(string.len(str))","  return string.sub(str, index, index)","end"]),a=b+"("+a+")";else{if("FIRST"==
b)c="1";else if("LAST"==b)c="-1";else if("FROM_START"!=b)if("FROM_END"==b)c="-"+c;else throw Error("Unhandled option (text_charAt).");c.match(/^-?\w*$/)?a="string.sub("+a+", "+c+", "+c+")":(b=Blockly.Lua.provideFunction_("text_char_at",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str, index)","  return string.sub(str, index, index)","end"]),a=b+"("+a+", "+c+")")}return[a,Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.text_getSubstring=function(a){var b=Blockly.Lua.valueToCode(a,"STRING",Blockly.Lua.ORDER_NONE)||"''",c=a.getFieldValue("WHERE1"),d=Blockly.Lua.valueToCode(a,"AT1","FROM_END"==c?Blockly.Lua.ORDER_UNARY:Blockly.Lua.ORDER_NONE)||"1";if("FIRST"==c)c=1;else if("FROM_START"==c)c=d;else if("FROM_END"==c)c="-"+d;else throw Error("Unhandled option (text_getSubstring)");d=a.getFieldValue("WHERE2");a=Blockly.Lua.valueToCode(a,"AT2","FROM_END"==d?Blockly.Lua.ORDER_UNARY:Blockly.Lua.ORDER_NONE)||"1";
if("LAST"==d)a=-1;else if("FROM_START"!=d)if("FROM_END"==d)a="-"+a;else throw Error("Unhandled option (text_getSubstring)");return["string.sub("+b+", "+c+", "+a+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.text_changeCase=function(a){var b=a.getFieldValue("CASE");a=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''";if("UPPERCASE"==b)var c="string.upper";else"LOWERCASE"==b?c="string.lower":"TITLECASE"==b&&(c=Blockly.Lua.provideFunction_("text_titlecase",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(str)","  local buf = {}","  local inWord = false","  for i = 1, #str do","    local c = string.sub(str, i, i)","    if inWord then","      table.insert(buf, string.lower(c))",
'      if string.find(c, "%s") then',"        inWord = false","      end","    else","      table.insert(buf, string.upper(c))","      inWord = true","    end","  end","  return table.concat(buf)","end"]));return[c+"("+a+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.text_trim=function(a){var b={LEFT:"^%s*(,-)",RIGHT:"(.-)%s*$",BOTH:"^%s*(.-)%s*$"}[a.getFieldValue("MODE")];return["string.gsub("+(Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''")+', "'+b+'", "%1")',Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.text_print=function(a){return"print("+(Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''")+")\n"};
Blockly.Lua.text_prompt_ext=function(a){var b=a.getField("TEXT")?Blockly.Lua.quote_(a.getFieldValue("TEXT")):Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''";b=Blockly.Lua.provideFunction_("text_prompt",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(msg)","  io.write(msg)","  io.flush()","  return io.read()","end"])+"("+b+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="tonumber("+b+", 10)");return[b,Blockly.Lua.ORDER_HIGH]};Blockly.Lua.text_prompt=Blockly.Lua.text_prompt_ext;
Blockly.Lua.text_count=function(a){var b=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''";a=Blockly.Lua.valueToCode(a,"SUB",Blockly.Lua.ORDER_NONE)||"''";return[Blockly.Lua.provideFunction_("text_count",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle)","  if #needle == 0 then","    return #haystack + 1","  end","  local i = 1","  local count = 0","  while true do","    i = string.find(haystack, needle, i, true)","    if i == nil then","      break","    end","    count = count + 1",
"    i = i + #needle","  end","  return count","end"])+"("+b+", "+a+")",Blockly.Lua.ORDER_HIGH]};
Blockly.Lua.text_replace=function(a){var b=Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_NONE)||"''",c=Blockly.Lua.valueToCode(a,"FROM",Blockly.Lua.ORDER_NONE)||"''";a=Blockly.Lua.valueToCode(a,"TO",Blockly.Lua.ORDER_NONE)||"''";return[Blockly.Lua.provideFunction_("text_replace",["function "+Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle, replacement)","  local buf = {}","  local i = 1","  while i <= #haystack do","    if string.sub(haystack, i, i + #needle - 1) == needle then","      for j = 1, #replacement do",
"        table.insert(buf, string.sub(replacement, j, j))","      end","      i = i + #needle","    else","      table.insert(buf, string.sub(haystack, i, i))","      i = i + 1","    end","  end","  return table.concat(buf)","end"])+"("+b+", "+c+", "+a+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.text_reverse=function(a){return["string.reverse("+(Blockly.Lua.valueToCode(a,"TEXT",Blockly.Lua.ORDER_HIGH)||"''")+")",Blockly.Lua.ORDER_HIGH]};Blockly.Lua.variables={};Blockly.Lua.variables_get=function(a){return[Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Lua.ORDER_ATOMIC]};Blockly.Lua.variables_set=function(a){var b=Blockly.Lua.valueToCode(a,"VALUE",Blockly.Lua.ORDER_NONE)||"0";return Blockly.Lua.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+"\n"};
Blockly.Lua.variablesDynamic={};Blockly.Lua.variables_get_dynamic=Blockly.Lua.variables_get;Blockly.Lua.variables_set_dynamic=Blockly.Lua.variables_set;