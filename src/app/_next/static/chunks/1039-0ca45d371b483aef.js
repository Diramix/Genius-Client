(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1039, 3276],
  {
    16636: function (e, t, i) {
      "use strict";
      i.d(t, {
        y: function () {
          return d;
        },
      });
      var n,
        a,
        s = i(98639),
        o = {
          5881: (e, t, i) => {
            function n() {
              for (var e, t, i = 0, n = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      n,
                      a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (n = e(t[i])) && (a && (a += " "), (a += n));
                      else for (i in t) t[i] && (a && (a += " "), (a += i));
                    }
                    return a;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            i.r(t), i.d(t, { clsx: () => n, default: () => a });
            let a = n;
          },
          2068: (e, t, i) => {
            i.r(t), i.d(t, { default: () => n });
            let n = {
              root: "eaYyesBmJL_NbkgoYR1c",
              focusable: "uL1dD5rxgI4bPmfyMMe7",
            };
          },
          6161: (e, t, i) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var n = i(810),
              a = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              r =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var n,
                s = {},
                c = null,
                d = null;
              for (n in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                o.call(t, n) && !l.hasOwnProperty(n) && (s[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === s[n] && (s[n] = t[n]);
              return {
                $$typeof: a,
                type: e,
                key: c,
                ref: d,
                props: s,
                _owner: r.current,
              };
            }
            (t.Fragment = s), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          2865: function (e, t, i) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SROnly = void 0);
            let a = i(9541),
              s = i(5881),
              o = i(810),
              r = n(i(2068));
            t.SROnly = (e) => {
              let { className: t, focusable: i, children: n, ...l } = e,
                c = (0, s.clsx)(
                  r.default.root,
                  { [r.default.focusable]: i },
                  t,
                );
              return (0, o.isValidElement)(n)
                ? (0, o.cloneElement)(n, {
                    ...l,
                    className: (0, s.clsx)(c, n.props.className),
                  })
                : (0, a.jsx)("span", { className: c, ...l, children: n });
            };
          },
          810: (e) => {
            e.exports = a || (a = i.t(s, 2));
          },
        },
        r = {};
      function l(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = (r[e] = { exports: {} });
        return o[e].call(i.exports, i, i.exports, l), i.exports;
      }
      (l.d = (e, t) => {
        for (var i in t)
          l.o(t, i) &&
            !l.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.SROnly = void 0),
        (n = l(2865)),
        Object.defineProperty(c, "SROnly", {
          enumerable: !0,
          get: function () {
            return n.SROnly;
          },
        });
      var d = c.SROnly;
      c.__esModule;
    },
    63955: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, i) => {
          let n = (n) => {
            let a = (n + e / 30) % 12;
            return (
              i -
              t * Math.min(i, 1 - i) * Math.max(-1, Math.min(a - 3, 9 - a, 1))
            );
          };
          return [n(0), n(8), n(4)];
        });
    },
    43055: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let n = i(83664),
        a = i(97456);
      (t.normalizeFrequency = (e) => Math.min(1, (0, a.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : n.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: i, collectionHue: a, energy: s, backgroundColor: o } = e,
            r = { collectionHue: (0, t.normalizeCollectionHue)(a) };
          return (
            i && (r.hue = i),
            s && (r.energy = (s + 1) * n.ENERGY_FACTOR),
            o && (r.backgroundColor = o),
            r
          );
        });
    },
    97456: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    83664: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_ENERGY =
          t.DEFAULT_COLLECTION_LIGHTNESS =
          t.DEFAULT_COLLECTION_SATURATION =
          t.DEFAULT_COLLECTION_HUE =
          t.DEFAULT_LIGHTNESS =
          t.DEFAULT_SATURATION =
          t.DEFAULT_HUE =
          t.MAX_FPS =
            void 0),
        (t.MAX_FPS = window.VIBE_ANIMATION_MAX_FPS ?? 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_ENERGY = 0.2),
        (t.ENERGY_FACTOR = 0.4);
    },
    47456: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let a = i(63955),
        s = i(97456),
        o = i(83664),
        r = i(80749);
      class l {
        get value() {
          return [
            this.bottomStart.value,
            this.middleStart.value,
            this.topStart.value,
            this.bottomEnd.value,
            this.middleEnd.value,
            this.topEnd.value,
          ];
        }
        update(e, t) {
          (this.hue = e), (this.collectionHue = t);
          let i = (0, a.adjustHue)(e),
            n = (0, a.safeHue)(i + (0, s.randomNumber)(40, 80), i),
            o = (0, a.adjustHue)(t);
          this.topStart.update(i),
            this.topEnd.update(
              (0, a.safeHue)(i + (0, s.randomNumber)(30, 40), i),
            ),
            this.middleStart.update(n),
            this.middleEnd.update(
              (0, a.safeHue)(n + (0, s.randomNumber)(30, 40), i),
            ),
            this.bottomStart.update(o),
            this.bottomEnd.update(
              (0, a.safeHue)(o + (0, s.randomNumber)(30, 40), i),
            );
        }
        next(e) {
          this.topStart.next(e),
            this.topEnd.next(e),
            this.middleStart.next(e),
            this.middleEnd.next(e),
            this.bottomStart.next(e),
            this.bottomEnd.next(e);
        }
        constructor(e) {
          n._(this, "hue", o.DEFAULT_HUE),
            n._(this, "collectionHue", o.DEFAULT_COLLECTION_HUE),
            n._(this, "topStart", void 0),
            n._(this, "topEnd", void 0),
            n._(this, "middleStart", void 0),
            n._(this, "middleEnd", void 0),
            n._(this, "bottomStart", void 0),
            n._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, a.adjustHue)(e),
            i = (0, a.safeHue)(t + (0, s.randomNumber)(30, 40), t);
          (this.topStart = new r.RGB(50)),
            (this.topEnd = new r.RGB(50)),
            (this.middleStart = new r.RGB(300)),
            (this.middleEnd = new r.RGB(320)),
            (this.bottomStart = new r.RGB(t)),
            (this.bottomEnd = new r.RGB(i));
        }
      }
      t.Color = l;
    },
    69407: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0);
      class a {
        clamp(e, t, i) {
          return Math.min(Math.max(e, t), i);
        }
        get value() {
          return this.formatter
            ? this.formatter(this.currentValue)
            : this.currentValue;
        }
        update(e) {
          (this.targetValue = e), (this.elapsedTime = 0);
        }
        next(e) {
          let t = this.clamp(this.elapsedTime / this.duration, 0, 1);
          return (
            (this.elapsedTime += e),
            (this.currentValue =
              this.currentValue + (this.targetValue - this.currentValue) * t),
            this.currentValue
          );
        }
        constructor(e, t, i, a) {
          n._(this, "currentValue", void 0),
            n._(this, "targetValue", void 0),
            n._(this, "elapsedTime", void 0),
            n._(this, "duration", void 0),
            n._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = i),
            (this.elapsedTime = 0),
            (this.formatter = a);
        }
      }
      t.DynamicValue = a;
    },
    19434: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let a = i(26716),
        s = i(43055),
        o = i(83664),
        r = i(52999),
        l = i(98355),
        c = i(61939),
        d = i(49198);
      class u {
        get rendererOptions() {
          return { alpha: !1, antialias: !1, preserveDrawingBuffer: !1 };
        }
        get vertexAndFragment() {
          return { vertex: r.VertexShaderV2, fragment: r.FragmentShaderV2 };
        }
        setupListeners() {
          window.addEventListener("resize", this.handleOnResize),
            document.addEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        createElement(e) {
          (e.innerHTML = ""), e.appendChild(this.renderer.gl.canvas);
        }
        createShader() {
          let e = this.renderer.gl,
            t = new a.Plane(e, { width: 2, height: 2 }),
            i = new a.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new a.Mesh(e, { geometry: t, program: i }).setParent(this.scene), i
          );
        }
        render() {
          if (window.VIBE_ANIMATION_DISABLE_RENDERING ?? false) return;
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyser),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnResize() {
          this.renderer.setSize(this.uniforms.width, this.uniforms.height);
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(l.RenderState.ACTIVE_TAB)
            : this.disableRender(l.RenderState.ACTIVE_TAB);
        }
        updateRenderingState() {
          Object.values(this.renderState).every((e) => e)
            ? this.ticker.start()
            : this.ticker.stop();
        }
        applySettings() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              hue: t,
              collectionHue: i,
              energy: n,
              backgroundColor: a,
            } = (0, s.normalizeSettings)(e);
          t && i && this.uniforms.updateColor(t, i),
            n && this.uniforms.updateEnergy(n),
            a && this.uniforms.updateBackgroundColor(a);
        }
        likeAnimation() {
          this.uniforms.updateReactTop(0.7),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0.7);
            }, 100),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0.7);
            }, 150),
            setTimeout(() => {
              this.uniforms.updateReactTop(0);
            }, 850),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0);
            }, 950),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0);
            }, 1050);
        }
        playAnimation(e) {
          this.uniforms.updatePlayingState(!0), this.applySettings(e);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(o.DEFAULT_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnResize &&
            window.removeEventListener("resize", this.handleOnResize),
            this.handleOnVisibilityChange &&
              document.removeEventListener(
                "visibilitychange",
                this.handleOnVisibilityChange,
              );
        }
        constructor(e, t, i) {
          n._(this, "analyser", void 0),
            n._(this, "ticker", void 0),
            n._(this, "scene", new a.Transform()),
            n._(this, "shader", void 0),
            n._(this, "renderer", void 0),
            n._(this, "uniforms", void 0),
            n._(this, "renderState", {
              [l.RenderState.ACTIVE_TAB]: !0,
              [l.RenderState.BLOCK_VISIBILITY]: !0,
              [l.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new d.Uniforms((0, s.normalizeCollectionHue)(i))),
            (this.renderer = new a.Renderer(this.rendererOptions)),
            (this.ticker = new c.Ticker(o.MAX_FPS, this.render.bind(this))),
            (this.analyser = t),
            this.createElement(e),
            (this.handleOnResize = this.handleOnResize.bind(this)),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnResize(),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
      }
      t.VibeAnimationRenderer = u;
    },
    80749: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let a = i(63955),
        s = i(83664),
        o = i(69407);
      class r {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, a.hsl2rgb)(e, s.DEFAULT_SATURATION, s.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          n._(this, "r", void 0),
            n._(this, "g", void 0),
            n._(this, "b", void 0);
          let t = (0, a.hsl2rgb)(e, s.DEFAULT_SATURATION, s.DEFAULT_LIGHTNESS);
          (this.r = new o.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new o.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new o.DynamicValue(t[2], t[2], 3e3));
        }
      }
      t.RGB = r;
    },
    61939: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0);
      class a {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            i = (n) => {
              this.requestId = requestAnimationFrame(i);
              let a = n - e;
              a >= t - 0.1 && ((e = n - (a % t)), this.render(a));
            };
          (this.isActive = !0), (this.requestId = requestAnimationFrame(i));
        }
        stop() {
          this.isActive &&
            ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
        constructor(e, t) {
          n._(this, "fps", void 0),
            n._(this, "render", void 0),
            n._(this, "isActive", !1),
            n._(this, "requestId", 0),
            (this.fps = e),
            (this.render = t);
        }
      }
      t.Ticker = a;
    },
    49198: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let a = i(26716),
        s = i(83664),
        o = i(47456),
        r = i(69407);
      class l {
        toValue(e) {
          return { value: e };
        }
        get width() {
          return Math.min(window.innerWidth * this.quality, 800);
        }
        get height() {
          let e = window.innerHeight / window.innerWidth;
          return Math.min(window.innerHeight * this.quality, 800 * e);
        }
        updatePlayingState(e) {
          (this.isPlaying = e),
            e
              ? (this.audioLowRatio.update(1),
                this.audioMiddleRatio.update(1),
                this.audioHighRatio.update(1))
              : (this.audioLowRatio.update(0),
                this.audioMiddleRatio.update(0),
                this.audioHighRatio.update(0));
        }
        updateColor(e, t) {
          this.color.update(e, t);
        }
        updateBackgroundColor(e) {
          this.background = new a.Vec3(e, e, e);
        }
        updateEnergy(e) {
          this.energy.update(e);
          this.trackEnergy.update(e);
        }
        updateReactTop(e) {
          this.reactTop.update(e);
        }
        updateReactMiddle(e) {
          this.reactMiddle.update(e);
        }
        updateReactBottom(e) {
          this.reactBottom.update(e);
        }
        updateTime(e) {
          let t = (this.energy.value * e) / 1e3;
          this.time = (this.time + t) % 86400;
        }
        update(e, t) {
          if (
            (this.trackEnergy.next(e),
            this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e),
            t)
          ) {
            let i = t.getAverageFrequencies({ low: 0, high: 450 }),
              a = t.getAverageFrequencies({ low: 400, high: 5e3 }),
              n = t.getAverageFrequencies({ low: 5e3, high: 16e3 });
            let intensity = (((i + a + n)/3) * (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT ?? 1));
            //console.debug(this.trackEnergy.value, this.energy.value, intensity);
            this.energy.update(this.trackEnergy.value + intensity);
            this.energy.next(e),
            this.trackEnergy.next(e),
            this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                i * this.audioLowRatio.value,
                a * this.audioMiddleRatio.value,
                n * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new a.Vec2(this.width, this.height)),
            vTime: this.toValue(this.time),
            vColorBackground: this.toValue(this.background),
            vColor: this.toValue(this.color.value),
            vRotation: this.toValue(this.rotation),
            vAudio: this.toValue(this.audio),
            vReact: this.toValue([
              this.reactTop.value,
              this.reactMiddle.value,
              this.reactBottom.value,
            ]),
            vInteractionPoint: this.toValue(this.point),
            vInteraction: this.toValue(this.interaction),
          };
        }
        constructor(e) {
          n._(this, "isPlaying", !1),
            n._(this, "quality", 0.6),
            n._(this, "background", new a.Vec3(0, 0, 0)),
            n._(
              this,
              "energy",
              new r.DynamicValue(s.DEFAULT_ENERGY, s.DEFAULT_ENERGY, 100),
            ),
              n._(
                  this,
                  "trackEnergy",
              new r.DynamicValue(s.DEFAULT_ENERGY, s.DEFAULT_ENERGY, 1e3),
            ),
            n._(this, "time", Math.floor(3600 * Math.random())),
            n._(this, "color", void 0),
            n._(this, "rotation", [
              new a.Vec3(-0.3, 0.3, 0.2),
              new a.Vec3(-0.3, -0.3, -0.2),
              new a.Vec3(-0.3, -0.3, 0.2),
            ]),
            n._(this, "audio", [0, 0, 0]),
            n._(this, "audioLowRatio", new r.DynamicValue(0, 0, 1e3)),
            n._(this, "audioMiddleRatio", new r.DynamicValue(0, 0, 1e3)),
            n._(this, "audioHighRatio", new r.DynamicValue(0, 0, 1e3)),
            n._(this, "reactTop", new r.DynamicValue(0, 0, 600)),
            n._(this, "reactMiddle", new r.DynamicValue(0, 0, 600)),
            n._(this, "reactBottom", new r.DynamicValue(0, 0, 600)),
            n._(this, "point", [0, 0]),
            n._(this, "interaction", 0),
            (this.color = new o.Color(e));
        }
      }
      t.Uniforms = l;
    },
    53367: function (e, t, i) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.kB = t.wX = void 0;
      var n = i(63955);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return n.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return n.adjustHue;
          },
        });
      var a = i(19434);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return a.VibeAnimationRenderer;
        },
      });
      var s = i(98355);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return s.RenderState;
        },
      });
      var o = i(83664);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return o.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return o.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    52999: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 =
          "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n"),
        (t.FragmentShaderV2 =
          "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.55;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.55;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");
    },
    98355: function (e, t) {
      "use strict";
      var i, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((n = i || (t.RenderState = i = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (n.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (n.MANUAL = "MANUAL");
    },
    26371: function (e, t, i) {
      "use strict";
      i.d(t, {
        DefaultLayout: function () {
          return tY;
        },
      });
      var n,
        a,
        s,
        o,
        r,
        l,
        c,
        d,
        u,
        m,
        p,
        _,
        h,
        x,
        v,
        f,
        g,
        b,
        y,
        C,
        j,
        k,
        S,
        N,
        w = i(9753),
        E = i(60836),
        L = i(9544),
        T = i(74717),
        R = i(69863),
        M = i(98639),
        P = (i(1263), i(37117), i(80542)),
        B = i(86939),
        O = i(79756),
        I = i.n(O);
      let A = (e) => {
          let { className: t, forwardRef: i } = e,
            { formatMessage: n } = (0, P.Z)();
          return (0, w.jsx)("section", {
            className: (0, E.W)(I().root, t),
            "aria-label": n({ id: "advert.banner" }),
            ref: i,
            children: (0, w.jsx)("div", {
              className: I().content,
              children: (0, w.jsx)(B.Image, {
                src: "https://avatars.mds.yandex.net/get-music-misc/40584/img.66a9fc7f94d5a534f46f0f87/orig",
              }),
            }),
          });
        },
        F = (0, M.forwardRef)((e, t) => (0, w.jsx)(A, { forwardRef: t, ...e }));
      var D = i(34152);
      let V = ["album", "users", "artist", "chart"],
        z = () => {
          let e = (0, T.usePathname)();
          return (0, M.useMemo)(() => {
            let [, t] = e.split("/");
            return !!t && V.includes(t);
          }, [e]);
        };
      var U = i(3924),
        W = i.n(U);
      W().secondaryEnter, W().secondaryEnterActive;
      let H = (0, L.Pi)((e) => {
        let { className: t, children: i } = e;
        (0, D.uK4)();
        let { setContentRef: n, setSideBannerRef: a } = (0, D.$Y6)(),
          { isFreemium: s } = (0, D.NMB)(),
          { settings: o } = (0, D.oR4)();
        return (
          o.layout,
          D.t8m.Mobile,
          z(),
          (0, M.useRef)(null),
          (0, w.jsxs)("div", {
            className: (0, E.W)(W().rootOld, t),
            children: [
              (0, w.jsx)("main", {
                className: W().main,
                ref: n,
                children: (0, w.jsx)(M.Suspense, { children: i }),
              }),
              s && (0, w.jsx)(F, { className: W().sideBanner, ref: a }),
            ],
          })
        );
      });
      var Z = i(40193),
        G = i(96622),
        q = i(89352),
        K = i(3084),
        Y = i(2570),
        J = i(81829),
        X = i.n(J);
      let Q = (0, L.Pi)((e) => {
          let { children: t, link: i } = e,
            {
              currentTrackInfo: { modal: n },
            } = (0, D.oR4)();
          return i
            ? (0, w.jsx)(K.rU, {
                className: X().link,
                href: i,
                onClick: n.close,
                children: (0, w.jsx)(Y.Caption, {
                  variant: "div",
                  size: "l",
                  children: t,
                }),
              })
            : (0, w.jsx)(Y.Caption, { variant: "div", size: "l", children: t });
        }),
        $ = (e) => {
          let { title: t, description: i, children: n, link: a } = e;
          return i || n
            ? (0, w.jsxs)("div", {
                className: X().infoBlock,
                children: [
                  t &&
                    (0, w.jsx)(Y.Heading, {
                      variant: "h4",
                      className: X().infoTitle,
                      children: t,
                    }),
                  (0, w.jsx)(Q, { link: a, children: i || n }),
                ],
              })
            : null;
        },
        ee = (0, L.Pi)(() => {
          var e, t;
          let { formatMessage: i } = (0, P.Z)(),
            { currentTrackInfo: n } = (0, D.oR4)(),
            { fullTrack: a } = n;
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)($, {
                children: null == a ? void 0 : a.shortDescription,
              }),
              (0, w.jsx)($, {
                title: i({ id: "entity-names.audiobook" }),
                description:
                  null == a
                    ? void 0
                    : null === (e = a.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == a
                    ? void 0
                    : null === (t = a.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        });
      var et = i(45919);
      let ei = (0, L.Pi)(() => {
          var e, t;
          let { formatMessage: i } = (0, P.Z)(),
            { currentTrackInfo: n } = (0, D.oR4)(),
            a = n.fullTrack,
            s = (0, M.useMemo)(
              () =>
                n.fullDescription
                  ? (0, w.jsx)("span", {
                      className: X().text,
                      dangerouslySetInnerHTML: {
                        __html: (0, et.SK)(n.fullDescription),
                      },
                    })
                  : null == a
                    ? void 0
                    : a.shortDescription,
              [null == a ? void 0 : a.shortDescription, n.fullDescription],
            );
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)($, { children: s }),
              (0, w.jsx)($, {
                title: i({ id: "entity-names.podcast" }),
                description:
                  null == a
                    ? void 0
                    : null === (e = a.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == a
                    ? void 0
                    : null === (t = a.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        }),
        en = (0, L.Pi)(() => {
          var e, t, i;
          let { formatMessage: n } = (0, P.Z)(),
            { notify: a } = (0, D.d$W)(),
            { contentRef: s } = (0, D.$Y6)(),
            {
              currentTrackInfo: o,
              settings: r,
              fullscreenPlayer: l,
            } = (0, D.oR4)(),
            { modal: c } = o,
            d = r.layout === D.t8m.Mobile,
            u = o.isUGC,
            m = r.platform === D.t4T.WINDOWS;
          u && o.isTrackIdle && o.getTrackMeta(),
            o.fullTrack || !o.isTrackIdle || u || o.getFullTrack(),
            !o.credits && o.isCreditsIdle && o.getCreditsInfo(),
            ((null === (e = o.fullTrack) || void 0 === e
              ? void 0
              : e.isTrackPodcast) ||
              (null === (i = o.fullTrack) || void 0 === i
                ? void 0
                : null === (t = i.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast)) &&
              o.getFullDescription(),
            (0, M.useEffect)(
              () => () => {
                c.close(), o.reset();
              },
              [o, c],
            );
          let p = (0, M.useCallback)(() => {
              c.close(), o.reset();
            }, [o, c]),
            _ = (0, M.useCallback)(
              (e) => {
                var t;
                e || o.reset(),
                  null === (t = c.onOpenChange) || void 0 === t || t.call(c, e);
              },
              [o, c],
            );
          o.isRejected &&
            (p(),
            a(
              (0, w.jsx)(K.Q, {
                error: n({ id: "error-messages.error-during-action" }),
              }),
              { containerId: D.W$x.ERROR },
            ));
          let h = o.fullTrack,
            x = null == h ? void 0 : h.isExplicit,
            v = null == h ? void 0 : h.trackExplicitMark,
            f = (0, M.useMemo)(() => {
              if (h)
                return (0, w.jsxs)("span", {
                  children: [
                    h.title,
                    h.version &&
                      (0, w.jsx)("span", {
                        className: X().version,
                        children: h.version,
                      }),
                    x &&
                      v &&
                      (0, w.jsx)(G.ExplicitMark, {
                        className: (0, E.W)(X().explicitMark, {
                          [X().explicit]: !h.isTrackNonMusic,
                        }),
                        iconSize: "xxs",
                        variant: v,
                      }),
                  ],
                });
            }, [h, v, x]),
            g = (0, M.useMemo)(() => {
              var e;
              return (null == h ? void 0 : h.type) === Z.Vc.AUDIOBOOK
                ? (0, w.jsx)(ee, {})
                : (null == h ? void 0 : h.isTrackPodcast) ||
                    (null == h
                      ? void 0
                      : null === (e = h.mainAlbum) || void 0 === e
                        ? void 0
                        : e.isPodcast)
                  ? (0, w.jsx)(ei, {})
                  : void 0;
            }, [h]),
            b = (0, M.useMemo)(() => {
              var e;
              return (
                null === (e = o.credits) || void 0 === e ? void 0 : e.length
              )
                ? o.credits.map((e) => {
                    let { title: t, value: i } = e;
                    return (0, w.jsx)($, { title: t, description: i }, t);
                  })
                : null;
            }, [o.credits]);
          return (0, w.jsx)(q.u, {
            placement: d ? "default" : "right",
            open: c.isOpened,
            onClose: p,
            contentClassName: X().modalContent,
            title: f,
            headerClassName: X().header,
            className: (0, E.W)(X().root, {
              [X().root_withFullscreen]: l.modal.isOpened,
              [X().root_withWindows]: m,
            }),
            overlayClassName: X().overlay,
            onOpenChange: _,
            labelClose: n({ id: "interface-actions.close" }),
            portalNode: d || l.modal.isOpened ? null : s,
            children: (0, w.jsxs)("div", {
              className: X().content,
              children: [
                (o.isTrackLoading || o.isTrackRejected) &&
                  (0, w.jsx)(K.AH, { textClassName: X().textShimmer }),
                g,
                (o.isCreditsLoading || o.isCreditsRejected) &&
                  (0, w.jsx)(K.AH, { textClassName: X().textShimmer }),
                b,
              ],
            }),
          });
        }),
        ea = (0, L.Pi)(() => {
          let { settings: e } = (0, D.oR4)();
          return e.layout === D.t8m.Mobile ? null : (0, w.jsx)(en, {});
        });
      var es = i(48508),
        eo = i.n(es);
      let er = (0, L.Pi)(() => {
        let { formatMessage: e } = (0, P.Z)(),
          { notify: t } = (0, D.d$W)(),
          { contentRef: i } = (0, D.$Y6)(),
          { trackLyrics: n, settings: a, fullscreenPlayer: s } = (0, D.oR4)(),
          { modal: o, track: r } = n,
          l = null == r ? void 0 : r.isExplicit,
          c = null == r ? void 0 : r.trackExplicitMark,
          d = a.layout === D.t8m.Mobile;
        n.isNeededToLoad && r && n.getLyrics(r.id),
          (0, M.useEffect)(
            () => () => {
              n.reset();
            },
            [n],
          ),
          (0, M.useEffect)(() => {
            o.isOpened &&
              r &&
              n.sendViews({
                trackId: String(r.id),
                albumId: String(r.albumId),
              });
          }, [n.isResolve, o.isOpened, n, r]);
        let u = (0, M.useCallback)(() => {
            o.close(), n.reset();
          }, [n, o]),
          m = (0, M.useCallback)(
            (e) => {
              var t;
              e || n.reset(),
                null === (t = o.onOpenChange) || void 0 === t || t.call(o, e);
            },
            [n, o],
          );
        n.isRejected &&
          (u(),
          t(
            (0, w.jsx)(K.Q, {
              error: e({ id: "error-messages.error-during-action" }),
            }),
            { containerId: D.W$x.ERROR },
          ));
        let p = (0, M.useMemo)(() => {
            if (r)
              return (0, w.jsxs)("span", {
                children: [
                  r.title,
                  r.version &&
                    (0, w.jsx)("span", {
                      className: eo().version,
                      children: r.version,
                    }),
                  l &&
                    c &&
                    (0, w.jsx)(G.ExplicitMark, {
                      className: eo().explicitMark,
                      iconSize: "xxs",
                      variant: c,
                    }),
                ],
              });
          }, [
            r,
            null == r ? void 0 : r.title,
            null == r ? void 0 : r.version,
            l,
            c,
          ]),
          _ = (0, M.useMemo)(
            () =>
              (n.isLoading || n.isRejected) && !n.isPrevTrack
                ? (0, w.jsx)(K.Yh, { count: 25, isActive: !0 })
                : (0, w.jsxs)(M.Fragment, {
                    children: [
                      n.lyrics,
                      (0, w.jsxs)("div", {
                        className: eo().writers,
                        children: [
                          n.hasWriters &&
                            (0, w.jsx)(Y.Caption, {
                              variant: "div",
                              size: "l",
                              weight: "medium",
                              children: e(
                                { id: "entity-names.authors" },
                                { authors: n.writersNames },
                              ),
                            }),
                          n.major &&
                            (0, w.jsx)(Y.Caption, {
                              variant: "div",
                              size: "l",
                              weight: "medium",
                              children: e(
                                { id: "entity-names.source" },
                                { source: n.major.name },
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
            [
              e,
              n.hasWriters,
              n.isLoading,
              n.isPrevTrack,
              n.isRejected,
              n.lyrics,
              n.major,
              n.writersNames,
            ],
          );
        return (0, w.jsx)(q.u, {
          size: "fitContent",
          placement: d ? "default" : "right",
          open: o.isOpened,
          onOpenChange: m,
          onClose: u,
          className: eo().root,
          contentClassName: eo().modalContent,
          portalNode: d || s.modal.isOpened ? null : i,
          title: p,
          headerClassName: eo().header,
          overlayClassName: eo().overlay,
          labelClose: e({ id: "interface-actions.close" }),
          restoreFocus: !0,
          children: (0, w.jsx)("div", { className: eo().content, children: _ }),
        });
      });
      var el = i(51952),
        ec = i(39513),
        ed = i(28852);
      ((n = a || (a = {})).RU = "ru"), (n.RB = "rb"), (n.OTHER = "other");
      var eu = i(49132),
        em = i.n(eu),
        ep = i(31014);
      let e_ = (e) => {
          let { className: t, faqProps: i } = e,
            { location: n } = (0, D.oR4)(),
            a = {
              nbsp: "\xa0",
              steps: (0, w.jsxs)("ul", {
                className: K.DF.list,
                children: [
                  (0, w.jsx)("li", {
                    className: K.DF.listITem,
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.faq-answer-cancel-until-end-step-1",
                      values: {
                        link: (0, w.jsx)(K.rU, {
                          className: K.DF.link,
                          href: "http://plus.yandex.".concat(n.tld, "/my"),
                          target: "_blank",
                          children: (0, w.jsx)(ep.Z, {
                            id: "paywall.faq-answer-cancel-until-end-step-1-link",
                          }),
                        }),
                      },
                    }),
                  }),
                  (0, w.jsx)("li", {
                    className: K.DF.listITem,
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.faq-answer-cancel-until-end-step-2",
                      values: { nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
            };
          return (0, w.jsxs)(K.dm, {
            className: t,
            ...i,
            children: [
              (0, w.jsx)(K.bm, {
                question: (0, w.jsx)(K.dg, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-question-without-card-binding",
                  }),
                }),
                answer: (0, w.jsx)(K.sB, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-answer-without-card-binding",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
              (0, w.jsx)(K.bm, {
                question: (0, w.jsx)(K.dg, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-question-afraid-forget-cancel",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, w.jsx)(K.sB, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-answer-afraid-forget-cancel",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
              (0, w.jsx)(K.bm, {
                question: (0, w.jsx)(K.dg, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-question-cancel-until-end",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, w.jsx)(K.sB, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-answer-cancel-until-end",
                    values: a,
                  }),
                }),
              }),
              (0, w.jsx)(K.bm, {
                question: (0, w.jsx)(K.dg, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-question-where-else-subscribe",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, w.jsx)(K.sB, {
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.faq-answer-where-else-subscribe",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          });
        },
        eh = (0, L.Pi)(() => {
          let { location: e } = (0, D.oR4)();
          return (0, w.jsx)(K.KV, {
            ageRestriction: "0+",
            links: [
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/yandex_plus_conditions/",
                ),
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall-footer.subscription-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/yandex_plus_privilege_list",
                ),
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall-footer.privileges-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(e.tld, "/legal/plus_loyalty/"),
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall-footer.cashback-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/plus_generalrules/",
                ),
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall-footer.promotion-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(e.tld, "/support/plus"),
                text: (0, w.jsx)(ep.Z, { id: "paywall-footer.support-link" }),
              },
            ],
          });
        });
      var ex = i(15986),
        ev = i.n(ex);
      let ef = (e) => {
        let { className: t } = e;
        return (0, w.jsx)("section", {
          className: (0, E.W)(ev().root, t),
          children: (0, w.jsx)("div", {
            className: ev().wrapper,
            children: (0, w.jsxs)("div", {
              className: ev().content,
              children: [
                (0, w.jsx)(Y.Heading, {
                  variant: "h1",
                  size: "xxl",
                  className: ev().title,
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.music-on-many-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, w.jsx)(Y.Caption, {
                  variant: "div",
                  size: "l",
                  weight: "normal",
                  className: ev().label,
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.recommendations-on-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, w.jsx)(K.hz, {
                  className: ev().buySubscriptionBlock,
                  mainText: "30 дней бесплатно",
                  shouldShowFixed: !0,
                }),
              ],
            }),
          }),
        });
      };
      var eg = i(958),
        eb = i.n(eg);
      let ey = () =>
        (0, w.jsxs)("div", {
          className: eb().root,
          children: [
            (0, w.jsx)(ef, { className: eb().topSection }),
            (0, w.jsx)(e_, { className: em().section_faq }),
            (0, w.jsx)(eh, {}),
          ],
        });
      var eC = i(32727),
        ej = i(93026),
        ek = i.n(ej);
      let eS = "content-anchor",
        eN = (e) => {
          let {
            className: t,
            shouldShowLabel: i = !0,
            anchorId: n = eS,
            children: a,
          } = e;
          return (0, w.jsxs)(eC.r, {
            className: (0, E.W)(ek().root, t),
            href: "#".concat(n),
            role: "button",
            children: [
              (0, w.jsx)("div", { className: ek().content, children: a }),
              i &&
                (0, w.jsx)(Y.Caption, {
                  variant: "span",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.more-info",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              (0, w.jsx)(ed.J, { variant: "arrowDown", size: "xs" }),
            ],
          });
        };
      var ew = i(65371),
        eE = i.n(ew);
      let eL = (e) => {
        let { className: t, moreInfoLinkProps: i } = e;
        return (0, w.jsxs)("section", {
          className: (0, E.W)(eE().root, t),
          children: [
            (0, w.jsx)("div", { className: eE().image }),
            (0, w.jsxs)("div", {
              className: eE().content,
              children: [
                (0, w.jsx)(Y.Heading, {
                  className: eE().title,
                  variant: "h1",
                  size: "xl",
                  weight: "bold",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.music-on-many-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, w.jsx)(Y.Caption, {
                  variant: "div",
                  size: "l",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.recommendations-on-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, w.jsx)(K.hz, {
                  className: eE().buySubscriptionBlock,
                  mainText: "30 дней бесплатно",
                  shouldShowFixed: !0,
                }),
                (0, w.jsx)(eN, {
                  ...i,
                  className: (0, E.W)(
                    eE().moreInfoLink,
                    null == i ? void 0 : i.className,
                  ),
                }),
              ],
            }),
          ],
        });
      };
      var eT = i(86682),
        eR = i.n(eT);
      let eM = () =>
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(eL, {
                className: eR().topSection,
                moreInfoLinkProps: { shouldShowLabel: !1 },
              }),
              (0, w.jsx)(e_, { faqProps: { id: eS } }),
              (0, w.jsx)(eh, {}),
            ],
          }),
        eP = (0, L.Pi)(() => {
          let { settings: e } = (0, D.oR4)();
          return e.layout === D.t8m.Mobile
            ? (0, w.jsx)(eM, {})
            : (0, w.jsx)(ey, {});
        });
      var eB = i(4444),
        eO = i.n(eB),
        eI = i(16636);
      let eA = () => {
        let { language: e } = (0, D.ZSk)();
        return "ru" === e ? "Ru" : "En";
      };
      var eF = i(83037),
        eD = i.n(eF);
      let eV = (e) => {
        let {
          variant: t = "horizontal",
          className: i,
          text: n,
          imageAlign: a = "center",
          imageSrc: s,
          image2xSrc: o,
        } = e;
        return (0, w.jsxs)("div", {
          className: (0, E.W)(eD().root, eD()["root_".concat(t)], i),
          children: [
            (0, w.jsx)("div", {
              className: eD().textContainer,
              children: (0, w.jsx)(Y.Heading, {
                variant: "h3",
                size: "xl",
                className: eD().text,
                children: n,
              }),
            }),
            (0, w.jsx)("div", {
              className: (0, E.W)(
                eD().imageContainer,
                eD()["imageContainer_align_".concat(a)],
              ),
              children: (0, w.jsx)(B.Image, {
                className: eD().image,
                src: s,
                srcSet: o ? "".concat(o, " 2x") : void 0,
                fit: "horizontal" === t ? "cover" : "none",
                "aria-hidden": !0,
              }),
            }),
          ],
        });
      };
      var ez = i(79588),
        eU = i.n(ez);
      let eW = (e) => {
        let {
          id: t,
          className: i,
          contentClassName: n,
          heading: a,
          content: s,
        } = e;
        return (0, w.jsxs)("section", {
          className: (0, E.W)(eU().root, i),
          id: t,
          children: [
            (0, w.jsx)("div", {
              className: eU().headingContainer,
              children: a,
            }),
            (0, w.jsx)("div", {
              className: (0, E.W)(eU().contentContainer, n),
              children: s,
            }),
          ],
        });
      };
      var eH = i(307),
        eZ = i.n(eH);
      let eG = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig",
          [a.RB]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig",
        },
        eq = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig",
          [a.RB]:
            "https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig",
        },
        eK = (e) => {
          let { className: t, variant: i = a.RU } = e,
            n = eA();
          return (0, w.jsx)(eW, {
            className: t,
            contentClassName: eZ()["content_".concat(i)],
            heading: (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(ed.J, {
                  variant: "kinopoisk".concat(n),
                  className: eZ()["logo_".concat(n.toLocaleLowerCase())],
                }),
                (0, w.jsx)(eI.y, {
                  children: (0, w.jsx)(Y.Heading, {
                    variant: "h2",
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.kinopoisk-part-title",
                    }),
                  }),
                }),
              ],
            }),
            content: (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(eV, {
                  className: eZ().card1,
                  variant: "vertical",
                  text: (0, w.jsx)(ep.Z, {
                    id: "paywall.kinopoisk-part-benefit-movies",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: eG[i],
                  image2xSrc: eq[i],
                }),
                (0, w.jsx)(eV, {
                  className: eZ().card2,
                  text: (0, w.jsx)(ep.Z, {
                    id: "paywall.kinopoisk-part-benefit-exclusive",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig",
                }),
                i === a.RU &&
                  (0, w.jsx)(eV, {
                    className: eZ().card3,
                    text: (0, w.jsx)(ep.Z, {
                      id: "paywall.kinopoisk-part-benefit-sport",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                    imageSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig",
                    image2xSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig",
                  }),
                (0, w.jsx)(eV, {
                  className: eZ().card4,
                  variant: "vertical",
                  text: (0, w.jsx)(ep.Z, {
                    id: "paywall.kinopoisk-part-benefit-channels",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageAlign: "right",
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig",
                }),
              ],
            }),
          });
        };
      var eY = i(50926),
        eJ = i.n(eY);
      let eX = (e) => {
        let { className: t, variant: i = a.RU } = e,
          n = eA(),
          s = (0, M.useMemo)(
            () =>
              i === a.RU
                ? (0, w.jsx)(ep.Z, {
                    id: "paywall.music-part-benefit-books",
                    values: { br: "\n", nbsp: "\xa0" },
                  })
                : (0, w.jsx)(ep.Z, {
                    id: "paywall.music-part-benefit-books-alternative",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
            [i],
          );
        return (0, w.jsx)(eW, {
          id: eS,
          className: t,
          contentClassName: eJ().content,
          heading: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(ed.J, {
                variant: "musicLogoCenter".concat(n),
                className: eJ()["logo_".concat(n.toLocaleLowerCase())],
              }),
              (0, w.jsx)(eI.y, {
                children: (0, w.jsx)(Y.Heading, {
                  variant: "h2",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.music-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(eV, {
                className: eJ().card1,
                variant: "vertical",
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-recommendations",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig",
              }),
              (0, w.jsx)(eV, {
                className: eJ().card2,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-many-devices",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig",
              }),
              (0, w.jsx)(eV, {
                className: eJ().card3,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-without-internet",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d7195a94b319a48169f8/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/49997/img.66703cb40b69011abc92e58a/orig",
              }),
              (0, w.jsx)(eV, {
                className: eJ().card4,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-playlists",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig",
              }),
              (0, w.jsx)(eV, {
                className: eJ().card5,
                variant: "vertical",
                text: s,
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig",
              }),
            ],
          }),
        });
      };
      var eQ = i(51100),
        e$ = i.n(eQ);
      let e0 = (e) => {
        let { className: t, variant: i = a.RU } = e,
          n = eA();
        return (0, w.jsx)(eW, {
          className: t,
          contentClassName: (0, E.W)(e$()["content_".concat(i)]),
          heading: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(ed.J, {
                variant: "yandexPlus".concat(n),
                className: e$()["logo_".concat(n.toLocaleLowerCase())],
              }),
              (0, w.jsx)(eI.y, {
                children: (0, w.jsx)(Y.Heading, {
                  variant: "h2",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.plus-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(eV, {
                className: e$().card1,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.plus-part-benefit-family",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig",
              }),
              (0, w.jsx)(eV, {
                className: e$().card2,
                variant: "vertical",
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.plus-part-benefit-cashback",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.6675647c9e1c4f13bd035c48/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.66756495fda47e2147b8b47c/orig",
              }),
              i === a.RU &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsx)(eV, {
                      className: e$().card3,
                      variant: "vertical",
                      text: (0, w.jsx)(ep.Z, {
                        id: "paywall.plus-part-benefit-daily",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageAlign: "right",
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564b99e1c4f13bd035c4c/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564d59e1c4f13bd035c4e/orig",
                    }),
                    (0, w.jsx)(eV, {
                      className: e$().card4,
                      text: (0, w.jsx)(ep.Z, {
                        id: "paywall.plus-part-benefit-plus-city",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564f79e1c4f13bd035c50/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/28592/img.667565109e1c4f13bd035c52/orig",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var e1 = i(65217),
        e3 = i.n(e1);
      let e4 = () =>
        (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(ef, { className: e3().topSection }),
            (0, w.jsx)(eX, { className: em().section, variant: a.RB }),
            (0, w.jsx)(eK, { className: em().section, variant: a.RB }),
            (0, w.jsx)(e0, { className: em().section, variant: a.RB }),
            (0, w.jsx)(e_, { className: em().section_faq }),
            (0, w.jsx)(eh, {}),
          ],
        });
      var e2 = i(16338),
        e5 = i.n(e2);
      let e6 = (e) => {
        let { className: t, text: i, imageSrc: n, image2xSrc: a } = e;
        return (0, w.jsxs)("div", {
          className: (0, E.W)(e5().root, t),
          children: [
            (0, w.jsx)(B.Image, {
              className: e5().image,
              src: n,
              srcSet: a ? "".concat(a, " 2x") : void 0,
              fit: "cover",
              "aria-hidden": !0,
            }),
            (0, w.jsx)(Y.Caption, {
              className: e5().text,
              variant: "span",
              size: "l",
              weight: "medium",
              children: i,
            }),
          ],
        });
      };
      var e9 = i(80824),
        e8 = i.n(e9);
      let e7 = (e) => {
        let {
          id: t,
          className: i,
          contentClassName: n,
          heading: a,
          content: s,
        } = e;
        return (0, w.jsxs)("section", {
          className: (0, E.W)(e8().root, i),
          id: t,
          children: [
            (0, w.jsx)("div", {
              className: e8().headingContainer,
              children: a,
            }),
            (0, w.jsx)("div", {
              className: (0, E.W)(e8().contentContainer, n),
              children: s,
            }),
          ],
        });
      };
      var te = i(72739),
        tt = i.n(te);
      let ti = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig",
          [a.RB]:
            "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig",
        },
        tn = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig",
          [a.RB]:
            "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig",
        },
        ta = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig",
          [a.RB]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig",
        },
        ts = {
          [a.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig",
          [a.RB]:
            "https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig",
        },
        to = (e) => {
          let { className: t, variant: i = a.RU } = e,
            n = eA();
          return (0, w.jsx)(e7, {
            className: t,
            contentClassName: tt()["content_".concat(i)],
            heading: (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(ed.J, {
                  variant: "kinopoisk".concat(n),
                  className: tt()["logo_".concat(n.toLocaleLowerCase())],
                }),
                (0, w.jsx)(eI.y, {
                  children: (0, w.jsx)(Y.Heading, {
                    variant: "h2",
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.kinopoisk-part-title",
                    }),
                  }),
                }),
              ],
            }),
            content: (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(e6, {
                  className: tt().card1,
                  text: (0, w.jsx)(ep.Z, {
                    id: "paywall.kinopoisk-part-benefit-movies",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: ti[i],
                  image2xSrc: tn[i],
                }),
                (0, w.jsx)(e6, {
                  className: tt().card2,
                  text: (0, w.jsx)(ep.Z, {
                    id: "paywall.kinopoisk-part-benefit-exclusive",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig",
                }),
                i === a.RU &&
                  (0, w.jsx)(e6, {
                    className: tt().card3,
                    text: (0, w.jsx)(ep.Z, {
                      id: "paywall.kinopoisk-part-benefit-sport",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                    imageSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig",
                    image2xSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig",
                  }),
                (0, w.jsx)(e6, {
                  className: (0, E.W)(tt().card4, tt()["card4_".concat(i)]),
                  text: (0, w.jsx)(ep.Z, {
                    id: "paywall.kinopoisk-part-benefit-channels",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: ta[i],
                  image2xSrc: ts[i],
                }),
              ],
            }),
          });
        };
      var tr = i(21707),
        tl = i.n(tr);
      let tc = (e) => {
        let { className: t, variant: i = a.RU } = e,
          n = eA(),
          s = (0, M.useMemo)(
            () =>
              i === a.RU
                ? (0, w.jsx)(ep.Z, {
                    id: "paywall.music-part-benefit-books",
                    values: { br: "\n", nbsp: "\xa0" },
                  })
                : (0, w.jsx)(ep.Z, {
                    id: "paywall.music-part-benefit-books-alternative",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
            [i],
          );
        return (0, w.jsx)(e7, {
          id: eS,
          className: t,
          contentClassName: tl().content,
          heading: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(ed.J, {
                variant: "musicLogoCenter".concat(n),
                className: tl()["logo_".concat(n.toLocaleLowerCase())],
              }),
              (0, w.jsx)(eI.y, {
                children: (0, w.jsx)(Y.Heading, {
                  variant: "h2",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.music-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(e6, {
                className: tl().card1,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-recommendations",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig",
              }),
              (0, w.jsx)(e6, {
                className: tl().card2,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-many-devices",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig",
              }),
              (0, w.jsx)(e6, {
                className: tl().card3,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-playlists",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig",
              }),
              (0, w.jsx)(e6, {
                className: tl().card4,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.music-part-benefit-without-internet",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig",
              }),
              (0, w.jsx)(e6, {
                className: tl().card5,
                text: s,
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig",
              }),
            ],
          }),
        });
      };
      var td = i(48681),
        tu = i.n(td);
      let tm = (e) => {
        let { className: t, variant: i = a.RU } = e,
          n = eA();
        return (0, w.jsx)(e7, {
          className: t,
          contentClassName: (0, E.W)(tu()["content_".concat(i)]),
          heading: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(ed.J, {
                variant: "yandexPlus".concat(n),
                className: tu()["logo_".concat(n.toLocaleLowerCase())],
              }),
              (0, w.jsx)(eI.y, {
                children: (0, w.jsx)(Y.Heading, {
                  variant: "h2",
                  children: (0, w.jsx)(ep.Z, {
                    id: "paywall.plus-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(e6, {
                className: tu().card1,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.plus-part-benefit-cashback",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.667566b2bd34a37baa15c5df/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/69699/img.667566d4fda47e2147b8b47e/orig",
              }),
              (0, w.jsx)(e6, {
                className: tu().card2,
                text: (0, w.jsx)(ep.Z, {
                  id: "paywall.plus-part-benefit-family",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig",
              }),
              i === a.RU &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsx)(e6, {
                      className: tu().card3,
                      text: (0, w.jsx)(ep.Z, {
                        id: "paywall.plus-part-benefit-daily",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/69699/img.66756747fda47e2147b8b480/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/49997/img.667567622f9df61336292f10/orig",
                    }),
                    (0, w.jsx)(e6, {
                      className: tu().card4,
                      text: (0, w.jsx)(ep.Z, {
                        id: "paywall.plus-part-benefit-plus-city",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667567a4cc842022e134a7d2/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667567bdcc842022e134a7d8/orig",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var tp = i(76071),
        t_ = i.n(tp);
      let th = () =>
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(eL, { className: t_().topSection }),
              (0, w.jsx)(tc, { className: em().section, variant: a.RB }),
              (0, w.jsx)(to, { className: em().section, variant: a.RB }),
              (0, w.jsx)(tm, { className: em().section, variant: a.RB }),
              (0, w.jsx)(e_, { className: em().section_faq }),
              (0, w.jsx)(eh, {}),
            ],
          }),
        tx = (0, L.Pi)(() => {
          let { settings: e } = (0, D.oR4)(),
            t = e.layout === D.t8m.Mobile;
          return (0, w.jsx)("div", {
            className: eO().root,
            children: t ? (0, w.jsx)(th, {}) : (0, w.jsx)(e4, {}),
          });
        });
      var tv = i(48852),
        tf = i.n(tv),
        tg = i(84691);
      function tb() {
        return (tb = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ty = function (e) {
        return tg.createElement(
          "svg",
          tb(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
              fill: "none",
            },
            e,
          ),
          tg.createElement(
            "g",
            { clipPath: "url(#clip0_4165_10094)" },
            s ||
              (s = tg.createElement("rect", {
                y: 0.5,
                width: 64,
                height: 64,
                rx: 32,
                fill: "white",
              })),
            o ||
              (o = tg.createElement("path", {
                d: "M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z",
                fill: "#FCCA00",
              })),
            r ||
              (r = tg.createElement("path", {
                d: "M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z",
                fill: "#FC3F1D",
              })),
            tg.createElement(
              "mask",
              {
                id: "mask0_4165_10094",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: 0,
                y: 0,
                width: 64,
                height: 65,
              },
              l ||
                (l = tg.createElement("ellipse", {
                  cx: 32,
                  cy: 32.5,
                  rx: 32,
                  ry: 32,
                  fill: "white",
                })),
            ),
            c ||
              (c = tg.createElement("g", { mask: "url(#mask0_4165_10094)" })),
            d ||
              (d = tg.createElement(
                "g",
                { clipPath: "url(#clip1_4165_10094)" },
                tg.createElement("rect", {
                  width: 63.9999,
                  height: 63.9999,
                  transform: "translate(0 0.5)",
                  fill: "black",
                }),
                tg.createElement("path", {
                  d: "M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z",
                  fill: "url(#paint0_radial_4165_10094)",
                }),
              )),
          ),
          u ||
            (u = tg.createElement(
              "defs",
              null,
              tg.createElement(
                "radialGradient",
                {
                  id: "paint0_radial_4165_10094",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)",
                },
                tg.createElement("stop", { offset: 0.5, stopColor: "#FF5500" }),
                tg.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip0_4165_10094" },
                tg.createElement("rect", {
                  y: 0.5,
                  width: 64,
                  height: 64,
                  rx: 32,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip1_4165_10094" },
                tg.createElement("rect", {
                  width: 63.9999,
                  height: 63.9999,
                  fill: "white",
                  transform: "translate(0 0.5)",
                }),
              ),
            )),
        );
      };
      function tC() {
        return (tC = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tj = function (e) {
        return tg.createElement(
          "svg",
          tC(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 188 54",
              fill: "none",
            },
            e,
          ),
          m ||
            (m = tg.createElement(
              "g",
              { clipPath: "url(#clip0_4001_171331)" },
              tg.createElement(
                "g",
                { clipPath: "url(#clip1_4001_171331)" },
                tg.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M137.195 3L185.195 3L185.195 22.0988L185.195 24L184.195 25.301C183.511 26.2398 182.837 27.1045 182.185 27.8726C181.003 29.2647 179.849 30.401 178.768 31.0768L178.766 31.0782C178.156 31.4577 177.464 31.7628 176.72 31.7665L176.715 31.7665C176.499 31.7665 176.274 31.7398 176.05 31.6768C175.587 31.5484 175.184 31.301 174.863 30.9674C174.548 30.6422 174.331 30.259 174.179 29.8695C173.881 29.1045 173.786 28.2047 173.785 27.2759L173.785 27.2739C173.786 25.3306 174.216 22.8849 174.772 20.4386C175.242 18.3727 175.815 16.2558 176.335 14.3805L168.656 11.7862L156.919 31.0893L155.075 30.4202L156.669 19.8772L149.817 17.5141L138.199 32.7801L137.199 33.9952L137.196 43.9992L138.196 42.5009L151.624 24.7655L149.55 39.8367L156.439 42.18L167.061 24.81L168.902 25.4857L168.706 26.7478C168.563 27.6667 168.4 28.8734 168.4 30.1737C168.4 31.3727 168.539 32.6166 168.931 33.7575C169.32 34.889 169.954 35.9136 170.962 36.732L170.963 36.7328C171.64 37.2803 172.508 37.7552 173.638 38.0965C174.361 38.3152 175.071 38.4161 175.771 38.4161C176.829 38.4161 177.887 38.1834 178.952 37.7386C180.018 37.2932 181.085 36.6345 182.147 35.7913C182.837 35.2436 183.52 34.621 184.195 33.9347L185.195 33L185.195 34.3397L185.195 51L137.195 51L137.195 45.4797L137.196 43.9992L137.195 34L137.195 3Z",
                  fill: "url(#paint0_linear_4001_171331)",
                }),
                tg.createElement("path", {
                  d: "M158.127 19.0598L149.426 16.0594L137.195 32.1306L137.195 46.0086L149.786 29.3808L148.226 40.7227L157.047 43.7231L167.529 26.5836C167.023 29.8262 166.188 37.1679 173.341 39.3291C177.575 40.6083 181.594 38.4842 185.195 34.8092L185.195 21.7653C181.673 27.1401 178.24 30.9934 176.454 30.4973C173.451 29.6631 176.157 19.9565 177.902 13.6965L177.929 13.5991L168.169 10.3028L156.567 29.3809L158.127 19.0598Z",
                  fill: "url(#paint1_linear_4001_171331)",
                }),
              ),
            )),
          p ||
            (p = tg.createElement("rect", {
              x: 137.2,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          _ ||
            (_ = tg.createElement(
              "g",
              { clipPath: "url(#clip2_4001_171331)" },
              tg.createElement("path", {
                d: "M151.595 3C135.595 3 119.595 3 103.595 3L103.595 51L151.595 51C151.595 35 151.595 19 151.595 3Z",
                fill: "#00ADFF",
              }),
              tg.createElement("path", {
                d: "M128.434 26.9405C130.643 15.2967 132.216 13.2774 137.038 13.6514C140.809 13.9438 145.194 19.3868 141.236 31.1478C137.424 42.4846 129.012 44.4997 122.9 40.8771C118.468 38.248 114.973 32.5712 113.651 29.4398C111.569 24.5165 110.474 19.1356 113.215 16.1995C115.459 13.7937 118.038 12.6342 122.9 18.1603C127.762 23.6863 128.434 26.9405 128.434 26.9405Z",
                fill: "white",
              }),
            )),
          h ||
            (h = tg.createElement("rect", {
              x: 103.6,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          x ||
            (x = tg.createElement(
              "g",
              { clipPath: "url(#clip3_4001_171331)" },
              tg.createElement("rect", {
                x: 69.9998,
                y: 3,
                width: 48,
                height: 48,
                rx: 24,
                fill: "#FFF500",
              }),
              tg.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M118 26.9193L100.791 33.6346L98.9655 50.4857C97.3633 50.8227 95.7022 51 93.9997 51C93.7473 51 93.4959 50.9961 93.2453 50.9884L94.8757 35.9432L88.679 38.3613L85.3056 49.3768C83.4998 48.6747 81.8001 47.7603 80.237 46.6644L81.9791 40.9759L76.2887 43.1965C74.9613 41.7457 73.8097 40.1313 72.8678 38.387L84.1162 33.9974L93.6081 3.00313C93.7384 3.00105 93.8689 3 93.9997 3C97.5223 3 100.868 3.75891 103.881 5.12215L101.487 27.2188L117.26 21.0635C117.737 22.9371 117.993 24.8988 118 26.9193ZM90.8162 31.3829L97.8635 8.37095L95.5709 29.5274L90.8162 31.3829Z",
                fill: "black",
              }),
            )),
          v ||
            (v = tg.createElement("rect", {
              x: 69.9998,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          f ||
            (f = tg.createElement(
              "g",
              { clipPath: "url(#clip4_4001_171331)" },
              tg.createElement(
                "g",
                { clipPath: "url(#clip5_4001_171331)" },
                tg.createElement("path", {
                  d: "M76.7965 20.739C76.7965 11.0998 72.6753 5.7795 66.2165 3.00031H36.4005V10.8199C39.0378 9.92937 41.804 9.4799 44.5876 9.48962C63.8854 9.48962 63.8413 30.1125 50.5313 43.4226C47.0157 46.9382 43.5765 49.3513 40.3619 51.0003H57.7341C69.1616 44.0887 76.7965 32.5997 76.7965 20.739Z",
                  fill: "#0000F7",
                }),
                tg.createElement("path", {
                  d: "M44.587 9.48966C41.8034 9.4799 39.0372 9.92937 36.3999 10.82V50.9999H40.3617C43.5764 49.3513 47.0151 46.9377 50.5312 43.4221C63.8407 30.1121 63.8848 9.48966 44.587 9.48966Z",
                  fill: "#161616",
                }),
                tg.createElement("path", {
                  d: "M66.216 3.00006C72.6748 5.77925 76.796 11.0995 76.796 20.7388C76.796 32.5995 69.1611 44.0884 57.734 50.9996H84.3995V3.00006H66.216Z",
                  fill: "white",
                }),
                tg.createElement("path", {
                  d: "M76.7965 20.739C76.7965 11.0998 72.6753 5.7795 66.2165 3.00031H36.4005V10.8199C39.0378 9.92937 41.804 9.4799 44.5876 9.48962C63.8854 9.48962 63.8413 30.1125 50.5313 43.4226C47.0157 46.9382 43.5765 49.3513 40.3619 51.0003H57.7341C69.1616 44.0887 76.7965 32.5997 76.7965 20.739Z",
                  fill: "url(#paint2_linear_4001_171331)",
                }),
                tg.createElement("path", {
                  d: "M44.587 9.48966C41.8034 9.4799 39.0372 9.92937 36.3999 10.82V50.9999H40.3617C43.5764 49.3513 47.0151 46.9377 50.5312 43.4221C63.8407 30.1121 63.8848 9.48966 44.587 9.48966Z",
                  fill: "url(#paint3_linear_4001_171331)",
                }),
              ),
            )),
          g ||
            (g = tg.createElement("rect", {
              x: 36.3998,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          b ||
            (b = tg.createElement(
              "g",
              { clipPath: "url(#clip6_4001_171331)" },
              tg.createElement(
                "g",
                { clipPath: "url(#clip7_4001_171331)" },
                tg.createElement("rect", {
                  x: 2.7998,
                  y: 26.9996,
                  width: 24,
                  height: 24,
                  fill: "white",
                }),
                tg.createElement("rect", {
                  x: 26.8007,
                  y: 26.9996,
                  width: 24,
                  height: 24,
                  fill: "black",
                }),
                tg.createElement("rect", {
                  x: 2.7998,
                  y: 3,
                  width: 48,
                  height: 24,
                  fill: "#FFCC00",
                }),
              ),
            )),
          y ||
            (y = tg.createElement("rect", {
              x: 2.7998,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          C ||
            (C = tg.createElement(
              "defs",
              null,
              tg.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_4001_171331",
                  x1: 161.195,
                  y1: -8.42203,
                  x2: 161.195,
                  y2: 55.5564,
                  gradientUnits: "userSpaceOnUse",
                },
                tg.createElement("stop", { stopColor: "#FFE55B" }),
                tg.createElement("stop", { offset: 1, stopColor: "#FFCC00" }),
              ),
              tg.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_4001_171331",
                  x1: 160.613,
                  y1: 2.25148,
                  x2: 161.41,
                  y2: 45.5632,
                  gradientUnits: "userSpaceOnUse",
                },
                tg.createElement("stop", { stopColor: "#3E3F3A" }),
                tg.createElement("stop", { offset: 1 }),
              ),
              tg.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_4001_171331",
                  x1: 76.7965,
                  y1: 27.0003,
                  x2: 36.4005,
                  y2: 27.0003,
                  gradientUnits: "userSpaceOnUse",
                },
                tg.createElement("stop", {
                  stopColor: "white",
                  stopOpacity: 0.25,
                }),
                tg.createElement("stop", {
                  offset: 1,
                  stopColor: "white",
                  stopOpacity: 0,
                }),
              ),
              tg.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_4001_171331",
                  x1: 31.5031,
                  y1: 32.725,
                  x2: 60.8884,
                  y2: 24.8512,
                  gradientUnits: "userSpaceOnUse",
                },
                tg.createElement("stop", {
                  stopColor: "#CADEF2",
                  stopOpacity: 0.2,
                }),
                tg.createElement("stop", {
                  offset: 0.0206,
                  stopColor: "#C3D6EA",
                  stopOpacity: 0.1959,
                }),
                tg.createElement("stop", {
                  offset: 0.167,
                  stopColor: "#96A4B2",
                  stopOpacity: 0.1666,
                }),
                tg.createElement("stop", {
                  offset: 0.3143,
                  stopColor: "#6F7982",
                  stopOpacity: 0.1371,
                }),
                tg.createElement("stop", {
                  offset: 0.4595,
                  stopColor: "#4F555B",
                  stopOpacity: 0.1081,
                }),
                tg.createElement("stop", {
                  offset: 0.602,
                  stopColor: "#36393D",
                  stopOpacity: 0.0796,
                }),
                tg.createElement("stop", {
                  offset: 0.7413,
                  stopColor: "#242627",
                  stopOpacity: 0.0517,
                }),
                tg.createElement("stop", {
                  offset: 0.8757,
                  stopColor: "#1A1A1A",
                  stopOpacity: 0.0249,
                }),
                tg.createElement("stop", {
                  offset: 1,
                  stopColor: "#161616",
                  stopOpacity: 0,
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip0_4001_171331" },
                tg.createElement("rect", {
                  x: 137.2,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip1_4001_171331" },
                tg.createElement("rect", {
                  width: 48,
                  height: 48,
                  fill: "white",
                  transform: "translate(137.195 3)",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip2_4001_171331" },
                tg.createElement("rect", {
                  x: 103.6,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip3_4001_171331" },
                tg.createElement("rect", {
                  x: 69.9998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip4_4001_171331" },
                tg.createElement("rect", {
                  x: 36.3998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip5_4001_171331" },
                tg.createElement("rect", {
                  x: 36.3998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip6_4001_171331" },
                tg.createElement("rect", {
                  x: 2.7998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tg.createElement(
                "clipPath",
                { id: "clip7_4001_171331" },
                tg.createElement("rect", {
                  x: 2.7998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
            )),
        );
      };
      function tk() {
        return (tk = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tS = function (e) {
        return tg.createElement(
          "svg",
          tk(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
              fill: "none",
            },
            e,
          ),
          j ||
            (j = tg.createElement("path", {
              d: "M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z",
              fill: "black",
            })),
          k ||
            (k = tg.createElement("path", {
              d: "M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z",
              fill: "#FED42B",
            })),
        );
      };
      function tN() {
        return (tN = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tw = function (e) {
          return tg.createElement(
            "svg",
            tN(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 64 65",
                fill: "none",
              },
              e,
            ),
            S ||
              (S = tg.createElement(
                "g",
                { clipPath: "url(#clip0_4032_54517)" },
                tg.createElement("rect", {
                  y: 0.5,
                  width: 64,
                  height: 64,
                  rx: 32,
                  fill: "white",
                }),
                tg.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z",
                  fill: "url(#paint0_linear_4032_54517)",
                }),
              )),
            N ||
              (N = tg.createElement(
                "defs",
                null,
                tg.createElement(
                  "linearGradient",
                  {
                    id: "paint0_linear_4032_54517",
                    x1: -0.000000253254,
                    y1: 28.2333,
                    x2: 64,
                    y2: 28.2333,
                    gradientUnits: "userSpaceOnUse",
                  },
                  tg.createElement("stop", { stopColor: "#FF5C4D" }),
                  tg.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  tg.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                tg.createElement(
                  "clipPath",
                  { id: "clip0_4032_54517" },
                  tg.createElement("rect", {
                    y: 0.5,
                    width: 64,
                    height: 64,
                    rx: 32,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        tE = i(53679),
        tL = i.n(tE);
      let tT = () =>
          (0, w.jsxs)("ul", {
            className: tL().services,
            children: [
              (0, w.jsxs)("li", {
                className: tL().service,
                children: [
                  (0, w.jsx)(ty, {
                    className: tL().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, w.jsx)(Y.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tL().serviceLabel,
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.plus-benefit-kinopoisk",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, w.jsxs)("li", {
                className: tL().service,
                children: [
                  (0, w.jsx)(tS, {
                    className: tL().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, w.jsx)(Y.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tL().serviceLabel,
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.plus-benefit-music",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, w.jsxs)("li", {
                className: tL().service,
                children: [
                  (0, w.jsx)(tw, {
                    className: tL().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, w.jsx)(Y.Heading, {
                    variant: "h2",
                    size: "m",
                    className: tL().serviceLabel,
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.plus-benefit-cashback",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
            ],
          }),
        tR = (e) => {
          let { className: t } = e,
            i = eA();
          return (0, w.jsxs)("section", {
            className: (0, E.W)(tL().root, t),
            children: [
              (0, w.jsxs)("div", {
                className: tL().main,
                children: [
                  (0, w.jsx)(ed.J, {
                    variant: "yandexPlus".concat(i),
                    className: (0, E.W)(
                      tL().logo,
                      tL()["logo_".concat(i.toLowerCase())],
                    ),
                  }),
                  (0, w.jsx)(Y.Heading, {
                    variant: "h1",
                    size: "xxxl",
                    weight: "bold",
                    className: tL().title,
                    children: (0, w.jsx)(ep.Z, {
                      id: "paywall.open-plus-benefits",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                  (0, w.jsx)(tT, {}),
                  (0, w.jsx)(K.hz, {
                    className: tL().buySubscriptionBlock,
                    mainText: "30 дней бесплатно",
                    additionText: "затем 100\xa0₽ в\xa0месяц ",
                    terms:
                      "Нажимая кнопку, вы соглашаетесь с оформлением подписки \xabЯндекс Плюс\xbb на условиях документа clck.ru/FMQND. Предусмотрено автопродление.",
                    shouldShowFixed: !0,
                  }),
                ],
              }),
              (0, w.jsx)(eN, {
                children: (0, w.jsx)(tj, {
                  className: tL().moreInfoChildren,
                  "aria-hidden": !0,
                }),
              }),
            ],
          });
        },
        tM = () =>
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(tR, {}),
              (0, w.jsx)(eX, { className: em().section }),
              (0, w.jsx)(eK, { className: em().section }),
              (0, w.jsx)(e0, { className: em().section }),
              (0, w.jsx)(e_, { className: em().section_faq }),
              (0, w.jsx)(eh, {}),
            ],
          }),
        tP = () =>
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(tR, {}),
              (0, w.jsx)(tc, { className: em().section }),
              (0, w.jsx)(to, { className: em().section }),
              (0, w.jsx)(tm, { className: em().section }),
              (0, w.jsx)(e_, { className: em().section_faq }),
              (0, w.jsx)(eh, {}),
            ],
          }),
        tB = (0, L.Pi)(() => {
          let { settings: e } = (0, D.oR4)(),
            t = e.layout === D.t8m.Mobile;
          return (0, w.jsx)("div", {
            className: tf().root,
            children: t ? (0, w.jsx)(tP, {}) : (0, w.jsx)(tM, {}),
          });
        }),
        tO = () => {
          let e = (0, T.useSearchParams)().get("paywall-country"),
            t = (0, M.useMemo)(() => {
              switch (e) {
                case a.RB:
                  return (0, w.jsx)(tx, {});
                case a.OTHER:
                  return (0, w.jsx)(eP, {});
                default:
                  return (0, w.jsx)(tB, {});
              }
            }, [e]);
          return (0, w.jsx)("div", {
            "data-buy-subscription-block-portal": !0,
            className: em().root,
            children: t,
          });
        };
      var tI = i(76099),
        tA = i.n(tI);
      let tF = (0, L.Pi)(() => {
        let {
            modals: { paywallModal: e },
          } = (0, D.oR4)(),
          { formatMessage: t } = (0, P.Z)();
        return (0, w.jsxs)(q.u, {
          open: e.isOpened,
          size: "fullscreen",
          placement: "center",
          showHeader: !1,
          onClose: e.close,
          onOpenChange: e.onOpenChange,
          closeOnOutsidePress: !1,
          className: tA().root,
          contentClassName: tA().content,
          children: [
            (0, w.jsx)("header", {
              className: tA().header,
              children: (0, w.jsx)(ec.z, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, w.jsx)(ed.J, { variant: "close", size: "xxs" }),
                className: tA().closeButton,
                onClick: e.close,
                "aria-label": t({ id: "interface-actions.close" }),
              }),
            }),
            (0, w.jsx)(tO, {}),
          ],
        });
      });
      var tD = i(72152),
        tV = i(68106),
        tz = i(47710),
        tU = i(52852),
        tW = i(80757),
        tH = i(69088),
        tZ = i(20121),
        tG = i(57900),
        tq = i(6494),
        tK = i.n(tq);
      let tY = (0, L.Pi)((e) => {
        var t, i, n;
        let { children: a } = e,
          s = (0, T.usePathname)(),
          o = (0, D.uK4)().get(D.U5t),
          {
            settings: r,
            experiments: l,
            communication: c,
            user: d,
          } = (0, D.oR4)();
        (0, D.HY3)();
        let u = r.layout === D.t8m.Mobile,
          m = r.layout !== D.t8m.Mobile,
          p =
            m &&
            (null === (t = c.list) || void 0 === t
              ? void 0
              : t.barBelow.isVisible) &&
            (null === (i = c.list) || void 0 === i
              ? void 0
              : i.barBelow.hasAnimationAlreadyBeenStarted),
          _ = r.platform === D.t4T.MACOS,
          h = r.platform === D.t4T.WINDOWS,
          x = l.checkExperiment(D.peG.WebNextTrackAboutModal, "on"),
          v = l.checkExperiment(D.peG.WebNextTrackLyrics, "on");
        return (0, w.jsxs)("div", {
          className: (0, E.W)(tK().root, {
            [tK().root_applicationPreserveTitleBar]: h,
            [tK().root_withBarBelow]: p,
          }),
          children: [
            (0, w.jsx)(el.wp, {
              className: (0, E.W)(tK().navbar, {
                [tK().navbar_application_macos]: _,
                [tK().navbar_application_windows]: h,
              }),
            }),
            (0, w.jsx)(H, {
              className: (0, E.W)(tK().content, {
                [tK().content_withPlayerBar]: u,
              }),
              children: (0, w.jsxs)(
                K.SV,
                {
                  fallback: tV.D,
                  children: [
                    a,
                    (0, w.jsx)(R.Notification, {
                      className: tK().notificationInfoContainer,
                      enableMultiContainer: !0,
                      containerId: D.W$x.INFO,
                      position: "bottom-center",
                    }),
                    (0, w.jsx)(R.Notification, {
                      className: tK().notificationErrorContainer,
                      enableMultiContainer: !0,
                      containerId: D.W$x.ERROR,
                      position: "bottom-center",
                      limit: 1,
                    }),
                  ],
                },
                s,
              ),
            }),
            (0, w.jsx)(tD.ev, { className: tK().playerBar }),
            m &&
              c.list &&
              (0, w.jsx)(tW.On, {
                className: tK().barBelow,
                barBelow: c.list.barBelow,
              }),
            (null === (n = c.list) || void 0 === n ? void 0 : n.modal) &&
              (0, w.jsx)(tH.IP, { modal: c.list.modal }),
            (0, w.jsx)(tD.Rt, {}),
            (0, w.jsx)(tZ.F8, {}),
            (0, w.jsx)(D.Lh6, {
              pageId: D.Rhz.TRAILER,
              children: (0, w.jsx)(tz._, {}),
            }),
            (0, w.jsx)(tU.D, {}),
            x && (0, w.jsx)(ea, {}),
            !d.hasPlus && (0, w.jsx)(tF, {}),
            v && (0, w.jsx)(er, {}),
            (0, w.jsx)(tG.Qw, {}),
            o.dev.panel && (0, w.jsx)(K.bs, {}),
          ],
        });
      });
    },
    40029: function (e, t, i) {
      "use strict";
      i.d(t, {
        k_: function () {
          return u.VibeButton;
        },
        xJ: function () {
          return u.VibeButtonShimmer;
        },
        op: function () {
          return c.VibeCard;
        },
        KW: function () {
          return o;
        },
        FF: function () {
          return l;
        },
        BV: function () {
          return d.useOnPinClick;
        },
        xF: function () {
          return r;
        },
      });
      var n = i(42288),
        a = i(84338),
        s = i(34152);
      let o = n.V5.model("Vibe", {
          title: n.V5.optional(n.V5.string, ""),
          header: n.V5.optional(n.V5.string, ""),
          subtitle: n.V5.maybe(n.V5.string),
          stationId: n.V5.string,
          seeds: n.V5.array(n.V5.string),
          idForFrom: n.V5.maybe(n.V5.string),
          imageUrl: n.V5.maybe(n.V5.string),
          animationUrl: n.V5.maybe(n.V5.string),
          backgroundImageUrl: n.V5.maybe(n.V5.string),
          backgroundColor: n.V5.maybe(n.V5.string),
          colors: n.V5.maybe(
            n.V5.model({
              average: n.V5.maybe(n.V5.string),
              waveText: n.V5.maybe(n.V5.string),
            }),
          ),
        })
          .views((e) => ({
            get context() {
              if (e.seeds && (e.stationId !== s.sHr || e.seeds.length > 1))
                return e.title;
              return null;
            },
            get pinId() {
              return (0, a.$k)(e.seeds);
            },
            get isPinned() {
              if (!(0, n.fh)(e)) return !1;
              let { pinsCollection: t } = (0, n.yj)(e);
              return t.isPinned(this.pinId);
            },
          }))
          .actions((e) => ({
            togglePin: (0, n.ls)(function* () {
              if (!(0, n.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, n.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
            }),
          })),
        r = (e) =>
          (0, n.pj)({
            title: e.name,
            seeds: e.seeds,
            stationId: e.stationId,
            idForFrom: e.idForFrom,
          }),
        l = (e) => {
          var t, i, a, s;
          return (0, n.pj)({
            title: e.title,
            header: e.header,
            stationId: e.stationId,
            seeds: e.seeds,
            animationUrl: e.animationUrl,
            backgroundImageUrl: e.backgroundImageUrl,
            imageUrl: e.imageUrl,
            colors: {
              average:
                null !==
                  (a =
                    null === (t = e.colors) || void 0 === t
                      ? void 0
                      : t.average) && void 0 !== a
                  ? a
                  : "",
              waveText:
                null !==
                  (s =
                    null === (i = e.colors) || void 0 === i
                      ? void 0
                      : i.waveText) && void 0 !== s
                  ? s
                  : "",
            },
          });
        };
      var c = i(76356),
        d = i(77027),
        u = i(85533);
    },
    77027: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return d;
        },
      });
      var n = i(9753),
        a = i(24244),
        s = i(98639),
        o = i(80542),
        r = i(34152),
        l = i(3084);
      let c = (e) => {
          var t;
          let { vibe: i, closeToast: a } = e;
          return (0, n.jsx)(l.K1, {
            closeToast: a,
            entityVariant: l.j9.VIBE,
            entityTitle: i.title,
            averageColor:
              null === (t = i.colors) || void 0 === t ? void 0 : t.average,
            isPinned: i.isPinned,
          });
        },
        d = (e) => {
          let { user: t } = (0, r.oR4)(),
            { notify: i } = (0, r.d$W)(),
            { formatMessage: d } = (0, o.Z)(),
            [u, m] = (0, s.useState)(!1);
          return (0, s.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, n.jsx)(l.Q, {
                  error: d({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: r.W$x.ERROR },
              );
              return;
            }
            if (u) return;
            let s = { ...(0, a.ZN)(e), isPinned: !e.isPinned };
            m(!0);
            let o = await e.togglePin();
            m(!1),
              o
                ? i((0, n.jsx)(c, { vibe: s }), { containerId: r.W$x.INFO })
                : i(
                    (0, n.jsx)(l.Q, {
                      error: d({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: r.W$x.ERROR },
                  );
          }, [d, i, u, t.isAuthorized, e]);
        };
    },
    85533: function (e, t, i) {
      "use strict";
      i.d(t, {
        VibeButton: function () {
          return b;
        },
        VibeButtonShimmer: function () {
          return g;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(9544),
        o = i(98639),
        r = i(31014),
        l = i(23881),
        c = i(17295),
        d = i(98342),
        u = i(39513),
        m = i(28852),
        p = i(86939),
        _ = i(90679),
        h = i(2570),
        x = i(34152),
        v = i(70010),
        f = i.n(v);
      let g = (e) => {
          let { isActive: t, className: i } = e;
          return (0, n.jsx)(_.Shimmer, {
            isActive: t,
            className: (0, a.W)(f().root, i),
          });
        },
        b = (0, s.Pi)((e) => {
          let { className: t, vibe: i } = e,
            { pageId: s } = (0, x.lVB)(),
            { blockIdForFrom: _ } = (0, x.qYG)(),
            { ref: v, intersectionPropertyId: g } = (0, x.VfV)(),
            { toggleTrue: b, toggleFalse: y, state: C } = (0, c.O)(!1),
            { isPlaying: j, togglePlay: k } = (0, x.QhE)({
              seeds: i.seeds,
              pageIdForFrom: s,
              blockIdForFrom: _,
            }),
            S = (0, x.lAI)(),
            N = (0, o.useCallback)(
              (e) => {
                (0, d.m)(e, f().ripple),
                  b(),
                  k().finally(() => {
                    y(), S(!j);
                  });
              },
              [y, b, k, j, S],
            ),
            w = (0, o.useMemo)(() => {
              var e, t;
              return {
                "--vibe-button-background":
                  null === (e = i.colors) || void 0 === e ? void 0 : e.average,
                "--vibe-button-text-color":
                  null === (t = i.colors) || void 0 === t ? void 0 : t.waveText,
              };
            }, [i.colors]),
            E = j ? "pause" : "play";
          return (0, n.jsxs)(u.z, {
            style: w,
            withRipple: !1,
            withHover: !1,
            variant: "text",
            onClick: N,
            className: (0, a.W)(
              f().root,
              f().button,
              { [f().button_loading]: C },
              t,
            ),
            "data-intersection-property-id": g,
            ref: v,
            ...(0, l.BA)(l.QM.landing.VIBE_DISCOVERY_ITEM),
            children: [
              (0, n.jsx)(p.Image, {
                className: f().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: i.backgroundImageUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              }),
              (0, n.jsxs)("span", {
                className: f().textContainer,
                children: [
                  (0, n.jsx)(h.Caption, {
                    className: f().subtitle,
                    variant: "span",
                    type: "controls",
                    size: "s",
                    weight: "bold",
                    children: (0, n.jsx)(r.Z, { id: "entity-names.my-vibe" }),
                  }),
                  (0, n.jsxs)("span", {
                    className: f().titleContainer,
                    children: [
                      (0, n.jsx)(m.J, {
                        className: f().icon,
                        size: "xxs",
                        variant: E,
                      }),
                      (0, n.jsx)(h.Heading, {
                        className: f().title,
                        variant: "h2",
                        size: "xs",
                        lineClamp: 1,
                        children: i.title,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
    },
    76356: function (e, t, i) {
      "use strict";
      i.d(t, {
        VibeCard: function () {
          return _;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(9544),
        o = i(98639),
        r = i(27491),
        l = i(12404),
        c = i(2570),
        d = i(34152),
        u = i(3084),
        m = i(55215),
        p = i.n(m);
      let _ = (0, s.Pi)((e) => {
        let { vibe: t, children: i, className: s } = e,
          { pageId: m } = (0, d.lVB)(),
          [_, h] = (0, o.useState)(!1),
          { blockIdForFrom: x } = (0, d.qYG)(),
          { settings: v } = (0, d.oR4)(),
          { sendPlaySearchFeedback: f } = (0, d.sAF)(),
          g = v.layout === d.t8m.Mobile,
          {
            isPlaying: b,
            isPaused: y,
            togglePlay: C,
          } = (0, d.QhE)({
            seeds: t.seeds,
            pageIdForFrom: m,
            blockIdForFrom: x,
          }),
          j = b || y,
          k = (0, o.useCallback)(() => {
            g && (_ || b || (h(!0), null == f || f()), C());
          }, [g, b, _, f, C]),
          S = (0, o.useCallback)(() => {
            _ || b || (h(!0), null == f || f()), C();
          }, [b, _, f, C]),
          N = (0, o.useMemo)(
            () =>
              (0, n.jsxs)(l.Paper, {
                className: p().cover,
                radius: "round",
                withShadow: !0,
                onClick: k,
                children: [
                  (0, n.jsx)(u.BE, {
                    size: 200,
                    fit: "cover",
                    className: p().image,
                    style: { backgroundColor: t.backgroundColor },
                    src: t.imageUrl,
                    alt: t.title,
                    withAvatarReplace: !0,
                  }),
                  j &&
                    (0, n.jsx)(u.Up, {
                      stopAnimation: y,
                      className: p().playingAnimation,
                    }),
                  (0, n.jsx)(r.kk, {
                    className: (0, a.W)(
                      p().controls,
                      { [p().controls_isPlaying]: j },
                      p().important,
                    ),
                    bottomContainerClassName: p().playControl,
                    radius: "round",
                    playControl: (0, n.jsx)(u.JM, {
                      isPlaying: b,
                      onClick: S,
                      className: (0, a.W)(p().playButton, p().control),
                      buttonVariant: "default",
                      withHover: !1,
                      iconSize: "xl",
                      variant: "filled",
                    }),
                  }),
                ],
              }),
            [k, S, y, b, j, t.backgroundColor, t.imageUrl, t.title],
          );
        return (0, n.jsx)(r.m7, {
          className: (0, a.W)(p().root, s),
          textPosition: "center",
          title: (0, n.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: t.title,
          }),
          description: (0, n.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 1,
            children: t.subtitle,
          }),
          view: N,
          children: i,
        });
      });
    },
    55784: function (e, t, i) {
      "use strict";
      i.d(t, {
        h: function () {
          return a.h;
        },
        n: function () {
          return n.n;
        },
      });
      var n = i(33861),
        a = i(34906);
    },
    73276: function (e, t, i) {
      "use strict";
      i.d(t, {
        vY: function () {
          return s.EmptyPlaylistBlock;
        },
        ZL: function () {
          return n.PlaylistCard;
        },
        Nn: function () {
          return h;
        },
        d2: function () {
          return c;
        },
        VD: function () {
          return a.PlaylistsCarousel;
        },
        RE: function () {
          return b;
        },
        Q9: function () {
          return f;
        },
        VB: function () {
          return g;
        },
        PB: function () {
          return C;
        },
      });
      var n = i(22003),
        a = i(18921),
        s = i(6030),
        o = i(42288),
        r = i(33589),
        l = i(10668);
      let c = l.$h.props({ artists: o.V5.maybe(o.V5.array(r.Go)) });
      var d = i(34152),
        u = i(395),
        m = i(40193);
      let p = o.V5.model("PlaylistOwner", {
          uid: o.V5.number,
          login: o.V5.string,
          name: o.V5.string,
          sex: o.V5.enumeration(Object.values(m.oF)),
          verified: o.V5.boolean,
        }),
        _ = o.V5.model("PlaylistOwner", {
          userInfo: o.V5.maybeNull(p),
          caseForms: o.V5.maybeNull(u.S2),
        }),
        h = l.Cd.props({
          owner: o.V5.maybe(p),
          modified: o.V5.string,
          description: o.V5.maybe(o.V5.string),
          madeFor: o.V5.maybeNull(_),
        })
          .views((e) => ({
            get seeds() {
              var t;
              return [
                "playlist:"
                  .concat(
                    null === (t = e.owner) || void 0 === t ? void 0 : t.login,
                    "_",
                  )
                  .concat(e.kind),
              ];
            },
          }))
          .actions((e) => ({
            changeDescription: (0, o.ls)(function* (t) {
              if (!(0, o.fh)(e)) return d.SLo.ERROR;
              if (e.description === t) return d.SLo.OK;
              if (t.length > l.Zn) return d.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: n } = (0, o.dU)(e);
              if (e.canUserChange) {
                let a = e.description;
                e.description = t;
                try {
                  let n = yield i.changePlaylistDescription({
                    description: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = n.description), d.SLo.OK;
                } catch (t) {
                  (e.description = a), n.error(t);
                }
              }
              return d.SLo.ERROR;
            }),
            changePlaylistCover: (0, o.ls)(function* (t) {
              if (!(0, o.fh)(e)) return d.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: n } = (0, o.dU)(e);
              try {
                return (
                  yield i.uploadPlaylistCover({
                    userId: e.uid,
                    formData: t,
                    playlistKind: e.kind,
                  }),
                  d.SLo.OK
                );
              } catch (e) {
                n.error(e);
              }
              return d.SLo.ERROR;
            }),
          })),
        x = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        v = (e) =>
          (0, o.pj)({
            userInfo: e.userInfo ? x(e.userInfo) : null,
            caseForms: e.caseForms ? (0, d.GA0)(e.caseForms) : null,
          }),
        f = (e) =>
          (0, o.pj)({
            ...(0, l.PV)(e),
            owner: e.owner ? x(e.owner) : void 0,
            description: e.description,
            modified: e.modified,
            madeFor: e.madeFor ? v(e.madeFor) : null,
          }),
        g = (e) => {
          var t, i;
          return (0, o.pj)({
            ...(0, l.PV)(e),
            artists:
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (t = e.artists) || void 0 === t
                      ? void 0
                      : t.map(r.d)) && void 0 !== i
                ? i
                : [],
          });
        },
        b = (e) => {
          var t, i;
          let {
            playlist: n,
            generatedPlaylistType: a,
            likesCount: s,
            trailer: r,
          } = e;
          return (0, o.pj)({
            isAvailable: null === (i = n.available) || void 0 === i || i,
            uuid: n.playlistUuid,
            title: n.title,
            uid: n.uid,
            kind: n.kind,
            coverUri: null === (t = n.cover) || void 0 === t ? void 0 : t.uri,
            generatedPlaylistType: a,
            likesCount: s,
            trailer: (0, d.GFX)(r),
          });
        };
      var y = i(58852);
      let C = (e) => {
        var t, i;
        return (0, o.pj)({
          ...(0, l.PV)(e),
          tracks:
            null !==
              (i =
                null == e
                  ? void 0
                  : null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.map(y.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
    },
    6030: function (e, t, i) {
      "use strict";
      i.d(t, {
        EmptyPlaylistBlock: function () {
          return m;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(98639),
        o = i(31014),
        r = i(23881),
        l = i(28852),
        c = i(2570),
        d = i(98746),
        u = i.n(d);
      let m = (e) => {
        let { className: t, isEmptySearch: i } = e,
          d = (0, s.useMemo)(
            () =>
              i
                ? (0, n.jsx)(o.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(o.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          m = (0, s.useMemo)(
            () =>
              i
                ? (0, n.jsx)(o.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, n.jsx)(o.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [i],
          );
        return (0, n.jsxs)("div", {
          className: (0, a.W)(u().root, t),
          ...(0, r.BA)(r.bG.playlist.PLAYLIST_EMPTY_BLOCK),
          children: [
            (0, n.jsx)("div", {
              className: u().iconBackground,
              children: (0, n.jsx)(l.J, {
                variant: "search",
                size: "l",
                className: u().icon,
                ...(0, r.BA)(r.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON),
              }),
            }),
            (0, n.jsx)(c.Heading, {
              variant: "h3",
              size: "xs",
              className: u().title,
              ...(0, r.BA)(r.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: d,
            }),
            (0, n.jsx)(c.Caption, {
              variant: "span",
              size: "l",
              className: u().subtitle,
              ...(0, r.BA)(r.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
              children: m,
            }),
          ],
        });
      };
    },
    22003: function (e, t, i) {
      "use strict";
      i.d(t, {
        PlaylistCard: function () {
          return k;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(9544),
        o = i(98639),
        r = i(80542),
        l = i(18375),
        c = i(23881),
        d = i(84338),
        u = i(27491),
        m = i(28852),
        p = i(12404),
        _ = i(2570),
        h = i(33589),
        x = i(10668),
        v = i(34152),
        f = i(3084);
      let g = (e) => {
        let { formatMessage: t } = (0, r.Z)();
        return (0, o.useMemo)(() => {
          let i = "";
          e.isLiked && !e.actualLikesCount
            ? (i = t({ id: "entity-names.has-your-like" }))
            : "number" == typeof e.actualLikesCount &&
              (i =
                e.actualLikesCount > 0
                  ? t(
                      { id: "entity-names.likes-counter" },
                      { counter: e.actualLikesCount },
                    )
                  : t({ id: "entity-names.likes-counter-empty" }));
          let n = t(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(n, " ").concat(i);
        }, [t, e]);
      };
      var b = i(385);
      let y = (0, s.Pi)((e) => {
        var t;
        let { playlist: i, onOpenChange: a, open: s, ...c } = e,
          { settings: d, trailer: u } = (0, v.oR4)(),
          m = (0, x.SB)(i),
          p = (0, x.BV)(i),
          _ = (0, v.FTC)(),
          h = d.layout === v.t8m.Mobile,
          { formatMessage: g } = (0, r.Z)();
        (0, v.ZP4)(s);
        let y = (0, o.useCallback)(() => {
          u.openPlaylistTrailer(i.id), _(l.OB.Playlist, i.id);
        }, [i.id, _, u]);
        return (0, n.jsxs)(b.v2, {
          title: i.title,
          onOpenChange: a,
          open: s,
          offsetOptions: 10,
          isMobile: h,
          ariaLabel: g({ id: "interface-actions.context-menu" }),
          ...c,
          children: [
            !h && (0, n.jsx)(f.Zd, { onClick: p, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, n.jsx)(f.xZ, { onClick: m, isLiked: i.isLiked }),
            (null === (t = i.trailer) || void 0 === t ? void 0 : t.canShow) &&
              (0, n.jsx)(f.NB, { onClick: y }),
          ],
        });
      });
      var C = i(88308),
        j = i.n(C);
      let k = (0, s.Pi)((e) => {
        let {
            className: t,
            playlist: i,
            children: s,
            contentLinesCount: b,
            customDescription: C,
          } = e,
          { ref: k, intersectionPropertyId: S } = (0, v.VfV)(),
          { trailer: N } = (0, v.oR4)(),
          { from: w } = (0, v.MhG)(),
          { formatMessage: E } = (0, r.Z)(),
          {
            sendLikeSearchFeedback: L,
            sendNavigateSearchFeedback: T,
            sendPlaySearchFeedback: R,
          } = (0, v.sAF)(),
          [M, P] = (0, o.useState)(!1),
          [B, O] = (0, o.useState)(!1),
          [I, A] = (0, o.useState)(!1),
          F = g(i),
          D = (0, x.SB)(i),
          V = (0, x.BV)(i),
          z = (0, v.zxW)(),
          U = (0, v.s0h)(i.url),
          W = (0, v.s0h)(i.url, !0),
          H = (0, h.ik)(W, U),
          Z = (0, v.FTC)(),
          G = (0, o.useCallback)(
            (e) => {
              e.stopPropagation(),
                N.openPlaylistTrailer(i.id),
                Z(l.OB.Playlist, i.id);
            },
            [i.id, Z, N],
          ),
          [q, K] = (0, o.useState)(!1),
          { isPlaying: Y, togglePlay: J } = (0, v.qmq)({
            playContextParams: {
              contextData: {
                type: d.Ak.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: w,
              },
              loadContextMeta: !0,
            },
          }),
          X = (0, o.useCallback)(() => {
            z({ to: l.qU.PlaylistScreen }), null == T || T();
          }, [z, T]),
          Q = (0, o.useCallback)(
            (e) => {
              X(), H(e);
            },
            [H, X],
          ),
          $ = (0, o.useCallback)(() => {
            M || Y || (P(!0), null == R || R()), J();
          }, [Y, M, R, J]),
          ee = (0, o.useCallback)(() => {
            B || i.isLiked || (O(!0), null == L || L()), D();
          }, [D, B, i.isLiked, L]),
          et = (0, o.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ei = (0, o.useCallback)(() => {
            A(!I), K(!I);
          }, [I]),
          en = (0, o.useMemo)(() => {
            var e;
            return C
              ? (0, n.jsx)(
                  _.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: C,
                  },
                  i.getKey("description"),
                )
              : (null === (e = i.artists) || void 0 === e ? void 0 : e.length)
                ? (0, n.jsx)(
                    h.jO,
                    {
                      className: j().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: j().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [C, i]),
          ea = (0, o.useMemo)(() => {
            if (!i.isFavouritePlaylist)
              return (0, n.jsx)(
                f.dJ,
                {
                  className: (0, a.W)(j().likeButton, j().control),
                  isLiked: i.isLiked,
                  onClick: ee,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                },
                i.getKey("LikeButton"),
              );
          }, [ee, i]),
          es = (0, o.useMemo)(() => {
            var e;
            if (
              null == i
                ? void 0
                : null === (e = i.trailer) || void 0 === e
                  ? void 0
                  : e.canShow
            )
              return (0, n.jsx)(f.xf, {
                children: (0, n.jsx)(
                  f.eP,
                  {
                    className: (0, a.W)(j().trailerButton, j().control),
                    radius: "round",
                    size: "s",
                    iconSize: "xxs",
                    onClick: G,
                  },
                  i.getKey("TrailerButton"),
                ),
              });
          }, [G, i]),
          eo = (0, o.useMemo)(
            () =>
              (0, n.jsx)(p.Paper, {
                className: j().cover,
                radius: "s",
                withShadow: !0,
                ...(0, c.BA)(c.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: j().coverBlock,
                  onClick: Q,
                  children: [
                    (0, n.jsx)(f.BE, {
                      className: j().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: F,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(u.kk, {
                      isVisible: I || q,
                      className: j().controls,
                      playControl: (0, n.jsx)(
                        f.JM,
                        {
                          className: (0, a.W)(j().playButton, j().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: $,
                          isPlaying: Y,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: ea,
                      menuControl: (0, n.jsx)(
                        y,
                        {
                          playlist: i,
                          onOpenChange: ei,
                          open: I,
                          onClick: et,
                          className: (0, a.W)(j().menuButton, j().control),
                          icon: (0, n.jsx)(m.J, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, c.BA)(
                            c.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        },
                        i.getKey("PlaylistContextMenu"),
                      ),
                      pinControl: (0, n.jsx)(
                        f.RT,
                        {
                          onClick: V,
                          isPinned: i.isPinned,
                          className: (0, a.W)(j().pinButton, j().control),
                          withRipple: !1,
                        },
                        i.getKey("PinButton"),
                      ),
                      trailerControl: es,
                    }),
                  ],
                }),
              }),
            [Q, i, F, I, q, $, Y, ea, ei, et, V, es],
          ),
          er = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, n.jsxs)(u.m7, {
          ref: k,
          "aria-label": F,
          className: (0, a.W)(j().root, t),
          title: (0, n.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, c.BA)(c.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(f.rU, {
              className: j().titleLink,
              href: i.url,
              onClick: X,
              children: i.title,
            }),
          }),
          srTitle: (0, n.jsx)(f.rU, {
            href: i.url,
            onClick: X,
            children: i.title,
          }),
          "data-intersection-property-id": S,
          contentLinesCount: b,
          view: eo,
          description: en,
          ...(0, c.BA)(c.bG.playlist.PLAYLIST_ITEM),
          children: [
            er &&
              (0, n.jsx)(f.DB, {
                ariaLabel: E(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: D,
              }),
            s,
          ],
        });
      });
    },
    18921: function (e, t, i) {
      "use strict";
      i.d(t, {
        PlaylistsCarousel: function () {
          return l;
        },
      });
      var n = i(9753),
        a = i(98639),
        s = i(3084),
        o = i(22003);
      let r = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            title: r,
            description: l,
            playlists: c,
            containerClassName: d,
            className: u,
            headerClassName: m,
            viewAllActionLink: p,
            ..._
          } = e;
          return (0, n.jsx)(s.HY, {
            isShimmerVisible: i,
            isShimmerActive: a,
            className: u,
            headerClassName: m,
            containerClassName: d,
            ref: t,
            title: r,
            description: l,
            viewAllActionLink: p,
            ..._,
            children:
              null == c
                ? void 0
                : c.map((e) =>
                    (0, n.jsx)(
                      o.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        l = (0, a.forwardRef)((e, t) => (0, n.jsx)(r, { forwardRef: t, ...e }));
    },
    91173: function (e, t, i) {
      "use strict";
      i.d(t, {
        t: function () {
          return l;
        },
      });
      var n = i(9753),
        a = i(98639),
        s = i(87181),
        o = i(34152),
        r = i(80128);
      let l = () => {
        let { notify: e } = (0, o.d$W)(),
          { sonataState: t, fullscreenPlayer: i } = (0, o.oR4)(),
          l = (0, o.R$C)();
        return (0, a.useCallback)(() => {
          if (null === t.entityMeta || !t.canChangeRepeatMode) return;
          let a = s.zq.NONE;
          switch (t.repeatMode) {
            case s.zq.NONE:
              a = s.zq.CONTEXT;
              break;
            case s.zq.CONTEXT:
              a = s.zq.ONE;
          }
          null == l || l.setRepeatMode(a),
            e((0, n.jsx)(r.NotificationRepeat, { repeatMode: a }), {
              containerId: i.modal.isOpened
                ? o.W$x.FULLSCREEN_INFO
                : o.W$x.INFO,
            });
        }, [
          i.modal.isOpened,
          e,
          l,
          t.canChangeRepeatMode,
          t.entityMeta,
          t.repeatMode,
        ]);
      };
    },
    16129: function (e, t, i) {
      "use strict";
      i.d(t, {
        m: function () {
          return r;
        },
      });
      var n = i(9753),
        a = i(98639),
        s = i(34152),
        o = i(18143);
      let r = () => {
        let { notify: e } = (0, s.d$W)(),
          { sonataState: t, fullscreenPlayer: i } = (0, s.oR4)(),
          r = (0, s.R$C)();
        return (0, a.useCallback)(() => {
          null !== t.entityMeta &&
            t.canShuffle &&
            (null == r || r.toggleShuffle(),
            e(
              (0, n.jsx)(o.NotificationShuffle, {
                shuffle: !!(null == r
                  ? void 0
                  : r.state.queueState.shuffle.value),
              }),
              {
                containerId: i.modal.isOpened
                  ? s.W$x.FULLSCREEN_INFO
                  : s.W$x.INFO,
              },
            ));
        }, [i.modal.isOpened, e, r, t.canShuffle, t.entityMeta]);
      };
    },
    80128: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationRepeat: function () {
          return p;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(98639),
        o = i(31014),
        r = i(87181),
        l = i(28852),
        c = i(2570),
        d = i(3084),
        u = i(15450),
        m = i.n(u);
      let p = (e) => {
        let { repeatMode: t, closeToast: i } = e,
          u = t === r.zq.ONE ? "repeat_one" : "repeat",
          p = (0, s.useMemo)(() => {
            let e;
            switch (t) {
              case r.zq.CONTEXT:
                e = (0, n.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case r.zq.ONE:
                e = (0, n.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case r.zq.NONE:
              default:
                e = (0, n.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, n.jsx)(c.Caption, {
              className: m().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, n.jsx)(d.Yj, {
          cover: (0, n.jsx)(l.J, {
            className: (0, a.W)(m().icon, {
              [m().icon_unset]: t === r.zq.NONE,
            }),
            size: "xs",
            variant: u,
          }),
          message: p,
          closeToast: i,
        });
      };
    },
    18143: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationShuffle: function () {
          return m;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(98639),
        o = i(31014),
        r = i(28852),
        l = i(2570),
        c = i(3084),
        d = i(54394),
        u = i.n(d);
      let m = (e) => {
        let { shuffle: t, closeToast: i } = e,
          d = (0, s.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, n.jsx)(o.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, n.jsx)(o.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, n.jsx)(l.Caption, {
                className: u().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, n.jsx)(c.Yj, {
          cover: (0, n.jsx)(r.J, {
            className: (0, a.W)(u().icon, { [u().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: d,
          closeToast: i,
        });
      };
    },
    99331: function (e, t, i) {
      "use strict";
      i.d(t, {
        RepeatButton: function () {
          return h;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(80542),
        o = i(23881),
        r = i(87181),
        l = i(39513),
        c = i(28852),
        d = i(91173),
        u = i(24749),
        m = i.n(u);
      let p = (e, t, i) =>
          t(
            e === r.zq.NONE || i
              ? { id: "player-actions.repeat" }
              : e === r.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          ),
        _ = (e, t) =>
          e === r.zq.NONE || t
            ? o.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === r.zq.ONE
              ? o.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : o.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        h = (e) => {
          let {
              isDisabled: t,
              repeatMode: i,
              className: u,
              iconClassName: h,
              size: x = "xxxs",
              iconSize: v = "xs",
              color: f,
              variant: g = "default",
            } = e,
            b = (0, d.t)(),
            { formatMessage: y } = (0, s.Z)(),
            C = t || i !== r.zq.ONE ? "repeat" : "repeat_one",
            j = p(i, y, t);
          return (0, n.jsx)(l.z, {
            className: u,
            radius: "round",
            size: x,
            variant: g,
            color: f,
            disabled: t,
            withRipple: !1,
            "aria-hidden": t,
            "aria-label": j,
            "aria-pressed": !t && i !== r.zq.NONE,
            onClick: b,
            icon: (0, n.jsx)(c.J, {
              size: v,
              variant: C,
              className: (0, a.W)(
                m().repeatIcon,
                m()["repeatIcon_".concat(i)],
                { [m().repeatIcon_disabled]: t },
                h,
              ),
            }),
            ...(0, o.BA)(_(i, t)),
          });
        };
    },
    94975: function (e, t, i) {
      "use strict";
      i.d(t, {
        ShuffleButton: function () {
          return m;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(80542),
        o = i(23881),
        r = i(39513),
        l = i(28852),
        c = i(16129),
        d = i(24584),
        u = i.n(d);
      let m = (e) => {
        let {
            isDisabled: t,
            shuffle: i,
            className: d,
            size: m = "xxxs",
            variant: p = "default",
            iconSize: _ = "xs",
            color: h,
          } = e,
          x = (0, c.m)(),
          { formatMessage: v } = (0, s.Z)();
        return (0, n.jsx)(r.z, {
          className: d,
          radius: "round",
          size: m,
          variant: p,
          color: h,
          withRipple: !1,
          disabled: t,
          "aria-label": v({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && i,
          "aria-hidden": t,
          icon: (0, n.jsx)(l.J, {
            variant: "shuffle",
            size: _,
            className: (0, a.W)(u().shuffleIcon, {
              [u().shuffleIcon_disabled]: t,
              [u().shuffleIcon_on]: !t && i,
              [u().shuffleIcon_off]: !t && !i,
            }),
          }),
          onClick: x,
          ...(0, o.BA)(o.bG.sonata.SHUFFLE_BUTTON),
        });
      };
    },
    78457: function (e, t, i) {
      "use strict";
      i.d(t, {
        SonataControls: function () {
          return R;
        },
      });
      var n = i(9753),
        a = i(9544),
        s = i(98639),
        o = i(92894),
        r = i(34152),
        l = i(91173),
        c = i(16129),
        d = i(60836),
        u = i(80542),
        m = i(23881),
        p = i(39513),
        _ = i(28852),
        h = i(3084),
        x = i(99331),
        v = i(94975),
        f = i(13689),
        g = i.n(f);
      let b = (0, a.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: i,
            repeatMode: a,
            canMoveForward: s,
            canMoveBackward: o,
            canShuffle: r,
            shuffle: l,
            onClickNext: c,
            onClickPrev: f,
            onClickPlayPause: b,
            canChangeRepeatMode: y,
            className: C,
          } = e,
          { formatMessage: j } = (0, u.Z)();
        return (0, n.jsxs)("div", {
          className: (0, d.W)(g().root, C),
          children: [
            (0, n.jsx)("div", {
              className: g().buttonContainer,
              children:
                (t || r) &&
                (0, n.jsx)(v.ShuffleButton, {
                  className: g().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  iconSize: "xs",
                  isDisabled: t,
                  shuffle: l,
                  ...(0, m.BA)(m.bG.sonata.SHUFFLE_BUTTON),
                }),
            }),
            (0, n.jsxs)("div", {
              className: g().sonataButtons,
              children: [
                (0, n.jsx)(p.z, {
                  className: g().sonataButton,
                  variant: "text",
                  size: "m",
                  radius: "round",
                  "aria-hidden": !o,
                  disabled: !o,
                  withRipple: !1,
                  "aria-label": j({ id: "player-actions.previous-track" }),
                  icon: (0, n.jsx)(_.J, { variant: "previous" }),
                  onClick: f,
                  ...(0, m.BA)(m.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, n.jsx)(h.JM, {
                  className: g().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: i,
                  iconClassName: g().playButtonIcon,
                  onClick: b,
                }),
                (0, n.jsx)(p.z, {
                  className: g().sonataButton,
                  radius: "round",
                  size: "m",
                  variant: "text",
                  disabled: !s,
                  "aria-hidden": !s,
                  withRipple: !1,
                  "aria-label": j({ id: "player-actions.next-track" }),
                  icon: (0, n.jsx)(_.J, { variant: "next" }),
                  onClick: c,
                  ...(0, m.BA)(m.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: g().buttonContainer,
              children:
                (t || y) &&
                (0, n.jsx)(x.RepeatButton, {
                  className: g().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  isDisabled: t,
                  iconSize: "xs",
                  repeatMode: a,
                }),
            }),
          ],
        });
      });
      var y = i(73069);
      let C = (e) => {
        let {
          disabled: t,
          isPlaying: i,
          onClickPlayPause: a,
          className: s,
        } = e;
        return (0, n.jsx)(y.PlayButton, {
          className: s,
          size: "s",
          disabled: t,
          isPlaying: i,
          onClick: a,
        });
      };
      var j = i(98014),
        k = i.n(j);
      let S = (0, a.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: i,
            repeatMode: a,
            canMoveForward: s,
            canMoveBackward: o,
            canShuffle: r,
            onClickNext: l,
            onClickPrev: c,
            onClickPlayPause: f,
            canChangeRepeatMode: g,
            shuffle: b,
            className: y,
          } = e,
          { formatMessage: C } = (0, u.Z)();
        return (0, n.jsxs)("div", {
          className: (0, d.W)(k().root, y),
          children: [
            (0, n.jsx)("div", {
              className: k().buttonContainer,
              children:
                (t || r) &&
                (0, n.jsx)(v.ShuffleButton, {
                  className: k().sonataButton,
                  size: "s",
                  iconSize: "xxs",
                  color: "secondary",
                  isDisabled: t,
                  shuffle: b,
                  ...(0, m.BA)(m.bG.sonata.SHUFFLE_BUTTON),
                }),
            }),
            (0, n.jsxs)("div", {
              className: k().sonataButtons,
              children: [
                (0, n.jsx)(p.z, {
                  className: k().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !o,
                  withRipple: !1,
                  "aria-label": C({ id: "player-actions.previous-track" }),
                  icon: (0, n.jsx)(_.J, { variant: "previous" }),
                  onClick: c,
                  ...(0, m.BA)(m.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, n.jsx)(h.JM, {
                  className: k().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: i,
                  iconClassName: k().playPauseButtonIcon,
                  onClick: f,
                }),
                (0, n.jsx)(p.z, {
                  className: k().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !s,
                  withRipple: !1,
                  "aria-label": C({ id: "player-actions.next-track" }),
                  icon: (0, n.jsx)(_.J, { variant: "next" }),
                  onClick: l,
                  ...(0, m.BA)(m.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: k().buttonContainer,
              children:
                (t || g) &&
                (0, n.jsx)(x.RepeatButton, {
                  className: k().sonataButton,
                  size: "s",
                  color: "secondary",
                  isDisabled: t,
                  iconSize: "xxs",
                  repeatMode: a,
                }),
            }),
          ],
        });
      });
      var N = i(84338),
        w = i(58852),
        E = i(75731),
        L = i.n(E);
      let T = (0, a.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: i,
              canMoveBackward: a,
              onClickNext: o,
              onClickPrev: l,
              onClickPlayPause: c,
              className: m,
            } = e,
            { formatMessage: x } = (0, u.Z)(),
            { user: v, sonataState: f } = (0, r.oR4)(),
            g = (0, r.XUT)(),
            b = f.entityMeta,
            y = f.contextType === N.Ak.Generative,
            C = v.isAuthorized && !y,
            j = (0, w.SB)(f.entityMeta),
            k = (0, w.KX)(f.entityMeta);
          return (
            (0, s.useEffect)(() => {
              if (!f.isGenerativeContext)
                return (
                  null == g ||
                    g.addShortcutsListener(r.Pwk.MAIN, r.yxF.LIKE, j),
                  null == g ||
                    g.addShortcutsListener(r.Pwk.MAIN, r.yxF.DISLIKE, k),
                  () => {
                    null == g ||
                      g.removeShortcutsListener(r.Pwk.MAIN, r.yxF.LIKE),
                      null == g ||
                        g.removeShortcutsListener(r.Pwk.MAIN, r.yxF.DISLIKE);
                  }
                );
            }, [k, j, g, f.isGenerativeContext]),
            (0, n.jsxs)("div", {
              className: (0, d.W)(L().root, m),
              children: [
                (0, n.jsx)("div", {
                  className: L().buttonContainer,
                  children:
                    b &&
                    C &&
                    (0, n.jsx)(h.Q1, { isDisliked: b.isDisliked, onClick: k }),
                }),
                (0, n.jsxs)("div", {
                  className: L().sonataButtons,
                  children: [
                    (0, n.jsx)(p.z, {
                      className: L().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !a,
                      withRipple: !1,
                      "aria-label": x({ id: "player-actions.previous-track" }),
                      icon: (0, n.jsx)(_.J, { variant: "previous" }),
                      onClick: l,
                    }),
                    (0, n.jsx)(h.JM, {
                      className: L().sonataButton,
                      iconSize: "xxl",
                      variant: "filled",
                      color: "secondary",
                      isPlaying: t,
                      iconClassName: L().playPauseButtonIcon,
                      onClick: c,
                    }),
                    (0, n.jsx)(p.z, {
                      className: L().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !i,
                      withRipple: !1,
                      "aria-label": x({ id: "player-actions.next-track" }),
                      icon: (0, n.jsx)(_.J, { variant: "next" }),
                      onClick: o,
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: L().buttonContainer,
                  children:
                    b &&
                    C &&
                    (0, n.jsx)(h.dJ, { isLiked: b.isLiked, onClick: j }),
                }),
              ],
            })
          );
        }),
        R = (0, a.Pi)((e) => {
          var t, i;
          let { isMobile: a, entityMeta: d, isFullscreen: u, className: m } = e,
            { sonataState: p, vibe: _ } = (0, r.oR4)(),
            h = (0, r.XUT)(),
            x = (0, r.R$C)(),
            { togglePlay: v } = (0, r.QhE)({
              seeds:
                null !==
                  (i =
                    null === (t = _.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== i
                  ? i
                  : [],
              pageIdForFrom: r.Rhz.HOME,
              blockIdForFrom: r.BEo.RUP_MAIN_RADIO,
            }),
            f = (0, s.useMemo)(
              () =>
                [
                  o.Xz.PLAYING,
                  o.Xz.LOADING_MEDIA_SOURCE,
                  o.Xz.LOADING_MEDIA_DATA,
                ].includes(p.status),
              [p.status],
            ),
            g = (0, s.useCallback)(() => {
              d ? null == x || x.togglePause() : v();
            }, [d, x, v]),
            y = (0, s.useCallback)(() => {
              null == x || x.moveForward();
            }, [x]),
            j = (0, s.useCallback)(() => {
              null == x || x.moveBackward();
            }, [x]),
            k = (0, c.m)(),
            N = (0, l.t)();
          (0, s.useEffect)(() => {
            if (!u)
              return (
                null == h ||
                  h.addShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_PLAY, g),
                null == h ||
                  h.addShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_REPEAT, N),
                null == h ||
                  h.addShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_SHUFFLE, k),
                () => {
                  null == h ||
                    h.removeShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_PLAY),
                    null == h ||
                      h.removeShortcutsListener(
                        r.Pwk.MAIN,
                        r.yxF.TOGGLE_SHUFFLE,
                      ),
                    null == h ||
                      h.removeShortcutsListener(
                        r.Pwk.MAIN,
                        r.yxF.TOGGLE_REPEAT,
                      );
                }
              );
          }, [u, g, N, k, h]);
          let w = (0, s.useMemo)(() => (u ? (a ? T : S) : a ? C : b), [a, u]);
          return (0, n.jsx)(w, {
            className: m,
            disabled: null === p.entityMeta,
            isPlaying: f,
            canMoveBackward: p.canMoveBackward,
            canMoveForward: p.canMoveForward,
            canShuffle: p.canShuffle,
            shuffle: p.shuffle,
            onClickPlayPause: g,
            onClickNext: y,
            onClickPrev: j,
            canChangeRepeatMode: p.canChangeRepeatMode,
            repeatMode: p.repeatMode,
          });
        });
    },
    27097: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return x;
        },
        C: function () {
          return v;
        },
      });
      var n = i(9753),
        a = i(9544),
        s = i(98639),
        o = i(23881),
        r = i(84338),
        l = i(78507),
        c = i(92894),
        d = i(53367),
        u = i(34152);
      let m = (e) => {
        var t, i;
        let [n, a] = (0, s.useState)({}),
          { sonataState: o } = (0, u.oR4)();
        (0, s.useEffect)(() => {
          if (o.contextType === r.Ak.Vibe) {
            var t, i, s, l;
            n.id ===
              (null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !n.isLiked &&
              (null === (l = o.entityMeta) || void 0 === l
                ? void 0
                : l.isLiked) &&
              e(),
              a({
                id: null === (i = o.entityMeta) || void 0 === i ? void 0 : i.id,
                isLiked:
                  null === (s = o.entityMeta) || void 0 === s
                    ? void 0
                    : s.isLiked,
              });
          }
        }, [
          o.contextType,
          null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (i = o.entityMeta) || void 0 === i ? void 0 : i.isLiked,
          n.id,
          n.isLiked,
          e,
        ]);
      };
      var p = i(11799),
        _ = i.n(p);
      let h = "vibe-animation",
        x = (0, a.Pi)((e) => {
          var t, i, a, p, x, v, f;
          let { className: g } = e,
            b = (0, s.useRef)(null),
            y = (0, s.useRef)(null),
            { isIntersecting: C } =
              null !== (f = (0, l.S1)([b])[h]) && void 0 !== f ? f : {},
            { sonataState: j, user: k } = (0, u.oR4)(),
            { theme: S } = (0, u.FgM)(),
            N = (0, u.jpI)(),
            w = j.status === c.Xz.PLAYING && (j.contextType === r.Ak.Vibe || window.VIBE_ANIMATION_PLAY_ON_ANY_ENTITY);
          return (
            (0, s.useEffect)(() => {
              if (b.current) {
                var e, t;
                let i =
                    null === (t = j.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  n = k.collectionHue;
                (y.current = new d.dr(
                  b.current,
                  null == N ? void 0 : N.analyser,
                  n,
                )),
                  y.current.applySettings({ hue: i, collectionHue: n }),
                  b.current.classList.add(_().root_visible);
              }
              return () => {
                var e;
                null === (e = y.current) || void 0 === e || e.destroy();
              };
            }, []),
            (0, s.useEffect)(() => {
              var e, t, i, n, a, s, o, r;
              let l =
                  null === (t = j.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                c =
                  null === (n = j.entityMeta) || void 0 === n
                    ? void 0
                    : null === (i = n.trackParameters) || void 0 === i
                      ? void 0
                      : i.energy,
                d =
                  null === (s = j.entityMeta) || void 0 === s
                    ? void 0
                    : null === (a = s.trackParameters) || void 0 === a
                      ? void 0
                      : a.userCollectionHue;
              d && k.setUserCollectionHue(d),
                w
                  ? null === (o = y.current) ||
                    void 0 === o ||
                    o.playAnimation({ hue: l, collectionHue: d, energy: c })
                  : null === (r = y.current) ||
                    void 0 === r ||
                    r.idleAnimation();
            }, [
              k,
              w,
              null === (i = j.entityMeta) || void 0 === i
                ? void 0
                : null === (t = i.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (p = j.entityMeta) || void 0 === p
                ? void 0
                : null === (a = p.trackParameters) || void 0 === a
                  ? void 0
                  : a.energy,
              null === (v = j.entityMeta) || void 0 === v
                ? void 0
                : null === (x = v.trackParameters) || void 0 === x
                  ? void 0
                  : x.userCollectionHue,
            ]),
            (0, s.useEffect)(() => {
              var e;
              let t = S === u.Q2A.Dark ? 0.0705 : 0.9607;
              null === (e = y.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [S]),
            (0, s.useEffect)(() => {
              if (y.current) {
                var e, t;
                C
                  ? null === (e = y.current) ||
                    void 0 === e ||
                    e.enableRender(d.nT.BLOCK_VISIBILITY)
                  : null === (t = y.current) ||
                    void 0 === t ||
                    t.disableRender(d.nT.BLOCK_VISIBILITY);
              }
            }, [C]),
            m(
              (0, s.useCallback)(() => {
                var e;
                null === (e = y.current) || void 0 === e || e.likeAnimation();
              }, []),
            ),
            (0, n.jsx)("div", {
              className: g,
              "data-intersection-property-id": h,
              ref: b,
              ...(0, o.BA)(o.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        v = (e) => {
          let t = (0, d.wX)((0, d.kB)(e), d.UE, d.TP),
            i = Math.round(255 * t[0]),
            n = Math.round(255 * t[1]),
            a = Math.round(255 * t[2]);
          return "rgb(".concat(i, ", ").concat(n, ", ").concat(a, ")");
        };
    },
    68106: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return n.SomethingWentWrong;
        },
      });
      var n = i(18723);
    },
    18723: function (e, t, i) {
      "use strict";
      i.d(t, {
        SomethingWentWrong: function () {
          return h;
        },
      });
      var n = i(9753),
        a = i(60836),
        s = i(9544),
        o = i(98639),
        r = i(31014),
        l = i(39513),
        c = i(28852),
        d = i(2570),
        u = i(55784),
        m = i(34152),
        p = i(88178),
        _ = i.n(p);
      let h = (0, s.Pi)((e) => {
        let { className: t, withBackwardControl: i = !0 } = e,
          s = (0, o.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: p } = (0, m.$Y6)();
        return (0, n.jsxs)("div", {
          className: (0, a.W)(_().root, t),
          children: [
            i &&
              (0, n.jsx)(u.n, {
                withBackwardFallback: "/",
                className: (0, a.W)(_().navigation, {
                  [_().navigation_desktop]: !p,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, a.W)(_().content, { [_().content_shrink]: !i }),
              children: [
                (0, n.jsx)(c.J, {
                  className: _().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(d.Heading, {
                  className: (0, a.W)(_().title, _().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(r.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(d.Caption, {
                  className: (0, a.W)(_().text, _().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(r.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(l.z, {
                  onClick: s,
                  className: _().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, n.jsxs)(d.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, n.jsx)(r.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    6494: function (e) {
      e.exports = {
        root: "DefaultLayout_root__7J0wo",
        root_applicationPreserveTitleBar:
          "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
        root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
        content: "DefaultLayout_content__md70Z",
        content_withPlayerBar: "DefaultLayout_content_withPlayerBar__9uFJT",
        notificationErrorContainer:
          "DefaultLayout_notificationErrorContainer__Qz_mD",
        notificationInfoContainer:
          "DefaultLayout_notificationInfoContainer__tKt7J",
        navbar: "DefaultLayout_navbar__LIQWG",
        navbar_application_macos:
          "DefaultLayout_navbar_application_macos__9dj3u",
        navbar_application_windows:
          "DefaultLayout_navbar_application_windows__3hDQ_",
        playerBar: "DefaultLayout_playerBar___9IaS",
        barBelow: "DefaultLayout_barBelow__y6PFU",
      };
    },
    79756: function (e) {
      e.exports = {
        root: "SideAdvertBanner_root__hT1jJ",
        content: "SideAdvertBanner_content__nDGWG",
      };
    },
    70010: function (e) {
      e.exports = {
        root: "VibeButton_root___i3R5",
        ripple: "VibeButton_ripple__cmoBR",
        textContainer: "VibeButton_textContainer__j9nOW",
        titleContainer: "VibeButton_titleContainer__yrRRu",
        title: "VibeButton_title__sLC0I",
        subtitle: "VibeButton_subtitle__MQ_Ca",
        image: "VibeButton_image__GOwKJ",
        button: "VibeButton_button__tXFAm",
        button_loading: "VibeButton_button_loading__LYnUR",
        "applying-setting": "VibeButton_applying-setting__Jd_3C",
        icon: "VibeButton_icon__KIv7n",
      };
    },
    55215: function (e) {
      e.exports = {
        root: "VibeCard_root__9TDjP",
        playingAnimation: "VibeCard_playingAnimation__iRgvh",
        cover: "VibeCard_cover__LbX93",
        image: "VibeCard_image__luolD",
        controls: "VibeCard_controls__CcEVx",
        controls_isPlaying: "VibeCard_controls_isPlaying__1_Ass",
        important: "VibeCard_important__WPWqc",
        control: "VibeCard_control__SM3H4",
        playControl: "VibeCard_playControl__pZxq5",
        playButton: "VibeCard_playButton__LWepP",
      };
    },
    98746: function (e) {
      e.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    88308: function (e) {
      e.exports = {
        root: "PlaylistCard_root__i3pR4",
        controls: "PlaylistCard_controls__Ej8Rz",
        cover: "PlaylistCard_cover__tpK5L",
        coverBlock: "PlaylistCard_coverBlock__1slsN",
        image: "PlaylistCard_image__Li6oy",
        titleLink: "PlaylistCard_titleLink__H8qEc",
        artists: "PlaylistCard_artists__HtVIF",
        artistLink: "PlaylistCard_artistLink__jx3KB",
        playButton: "PlaylistCard_playButton__eaduk",
        likeButton: "PlaylistCard_likeButton__RYXJz",
        menuButton: "PlaylistCard_menuButton__jFcWr",
        pinButton: "PlaylistCard_pinButton__jhWnL",
        trailerButton: "PlaylistCard_trailerButton__Qjg_U",
        control: "PlaylistCard_control__73YUq",
      };
    },
    15450: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__TjQ9H",
        message: "NotificationRepeat_message__IeQXU",
        icon_unset: "NotificationRepeat_icon_unset__Dr5iH",
      };
    },
    54394: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__lIKky",
        message: "NotificationShuffle_message___Tpxo",
        icon_unset: "NotificationShuffle_icon_unset__VTrhj",
      };
    },
    24749: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__GQOWG",
        repeatIcon_context: "RepeatButton_repeatIcon_context__HRK2F",
        repeatIcon_one: "RepeatButton_repeatIcon_one__vVtqR",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__PYLys",
      };
    },
    24584: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off__PWssl",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__3B_Rm",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__vT_hB",
      };
    },
    13689: function (e) {
      e.exports = {
        root: "SonataControlsDesktop_root__oluUH",
        sonataButtons: "SonataControlsDesktop_sonataButtons__ux0qT",
        sonataButton: "SonataControlsDesktop_sonataButton__FTykq",
        playButtonIcon: "SonataControlsDesktop_playButtonIcon__BgNUF",
        buttonContainer: "SonataControlsDesktop_buttonContainer__PczhH",
      };
    },
    98014: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__l4a2W",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__BNse_",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__qmSTF",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__nD8zZ",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__mkxBw",
      };
    },
    75731: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__lsmD7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__PkHh6",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__2P1xg",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__veX3T",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__JavFn",
      };
    },
    11799: function (e) {
      e.exports = {
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    3924: function (e) {
      e.exports = {
        rootOld: "Content_rootOld__g85_m",
        main: "Content_main__8_wIa",
        root: "Content_root__IsH8s",
        sideBanner: "Content_sideBanner__Na07D",
        primary: "Content_primary__dInSS",
        primary_isMobile: "Content_primary_isMobile__ApDi2",
        primary_short: "Content_primary_short__TSM3L",
        secondary: "Content_secondary__tGLLS",
        secondary_isMobile: "Content_secondary_isMobile__CbF7M",
        secondaryEnter: "Content_secondaryEnter__Nsp_f",
        secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
        secondaryExit: "Content_secondaryExit__m4gOK",
        secondaryExitActive: "Content_secondaryExitActive__miNnR",
      };
    },
    48508: function (e) {
      e.exports = {
        root: "TrackLyricsModal_root__KsVRf",
        header: "TrackLyricsModal_header__nWar3",
        modalContent: "TrackLyricsModal_modalContent__uYdL2",
        content: "TrackLyricsModal_content__Cstzi",
        explicitMark: "TrackLyricsModal_explicitMark__eL04d",
        version: "TrackLyricsModal_version__l9sxZ",
        overlay: "TrackLyricsModal_overlay__0Ehwu",
        writers: "TrackLyricsModal_writers__8t9Ic",
      };
    },
    81829: function (e) {
      e.exports = {
        root: "TrackModalDesktop_root__GB2Y3",
        root_withFullscreen: "TrackModalDesktop_root_withFullscreen__17XCc",
        root_withWindows: "TrackModalDesktop_root_withWindows__72ONf",
        header: "TrackModalDesktop_header__rF7X4",
        modalContent: "TrackModalDesktop_modalContent__mc2tL",
        infoBlock: "TrackModalDesktop_infoBlock__YQv3l",
        infoTitle: "TrackModalDesktop_infoTitle__KWsVO",
        link: "TrackModalDesktop_link__9BLEf",
        explicitMark: "TrackModalDesktop_explicitMark__QW2n_",
        version: "TrackModalDesktop_version___3Lb6",
        explicit: "TrackModalDesktop_explicit__bzKYo",
        content: "TrackModalDesktop_content__seXQ5",
        artistLink: "TrackModalDesktop_artistLink__PRr3M",
        artists: "TrackModalDesktop_artists__SU8pt",
        important: "TrackModalDesktop_important__6JUV2",
        overlay: "TrackModalDesktop_overlay__HY_wm",
        textShimmer: "TrackModalDesktop_textShimmer__sBj6W",
        text: "TrackModalDesktop_text__Q2szJ",
      };
    },
    307: function (e) {
      e.exports = {
        content_ru: "KinopoiskSectionDesktop_content_ru__gILD5",
        content_rb: "KinopoiskSectionDesktop_content_rb__VdDqA",
        card1: "KinopoiskSectionDesktop_card1__nlqOH",
        card2: "KinopoiskSectionDesktop_card2__ZMW4Z",
        card3: "KinopoiskSectionDesktop_card3__n9_1i",
        card4: "KinopoiskSectionDesktop_card4__TpOZ7",
        logo_ru: "KinopoiskSectionDesktop_logo_ru__f6OLB",
        logo_en: "KinopoiskSectionDesktop_logo_en__2oXnD",
      };
    },
    72739: function (e) {
      e.exports = {
        content_ru: "KinopoiskSectionMobile_content_ru__CCtkX",
        content_rb: "KinopoiskSectionMobile_content_rb__NmtKG",
        card1: "KinopoiskSectionMobile_card1__JCIyK",
        card2: "KinopoiskSectionMobile_card2__jTtnr",
        card3: "KinopoiskSectionMobile_card3__wTJCh",
        card4: "KinopoiskSectionMobile_card4__wi_RO",
        card4_rb: "KinopoiskSectionMobile_card4_rb__MwzJm",
        logo_ru: "KinopoiskSectionMobile_logo_ru__8alc5",
        logo_en: "KinopoiskSectionMobile_logo_en__A673z",
      };
    },
    83037: function (e) {
      e.exports = {
        root: "MainCardDesktop_root__qa00U",
        root_horizontal: "MainCardDesktop_root_horizontal__Fy_E0",
        textContainer: "MainCardDesktop_textContainer__mzWGu",
        imageContainer: "MainCardDesktop_imageContainer__81MQy",
        image: "MainCardDesktop_image__nUJz3",
        root_vertical: "MainCardDesktop_root_vertical__KGeJ2",
        imageContainer_align_center:
          "MainCardDesktop_imageContainer_align_center__kEU_O",
        imageContainer_align_right:
          "MainCardDesktop_imageContainer_align_right__T12Qo",
        text: "MainCardDesktop_text__omw7l",
      };
    },
    16338: function (e) {
      e.exports = {
        root: "MainCardMobile_root__AXTwk",
        image: "MainCardMobile_image__DZHrE",
        text: "MainCardMobile_text__rli4d",
      };
    },
    79588: function (e) {
      e.exports = {
        root: "MainSectionDesktop_root__MjgTL",
        headingContainer: "MainSectionDesktop_headingContainer__IaoRT",
        contentContainer: "MainSectionDesktop_contentContainer__L4OlR",
      };
    },
    80824: function (e) {
      e.exports = {
        root: "MainSectionMobile_root__l2R5l",
        headingContainer: "MainSectionMobile_headingContainer__6mJvx",
        contentContainer: "MainSectionMobile_contentContainer__vmaD5",
      };
    },
    93026: function (e) {
      e.exports = {
        root: "MoreInfoLink_root___TgXc",
        content: "MoreInfoLink_content__Rjqj_",
      };
    },
    50926: function (e) {
      e.exports = {
        content: "MusicSectionDesktop_content__uCWAp",
        card1: "MusicSectionDesktop_card1__ZiBFS",
        card2: "MusicSectionDesktop_card2__PUBKU",
        card3: "MusicSectionDesktop_card3__hO5BW",
        card4: "MusicSectionDesktop_card4__ow2sm",
        card5: "MusicSectionDesktop_card5__bVU3K",
        logo_ru: "MusicSectionDesktop_logo_ru__Tiwfx",
        logo_en: "MusicSectionDesktop_logo_en__dbYCi",
      };
    },
    21707: function (e) {
      e.exports = {
        content: "MusicSectionMobile_content__lAARM",
        card1: "MusicSectionMobile_card1__vFmVx",
        card2: "MusicSectionMobile_card2__9CyVr",
        card3: "MusicSectionMobile_card3__b23Jj",
        card4: "MusicSectionMobile_card4__oa9me",
        card5: "MusicSectionMobile_card5__Fdacr",
        logo_ru: "MusicSectionMobile_logo_ru__itG4j",
        logo_en: "MusicSectionMobile_logo_en__Tv2yd",
      };
    },
    49132: function (e) {
      e.exports = {
        root: "Paywall_root__XE_NC",
        section: "Paywall_section__Y30nd",
        section_faq: "Paywall_section_faq__43qaB",
      };
    },
    958: function (e) {
      e.exports = {
        root: "PaywallOtherDesktop_root__c19Ht",
        topSection: "PaywallOtherDesktop_topSection__d1CVV",
      };
    },
    86682: function (e) {
      e.exports = { topSection: "PaywallOtherMobile_topSection__Pscnw" };
    },
    4444: function (e) {
      e.exports = { root: "PaywallRb_root__OY3Z1" };
    },
    65217: function (e) {
      e.exports = { topSection: "PaywallRbDesktop_topSection__CCudM" };
    },
    76071: function (e) {
      e.exports = { topSection: "PaywallRbMobile_topSection__R8IHv" };
    },
    48852: function (e) {
      e.exports = { root: "PaywallRu_root__ea7lp" };
    },
    53679: function (e) {
      e.exports = {
        root: "TopSectionRu_root__y_QO7",
        main: "TopSectionRu_main__lBOPD",
        logo: "TopSectionRu_logo__mxbGq",
        moreInfoChildren: "TopSectionRu_moreInfoChildren__s3t_O",
        title: "TopSectionRu_title__wi08O",
        services: "TopSectionRu_services__9mJWU",
        service: "TopSectionRu_service__I6v2k",
        serviceLogo: "TopSectionRu_serviceLogo__pHHOg",
        serviceLabel: "TopSectionRu_serviceLabel__eyoTC",
        buySubscriptionBlock: "TopSectionRu_buySubscriptionBlock__JdzI_",
      };
    },
    51100: function (e) {
      e.exports = {
        content_ru: "PlusSectionDesktop_content_ru__85q1P",
        content_rb: "PlusSectionDesktop_content_rb__5YItf",
        card1: "PlusSectionDesktop_card1__GivDx",
        card2: "PlusSectionDesktop_card2__5LSgQ",
        card3: "PlusSectionDesktop_card3__jSLA9",
        card4: "PlusSectionDesktop_card4__gOdI3",
        logo_ru: "PlusSectionDesktop_logo_ru__G2AkZ",
        logo_en: "PlusSectionDesktop_logo_en__gn4qE",
      };
    },
    48681: function (e) {
      e.exports = {
        content_ru: "PlusSectionMobile_content_ru__OvJV0",
        content_rb: "PlusSectionMobile_content_rb__zjhAw",
        card1: "PlusSectionMobile_card1__foeVf",
        card2: "PlusSectionMobile_card2__DKepK",
        card3: "PlusSectionMobile_card3__QndT9",
        card4: "PlusSectionMobile_card4__uhNRz",
        logo_ru: "PlusSectionMobile_logo_ru___FFew",
        logo_en: "PlusSectionMobile_logo_en__u_HSO",
      };
    },
    15986: function (e) {
      e.exports = {
        root: "TopSectionDesktop_root__lDNkV",
        wrapper: "TopSectionDesktop_wrapper__sEPZr",
        content: "TopSectionDesktop_content__356Uk",
        title: "TopSectionDesktop_title__JFo6R",
        label: "TopSectionDesktop_label__JmilG",
        buySubscriptionBlock: "TopSectionDesktop_buySubscriptionBlock__dhv3Z",
      };
    },
    65371: function (e) {
      e.exports = {
        root: "TopSectionMobile_root__bl_XJ",
        image: "TopSectionMobile_image__t_hCH",
        content: "TopSectionMobile_content__sqstr",
        title: "TopSectionMobile_title__O_Zx0",
        buySubscriptionBlock: "TopSectionMobile_buySubscriptionBlock__NSVnY",
        moreInfoLink: "TopSectionMobile_moreInfoLink__zjcOO",
      };
    },
    76099: function (e) {
      e.exports = {
        root: "PaywallModal_root__HIYOy",
        header: "PaywallModal_header__3oCYF",
        closeButton: "PaywallModal_closeButton__rkLNM",
        content: "PaywallModal_content__mVxnz",
      };
    },
    88178: function (e) {
      e.exports = {
        root: "SomethingWentWrong_root__d77VJ",
        content: "SomethingWentWrong_content__8_YkJ",
        content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
        navigation: "SomethingWentWrong_navigation__a8eMG",
        navigation_desktop: "SomethingWentWrong_navigation_desktop__WGGBX",
        icon: "SomethingWentWrong_icon__f15_y",
        title: "SomethingWentWrong_title__Kn89B",
        important: "SomethingWentWrong_important__namIb",
        text: "SomethingWentWrong_text__KEfGc",
        button: "SomethingWentWrong_button__dmh7t",
      };
    },
  },
]);
