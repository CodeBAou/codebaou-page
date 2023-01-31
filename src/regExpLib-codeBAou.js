// webjrcode.com/las-expresiones-regulares-mas-utiles-para-javascript/
const regExpLib =  {
    Email: / [a-zA-Z0-9]+\@gmail.com | [a-zA-Z0-9]*\@outloock.com | [a-zA-Z0-9]*\@hotmail.com /, 
    Sql: /"((SELECT|DELETE|UPDATE|INSERT INTO) (\*|[A-Z0-9_]+) (FROM) ([A-Z0-9_]+))( (WHERE) ([A-Z0-9_]+) (=|<|>|>=|<=|==|!=) (\?|\$[A-Z]{1}[A-Z_]+)( (AND) ([A-Z0-9_]+) (=|<|>|>=|<=|==|!=) (\?))?)?"/igm,
}

export default regExpLib;