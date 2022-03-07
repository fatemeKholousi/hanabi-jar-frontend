/* eslint-disable no-template-curly-in-string */
const englishTypeTemplate = "'${name}' is not a valid ${type}";
const persianTypeTemplate = "فرمت '${name}' صحیح نیست";

const English = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date",
  },
  types: {
    string: englishTypeTemplate,
    method: englishTypeTemplate,
    array: englishTypeTemplate,
    object: englishTypeTemplate,
    number: englishTypeTemplate,
    date: englishTypeTemplate,
    boolean: englishTypeTemplate,
    integer: englishTypeTemplate,
    float: englishTypeTemplate,
    regexp: englishTypeTemplate,
    email: englishTypeTemplate,
    url: englishTypeTemplate,
    hex: englishTypeTemplate,
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters",
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}",
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length",
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}",
  },
};

const Persian = {
  default: "مقادیر فیلد '${name}' معتبر نیست!",
  required: "وارد کردن '${label}' اجباری است",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' باید پر شود",
  date: {
    format: "'صحیح نیست ${name}' تاریخ",
    parse: "را بعنوان تاریخ نمایش داد '${name}' نمیتوان",
    invalid: "صحیح نیست '${name}' تاریخ",
  },
  types: {
    string: persianTypeTemplate,
    method: persianTypeTemplate,
    array: persianTypeTemplate,
    object: persianTypeTemplate,
    number: persianTypeTemplate,
    date: persianTypeTemplate,
    boolean: persianTypeTemplate,
    integer: persianTypeTemplate,
    float: persianTypeTemplate,
    regexp: persianTypeTemplate,
    email: persianTypeTemplate,
    url: persianTypeTemplate,
    hex: persianTypeTemplate,
  },
  string: {
    len: "'${name}' باید دقیقا ${len} کاراکتر باشد",
    min: "'${name}' باید حداقل ${min} کاراکتر باشد",
    max: "'${name}' نباید بیشتر از ${max} کاراکتر باشد",
    range: "'${name}' باید بین ${min} و ${max} کاراکتر باشد",
  },
  number: {
    len: "'${name}' باید برابر با ${len} باشد",
    min: "'${name}' نباید کمتر از ${min} باشد",
    max: "'${name}' نباید بزرگ تر از ${max} باشد",
    range: "'${name}' باید بین ${min} و ${max} باشد",
  },
  array: {
    len: "'${name}' باید دقیقا ${len} مقدار داشته باشد",
    min: "'${name}' نباید کمتر از ${min} مقدار داشته باشد",
    max: "'${name}' نباید بیشتر از ${max} مقدار داشته باشد",
    range: "'${name}' باید بین ${min} و ${max} مقدار داشته باشد",
  },
  pattern: {
    mismatch: "'${name}' با قالب ${pattern} برابر نیست",
  },
};

export default {
  Persian,
  English,
};
