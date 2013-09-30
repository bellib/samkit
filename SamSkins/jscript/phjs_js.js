/***************************************************************************
 *    This program is free software; you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation; either version 2 of the License, or
 *    (at your option) any later version.
 *
 *    Project: PHP TO JavaScript 0.2 Beta 1
 *    Author: Bilal El Moussaoui <bil-elmoussaoui@live.fr> - <bil.elmoussaoui@gmail.com>
 *    Compatiable : All Browsers
 *    Don't Remove This Copyright Message
 *    Number of Func : 96
 **************************************************************************/
/*jslint evil: true */

function str_replace(search, replace, subject) {
	var subjectArray = subject.constructor === Array || subject.constructor === Object, 
	k;
	if (subjectArray) {
		for (k in subject) {
			if (subject.hasOwnProperty(k)) {
				while (subject[k].indexOf(search) > -1) {
					subject[k] = subject[k].replace(search, replace);
				}
			}
		}
	} else {
		while (subject.indexOf(search) > -1) {
			subject = subject.replace(search, replace);
		}
	}
	return subject;
}

function substr($string, start, length) {
	var Str = $string.toString();
	return Str.substr(start, length);
}

function strlen($string) {
	var Str = $string.toString();
	return Str.length;
}

function strtoupper($string) {
	var Str = $string.toString();
	return Str.toUpperCase();
}

function strtolower($string) {
	var Str = $string.toString();
	return Str.toLowerCase();
}

function ucfirst($string) {
	var Str = strtoupper(substr($string, 0, 1)) + substr($string, 1, strlen($string));
	return Str;
}

function lcfirst($string) {
	var Str = strtolower(substr($string, 0, 1)) + substr($string, 1, strlen($string));
	return Str;
}

function gettype($var) {
	if ($var === undefined) {
		return 'undefined';
	}
	if ($var === null) {
		return 'null';
	}
	return strtolower(Object.prototype.toString.call($var).split(' ').pop().split(']').shift());
}

function addslashes(str) {
	return(str).replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function stripslashes(str) {
	return(str).replace(/\\(.?)/g, function (s, n1) {
			switch (n1) {
			case '\\': 
				return '\\';
			case '0': 
				return '\u0000';
			case '': 
				return '';
			default: 
				return n1;
			}
		});
}

function explode(delimiter, str) {
	return str.split(delimiter);
}

function implode(glue, pieces) {
	return pieces.join(glue);
}

function print_r(expression) {
	if (expression.constructor === Array || expression.constructor === Object) {
		document.write("<ul>");
		var p;
		for (p in expression) {
			if (expression.hasOwnProperty(p)) {
				if (expression[p].constructor === Array || expression[p].constructor === Object) {
					document.write("<li>[" + p + "] => " + typeof(expression) + "</li>");
					document.write("<ul>");
					print_r(expression[p]);
					document.write("</ul>");
				} else {
					document.write("<li>[" + p + "] => " + expression[p] + "</li>");
				}
			}
		}
		document.write("</ul>");
	}
}

function setcookie(name, value, expire, path) {
	var expires = '';
	if (expire !== undefined && expire !== 0) {
		var date = new Date();
		if (expire < 0) {
			date.setTime(0);
		} else {
			date.setTime(date.getTime() + Math.ceil(expire * 86400 * 1000));
		}
		expires = '; expires=' + date.toGMTString();
	}
	path = path || '/';
	document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=' + path;
}

function chr(ascii) {
	return String.fromCharCode(ascii);
}

function ord(str) {
	return String.charCodeAt(str);
}

function urlencode(str) {
	return encodeURIComponent(str);
}

function urldecode(str) {
	return decodeURIComponent(str);
}

function sqrt(arg) {
	return Math.sqrt(arg);
}

function abs(number) {
	if (!Math.abs(number)) {
		return 0;
	} else {
		return Math.abs(number);
	}
}

function acos(arg) {
	return Math.acos(arg);
}

function asin(arg) {
	return Math.asin(arg);
}

function atan(arg) {
	return Math.atan(arg);
}

function atan2(y, x) {
	return Math.atan2(y, x);
}

function ceil(value) {
	return Math.ceil(value);
}

function cos(arg) {
	return Math.cos(arg);
}

function exp(arg) {
	return Math.exp(arg);
}

function floor(value) {
	return Math.floor(value);
}

function log(arg) {
	return Math.log(arg);
}

function tan(arg) {
	return Math.tan(arg);
}

function sin(arg) {
	return Math.sin(arg);
}

function round(arg) {
	return Math.round(arg);
}

function pow(base, exp) {
	return Math.pow(base, exp);
}

function is_numeric($var) {
	return!isNaN(parseFloat($var)) && isFinite($var);
}

function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

function ltrim(str) {
	return str.replace(/^\s+/, "");
}

function rtrim(str) {
	return str.replace(/\s+$/, "");
}

function chop(str) {
	return rtrim(str);
}

function rad2deg(arg) {
	return((arg / Math.PI) * 180);
}

function pi() {
	return Math.PI;
}

function rand(min, max) {
	var args = arguments.length;
	if (args === 0) {
		min = 0;
		max = 2147483647;
	} else if (args === 1) {
		throw new Error('Warning : rand() exepets to parametrs , 1 given');
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mt_rand(min, max) {
	var args = arguments.length;
	if (args === 0) {
		min = 0;
		max = 2147483647;
	} else if (args === 1) {
		throw new Error('Warning : mt_rand() exepets to parametrs , 1 given');
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function join(glue, pieces) {
	return implode(glue, pieces);
}

function function_exists(function_name) {
	if (typeof function_name === 'string') {
		return(typeof this.window[function_name] === 'function');
	} else {
		return(function_name instanceof Function);
	}
}

function func_get_args() {
	return arguments.callee.caller.arguments;
}

function func_num_args() {
	return arguments.callee.caller.arguments.length;
}

function func_get_arg(arg_num) {
	if (arg_num > arguments.callee.caller.arguments.length) {
		return false;
	}
	var args = arguments.callee.caller.arguments[arg_num];
	return args;
}

function strrpos(haystack, needle, offset) {
	if (!is_numeric(offset)) {
		offset = 0;
	}
	return haystack.indexOf(needle, offset);
}

function array_pop(array) {
	var i, 
	nwArray = [], 
	count = array.length;
	for (i = 0; i < count - 1; i++) {
		nwArray[i] = array[i];
	}
	return nwArray;
}

function shuffle(array) {
	var j = 0, 
	valI = '', 
	valJ = valI, 
	l = array.length - 1;
	while (l > -1) {
		j = Math.floor(Math.random() * l);
		valI = array[l];
		valJ = array[j];
		array[l] = valJ;
		array[j] = valI;
		l = l - 1;
	}
	return array;
}

function in_array(needle, haystack) {
	var key;
	for (key in haystack) {
		if (haystack.hasOwnProperty(key)) {
			if (haystack[key] === needle) {
				return true;
			}
		}
	}
	return false;
}

function array_push(array, $var) {
	var args = arguments.length, 
	count = array.length, 
	i;
	if (args === 2) {
		array[count] = $var;
	} else if (args > 2) {
		garg = func_get_args();
		for (i = 1; i < args; i++) {
			array[count + i] = garg[i];
		}
	}
	return array;
}

function array_shift(array) {
	var count = array.length, 
	i, 
	newArray = [];
	for (i = 1; i < count; i++) {
		newArray[i] = array[i];
	}
	return newArray;
}

function array_sum(array) {
	var key, 
	sum = 0;
	for (key in array) {
		if (array.hasOwnProperty(key)) {
			sum = sum + (array[key]);
		}
	}
	return sum;
}

function array_slice(array, offset, length) {
	return array.slice(offset, length);
}

function array_merge(array1) {
	var len = arguments.length, 
	newArray = [], 
	garg;
	if (len === 1) {
		throw new Error('array_merge exepts 2 parametrs or more , 1 given');
	} else if (len === 2) {
		return array1.concat(arguments[1]);
	} else {
		garg = func_get_args();
		newArray = newArray.concat(array1);
		for (i = 1; i < len; i++) {
			newArray = newArray.concat(garg[i]);
		}
		return newArray;
	}
}

function array_reverse(array) {
	return array.reverse();
}

function create_function(args, code) {
	return Function.apply(null, args.split(',').concat(code));
}

function array_change_key_case(array, $case) {
	var p, 
	newArray = [];
	$case = strtoupper($case);
	if ($case !== 'CASE_LOWER' && $case !== 'CASE_UPPER') {
		throw new Error('array_change_key_case() , parameter 2 value error , given : ' + $case);
	} else {
		for (p in array) {
			if (array.hasOwnProperty(p)) {
				if ($case === 'CASE_UPPER') {
					newArray[strtoupper(p)] = array[p];
				} else {
					newArray[strtolower(p)] = array[p];
				}
			}
		}
		return newArray;
	}
}

function array_combine(keys, values) {
	var nArray = [], 
	i = 0, 
	k;
	for (k in keys) {
		if (keys.hasOwnProperty(k)) {
			nArray[keys[i]] = values[i];
			i++;
		}
	}
	return nArray;
}

function array_fill_keys(keys, value) {
	var newArray = [], 
	k;
	for (k in keys) {
		if (keys.hasOwnProperty(k)) {
			newArray[keys[k]] = value;
		}
	}
	return newArray;
}

function array_fill(start_index, num, value) {
	var newArray = [], 
	i = 0;
	while (i < num) {
		if (start_index < 0) {
			newArray[start_index] = value;
			start_index = 0;
		} else {
			newArray[start_index++] = value;
		}
		i++;
	}
	return newArray;
}

function array_flip(trans) {
	var newArray = [], 
	k;
	for (k in trans) {
		if (trans.hasOwnProperty(k)) {
			newArray[trans[k]] = k;
		}
	}
	return newArray;
}

function array_key_exists(key, array) {
	var k;
	for (k in array) {
		if (array.hasOwnProperty(k)) {
			if (k === key) {
				return true;
			}
		}
	}
	return false;
}

function array_keys(input, search_value, strict) {
	var newArray = [], 
	k, 
	i = 0, 
	args = arguments.length;
	for (k in input) {
		if (input.hasOwnProperty(k)) {
			if (args === 1) {
				newArray[i] = k;
			} else if (args === 2) {
				if (k == search_value) {
					newArray[i] = k;
				}
			} else if (args === 3) {
				if (k === search_value) {
					newArray[i] = k;
				}
			}
			i++;
		}
	}
	return newArray;
}

function array_pad(input, pad_size, pad_value) {
	var count = input.length;
	for (i = count; i < pad_size; i++) {
		input[i] = pad_value;
	}
	return input;
}

function array_product(array) {
	var pro = 1, 
	key;
	for (key in array) {
		if (array.hasOwnProperty(key)) {
			pro = pro * (array[key]);
		}
	}
	return pro;
}

function array_unshift(array) {
	var args = arguments.length;
	while (((args--) - 1) !== 0) {
		array.unshift(arguments[args]);
	}
	return array;
}

function array_values(array) {
	var k, 
	NewArray = [], 
	i = 0;
	for (k in array) {
		if (array.hasOwnProperty(k)) {
			NewArray[i++] = array[k];
		}
	}
	return NewArray;
}

function count(mixed_var, mode) {
	var p, 
	cn = 0;
	if (mixed_var === null) {
		return "0";
	} else if (mixed_var === false) {
		return "1";
	} else {
		
		for (p in mixed_var) {
			if (mixed_var.hasOwnProperty(p)) {
				if (mixed_var[p].constructor === Array || mixed_var[p].constructor === Object) {
					if (mode === 'COUNT_RECURSIVE' || mode == 1) {
						cn += 1 + mixed_var[p].length;
					} else {
						cn += 1;
					}
				} else {
					cn += 1;
				}
			}
		}
		return cn;
	}
}

function nl2br(string, is_xhtml) {
	var replaceWith;
	if (is_xhtml === true) {
		replaceWith = '<br />';
	} else {
		replaceWith = '<br>';
	}
	return string.replace(/(\n|\r|\r\n|\n\r)/g, replaceWith);
}

function strstr(haystack, needle, before_needle) {
	index = haystack.indexOf(needle);
	if (before_needle === true) {
		return substr(haystack, 0, index);
	} else {
		return substr(haystack, index, strlen(haystack));
	}
}

function stristr(haystack, needle, before_needle) {
	var index = haystack.toLowerCase().indexOf(needle.toLowerCase());
	if (before_needle === true) {
		return substr(haystack, 0, index);
	} else {
		return substr(haystack, index, strlen(haystack));
	}
}

function strpos(haystack, needle, offset) {
	if (offset !== 0) {
		return substr(haystack, offset, strlen(haystack)).indexOf(needle);
	} else {
		return haystack.indexOf(needle);
	}
}

function stripos(haystack, needle, offset) {
	haystack = strtolower(haystack);
	needle = strtolower(needle);
	if (offset !== 0) {
		return substr(haystack, offset, strlen(haystack)).indexOf(needle);
	} else {
		return haystack.indexOf(needle);
	}
}

function strrev(string) {
	return string.split('').reverse().join('');
}

function quotemeta(str) {
	return str.replace(/(\.|\^|\$|\(|\)|\[|\]|\*|\+|\?|\\)/g, '\\$1');
}

function str_repeat(input, multiplier) {
	var chaine = "", 
	i;
	if (multiplier > 1) {
		for (i = 0; i < multiplier; i++) {
			chaine += input;
		}
	} else {
		chaine = input;
	}
	return chaine;
}

function strtok(str, token) {
	return str.substr(str.indexOf(token) + token.length, str.length);
}

function ucwords(str) {
	var chaine = str.split(' '), 
	result = [], 
	countChaine = count(chaine);
	for (i = 0; i < countChaine; i++) {
		result[i] = ucfirst(trim(chaine[i]));
	}
	return result.join(' ');
}

function array_search(needle, haystack, strict) {
	var k;
	for (k in haystack) {
		if (haystack.hasOwnProperty(k)) {
			if ((haystack[k] === needle && strict === true) || ((strict === false || arguments.length === 2) && haystack[k] === needle)) {
				return k;
			}
		}
	}
	return false;
}

function is_array(array) {
	if (array.constructor === Array) {
		return true;
	}
	return false;
}

function is_object(obj) {
	if (obj.constructor === Object) {
		return true;
	}
	return false;
}

function is_int($int) {
	if (is_numeric($int) === true) {
		if (!($int % 1) === false) {
			return false;
		}
		return true;
	}
	return false;
}

function is_integer($int) {
	return is_int($int);
}

function is_null($var) {
	if ($var === null || typeof $var === 'undefined' || typeof $var === 'unknown') {
		return true;
	}
	return false;
}

function is_bool($var) {
	if (typeof $var === "Boolean" || typeof $var === "boolean") {
		return true;
	}
	return false;
}

function is_float($var) {
	if (is_numeric($var) === true) {
		if (!!($var % 1) === false) {
			return false;
		}
		return true;
	}
	return false;
}

function is_double($var) {
	return is_float($var);
}

function is_long($var) {
	return is_int($var);
}

function is_real($var) {
	return is_float($var);
}

function is_string($var) {
	if (typeof $var === 'String' || typeof $var === 'string') {
		return true;
	}
	return false;
}

function is_scalar($var) {
	if (is_float($var) || is_bool($var) || is_int($var) || is_string($var)) {
		return true;
	}
	return false;
}

function intval($var, base) {
	if (arguments.length === 1 || base === null) {
		base = 10;
	}
	if (typeof $var === 'boolean' || typeof $var === 'Boolean') {
		if ($var === true) {
			return 1;
		}
		return 0;
	} else if (typeof $var === 'string' || typeof $var === 'String') {
		var result = parseInt($var, base);
		if (isNaN(result) || !isFinite(result)) {
			return 0;
		}
		return result;
	} else if (typeof $var === 'Number' || typeof $var === 'number') {
		return Math.floor($var);
	}
	return 0;
}

function empty($var) {
	if ($var === "" || $var === 0 || $var === "0" || $var === null || typeof $var === "undifined") {
		return true;
	}
	return false;
}

function isset($var) {
	var i = 0;
	if (arguments.length === 0) {
		throw new Error('isset() exepts 1 param or more , 0 given');
	}
	while (i !== arguments.length) {
		if (typeof arguments[i] === "undifined" || typeof arguments[i] === null) {
			return false;
		}
		i++;
	}
	return true;
}
 /*
 
 samsol*
 
 */
 