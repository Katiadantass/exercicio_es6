"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _hp = /*#__PURE__*/new WeakMap();
// function Pokemon(name, type) {
//     this.name = name;
//     this.type = type;
// }
// const pikachu = new Pokemon('Pikachu', 'Electric');
var Pokemon = /*#__PURE__*/function () {
  function Pokemon(nome, tipo) {
    _classCallCheck(this, Pokemon);
    // Encapsulamento com #
    _classPrivateFieldInitSpec(this, _hp, 100);
    this.nome = nome;
    this.tipo = tipo;
  }
  return _createClass(Pokemon, [{
    key: "attack",
    value: function attack(attackName) {
      console.log("".concat(this.nome, " used ").concat(attackName));
    }

    // Método privado (só pode ser acessado dentro da classe)
  }, {
    key: "receiveDamage",
    value: function receiveDamage() {
      _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 10);
    }

    // Retorna o valor do hp privado
  }, {
    key: "showhp",
    value: function showhp() {
      console.log(_classPrivateFieldGet(_hp, this));
    }
  }]);
}(); // Classe filha (herança)
var Pikachu = /*#__PURE__*/function (_Pokemon2) {
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _callSuper(this, Pikachu, ['Pikachu', 'Electric']);
  }

  // Sobrescrita de método
  _inherits(Pikachu, _Pokemon2);
  return _createClass(Pikachu, [{
    key: "attack",
    value: function attack(attackName) {
      console.log("".concat(this.nome, " used ").concat(attackName, " and did 10 damage"));
    }
  }]);
}(Pokemon); // Instância da classe filha
var maxPikachu = new Pikachu();
maxPikachu.receiveDamage();

// Testando o encapsulamento
maxPikachu.hp = 5000; // cria um novo atributo público, não altera o #hp real
maxPikachu.showhp();

// Instância da classe base
var pikachu = new Pokemon('Pikachu', 'Electric');
pikachu.attack('Thunderbolt');
console.log(maxPikachu.hp);
console.log(pikachu);
console.log(maxPikachu);
console.log(pikachu instanceof Pokemon);
console.log(maxPikachu instanceof Pokemon);