(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2406],
  {
    65155: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, i) => {
          let a = (a) => {
            let n = (a + e / 30) % 12;
            return (
              i -
              t * Math.min(i, 1 - i) * Math.max(-1, Math.min(n - 3, 9 - n, 1))
            );
          };
          return [a(0), a(8), a(4)];
        });
    },
    18857: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let a = i(50525),
        n = i(16634);
      (t.normalizeFrequency = (e) => Math.min(1, (0, n.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : a.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: i, collectionHue: n, energy: o, backgroundColor: l } = e,
            s = { collectionHue: (0, t.normalizeCollectionHue)(n) };
          return (
            i && (s.hue = i),
            o && (s.energy = (o + 1) * a.ENERGY_FACTOR),
            l && (s.backgroundColor = l),
            s
          );
        });
    },
    16634: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    50525: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_PLAYING_ENERGY =
          t.DEFAULT_NOT_PLAYING_ENERGY =
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
        (t.DEFAULT_NOT_PLAYING_ENERGY = 0.2),
        (t.DEFAULT_PLAYING_ENERGY = 0.6),
        (t.ENERGY_FACTOR = 0.4);
    },
    8705: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = i(29397);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let n = i(65155),
        o = i(16634),
        l = i(50525),
        s = i(36967);
      class r {
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
          let i = (0, n.adjustHue)(e),
            a = (0, n.safeHue)(i + (0, o.randomNumber)(40, 80), i),
            l = (0, n.adjustHue)(t);
          this.topStart.update(i),
            this.topEnd.update(
              (0, n.safeHue)(i + (0, o.randomNumber)(30, 40), i),
            ),
            this.middleStart.update(a),
            this.middleEnd.update(
              (0, n.safeHue)(a + (0, o.randomNumber)(30, 40), i),
            ),
            this.bottomStart.update(l),
            this.bottomEnd.update(
              (0, n.safeHue)(l + (0, o.randomNumber)(30, 40), i),
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
          a._(this, "hue", l.DEFAULT_HUE),
            a._(this, "collectionHue", l.DEFAULT_COLLECTION_HUE),
            a._(this, "topStart", void 0),
            a._(this, "topEnd", void 0),
            a._(this, "middleStart", void 0),
            a._(this, "middleEnd", void 0),
            a._(this, "bottomStart", void 0),
            a._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, n.adjustHue)(e),
            i = (0, n.safeHue)(t + (0, o.randomNumber)(30, 40), t);
          (this.topStart = new s.RGB(50)),
            (this.topEnd = new s.RGB(50)),
            (this.middleStart = new s.RGB(300)),
            (this.middleEnd = new s.RGB(320)),
            (this.bottomStart = new s.RGB(t)),
            (this.bottomEnd = new s.RGB(i));
        }
      }
      t.Color = r;
    },
    87633: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = i(29397);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0);
      class n {
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
        constructor(e, t, i, n) {
          a._(this, "currentValue", void 0),
            a._(this, "targetValue", void 0),
            a._(this, "elapsedTime", void 0),
            a._(this, "duration", void 0),
            a._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = i),
            (this.elapsedTime = 0),
            (this.formatter = n);
        }
      }
      t.DynamicValue = n;
    },
    41404: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = i(29397);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let n = i(74785),
        o = i(18857),
        l = i(50525),
        s = i(34364),
        r = i(14117),
        c = i(856),
        d = i(62158);
      class u {
        get rendererOptions() {
          let { width: e, height: t } = this.uniforms.size;
          return {
            alpha: !1,
            antialias: !1,
            preserveDrawingBuffer: !1,
            width: e,
            height: t,
          };
        }
        get vertexAndFragment() {
          return { vertex: s.VertexShaderV2, fragment: s.FragmentShaderV2 };
        }
        setupListeners() {
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
            t = new n.Plane(e, { width: 2, height: 2 }),
            i = new n.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new n.Mesh(e, { geometry: t, program: i }).setParent(this.scene), i
          );
        }
        render() {
          if (window.VIBE_ANIMATION_DISABLE_RENDERING() ?? false) return;
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyser),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(r.RenderState.ACTIVE_TAB)
            : this.disableRender(r.RenderState.ACTIVE_TAB);
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
              energy: a,
              backgroundColor: n,
            } = (0, o.normalizeSettings)(e);
          t && i && this.uniforms.updateColor(t, i),
            a && this.uniforms.updateEnergy(a),
            n && this.uniforms.updateBackgroundColor(n);
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
          var t;
          let i = {
            ...e,
            energy:
              null !== (t = e.energy) && void 0 !== t
                ? t
                : l.DEFAULT_PLAYING_ENERGY,
          };
          this.uniforms.updatePlayingState(!0), this.applySettings(i);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(l.DEFAULT_NOT_PLAYING_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnVisibilityChange &&
            document.removeEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        constructor(e, t, i) {
          a._(this, "analyser", void 0),
            a._(this, "ticker", void 0),
            a._(this, "scene", new n.Transform()),
            a._(this, "shader", void 0),
            a._(this, "renderer", void 0),
            a._(this, "uniforms", void 0),
            a._(this, "renderState", {
              [r.RenderState.ACTIVE_TAB]: !0,
              [r.RenderState.BLOCK_VISIBILITY]: !0,
              [r.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new d.Uniforms((0, o.normalizeCollectionHue)(i))),
            (this.renderer = new n.Renderer(this.rendererOptions)),
            (this.ticker = new c.Ticker(l.MAX_FPS, this.render.bind(this))),
            (this.analyser = t),
            this.createElement(e),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
      }
      t.VibeAnimationRenderer = u;
    },
    36967: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = i(29397);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let n = i(65155),
        o = i(50525),
        l = i(87633);
      class s {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, n.hsl2rgb)(e, o.DEFAULT_SATURATION, o.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          a._(this, "r", void 0),
            a._(this, "g", void 0),
            a._(this, "b", void 0);
          let t = (0, n.hsl2rgb)(e, o.DEFAULT_SATURATION, o.DEFAULT_LIGHTNESS);
          (this.r = new l.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new l.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new l.DynamicValue(t[2], t[2], 3e3));
        }
      }
      t.RGB = s;
    },
    856: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = i(29397);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0);
      class n {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            i = (a) => {
              this.requestId = requestAnimationFrame(i);
              let n = a - e;
              n >= t - 0.1 && ((e = a - (n % t)), this.render(n));
            };
          (this.isActive = !0), (this.requestId = requestAnimationFrame(i));
        }
        stop() {
          this.isActive &&
            ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
        constructor(e, t) {
          a._(this, "fps", void 0),
            a._(this, "render", void 0),
            a._(this, "isActive", !1),
            a._(this, "requestId", 0),
            (this.fps = e),
            (this.render = t);
        }
      }
      t.Ticker = n;
    },
    62158: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = i(29397);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let n = i(74785),
        o = i(50525),
        l = i(8705),
        s = i(87633);
      class r {
        toValue(e) {
          return { value: e };
        }
        get size() {
          return { width: this.width, height: this.height };
        }
        updateSize() {
          (this.width = Math.min(window.innerWidth * this.quality, 800)),
            (this.height = Math.min(window.innerHeight * this.quality, 800));
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
          this.background = new n.Vec3(e, e, e);
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
              n = t.getAverageFrequencies({ low: 5e3, high: 20e3 });
            // Домножение громкостей для учёта диапазона усреднения частот. Пока что линейно
            let intensity =
              ((i + a * 10.2 + n * 33.3) / 25) *
              (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT ?? 1);
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
            vScreenSize: this.toValue(new n.Vec2(this.width, this.height)),
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
          a._(this, "isPlaying", !1),
            a._(this, "quality", 0.6),
            a._(this, "background", new n.Vec3(0, 0, 0)),
            a._(
              this,
              "energy",
              new s.DynamicValue(
                o.DEFAULT_NOT_PLAYING_ENERGY,
                o.DEFAULT_NOT_PLAYING_ENERGY,
                250,
              ),
            ),
            a._(
              this,
              "trackEnergy",
              new s.DynamicValue(
                o.DEFAULT_NOT_PLAYING_ENERGY,
                o.DEFAULT_NOT_PLAYING_ENERGY,
                1e3,
              ),
            ),
            a._(this, "time", Math.floor(3600 * Math.random())),
            a._(this, "color", void 0),
            a._(this, "rotation", [
              new n.Vec3(-0.3, 0.3, 0.2),
              new n.Vec3(-0.3, -0.3, -0.2),
              new n.Vec3(-0.3, -0.3, 0.2),
            ]),
            a._(this, "audio", [0, 0, 0]),
            a._(this, "audioLowRatio", new s.DynamicValue(0, 0, 1e3)),
            a._(this, "audioMiddleRatio", new s.DynamicValue(0, 0, 1e3)),
            a._(this, "audioHighRatio", new s.DynamicValue(0, 0, 1e3)),
            a._(this, "reactTop", new s.DynamicValue(0, 0, 600)),
            a._(this, "reactMiddle", new s.DynamicValue(0, 0, 600)),
            a._(this, "reactBottom", new s.DynamicValue(0, 0, 600)),
            a._(this, "point", [0, 0]),
            a._(this, "interaction", 0),
            a._(this, "width", 0),
            a._(this, "height", 0),
            (this.color = new l.Color(e)),
            this.updateSize();
        }
      }
      t.Uniforms = r;
    },
    43131: function (e, t, i) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.kB = t.wX = void 0;
      var a = i(65155);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return a.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return a.adjustHue;
          },
        });
      var n = i(41404);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return n.VibeAnimationRenderer;
        },
      });
      var o = i(14117);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return o.RenderState;
        },
      });
      var l = i(50525);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return l.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return l.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    34364: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 =
          "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n"),
        (t.FragmentShaderV2 =
          "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.5;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.5;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");
    },
    14117: function (e, t) {
      "use strict";
      var i, a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((a = i || (t.RenderState = i = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (a.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (a.MANUAL = "MANUAL");
    },
    299: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return x;
        },
        C: function () {
          return n;
        },
      });
      var a = i(43131);
      let n = (e) => {
        let t = (0, a.wX)((0, a.kB)(e), a.UE, a.TP),
          i = Math.round(255 * t[0]),
          n = Math.round(255 * t[1]),
          o = Math.round(255 * t[2]);
        return "rgb(".concat(i, ", ").concat(n, ", ").concat(o, ")");
      };
      var o = i(95660),
        l = i(23974),
        s = i(44744),
        r = i(71859),
        c = i(9883),
        d = i(20062),
        u = i(30020),
        m = i(37460),
        h = i(20794);
      let _ = (e) => {
          if (!e) return;
          let { width: t, height: i } = e.uniforms.size;
          return {
            "--vibe-animation-width": "".concat(2 * t, "px"),
            "--vibe-animation-height": "".concat(2 * i, "px"),
          };
        },
        v = (e) => {
          var t, i;
          let [a, n] = (0, r.useState)({}),
            { sonataState: o } = (0, h.oR4)();
          (0, r.useEffect)(() => {
            if (o.contextType === d.A.Vibe) {
              var t, i, l, s;
              a.id ===
                (null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id) &&
                !a.isLiked &&
                (null === (s = o.entityMeta) || void 0 === s
                  ? void 0
                  : s.isLiked) &&
                e(),
                n({
                  id:
                    null === (i = o.entityMeta) || void 0 === i ? void 0 : i.id,
                  isLiked:
                    null === (l = o.entityMeta) || void 0 === l
                      ? void 0
                      : l.isLiked,
                });
            }
          }, [
            o.contextType,
            null === (t = o.entityMeta) || void 0 === t ? void 0 : t.id,
            null === (i = o.entityMeta) || void 0 === i ? void 0 : i.isLiked,
            a.id,
            a.isLiked,
            e,
          ]);
        };
      var C = i(35781),
        p = i.n(C);
      let g = "vibe-animation",
        x = (0, s.Pi)((e) => {
          var t, i, n, s, C, x, b;
          let { className: y } = e,
            f = (0, r.useRef)(null),
            [S, P] = (0, h.zU3)(),
            { isIntersecting: E } =
              null !== (b = (0, u.S1)([f])[g]) && void 0 !== b ? b : {},
            { sonataState: N, user: k } = (0, h.oR4)(),
            { theme: j } = (0, h.FgM)(),
            L = (0, h.jpI)(),
            A =
              N.status === m.Xz.PLAYING &&
              (N.contextType === d.A.Vibe ||
                window.VIBE_ANIMATION_PLAY_ON_ANY_ENTITY());
          return (
            (0, r.useEffect)(() => {
              if (f.current) {
                var e, t;
                let i =
                    null === (t = N.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  n = k.collectionHue;
                P(new a.dr(f.current, null == L ? void 0 : L.analyser, n)),
                  null == S || S.applySettings({ hue: i, collectionHue: n }),
                  f.current.classList.add(p().root_visible);
              }
              return () => {
                null == S || S.destroy();
              };
            }, []),
            (0, r.useEffect)(() => {
              var e, t, i, a, n, o;
              let l =
                  null === (t = N.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                s =
                  null === (a = N.entityMeta) || void 0 === a
                    ? void 0
                    : null === (i = a.trackParameters) || void 0 === i
                      ? void 0
                      : i.energy,
                r =
                  null === (o = N.entityMeta) || void 0 === o
                    ? void 0
                    : null === (n = o.trackParameters) || void 0 === n
                      ? void 0
                      : n.userCollectionHue;
              r && k.setUserCollectionHue(r),
                A
                  ? null == S ||
                    S.playAnimation({ hue: l, collectionHue: r, energy: s })
                  : null == S || S.idleAnimation();
            }, [
              k,
              A,
              null === (i = N.entityMeta) || void 0 === i
                ? void 0
                : null === (t = i.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (s = N.entityMeta) || void 0 === s
                ? void 0
                : null === (n = s.trackParameters) || void 0 === n
                  ? void 0
                  : n.energy,
              null === (x = N.entityMeta) || void 0 === x
                ? void 0
                : null === (C = x.trackParameters) || void 0 === C
                  ? void 0
                  : C.userCollectionHue,
              S,
            ]),
            (0, r.useEffect)(() => {
              let e = j === h.Q2A.Dark ? 0.0705 : 0.9607;
              null == S || S.applySettings({ backgroundColor: e });
            }, [S, j]),
            (0, r.useEffect)(() => {
              S &&
                (E
                  ? S.enableRender(a.nT.BLOCK_VISIBILITY)
                  : S.disableRender(a.nT.BLOCK_VISIBILITY));
            }, [E, S]),
            v(
              (0, r.useCallback)(() => {
                null == S || S.likeAnimation();
              }, [S]),
            ),
            (0, o.jsx)("div", {
              style: _(S),
              className: (0, l.W)(p().root, y),
              "data-intersection-property-id": g,
              ref: f,
              ...(0, c.BA)(c.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        });
    },
    36850: function (e, t, i) {
      "use strict";
      var a, n;
      i.d(t, {
        Q: function () {
          return a;
        },
      }),
        ((n = a || (a = {}))[(n.TRACKS = 0)] = "TRACKS"),
        (n[(n.ARTISTS = 1)] = "ARTISTS");
    },
    53360: function (e, t, i) {
      "use strict";
      var a, n;
      i.d(t, {
        f: function () {
          return a;
        },
      }),
        ((n = a || (a = {})).TRACKS = "tracks"),
        (n.ARTISTS = "artists");
    },
    16593: function (e, t, i) {
      "use strict";
      i.d(t, {
        v: function () {
          return s;
        },
      });
      var a = i(71859),
        n = i(20794),
        o = i(53360),
        l = i(36850);
      let s = (e) => {
        let t = (0, n.m5R)();
        return (0, a.useCallback)(
          (i) => {
            var a;
            switch (
              (null === (a = e.onTabChange) || void 0 === a || a.call(e, i), i)
            ) {
              case l.Q.TRACKS:
                t("/collection/dislikes?tab=".concat(o.f.TRACKS));
                break;
              case l.Q.ARTISTS:
                t("/collection/dislikes?tab=".concat(o.f.ARTISTS));
            }
          },
          [t, e],
        );
      };
    },
    42859: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionAlbumsPage: function () {
          return B;
        },
      });
      var a,
        n,
        o = i(95660),
        l = i(44744),
        s = i(97667),
        r = i(71859),
        c = i(9883),
        d = i(43703),
        u = i(30476),
        m = i(20794);
      ((a = n || (n = {}))[(a.LIKED_ALBUMS = 0)] = "LIKED_ALBUMS"),
        (a[(a.UPCOMING_ALBUMS = 1)] = "UPCOMING_ALBUMS");
      var h = i(52169),
        _ = i.n(h),
        v = i(23974),
        C = i(36621),
        p = i(13555),
        g = i(96235),
        x = i(71037),
        b = i(42255);
      let y = (e) => {
        let t = (0, m.m5R)();
        return (0, r.useCallback)(
          (i) => {
            var a;
            switch (
              (null === (a = e.onTabChange) || void 0 === a || a.call(e, i), i)
            ) {
              case n.LIKED_ALBUMS:
                t("/collection/albums?tab=".concat(m.GrA.LIKED_ALBUMS));
                break;
              case n.UPCOMING_ALBUMS:
                t("/collection/albums?tab=".concat(m.GrA.UPCOMING_ALBUMS));
            }
          },
          [t, e],
        );
      };
      var f = i(20331),
        S = i.n(f),
        P = i(18344);
      let E = () =>
          (0, o.jsxs)("div", {
            className: S().tabsShimmer,
            children: [
              (0, o.jsx)(P.Shimmer, { className: S().tabShimmer }),
              (0, o.jsx)(P.Shimmer, { className: S().tabShimmer }),
            ],
          }),
        N = (0, l.Pi)((e) => {
          var t, i, a;
          let { tabsState: l, tabElementId: s } = e,
            { collection: c } = (0, m.oR4)(),
            { formatMessage: d } = (0, C.Z)(),
            u = (0, m.k67)(),
            { isScrolling: h } = (0, r.useContext)(g.pI),
            _ = y(l),
            v = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            p = (0, r.useMemo)(() => {
              var e, t;
              return (
                null === (e = c.albums.upcomingAlbums) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(d({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = c.albums.upcomingAlbums) || void 0 === t
                        ? void 0
                        : t.length,
                    )
                : d({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums) || void 0 === t
                ? void 0
                : t.length,
              d,
            ]);
          return (0, o.jsxs)("header", {
            className: S().root,
            "aria-hidden": h,
            children: [
              (0, o.jsxs)("div", {
                className: S().container,
                children: [
                  u.canBack &&
                    (0, o.jsx)(g.nP, {
                      withForwardControl: !1,
                      withBackwardControl: u.canBack,
                    }),
                  (0, o.jsx)(b.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: S().title,
                    children: (0, o.jsx)(x.Z, {
                      id: "entity-names.favourite-albums",
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(g.no, {
                isShimmerVisible: c.albums.isLoading,
                shimmer: (0, o.jsx)(E, {}),
                className: S().tabs,
                elementId: s,
                ...l,
                onTabChange: _,
                children: [
                  (0, o.jsx)(g.OK, {
                    className: S().tab,
                    value: n.LIKED_ALBUMS,
                    title: v,
                    "aria-label": d(
                      { id: "entity-names.albums-count" },
                      { value: c.albums.items.length },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                  (0, o.jsx)(g.OK, {
                    className: S().tab,
                    value: n.UPCOMING_ALBUMS,
                    title: p,
                    "aria-label": d(
                      { id: "entity-names.upcoming-albums-count" },
                      {
                        value:
                          null !==
                            (a =
                              null === (i = c.albums.upcomingAlbums) ||
                              void 0 === i
                                ? void 0
                                : i.length) && void 0 !== a
                            ? a
                            : 0,
                      },
                    ),
                    "aria-hidden": h,
                    tabIndex: h ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var k = i(36668),
        j = i.n(k);
      let L = (0, l.Pi)((e) => {
        var t, i, a;
        let { forwardRef: l, tabsState: s, tabElementId: c } = e,
          { user: u, collection: h, settings: _ } = (0, m.oR4)(),
          { formatMessage: x } = (0, C.Z)(),
          b = _.layout === m.t8m.Mobile,
          y = (0, r.useCallback)(
            (e) => {
              u.account.uid &&
                h.albums.getData({
                  userId: u.account.uid,
                  metaType: "music",
                  page: e,
                  pageSize: 20,
                });
            },
            [h.albums, u.account.uid],
          ),
          f = (0, r.useMemo)(
            () => ({
              Header: () => (0, o.jsx)(N, { tabsState: s, tabElementId: c }),
              Footer: () => (0, o.jsx)(g.$_, { className: j().footer }),
            }),
            [c, s],
          );
        return (0, o.jsx)("div", {
          className: j().root,
          children: (0, o.jsx)(d.TabPanel, {
            value: s.value,
            name: n.LIKED_ALBUMS,
            elementId: c,
            className: j().tabPanel,
            children: (0, o.jsx)(g.Wv, {
              className: (0, v.W)(j().scrollContainer, j().important),
              customComponents: f,
              itemContentCallback: (e) => {
                var t;
                let i =
                    null === (t = h.albums.items) || void 0 === t
                      ? void 0
                      : t[e],
                  a = x(
                    { id: "loading-messages.entity-is-loading" },
                    { entityName: x({ id: "entity-names.album" }) },
                  );
                return i
                  ? (0, o.jsx)(p.rf, { album: i, contentLinesCount: 4 }, i.id)
                  : (0, o.jsx)(g.hi, { "aria-label": a });
              },
              totalCount:
                null !==
                  (i =
                    null === (t = h.albums.pager) || void 0 === t
                      ? void 0
                      : t.total) && void 0 !== i
                  ? i
                  : 0,
              onGetDataByPage: y,
              pageSize: 20,
              totalRequests:
                null !== (a = h.albums.requestsCount) && void 0 !== a ? a : 0,
              listClassName: j().content,
              itemClassName: j().item,
              handleRef: l,
              context: {
                listAriaLabel: x({ id: "collection.liked-albums-list" }),
              },
              isMobileLayout: b,
              useWindowScroll: b,
            }),
          }),
        });
      });
      var A = i(64275);
      let I = (0, l.Pi)((e) => {
        let { forwardRef: t, tabsState: i, tabElementId: a } = e,
          { collection: l } = (0, m.oR4)(),
          { formatMessage: s } = (0, C.Z)(),
          c = (0, r.useMemo)(() => {
            var e;
            let t = s(
              { id: "loading-messages.entity-is-loading" },
              { entityName: s({ id: "entity-names.album" }) },
            );
            return l.albums.isUpcomingAlbumsLoading
              ? (0, o.jsx)(g.Wm, { isActive: !0, "aria-label": t })
              : null === (e = l.albums.upcomingAlbums) || void 0 === e
                ? void 0
                : e.map((e) => (0, o.jsx)(p.vK, { upcomingAlbum: e }, e.id));
          }, [l.albums.isUpcomingAlbumsLoading, l.albums.upcomingAlbums, s]);
        return (0, o.jsxs)(A.t, {
          className: j().root,
          containerClassName: (0, v.W)(j().scrollContainer, j().important),
          ref: t,
          children: [
            (0, o.jsx)(N, { tabsState: i, tabElementId: a }),
            (0, o.jsx)(d.TabPanel, {
              value: i.value,
              name: n.UPCOMING_ALBUMS,
              elementId: a,
              className: j().content,
              children: c,
            }),
            (0, o.jsx)(g.$_, { className: j().footer }),
          ],
        });
      });
      var T = i(15706),
        R = i(42682),
        w = i.n(R);
      let D = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            a = (0, r.useMemo)(() => {
              switch (t.value) {
                case n.LIKED_ALBUMS:
                  return (0, o.jsx)(x.Z, {
                    id: "error-messages.empty-collection-albums-title",
                  });
                case n.UPCOMING_ALBUMS:
                  return (0, o.jsx)(x.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-title",
                  });
              }
            }, [t.value]),
            l = t.value === n.LIKED_ALBUMS;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(N, { tabsState: t, tabElementId: i }),
              (0, o.jsxs)(d.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: w().root,
                children: [
                  (0, o.jsx)(T.Icon, {
                    className: w().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, o.jsx)(b.Heading, {
                    className: w().title,
                    variant: "h3",
                    size: "xs",
                    children: a,
                  }),
                  l &&
                    (0, o.jsx)(b.Caption, {
                      className: w().text,
                      variant: "span",
                      type: "controls",
                      size: "l",
                      weight: "normal",
                      children: (0, o.jsx)(x.Z, {
                        id: "error-messages.empty-collection-albums-description",
                      }),
                    }),
                ],
              }),
            ],
          });
        }),
        M = (0, l.Pi)((e) => {
          var t, i, a;
          let { tabsState: l, tabElementId: s } = e,
            { collection: c } = (0, m.oR4)(),
            { formatMessage: d } = (0, C.Z)(),
            { isScrolling: u } = (0, r.useContext)(g.pI),
            h = (0, m.k67)(),
            _ = y(l),
            p = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            x = (0, r.useMemo)(() => {
              var e, t;
              return (
                null === (e = c.albums.upcomingAlbums) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(d({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = c.albums.upcomingAlbums) || void 0 === t
                        ? void 0
                        : t.length,
                    )
                : d({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums) || void 0 === t
                ? void 0
                : t.length,
              d,
            ]);
          return (0, o.jsx)(g.h4, {
            variant: "composite",
            staticClassName: (0, v.W)(S().staticHeader, S().important),
            "aria-hidden": !u,
            stickyClassName: (0, v.W)(S().stickyHeader, S().important),
            stickyChild: (0, o.jsxs)("div", {
              className: S().container,
              children: [
                h.canBack &&
                  (0, o.jsx)(g.nP, {
                    withForwardControl: !1,
                    withBackwardControl: h.canBack,
                    buttonSize: "xs",
                  }),
                (0, o.jsxs)(g.no, {
                  isShimmerVisible: c.albums.isLoading,
                  shimmer: (0, o.jsx)(E, {}),
                  className: S().tabs,
                  elementId: s,
                  ...l,
                  onTabChange: _,
                  children: [
                    (0, o.jsx)(g.OK, {
                      className: S().tab,
                      value: n.LIKED_ALBUMS,
                      title: p,
                      "aria-label": d(
                        { id: "entity-names.albums-count" },
                        { value: c.albums.items.length },
                      ),
                      "aria-hidden": !u,
                      tabIndex: u ? 0 : -1,
                    }),
                    (0, o.jsx)(g.OK, {
                      className: S().tab,
                      value: n.UPCOMING_ALBUMS,
                      title: x,
                      "aria-label": d(
                        { id: "entity-names.upcoming-albums-count" },
                        {
                          value:
                            null !==
                              (a =
                                null === (i = c.albums.upcomingAlbums) ||
                                void 0 === i
                                  ? void 0
                                  : i.length) && void 0 !== a
                              ? a
                              : 0,
                        },
                      ),
                      "aria-hidden": !u,
                      tabIndex: u ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        B = (0, l.Pi)(() => {
          let e = (0, s.useSearchParams)(),
            { user: t, collection: i, experiments: a } = (0, m.oR4)(),
            { contentScrollRef: l, setContentScrollRef: h } = (0, m.$Y6)(),
            v = a.checkExperiment(m.peG.WebNextDisableCollectionAlbums, "on"),
            C = a.checkExperiment(m.peG.WebNextDisableCollection, "on"),
            p = (0, r.useId)(),
            g = (0, r.useMemo)(() => {
              switch (e.get(m.wxR.TAB)) {
                case m.GrA.LIKED_ALBUMS:
                  break;
                case m.GrA.UPCOMING_ALBUMS:
                  return n.UPCOMING_ALBUMS;
              }
              return n.LIKED_ALBUMS;
            }, [e]),
            x = (0, d.useTabsState)(g);
          if (
            (v && C && (0, s.redirect)("/"),
            v && (0, s.redirect)("/collection"),
            t.account.uid && i.albums.loadingState === m.Gui.IDLE)
          ) {
            let e = Promise.allSettled([
              i.albums.getData({
                userId: t.account.uid,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
              i.albums.getPresaves({ userId: t.account.uid }),
            ]);
            (0, r.use)(e);
          }
          (0, m.NOh)(i.albums.loadingState === m.Gui.RESOLVE),
            (0, r.useEffect)(
              () => () => {
                i.albums.reset();
              },
              [i.albums],
            );
          let b = (0, r.useMemo)(() => {
            switch (x.value) {
              case n.LIKED_ALBUMS:
                if (i.albums.isAlbumsEmpty)
                  return (0, o.jsx)(D, { tabsState: x, tabElementId: p });
                return (0, o.jsx)(L, {
                  forwardRef: h,
                  tabsState: x,
                  tabElementId: p,
                });
              case n.UPCOMING_ALBUMS:
                if (i.albums.isUpcomingAlbumsEmpty)
                  return (0, o.jsx)(D, { tabsState: x, tabElementId: p });
                return (0, o.jsx)(I, {
                  forwardRef: h,
                  tabsState: x,
                  tabElementId: p,
                });
            }
          }, [i.albums.isAlbumsEmpty, i.albums.isUpcomingAlbumsEmpty, h, p, x]);
          return (0, o.jsx)(m.Lh6, {
            pageId: m.Rhz.OWN_ALBUMS,
            children: (0, o.jsx)(u.I7, {
              scrollElement: l,
              headerThreshold: 148,
              children: (0, o.jsxs)("div", {
                className: _().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_ALBUMS_PAGE),
                children: [(0, o.jsx)(M, { tabsState: x, tabElementId: p }), b],
              }),
            }),
          });
        });
    },
    34715: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionArtistsPage: function () {
          return g;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(97667),
        s = i(71859),
        r = i(36621),
        c = i(71037),
        d = i(9883),
        u = i(42255),
        m = i(24136),
        h = i(30476),
        _ = i(20794),
        v = i(96235),
        C = i(88078),
        p = i.n(C);
      let g = (0, o.Pi)(() => {
        var e, t, i, o;
        let {
            user: C,
            collection: g,
            experiments: x,
            settings: b,
          } = (0, _.oR4)(),
          { formatMessage: y } = (0, r.Z)(),
          { contentScrollRef: f, setContentScrollRef: S } = (0, _.$Y6)(),
          P = (0, _.k67)(),
          E = x.checkExperiment(_.peG.WebNextDisableCollectionArtists, "on"),
          N = x.checkExperiment(_.peG.WebNextDisableCollection, "on"),
          k = b.layout === _.t8m.Mobile;
        E && N && (0, l.redirect)("/"),
          E && (0, l.redirect)("/collection"),
          C.account.uid &&
            g.artists.loadingState === _.Gui.IDLE &&
            (0, s.use)(g.artists.getData({ userId: C.account.uid })),
          (0, _.NOh)(g.artists.loadingState === _.Gui.RESOLVE),
          (0, s.useEffect)(
            () => () => {
              g.artists.reset();
            },
            [g.artists],
          );
        let j = (0, s.useCallback)(
            (e) => {
              C.account.uid &&
                g.artists.getData({
                  userId: C.account.uid,
                  page: e,
                  pageSize: 20,
                });
            },
            [g.artists, C.account.uid],
          ),
          L = (0, s.useMemo)(
            () => ({
              Footer: () => (0, a.jsx)(v.$_, { className: p().footer }),
            }),
            [],
          );
        return (0, a.jsx)(_.Lh6, {
          pageId: _.Rhz.OWN_ARTISTS,
          children: (0, a.jsx)(h.I7, {
            scrollElement: f,
            outerTitle: y({ id: "entity-names.artists" }),
            children: (0, a.jsxs)("div", {
              className: p().root,
              ...(0, d.BA)(d.Br.collection.COLLECTION_ARTISTS_PAGE),
              children: [
                (0, a.jsx)(v.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: P.canBack,
                  children: (0, a.jsx)(u.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, a.jsx)(c.Z, { id: "entity-names.artists" }),
                  }),
                }),
                (0, a.jsx)(v.Wv, {
                  className: (0, n.W)(p().scrollContainer, p().important),
                  customComponents: L,
                  itemContentCallback: (e) => {
                    var t, i;
                    let n =
                        null === (i = g.artists) || void 0 === i
                          ? void 0
                          : null === (t = i.items) || void 0 === t
                            ? void 0
                            : t[e],
                      o = y(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: y({ id: "entity-names.artist" }) },
                      );
                    return n
                      ? (0, a.jsx)(
                          m.IT,
                          { artist: n, contentLinesCount: 3 },
                          n.id,
                        )
                      : (0, a.jsx)(v.hi, {
                          "aria-label": o,
                          round: !0,
                          centered: !0,
                        });
                  },
                  totalCount:
                    null !==
                      (i =
                        null === (t = g.artists) || void 0 === t
                          ? void 0
                          : null === (e = t.pager) || void 0 === e
                            ? void 0
                            : e.total) && void 0 !== i
                      ? i
                      : 0,
                  onGetDataByPage: j,
                  pageSize: 20,
                  totalRequests:
                    null !== (o = g.artists.requests) && void 0 !== o ? o : 0,
                  listClassName: p().content,
                  itemClassName: p().item,
                  handleRef: S,
                  context: {
                    listAriaLabel: y({ id: "collection.liked-artists-list" }),
                  },
                  isMobileLayout: k,
                  useWindowScroll: k,
                }),
              ],
            }),
          }),
        });
      });
    },
    23631: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionDislikesPage: function () {
          return H;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(97667),
        l = i(71859),
        s = i(43703),
        r = i(30476),
        c = i(20794),
        d = i(53360),
        u = i(36850),
        m = i(18905),
        h = i.n(m),
        _ = i(23974),
        v = i(36621),
        C = i(98836),
        p = i(24136),
        g = i(96235),
        x = i(71037),
        b = i(42255),
        y = i(46315),
        f = i.n(y),
        S = i(16593),
        P = i(18344);
      let E = () =>
          (0, a.jsxs)("div", {
            className: f().tabsShimmer,
            children: [
              (0, a.jsx)(P.Shimmer, { className: f().tabShimmer }),
              (0, a.jsx)(P.Shimmer, { className: f().tabShimmer }),
            ],
          }),
        N = (0, n.Pi)((e) => {
          var t, i, n, o, s, r, d, m, h, _;
          let { tabsState: C, tabElementId: p, isStickyHeader: x = !1 } = e,
            {
              collection: { dislikes: b },
            } = (0, c.oR4)(),
            { formatMessage: y } = (0, v.Z)(),
            { isScrolling: P } = (0, l.useContext)(g.pI),
            N = (0, S.v)(C),
            k = P ? -1 : 0;
          x && (k = P ? 0 : -1);
          let j = (0, l.useMemo)(() => {
              var e, t;
              return (
                null === (t = b.tracks) || void 0 === t
                  ? void 0
                  : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length
              )
                ? ""
                    .concat(y({ id: "entity-names.tracks" }), " • ")
                    .concat(b.tracks.items.length)
                : y({ id: "entity-names.tracks" });
            }, [
              null === (i = b.tracks) || void 0 === i
                ? void 0
                : null === (t = i.items) || void 0 === t
                  ? void 0
                  : t.length,
              y,
            ]),
            L = (0, l.useMemo)(() => {
              var e, t;
              return (
                null === (t = b.artists) || void 0 === t
                  ? void 0
                  : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length
              )
                ? ""
                    .concat(y({ id: "entity-names.artists" }), " • ")
                    .concat(b.artists.items.length)
                : y({ id: "entity-names.artists" });
            }, [
              null === (o = b.artists) || void 0 === o
                ? void 0
                : null === (n = o.items) || void 0 === n
                  ? void 0
                  : n.length,
              y,
            ]);
          return (0, a.jsxs)(g.no, {
            isShimmerVisible: b.isLoading,
            shimmer: (0, a.jsx)(E, {}),
            className: f().tabs,
            elementId: p,
            ...C,
            onTabChange: N,
            children: [
              (0, a.jsx)(g.OK, {
                className: f().tab,
                value: u.Q.TRACKS,
                title: j,
                "aria-label": y(
                  { id: "entity-names.tracks-count" },
                  {
                    value:
                      null !==
                        (h =
                          null === (r = b.tracks) || void 0 === r
                            ? void 0
                            : null === (s = r.items) || void 0 === s
                              ? void 0
                              : s.length) && void 0 !== h
                        ? h
                        : 0,
                  },
                ),
                "aria-hidden": P,
                tabIndex: k,
              }),
              (0, a.jsx)(g.OK, {
                className: f().tab,
                value: u.Q.ARTISTS,
                title: L,
                "aria-label": y(
                  { id: "entity-names.artists-count" },
                  {
                    value:
                      null !==
                        (_ =
                          null === (m = b.artists) || void 0 === m
                            ? void 0
                            : null === (d = m.items) || void 0 === d
                              ? void 0
                              : d.length) && void 0 !== _
                        ? _
                        : 0,
                  },
                ),
                "aria-hidden": P,
                tabIndex: k,
              }),
            ],
          });
        }),
        k = (0, n.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            n = (0, c.k67)(),
            { isScrolling: o } = (0, l.useContext)(g.pI);
          return (0, a.jsxs)("header", {
            className: f().root,
            "aria-hidden": o,
            children: [
              (0, a.jsxs)("div", {
                className: f().container,
                children: [
                  n.canBack &&
                    (0, a.jsx)(g.nP, {
                      withForwardControl: !1,
                      withBackwardControl: n.canBack,
                    }),
                  (0, a.jsx)(b.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: f().title,
                    children: (0, a.jsx)(x.Z, { id: "collection.my-dislikes" }),
                  }),
                ],
              }),
              (0, a.jsx)(N, { tabsState: t, tabElementId: i }),
            ],
          });
        });
      var j = i(5990),
        L = i.n(j);
      let A = (0, n.Pi)((e) => {
        var t, i, n;
        let { forwardRef: o, tabsState: r, tabElementId: d } = e,
          {
            collection: { dislikes: m },
            settings: h,
          } = (0, c.oR4)(),
          { formatMessage: x } = (0, v.Z)(),
          b = h.layout === c.t8m.Mobile,
          y = m.artists.isLoading
            ? 10
            : null !==
                  (n =
                    null === (i = m.artists) || void 0 === i
                      ? void 0
                      : null === (t = i.items) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== n
              ? n
              : 0,
          f = (0, l.useMemo)(
            () => ({
              Header: () => (0, a.jsx)(k, { tabsState: r, tabElementId: d }),
              Footer: () => (0, a.jsx)(g.$_, { className: L().footer }),
            }),
            [d, r],
          );
        return m.artists.isRejected
          ? (0, a.jsx)(C.D, {})
          : (0, a.jsx)("div", {
              className: L().root,
              children: (0, a.jsx)(s.TabPanel, {
                value: r.value,
                name: u.Q.ARTISTS,
                elementId: d,
                className: L().tabPanel,
                children: (0, a.jsx)(g.Wv, {
                  className: (0, _.W)(L().scrollContainer, L().important),
                  listClassName: (0, _.W)(L().content, L().content_withGrid),
                  customComponents: f,
                  totalCount: y,
                  itemContentCallback: (e) => {
                    var t, i;
                    let n =
                      null === (i = m.artists) || void 0 === i
                        ? void 0
                        : null === (t = i.items) || void 0 === t
                          ? void 0
                          : t[e];
                    if (!n) {
                      let e = x(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: x({ id: "entity-names.artist" }) },
                      );
                      return (0, a.jsx)(g.hi, {
                        "aria-label": e,
                        round: !0,
                        centered: !0,
                      });
                    }
                    return (0, a.jsx)(
                      p.IT,
                      { artist: n, contentLinesCount: 3, className: L().item },
                      n.id,
                    );
                  },
                  handleRef: o,
                  context: { listAriaLabel: x({ id: "entity-names.artists" }) },
                  isMobileLayout: b,
                  useWindowScroll: b,
                }),
              }),
            });
      });
      var I = i(20062),
        T = i(54146);
      let R = (0, n.Pi)((e) => {
        var t, i, n;
        let { forwardRef: o, tabsState: r, tabElementId: d } = e,
          { from: m } = (0, c.MhG)(),
          {
            collection: { dislikes: h },
            settings: p,
          } = (0, c.oR4)(),
          { formatMessage: x } = (0, v.Z)(),
          b = h.tracks.isLoading
            ? 10
            : null !==
                  (n =
                    null === (i = h.tracks) || void 0 === i
                      ? void 0
                      : null === (t = i.items) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== n
              ? n
              : 0,
          y = p.layout === c.t8m.Mobile,
          f = (0, l.useCallback)(
            (e) => {
              var t;
              null === (t = h.tracks) ||
                void 0 === t ||
                t.getTracksByRange(e.startIndex, e.endIndex);
            },
            [h.tracks],
          ),
          S = (0, l.useMemo)(
            () => ({
              Header: () => (0, a.jsx)(k, { tabsState: r, tabElementId: d }),
              Footer: () => (0, a.jsx)(g.$_, { className: L().footer }),
            }),
            [d, r],
          );
        return h.tracks.isRejected
          ? (0, a.jsx)(C.D, {})
          : (0, a.jsx)("div", {
              className: L().root,
              children: (0, a.jsx)(s.TabPanel, {
                value: r.value,
                name: u.Q.TRACKS,
                elementId: d,
                className: L().tabPanel,
                children: (0, a.jsx)(g.Wv, {
                  className: (0, _.W)(L().scrollContainer, L().important),
                  listClassName: (0, _.W)(L().content, L().content_tracks),
                  customComponents: S,
                  totalCount: b,
                  itemContentCallback: (e) => {
                    var t, i, n;
                    let o =
                      null === (n = h.tracks) || void 0 === n
                        ? void 0
                        : null === (i = n.items) || void 0 === i
                          ? void 0
                          : null === (t = i[e]) || void 0 === t
                            ? void 0
                            : t.data;
                    if (!o)
                      return (0, a.jsx)(g.DX, {
                        isActive: !0,
                        className: L().shimmerItem,
                        variant: c.Lxt.PLAYLIST,
                      });
                    let l = {
                      contextData: {
                        type: I.A.Various,
                        meta: { id: "disliked-tracks" },
                        from: m,
                        playDisliked: !0,
                      },
                      entitiesData: h.tracks.sonataEntitiesData,
                      queueParams: { index: e },
                      loadContextMeta: !1,
                    };
                    return o.isTrackNonMusic
                      ? (0, a.jsx)(T.FP, {
                          track: o,
                          playContextParams: l,
                          ignoreDislikedStyles: !0,
                          withPodcastName: !0,
                        })
                      : (0, a.jsx)(T.O2, {
                          track: o,
                          playContextParams: l,
                          ignoreDislikedStyles: !0,
                        });
                  },
                  onGetDataByRange: f,
                  debounceDurationInMs: 300,
                  handleRef: o,
                  context: { listAriaLabel: x({ id: "entity-names.tracks" }) },
                  isMobileLayout: y,
                  useWindowScroll: y,
                }),
              }),
            });
      });
      var w = i(15706),
        D = i(4856),
        M = i.n(D);
      let B = (0, n.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(k, { tabsState: t, tabElementId: i }),
              (0, a.jsxs)(s.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: M().root,
                children: [
                  (0, a.jsx)(w.Icon, {
                    className: M().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, a.jsx)(b.Heading, {
                    className: M().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, a.jsx)(x.Z, {
                      id: "entity-names.list-is-empty",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        O = (0, n.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            { isScrolling: n } = (0, l.useContext)(g.pI),
            o = (0, c.k67)();
          return (0, a.jsx)(g.h4, {
            variant: "composite",
            staticClassName: (0, _.W)(f().staticHeader, f().important),
            "aria-hidden": !n,
            stickyClassName: (0, _.W)(f().stickyHeader, f().important),
            stickyChild: (0, a.jsxs)("div", {
              className: f().container,
              children: [
                o.canBack &&
                  (0, a.jsx)(g.nP, {
                    withForwardControl: !1,
                    withBackwardControl: o.canBack,
                    buttonSize: "xs",
                  }),
                (0, a.jsx)(N, {
                  tabsState: t,
                  tabElementId: i,
                  isStickyHeader: !0,
                }),
              ],
            }),
          });
        }),
        H = (0, n.Pi)(() => {
          let e = (0, o.useSearchParams)(),
            {
              user: t,
              collection: { dislikes: i },
            } = (0, c.oR4)(),
            { contentScrollRef: n, setContentScrollRef: m } = (0, c.$Y6)(),
            _ = (0, l.useId)(),
            v = (0, l.useMemo)(() => {
              switch (e.get(c.wxR.TAB)) {
                case d.f.TRACKS:
                  break;
                case d.f.ARTISTS:
                  return u.Q.ARTISTS;
              }
              return u.Q.TRACKS;
            }, [e]),
            C = (0, s.useTabsState)(v);
          if ((t.account.uid || (0, o.notFound)(), i.isIdle)) {
            let e = Promise.allSettled([
              i.tracks.getData(),
              i.artists.getData(),
            ]);
            (0, l.use)(e);
          }
          (0, c.NOh)(i.isResolved),
            (0, l.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            );
          let p = (0, l.useMemo)(() => {
            switch (C.value) {
              case u.Q.TRACKS:
                if (i.tracks.isEmpty)
                  return (0, a.jsx)(B, { tabsState: C, tabElementId: _ });
                return (0, a.jsx)(R, {
                  forwardRef: m,
                  tabsState: C,
                  tabElementId: _,
                });
              case u.Q.ARTISTS:
                if (i.artists.isEmpty)
                  return (0, a.jsx)(B, { tabsState: C, tabElementId: _ });
                return (0, a.jsx)(A, {
                  forwardRef: m,
                  tabsState: C,
                  tabElementId: _,
                });
            }
          }, [i.artists.isEmpty, i.tracks.isEmpty, m, _, C]);
          return (0, a.jsx)(c.Lh6, {
            pageId: c.Rhz.OWN_DISLIKES,
            children: (0, a.jsx)(r.I7, {
              scrollElement: n,
              headerThreshold: 148,
              children: (0, a.jsxs)("div", {
                className: h().root,
                children: [(0, a.jsx)(O, { tabsState: C, tabElementId: _ }), p],
              }),
            }),
          });
        });
    },
    21016: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicLikedPage: function () {
          return x;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(71859),
        s = i(36621),
        r = i(71037),
        c = i(9883),
        d = i(42255),
        u = i(98836),
        m = i(13555),
        h = i(30476),
        _ = i(20794),
        v = i(96235),
        C = i(53350),
        p = i(50060),
        g = i.n(p);
      let x = (0, o.Pi)(() => {
        var e, t, i;
        let {
            user: o,
            collection: { nonMusicLiked: p },
            settings: x,
          } = (0, _.oR4)(),
          { formatMessage: b } = (0, s.Z)(),
          { contentScrollRef: y, setContentScrollRef: f } = (0, _.$Y6)(),
          S = (0, _.k67)(),
          P = x.layout === _.t8m.Mobile;
        o.account.uid &&
          p.loadingState === _.Gui.IDLE &&
          (0, l.use)(
            p.getData({
              userId: o.account.uid,
              metaType: "podcast",
              pageSize: 20,
            }),
          ),
          (0, _.NOh)(p.isResolved);
        let E = (0, l.useCallback)(
          (e) => {
            o.account.uid &&
              p.getData({
                userId: o.account.uid,
                metaType: "podcast",
                page: e,
                pageSize: 20,
              });
          },
          [p, o.account.uid],
        );
        if (p.isRejected) return (0, a.jsx)(u.D, {});
        (0, l.useEffect)(
          () => () => {
            p.reset();
          },
          [p],
        );
        let N = (0, l.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(v.$_, { className: g().footer }) }),
          [],
        );
        return (0, a.jsx)(_.Lh6, {
          pageId: _.Rhz.OWN_PODCASTS,
          children: (0, a.jsx)(h.I7, {
            scrollElement: y,
            outerTitle: b({ id: "page.delayed-non-music" }),
            children: (0, a.jsxs)("div", {
              className: g().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_LIKED_PAGE),
              children: [
                (0, a.jsx)(v.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: S.canBack,
                  children: (0, a.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, a.jsx)(r.Z, { id: "page.delayed-non-music" }),
                  }),
                }),
                p.isEmptyItems &&
                  !p.isRejected &&
                  (0, a.jsx)(C.u, { className: g().emptyBlock }),
                (0, a.jsx)(v.Wv, {
                  className: (0, n.W)(g().scrollContainer, g().important),
                  listClassName: g().content,
                  itemClassName: g().item,
                  customComponents: N,
                  itemContentCallback: (e) => {
                    var t;
                    let i =
                        null === (t = p.items) || void 0 === t ? void 0 : t[e],
                      n = b(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: b({ id: "entity-names.podcast" }) },
                      );
                    return i
                      ? (0, a.jsx)(
                          m.rf,
                          {
                            album: i,
                            contentLinesCount: 3,
                            withLikesCount: !0,
                            withAddition: !1,
                          },
                          i.id,
                        )
                      : (0, a.jsx)(v.hi, { "aria-label": n });
                  },
                  totalCount:
                    null !==
                      (t =
                        null === (e = p.pager) || void 0 === e
                          ? void 0
                          : e.total) && void 0 !== t
                      ? t
                      : 0,
                  onGetDataByPage: E,
                  pageSize: 20,
                  totalRequests:
                    null !== (i = p.requestsCount) && void 0 !== i ? i : 0,
                  handleRef: f,
                  context: {
                    listAriaLabel: b({ id: "collection.liked-non-music-list" }),
                  },
                  isMobileLayout: P,
                  useWindowScroll: P,
                }),
              ],
            }),
          }),
        });
      });
    },
    53350: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return d;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(71037),
        l = i(15706),
        s = i(42255),
        r = i(67043),
        c = i.n(r);
      let d = (e) => {
        let { className: t } = e;
        return (0, a.jsxs)("div", {
          className: (0, n.W)(c().emptyContent, t),
          children: [
            (0, a.jsx)(l.Icon, {
              className: c().emptyContentIcon,
              size: "l",
              variant: "album",
            }),
            (0, a.jsx)(s.Heading, {
              className: c().emptyContentTitle,
              variant: "h3",
              size: "xs",
              children: (0, a.jsx)(o.Z, {
                id: "error-messages.empty-collection-podcasts-and-books",
              }),
            }),
          ],
        });
      };
    },
    87024: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicPage: function () {
          return y;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(71859),
        s = i(36621),
        r = i(71037),
        c = i(9883),
        d = i(64275),
        u = i(42255),
        m = i(98836),
        h = i(13555),
        _ = i(30476),
        v = i(20794),
        C = i(96235),
        p = i(70361),
        g = i(53350),
        x = i(11112),
        b = i.n(x);
      let y = (0, o.Pi)(() => {
        var e, t;
        let {
            user: i,
            collection: { nonMusicLiked: o, shelf: x },
          } = (0, v.oR4)(),
          { formatMessage: y } = (0, s.Z)(),
          { contentScrollRef: f, setContentScrollRef: S } = (0, v.$Y6)(),
          P = (0, v.k67)();
        if (
          (i.account.uid &&
            o.loadingState === v.Gui.IDLE &&
            (0, l.use)(
              o.getData({
                userId: i.account.uid,
                metaType: "podcast",
                pageSize: 10,
              }),
            ),
          (0, v.NOh)(o.isResolved),
          o.isRejected && !x.hasLiked)
        )
          return (0, a.jsx)(m.D, {});
        (0, l.useEffect)(
          () => () => {
            o.reset(), x.reset();
          },
          [o, x],
        );
        let E = (0, l.useMemo)(() => {
            var e;
            return null === (e = o.items) || void 0 === e
              ? void 0
              : e.slice(0, 10).map((e, t) =>
                  e
                    ? (0, a.jsx)(
                        h.rf,
                        {
                          album: e,
                          contentLinesCount: 3,
                          withLikesCount: !0,
                          withAddition: !1,
                        },
                        null == e ? void 0 : e.id,
                      )
                    : (0, a.jsx)(C.hi, {}, "shimmer-".concat(t)),
                );
          }, [
            o.items,
            null === (e = o.items) || void 0 === e ? void 0 : e.length,
          ]),
          N = (0, l.useMemo)(() => {
            var e;
            return !o.isEmptyItems || o.isRejected || x.hasLiked
              ? o.isRejected ||
                (!(null === (e = o.items) || void 0 === e
                  ? void 0
                  : e.length) &&
                  o.requestsCount)
                ? null
                : (0, a.jsx)(C.HY, {
                    headerClassName: b().blockHeader,
                    containerClassName: b().carousel,
                    isShimmerVisible: o.isLoading,
                    isShimmerActive: !0,
                    title: y({ id: "page.delayed-non-music" }),
                    viewAllActionLink: "/collection/non-music/liked",
                    children: E,
                  })
              : (0, a.jsx)(g.u, {});
          }, [
            o.isLoading,
            y,
            E,
            o.isRejected,
            x.hasLiked,
            o.isEmptyItems,
            null === (t = o.items) || void 0 === t ? void 0 : t.length,
            o.requestsCount,
          ]);
        return (0, a.jsx)(v.Lh6, {
          pageId: v.Rhz.OWN_PODCASTS,
          children: (0, a.jsx)(_.I7, {
            scrollElement: f,
            outerTitle: y({ id: "page.podcasts-and-books" }),
            children: (0, a.jsxs)("div", {
              className: b().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_PAGE),
              children: [
                (0, a.jsx)(C.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: P.canBack,
                  children: (0, a.jsx)(u.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, a.jsx)(r.Z, {
                      id: "page.podcasts-and-books",
                    }),
                  }),
                }),
                (0, a.jsx)(d.t, {
                  ref: S,
                  containerClassName: (0, n.W)(
                    b().scrollableContainer,
                    b().important,
                  ),
                  className: b().root,
                  children: (0, a.jsxs)("div", {
                    className: b().content,
                    children: [
                      (0, a.jsxs)("div", {
                        className: b().likedBlocks,
                        children: [
                          N,
                          x.hasLiked &&
                            (0, a.jsx)(p.X, {
                              className: b().shelfBlock,
                              headerClassName: b().shelfBlockHeader,
                              itemsCount: 5,
                              withHeader: !0,
                            }),
                        ],
                      }),
                      (0, a.jsx)(C.$_, { className: b().footer }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      });
    },
    18096: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNotFoundPage: function () {
          return l;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(33558);
      let l = (0, n.Pi)(() => (0, a.jsx)(o.T, {}));
    },
    26448: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPage: function () {
          return f;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(97667),
        s = i(71859),
        r = i(36621),
        c = i(71037),
        d = i(9883),
        u = i(33413),
        m = i(64275),
        h = i(42255),
        _ = i(44443),
        v = i(98836),
        C = i(30476),
        p = i(299),
        g = i(20794),
        x = i(96235),
        b = i(15635),
        y = i.n(b);
      let f = (0, o.Pi)(() => {
        let { collection: e, user: t, experiments: i } = (0, g.oR4)(),
          { contentScrollRef: o, setContentScrollRef: b } = (0, g.$Y6)(),
          { formatMessage: f } = (0, r.Z)(),
          S = e.landing.loadingState !== g.Gui.REJECT && !!t.collectionHue;
        i.checkExperiment(g.peG.WebNextDisableCollection, "on") &&
          (0, l.redirect)("/"),
          e.landing.loadingState === g.Gui.IDLE &&
            (0, s.use)(
              e.landing.getSkeleton(
                { id: u.j.WEB_COLLECTION, showWizard: t.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, g.NOh)(e.landing.loadingState === g.Gui.RESOLVE);
        let P = (0, _._B)(e.landing),
          E = (0, s.useMemo)(
            () =>
              S && t.collectionHue
                ? { "--collection-color": (0, p.C)(t.collectionHue) }
                : null,
            [S, t.collectionHue],
          ),
          N = (0, s.useMemo)(
            () => ({
              color: (e) =>
                (0, a.jsx)(x.wx, {
                  title: f({ id: "collection.collection-color-title" }),
                  description: f({
                    id: "collection.collection-color-description",
                  }),
                  placement: "right",
                  children: (0, a.jsx)("span", {
                    className: y().collectionColor,
                    style: E,
                    children: e,
                  }),
                }),
            }),
            [E, f],
          );
        return (0, a.jsx)(g.Lh6, {
          pageId: g.Rhz.OWN_COLLECTION,
          children: (0, a.jsxs)(C.I7, {
            scrollElement: o,
            outerTitle: f({ id: "entity-names.collection" }),
            children: [
              (0, a.jsx)(x.h4, {
                variant: "text",
                showControls: !1,
                children: (0, a.jsxs)("div", {
                  className: y().header,
                  children: [
                    (0, a.jsx)(h.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xl",
                      children: (0, a.jsx)(c.Z, {
                        id: "entity-names.collection",
                      }),
                    }),
                    S &&
                      (0, a.jsx)(h.Caption, {
                        className: y().description,
                        variant: "div",
                        size: "m",
                        children: (0, a.jsx)(c.Z, {
                          id: "collection.collection-color",
                          values: N,
                        }),
                      }),
                  ],
                }),
              }),
              (0, a.jsxs)(m.t, {
                className: (0, n.W)(y().root, {
                  [y().root_withCollectionColor]: S,
                }),
                containerClassName: y().content,
                ref: b,
                children: [
                  (0, a.jsx)("div", {
                    className: (0, n.W)(y().landing, {
                      [y().landing_onlyWizard]: P,
                    }),
                    ...(0, d.BA)(d.Br.collection.COLLECTION_PAGE),
                    children: (0, a.jsx)(_.Od, {
                      landing: e.landing,
                      blockHeadingVariant: "h2",
                      errorComponent: (0, a.jsx)(v.D, {
                        className: y().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, a.jsx)(x.$_, { className: y().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    6052: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsCreatedPage: function () {
          return g;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(97667),
        s = i(71859),
        r = i(36621),
        c = i(71037),
        d = i(9883),
        u = i(42255),
        m = i(30476),
        h = i(82621),
        _ = i(20794),
        v = i(96235),
        C = i(63807),
        p = i.n(C);
      let g = (0, o.Pi)(() => {
        var e, t, i;
        let {
            user: o,
            collection: { playlistsCreated: C },
            experiments: g,
            settings: x,
          } = (0, _.oR4)(),
          { formatMessage: b } = (0, r.Z)(),
          { contentScrollRef: y, setContentScrollRef: f } = (0, _.$Y6)(),
          S = (0, _.k67)(),
          P = x.layout === _.t8m.Mobile,
          E = g.checkExperiment(
            _.peG.WebNextDisableCollectionCreatedPlaylists,
            "on",
          ),
          N = g.checkExperiment(_.peG.WebNextDisableCollection, "on");
        E && N && (0, l.redirect)("/"), E && (0, l.redirect)("/collection");
        let k = (0, s.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(v.$_, { className: p().footer }) }),
          [],
        );
        o.account.uid &&
          C.loadingState === _.Gui.IDLE &&
          (0, s.use)(
            C.getData({ userId: o.account.uid, page: 0, pageSize: 20 }),
          ),
          (0, _.NOh)(C.loadingState === _.Gui.RESOLVE);
        let j = (0, s.useCallback)(
          (e) => {
            o.account.uid &&
              C.getData({ userId: o.account.uid, page: e, pageSize: 20 });
          },
          [C, o.account.uid],
        );
        return (
          (0, s.useEffect)(
            () => () => {
              C.reset();
            },
            [C],
          ),
          (0, a.jsx)(_.Lh6, {
            pageId: _.Rhz.OWN_PLAYLISTS,
            children: (0, a.jsx)(m.I7, {
              scrollElement: y,
              outerTitle: b({ id: "entity-names.my-playlists" }),
              children: (0, a.jsxs)("div", {
                className: p().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_CREATED_PAGE),
                children: [
                  (0, a.jsx)(v.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: S.canBack,
                    children: (0, a.jsx)(u.Heading, {
                      id: "collection-playlistsCreated-header",
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, a.jsx)(c.Z, {
                        id: "entity-names.my-playlists",
                      }),
                    }),
                  }),
                  (0, a.jsx)(v.Wv, {
                    className: (0, n.W)(p().scrollContainer, p().important),
                    customComponents: k,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == C
                            ? void 0
                            : null === (t = C.items) || void 0 === t
                              ? void 0
                              : t[e],
                        n = b(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: b({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, a.jsx)(
                            h.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, a.jsx)(v.hi, { "aria-label": n });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == C
                            ? void 0
                            : null === (e = C.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: j,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = C.requests) && void 0 !== i ? i : 0,
                    listClassName: p().content,
                    itemClassName: p().item,
                    handleRef: f,
                    context: {
                      listAriaLabel: b({
                        id: "collection.created-playlists-list",
                      }),
                    },
                    isMobileLayout: P,
                    useWindowScroll: P,
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    9692: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsLikedPage: function () {
          return x;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(97667),
        s = i(71859),
        r = i(36621),
        c = i(71037),
        d = i(9883),
        u = i(18965),
        m = i(42255),
        h = i(30476),
        _ = i(82621),
        v = i(20794),
        C = i(96235),
        p = i(82860),
        g = i.n(p);
      let x = (0, o.Pi)(() => {
        var e, t, i;
        let {
            user: o,
            collection: { playlistsLiked: p },
            experiments: x,
            settings: b,
          } = (0, v.oR4)(),
          { formatMessage: y } = (0, r.Z)(),
          { contentScrollRef: f, setContentScrollRef: S } = (0, v.$Y6)(),
          P = (0, v.k67)(),
          E = x.checkExperiment(
            v.peG.WebNextDisableCollectionLikedPlaylists,
            "on",
          ),
          N = x.checkExperiment(v.peG.WebNextDisableCollection, "on"),
          k = b.layout === v.t8m.Mobile;
        E && N && (0, l.redirect)("/"), E && (0, l.redirect)("/collection");
        let j = (0, s.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(C.$_, { className: g().footer }) }),
          [],
        );
        o.account.uid &&
          p.loadingState === v.Gui.IDLE &&
          (0, s.use)(
            p.getData({
              userId: o.account.uid,
              sortOrder: u.A.DESC,
              metaType: "music",
              page: 0,
              pageSize: 20,
            }),
          ),
          (0, v.NOh)(p.loadingState === v.Gui.RESOLVE);
        let L = (0, s.useCallback)(
          (e) => {
            o.account.uid &&
              p.getData({
                userId: o.account.uid,
                sortOrder: u.A.DESC,
                metaType: "music",
                page: e,
                pageSize: 20,
              });
          },
          [p, o.account.uid],
        );
        return (
          (0, s.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          ),
          (0, a.jsx)(v.Lh6, {
            pageId: v.Rhz.OWN_PLAYLISTS,
            children: (0, a.jsx)(h.I7, {
              scrollElement: f,
              outerTitle: y({ id: "entity-names.favourite-playlists" }),
              children: (0, a.jsxs)("div", {
                className: g().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_LIKED_PAGE),
                children: [
                  (0, a.jsx)(C.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: P.canBack,
                    children: (0, a.jsx)(m.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, a.jsx)(c.Z, {
                        id: "entity-names.favourite-playlists",
                      }),
                    }),
                  }),
                  (0, a.jsx)(C.Wv, {
                    className: (0, n.W)(g().scrollContainer, g().important),
                    customComponents: j,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == p
                            ? void 0
                            : null === (t = p.items) || void 0 === t
                              ? void 0
                              : t[e],
                        n = y(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: y({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, a.jsx)(
                            _.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, a.jsx)(C.hi, { "aria-label": n });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == p
                            ? void 0
                            : null === (e = p.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: L,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = p.requests) && void 0 !== i ? i : 0,
                    listClassName: g().content,
                    itemClassName: g().item,
                    handleRef: S,
                    context: {
                      listAriaLabel: y({
                        id: "collection.liked-playlists-list",
                      }),
                    },
                    isMobileLayout: k,
                    useWindowScroll: k,
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    24064: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsPage: function () {
          return O;
        },
      });
      var a,
        n,
        o = i(95660),
        l = i(44744),
        s = i(97667),
        r = i(71859),
        c = i(9883),
        d = i(18965),
        u = i(43703),
        m = i(30476),
        h = i(20794);
      ((a = n || (n = {}))[(a.CREATED = 0)] = "CREATED"),
        (a[(a.LIKED = 1)] = "LIKED");
      var _ = i(30889),
        v = i.n(_),
        C = i(23974),
        p = i(36621),
        g = i(82621),
        x = i(39583),
        b = i(96235),
        y = i(71037),
        f = i(42255);
      let S = (e) => {
        let t = (0, h.m5R)();
        return (0, r.useCallback)(
          (i) => {
            var a;
            switch (
              (null === (a = e.onTabChange) || void 0 === a || a.call(e, i), i)
            ) {
              case n.CREATED:
                t("/collection/playlists?tab=".concat(h.cUw.CREATED));
                break;
              case n.LIKED:
                t("/collection/playlists?tab=".concat(h.cUw.LIKED));
            }
          },
          [t, e],
        );
      };
      var P = i(75964),
        E = i.n(P),
        N = i(18344);
      let k = () =>
          (0, o.jsxs)("div", {
            className: E().tabsShimmer,
            children: [
              (0, o.jsx)(N.Shimmer, { className: E().tabShimmer }),
              (0, o.jsx)(N.Shimmer, { className: E().tabShimmer }),
            ],
          }),
        j = (0, l.Pi)((e) => {
          var t, i, a, l, s, d;
          let { tabsState: u, tabElementId: m } = e,
            {
              collection: { playlistsCreated: _, playlistsLiked: v },
            } = (0, h.oR4)(),
            { formatMessage: C } = (0, p.Z)(),
            g = (0, h.k67)(),
            { isScrolling: x } = (0, r.useContext)(b.pI),
            P = S(u),
            N = (0, r.useMemo)(() => {
              var e;
              return (null === (e = _.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      C({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(_.pager.total)
                : C({ id: "collection.your-created-playlists" });
            }, [C, null === (t = _.pager) || void 0 === t ? void 0 : t.total]),
            j = (0, r.useMemo)(() => {
              var e;
              return (null === (e = v.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(C({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(v.pager.total)
                : C({ id: "collection.your-liked-playlists" });
            }, [C, null === (i = v.pager) || void 0 === i ? void 0 : i.total]);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("header", {
                className: E().root,
                "aria-hidden": x,
                ...(0, c.BA)(
                  c.Br.collection.COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER,
                ),
                children: (0, o.jsxs)("div", {
                  className: E().container,
                  children: [
                    g.canBack &&
                      (0, o.jsx)(b.nP, {
                        withForwardControl: !1,
                        withBackwardControl: g.canBack,
                      }),
                    (0, o.jsx)(f.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      className: E().title,
                      ...(0, c.BA)(
                        c.Br.collection
                          .COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER_TITLE,
                      ),
                      children: (0, o.jsx)(y.Z, {
                        id: "entity-names.artist-playlist",
                      }),
                    }),
                  ],
                }),
              }),
              (0, o.jsxs)(b.no, {
                isShimmerVisible: _.isLoading,
                shimmer: (0, o.jsx)(k, {}),
                className: E().staticTabs,
                elementId: m,
                ...u,
                onTabChange: P,
                children: [
                  (0, o.jsx)(b.OK, {
                    className: E().tab,
                    value: n.CREATED,
                    title: N,
                    "aria-label": C(
                      { id: "entity-names.created-playlists-count" },
                      {
                        value:
                          null !==
                            (s =
                              null === (a = _.pager) || void 0 === a
                                ? void 0
                                : a.total) && void 0 !== s
                            ? s
                            : 0,
                      },
                    ),
                    "aria-hidden": x,
                    tabIndex: x ? -1 : 0,
                  }),
                  (0, o.jsx)(b.OK, {
                    className: E().tab,
                    value: n.LIKED,
                    title: j,
                    "aria-label": C(
                      { id: "entity-names.liked-playlists-count" },
                      {
                        value:
                          null !==
                            (d =
                              null === (l = v.pager) || void 0 === l
                                ? void 0
                                : l.total) && void 0 !== d
                            ? d
                            : 0,
                      },
                    ),
                    "aria-hidden": x,
                    tabIndex: x ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var L = i(297),
        A = i.n(L);
      let I = (0, l.Pi)((e) => {
          var t, i, a;
          let { forwardRef: l, tabsState: s, tabElementId: c } = e,
            {
              user: d,
              collection: { playlistsCreated: m },
              settings: _,
            } = (0, h.oR4)(),
            { formatMessage: v } = (0, p.Z)(),
            y = _.layout === h.t8m.Mobile,
            f = (0, r.useMemo)(
              () => ({
                Header: () => (0, o.jsx)(j, { tabsState: s, tabElementId: c }),
                Footer: () => (0, o.jsx)(b.$_, { className: A().footer }),
              }),
              [c, s],
            ),
            S = (0, r.useCallback)(
              (e) => {
                d.account.uid &&
                  m.getData({ userId: d.account.uid, page: e, pageSize: 20 });
              },
              [m, d.account.uid],
            ),
            P =
              (null !==
                (i =
                  null === (t = m.pager) || void 0 === t ? void 0 : t.total) &&
              void 0 !== i
                ? i
                : 0) + 1;
          return (0, o.jsx)("div", {
            className: A().root,
            children: (0, o.jsx)(u.TabPanel, {
              value: s.value,
              name: n.CREATED,
              elementId: c,
              className: A().tabPanel,
              children: (0, o.jsx)(b.Wv, {
                className: (0, C.W)(A().scrollContainer, A().important),
                customComponents: f,
                itemContentCallback: (e) => {
                  var t;
                  if (0 === e) return (0, o.jsx)(x.lN, {});
                  let i =
                      null == m
                        ? void 0
                        : null === (t = m.items) || void 0 === t
                          ? void 0
                          : t[e - 1],
                    a = v(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: v({ id: "entity-names.playlist" }) },
                    );
                  return i
                    ? (0, o.jsx)(
                        g.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, o.jsx)(b.hi, { "aria-label": a });
                },
                totalCount: P,
                onGetDataByPage: S,
                pageSize: 20,
                totalRequests:
                  null !== (a = m.requests) && void 0 !== a ? a : 0,
                listClassName: A().content,
                itemClassName: A().item,
                handleRef: l,
                context: {
                  listAriaLabel: v({ id: "collection.created-playlists-list" }),
                },
                isMobileLayout: y,
                useWindowScroll: y,
              }),
            }),
          });
        }),
        T = (0, l.Pi)((e) => {
          var t, i, a;
          let { forwardRef: l, tabsState: s, tabElementId: c } = e,
            {
              user: m,
              collection: { playlistsLiked: _ },
              settings: v,
            } = (0, h.oR4)(),
            { formatMessage: x } = (0, p.Z)(),
            y = v.layout === h.t8m.Mobile,
            f = (0, r.useCallback)(
              (e) => {
                m.account.uid &&
                  _.getData({
                    userId: m.account.uid,
                    sortOrder: d.A.DESC,
                    metaType: "music",
                    page: e,
                    pageSize: 20,
                  });
              },
              [_, m.account.uid],
            ),
            S = (0, r.useMemo)(
              () => ({
                Header: () => (0, o.jsx)(j, { tabsState: s, tabElementId: c }),
                Footer: () => (0, o.jsx)(b.$_, { className: A().footer }),
              }),
              [c, s],
            );
          return (0, o.jsx)("div", {
            className: A().root,
            children: (0, o.jsx)(u.TabPanel, {
              value: s.value,
              name: n.LIKED,
              elementId: c,
              className: A().tabPanel,
              children: (0, o.jsx)(b.Wv, {
                className: (0, C.W)(A().scrollContainer, A().important),
                customComponents: S,
                itemContentCallback: (e) => {
                  var t;
                  let i =
                      null == _
                        ? void 0
                        : null === (t = _.items) || void 0 === t
                          ? void 0
                          : t[e],
                    a = x(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: x({ id: "entity-names.playlist" }) },
                    );
                  return i
                    ? (0, o.jsx)(
                        g.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, o.jsx)(b.hi, { "aria-label": a });
                },
                totalCount:
                  null !==
                    (i =
                      null == _
                        ? void 0
                        : null === (t = _.pager) || void 0 === t
                          ? void 0
                          : t.total) && void 0 !== i
                    ? i
                    : 0,
                onGetDataByPage: f,
                pageSize: 20,
                totalRequests:
                  null !== (a = _.requests) && void 0 !== a ? a : 0,
                listClassName: A().content,
                itemClassName: A().item,
                handleRef: l,
                context: {
                  listAriaLabel: x({ id: "collection.liked-playlists-list" }),
                },
                isMobileLayout: y,
                useWindowScroll: y,
              }),
            }),
          });
        });
      var R = i(15706),
        w = i(91499),
        D = i.n(w);
      let M = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(j, { tabsState: t, tabElementId: i }),
              (0, o.jsxs)(u.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: D().root,
                children: [
                  (0, o.jsx)(R.Icon, {
                    className: D().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, o.jsx)(f.Heading, {
                    className: D().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, o.jsx)(y.Z, {
                      id: "error-messages.empty-collection-liked-playlists",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        B = (0, l.Pi)((e) => {
          var t, i, a, l, s, d;
          let { tabsState: u, tabElementId: m } = e,
            {
              collection: { playlistsCreated: _, playlistsLiked: v },
            } = (0, h.oR4)(),
            { formatMessage: g } = (0, p.Z)(),
            { isScrolling: x } = (0, r.useContext)(b.pI),
            y = (0, h.k67)(),
            f = S(u),
            P = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = _.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      g({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(
                      null === (t = _.pager) || void 0 === t ? void 0 : t.total,
                    )
                : g({ id: "collection.your-created-playlists" });
            }, [g, null === (t = _.pager) || void 0 === t ? void 0 : t.total]),
            N = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = v.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(g({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(
                      null === (t = v.pager) || void 0 === t ? void 0 : t.total,
                    )
                : g({ id: "collection.your-liked-playlists" });
            }, [g, null === (i = v.pager) || void 0 === i ? void 0 : i.total]);
          return (0, o.jsx)(b.h4, {
            variant: "composite",
            staticClassName: (0, C.W)(E().staticHeader, E().important),
            "aria-hidden": !x,
            stickyClassName: (0, C.W)(E().stickyHeader, E().important),
            containerProps: (0, c.BA)(
              c.Br.collection.COLLECTION_PLAYLISTS_PAGE_STICKY_HEADER,
            ),
            stickyChild: (0, o.jsxs)("div", {
              className: E().container,
              children: [
                y.canBack &&
                  (0, o.jsx)(b.nP, {
                    withForwardControl: !1,
                    withBackwardControl: y.canBack,
                    buttonSize: "xs",
                  }),
                (0, o.jsxs)(b.no, {
                  isShimmerVisible: _.isLoading,
                  shimmer: (0, o.jsx)(k, {}),
                  className: E().stickyTabs,
                  elementId: m,
                  ...u,
                  onTabChange: f,
                  children: [
                    (0, o.jsx)(b.OK, {
                      className: E().tab,
                      value: n.CREATED,
                      title: P,
                      "aria-label": g(
                        { id: "entity-names.created-playlists-count" },
                        {
                          value:
                            null !==
                              (s =
                                null === (a = _.pager) || void 0 === a
                                  ? void 0
                                  : a.total) && void 0 !== s
                              ? s
                              : 0,
                        },
                      ),
                      "aria-hidden": !x,
                      tabIndex: x ? 0 : -1,
                    }),
                    (0, o.jsx)(b.OK, {
                      className: E().tab,
                      value: n.LIKED,
                      title: N,
                      "aria-label": g(
                        { id: "entity-names.liked-playlists-count" },
                        {
                          value:
                            null !==
                              (d =
                                null === (l = v.pager) || void 0 === l
                                  ? void 0
                                  : l.total) && void 0 !== d
                              ? d
                              : 0,
                        },
                      ),
                      "aria-hidden": !x,
                      tabIndex: x ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        O = (0, l.Pi)(() => {
          let e = (0, s.useSearchParams)(),
            {
              user: t,
              collection: { playlistsCreated: i, playlistsLiked: a },
              experiments: l,
            } = (0, h.oR4)(),
            { contentScrollRef: _, setContentScrollRef: C } = (0, h.$Y6)(),
            p = l.checkExperiment(h.peG.WebNextDisableCollection, "on"),
            g = (0, r.useId)(),
            x = (0, r.useMemo)(() => {
              switch (e.get(h.wxR.TAB)) {
                case h.cUw.CREATED:
                  break;
                case h.cUw.LIKED:
                  return n.LIKED;
              }
              return n.CREATED;
            }, [e]),
            b = (0, u.useTabsState)(x);
          if (
            (p && (0, s.redirect)("/"),
            t.account.uid && i.loadingState === h.Gui.IDLE)
          ) {
            let e = Promise.allSettled([
              i.getData({ userId: t.account.uid, page: 0, pageSize: 20 }),
              a.getData({
                userId: t.account.uid,
                sortOrder: d.A.DESC,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
            ]);
            (0, r.use)(e);
          }
          (0, h.NOh)(i.loadingState === h.Gui.RESOLVE),
            (0, r.useEffect)(
              () => () => {
                i.reset(), a.reset();
              },
              [i, a],
            );
          let y = (0, r.useMemo)(() => {
            switch (b.value) {
              case n.CREATED:
                return (0, o.jsx)(I, {
                  forwardRef: C,
                  tabsState: b,
                  tabElementId: g,
                });
              case n.LIKED:
                if (a.isEmpty)
                  return (0, o.jsx)(M, { tabsState: b, tabElementId: g });
                return (0, o.jsx)(T, {
                  forwardRef: C,
                  tabsState: b,
                  tabElementId: g,
                });
            }
          }, [C, a.isEmpty, g, b]);
          return (0, o.jsx)(h.Lh6, {
            pageId: h.Rhz.OWN_PLAYLISTS,
            children: (0, o.jsx)(m.I7, {
              scrollElement: _,
              headerThreshold: 148,
              children: (0, o.jsxs)("div", {
                className: v().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_PLAYLISTS_PAGE),
                children: [(0, o.jsx)(B, { tabsState: b, tabElementId: g }), y],
              }),
            }),
          });
        });
    },
    70361: function (e, t, i) {
      "use strict";
      i.d(t, {
        X: function () {
          return _;
        },
      });
      var a = i(95660),
        n = i(23974),
        o = i(44744),
        l = i(71859),
        s = i(20062),
        r = i(45173),
        c = i(54146),
        d = i(20794),
        u = i(71368),
        m = i(80611),
        h = i.n(m);
      let _ = (0, o.Pi)((e) => {
        var t, i;
        let {
            className: o,
            itemsCount: m,
            withHeader: _,
            headerClassName: v,
          } = e,
          {
            sonataState: C,
            collection: {
              shelf: { liked: p },
            },
          } = (0, d.oR4)();
        p.loadingState === d.Gui.IDLE && (0, l.use)(p.getData());
        let g = (0, l.useMemo)(() => {
          var e;
          return null === (e = p.entities) || void 0 === e
            ? void 0
            : e.map((e) =>
                (0, a.jsx)(
                  c.FP,
                  {
                    track: e.track,
                    playContextParams: {
                      contextData: {
                        type: s.A.Album,
                        meta: {
                          id: e.track.albumId ? Number(e.track.albumId) : 0,
                        },
                        from: p.typeForFrom || "",
                      },
                      queueParams: { entityId: e.track.id },
                      loadContextMeta: !1,
                      entitiesData: C.unloadedEntitiesDataFromModels,
                    },
                    withPodcastName: !0,
                  },
                  "".concat(e.track.id, ":").concat(e.track.albumId),
                ),
              );
        }, [p.entities, p.typeForFrom, C.unloadedEntitiesDataFromModels]);
        return !p.isLoading &&
          (null === (t = p.entities) || void 0 === t ? void 0 : t.length)
          ? _
            ? (0, a.jsx)(r.KN, {
                className: o,
                headerClassName: (0, n.W)(h().header, v),
                isLoading: p.isLoading,
                title: null !== (i = p.title) && void 0 !== i ? i : "",
                maxColumns: 1,
                itemsPerColumn: m,
                viewAllAction: "/collection/shelf/liked",
                showControls: !0,
                children: g,
              })
            : (0, a.jsx)("div", { className: o, children: g })
          : (0, a.jsx)(u.D, { className: o, withHeader: _ });
      });
    },
    26597: function (e, t, i) {
      "use strict";
      i.d(t, {
        c: function () {
          return p;
        },
      });
      var a,
        n,
        o = i(95660),
        l = i(23974),
        s = i(44744),
        r = i(71859),
        c = i(45173),
        d = i(54146),
        u = i(20794),
        m = i(20062);
      ((a = n || (n = {})).ALBUM = "album"), (a.PLAYLIST = "playlist");
      let h = (e, t) => {
        var i, a;
        return e.type === n.ALBUM
          ? {
              type: m.A.Album,
              meta: {
                id:
                  (null === (a = e.album) || void 0 === a ? void 0 : a.id) || 0,
              },
              from: t || "",
            }
          : {
              type: m.A.Playlist,
              meta: {
                id:
                  (null === (i = e.playlist) || void 0 === i ? void 0 : i.id) ||
                  "",
              },
              from: t || "",
            };
      };
      var _ = i(71368),
        v = i(749),
        C = i.n(v);
      let p = (0, s.Pi)((e) => {
        var t, i;
        let {
            className: a,
            itemsCount: n,
            withHeader: s,
            headerClassName: m,
          } = e,
          {
            sonataState: v,
            collection: {
              shelf: { recentlyPlayed: p },
            },
          } = (0, u.oR4)();
        p.loadingState === u.Gui.IDLE && (0, r.use)(p.getData());
        let g = (0, r.useMemo)(() => {
          var e;
          return null === (e = p.entities) || void 0 === e
            ? void 0
            : e.map((e, t) => {
                let i = h(e, p.typeForFrom);
                return (0, o.jsx)(
                  d.FP,
                  {
                    track: e.track,
                    playContextParams: {
                      contextData: i,
                      queueParams: { entityId: e.track.id },
                      loadContextMeta: !1,
                      entitiesData: v.unloadedEntitiesDataFromModels,
                    },
                    withPodcastName: !0,
                  },
                  t,
                );
              });
        }, [p.entities, p.typeForFrom, v.unloadedEntitiesDataFromModels]);
        return !p.isLoading &&
          (null === (t = p.entities) || void 0 === t ? void 0 : t.length)
          ? s
            ? (0, o.jsx)(c.KN, {
                className: a,
                headerClassName: (0, l.W)(C().header, m),
                isLoading: p.isLoading,
                title: null !== (i = p.title) && void 0 !== i ? i : "",
                maxColumns: 1,
                itemsPerColumn: n,
                viewAllAction: "/collection/shelf/recently-played",
                showControls: !0,
                children: g,
              })
            : (0, o.jsx)("div", { className: a, children: g })
          : (0, o.jsx)(_.D, { className: a, withHeader: s });
      });
    },
    71368: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return u;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(18344),
        l = i(20794),
        s = i(96235),
        r = i(85662),
        c = i.n(r);
      let d = () =>
          Array.from({ length: 5 }, (e) =>
            (0, a.jsx)(
              s.DX,
              { variant: l.Lxt.PLAYLIST, className: c().track, isActive: !0 },
              e,
            ),
          ),
        u = (0, n.Pi)((e) => {
          let { className: t, withHeader: i } = e;
          return (0, a.jsxs)("div", {
            className: t,
            children: [
              i &&
                (0, a.jsx)(o.Shimmer, {
                  radius: "l",
                  width: 100,
                  height: 24,
                  className: c().title,
                  isActive: !0,
                }),
              (0, a.jsx)(d, {}),
            ],
          });
        });
    },
    64868: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfLikedPage: function () {
          return S;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(71859),
        l = i(36621),
        s = i(71037),
        r = i(9883),
        c = i(64275),
        d = i(42255),
        u = i(98836),
        m = i(30476),
        h = i(20794),
        _ = i(96235),
        v = i(70361),
        C = i(97808),
        p = i.n(C),
        g = i(93062),
        x = i(15706),
        b = i(76679),
        y = i.n(b);
      let f = (0, n.Pi)(() => {
          let e = (0, h.s0h)("/non-music");
          return (0, a.jsxs)("div", {
            className: y().root,
            children: [
              (0, a.jsx)("div", {
                className: y().iconBackground,
                children: (0, a.jsx)(x.Icon, { variant: "like", size: "l" }),
              }),
              (0, a.jsx)(d.Heading, {
                className: y().title,
                variant: "h3",
                size: "xs",
                children: (0, a.jsx)(s.Z, {
                  id: "error-messages.empty-shelf-liked-page-title",
                }),
              }),
              (0, a.jsx)(g.z, {
                onClick: e,
                className: y().button,
                role: "link",
                color: "secondary",
                size: "s",
                radius: "xxxl",
                children: (0, a.jsx)(d.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, a.jsx)(s.Z, {
                    id: "error-messages.empty-shelf-liked-page-link",
                  }),
                }),
              }),
            ],
          });
        }),
        S = (0, n.Pi)(() => {
          let {
              collection: {
                shelf: { liked: e },
              },
            } = (0, h.oR4)(),
            { contentScrollRef: t, setContentScrollRef: i } = (0, h.$Y6)(),
            { formatMessage: n } = (0, l.Z)(),
            C = (0, h.k67)();
          (0, o.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
            (0, h.NOh)(e.isResolved);
          let g = (0, o.useMemo)(
            () => (e.isEmpty ? (0, a.jsx)(f, {}) : (0, a.jsx)(v.X, {})),
            [e.isEmpty],
          );
          return e.isRejected
            ? (0, a.jsx)(u.D, {})
            : (0, a.jsxs)(m.I7, {
                scrollElement: t,
                outerTitle: n({ id: "podcast.shelf-liked-title" }),
                children: [
                  (0, a.jsx)(_.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: C.canBack,
                    children: (0, a.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, a.jsx)(s.Z, {
                        id: "podcast.shelf-liked-title",
                      }),
                    }),
                  }),
                  (0, a.jsxs)(c.t, {
                    ref: i,
                    containerClassName: p().scrollableContainer,
                    className: p().root,
                    ...(0, r.BA)(r.Br.collection.COLLECTION_SHELF_LIKED_PAGE),
                    children: [g, (0, a.jsx)(_.$_, { className: p().footer })],
                  }),
                ],
              });
        });
    },
    14389: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfNewEpisodesPage: function () {
          return E;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(97667),
        l = i(71859),
        s = i(9883),
        r = i(64275),
        c = i(42255),
        d = i(98836),
        u = i(30476),
        m = i(20794),
        h = i(96235),
        _ = i(23974),
        v = i(71037),
        C = i(20062),
        p = i(93062),
        g = i(15706),
        x = i(54146),
        b = i(87501),
        y = i.n(b);
      let f = (0, n.Pi)(() => {
        let {
            sonataState: e,
            collection: {
              shelf: { newEpisodes: t },
            },
          } = (0, m.oR4)(),
          i = (0, m.s0h)("/non-music");
        t.loadingState === m.Gui.IDLE && (0, l.use)(t.getData());
        let n = (0, l.useMemo)(() => {
            var i;
            return null === (i = t.tracks) || void 0 === i
              ? void 0
              : i.map((i) =>
                  (0, a.jsx)(
                    x.FP,
                    {
                      track: i,
                      playContextParams: {
                        contextData: {
                          type: C.A.Album,
                          meta: { id: i.albumId ? Number(i.albumId) : 0 },
                          from: t.typeForFrom || "",
                        },
                        queueParams: { entityId: i.id },
                        loadContextMeta: !1,
                        entitiesData: e.unloadedEntitiesDataFromModels,
                      },
                      withPodcastName: !0,
                    },
                    "".concat(i.id, ":").concat(i.albumId),
                  ),
                );
          }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
          o = (0, l.useMemo)(
            () =>
              t.isEmpty
                ? (0, a.jsx)(v.Z, {
                    id: "error-messages.empty-shelf-new-episodes-title-no-tracks",
                  })
                : (0, a.jsx)(v.Z, {
                    id: "error-messages.empty-shelf-new-episodes-title",
                  }),
            [t.isEmpty],
          );
        return t.isLoading
          ? (0, a.jsx)(h.DX, { variant: m.Lxt.PLAYLIST, isActive: !0 })
          : (0, a.jsxs)("div", {
              className: (0, _.W)(y().root, {
                [y().root_emptyList]: t.isEmpty,
              }),
              children: [
                n,
                (0, a.jsxs)("div", {
                  className: y().wrapper,
                  children: [
                    (0, a.jsx)("div", {
                      className: y().iconBackground,
                      children: (0, a.jsx)(g.Icon, {
                        variant: "like",
                        size: "l",
                      }),
                    }),
                    (0, a.jsx)(c.Heading, {
                      className: y().title,
                      variant: "h3",
                      size: "xs",
                      children: o,
                    }),
                    !t.isEmpty &&
                      (0, a.jsx)(c.Caption, {
                        type: "controls",
                        variant: "span",
                        size: "l",
                        weight: "normal",
                        children: (0, a.jsx)(v.Z, {
                          id: "error-messages.empty-shelf-new-episodes-text",
                        }),
                      }),
                    (0, a.jsx)(p.z, {
                      onClick: i,
                      className: y().button,
                      role: "link",
                      color: "secondary",
                      size: "s",
                      radius: "xxxl",
                      children: (0, a.jsx)(c.Caption, {
                        type: "controls",
                        variant: "span",
                        size: "m",
                        children: (0, a.jsx)(v.Z, {
                          id: "error-messages.empty-shelf-liked-page-link",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
      });
      var S = i(99161),
        P = i.n(S);
      let E = (0, n.Pi)(() => {
        var e, t, i;
        let { newEpisodes: n } = (0, m.oR4)().collection.shelf,
          { contentScrollRef: _, setContentScrollRef: v } = (0, m.$Y6)(),
          C = (0, m.k67)(),
          p = (0, o.useRouter)(),
          g = (0, m.SZ_)(
            "/users/"
              .concat(
                null === (t = n.playlist) || void 0 === t
                  ? void 0
                  : null === (e = t.owner) || void 0 === e
                    ? void 0
                    : e.login,
                "/playlists/",
              )
              .concat(
                null === (i = n.playlist) || void 0 === i ? void 0 : i.kind,
              ),
          ),
          x = (0, l.useCallback)(() => {
            g && p.replace(g);
          }, [p, g]);
        return ((0, l.useEffect)(() => {
          n.isResolved && n.withPlaylist && x();
        }, [n.isResolved, n.withPlaylist, x]),
        (0, l.useEffect)(
          () => () => {
            n.reset();
          },
          [n],
        ),
        (0, m.NOh)(n.isResolved),
        n.isRejected)
          ? (0, a.jsx)(d.D, {})
          : (0, a.jsxs)(u.I7, {
              scrollElement: _,
              outerTitle: n.title,
              children: [
                (0, a.jsx)(h.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, a.jsx)(c.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: n.title,
                  }),
                }),
                (0, a.jsxs)(r.t, {
                  ref: v,
                  containerClassName: P().scrollableContainer,
                  className: P().root,
                  ...(0, s.BA)(
                    s.Br.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                  ),
                  children: [
                    (0, a.jsx)(f, {}),
                    (0, a.jsx)(h.$_, { className: P().footer }),
                  ],
                }),
              ],
            });
      });
    },
    59659: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfPage: function () {
          return x;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(71859),
        l = i(36621),
        s = i(71037),
        r = i(9883),
        c = i(64275),
        d = i(42255),
        u = i(98836),
        m = i(30476),
        h = i(20794),
        _ = i(96235),
        v = i(70361),
        C = i(26597),
        p = i(68507),
        g = i.n(p);
      let x = (0, n.Pi)(() => {
        let {
            collection: { shelf: e },
          } = (0, h.oR4)(),
          { contentScrollRef: t, setContentScrollRef: i } = (0, h.$Y6)(),
          { formatMessage: n } = (0, l.Z)(),
          p = (0, h.k67)();
        return ((0, o.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NOh)(e.isResolved),
        e.isRejected)
          ? (0, a.jsx)(u.D, {})
          : (0, a.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: n({ id: "page.shelf" }),
              children: [
                (0, a.jsx)(_.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: p.canBack,
                  children: (0, a.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, a.jsx)(s.Z, { id: "page.shelf" }),
                  }),
                }),
                (0, a.jsx)(c.t, {
                  ref: i,
                  containerClassName: g().scrollableContainer,
                  className: g().root,
                  ...(0, r.BA)(r.Br.collection.COLLECTION_SHELF_PAGE),
                  children: (0, a.jsxs)("div", {
                    className: g().content,
                    children: [
                      e.hasRecentlyPlayed &&
                        (0, a.jsx)(C.c, {
                          className: g().block,
                          headerClassName: g().blockHeader,
                          itemsCount: 5,
                          withHeader: !0,
                        }),
                      e.hasLiked &&
                        (0, a.jsx)(v.X, {
                          className: g().block,
                          headerClassName: g().blockHeader,
                          itemsCount: 5,
                          withHeader: !0,
                        }),
                      (0, a.jsx)(_.$_, { className: g().footer }),
                    ],
                  }),
                }),
              ],
            });
      });
    },
    89942: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfRecentlyPlayedPage: function () {
          return g;
        },
      });
      var a = i(95660),
        n = i(44744),
        o = i(71859),
        l = i(36621),
        s = i(71037),
        r = i(9883),
        c = i(64275),
        d = i(42255),
        u = i(98836),
        m = i(30476),
        h = i(20794),
        _ = i(96235),
        v = i(26597),
        C = i(43518),
        p = i.n(C);
      let g = (0, n.Pi)(() => {
        let {
            collection: {
              shelf: { recentlyPlayed: e },
            },
          } = (0, h.oR4)(),
          { contentScrollRef: t, setContentScrollRef: i } = (0, h.$Y6)(),
          { formatMessage: n } = (0, l.Z)(),
          C = (0, h.k67)();
        return ((0, o.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, h.NOh)(e.isResolved),
        e.isRejected)
          ? (0, a.jsx)(u.D, {})
          : (0, a.jsxs)(m.I7, {
              scrollElement: t,
              outerTitle: n({ id: "podcast.shelf-recently-played-title" }),
              children: [
                (0, a.jsx)(_.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, a.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, a.jsx)(s.Z, {
                      id: "podcast.shelf-recently-played-title",
                    }),
                  }),
                }),
                (0, a.jsxs)(c.t, {
                  ref: i,
                  containerClassName: p().scrollableContainer,
                  className: p().root,
                  ...(0, r.BA)(
                    r.Br.collection.COLLECTION_SHELF_RECENTLY_PLAYED_PAGE,
                  ),
                  children: [
                    (0, a.jsx)(v.c, {}),
                    (0, a.jsx)(_.$_, { className: p().footer }),
                  ],
                }),
              ],
            });
      });
    },
    35781: function (e) {
      e.exports = {
        root: "VibeAnimation_root__UKMJy",
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    52169: function (e) {
      e.exports = { root: "CollectionAlbumsPage_root__qMtcC" };
    },
    36668: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageContent_root__2Ya18",
        scrollContainer: "CollectionAlbumsPageContent_scrollContainer__0TjJm",
        important: "CollectionAlbumsPageContent_important__fixM8",
        content: "CollectionAlbumsPageContent_content__jcwRU",
        footer: "CollectionAlbumsPageContent_footer__ZkUKY",
        item: "CollectionAlbumsPageContent_item__I_Wuz",
        tabPanel: "CollectionAlbumsPageContent_tabPanel__0qXKZ",
      };
    },
    42682: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageEmpty_root__7yn1F",
        icon: "CollectionAlbumsPageEmpty_icon__XFf9x",
        title: "CollectionAlbumsPageEmpty_title__hMQde",
        text: "CollectionAlbumsPageEmpty_text__jp_lj",
      };
    },
    20331: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageHeader_root__87L_c",
        container: "CollectionAlbumsPageHeader_container__96cIo",
        title: "CollectionAlbumsPageHeader_title__1Ps8d",
        tabs: "CollectionAlbumsPageHeader_tabs__P4GTY",
        tab: "CollectionAlbumsPageHeader_tab__JSFBc",
        tabsShimmer: "CollectionAlbumsPageHeader_tabsShimmer__fGlR0",
        tabShimmer: "CollectionAlbumsPageHeader_tabShimmer__9hCc6",
        staticHeader: "CollectionAlbumsPageHeader_staticHeader__YNfX4",
        important: "CollectionAlbumsPageHeader_important__0dgC2",
        stickyHeader: "CollectionAlbumsPageHeader_stickyHeader__L_1IS",
      };
    },
    88078: function (e) {
      e.exports = {
        root: "CollectionArtistsPage_root__EH25F",
        container: "CollectionArtistsPage_container__mNUIo",
        scrollContent: "CollectionArtistsPage_scrollContent__CSeYr",
        scrollContainer: "CollectionArtistsPage_scrollContainer__tT6NQ",
        important: "CollectionArtistsPage_important__MG_XV",
        footer: "CollectionArtistsPage_footer__aZrx3",
        item: "CollectionArtistsPage_item___cy_9",
        content: "CollectionArtistsPage_content__Jd9hE",
      };
    },
    18905: function (e) {
      e.exports = { root: "CollectionDislikesPage_root__Qnohu" };
    },
    5990: function (e) {
      e.exports = {
        root: "CollectionDislikesPageContent_root__3AoS5",
        scrollContainer: "CollectionDislikesPageContent_scrollContainer__px7Vr",
        important: "CollectionDislikesPageContent_important__Oz6io",
        content: "CollectionDislikesPageContent_content__fScA9",
        content_withGrid:
          "CollectionDislikesPageContent_content_withGrid__wcx80",
        content_tracks: "CollectionDislikesPageContent_content_tracks__Hyiz_",
        footer: "CollectionDislikesPageContent_footer__E6nZG",
        item: "CollectionDislikesPageContent_item__aty4k",
        tabPanel: "CollectionDislikesPageContent_tabPanel__5L5T_",
        shimmerItem: "CollectionDislikesPageContent_shimmerItem__FMFR5",
      };
    },
    4856: function (e) {
      e.exports = {
        root: "CollectionDislikesPageEmpty_root__F9g35",
        icon: "CollectionDislikesPageEmpty_icon__hbz5L",
        title: "CollectionDislikesPageEmpty_title__AqUTM",
      };
    },
    46315: function (e) {
      e.exports = {
        root: "CollectionDislikesPageHeader_root__lZ6LT",
        container: "CollectionDislikesPageHeader_container__ACUbW",
        title: "CollectionDislikesPageHeader_title__6h9Km",
        tabs: "CollectionDislikesPageHeader_tabs__gt5AJ",
        tab: "CollectionDislikesPageHeader_tab__bxN5I",
        tabsShimmer: "CollectionDislikesPageHeader_tabsShimmer__akKoq",
        tabShimmer: "CollectionDislikesPageHeader_tabShimmer__0QLuH",
        staticHeader: "CollectionDislikesPageHeader_staticHeader__75rsF",
        important: "CollectionDislikesPageHeader_important__5ZM6D",
        stickyHeader: "CollectionDislikesPageHeader_stickyHeader__cAkxR",
      };
    },
    50060: function (e) {
      e.exports = {
        root: "CollectionNonMusicLikedPage_root__0e_hz",
        scrollContent: "CollectionNonMusicLikedPage_scrollContent__ThdnN",
        scrollContainer: "CollectionNonMusicLikedPage_scrollContainer__OthtN",
        important: "CollectionNonMusicLikedPage_important__MNJX3",
        footer: "CollectionNonMusicLikedPage_footer__F_mtD",
        item: "CollectionNonMusicLikedPage_item__Rb0yS",
        emptyBlock: "CollectionNonMusicLikedPage_emptyBlock__WAdri",
        content: "CollectionNonMusicLikedPage_content__9WDX5",
      };
    },
    67043: function (e) {
      e.exports = {
        emptyContent: "CollectionNonMusicEmpty_emptyContent__Km4Xo",
        emptyContentIcon: "CollectionNonMusicEmpty_emptyContentIcon__ZHVte",
        emptyContentTitle: "CollectionNonMusicEmpty_emptyContentTitle__PJIFd",
      };
    },
    11112: function (e) {
      e.exports = {
        root: "CollectionNonMusicPage_root__U6DRX",
        scrollableContainer:
          "CollectionNonMusicPage_scrollableContainer__iIZvl",
        important: "CollectionNonMusicPage_important__Y9D5x",
        content: "CollectionNonMusicPage_content__d8E7R",
        likedBlocks: "CollectionNonMusicPage_likedBlocks__cNqyq",
        carousel: "CollectionNonMusicPage_carousel__zDCY0",
        blockHeader: "CollectionNonMusicPage_blockHeader__PoAFY",
        footer: "CollectionNonMusicPage_footer__9feIA",
        shelfBlock: "CollectionNonMusicPage_shelfBlock__gC5Vu",
        shelfBlockHeader: "CollectionNonMusicPage_shelfBlockHeader__yfFcf",
      };
    },
    15635: function (e) {
      e.exports = {
        root: "CollectionPage_root__CZAxL",
        root_withCollectionColor:
          "CollectionPage_root_withCollectionColor__4kV02",
        content: "CollectionPage_content__c3f8z",
        header: "CollectionPage_header__z193s",
        description: "CollectionPage_description__A3dny",
        collectionColor: "CollectionPage_collectionColor__M5l1f",
        landing: "CollectionPage_landing__B4jW_",
        landing_onlyWizard: "CollectionPage_landing_onlyWizard__umeEK",
        footer: "CollectionPage_footer__9kzD0",
        footer_onlyWizard: "CollectionPage_footer_onlyWizard__FxCwa",
        error: "CollectionPage_error__xs4ZH",
      };
    },
    63807: function (e) {
      e.exports = {
        root: "CollectionPlaylistsCreatedPage_root__o77CF",
        scrollContainer:
          "CollectionPlaylistsCreatedPage_scrollContainer__Spb2M",
        important: "CollectionPlaylistsCreatedPage_important__DLkOq",
        content: "CollectionPlaylistsCreatedPage_content___qalr",
        footer: "CollectionPlaylistsCreatedPage_footer__I2jJa",
        item: "CollectionPlaylistsCreatedPage_item__2RmBg",
      };
    },
    82860: function (e) {
      e.exports = {
        root: "CollectionPlaylistsLikedPage_root__ZyIwA",
        scrollContainer: "CollectionPlaylistsLikedPage_scrollContainer__H_vPA",
        important: "CollectionPlaylistsLikedPage_important__GjYTU",
        content: "CollectionPlaylistsLikedPage_content__WIxhp",
        footer: "CollectionPlaylistsLikedPage_footer__A60Ui",
        item: "CollectionPlaylistsLikedPage_item__PpCht",
      };
    },
    30889: function (e) {
      e.exports = { root: "CollectionPlaylistsPage_root__1QnBw" };
    },
    297: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageContent_root__hGnWW",
        scrollContainer:
          "CollectionPlaylistsPageContent_scrollContainer__fiLLm",
        important: "CollectionPlaylistsPageContent_important__ebi2p",
        content: "CollectionPlaylistsPageContent_content__aZ2bA",
        footer: "CollectionPlaylistsPageContent_footer__4Ir_w",
        item: "CollectionPlaylistsPageContent_item__OPBiS",
        tabPanel: "CollectionPlaylistsPageContent_tabPanel__2uB2_",
      };
    },
    91499: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageEmpty_root__mKZt2",
        icon: "CollectionPlaylistsPageEmpty_icon__x9v_P",
        title: "CollectionPlaylistsPageEmpty_title__8RfSi",
      };
    },
    75964: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageHeader_root__GfGIl",
        container: "CollectionPlaylistsPageHeader_container__oh7C2",
        title: "CollectionPlaylistsPageHeader_title__2D23I",
        staticTabs: "CollectionPlaylistsPageHeader_staticTabs__9c9yq",
        stickyTabs: "CollectionPlaylistsPageHeader_stickyTabs__Iot6U",
        tab: "CollectionPlaylistsPageHeader_tab__aNTOB",
        tabsShimmer: "CollectionPlaylistsPageHeader_tabsShimmer__u9JIN",
        tabShimmer: "CollectionPlaylistsPageHeader_tabShimmer__ekXeT",
        staticHeader: "CollectionPlaylistsPageHeader_staticHeader__lzc4l",
        important: "CollectionPlaylistsPageHeader_important__uR36G",
        stickyHeader: "CollectionPlaylistsPageHeader_stickyHeader__ojvbQ",
      };
    },
    80611: function (e) {
      e.exports = { header: "CollectionShelfLiked_header__u9MqV" };
    },
    87501: function (e) {
      e.exports = {
        title: "CollectionShelfNewEpisodes_title__y_SoT",
        root: "CollectionShelfNewEpisodes_root__VojSS",
        root_emptyList: "CollectionShelfNewEpisodes_root_emptyList__jsjSW",
        wrapper: "CollectionShelfNewEpisodes_wrapper__Z2EOe",
        iconBackground: "CollectionShelfNewEpisodes_iconBackground__K4Xui",
        button: "CollectionShelfNewEpisodes_button__3DALk",
      };
    },
    749: function (e) {
      e.exports = { header: "CollectionShelfRecentlyPlayed_header__Nx7Cc" };
    },
    85662: function (e) {
      e.exports = {
        track: "CollectionShelfShimmer_track__ERLFm",
        title: "CollectionShelfShimmer_title__X3d9J",
      };
    },
    97808: function (e) {
      e.exports = {
        root: "CollectionShelfLikedPage_root__KRXgN",
        scrollableContainer:
          "CollectionShelfLikedPage_scrollableContainer__CI8xw",
        footer: "CollectionShelfLikedPage_footer__NgcOJ",
      };
    },
    76679: function (e) {
      e.exports = {
        root: "CollectionShelfLikedPageEmpty_root___9JuU",
        iconBackground: "CollectionShelfLikedPageEmpty_iconBackground__NQFXl",
        title: "CollectionShelfLikedPageEmpty_title__trUBM",
        button: "CollectionShelfLikedPageEmpty_button__jZpBa",
      };
    },
    99161: function (e) {
      e.exports = {
        root: "CollectionShelfNewEpisodesPage_root__HTWkS",
        scrollableContainer:
          "CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ",
        footer: "CollectionShelfNewEpisodesPage_footer__0i466",
      };
    },
    68507: function (e) {
      e.exports = {
        root: "CollectionShelfPage_root__S0__c",
        scrollableContainer: "CollectionShelfPage_scrollableContainer__9f317",
        content: "CollectionShelfPage_content__AG3r8",
        block: "CollectionShelfPage_block__34jyy",
        blockHeader: "CollectionShelfPage_blockHeader__Qjoln",
        footer: "CollectionShelfPage_footer__pgWKV",
      };
    },
    43518: function (e) {
      e.exports = {
        root: "CollectionShelfRecentlyPlayedPage_root__1eSLj",
        scrollableContainer:
          "CollectionShelfRecentlyPlayedPage_scrollableContainer__QhPaX",
        footer: "CollectionShelfRecentlyPlayedPage_footer__5pPcU",
      };
    },
  },
]);
