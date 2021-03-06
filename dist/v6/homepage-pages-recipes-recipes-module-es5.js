function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-recipes-recipes-module"], {
  /***/
  "./src/app/homepage/pages/recipes/cqrs/cqrs.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/cqrs/cqrs.component.ts ***!
    \***************************************************************/

  /*! exports provided: CqrsComponent */

  /***/
  function srcAppHomepagePagesRecipesCqrsCqrsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CqrsComponent", function () {
      return CqrsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var CqrsComponent =
    /*#__PURE__*/
    function (_page_page_component_) {
      _inherits(CqrsComponent, _page_page_component_);

      function CqrsComponent() {
        _classCallCheck(this, CqrsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CqrsComponent).apply(this, arguments));
      }

      return CqrsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CqrsComponent.ɵfac = function CqrsComponent_Factory(t) {
      return ɵCqrsComponent_BaseFactory(t || CqrsComponent);
    };

    CqrsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CqrsComponent,
      selectors: [["app-cqrs"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 326,
      vars: 64,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/cqrs.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "cqrs"], ["rel", "nofollow", "target", "_blank", "href", "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/cqrs"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "commands"], [1, "filename"], ["app6379e3514852d43c413c0a634462f10c6dec0c22", ""], [1, "language-typescript"], ["appe6a11388b1abbebcdea5b0c8f9bd1113d71b90c3", ""], ["appeb761b4bf3076b44210a8dde510cc95caf6bf8e2", ""], ["appAnchor", "", "id", "events"], ["appe64290052e25d9f529c459bb1f69d47e1f256c36", ""], ["app410422a7061c4015f882f8d0c95a431bda322dde", ""], ["app07ed862eb6c822f37dc1cc6ffe2196c79ca313f8", ""], [1, "info"], ["appa42f47a23aa5b7d261148b3f6f9f7ed102779fb9", ""], ["appAnchor", "", "id", "sagas"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/ReactiveX/rxjs"], ["app5b793365e757e109bcaf64547159035527a6266d", ""], ["appAnchor", "", "id", "queries"], ["appAnchor", "", "id", "setup"], ["app78205e48545e27179d30fb0fcded91a78a25521e", ""], ["appAnchor", "", "id", "summary"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/kamilmysliwiec/nest-cqrs-example"]],
      template: function CqrsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CQRS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The flow of simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " (Create, Read, Update and Delete) applications can be described using the following steps:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "controllers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " layer handles HTTP requests and delegates tasks to the services layer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "services layer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " is where most of the business logic lives.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Services uses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "repositories / DAOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " to change / persist entities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Entities act as containers for the values, with setters and getters.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In most cases, for small and medium-sized applications, this pattern is sufficient. However, when our requirements become more complex, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CQRS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " model may be more appropriate and scalable. To facilitate that model, Nest provides a lightweight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "CQRS module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ". This chapter describes how to use it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "First install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n$ npm install --save @nestjs/cqrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Commands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "In this model, each action is called a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ". When a command is dispatched, the application reacts to it. Commands can be dispatched from the services layer, or directly from controllers/gateways. Commands are consumed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Command Handlers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n@Injectable()\nexport class HeroesGameService {\n  constructor(private readonly commandBus: CommandBus) {}\n\n  async killDragon(heroId: string, killDragonDto: KillDragonDto) {\n    return this.commandBus.execute(\n      new KillDragonCommand(heroId, killDragonDto.dragonId)\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n@Injectable()\n@Dependencies(CommandBus)\nexport class HeroesGameService {\n  constructor(commandBus) {\n    this.commandBus = commandBus;\n  }\n\n  async killDragon(heroId, killDragonDto) {\n    return this.commandBus.execute(\n      new KillDragonCommand(heroId, killDragonDto.dragonId)\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Here's a sample service that dispatches ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "KillDragonCommand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ". Let's see how the command looks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\nexport class KillDragonCommand {\n  constructor(\n    public readonly heroId: string,\n    public readonly dragonId: string,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\nexport class KillDragonCommand {\n  constructor(heroId, dragonId) {\n    this.heroId = heroId;\n    this.dragonId = dragonId;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "CommandBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " of commands. It delegates commands to the equivalent handlers. Each command must have a corresponding ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Command Handler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "app-tabs", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n@CommandHandler(KillDragonCommand)\nexport class KillDragonHandler implements ICommandHandler<KillDragonCommand> {\n  constructor(private readonly repository: HeroRepository) {}\n\n  async execute(command: KillDragonCommand) {\n    const { heroId, dragonId } = command;\n    const hero = this.repository.findOneById(+heroId);\n\n    hero.killEnemy(dragonId);\n    await this.repository.persist(hero);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n@CommandHandler(KillDragonCommand)\n@Dependencies(HeroRepository)\nexport class KillDragonHandler {\n  constructor(repository) {\n    this.repository = repository;\n  }\n\n  async execute(command) {\n    const { heroId, dragonId } = command;\n    const hero = this.repository.findOneById(+heroId);\n\n    hero.killEnemy(dragonId);\n    await this.repository.persist(hero);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "With this approach, every application state change is driven by the occurrence of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ". The logic is encapsulated in handlers. With this approach, we can simply add behavior like logging or persisting commands in the database (e.g., for diagnostics purposes).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Command handlers neatly encapsulate logic. While beneficial, the application structure is still not flexible enough, not ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "reactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ". To remedy this, we also introduce ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\nexport class HeroKilledDragonEvent {\n  constructor(\n    public readonly heroId: string,\n    public readonly dragonId: string,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\nexport class HeroKilledDragonEvent {\n  constructor(heroId, dragonId) {\n    this.heroId = heroId;\n    this.dragonId = dragonId;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Events are asynchronous. They are dispatched either by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "models");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " or directly using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ". In order to dispatch events, models have to extend the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "AggregateRoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](146, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "app-tabs", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\nexport class Hero extends AggregateRoot {\n  constructor(private readonly id: string) {\n    super();\n  }\n\n  killEnemy(enemyId: string) {\n    // logic\n    this.apply(new HeroKilledDragonEvent(this.id, enemyId));\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\nexport class Hero extends AggregateRoot {\n  constructor(id) {\n    super();\n    this.id = id;\n  }\n\n  killEnemy(enemyId) {\n    // logic\n    this.apply(new HeroKilledDragonEvent(this.id, enemyId));\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "apply()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " method does not dispatch events yet because there's no relationship between the model and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "EventPublisher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " class. How do we associate the model and the publisher? By using a publisher ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "mergeObjectContext()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " method inside our command handler.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](168, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\n@CommandHandler(KillDragonCommand)\nexport class KillDragonHandler implements ICommandHandler<KillDragonCommand> {\n  constructor(\n    private readonly repository: HeroRepository,\n    private readonly publisher: EventPublisher,\n  ) {}\n\n  async execute(command: KillDragonCommand) {\n    const { heroId, dragonId } = command;\n    const hero = this.publisher.mergeObjectContext(\n      await this.repository.findOneById(+heroId),\n    );\n    hero.killEnemy(dragonId);\n    hero.commit();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\n@CommandHandler(KillDragonCommand)\n@Dependencies(HeroRepository, EventPublisher)\nexport class KillDragonHandler {\n  constructor(repository, publisher) {\n    this.repository = repository;\n    this.publisher = publisher;\n  }\n\n  async execute(command) {\n    const { heroId, dragonId } = command;\n    const hero = this.publisher.mergeObjectContext(\n      await this.repository.findOneById(+heroId),\n    );\n    hero.killEnemy(dragonId);\n    hero.commit();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Now everything works as expected. Notice that we need to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "commit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " events since they're not being dispatched immediately. Obviously, an object doesn't have to exist up front. We can easily merge type context as well:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\nconst HeroModel = this.publisher.mergeContext(Hero);\nnew HeroModel('id');");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Now the model has the ability to publish events. Additionally, we can emit events manually using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\nthis.eventBus.publish(new HeroKilledDragonEvent());");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "blockquote", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " is an injectable class.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Each event can have multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Event Handlers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](207, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\n@EventsHandler(HeroKilledDragonEvent)\nexport class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {\n  constructor(private readonly repository: HeroRepository) {}\n\n  handle(event: HeroKilledDragonEvent) {\n    // logic\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Now we can move the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "write logic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " into the event handlers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Sagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "This type of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Event-Driven Architecture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " improves application ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "reactiveness and scalability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, ". Now, when we have events, we can simply react to them in various ways. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Sagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " are the final building block from an architectural point of view.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Sagas are an extremely powerful feature. A single saga may listen for 1..* events. Using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "RxJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " library, it can combine, merge, filter or apply other ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "RxJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " operators on the event stream. Each saga returns an Observable which contains a command. This command is dispatched ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "asynchronously");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](245, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "app-tabs", null, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "\n@Injectable()\nexport class HeroesGameSagas {\n  @Saga()\n  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {\n    return events$.pipe(\n      ofType(HeroKilledDragonEvent),\n      map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\n@Injectable()\nexport class HeroesGameSagas {\n  @Saga()\n  dragonKilled = (events$) => {\n    return events$.pipe(\n      ofType(HeroKilledDragonEvent),\n      map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "blockquote", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "ofType");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " operator is exported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "@nestjs/cqrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "We declared a rule - when any hero kills the dragon, the ancient item should be dropped. With this in place, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "DropAncientItemCommand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " will be dispatched and processed by the appropriate handler.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Queries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "CqrsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " can also be used for handling queries. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "QueryBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " follows the same pattern as the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "CommandsBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, ". Query handlers should implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "IQueryHandler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " interface and be marked with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "@QueryHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Finally, let's look at how to set up the whole CQRS mechanism.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](296, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "app-tabs", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\nexport const CommandHandlers = [KillDragonHandler, DropAncientItemHandler];\nexport const EventHandlers =  [HeroKilledDragonHandler, HeroFoundItemHandler];\n\n@Module({\n  imports: [CqrsModule],\n  controllers: [HeroesGameController],\n  providers: [\n    HeroesGameService,\n    HeroesGameSagas,\n    ...CommandHandlers,\n    ...EventHandlers,\n    HeroRepository,\n  ]\n})\nexport class HeroesGameModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "CommandBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "QueryBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " are ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Observables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, ". This means that you can easily subscribe to the whole stream and enrich your application with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Event Sourcing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

          var _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

          var _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](99);

          var _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](126);

          var _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](148);

          var _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](170);

          var _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](209);

          var _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](247);

          var _r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 37, "heroes-game.service", _r315.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r315.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r315.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 40, "kill-dragon.command", _r316.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r316.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r316.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](97, 43, "kill-dragon.handler", _r317.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r317.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r317.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](124, 46, "hero-killed-dragon.event", _r318.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r318.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r318.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](146, 49, "hero.model", _r319.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r319.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r319.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](168, 52, "kill-dragon.handler", _r320.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r320.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r320.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](207, 55, "hero-killed-dragon.handler", _r321.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](245, 58, "heroes-game.saga", _r322.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r322.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r322.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](296, 61, "heroes-game.module", _r323.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵCqrsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CqrsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CqrsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cqrs',
          templateUrl: './cqrs.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/crud/crud.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/crud/crud.component.ts ***!
    \***************************************************************/

  /*! exports provided: CrudComponent */

  /***/
  function srcAppHomepagePagesRecipesCrudCrudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudComponent", function () {
      return CrudComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var CrudComponent =
    /*#__PURE__*/
    function (_page_page_component_2) {
      _inherits(CrudComponent, _page_page_component_2);

      function CrudComponent() {
        _classCallCheck(this, CrudComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CrudComponent).apply(this, arguments));
      }

      return CrudComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CrudComponent.ɵfac = function CrudComponent_Factory(t) {
      return ɵCrudComponent_BaseFactory(t || CrudComponent);
    };

    CrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CrudComponent,
      selectors: [["app-crud"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 363,
      vars: 20,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/crud.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "crud-utilities"], [1, "warning"], ["appAnchor", "", "id", "overview"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Home"], ["routerLink", "/techniques/sql"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], [1, "filename"], ["appdeaa58ba9ea856d96991601c1c1acf7fa3904b34", ""], [1, "language-typescript"], ["app4b2d757ea05b814c150341ae676cc403217ba7eb", ""], ["app4b2cff7647090ff5aa319b360879feee3c88be36", ""], ["appd161c1627e86a8c37f17cc6bd1af63d347fc5207", ""], ["appAnchor", "", "id", "filtering-and-pagination"], [1, "language-json"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Requests"], ["appAnchor", "", "id", "relations"], [1, "info"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Controllers#join"], ["appAnchor", "", "id", "path-params-validation"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Controllers#params"], ["appAnchor", "", "id", "request-body-validation"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/typestack/class-validator#validation-groups"], ["appc71fdf9489e94f330cc084c28bb6947b8e1ccb8e", ""], ["appAnchor", "", "id", "routes-options"], ["appAnchor", "", "id", "documentation"]],
      template: function CrudComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CRUD utilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This chapter applies only to TypeScript.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "community package");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@nestjsx/crud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ") that helps you create database-centric Create/Read/Update/Delete (CRUD) controllers and services with ease, and provides a rich set of features for your RESTful API out-of-the-box:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Database agnostic extendable CRUD controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Query string parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Framework agnostic package with query builder for frontend usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Query, path params and DTO validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Overriding controller methods with ease");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tiny but powerful configuration (including global configuration)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Additional helper decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Swagger documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Currently ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "@nestjsx/crud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " only supports ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ". Other ORMs like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " will be included in the near future.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "In this chapter, you'll get an overview of how to create CRUD controllers and services using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ". Complete documentation is available at the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ". We assume that you have already successfully installed and set up the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "@nestjs/typeorm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " package. To learn more, see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Start by installing all required dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\nnpm i --save @nestjsx/crud @nestjsx/crud-typeorm typeorm class-transformer class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Assuming that you already have some ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "entities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " in your project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\nimport { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\n\n@Entity()\nexport class Hero {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column({ type: 'number' })\n  power: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "The first step is to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\nimport { Injectable } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { TypeOrmCrudService } from '@nestjsx/crud-typeorm';\nimport { Hero } from './hero.entity';\n\n@Injectable()\nexport class HeroesService extends TypeOrmCrudService<Hero> {\n  constructor(@InjectRepository(Hero) repo) {\n    super(repo);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "The next step is to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\nimport { Controller } from '@nestjs/common';\nimport { Crud } from '@nestjsx/crud';\nimport { Hero } from './hero.entity';\nimport { HeroesService } from './heroes.service';\n\n@Crud({\n  model: {\n    type: Hero,\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "And finally, we need to wire up everything in our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "app-tabs", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\nimport { Module } from '@nestjs/common';\nimport { TypeOrmModule } from '@nestjs/typeorm';\n\nimport { Hero } from './hero.entity';\nimport { HeroesService } from './heroes.service';\nimport { HeroesController } from './heroes.controller';\n\n@Module({\n  imports: [TypeOrmModule.forFeature([Hero])],\n  providers: [HeroesService],\n  controllers: [HeroesController],\n})\nexport class HeroesModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "HeroesModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "At this point, your application will have these newly created endpoints:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "GET /heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " - get many heroes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "GET /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " - get one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "POST /heroes/bulk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " - create many heroes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "POST /heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " - create one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "PATCH /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " - update one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "PUT /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " - replace one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "DELETE /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " - delete one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Filtering and pagination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " provides rich tools for filtering and pagination. Here's a sample HTTP REST request:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\nGET /heroes?select=name&filter=power||gt||90&sort=name,ASC&page=1&limit=3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "In this example, we:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "requested the list of heroes and selected only the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " attribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "filtered the list to include heroes with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "power");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " greater than 90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "limited the result set to 3 within page 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "sorted by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "ASC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "The response object would look like this:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\n{\n  \"data\": [\n    {\n      \"id\": 2,\n      \"name\": \"Batman\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Flash\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Superman\"\n    }\n  ],\n  \"count\": 3,\n  \"total\": 14,\n  \"page\": 1,\n  \"pageCount\": 5\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Primary columns persist in the resource response object whether they were requested or not. In our example, this is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " column.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "The complete list of query params and filter operators can be found in the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Relations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Relations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " is another powerful feature. In your CRUD controller, you can specify the list of an entity's relations which are allowed to fetch within your API calls:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "\n@Crud({\n  model: {\n    type: Hero,\n  },\n  join: {\n    profile: {\n      exclude: ['secret'],\n    },\n    faction: {\n      eager: true,\n      only: ['name'],\n    },\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "After specifying allowed relations in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "@Crud()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " decorator options, you can make the following request:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "blockquote", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " GET /heroes/25?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "=profile||address,bio\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "The response will contain a hero object with a joined profile which includes the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " columns.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "The response will also contain a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "faction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " object with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " column selected because it was set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "eager: true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " (and thus persists in every response).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "You can find more information about relations in the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "WiKi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Path params validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "By default, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " creates a slug with the name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " and validates it as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, ". You can modify this behavior if desired. Assume, your entity has a primary column ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " - a UUID string - and you need to use it as a slug for your endpoints. This can be done with the following options:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\n@Crud({\n  model: {\n    type: Hero,\n  },\n  params: {\n    _id: {\n      field: '_id',\n      type: 'uuid',\n      primary: true,\n    },\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "For more params options please see the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Request body validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Request body validation is performed out-of-the-box by applying the standard Nest ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "ValidationPipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " on each POST, PUT or PATCH request. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "model.type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "@Crud()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " decorator options is used as a DTO that describes validation rules.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "To do that properly we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "validation groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](314, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "app-tabs", null, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "\nimport { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { IsOptional, IsDefined, IsString, IsNumber } from 'class-validator';\nimport { CrudValidationGroups } from '@nestjsx/crud';\n\nconst { CREATE, UPDATE } = CrudValidationGroups;\n\n@Entity()\nexport class Hero {\n  @IsOptional({ always: true })\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @IsOptional({ groups: [UPDATE] })\n  @IsDefined({ groups: [CREATE] })\n  @IsString({ always: true })\n  @Column()\n  name: string;\n\n  @IsOptional({ groups: [UPDATE] })\n  @IsDefined({ groups: [CREATE] })\n  @IsNumber({}, { always: true })\n  @Column({ type: 'number' })\n  power: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Full support of separate DTO classes for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " actions is one of the main priorities for the next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " release.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Routes options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "You can disable or enable generation of specific routes by passing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "routes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, " options property to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "@Crud()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\n@Crud({\n  model: {\n    type: Hero,\n  },\n  routes: {\n    only: ['getManyBase'],\n    getManyBase: {\n      decorators: [UseGuards(HeroAuthGuard)],\n    },\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "You can apply any method decorators by passing them to the specific route ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " array. This is convenient when you want to add some decorators without overriding base methods.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "The examples in this chapter cover only some of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " features. You can find complete documentation on the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88);

          var _r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);

          var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114);

          var _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](127);

          var _r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](316);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](86, 5, "hero.entity", _r325.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](99, 8, "heroes.service", _r326.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](112, 11, "heroes.controller", _r327.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](125, 14, "heroes.module", _r328.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](314, 17, "hero.entity", _r329.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵCrudComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CrudComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-crud',
          templateUrl: './crud.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/documentation/documentation.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/documentation/documentation.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DocumentationComponent */

  /***/
  function srcAppHomepagePagesRecipesDocumentationDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
      return DocumentationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var DocumentationComponent =
    /*#__PURE__*/
    function (_page_page_component_3) {
      _inherits(DocumentationComponent, _page_page_component_3);

      function DocumentationComponent() {
        _classCallCheck(this, DocumentationComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentationComponent).apply(this, arguments));
      }

      return DocumentationComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) {
      return ɵDocumentationComponent_BaseFactory(t || DocumentationComponent);
    };

    DocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentationComponent,
      selectors: [["app-documentation"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 53,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/documentation.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "documentation"], ["appAnchor", "", "id", "setup"], [1, "language-bash"], ["appAnchor", "", "id", "generation"], ["rel", "nofollow", "target", "_blank", "href", "https://compodoc.app/guides/usage.html"], ["rel", "nofollow", "target", "_blank", "href", "http://localhost:8080"], ["src", "/assets/documentation-compodoc-1.jpg"], ["src", "/assets/documentation-compodoc-2.jpg"], ["appAnchor", "", "id", "contribute"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/compodoc/compodoc"]],
      template: function DocumentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Compodoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is a documentation tool for Angular applications. Since Nest and Angular share similar project and code structures, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Compodoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " works with Nest applications as well.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Setting up Compodoc inside an existing Nest project is very simple. Start by adding the dev-dependency with the following command in your OS terminal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n$ npm i -D @compodoc/compodoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Generation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Generate project documentation using the following command (npm 6 is required for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "npx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " support). See ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "the official documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " for more options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n$ npx compodoc -p tsconfig.json -s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Open your browser and navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "http://localhost:8080");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ". You should see an initial Nest CLI project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "You can participate and contribute to the Compodoc project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵDocumentationComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DocumentationComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-documentation',
          templateUrl: './documentation.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/hot-reload/hot-reload.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/hot-reload/hot-reload.component.ts ***!
    \***************************************************************************/

  /*! exports provided: HotReloadComponent */

  /***/
  function srcAppHomepagePagesRecipesHotReloadHotReloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotReloadComponent", function () {
      return HotReloadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var HotReloadComponent =
    /*#__PURE__*/
    function (_page_page_component_4) {
      _inherits(HotReloadComponent, _page_page_component_4);

      function HotReloadComponent() {
        _classCallCheck(this, HotReloadComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(HotReloadComponent).apply(this, arguments));
      }

      return HotReloadComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    HotReloadComponent.ɵfac = function HotReloadComponent_Factory(t) {
      return ɵHotReloadComponent_BaseFactory(t || HotReloadComponent);
    };

    HotReloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HotReloadComponent,
      selectors: [["app-hot-reload"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 164,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/hot-reload.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "hot-reload"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/webpack/webpack"], [1, "warning"], ["id", "with-cli"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/cli/overview"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "configuration"], [1, "language-typescript"], ["appAnchor", "", "id", "hot-module-replacement"], [1, "language-json"], ["id", "without-cli"], ["appAnchor", "", "id", "installation-1"], ["appAnchor", "", "id", "configuration-1"], ["appAnchor", "", "id", "hot-module-replacement-1"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/08-webpack"]],
      template: function HotReloadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hot Reload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The highest impact on your application's bootstrapping process is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "TypeScript compilation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". Fortunately, with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " HMR (Hot-Module Replacement), we don't need to recompile the entire project each time a change occurs. This significantly decreases the amount of time necessary to instantiate your application, and makes iterative development a lot easier.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Note that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " won't automatically copy your assets (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " files) to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "dist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " folder. Similarly, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " is not compatible with glob static paths (e.g., the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "entities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " property in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "TypeOrmModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ").\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "With CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "If you are using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ", the configuration process is pretty straightforward. The CLI wraps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ", which allows use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "HotModuleReplacementPlugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "First install the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n$ npm i --save-dev webpack-node-externals start-server-webpack-plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Once the installation is complete, create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "webpack-hmr.config.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " file in the root directory of your application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\nconst webpack = require('webpack');\nconst nodeExternals = require('webpack-node-externals');\nconst StartServerPlugin = require('start-server-webpack-plugin');\n\nmodule.exports = function(options) {\n  return {\n    ...options,\n    entry: ['webpack/hot/poll?100', './src/main.ts'],\n    watch: true,\n    externals: [\n      nodeExternals({\n        whitelist: ['webpack/hot/poll?100'],\n      }),\n    ],\n    plugins: [\n      ...options.plugins,\n      new webpack.HotModuleReplacementPlugin(),\n      new webpack.WatchIgnorePlugin([/\\.js$/, /\\.d\\.ts$/]),\n      new StartServerPlugin({ name: 'main.js' }),\n    ],\n  };\n};");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "This function takes the original object containing the default webpack configuration and returns a modified one with an applied ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "HotModuleReplacementPlugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " plugin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Hot-Module Replacement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "To enable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "HMR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ", open the application entry file (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ") and add the following webpack-related instructions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\ndeclare const module: any;\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n\n  if (module.hot) {\n    module.hot.accept();\n    module.hot.dispose(() => app.close());\n  }\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "To simplify the execution process, add a script to your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n\"start:dev\": \"nest build --watch --webpack --webpackPath webpack-hmr.config.js\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Now simply open your command line and run the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n$ npm run start:dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Without CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "If you are not using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, ", the configuration will be slightly more complex (will require more manual steps).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "First install the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n$ npm i --save-dev webpack webpack-cli webpack-node-externals ts-loader start-server-webpack-plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Once the installation is complete, create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "webpack.config.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " file in the root directory of your application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\nconst webpack = require('webpack');\nconst path = require('path');\nconst nodeExternals = require('webpack-node-externals');\nconst StartServerPlugin = require('start-server-webpack-plugin');\n\nmodule.exports = {\n  entry: ['webpack/hot/poll?100', './src/main.ts'],\n  watch: true,\n  target: 'node',\n  externals: [\n    nodeExternals({\n      whitelist: ['webpack/hot/poll?100'],\n    }),\n  ],\n  module: {\n    rules: [\n      {\n        test: /.tsx?$/,\n        use: 'ts-loader',\n        exclude: /node_modules/,\n      },\n    ],\n  },\n  mode: 'development',\n  resolve: {\n    extensions: ['.tsx', '.ts', '.js'],\n  },\n  plugins: [\n    new webpack.HotModuleReplacementPlugin(),\n    new StartServerPlugin({ name: 'server.js' }),\n  ],\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: 'server.js',\n  },\n};");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "This configuration tells webpack a few essential things about your application: location of the entry file, which directory should be used to hold ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "compiled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " files, and what kind of loader we want to use to compile source files. Generally, you should be able to use this file as-is, even if you don't fully understand all of the options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Hot-Module Replacement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "To enable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "HMR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, ", open the application entry file (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, ") and add the following webpack-related instructions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\ndeclare const module: any;\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n\n  if (module.hot) {\n    module.hot.accept();\n    module.hot.dispose(() => app.close());\n  }\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "To simplify the execution process, add a script to your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\n\"start:dev\": \"webpack --config webpack.config.js\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Now simply open your command line and run the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\n$ npm run start:dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵHotReloadComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](HotReloadComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotReloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hot-reload',
          templateUrl: './hot-reload.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/mongodb/mongodb.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/mongodb/mongodb.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MongodbComponent */

  /***/
  function srcAppHomepagePagesRecipesMongodbMongodbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MongodbComponent", function () {
      return MongodbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var MongodbComponent =
    /*#__PURE__*/
    function (_page_page_component_5) {
      _inherits(MongodbComponent, _page_page_component_5);

      function MongodbComponent() {
        _classCallCheck(this, MongodbComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(MongodbComponent).apply(this, arguments));
      }

      return MongodbComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    MongodbComponent.ɵfac = function MongodbComponent_Factory(t) {
      return ɵMongodbComponent_BaseFactory(t || MongodbComponent);
    };

    MongodbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MongodbComponent,
      selectors: [["app-mongodb"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 232,
      vars: 40,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/mongodb.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "mongodb-mongoose"], [1, ""], ["routerLink", "/techniques/mongodb"], ["rel", "nofollow", "target", "_blank", "href", "http://mongoosejs.com"], ["rel", "nofollow", "target", "_blank", "href", "https://www.mongodb.org/"], ["appAnchor", "", "id", "getting-started"], [1, "filename"], ["app4d37149deaa0a6b42a693e76292fe278b06f58f5", ""], [1, "language-typescript"], ["routerLink", "/fundamentals/async-components"], ["app3dfc07faac8f137ac900471f754d6c67158a13b4", ""], [1, "info"], ["app6d74c25a66154f33a13c77930f994a8f52908837", ""], ["appAnchor", "", "id", "model-injection"], ["rel", "nofollow", "target", "_blank", "href", "http://mongoosejs.com/docs/guide.html"], ["appd480a93c8965756ae3c9975a66bde50d3d72fd01", ""], ["appf7375d018349b7f6c1a065419f08ec0ee2e92108", ""], ["app2a3643ad0ff2b7de870d462e925d45cdfb882891", ""], ["appc095cdb746d4ff99cba3ed5e4eb6cb4316fd426e", ""], [1, "warning"]],
      template: function MongodbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MongoDB (Mongoose)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " In this article, you'll learn how to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DatabaseModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " package from scratch using custom components. As a consequence, this solution contains a lot of overhead that you can omit using ready to use and available out-of-the-box dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "@nestjs/mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " package. To learn more, see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " is the most popular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " object modeling tool.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "To start the adventure with this library we have to install all required dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n$ npm install --save mongoose\n$ npm install --save-dev @types/mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n$ npm install --save mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "The first step we need to do is to establish the connection with our database using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "connect()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " function. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "connect()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " function returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ", and therefore we have to create an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "async provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-tabs", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\nimport * as mongoose from 'mongoose';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: (): Promise<typeof mongoose> =>\n      mongoose.connect('mongodb://localhost/nest'),\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\nimport * as mongoose from 'mongoose';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: () => mongoose.connect('mongodb://localhost/nest'),\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Following best practices, we declared the custom provider in the separated file which has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "*.providers.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Then, we need to export these providers to make them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "accessible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " for the rest part of the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\nimport { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " decorator. Each class that would depend on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " async provider will wait until a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " is resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Model injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "With Mongoose, everything is derived from a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ". Let's define the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "CatSchema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\nimport * as mongoose from 'mongoose';\n\nexport const CatSchema = new mongoose.Schema({\n  name: String,\n  age: Number,\n  breed: String,\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "CatsSchema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " belongs to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "cats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " directory. This directory represents the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Now it's time to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\nimport { Connection } from 'mongoose';\nimport { CatSchema } from './schemas/cat.schema';\n\nexport const catsProviders = [\n  {\n    provide: 'CAT_MODEL',\n    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\nimport { CatSchema } from './schemas/cat.schema';\n\nexport const catsProviders = [\n  {\n    provide: 'CAT_MODEL',\n    useFactory: (connection) => connection.model('Cat', CatSchema),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " In the real-world applications you should avoid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "magic strings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ". Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "CAT_MODEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "DATABASE_CONNECTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " should be kept in the separated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " file.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "CAT_MODEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](178, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "app-tabs", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\nimport { Model } from 'mongoose';\nimport { Injectable, Inject } from '@nestjs/common';\nimport { Cat } from './interfaces/cat.interface';\nimport { CreateCatDto } from './dto/create-cat.dto';\n\n@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject('CAT_MODEL')\n    private readonly catModel: Model<Cat>,\n  ) {}\n\n  async create(createCatDto: CreateCatDto): Promise<Cat> {\n    const createdCat = new this.catModel(createCatDto);\n    return createdCat.save();\n  }\n\n  async findAll(): Promise<Cat[]> {\n    return this.catModel.find().exec();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\nimport { Injectable, Dependencies } from '@nestjs/common';\n\n@Injectable()\n@Dependencies('CAT_MODEL')\nexport class CatsService {\n  constructor(catModel) {\n    this.catModel = catModel;\n  }\n\n  async create(createCatDto) {\n    const createdCat = new this.catModel(createCatDto);\n    return createdCat.save();\n  }\n\n  async findAll() {\n    return this.catModel.find().exec();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "In the above example we have used the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " interface. This interface extends the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " from the mongoose package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\nimport { Document } from 'mongoose';\n\nexport interface Cat extends Document {\n  readonly name: string;\n  readonly age: number;\n  readonly breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "The database connection is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ", but Nest makes this process completely invisible for the end-user. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "CatModel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " class is waiting for the db connection, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " is delayed until model is ready to use. The entire application can start when each class is instantiated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Here is a final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](216, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\nimport { catsProviders } from './cats.providers';\nimport { DatabaseModule } from '../database/database.module';\n\n@Module({\n  imports: [DatabaseModule],\n  controllers: [CatsController],\n  providers: [\n    CatsService,\n    ...catsProviders,\n  ],\n})\nexport class CatsModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "blockquote", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          var _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

          var _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);

          var _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

          var _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142);

          var _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](180);

          var _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r333.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r333.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 22, "database.providers", _r334.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r334.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r334.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 25, "database.module", _r335.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](116, 28, "schemas/cat.schema", _r336.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](140, 31, "cats.providers", _r337.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r337.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r337.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](178, 34, "cats.service", _r338.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r338.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r338.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](216, 37, "cats.module", _r339.isJsActive), "\n");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵMongodbComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MongodbComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MongodbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mongodb',
          templateUrl: './mongodb.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/prisma/prisma.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/prisma/prisma.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PrismaComponent */

  /***/
  function srcAppHomepagePagesRecipesPrismaPrismaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrismaComponent", function () {
      return PrismaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var PrismaComponent =
    /*#__PURE__*/
    function (_page_page_component_6) {
      _inherits(PrismaComponent, _page_page_component_6);

      function PrismaComponent() {
        _classCallCheck(this, PrismaComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(PrismaComponent).apply(this, arguments));
      }

      return PrismaComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    PrismaComponent.ɵfac = function PrismaComponent_Factory(t) {
      return ɵPrismaComponent_BaseFactory(t || PrismaComponent);
    };

    PrismaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrismaComponent,
      selectors: [["app-prisma"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 210,
      vars: 16,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/prisma.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "prisma"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/features/"], [1, "warning"], ["appAnchor", "", "id", "dependencies"], [1, "language-bash"], ["appAnchor", "", "id", "setup-prisma"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/cloud/"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/docs/quickstart/"], [1, "language-yaml"], [1, "language-graphql"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/features/data-modeling/"], ["appAnchor", "", "id", "create-the-client"], ["rel", "nofollow", "target", "_blank", "href", "https://www.npmjs.com/package/graphql-cli"], ["appAnchor", "", "id", "integration"], [1, "filename"], ["app7df270afba2a475f0298af801d3f1f05c4a75083", ""], [1, "language-typescript"], ["appdb8e2d7c357ba4f1df852f262f2f0d13706f2b6f", ""], [1, "info"], ["routerLink", "/cli/overview"], ["appAnchor", "", "id", "usage"], ["appef26848d71854a61e38026effc0559f37e849522", ""], ["appca2231f0e9d5376b1b9f3e4aa3db809301d92eba", ""], ["appAnchor", "", "id", "example"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/22-graphql-prisma"]],
      template: function PrismaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " turns your database into a GraphQL API and enables the use of GraphQL as a universal query language for all databases. Instead of writing SQL or using a NoSQL API, you can query your database with GraphQL. In this chapter we won't go into details about Prisma, so head over to their website and have a look what ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " are available.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "blockquote", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " In this article, you'll learn how to integrate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " into the Nest framework. We assume that you are already familiar with the GraphQL concepts and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " module.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dependencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Firstly, we need to install the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n$ npm install --save prisma-binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Setup Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "While working with Prisma you can either host your own instance or use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prisma Cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ". In this introduction we are going to use the demo server provided by Prisma.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Install the Prisma CLI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "npm install -g prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Create a new service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "prisma init");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ", choose the demo server and follow the instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Deploy your service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "prisma deploy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "If you find yourself in trouble jump over to their ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Quick Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " section for further details. Eventually you should see two new files in your project directory, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "prisma.yaml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " configuration file:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\nendpoint: https://us1.prisma.sh/nest-f6ec12/prisma/dev\ndatamodel: datamodel.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "and automatically created data model, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "datamodel.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\ntype User {\n  id: ID! @unique\n  name: String!\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "blockquote", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " In the real-world applications you will create more complex data models. For more information about data modeling in Prisma click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "By typing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "prisma playground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " you can open the Prisma GraphQL playground.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Create the client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "There are a couple of ways to integrate a GraphQL API. We are going to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "GraphQL CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ", a command line tool for common GraphQL development workflows. To install the GraphQL CLI use the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n$ npm install -g graphql-cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Next, create your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ".graphqlconfig");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " in the root directory of the your Nest application:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n$ touch .graphqlconfig.yml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Put the following content into it:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\nprojects:\n  database:\n    schemaPath: src/prisma/prisma-types.graphql\n    extensions:\n      endpoints:\n        default: https://us1.prisma.sh/nest-f6ec12/prisma/dev\n      codegen:\n        - generator: prisma-binding\n          language: typescript\n          output:\n            binding: src/prisma/prisma.binding.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "To download your Prisma GraphQL schema to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "prisma/prisma-types.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " and create your Prisma client under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "prisma/prisma.binding.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ", run the following commands in your terminal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n$ graphql get-schema --project database\n$ graphql codegen --project database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Almost done. Now, let's create a module for our Prisma integration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](127, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\nimport { Injectable } from '@nestjs/common';\nimport { Prisma } from './prisma.binding';\n\n@Injectable()\nexport class PrismaService extends Prisma {\n  constructor() {\n    super({\n      endpoint: 'https://us1.prisma.sh/nest-f6ec12/prisma/dev',\n      debug: false,\n    });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Once ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "PrismaService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " is ready, we need to create a corresponding module.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\nimport { Module } from '@nestjs/common';\nimport { PrismaService } from './prisma.service';\n\n@Module({\n  providers: [PrismaService],\n  exports: [PrismaService],\n})\nexport class PrismaModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "blockquote", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " To create new modules and services in no time we can make use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ". To create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "PrismaModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "nest g module prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " and for the service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "nest g service prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "To use your new service we are going to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "PrismaModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " and inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "PrismaService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " into ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "UsersResolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](177, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "app-tabs", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\nimport { Module } from '@nestjs/common';\nimport { UsersResolver } from './users.resolver';\nimport { PrismaModule } from '../prisma/prisma.module';\n\n@Module({\n  imports: [PrismaModule],\n  providers: [UsersResolver],\n})\nexport class UsersModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Importing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "PrismaModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " makes exported ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "PrismaService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " available in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " context.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](196, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "app-tabs", null, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\nimport { Query, Resolver, Args, Info } from '@nestjs/graphql';\nimport { PrismaService } from '../prisma/prisma.service';\nimport { User } from '../graphql.schema';\n\n@Resolver()\nexport class UsersResolver {\n  constructor(private readonly prisma: PrismaService) {}\n\n  @Query('users')\n  async getUsers(@Args() args, @Info() info): Promise<User[]> {\n    return this.prisma.query.users(args, info);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "A slightly modified example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](129);

          var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142);

          var _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](179);

          var _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](127, 4, "prisma.service", _r341.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](140, 7, "prisma.module", _r342.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](177, 10, "users.module", _r343.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](196, 13, "users.resolver", _r344.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵPrismaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PrismaComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrismaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prisma',
          templateUrl: './prisma.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/recipes.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/homepage/pages/recipes/recipes.module.ts ***!
    \**********************************************************/

  /*! exports provided: RecipesModule */

  /***/
  function srcAppHomepagePagesRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesModule", function () {
      return RecipesModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cqrs/cqrs.component */
    "./src/app/homepage/pages/recipes/cqrs/cqrs.component.ts");
    /* harmony import */


    var _crud_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crud/crud.component */
    "./src/app/homepage/pages/recipes/crud/crud.component.ts");
    /* harmony import */


    var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./documentation/documentation.component */
    "./src/app/homepage/pages/recipes/documentation/documentation.component.ts");
    /* harmony import */


    var _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hot-reload/hot-reload.component */
    "./src/app/homepage/pages/recipes/hot-reload/hot-reload.component.ts");
    /* harmony import */


    var _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mongodb/mongodb.component */
    "./src/app/homepage/pages/recipes/mongodb/mongodb.component.ts");
    /* harmony import */


    var _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./prisma/prisma.component */
    "./src/app/homepage/pages/recipes/prisma/prisma.component.ts");
    /* harmony import */


    var _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./serve-static/serve-static.component */
    "./src/app/homepage/pages/recipes/serve-static/serve-static.component.ts");
    /* harmony import */


    var _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sql-sequelize/sql-sequelize.component */
    "./src/app/homepage/pages/recipes/sql-sequelize/sql-sequelize.component.ts");
    /* harmony import */


    var _sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sql-typeorm/sql-typeorm.component */
    "./src/app/homepage/pages/recipes/sql-typeorm/sql-typeorm.component.ts");
    /* harmony import */


    var _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./swagger/swagger.component */
    "./src/app/homepage/pages/recipes/swagger/swagger.component.ts");
    /* harmony import */


    var _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./terminus/terminus.component */
    "./src/app/homepage/pages/recipes/terminus/terminus.component.ts");

    var routes = [{
      path: 'sql-typeorm',
      component: _sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__["SqlTypeormComponent"],
      data: {
        title: 'SQL (TypeORM)'
      }
    }, {
      path: 'mongodb',
      component: _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__["MongodbComponent"],
      data: {
        title: 'MongoDB (Mongoose)'
      }
    }, {
      path: 'sql-sequelize',
      component: _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__["SqlSequelizeComponent"],
      data: {
        title: 'SQL (Sequelize)'
      }
    }, {
      path: 'cqrs',
      component: _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__["CqrsComponent"],
      data: {
        title: 'CQRS'
      }
    }, {
      path: 'swagger',
      component: _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__["SwaggerComponent"],
      data: {
        title: 'OpenAPI (Swagger)'
      }
    }, {
      path: 'prisma',
      component: _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__["PrismaComponent"],
      data: {
        title: 'Prisma'
      }
    }, {
      path: 'terminus',
      component: _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__["TerminusComponent"],
      data: {
        title: 'Health checks (Terminus)'
      }
    }, {
      path: 'documentation',
      component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"],
      data: {
        title: 'Documentation (Compodoc)'
      }
    }, {
      path: 'crud-utilities',
      redirectTo: '/controllers'
    }, {
      path: 'crud',
      redirectTo: '/controllers'
    }, {
      path: 'hot-reload',
      component: _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__["HotReloadComponent"],
      data: {
        title: 'Hot reload'
      }
    }, {
      path: 'serve-static',
      component: _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__["ServeStaticComponent"],
      data: {
        title: 'Serve Static'
      }
    }];

    var RecipesModule = function RecipesModule() {
      _classCallCheck(this, RecipesModule);
    };

    RecipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecipesModule
    });
    RecipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecipesModule_Factory(t) {
        return new (t || RecipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecipesModule, {
        declarations: [_sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__["SqlTypeormComponent"], _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__["SqlSequelizeComponent"], _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__["MongodbComponent"], _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__["SwaggerComponent"], _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__["PrismaComponent"], _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__["CqrsComponent"], _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__["HotReloadComponent"], _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__["TerminusComponent"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"], _crud_crud_component__WEBPACK_IMPORTED_MODULE_5__["CrudComponent"], _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__["ServeStaticComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__["SqlTypeormComponent"], _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__["SqlSequelizeComponent"], _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__["MongodbComponent"], _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__["SwaggerComponent"], _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__["PrismaComponent"], _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__["CqrsComponent"], _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__["HotReloadComponent"], _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__["TerminusComponent"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"], _crud_crud_component__WEBPACK_IMPORTED_MODULE_5__["CrudComponent"], _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__["ServeStaticComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/serve-static/serve-static.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/serve-static/serve-static.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ServeStaticComponent */

  /***/
  function srcAppHomepagePagesRecipesServeStaticServeStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServeStaticComponent", function () {
      return ServeStaticComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var ServeStaticComponent =
    /*#__PURE__*/
    function (_page_page_component_7) {
      _inherits(ServeStaticComponent, _page_page_component_7);

      function ServeStaticComponent() {
        _classCallCheck(this, ServeStaticComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ServeStaticComponent).apply(this, arguments));
      }

      return ServeStaticComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ServeStaticComponent.ɵfac = function ServeStaticComponent_Factory(t) {
      return ɵServeStaticComponent_BaseFactory(t || ServeStaticComponent);
    };

    ServeStaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServeStaticComponent,
      selectors: [["app-serve-static"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 53,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/serve-static.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "serve-static"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "bootstrap"], [1, "language-typescript"], ["appAnchor", "", "id", "summary"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/24-serve-static"]],
      template: function ServeStaticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Serve Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In order to serve static content like a Single Page Application (SPA) we can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ServeStaticModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "@nestjs/serve-static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " package.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First we need to install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n$ npm install --save @nestjs/serve-static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Once the installation process is done, we can import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ServeStaticModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "AppModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " and configure it by passing in a configuration object to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "forRoot()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\nimport { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { ServeStaticModule } from '@nestjs/serve-static';\nimport { join } from 'path';\n\n@Module({\n  imports: [\n    ServeStaticModule.forRoot({\n      rootPath: join(__dirname, '..', 'client'),\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "With this in place, build the static website and place its content in the location specified by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "rootPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵServeStaticComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ServeStaticComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServeStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-serve-static',
          templateUrl: './serve-static.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/sql-sequelize/sql-sequelize.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/sql-sequelize/sql-sequelize.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SqlSequelizeComponent */

  /***/
  function srcAppHomepagePagesRecipesSqlSequelizeSqlSequelizeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SqlSequelizeComponent", function () {
      return SqlSequelizeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var SqlSequelizeComponent =
    /*#__PURE__*/
    function (_page_page_component_8) {
      _inherits(SqlSequelizeComponent, _page_page_component_8);

      function SqlSequelizeComponent() {
        _classCallCheck(this, SqlSequelizeComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SqlSequelizeComponent).apply(this, arguments));
      }

      return SqlSequelizeComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SqlSequelizeComponent.ɵfac = function SqlSequelizeComponent_Factory(t) {
      return ɵSqlSequelizeComponent_BaseFactory(t || SqlSequelizeComponent);
    };

    SqlSequelizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SqlSequelizeComponent,
      selectors: [["app-sql-sequelize"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 187,
      vars: 20,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/sql-sequelize.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "sql-sequelize"], ["id", "this-chapter-applies-only-to-typescript"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/sequelize/sequelize"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/RobinBuschmann/sequelize-typescript"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], [1, "filename"], ["appfe13b18ee73ec8d18767aa3f83e878f9a7d73c36", ""], [1, "language-typescript"], [1, "warning"], ["appAnchor", "", "id", "model-injection"], ["app66d98cc4864883cc691f4425ea4d2d186f3255a3", ""], ["app7b6f4cbf5473ab557bc10e1347224f2a384ced43", ""], [1, ""], ["appa8b84f9749ab38c84d16e855f09a7fc5b843af04", ""], ["app5eaafd28f38154e5790128addba8e570c44151d1", ""]],
      template: function SqlSequelizeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SQL (Sequelize)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This chapter applies only to TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " is a popular Object Relational Mapper (ORM) written in a vanilla JavaScript, but there is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "sequelize-typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " TypeScript wrapper which provides a set of decorators and other extras for the base sequelize.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "To start the adventure with this library we have to install the following dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n$ npm install --save sequelize sequelize-typescript mysql2\n$ npm install --save-dev @types/sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The first step we need to do is create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " instance with an options object passed into the constructor. Also, we need to add all models (the alternative is to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "modelPaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " property) and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "sync()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " our database tables.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\nimport { Sequelize } from 'sequelize-typescript';\nimport { Cat } from '../cats/cat.entity';\n\nexport const databaseProviders = [\n  {\n    provide: 'SEQUELIZE',\n    useFactory: async () => {\n      const sequelize = new Sequelize({\n        dialect: 'mysql',\n        host: 'localhost',\n        port: 3306,\n        username: 'root',\n        password: 'password',\n        database: 'nest',\n      });\n      sequelize.addModels([Cat]);\n      await sequelize.sync();\n      return sequelize;\n    },\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Following best practices, we declared the custom provider in the separated file which has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*.providers.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Then, we need to export these providers to make them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "accessible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " for the rest part of the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\nimport { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " decorator. Each class that would depend on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " async provider will wait until a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " is resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Model injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " defines a table in the database. Instances of this class represent a database row. Firstly, we need at least one entity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\nimport { Table, Column, Model } from 'sequelize-typescript';\n\n@Table\nexport class Cat extends Model<Cat> {\n  @Column\n  name: string;\n\n  @Column\n  age: number;\n\n  @Column\n  breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " entity belongs to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "cats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " directory. This directory represents the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ". Now it's time to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\nimport { Cat } from './cat.entity';\n\nexport const catsProviders = [\n  {\n    provide: 'CATS_REPOSITORY',\n    useValue: Cat,\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "blockquote", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " In the real-world applications you should avoid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "magic strings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ". Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "CATS_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "SEQUELIZE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " should be kept in the separated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " file.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "In Sequelize, we use static methods to manipulate the data, and thus we created an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "alias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "CATS_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](147, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\nimport { Injectable, Inject } from '@nestjs/common';\nimport { CreateCatDto } from './dto/create-cat.dto';\nimport { Cat } from './cat.entity';\n\n@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject('CATS_REPOSITORY') private readonly catsRepository: typeof Cat) {}\n\n  async findAll(): Promise<Cat[]> {\n    return this.catsRepository.findAll<Cat>();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "The database connection is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ", but Nest makes this process completely invisible for the end-user. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "CATS_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " provider is waiting for the db connection, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " is delayed until repository is ready to use. The entire application can start when each class is instantiated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Here is a final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](171, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\nimport { catsProviders } from './cats.providers';\nimport { DatabaseModule } from '../database/database.module';\n\n@Module({\n  imports: [DatabaseModule],\n  controllers: [CatsController],\n  providers: [\n    CatsService,\n    ...catsProviders,\n  ],\n})\nexport class CatsModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          var _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);

          var _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109);

          var _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149);

          var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 5, "database.providers", _r347.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](85, 8, "cat.entity", _r348.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](107, 11, "cats.providers", _r349.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](147, 14, "cats.service", _r350.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](171, 17, "cats.module", _r351.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵSqlSequelizeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SqlSequelizeComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqlSequelizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sql-sequelize',
          templateUrl: './sql-sequelize.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/sql-typeorm/sql-typeorm.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/sql-typeorm/sql-typeorm.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SqlTypeormComponent */

  /***/
  function srcAppHomepagePagesRecipesSqlTypeormSqlTypeormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SqlTypeormComponent", function () {
      return SqlTypeormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var SqlTypeormComponent =
    /*#__PURE__*/
    function (_page_page_component_9) {
      _inherits(SqlTypeormComponent, _page_page_component_9);

      function SqlTypeormComponent() {
        _classCallCheck(this, SqlTypeormComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SqlTypeormComponent).apply(this, arguments));
      }

      return SqlTypeormComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SqlTypeormComponent.ɵfac = function SqlTypeormComponent_Factory(t) {
      return ɵSqlTypeormComponent_BaseFactory(t || SqlTypeormComponent);
    };

    SqlTypeormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SqlTypeormComponent,
      selectors: [["app-sql-typeorm"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 208,
      vars: 24,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/sql-typeorm.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "sql-typeorm"], ["id", "this-chapter-applies-only-to-typescript"], [1, ""], ["routerLink", "/techniques/sql"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/typeorm/typeorm"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], ["routerLink", "/fundamentals/async-components"], [1, "filename"], ["app535b76866fa1db98a28e54a18ff3b91f4d2dabba", ""], [1, "language-typescript"], [1, "warning"], ["app65e8da154e1b5e2e14f2a39fef212fa2556e7ca7", ""], ["appAnchor", "", "id", "repository-pattern"], ["app5e06b386596932c790cfb6a7bcb07d00322667d2", ""], ["appa0646c9248a851c1ddc4973a78510c6799ddd3ae", ""], ["app966de46010505708c35655c4bf9b06bc66b8ef5c", ""], ["app987076725ec524f6efa168917a42d07d41af33e2", ""]],
      template: function SqlTypeormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SQL (TypeORM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This chapter applies only to TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " In this article, you'll learn how to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DatabaseModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " package from scratch using custom providers mechanism. As a consequence, this solution contains a lot of overhead that you can omit using ready to use and available out-of-the-box dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "@nestjs/typeorm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " package. To learn more, see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " is definitely the most mature Object Relational Mapper (ORM) available in the node.js world. Since it's written in TypeScript, it works pretty well with the Nest framework.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "To start the adventure with this library we have to install all required dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n$ npm install --save typeorm mysql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "The first step we need to do is to establish the connection with our database using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "createConnection()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " function imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "typeorm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " package. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "createConnection()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " function returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ", and therefore we have to create an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "async provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\nimport { createConnection } from 'typeorm';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: async () => await createConnection({\n      type: 'mysql',\n      host: 'localhost',\n      port: 3306,\n      username: 'root',\n      password: 'root',\n      database: 'test',\n      entities: [\n          __dirname + '/../**/*.entity{.ts,.js}',\n      ],\n      synchronize: true,\n    }),\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Following best practices, we declared the custom provider in the separated file which has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*.providers.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Then, we need to export these providers to make them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "accessible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " for the rest of the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\nimport { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " decorator. Each class that would depend on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " async provider will wait until a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " is resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Repository pattern");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " supports the repository design pattern, thus each entity has its own Repository. These repositories can be obtained from the database connection.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "But firstly, we need at least one entity. We are going to reuse the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " entity from the official documentation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\nimport { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Photo {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ length: 500 })\n  name: string;\n\n  @Column('text')\n  description: string;\n\n  @Column()\n  filename: string;\n\n  @Column('int')\n  views: number;\n\n  @Column()\n  isPublished: boolean;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " entity belongs to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " directory. This directory represents the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "PhotoModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ". Now, let's create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\nimport { Connection, Repository } from 'typeorm';\nimport { Photo } from './photo.entity';\n\nexport const photoProviders = [\n  {\n    provide: 'PHOTO_REPOSITORY',\n    useFactory: (connection: Connection) => connection.getRepository(Photo),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " In the real-world applications you should avoid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "magic strings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, ". Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "PHOTO_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "DATABASE_CONNECTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " should be kept in the separated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " file.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Repository<Photo>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "PhotoService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](168, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\nimport { Injectable, Inject } from '@nestjs/common';\nimport { Repository } from 'typeorm';\nimport { Photo } from './photo.entity';\n\n@Injectable()\nexport class PhotoService {\n  constructor(\n    @Inject('PHOTO_REPOSITORY')\n    private readonly photoRepository: Repository<Photo>,\n  ) {}\n\n  async findAll(): Promise<Photo[]> {\n    return this.photoRepository.find();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "The database connection is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, ", but Nest makes this process completely invisible for the end-user. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "PhotoRepository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " is waiting for the db connection, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "PhotoService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " is delayed until repository is ready to use. The entire application can start when each class is instantiated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Here is a final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "PhotoModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](192, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "app-tabs", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\nimport { Module } from '@nestjs/common';\nimport { DatabaseModule } from '../database/database.module';\nimport { photoProviders } from './photo.providers';\nimport { PhotoService } from './photo.service';\n\n@Module({\n  imports: [DatabaseModule],\n  providers: [\n    ...photoProviders,\n    PhotoService,\n  ],\n})\nexport class PhotoModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "PhotoModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

          var _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

          var _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](113);

          var _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](135);

          var _r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](170);

          var _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](56, 6, "database.providers", _r353.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](76, 9, "database.module", _r354.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](111, 12, "photo.entity", _r355.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](133, 15, "photo.providers", _r356.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](168, 18, "photo.service", _r357.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](192, 21, "photo.module", _r358.isJsActive), "\n");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵSqlTypeormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SqlTypeormComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqlTypeormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sql-typeorm',
          templateUrl: './sql-typeorm.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/swagger/swagger.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/swagger/swagger.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SwaggerComponent */

  /***/
  function srcAppHomepagePagesRecipesSwaggerSwaggerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwaggerComponent", function () {
      return SwaggerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */
    "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");
    /* harmony import */


    var _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-courses/banner-courses.component */
    "./src/app/shared/components/banner-courses/banner-courses.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/banner-shop/banner-shop.component */
    "./src/app/shared/components/banner-shop/banner-shop.component.ts");

    var SwaggerComponent =
    /*#__PURE__*/
    function (_page_page_component_10) {
      _inherits(SwaggerComponent, _page_page_component_10);

      function SwaggerComponent() {
        _classCallCheck(this, SwaggerComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SwaggerComponent).apply(this, arguments));
      }

      return SwaggerComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SwaggerComponent.ɵfac = function SwaggerComponent_Factory(t) {
      return ɵSwaggerComponent_BaseFactory(t || SwaggerComponent);
    };

    SwaggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SwaggerComponent,
      selectors: [["app-swagger"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1213,
      vars: 5,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/swagger.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "openapi-swagger"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/specification/"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/swagger"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "bootstrap"], [1, "language-typescript"], ["src", "/assets/swagger1.png"], [1, "info"], ["appAnchor", "", "id", "route-parameters"], ["src", "/assets/swagger-dto.png"], ["href", "/recipes/swagger#plugin"], ["src", "/assets/swagger-dto2.png"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/specification/#schemaObject"], ["appAnchor", "", "id", "enums"], ["src", "/assets/enum_query.gif"], ["src", "/assets/enum_query_array.gif"], ["appAnchor", "", "id", "enums-schema"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/docs/specification/data-models/enums/"], [1, "language-yaml"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/RicoSuter/NSwag"], ["appAnchor", "", "id", "arrays"], ["appAnchor", "", "id", "circular-dependencies"], ["appAnchor", "", "id", "generics-and-interfaces"], ["appAnchor", "", "id", "raw-definitions"], ["appAnchor", "", "id", "extra-models"], ["appAnchor", "", "id", "oneof-anyof-allof"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/"], ["appAnchor", "", "id", "multiple-specifications"], ["src", "/assets/swagger-cats.png"], ["src", "/assets/swagger-dogs.png"], ["appAnchor", "", "id", "tags"], ["appAnchor", "", "id", "headers"], ["appAnchor", "", "id", "responses"], ["src", "/assets/swagger-response-type.png"], ["appAnchor", "", "id", "global-prefix"], ["appAnchor", "", "id", "security"], ["appAnchor", "", "id", "basic-authentication"], ["appAnchor", "", "id", "bearer-authentication"], ["appAnchor", "", "id", "oauth2-authentication"], ["appAnchor", "", "id", "file-upload"], ["routerLink", "/techniques/file-upload"], ["appAnchor", "", "id", "extensions"], ["appAnchor", "", "id", "decorators"], ["appAnchor", "", "id", "plugin"], [1, "warning"], ["routerLink", "/cli/overview"], [1, "language-javascript"], ["appAnchor", "", "id", "migration-to-40"], ["appAnchor", "", "id", "example"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/11-swagger"]],
      template: function SwaggerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OpenAPI (Swagger)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "OpenAPI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " specification is a language-agnostic definition format used to describe RESTful APIs. Nest provides a dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " which allows generating such a specification by leveraging decorators.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "To begin using it, we first install the required dependencies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n$ npm install --save @nestjs/swagger swagger-ui-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "If you use fastify, install ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "fastify-swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " instead of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "swagger-ui-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n$ npm install --save @nestjs/swagger fastify-swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Once the installation process is complete, open the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " file and initialize Swagger using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\nimport { NestFactory } from '@nestjs/core';\nimport { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  const options = new DocumentBuilder()\n    .setTitle('Cats example')\n    .setDescription('The cats API description')\n    .setVersion('1.0')\n    .addTag('cats')\n    .build();\n  const document = SwaggerModule.createDocument(app, options);\n  SwaggerModule.setup('api', app, document);\n\n  await app.listen(3000);\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " helps to structure a base document that conforms to the OpenAPI Specification. It provides several methods that allow setting such properties as title, description, version, etc. In order to create a full document (with all HTTP routes defined) we use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "createDocument()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " method of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " class. This method takes two arguments, an application instance and a Swagger options object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Once we create a document, we can call ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "setup()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " method. It accepts:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "the path to mount the Swagger UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "an application instance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "the document object instantiated above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Now you can run the following command to start the HTTP server:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n$ npm run start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "While the application is running, open your browser and navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "http://localhost:3000/api");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ". You should see the Swagger UI.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " automatically reflects all of your endpoints. Also, in order to display the Swagger UI, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "@nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " makes use of either ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "swagger-ui-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "fastify-swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " depending on the platform.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " To generate and download a Swagger JSON file, navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "http://localhost:3000/api-json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " in your browser (assuming that your Swagger documentation is available under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "http://localhost:3000/api");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, ").\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Route parameters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " searches for all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "@Body()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "@Query()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "@Param()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " decorators in route handlers to generate the API document. It also creates corresponding model definitions by taking advantage of reflection. Consider the following code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n@Post()\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " To explicitly set the body definition use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "@ApiBody()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " decorator (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "@nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " package).\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "CreateCatDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, ", the module definition will be created:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "As you can see, the definition is empty although the class has a few declared properties. In order to make the class properties visible to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ", we have to either annotate them with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " decorator or use a CLI plugin (read more in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " section) which will do it automatically:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\nimport { ApiProperty } from '@nestjs/swagger';\n\nexport class CreateCatDto {\n  @ApiProperty()\n  name: string;\n\n  @ApiProperty()\n  age: number;\n\n  @ApiProperty()\n  breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Consider using the Swagger plugin (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " section) which will automatically do it for you.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Let's open the browser and verify the generated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "CreateCatDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " model:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "In addition, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " decorator allows setting various ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Schema Object");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " properties:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\n@ApiProperty({\n  description: 'The age of a cat',\n  min: 1,\n  default: 1,\n})\nage: number;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Instead of explicitly typing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " you can use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "@ApiPropertyOptional()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " short-hand decorator.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "In order to explicitly set the type of the property, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " key:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\n@ApiProperty({\n  type: Number,\n})\nage: number;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Enums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "To identify an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ", we must manually set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " property on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " with an array of values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\n@ApiProperty({ enum: ['Admin', 'Moderator', 'User']})\nrole: UserRole;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Alternatively, define an actual TypeScript enum as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\nexport enum UserRole {\n  Admin = 'Admin',\n  Moderator = 'Moderator',\n  User = 'User',\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "You can then use the enum directly with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "@Query()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " parameter decorator in combination with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "@ApiQuery()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\n@ApiQuery({ name: 'role', enum: UserRole })\nasync filterByRole(@Query('role') role: UserRole = UserRole.User) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "isArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ", the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " can be selected as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "multi-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Enums schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "By default, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " property will add a raw definition of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "parameter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\nCatDetail:\n  type: 'object'\n  properties:\n    ...\n    - breed:\n        type: 'string'\n        enum:\n          - Persian\n          - Tabby\n          - Siamese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "The above specification works fine for most cases. However, if you are utilizing a tool that takes the specification as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " and generates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "client-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " code, you might run into a problem with the generated code containing duplicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "enums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, ". Consider the following code snippet: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\n// generated client-side code\nexport class CatDetail {\n   breed: CatDetailEnum;\n}\n\nexport class CatInformation {\n  breed: CatInformationEnum;\n}\n\nexport enum CatDetailEnum {\n  Persian = 'Persian',\n  Tabby = 'Tabby',\n  Siamese = 'Siamese'\n}\n\nexport enum CatInformationEnum {\n  Persian = 'Persian',\n  Tabby = 'Tabby',\n  Siamese = 'Siamese'\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " The above snippet is generated using a tool called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "NSwag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "You can see that now you have two ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "enums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " that are exactly the same. To address this issue, you can pass an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "enumName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " next to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " property in your decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "\nexport class CatDetail {\n   @ApiProperty({ enum: CatBreed, enumName: 'CatBreed' })\n   breed: CatBreed;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "enumName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " enables ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " to turn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "CatBreed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " into its own ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " which in turns makes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "CatBreed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " reusable. The specification will look like the following:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "code", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "\nCatDetail:\n  type: 'object'\n  properties:\n    ...\n    - breed:\n        schema:\n          $ref: '#/components/schemas/CatBreed'\nCatBreed:\n  type: string\n  enum:\n    - Persian\n    - Tabby\n    - Siamese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " Any ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "decorator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " that takes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " as a property will also take ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "enumName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Arrays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "When the property is an array, we must manually indicate the array type as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "\n@ApiProperty({ type: [String] })\nnames: string[];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " Consider using the Swagger plugin (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " section) which will automatically detect arrays.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Either include the type as the first element of an array (as shown above) or set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "isArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " property to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "app-banner-enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Circular dependencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "When you have circular dependencies between classes, use a lazy function to provide the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " with type information:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "\n@ApiProperty({ type: () => Node })\nnode: Node;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " Consider using the Swagger plugin (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " section) which will automatically detect circular dependencies.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Generics and interfaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Since TypeScript does not store metadata about generics or interfaces, when you use them in your DTOs, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " may not be able to properly generate model definitions at runtime. For instance, below code won't be correctly inspected by the Swagger module:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "\ncreateBulk(@Body() usersDto: CreateUserDto[])");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "In order to overcome this limitation, you can set the type explicitly:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "\n@ApiBody({ type: [CreateUserDto] })\ncreateBulk(@Body() usersDto: CreateUserDto[])");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Raw definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "In some specific scenarios (e.g. deeply nested arrays, matrices), you may want to describe your type by hand.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "\n@ApiProperty({\n  type: 'array',\n  items: {\n    type: 'array',\n    items: {\n      type: 'number',\n    },\n  },\n})\ncoords: number[][];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Likewise, in order to define your input/output content manually in controller classes, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " property:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "\n@ApiBody({\n  schema: {\n    type: 'array',\n    items: {\n      type: 'array',\n      items: {\n        type: 'number',\n      },\n    },\n  },\n})\nasync create(@Body() coords: number[][]) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Extra models");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "In order to define additional models that should be inspected by Swagger module, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "@ApiExtraModels()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "\n@ApiExtraModels(ExtraModel)\nexport class CreateCatDto {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Then, you can get the reference (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "$ref");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, ") to your model using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "getSchemaPath(ExtraModel)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "\n'application/vnd.api+json': {\n   schema: { $ref: getSchemaPath(ExtraModel) },\n},");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "oneOf, anyOf, allOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "In order to combine schemas, you can use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "oneOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "anyOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "allOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, " keywords (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "\n@ApiProperty({\n  oneOf: [\n    { $ref: getSchemaPath(Cat) },\n    { $ref: getSchemaPath(Dog) },\n  ],\n})\npet: Cat | Dog;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "getSchemaPath()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, " function is imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "@nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Dog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " must be defined as extra models using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "@ApiExtraModels()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, " decorator (at the class-level).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "h4", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Multiple specifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, " provides a way to support multiple specifications. In other words, you can serve different documentation, with different UIs, on different endpoints.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "To support multiple specifications, your application must be written with a modular approach. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "createDocument()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, " method takes in a 3rd argument, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "extraOptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, ", which is an object with a the property ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, " property has a value which is an array of modules.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "You can setup multiple specifications support as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "\nimport { NestFactory } from '@nestjs/core';\nimport { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  /**\n   * createDocument(application, configurationOptions, extraOptions);\n   *\n   * createDocument method takes in an optional 3rd argument \"extraOptions\"\n   * which is an object with \"include\" property where you can pass an Array\n   * of Modules that you want to include in that Swagger Specification\n   * E.g: CatsModule and DogsModule will have two separate Swagger Specifications which\n   * will be exposed on two different SwaggerUI with two different endpoints.\n   */\n\n  const options = new DocumentBuilder()\n    .setTitle('Cats example')\n    .setDescription('The cats API description')\n    .setVersion('1.0')\n    .addTag('cats')\n    .build();\n\n  const catDocument = SwaggerModule.createDocument(app, options, {\n    include: [CatsModule],\n  });\n  SwaggerModule.setup('api/cats', app, catDocument);\n\n  const secondOptions = new DocumentBuilder()\n    .setTitle('Dogs example')\n    .setDescription('The dogs API description')\n    .setVersion('1.0')\n    .addTag('dogs')\n    .build();\n\n  const dogDocument = SwaggerModule.createDocument(app, secondOptions, {\n    include: [DogsModule],\n  });\n  SwaggerModule.setup('api/dogs', app, dogDocument);\n\n  await app.listen(3000);\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Now you can start your server with the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "\n$ npm run start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "http://localhost:3000/api/cats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, " to see the Swagger UI for cats:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "In turn, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "http://localhost:3000/api/dogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " will expose the Swagger UI for dogs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "To attach a controller to a specific tag, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "@ApiTags(...tags)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "\n@ApiTags('cats')\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "h4", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Headers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "To define custom headers that are expected as part of the request, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "@ApiHeader()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "\n@ApiHeader({\n  name: 'X-MyHeader',\n  description: 'Custom header',\n})\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "h4", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Responses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "To define a custom HTTP response, we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "@ApiResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "\n@Post()\n@ApiResponse({ status: 201, description: 'The record has been successfully created.'})\n@ApiResponse({ status: 403, description: 'Forbidden.'})\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Nest provides a set of short-hand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "API response");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " decorators that inherit from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "@ApiResponse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "@ApiOkResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "@ApiCreatedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "@ApiBadRequestResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "@ApiUnauthorizedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "@ApiNotFoundResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "@ApiForbiddenResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "@ApiMethodNotAllowedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "@ApiNotAcceptableResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "@ApiRequestTimeoutResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "@ApiConflictResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "@ApiGoneResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "@ApiPayloadTooLargeResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "@ApiUnsupportedMediaTypeResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "@ApiUnprocessableEntityResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "@ApiInternalServerErrorResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "@ApiNotImplementedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "@ApiBadGatewayResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "@ApiServiceUnavailableResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "@ApiGatewayTimeoutResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "@ApiDefaultResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "\n@Post()\n@ApiCreatedResponse({ description: 'The record has been successfully created.'})\n@ApiForbiddenResponse({ description: 'Forbidden.'})\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "To specify a return model for a request, we must create a class and annotate all properties with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "\nexport class Cat {\n  @ApiProperty()\n  id: number;\n\n  @ApiProperty()\n  name: string;\n\n  @ApiProperty()\n  age: number;\n\n  @ApiProperty()\n  breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "Then, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, " model must be used in combination with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, " property of the response decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "\n@ApiTags('cats')\n@Controller('cats')\nexport class CatsController {\n  @Post()\n  @ApiCreatedResponse({\n    description: 'The record has been successfully created.',\n    type: Cat,\n  })\n  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {\n    return this.catsService.create(createCatDto);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "Let's open the browser and verify the generated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, " model:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](649, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "h4", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "Global prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "To ignore a global prefix for routes set through ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "setGlobalPrefix()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, ", use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "ignoreGlobalPrefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "\nconst document = SwaggerModule.createDocument(app, options, {\n  ignoreGlobalPrefix: true,\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "h4", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "Security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "To define which security mechanisms should be used for a specific operation, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "@ApiSecurity()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "\n@ApiSecurity('basic')\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "\nconst options = new DocumentBuilder().addSecurity('basic', {\n  type: 'http',\n  scheme: 'basic',\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "Some of the most popular authentication techniques are predefined (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "bearer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, ") and therefore you don't have to define security mechanisms manually as shown above.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](692, "app-banner-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "Basic authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "To enable basic authentication, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "@ApiBasicAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "\n@ApiBasicAuth()\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "\nconst options = new DocumentBuilder().addBasicAuth();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "h4", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "Bearer authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "To enable bearer authentication, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "@ApiBearerAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "\n@ApiBearerAuth()\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "\nconst options = new DocumentBuilder().addBearerAuth();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "h4", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "OAuth2 authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "To enable OAuth2, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "@ApiOAuth2()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "\n@ApiOAuth2(['pets:write'])\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, "\nconst options = new DocumentBuilder().addOAuth2();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "h4", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "File upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "You can enable file upload for a specific method with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "@ApiBody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, " decorator together with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "@ApiConsumes()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, ". Here's a full example using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "File Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, " technique:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "\n@UseInterceptors(FileInterceptor('file'))\n@ApiConsumes('multipart/form-data')\n@ApiBody({\n  description: 'List of cats',\n  type: FileUploadDto,\n})\nuploadFile(@UploadedFile() file) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, "Where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "FileUploadDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, " is defined as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "\nclass FileUploadDto {\n  @ApiProperty({ type: 'string', format: 'binary' })\n  file: any;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "h4", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "Extensions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "To add an Extension to a request use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "@ApiExtension()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, " decorator. The extension name must be prefixed with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "x-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "\n@ApiExtension('x-foo', { hello: 'world' })");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "h4", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "Decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "All of the available OpenAPI decorators have an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "Api");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, " prefix to distinguish them from the core decorators. Below is a full list of the exported decorators along with a designation of the level at which the decorator may be applied.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](798, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "@ApiOperation()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "@ApiResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "@ApiProduces()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "@ApiConsumes()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "@ApiBearerAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "@ApiOAuth2()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "@ApiBasicAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "@ApiSecurity()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "@ApiExtraModels()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "@ApiBody()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "@ApiParam()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "@ApiQuery()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "@ApiHeader()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "@ApiExcludeEndpoint()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "@ApiTags()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "@ApiPropertyOptional()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "@ApiHideProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "@ApiExtension()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "h4", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, "TypeScript's metadata reflection system has several limitations which make it impossible to, for instance, determine what properties a class consists of or recognize whether a given property is optional or required. However, some of these constraints can be addressed at compilation time. Nest provides a plugin that enhances the TypeScript compilation process to reduce the amount of boilerplate code required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "blockquote", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, " This plugin is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "opt-in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, ". If you prefer, you can declare all decorators manually, or only specific decorators where you need them.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "The Swagger plugin will automatically:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, "annotate all DTO properties with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, " unless ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](935, "@ApiHideProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, " is used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](938, "set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, " property depending on the question mark (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](943, "name?: string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, " will set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, "required: false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, " property depending on the type (supports arrays as well)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, " property based on the assigned default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "set several validation rules based on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](965, " decorators (if ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](967, "classValidatorShim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, " set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](971, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, "add a response decorator to every endpoint with a proper status and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](975, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, " (response model)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "Previously, if you wanted to provide an interactive experience with the Swagger UI,\nyou had to duplicate a lot of code to let the package knows how your models/components should be declared in the specification. For example, you could define a simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, "CreateUserDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, " class as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](984, "\nexport class CreateUserDto {\n  @ApiProperty()\n  email: string;\n\n  @ApiProperty()\n  password: string;\n\n  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })\n  roles: RoleEnum[] = [];\n\n  @ApiProperty({ required: false, default: true })\n  isEnabled?: boolean = true;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](986, "While it's not a big deal with medium-sized projects, it becomes pretty verbose & clunky once you have a large set of classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, "Now, with the Swagger plugin enabled, the above class definition can be declared simply:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "\nexport class CreateUserDto {\n  email: string;\n  password: string;\n  roles: RoleEnum[] = [];\n  isEnabled?: boolean = true;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, "The plugin adds appropriate decorators on the fly based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, "Abstract Syntax Tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, ". Hence, you no longer have to struggle with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, " decorators scattered throughout the entire project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "blockquote", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1002, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, " The plugin will automatically generate any missing swagger properties, but if you need to override them, you simply set them explicitly via ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1005, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1008, "In order to enable the plugin, simply open ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1010, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, " (if you use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1014, ") and add the following ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, "plugins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, " configuration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "code", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "\n{\n  \"collection\": \"@nestjs/schematics\",\n  \"sourceRoot\": \"src\",\n  \"compilerOptions\": {\n    \"plugins\": [\"@nestjs/swagger/plugin\"]\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "You can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1024, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, " property to customize the behavior of the plugin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "code", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, "\n\"plugins\": [\n  {\n    \"name\": \"@nestjs/swagger/plugin\",\n    \"options\": {\n      \"classValidatorShim\": false\n    }\n  }\n]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, " property has to fulfill the following interface:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "\nexport interface PluginOptions {\n  dtoFileNameSuffix?: string[];\n  controllerFileNameSuffix?: string[];\n  classValidatorShim?: boolean;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1040, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1044, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, "dtoFileNameSuffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051, "['.dto.ts', '.entity.ts']");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, "DTO (Data Transfer Object) files suffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, "controllerFileNameSuffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, ".controller.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, "Controller files suffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "classValidatorShim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "If set to true, the module will reuse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1073, "class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, " validation decorators (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1076, "@Max(10)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, " will add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1079, "max: 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, " to schema definition) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1082, "If you don't use the CLI but instead have a custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, " configuration, you can use this plugin in combination with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, "ts-loader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1088, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "code", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, "\ngetCustomTransformers: (program: any) => ({\n  before: [require('@nestjs/swagger/plugin').before({}, program)]\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "h4", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, "Migration to 4.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, "If you're currently using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1098, "@nestjs/swagger@3.*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, ", note the following breaking/API changes in version 4.0.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1101, "The following decorators have been changed/renamed:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1105, "@ApiModelProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, "@ApiModelPropertyOptional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, "@ApiPropertyOptional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, "@ApiResponseModelProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1118, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "@ApiResponseProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, "@ApiImplicitQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1124, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, "@ApiQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, "@ApiImplicitParam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1132, "@ApiParam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "@ApiImplicitBody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1136, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, "@ApiBody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1141, "@ApiImplicitHeader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1142, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, "@ApiHeader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1148, " is now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, "@ApiUseTags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1154, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, "@ApiTags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, " breaking changes (updated method signatures):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1164, "addTag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "addBearerAuth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "addOAuth2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, "setContactEmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, "setContact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1179, "setHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1180, " has been removed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, "setSchemes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1184, " has been removed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, "The following methods have been added:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1190, "addServer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1193, "addApiKey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "addBasicAuth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, "addSecurity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1202, "addSecurityRequirements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1204, "app-banner-shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("@ApiProperty({ required: false })");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](959);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@ApiOperation(", "{", " title: 'test' ", "}", ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@ApiOperation(", "{", " summary: 'test' ", "}", ")");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_3__["BannerEnterpriseComponent"], _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__["BannerCoursesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_6__["BannerShopComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵSwaggerComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SwaggerComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwaggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-swagger',
          templateUrl: './swagger.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/terminus/terminus.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/terminus/terminus.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TerminusComponent */

  /***/
  function srcAppHomepagePagesRecipesTerminusTerminusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminusComponent", function () {
      return TerminusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var TerminusComponent =
    /*#__PURE__*/
    function (_page_page_component_11) {
      _inherits(TerminusComponent, _page_page_component_11);

      function TerminusComponent() {
        _classCallCheck(this, TerminusComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(TerminusComponent).apply(this, arguments));
      }

      return TerminusComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    TerminusComponent.ɵfac = function TerminusComponent_Factory(t) {
      return ɵTerminusComponent_BaseFactory(t || TerminusComponent);
    };

    TerminusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TerminusComponent,
      selectors: [["app-terminus"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 242,
      vars: 32,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/terminus.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "health-checks-terminus"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/godaddy/terminus"], ["rel", "nofollow", "target", "_blank", "href", "https://kubernetes.io/"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/terminus"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], ["appAnchor", "", "id", "setting-up-a-health-check"], ["appAnchor", "", "id", "dns-health-check"], [1, "filename"], ["app3be3eb7af278581c52f0d0e60f0ce746b67eca1c", ""], [1, "language-typescript"], ["app1b754fe7e4d3f08376fef96c843f741682f7ade0", ""], [1, "info"], ["appAnchor", "", "id", "custom-health-indicator"], ["appc6e5d23e6cc193ab0cc9ae28719ace5f4868061b", ""], ["app3678e842ad498d2869ce6ba92dba38d58be2fffd", ""], ["appc40f025258fbf277ef87dfcd113ce927c9f681ec", ""], [1, "language-json"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/terminus/tree/master/sample"], ["appAnchor", "", "id", "custom-logger"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/techniques/logger"]],
      template: function TerminusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Health checks (Terminus)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " offers hooks to react on graceful shutdowns and supports you creating proper ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kubernetes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " readiness / liveness checks for any HTTP application. The module ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " integrates the terminus library with the Nest ecosystem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "To get started with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " we need to install the required dependencies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n$ npm install --save @nestjs/terminus @godaddy/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Setting up a health check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "A health check represents a summary of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "health indicators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". A health indicator executes a check of a service, whether it is in a healthy state or not. A health check is positive, if all the assigned health indicators are up and running. Because a lot of applications will need similar health indicators, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " provides a set of predefined health indicators, such as:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DNSHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "TypeOrmHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "MongooseHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "MicroserviceHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "MemoryHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "DiskHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "DNS Health Check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The first step to get started with our first health check, is to setup a service which will associate health indicators to an endpoint.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\nimport {\n  TerminusEndpoint,\n  TerminusOptionsFactory,\n  DNSHealthIndicator,\n  TerminusModuleOptions\n} from '@nestjs/terminus';\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class TerminusOptionsService implements TerminusOptionsFactory {\n  constructor(\n    private readonly dns: DNSHealthIndicator,\n  ) {}\n\n  createTerminusOptions(): TerminusModuleOptions {\n    const healthEndpoint: TerminusEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dns.pingCheck('google', 'https://google.com'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\nimport { Injectable, Dependencies } from '@nestjs/common';\nimport { DNSHealthIndicator } from '@nestjs/terminus';\n\n@Injectable()\n@Dependencies(DNSHealthIndicator)\nexport class TerminusOptionsService {\n  constructor(dns) {\n    this.dns = dns;\n  }\n\n  createTerminusOptions() {\n    const healthEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dns.pingCheck('google', 'https://google.com'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Once we have set up our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "TerminusOptionsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ", we can import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "TerminusModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "TerminusOptionsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " will provide the settings, which in turn will be used by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "TerminusModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\nimport { Module } from '@nestjs/common';\nimport { TerminusModule } from '@nestjs/terminus';\nimport { TerminusOptionsService } from './terminus-options.service';\n\n@Module({\n  imports: [\n    TerminusModule.forRootAsync({\n      useClass: TerminusOptionsService,\n    }),\n  ],\n})\nexport class ApplicationModule { }");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " If done correctly, Nest will expose the defined health check(s), which are reachable through a GET request to the defined route. For example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "curl -X GET 'http://localhost:3000/health'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Custom health indicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "In some cases, the predefined health indicators provided by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " do not cover all of your health check requirements. In this case you can set up a custom health indicator according to your needs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Let's get started by creating a service which will represent our custom health indicator. To get a basic understanding how a health indicator is structured, we will create an example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "DogHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ". This health indicator should have the state \"up\", if every ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Dog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " object has the type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "goodboy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, ", otherwise it will throw an error, which then the health indicator will be seen as \"down\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](127, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\nimport { Injectable } from '@nestjs/common';\nimport { HealthCheckError } from '@godaddy/terminus';\nimport { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';\n\nexport interface Dog {\n  name: string;\n  type: string;\n}\n\n@Injectable()\nexport class DogHealthIndicator extends HealthIndicator {\n  private readonly dogs: Dog[] = [\n    { name: 'Fido', type: 'goodboy' },\n    { name: 'Rex', type: 'badboy' },\n  ];\n\n  async isHealthy(key: string): Promise<HealthIndicatorResult> {\n    const badboys = this.dogs.filter(dog => dog.type === 'badboy');\n    const isHealthy = badboys.length === 0;\n    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });\n\n    if (isHealthy) {\n      return result;\n    }\n    throw new HealthCheckError('Dogcheck failed', result);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\nimport { Injectable } from '@nestjs/common';\nimport { HealthCheckError } from '@godaddy/terminus';\n\n@Injectable()\nexport class DogHealthIndicator extends HealthIndicator {\n  dogs = [\n    { name: 'Fido', type: 'goodboy' },\n    { name: 'Rex', type: 'badboy' },\n  ];\n\n  async isHealthy(key) {\n    const badboys = this.dogs.filter(dog => dog.type === 'badboy');\n    const isHealthy = badboys.length === 0;\n    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });\n\n    if (isHealthy) {\n      return result;\n    }\n    throw new HealthCheckError('Dogcheck failed', result);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "The next thing we need to do is registering the health indicator as a provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\nimport { Module } from '@nestjs/common';\nimport { TerminusModule } from '@nestjs/terminus';\nimport { TerminusOptionsService } from './terminus-options.service';\nimport { DogHealthIndicator } from './dog.health';\n\n@Module({\n  imports: [\n    TerminusModule.forRootAsync({\n      imports: [ApplicationModule],\n      useClass: TerminusOptionsService,\n    }),\n  ],\n  providers: [DogHealthIndicator],\n  exports: [DogHealthIndicator],\n})\nexport class ApplicationModule { }");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " In a real world application the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "DogHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " should be provided in a separate module, for example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "DogsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ", which then will be imported by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, ". But keep in mind to add the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "DogHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "exports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " array of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "DogModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " and add the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "DogModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " array of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "TerminusModule.forRootAsync()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " parameter object.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "The last required thing to do is to add the now available health indicator in the required health check endpoint. For that we go back to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "TerminusOptionsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " and implement it to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "/health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " endpoint.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](187, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\nimport {\n  TerminusEndpoint,\n  TerminusOptionsFactory,\n  DNSHealthIndicator,\n  TerminusModuleOptions\n} from '@nestjs/terminus';\nimport { Injectable } from '@nestjs/common';\nimport { DogHealthIndicator } from './dog.health';\n\n@Injectable()\nexport class TerminusOptionsService implements TerminusOptionsFactory {\n  constructor(\n    private readonly dogHealthIndicator: DogHealthIndicator\n  ) {}\n\n  createTerminusOptions(): TerminusModuleOptions {\n    const healthEndpoint: TerminusEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dogHealthIndicator.isHealthy('dog'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\nimport { DogHealthIndicator } from './dog.health';\nimport { Injectable, Dependencies } from '@nestjs/common';\n\n@Injectable()\n@Dependencies(DogHealthIndicator)\nexport class TerminusOptionsService {\n  constructor(dogHealthIndicator) {\n    this.dogHealthIndicator = dogHealthIndicator;\n  }\n\n  createTerminusOptions() {\n    const healthEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dogHealthIndicator.isHealthy('dog'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "If everything has been done correctly, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "/health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " endpoint should respond with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " response code and the following data.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\n{\n  \"status\": \"error\",\n  \"error\": {\n    \"dog\": {\n      \"status\": \"down\",\n      \"badboys\": 1\n    }\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "You can view working examples in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Custom Logger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " module automatically logs every error during a health check request. By default, it will use the globally defined Nest logger.\nYou can read more about the global logger in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Logger chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, ".\nIn some cases, you want to handle the logs of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " explicitly. In this case, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "TerminusModule.forRoot[Async]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " function offers an option\nfor a custom logger.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\n\nTerminusModule.forRootAsync({\n  logger: (message: string, error: Error) => console.error(message, error),\n  endpoints: [\n    ...\n  ]\n})\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "The logger can also be disabled by setting the logger option to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "\n\nTerminusModule.forRootAsync({\n  logger: null,\n  endpoints: [\n    ...\n  ]\n})\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

          var _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

          var _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](129);

          var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142);

          var _r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](66, 17, "terminus-options.service", _r361.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r361.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r361.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](94, 20, "app.module", _r362.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](127, 23, "dog.health", _r363.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r363.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r363.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](140, 26, "app.module", _r364.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](187, 29, "terminus-options.service", _r365.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", _r365.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !_r365.isJsActive);
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵTerminusComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TerminusComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terminus',
          templateUrl: './terminus.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=homepage-pages-recipes-recipes-module-es5.js.map