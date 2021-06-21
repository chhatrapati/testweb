(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-other-files-other-files-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
'use strict';

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noop,
  table: noop,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} +')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});

/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noop, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = Object.create(null);
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.pedantic) {
    this.rules = block.pedantic;
  } else if (this.options.gfm) {
    this.rules = block.gfm;
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      var lastToken = this.tokens[this.tokens.length - 1];
      src = src.substring(cap[0].length);
      // An indented code block cannot interrupt a paragraph.
      if (lastToken && lastToken.type === 'paragraph') {
        lastToken.text += '\n' + cap[0].trimRight();
      } else {
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          codeBlockStyle: 'indented',
          text: !this.options.pedantic
            ? rtrim(cap, '\n')
            : cap
        });
      }
      continue;
    }

    // fences
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (cap = this.rules.nptable.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(item.cells[i], item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      listStart = {
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : '',
        loose: false
      };

      this.tokens.push(listStart);

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      listItems = [];
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) */, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull.length > 1 ? b.length === 1
            : (b.length > 1 || (this.options.smartLists && b !== bull))) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        if (loose) {
          listStart.loose = true;
        }

        // Check for task list items
        istask = /^\[[ xX]\] /.test(item);
        ischecked = undefined;
        if (istask) {
          ischecked = item[1] !== ' ';
          item = item.replace(/^\[[ xX]\] +/, '');
        }

        t = {
          type: 'list_item_start',
          task: istask,
          checked: ischecked,
          loose: loose
        };

        listItems.push(t);
        this.tokens.push(t);

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      if (listStart.loose) {
        l = listItems.length;
        i = 0;
        for (; i < l; i++) {
          listItems[i].loose = true;
        }
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (cap = this.rules.table.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(
            item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
            item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noop,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[1]);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = true;
      } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = false;
      }

      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      var lastParenIndex = findClosingBracket(cap[2], '()');
      if (lastParenIndex > -1) {
        var linkLen = 4 + cap[1].length + lastParenIndex;
        cap[2] = cap[2].substring(0, lastParenIndex);
        cap[0] = cap[0].substring(0, linkLen).trim();
        cap[3] = '';
      }
      src = src.substring(cap[0].length);
      this.inLink = true;
      href = cap[2];
      if (this.options.pedantic) {
        link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        } else {
          title = '';
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }
      href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
      out += this.outputLink(cap, {
        href: InlineLexer.escapes(href),
        title: InlineLexer.escapes(title)
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      src = src.substring(cap[0].length);
      out += this.renderer.link(href, null, text);
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      if (this.inRawBlock) {
        out += this.renderer.text(this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]);
      } else {
        out += this.renderer.text(escape(this.smartypants(cap[0])));
      }
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.escapes = function(text) {
  return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = link.href,
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || marked.defaults;
}

Renderer.prototype.code = function(code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + '>' + text + '</h' + level + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.checkbox = function(checked) {
  return '<input '
    + (checked ? 'checked="" ' : '')
    + 'disabled="" type="checkbox"'
    + (this.options.xhtml ? ' /' : '')
    + '> ';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';

  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + body
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' align="' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }
  var out = '<a href="' + escape(href) + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function(text) {
  return text;
};

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function() {
  return '';
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
  this.slugger = new Slugger();
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, { renderer: new TextRenderer() })
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  this.token = this.tokens.pop();
  return this.token;
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)),
        this.slugger);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';
      var loose = this.token.loose;
      var checked = this.token.checked;
      var task = this.token.task;

      if (this.token.task) {
        body += this.renderer.checkbox(checked);
      }

      while (this.next().type !== 'list_item_end') {
        body += !loose && this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }
      return this.renderer.listitem(body, task, checked);
    }
    case 'html': {
      // TODO parse inline content if parameter markdown=1
      return this.renderer.html(this.token.text);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
    default: {
      var errMsg = 'Token with "' + this.token.type + '" type was not found.';
      if (this.options.silent) {
        console.log(errMsg);
      } else {
        throw new Error(errMsg);
      }
    }
  }
};

/**
 * Slugger generates header id
 */

function Slugger() {
  this.seen = {};
}

/**
 * Convert string to unique id
 */

Slugger.prototype.slug = function(value) {
  var slug = value
    .toLowerCase()
    .trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');

  if (this.seen.hasOwnProperty(slug)) {
    var originalSlug = slug;
    do {
      this.seen[originalSlug]++;
      slug = originalSlug + '-' + this.seen[originalSlug];
    } while (this.seen.hasOwnProperty(slug));
  }
  this.seen[slug] = 0;

  return slug;
};

/**
 * Helpers
 */

function escape(html, encode) {
  if (encode) {
    if (escape.escapeTest.test(html)) {
      return html.replace(escape.escapeReplace, function(ch) { return escape.replacements[ch]; });
    }
  } else {
    if (escape.escapeTestNoEncode.test(html)) {
      return html.replace(escape.escapeReplaceNoEncode, function(ch) { return escape.replacements[ch]; });
    }
  }

  return html;
}

escape.escapeTest = /[&<>"']/;
escape.escapeReplace = /[&<>"']/g;
escape.replacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function(match, offset, str) {
        var escaped = false,
            curr = offset;
        while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
      cells = row.split(/ \|/),
      i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  if (str.length === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  var suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < str.length) {
    var currChar = str.charAt(str.length - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, str.length - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    checkSanitizeDeprecation(opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.getDefaults = function() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: new Renderer(),
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
};

marked.defaults = marked.getDefaults();

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.Slugger = Slugger;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else {}
})(this || (typeof window !== 'undefined' ? window : global));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/other-files/other-files.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/other-files/other-files.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"other-files-details-panel\">\n    <div class=\"container\">\n        <div class=\"row other-files-details-panel-inner\">\n            <div class=\"col-2 d-none d-md-block\">\n                <img class=\"img-preview\" [src]=\"otherFile.preview.compactPath\">\n            </div>\n            <div class=\"col-md-6 col-sm-12 d-flex flex-column justify-content-center\">\n                <p class=\"very-light-pink other-files-details__type\">{{ types[otherFile.fileType] }}</p>\n                <p class=\"charcoal-grey other-files-details__name\">{{ otherFile.name }}</p>\n            </div>\n            <div class=\"col-12 d-block d-md-none p-rl-25\">\n                <img class=\"img-preview\" [src]=\"otherFile.preview.originalPath\">\n            </div>\n            <div class=\"col-md-4 mt-50 other-files-details-panel-inner__right\">\n                <button (click)=\"onSaveClick(otherFile.file.path)\" class=\"btn btn-primary\">\n                    {{otherFile.fileType === ap? 'Download episode' : 'Download pdf'}}\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container other-files-details-info\">\n    <div class=\"row\">\n        <div class=\"col-5 d-none d-md-block\">\n            <div class=\"other-files-details-info__img-wr\">\n                <img class=\"img-cover\" [src]=\"otherFile.preview.originalPath\" alt=\"Image\">\n            </div>\n        </div>\n        <div class=\"col-md-6 offset-md-1 col-sm-12 offset-sm-0\">\n            <!--Here will be markdown-->\n            <div class=\"other-files__content\" marked [text]=\"otherFile.description\"></div>\n            <div class=\"audio-player\" *ngIf=\"otherFile.fileType === ap\">\n                <app-songsheet-player [track]=\"this.file | async\"></app-songsheet-player>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/remove-markdown/index.js":
/*!***********************************************!*\
  !*** ./node_modules/remove-markdown/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(md, options) {
  options = options || {};
  options.listUnicodeChar = options.hasOwnProperty('listUnicodeChar') ? options.listUnicodeChar : false;
  options.stripListLeaders = options.hasOwnProperty('stripListLeaders') ? options.stripListLeaders : true;
  options.gfm = options.hasOwnProperty('gfm') ? options.gfm : true;
  options.useImgAltText = options.hasOwnProperty('useImgAltText') ? options.useImgAltText : true;

  var output = md || '';

  // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '');

  try {
    if (options.stripListLeaders) {
      if (options.listUnicodeChar)
        output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, options.listUnicodeChar + ' $1');
      else
        output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, '$1');
    }
    if (options.gfm) {
      output = output
        // Header
        .replace(/\n={2,}/g, '\n')
        // Fenced codeblocks
        .replace(/~{3}.*\n/g, '')
        // Strikethrough
        .replace(/~~/g, '')
        // Fenced codeblocks
        .replace(/`{3}.*\n/g, '');
    }
    output = output
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      // Remove setext-style headers
      .replace(/^[=\-]{2,}\s*$/g, '')
      // Remove footnotes?
      .replace(/\[\^.+?\](\: .*?$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
      // Remove images
      .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, options.useImgAltText ? '$1' : '')
      // Remove inline links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
      // Remove blockquotes
      .replace(/^\s{0,3}>\s?/g, '')
      // Remove reference-style links?
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
      // Remove atx-style headers
      .replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, '$1$2$3')
      // Remove emphasis (repeat the line to remove double emphasis)
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
      // Remove code blocks
      .replace(/(`{3,})(.*?)\1/gm, '$2')
      // Remove inline code
      .replace(/`(.+?)`/g, '$1')
      // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
      .replace(/\n{2,}/g, '\n\n');
  } catch(e) {
    console.error(e);
    return md;
  }
  return output;
};


/***/ }),

/***/ "./src/app/core/directives/marked/marked-directive.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/directives/marked/marked-directive.module.ts ***!
  \*******************************************************************/
/*! exports provided: MarkedDirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedDirectiveModule", function() { return MarkedDirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _marked_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marked.directive */ "./src/app/core/directives/marked/marked.directive.ts");




var MarkedDirectiveModule = /** @class */ (function () {
    function MarkedDirectiveModule() {
    }
    MarkedDirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_marked_directive__WEBPACK_IMPORTED_MODULE_3__["MarkedDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_marked_directive__WEBPACK_IMPORTED_MODULE_3__["MarkedDirective"]]
        })
    ], MarkedDirectiveModule);
    return MarkedDirectiveModule;
}());



/***/ }),

/***/ "./src/app/core/directives/marked/marked.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/core/directives/marked/marked.directive.ts ***!
  \************************************************************/
/*! exports provided: MarkedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedDirective", function() { return MarkedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_marked_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/marked.service */ "./src/app/services/marked.service.ts");



var MarkedDirective = /** @class */ (function () {
    function MarkedDirective(elementRef, markedService) {
        this.elementRef = elementRef;
        this.markedService = markedService;
        this.renderer = this.markedService.renderer;
        marked.setOptions({
            sanitize: true,
        });
    }
    MarkedDirective.prototype.ngOnChanges = function () {
        this.elementRef.nativeElement.innerHTML = marked(this.text, { renderer: this.renderer });
    };
    MarkedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_marked_service__WEBPACK_IMPORTED_MODULE_2__["MarkedService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MarkedDirective.prototype, "text", void 0);
    MarkedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[marked]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_marked_service__WEBPACK_IMPORTED_MODULE_2__["MarkedService"]])
    ], MarkedDirective);
    return MarkedDirective;
}());



/***/ }),

/***/ "./src/app/models/file/file-model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/file/file-model.ts ***!
  \*******************************************/
/*! exports provided: FileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
var FileModel = /** @class */ (function () {
    function FileModel(data) {
        this.id = data.id;
        this.path = data.path;
        this.type = data.type;
    }
    FileModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return FileModel;
}());



/***/ }),

/***/ "./src/app/models/image/image-formats.ts":
/*!***********************************************!*\
  !*** ./src/app/models/image/image-formats.ts ***!
  \***********************************************/
/*! exports provided: imageFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageFormats", function() { return imageFormats; });
var imageFormats = [
    'image/jpg',
    'image/jpeg',
    'image/png'
];


/***/ }),

/***/ "./src/app/models/image/image-model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/image/image-model.ts ***!
  \*********************************************/
/*! exports provided: ImageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return ImageModel; });
var ImageModel = /** @class */ (function () {
    function ImageModel(avatar) {
        this.id = avatar.id;
        this.compactPath = avatar.compactPath;
        this.originalPath = avatar.originalPath;
    }
    ImageModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ImageModel;
}());



/***/ }),

/***/ "./src/app/models/image/image-request-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/image/image-request-model.ts ***!
  \*****************************************************/
/*! exports provided: ImageRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRequestModel", function() { return ImageRequestModel; });
var ImageRequestModel = /** @class */ (function () {
    function ImageRequestModel(imageRequest) {
        this.data = imageRequest.data;
        this.meta = imageRequest.meta;
    }
    ImageRequestModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ImageRequestModel;
}());



/***/ }),

/***/ "./src/app/models/image/image-statuses.ts":
/*!************************************************!*\
  !*** ./src/app/models/image/image-statuses.ts ***!
  \************************************************/
/*! exports provided: ImageStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStatuses", function() { return ImageStatuses; });
var ImageStatuses;
(function (ImageStatuses) {
    ImageStatuses[ImageStatuses["pending"] = 1] = "pending";
    ImageStatuses[ImageStatuses["loaded"] = 2] = "loaded";
})(ImageStatuses || (ImageStatuses = {}));


/***/ }),

/***/ "./src/app/models/image/image-validation-rules.ts":
/*!********************************************************!*\
  !*** ./src/app/models/image/image-validation-rules.ts ***!
  \********************************************************/
/*! exports provided: rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rules", function() { return rules; });
var rules = {
    imageFileSize: 10485760,
    imageMinSize: 150,
};


/***/ }),

/***/ "./src/app/models/image/index.ts":
/*!***************************************!*\
  !*** ./src/app/models/image/index.ts ***!
  \***************************************/
/*! exports provided: imageFormats, ImageModel, ImageRequestModel, ImageStatuses, rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-formats */ "./src/app/models/image/image-formats.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageFormats", function() { return _image_formats__WEBPACK_IMPORTED_MODULE_0__["imageFormats"]; });

/* harmony import */ var _image_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-model */ "./src/app/models/image/image-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return _image_model__WEBPACK_IMPORTED_MODULE_1__["ImageModel"]; });

/* harmony import */ var _image_request_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-request-model */ "./src/app/models/image/image-request-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageRequestModel", function() { return _image_request_model__WEBPACK_IMPORTED_MODULE_2__["ImageRequestModel"]; });

/* harmony import */ var _image_statuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-statuses */ "./src/app/models/image/image-statuses.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageStatuses", function() { return _image_statuses__WEBPACK_IMPORTED_MODULE_3__["ImageStatuses"]; });

/* harmony import */ var _image_validation_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-validation-rules */ "./src/app/models/image/image-validation-rules.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rules", function() { return _image_validation_rules__WEBPACK_IMPORTED_MODULE_4__["rules"]; });








/***/ }),

/***/ "./src/app/models/otherfile/otherfile-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/otherfile/otherfile-model.ts ***!
  \*****************************************************/
/*! exports provided: OtherFileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFileModel", function() { return OtherFileModel; });
/* harmony import */ var _file_file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file/file-model */ "./src/app/models/file/file-model.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ "./src/app/models/image/index.ts");


var OtherFileModel = /** @class */ (function () {
    function OtherFileModel(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.preview = new _image__WEBPACK_IMPORTED_MODULE_1__["ImageModel"](data.preview);
        this.file = new _file_file_model__WEBPACK_IMPORTED_MODULE_0__["FileModel"](data.file);
        this.fileType = data.fileType;
    }
    OtherFileModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return OtherFileModel;
}());



/***/ }),

/***/ "./src/app/resolvers/other-file.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/resolvers/other-file.resolver.ts ***!
  \**************************************************/
/*! exports provided: OtherFileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFileResolver", function() { return OtherFileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_other_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/other-files.service */ "./src/app/services/other-files.service.ts");






var OtherFileResolver = /** @class */ (function () {
    function OtherFileResolver(ofService, router) {
        this.ofService = ofService;
        this.router = router;
    }
    OtherFileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var otherFileId = route.params.id;
        return this.ofService.getOtherFile(otherFileId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 404) {
                _this.router.navigate(['/404']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }
        }));
    };
    OtherFileResolver.ctorParameters = function () { return [
        { type: _services_other_files_service__WEBPACK_IMPORTED_MODULE_5__["OtherFilesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OtherFileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_other_files_service__WEBPACK_IMPORTED_MODULE_5__["OtherFilesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OtherFileResolver);
    return OtherFileResolver;
}());



/***/ }),

/***/ "./src/app/services/marked.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/marked.service.ts ***!
  \********************************************/
/*! exports provided: MarkedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedService", function() { return MarkedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);



var removeMarkdown = __webpack_require__(/*! remove-markdown */ "./node_modules/remove-markdown/index.js");
var MarkedService = /** @class */ (function () {
    function MarkedService() {
    }
    MarkedService_1 = MarkedService;
    Object.defineProperty(MarkedService.prototype, "renderer", {
        get: function () {
            var renderer = new marked__WEBPACK_IMPORTED_MODULE_2__["Renderer"]();
            renderer.heading = MarkedService_1.heading;
            renderer.link = MarkedService_1.link;
            return renderer;
        },
        enumerable: true,
        configurable: true
    });
    MarkedService.heading = function (text, level, raw, slugger) {
        return "<h" + level + " class=\"typography-heading-lvl-" + level + "\">\n            " + text + "\n        </h" + level + ">";
    };
    MarkedService.link = function (href, title, text) {
        return "<a class=\"link link--orange\" href=\"" + href + "\">\n            " + text + "\n        </a>";
    };
    // noinspection JSMethodCanBeStatic
    MarkedService.prototype.toPlainText = function (mdText) {
        return removeMarkdown(mdText, {
            stripListLeaders: true,
        });
    };
    var MarkedService_1;
    MarkedService = MarkedService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MarkedService);
    return MarkedService;
}());



/***/ }),

/***/ "./src/app/services/other-files.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/other-files.service.ts ***!
  \*************************************************/
/*! exports provided: OtherFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFilesService", function() { return OtherFilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");
/* harmony import */ var _models_otherfile_otherfile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/otherfile/otherfile-model */ "./src/app/models/otherfile/otherfile-model.ts");






var OtherFilesService = /** @class */ (function () {
    function OtherFilesService(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/otherfiles';
    }
    Object.defineProperty(OtherFilesService.prototype, "apiEndpoint", {
        get: function () {
            return [this.apiUrl, this.endpoint].join('');
        },
        enumerable: true,
        configurable: true
    });
    OtherFilesService.prototype.getOtherFile = function (id) {
        return this.httpClient.get(this.apiEndpoint + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _models_otherfile_otherfile_model__WEBPACK_IMPORTED_MODULE_5__["OtherFileModel"](data.data); }));
    };
    OtherFilesService.prototype.getPrivateFile = function (filePath) {
        return this.httpClient.get("" + filePath, { responseType: 'blob' });
    };
    OtherFilesService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"],] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OtherFilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OtherFilesService);
    return OtherFilesService;
}());



/***/ }),

/***/ "./src/app/views/other-files/other-files-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/other-files/other-files-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OtherFilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFilesRoutingModule", function() { return OtherFilesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _other_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other-files.component */ "./src/app/views/other-files/other-files.component.ts");
/* harmony import */ var _guards_unsubscribed_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards/unsubscribed.guard */ "./src/app/guards/unsubscribed.guard.ts");
/* harmony import */ var _resolvers_other_file_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resolvers/other-file.resolver */ "./src/app/resolvers/other-file.resolver.ts");







var routes = [
    {
        path: 'other/:id',
        component: _other_files_component__WEBPACK_IMPORTED_MODULE_4__["OtherFilesComponent"],
        canActivate: [_guards_unsubscribed_guard__WEBPACK_IMPORTED_MODULE_5__["UnsubscribedGuard"]],
        resolve: {
            data: _resolvers_other_file_resolver__WEBPACK_IMPORTED_MODULE_6__["OtherFileResolver"]
        }
    }
];
var OtherFilesRoutingModule = /** @class */ (function () {
    function OtherFilesRoutingModule() {
    }
    OtherFilesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], OtherFilesRoutingModule);
    return OtherFilesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/other-files/other-files.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/other-files/other-files.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.brownish-grey {\n  color: #626262;\n}\n.orangey-red {\n  color: #ee4036;\n}\n.charcoal-grey {\n  color: #393e41;\n}\n.brown-grey {\n  color: #a0a0a0;\n}\n.white {\n  color: #ffffff;\n}\n.very-light-pink {\n  color: #d9d9d9;\n}\n.little-grey {\n  color: #999999;\n}\n.other-files-details-panel {\n  display: flex;\n  box-shadow: 0 9px 15px 0 rgba(160, 160, 160, 0.11);\n}\n.other-files-details-panel div.col-2 {\n  margin: auto 0;\n}\n.other-files-details-panel-inner {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  min-height: 152px;\n  max-height: 178px;\n}\n@media (max-width: 1200px) {\n  .other-files-details-panel-inner {\n    height: auto;\n    max-height: none;\n  }\n}\n.other-files-details-panel-inner__right button {\n  float: right;\n}\n@media (max-width: 767px) {\n  .other-files-details-panel-inner__right button {\n    float: none;\n  }\n}\n@media (max-width: 991px) {\n  .other-files-details-panel-inner__right {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media (max-width: 767px) {\n  .other-files-details-panel-inner__right {\n    margin-top: 15px;\n    align-items: center;\n  }\n}\n@media (max-width: 767px) {\n  .other-files-details-panel-inner {\n    text-align: center;\n    height: auto;\n  }\n}\n.other-files-details-info {\n  margin-top: 60px;\n  margin-bottom: 120px;\n}\n.img-preview {\n  max-width: 168px;\n  max-height: 152px;\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n}\n@media (max-width: 767px) {\n  .img-preview {\n    max-width: none;\n    max-height: none;\n  }\n}\n.img-cover {\n  border-radius: 15px;\n  width: 100%;\n  box-shadow: 0px 0px 20px 0 rgba(160, 160, 160, 0.5);\n}\n.img-cover__wr {\n  width: 470px;\n  height: 432px;\n}\n.other-files-details-info {\n  margin-top: 60px;\n  margin-bottom: 120px;\n}\n@media (max-width: 767px) {\n  .other-files-details-info {\n    margin-top: 45px;\n    margin-bottom: 60px;\n  }\n}\n.other-files-details-info__img-wr {\n  width: 100%;\n  height: 100%;\n}\n.audio-player {\n  margin-top: 30px;\n  max-height: 100px;\n}\n@media (max-width: 767px) {\n  .audio-player {\n    margin-top: 45px;\n  }\n}\n.other-files-details__name {\n  font-size: 45px;\n  font-weight: 800;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n@media (max-width: 767px) {\n  .other-files-details__name {\n    margin-bottom: 30px;\n  }\n}\n.other-files-details__type {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  font-weight: 900;\n  font-stretch: normal;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 1.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL290aGVyLWZpbGVzL290aGVyLWZpbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9vdGhlci1maWxlcy9vdGhlci1maWxlcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvc3R5bGVzL2RlZmF1bHRzL2NvbG9yLWNsYXNzZXMuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvc3R5bGVzL2RlZmF1bHRzL2NvbG9yLWNvbnN0YW50cy5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBU0EsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUNtQlI7QURpQ1E7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDc0JoQjtBRG1DSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUMwQmhCO0FEbUNRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ2dDYjtBRHFDSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDbkNSO0FEcUNRO0VBQ0ksaUJBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQ1I7QUR5Q0E7RUFDSSxjQUFBO0FDdENKO0FEeUNBO0VBQ0ksd0JBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZO0VBK0ZaLG1DQUFBO0FDdkNKO0FEeUNJO0VBQ0ksY0FwR0s7QUM2RGI7QUQyQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQ3hDSjtBRDJDQSxtQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0Esb0JBQUE7QUFDQTtFQUNJLGVBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxlQUFBO0FDeENKO0FDekdBO0VBQWdCLGNDRkE7QUYrR2hCO0FDNUdBO0VBQWMsY0NEQTtBRmlIZDtBQy9HQTtFQUFnQixjQ0RBO0FGb0hoQjtBQ2xIQTtFQUFhLGNDREE7QUZ1SGI7QUNySEE7RUFBUSxjQ0RBO0FGMEhSO0FDeEhBO0VBQWtCLGNDREE7QUY2SGxCO0FDM0hBO0VBQWMsY0NEQTtBRmdJZDtBR25JQTtFQUNJLGFBQUE7RUFDQSxrREFBQTtBSHNJSjtBR3BJSTtFQUNJLGNBQUE7QUhzSVI7QUdsSUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBSHFJSjtBSXhJUTtFRERSO0lBT1EsWUFBQTtJQUNBLGdCQUFBO0VIc0lOO0FBQ0Y7QUdsSVE7RUFDSSxZQUFBO0FIb0laO0FJakpRO0VEWUE7SUFJUSxXQUFBO0VIcUlkO0FBQ0Y7QUl0SlE7RURVSjtJQVdRLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VIcUlWO0FBQ0Y7QUk3SlE7RURVSjtJQWlCUSxnQkFBQTtJQUNBLG1CQUFBO0VIc0lWO0FBQ0Y7QUluS1E7RUREUjtJQWtDUSxrQkFBQTtJQUNBLFlBQUE7RUhzSU47QUFDRjtBR25JQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUhzSUo7QUdqSUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBSG9JSjtBSXRMUTtFRDZDUjtJQU9RLGVBQUE7SUFDQSxnQkFBQTtFSHNJTjtBQUNGO0FHbklBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7QUhzSUo7QUdwSUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBSHNJUjtBR2pJQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUhvSUo7QUkzTVE7RURxRVI7SUFLUSxnQkFBQTtJQUNBLG1CQUFBO0VIcUlOO0FBQ0Y7QUduSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBSHFJUjtBR2pJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUhvSUo7QUkxTlE7RURvRlI7SUFLUSxnQkFBQTtFSHFJTjtBQUNGO0FHaklJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBSG9JUjtBSXpPUTtFRDhGSjtJQVVRLG1CQUFBO0VIcUlWO0FBQ0Y7QUdsSUk7RUFDSSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBSG9JUiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVyLWZpbGVzL290aGVyLWZpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVkFSSUFCTEVTICovXG4kb3JhbmdlLXJlZDogI2VlNDAzNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRjaGFyY29hbC1ncmV5OiAjMzkzZTQxO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRkaW0tZ3JleTogIzIxMjEyMTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kbGlnaHQtZ3JleTogIzk5OTk5OTtcbiRwZWFjaHktcGluazogI2ZmOGY4OTtcbiRsaWdodC1waW5rOiAjZWVlZWVlO1xuJGRhcmstZ3JleTogIzNiM2IzYjtcblxuLyogTUlYSU5TICovXG5AbWl4aW4gYnRuLWhlaWdodCgkaGVpZ2h0LCAkYnRuLXBhZGRpbmc6IDMwcHgpIHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJGhlaWdodCAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAkYnRuLXBhZGRpbmc7XG4gICAgcGFkZGluZy1yaWdodDogJGJ0bi1wYWRkaW5nO1xufVxuXG5AbWl4aW4gbXVsdGlsaW5lLWVsbGlwc2lzKCRsaW5lQ2xhbXApIHtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZUNsYW1wO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIENMQVNTIFZBUklBQkxFUyovXG5cbiVmbGV4LWNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICAgIEBpbmNsdWRlIGJ0bi1oZWlnaHQoNTBweCk7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcblxuICAgICYtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2hpdGUge1xuICAgICAgICBjb2xvcjogJGJyb3duLWdyZXk7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRicm93bi1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICB9XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwe1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNXtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG4iLCIvKiBWQVJJQUJMRVMgKi9cbi8qIE1JWElOUyAqL1xuLyogQ0xBU1MgVkFSSUFCTEVTKi9cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbn1cbi5idG4td2hpdGUge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EwYTBhMDtcbn1cbi5idG4td2hpdGU6aG92ZXIge1xuICBib3JkZXItd2lkdGg6IDNweDtcbn1cbi5idG4taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgY29sb3I6ICMzOTNlNDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLmJyb3duaXNoLWdyZXkge1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cblxuLm9yYW5nZXktcmVkIHtcbiAgY29sb3I6ICNlZTQwMzY7XG59XG5cbi5jaGFyY29hbC1ncmV5IHtcbiAgY29sb3I6ICMzOTNlNDE7XG59XG5cbi5icm93bi1ncmV5IHtcbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udmVyeS1saWdodC1waW5rIHtcbiAgY29sb3I6ICNkOWQ5ZDk7XG59XG5cbi5saXR0bGUtZ3JleSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4ub3RoZXItZmlsZXMtZGV0YWlscy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDAgOXB4IDE1cHggMCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMTEpO1xufVxuLm90aGVyLWZpbGVzLWRldGFpbHMtcGFuZWwgZGl2LmNvbC0yIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi5vdGhlci1maWxlcy1kZXRhaWxzLXBhbmVsLWlubmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWluLWhlaWdodDogMTUycHg7XG4gIG1heC1oZWlnaHQ6IDE3OHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAub3RoZXItZmlsZXMtZGV0YWlscy1wYW5lbC1pbm5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cbn1cbi5vdGhlci1maWxlcy1kZXRhaWxzLXBhbmVsLWlubmVyX19yaWdodCBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm90aGVyLWZpbGVzLWRldGFpbHMtcGFuZWwtaW5uZXJfX3JpZ2h0IGJ1dHRvbiB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAub3RoZXItZmlsZXMtZGV0YWlscy1wYW5lbC1pbm5lcl9fcmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm90aGVyLWZpbGVzLWRldGFpbHMtcGFuZWwtaW5uZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAub3RoZXItZmlsZXMtZGV0YWlscy1wYW5lbC1pbm5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4ub3RoZXItZmlsZXMtZGV0YWlscy1pbmZvIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG59XG5cbi5pbWctcHJldmlldyB7XG4gIG1heC13aWR0aDogMTY4cHg7XG4gIG1heC1oZWlnaHQ6IDE1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbWctcHJldmlldyB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cbn1cblxuLmltZy1jb3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNSk7XG59XG4uaW1nLWNvdmVyX193ciB7XG4gIHdpZHRoOiA0NzBweDtcbiAgaGVpZ2h0OiA0MzJweDtcbn1cblxuLm90aGVyLWZpbGVzLWRldGFpbHMtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5vdGhlci1maWxlcy1kZXRhaWxzLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxufVxuLm90aGVyLWZpbGVzLWRldGFpbHMtaW5mb19faW1nLXdyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF1ZGlvLXBsYXllciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hdWRpby1wbGF5ZXIge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gIH1cbn1cblxuLm90aGVyLWZpbGVzLWRldGFpbHNfX25hbWUge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5vdGhlci1maWxlcy1kZXRhaWxzX19uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4ub3RoZXItZmlsZXMtZGV0YWlsc19fdHlwZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG59IiwiQGltcG9ydCBcImNvbG9yLWNvbnN0YW50c1wiO1xuXG4uYnJvd25pc2gtZ3JleSB7Y29sb3I6ICRicm93bmlzaC1ncmV5O31cbi5vcmFuZ2V5LXJlZCB7Y29sb3I6ICRvcmFuZ2V5LXJlZDt9XG4uY2hhcmNvYWwtZ3JleSB7Y29sb3I6ICRjaGFyY29hbC1ncmV5O31cbi5icm93bi1ncmV5IHtjb2xvcjogJGJyb3duLWdyZXk7fVxuLndoaXRlIHtjb2xvcjogJHdoaXRlO31cbi52ZXJ5LWxpZ2h0LXBpbmsge2NvbG9yOiAkdmVyeS1saWdodC1waW5rO31cbi5saXR0bGUtZ3JleSB7Y29sb3I6ICRsaXR0bGUtZ3JleTt9XG5cbiIsIiRicm93bmlzaC1ncmV5OiAjNjI2MjYyO1xuJGNvbG9yLWFsbW9zdC1kYXJrOiAjM2IzYjNiO1xuJG9yYW5nZXktcmVkOiAjZWU0MDM2O1xuJGNoYXJjb2FsLWdyZXk6ICMzOTNlNDE7XG4kYnJvd24tZ3JleTogI2EwYTBhMDtcbiR3aGl0ZTogI2ZmZmZmZjtcbiR2ZXJ5LWxpZ2h0LXBpbms6ICNkOWQ5ZDk7XG4kbGl0dGxlLWdyZXk6ICM5OTk5OTk7XG5cblxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9iYXNlXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZGVmYXVsdHMvY29sb3ItY2xhc3Nlc1wiO1xuXG4ub3RoZXItZmlsZXMtZGV0YWlscy1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAwIDlweCAxNXB4IDAgcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjExKTtcblxuICAgIGRpdi5jb2wtMiB7XG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cbn1cblxuLm90aGVyLWZpbGVzLWRldGFpbHMtcGFuZWwtaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTJweDtcbiAgICBtYXgtaGVpZ2h0OiAxNzhweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oZXh0cmEtbGFyZ2UpIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIH1cblxuICAgICZfX3JpZ2h0IHtcblxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbi5vdGhlci1maWxlcy1kZXRhaWxzLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG5cblxufVxuXG4uaW1nLXByZXZpZXcge1xuICAgIG1heC13aWR0aDogMTY4cHg7XG4gICAgbWF4LWhlaWdodDogMTUycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIH1cbn1cblxuLmltZy1jb3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNSk7XG5cbiAgICAmX193ciB7XG4gICAgICAgIHdpZHRoOiA0NzBweDtcbiAgICAgICAgaGVpZ2h0OiA0MzJweDtcbiAgICB9XG59XG5cblxuLm90aGVyLWZpbGVzLWRldGFpbHMtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgfVxuXG4gICAgJl9faW1nLXdyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5hdWRpby1wbGF5ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICAgIH1cbn1cblxuLm90aGVyLWZpbGVzLWRldGFpbHMge1xuICAgICZfX25hbWUge1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fdHlwZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gICAgLy8gYmFzaWM6XG4gICAgbW9iaWxlOiAzMjBweCxcbiAgICBleHRyYS1zbWFsbDogMzc3cHgsXG4gICAgc21hbGw6IDU3NnB4LFxuICAgIG1lZGl1bTogNzY3cHgsXG4gICAgbGFyZ2U6IDk5MXB4LFxuICAgIGV4dHJhLWxhcmdlOiAxMjAwcHgsXG4gICAgaXBhZC1sYW5kc2NhcGU6IDEwMjVweCxcbiAgICBsYXB0b3A6IDEzNjZweFxuKTtcblxuQG1peGluIHJlc3BvbmQtdG8oJGJyZWFrcG9pbnQpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpfSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHdhcm4gXCJObyBzdWNoIGJyZWFrcG9pbnQgaW4gdGhlIG1hcDogYCN7JGJyZWFrcG9pbnR9YC4gXCI7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/other-files/other-files.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/other-files/other-files.component.ts ***!
  \************************************************************/
/*! exports provided: OtherFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFilesComponent", function() { return OtherFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_other_files_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/other-files.service */ "./src/app/services/other-files.service.ts");
/* harmony import */ var _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/enums/other-files-types */ "./src/app/core/enums/other-files-types.ts");








var OtherFilesComponent = /** @class */ (function () {
    function OtherFilesComponent(router, ofService, document, activatedRoute) {
        this.router = router;
        this.ofService = ofService;
        this.document = document;
        this.activatedRoute = activatedRoute;
        this.ap = 'AudioPublication';
        this.types = _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_7__["OtherFilesTypes"];
        this.otherFile = this.activatedRoute.snapshot.data.data;
        this.file = this.ofService.getPrivateFile(this.otherFile.file.path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    }
    OtherFilesComponent.prototype.onSaveClick = function (path) {
        this.file
            .subscribe(function (data) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(data, path.split('/').pop());
        });
    };
    OtherFilesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_other_files_service__WEBPACK_IMPORTED_MODULE_6__["OtherFilesService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    OtherFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-files',
            template: __webpack_require__(/*! raw-loader!./other-files.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/other-files/other-files.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./other-files.component.scss */ "./src/app/views/other-files/other-files.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_other_files_service__WEBPACK_IMPORTED_MODULE_6__["OtherFilesService"],
            Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OtherFilesComponent);
    return OtherFilesComponent;
}());



/***/ }),

/***/ "./src/app/views/other-files/other-files.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/other-files/other-files.module.ts ***!
  \*********************************************************/
/*! exports provided: OtherFilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFilesModule", function() { return OtherFilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _other_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-files.component */ "./src/app/views/other-files/other-files.component.ts");
/* harmony import */ var _other_files_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other-files-routing.module */ "./src/app/views/other-files/other-files-routing.module.ts");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _services_other_files_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/other-files.service */ "./src/app/services/other-files.service.ts");
/* harmony import */ var _resolvers_other_file_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resolvers/other-file.resolver */ "./src/app/resolvers/other-file.resolver.ts");
/* harmony import */ var _components_songsheet_player_songsheet_player_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/songsheet-player/songsheet-player.module */ "./src/app/components/songsheet-player/songsheet-player.module.ts");
/* harmony import */ var _core_directives_marked_marked_directive_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/directives/marked/marked-directive.module */ "./src/app/core/directives/marked/marked-directive.module.ts");
/* harmony import */ var _services_marked_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/marked.service */ "./src/app/services/marked.service.ts");











var OtherFilesModule = /** @class */ (function () {
    function OtherFilesModule() {
    }
    OtherFilesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _other_files_component__WEBPACK_IMPORTED_MODULE_3__["OtherFilesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _other_files_routing_module__WEBPACK_IMPORTED_MODULE_4__["OtherFilesRoutingModule"],
                _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipeModule"],
                _components_songsheet_player_songsheet_player_module__WEBPACK_IMPORTED_MODULE_8__["SongsheetPlayerModule"],
                _core_directives_marked_marked_directive_module__WEBPACK_IMPORTED_MODULE_9__["MarkedDirectiveModule"]
            ],
            providers: [
                _services_other_files_service__WEBPACK_IMPORTED_MODULE_6__["OtherFilesService"],
                _services_marked_service__WEBPACK_IMPORTED_MODULE_10__["MarkedService"],
                _resolvers_other_file_resolver__WEBPACK_IMPORTED_MODULE_7__["OtherFileResolver"]
            ]
        })
    ], OtherFilesModule);
    return OtherFilesModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-other-files-other-files-module-es5.js.map