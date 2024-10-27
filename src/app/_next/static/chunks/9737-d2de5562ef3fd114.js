(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9737, 6685, 7771, 154, 369],
  {
    7603: function (e, t, a) {
      "use strict";
      a.d(t, {
        BlackboxInitializer: function () {
          return n;
        },
      });
      var i = a(9544),
        l = a(76873);
      let n = (0, i.Pi)((e) => {
        let { children: t, userIp: a } = e,
          { location: i } = (0, l.oR4)();
        return t;
      });
    },
    92870: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BuySubscriptionInitializer: function () {
            return r;
          },
        });
      var i = a(9544),
        l = a(98639),
        n = a(59067),
        s = a(76873);
      let r = (0, i.Pi)(() => {
        let { hasFreeUserAccess: e } = (0, s.NMB)(),
          t = (0, n.F)("music", e),
          a = (0, l.useRef)(new Date()),
          i = (0, l.useCallback)(async () => {
            await Promise.allSettled([t.getData()]), (a.current = new Date());
          }, [t]),
          r = (0, l.useCallback)(async () => {
            let e = a.current.getTime() < Date.now() - 6e5;
            "visible" === document.visibilityState && e && (await i());
          }, [i]);
        (0, l.useEffect)(() => {
          if (!e) return;
          let t = new AbortController();
          return (
            window.addEventListener("focus", r, { signal: t.signal }),
            () => {
              t.abort();
            }
          );
        }, [e, r]);
      });
    },
    82607: function (e, t, a) {
      "use strict";
      a.d(t, {
        CrackdownInitializer: function () {
          return r;
        },
      });
      var i = a(9544),
        l = a(98639),
        n = a(92894),
        s = a(76873);
      let r = (0, i.Pi)(() => {
        let {
            user: e,
            sonataState: t,
            modals: { crackdownModal: a },
            settings: i,
            experiments: r,
          } = (0, s.oR4)(),
          { isFreemium: o } = (0, s.NMB)(),
          u = i.layout === s.t8m.Desktop,
          d = (0, l.useMemo)(() => e.isAuthorized && o && u, [e, o, u]),
          c = (0, s.R$C)(),
          g = (0, l.useRef)(new Date()),
          m = (0, l.useCallback)(() => {
            g.current = new Date();
          }, []),
          S = (0, l.useCallback)(() => {
            var e, t;
            let i =
              null !==
                (t =
                  null ===
                    (e = r.experiments.get(s.peG.WebNextCrackdownInterval)) ||
                  void 0 === e
                    ? void 0
                    : e.value.interval) && void 0 !== t
                ? t
                : 18e5;
            g.current.getTime() < Date.now() - i && (a.open(), m());
          }, [r.experiments, a, m]);
        (0, l.useEffect)(() => {
          if (!d) return;
          let e =
            null == c
              ? void 0
              : c.state.playerState.status.onChange((e) => {
                  e === n.Xz.ENDED && S();
                });
          return () => {
            null == e || e();
          };
        }, [d, c, S]),
          (0, l.useEffect)(() => {
            d && a.isOpened && (null == c || c.pause());
          }, [d, a.isOpened, c, t.status]),
          (0, l.useEffect)(() => {
            if (!d) return;
            let e = new AbortController();
            return (
              window.addEventListener("mousemove", m, { signal: e.signal }),
              window.addEventListener("keydown", m, { signal: e.signal }),
              window.addEventListener("touchstart", m, { signal: e.signal }),
              () => {
                e.abort();
              }
            );
          }, [d, m]);
      });
    },
    81889: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DesktopInitializer: function () {
            return r;
          },
        });
      var i = a(9753),
        l = a(98639),
        n = a(13779),
        s = a(76873);
      let r = () => {
        let { language: e } = (0, s.ZSk)();
        {
          let { theme: t } = (0, s.FgM)(),
            a = (0, s.svc)();
          (0, n.Tk)(),
            (0, n.Er)(),
            (0, n.bO)(),
            (0, n.vs)(),
            (0, n.g3)(),
            (0, n.Zw)(),
            (0, l.useEffect)(() => {
              (0, n.Yl)(e), (0, n.l7)();
            }, [e]),
            (0, l.useEffect)(() => {
              let e = (0, s.bop)();
              e && a.count(e, "appVersion");
            }, [a]),
            (0, l.useEffect)(() => {
              (0, n.F5)(t), a.count(t, "appTheme");
            }, [t]);
        }
        return (0, i.jsx)(n.Pj, {});
      };
    },
    63660: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SlamInitializer: function () {
            return s;
          },
        });
      var i = a(9544),
        l = a(98639);
      a(45919), a(38977), a(31490), a(66337);
      var n = a(76873);
      let s = (0, i.Pi)(() => {
        var e;
        let { slam: t, location: a, user: i } = (0, n.oR4)(),
          s = (0, n.pL3)(),
          r = (0, n.uK4)(),
          o = r.get(n.V0J),
          { language: u } = (0, n.ZSk)();
        (0, n.SqQ)();
        let d = (0, l.useCallback)(
            (e) => {
              t.setNetworkStatus(e);
            },
            [t],
          ),
          c = r.get(n.U5t);
        r.get(n.pIE)({ credentials: "include" });
        let { resources: g } = c,
          {
            timeouts: m,
            retryPolicyConfig: S,
            externalGateway: p,
          } = g.musicExternalApi;
        (0, l.useEffect)(
          () => (
            s.network.subscribe(d),
            () => {
              s.network.unsubscribe(d);
            }
          ),
          [
            d,
            s.network,
            null === (e = s.tracks) || void 0 === e ? void 0 : e.events,
            t,
            o,
          ],
        );
      });
    },
    9530: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          UrlInitializer: function () {
            return s;
          },
        });
      var i = a(9544),
        l = a(74717),
        n = a(76873);
      let s = (0, i.Pi)((e) => {
        let { host: t } = e,
          { location: a } = (0, n.oR4)(),
          i = (0, l.usePathname)(),
          s = (0, l.useSearchParams)().toString(),
          r = window.location.host,
          o = t || r,
          u = "https://".concat(o),
          d = "https://"
            .concat(o)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s);
        (u = o),
          (d = ""
            .concat(o)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s)),
          a.setPathname(i),
          a.setSearchParams(s),
          a.setHost(o),
          a.setTld((0, n.p$)(o) || "ru"),
          a.setOrigin(u),
          a.setHref(d);
      });
    },
    97800: function (e, t, a) {
      "use strict";
      a.d(t, {
        WebAudioInitializer: function () {
          return r;
        },
      });
      var i = a(24244),
        l = a(9544),
        n = a(98639),
        s = a(76873);
      let r = (0, l.Pi)(() => {
        let { equalizer: e } = (0, s.oR4)(),
          t = (0, s.jpI)();
        (0, n.useEffect)(() => {
          0 === e.presets.size && e.loadPresets();
        }, [e]),
          (0, n.useEffect)(() => {
            (null == t ? void 0 : t.equalizer) &&
              e.isEnabled &&
              e.currentPreset &&
              t.equalizer.applyPreset((0, i.ZN)(e.currentPreset));
          }, [
            e.currentPreset,
            e.presetVersion,
            e.isEnabled,
            null == t ? void 0 : t.equalizer,
          ]),
          (0, n.useEffect)(() => {
            (null == t ? void 0 : t.equalizer) &&
              (e.isEnabled
                ? (e.currentPreset &&
                    t.equalizer.applyPreset((0, i.ZN)(e.currentPreset)),
                  t.equalizer.enable())
                : t.equalizer.disable());
          }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer]);
      });
    },
    22970: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          WebInitializer: function () {
            return s;
          },
        });
      var i = a(9753);
      a(98639);
      var l = a(76873),
        n = a(7603);
      let s = (e) => {
        let { userIp: t } = e,
          { experiments: a } = (0, l.oR4)();
        return (
          (0, l.uK4)().get(l.V0J).get(l.BUb.DisallowDeeplinksRedirect),
          (0, i.jsx)(n.BlackboxInitializer, { userIp: t })
        );
      };
    },
    24562: function (e, t, a) {
      "use strict";
      a.d(t, {
        AdvertProvider: function () {
          return d;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(63962),
        r = a(92894),
        o = a(76873);
      let u = null,
        d = (0, l.Pi)((e) => {
          let { children: t } = e,
            { adState: a, experiments: l, user: d } = (0, o.oR4)(),
            c = (0, o.wLl)();
          return (!u &&
            d.isAuthorized &&
            l.checkExperiment(o.peG.WebNextAudioVideoAdvert, "on") &&
            (u = new o.D_({
              logger: c,
              advertPlaybackParams: { audioCore: new s.$U(), id: o.jiA.ADVERT },
              videoSlotId: "",
              videoElementId: "",
            })),
          (0, n.useEffect)(() => {
            null == u || u.init();
          }, []),
          (0, n.useEffect)(() => {
            if (
              !l.checkExperiment(o.peG.WebNextAudioVideoAdvert, "on") ||
              !d.isAuthorized
            )
              return;
            let e =
              null == u
                ? void 0
                : u.state.isAdvertPlaying.onChange((e) => {
                    a.setAdvertShowState(e), e || a.reset();
                  });
            return () => {
              null == e || e();
            };
          }, [a, l, d.isAuthorized]),
          (0, n.useEffect)(() => {
            var e;
            let t =
              null == u
                ? void 0
                : null === (e = u.audioAdvertPlayback) || void 0 === e
                  ? void 0
                  : e.state.playerState.event.onChange((e) => {
                      if (a.isAdActive) {
                        if (
                          (e === r.KX.END &&
                            (a.setAdvertShowState(!1),
                            null == u || u.state.setDefaultState()),
                          e === r.KX.PLAYING)
                        ) {
                          a.setAdvertPlaying(!0);
                          return;
                        }
                        if (e === r.KX.END || e === r.KX.PAUSED) {
                          a.setAdvertPlaying(!1);
                          return;
                        }
                      }
                    });
            return () => (null == t ? void 0 : t());
          }, [a]),
          (0, n.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          (0, n.useEffect)(() => {
            var e, t;
            if (
              a.isAdActive &&
              (null == u
                ? void 0
                : null === (e = u.state.advertData) || void 0 === e
                  ? void 0
                  : e.type) === o.QCf.AUDIO
            )
              return a.setData(
                (null === (t = u.state.advertData) || void 0 === t
                  ? void 0
                  : t.data) || null,
              );
          }, [a, a.isAdActive]),
          l.checkExperiment(o.peG.WebNextAudioVideoAdvert, "on") &&
            d.isAuthorized)
            ? (0, i.jsx)(o.SD4.Provider, { value: u, children: t })
            : t;
        });
    },
    62703: function (e, t, a) {
      "use strict";
      a.d(t, {
        AnalyticsProvider: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(98639),
        n = a(79452),
        s = a(76873);
      let r = null,
        o = (e) => {
          let { children: t } = e,
            a = (0, s.svc)(),
            o = (0, s.wLl)(),
            u = (0, s.uK4)().get(s.V0J),
            d = (0, l.useMemo)(() => {
              if (r) return r;
              let e = "on" === u.get(s.BUb.AllowAnalyticsLogs),
                t = (0, n.HQ)((e) => a.count(e, "evgen"), o, e),
                i = (0, n.hz)(),
                l = (0, n.y_)();
              return (r = new n.yx(t, i, l));
            }, [u, o, a]);
          return (0, i.jsx)(s.fCM.Provider, {
            value: d,
            children: (0, i.jsx)(s.tKr, { children: t }),
          });
        };
    },
    99340: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ContainerProvider: function () {
            return o;
          },
        });
      var i = a(9753),
        l = a(98639),
        n = a(76873);
      let s = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: s,
              icookie: r,
              serverDetectedLocale: o,
              env: u,
            } = e,
            d = await (0, n.ZO0)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: s,
              icookie: r,
              serverDetectedLocale: o,
              env: u,
            });
          return await d.get(n.SLO).loadDictionary(), d;
        },
        r = (e) => {
          let { children: t, containerLoader: a } = e,
            s = (0, l.use)(a);
          return (0, i.jsx)(n.Xld.Provider, { value: s, children: t });
        },
        o = (e) => {
          let {
              children: t,
              hostTld: a,
              env: l,
              forwardedForY: n,
              tracestate: o,
              traceparent: u,
              icookie: d,
              changeLanguageToken: c,
              serverDetectedLocale: g,
            } = e,
            m = s({
              hostTld: a,
              forwardedForY: n,
              changeLanguageToken: c,
              tracestate: o,
              traceparent: u,
              icookie: d,
              serverDetectedLocale: g,
              env: l,
            });
          return (0, i.jsx)(r, { containerLoader: m, children: t });
        };
    },
    17141: function (e, t, a) {
      "use strict";
      a.d(t, {
        HistoryProvider: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(74717),
        n = a(98639),
        s = a(76873);
      let r = null,
        o = (e) => {
          let { children: t } = e,
            a = (0, s.uK4)(),
            o = (0, l.useRouter)(),
            u = (0, l.usePathname)(),
            d = (0, l.useSearchParams)(),
            [c, g] = (0, n.useState)(!1),
            [m, S] = (0, n.useState)(!1),
            [p, E] = (0, n.useState)(null),
            y = (0, n.useMemo)(() => {
              if (r) return r;
              let e = a.get(s.ArX);
              return (r = new s.QQ$(e));
            }, [a]),
            v = (0, n.useCallback)(() => {
              y && (g(y.canBack), S(y.canForward), E(y.state));
            }, [y]),
            h = (0, n.useCallback)(
              (e) => {
                y && (y.replaceState(e), o.replace(e.href));
              },
              [y, o],
            ),
            N = (0, n.useCallback)(
              (e) => {
                y && (y.pushState(e), v());
              },
              [y, v],
            ),
            b = (0, n.useCallback)(() => {
              y && (y.back(), v(), o.back());
            }, [y, o, v]),
            f = (0, n.useCallback)(() => {
              y && (y.forward(), v(), o.forward());
            }, [y, o, v]);
          return (
            (0, n.useEffect)(() => {
              var e;
              let t = [u, d.toString()].join("?");
              (!(null == y ? void 0 : y.state) ||
                (null == y
                  ? void 0
                  : null === (e = y.state) || void 0 === e
                    ? void 0
                    : e.isLocationNotEqual(t))) &&
                N({ href: t });
            }, [y, u, d, N]),
            (0, i.jsx)(s.TlZ.Provider, {
              value: {
                pushState: N,
                replaceState: h,
                canForward: m,
                canBack: c,
                back: b,
                forward: f,
                state: p,
              },
              children: t,
            })
          );
        };
    },
    91189: function (e, t, a) {
      "use strict";
      a.d(t, {
        LayoutProvider: function () {
          return E;
        },
        U: function () {
          return p;
        },
      });
      var i = a(9753),
        l = a(23897),
        n = a(9544),
        s = a(98639),
        r = a(80542);
      let o = {
        Chrome: 105,
        ChromeMobile: 105,
        Edge: 105,
        Firefox: 104,
        MobileFirefox: 104,
        Opera: 90,
        OperaMobile: 80,
        Safari: 16,
        MobileSafari: 16,
        UCBrowser: 15,
        MSIE: 12,
        YandexBrowser: 23,
      };
      var u = a(60836),
        d = a(3084),
        c = a(41932),
        g = a.n(c);
      let m = (e) => {
        let { message: t, closeToast: a } = e;
        return (0, i.jsx)(d.Yj, {
          className: (0, u.W)(g().root, g().important),
          message: t,
          closeToast: a,
        });
      };
      var S = a(76873);
      let p = (e) => {
          {
            document.body.classList.remove("desktop"),
              e.setLayout((0, S.jPy)(window.innerWidth)),
              e.setIsLandscape(
                window.matchMedia("(orientation: landscape)").matches,
              );
            let t = window.screen.availHeight || window.innerHeight;
            e.setIsMobileLandscapeHeight(t < 450);
          }
        },
        E = (0, n.Pi)((e) => {
          let { children: t, userAgent: a } = e,
            { formatMessage: n } = (0, r.Z)(),
            { notify: u } = (0, S.d$W)(),
            { settings: d } = (0, S.oR4)(),
            c = (0, S.XfM)(),
            [g, E] = (0, S.zU3)(),
            [y, v] = (0, S.zU3)(),
            [h, N] = (0, S.zU3)(),
            [b, f] = (0, S.zU3)();
          c && d.setPlatform(c), d.layout;
          let C = (0, s.useMemo)(
            () =>
              (0, l.Z)(() => {
                p(d);
              }, 100),
            [d],
          );
          (0, s.useEffect)(() => {
            (function (e) {
              if (!e.isBrowser || !e.browserName || !e.browserVersion)
                return !1;
              let t = o[e.browserName];
              if (!t) return !1;
              let a = parseFloat(e.browserVersion);
              return !Number.isNaN(a) && a < t;
            })(a) &&
              u(
                (0, i.jsx)(m, {
                  message: n({ id: "warning-messages.update-your-browser" }),
                }),
                { containerId: S.W$x.IMPORTANT, single: !0 },
              );
          }, [n, u, a]),
            (0, s.useLayoutEffect)(() => {
              p(d);
            }, [d]),
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", C),
                () => {
                  window.removeEventListener("resize", C);
                }
              ),
              [C],
            );
          let G = (0, s.useMemo)(
            () => ({
              contentRef: g,
              contentRootRef: y,
              contentScrollRef: h,
              sideBannerRef: b,
              setContentRef: E,
              setContentRootRef: v,
              setContentScrollRef: N,
              setSideBannerRef: f,
              userAgent: a,
            }),
            [g, y, h, b, E, v, N, f, a],
          );
          return (0, i.jsx)(S.VYl.Provider, { value: G, children: t });
        });
    },
    11332: function (e, t, a) {
      "use strict";
      a.d(t, {
        PrefetchDataProvider: function () {
          return o;
        },
      });
      var i = a(9544),
        l = a(98639),
        n = a(76873),
        s = a(91189);
      let r = async (e, t, a) => {
          let {
            user: i,
            experiments: l,
            pinsCollection: s,
            communication: r,
          } = e;
          if (
            (t ? await i.getAbout() : i.setUnauthorized(),
            i.puid && a.setPassportUid(i.puid),
            await l.getData(),
            i.isAuthorized)
          ) {
            let t = [i.getSettings(), e.library.getData(), s.getData()];
            l.checkExperiment(n.peG.WebNextCommunication, "on") &&
              t.push(r.getData()),
              await Promise.all(t);
          }
        },
        o = (0, i.Pi)((e) => {
          let { children: t } = e,
            a = (0, n.oR4)(),
            i = (0, n.uK4)(),
            o = i.get(n.xit),
            u = i.get(n.Hzc),
            d = o.hasAuthorizationCredentials;
          return (
            (0, s.U)(a.settings),
            a.user.account.loadingState === n.Gui.IDLE &&
              (0, l.use)(r(a, d, u)),
            t
          );
        });
    },
    84948: function (e, t, a) {
      "use strict";
      a.d(t, {
        ShortcutsProvider: function () {
          return u;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(29569),
        r = a(76873);
      let o = null,
        u = (0, l.Pi)((e) => {
          let { children: t } = e,
            a = (0, r.R$C)(),
            l = (0, r.uK4)().get(r.V0J),
            u = (0, s.K)(),
            { sonataState: d } = (0, r.oR4)(),
            c = (0, n.useMemo)(
              () => (o || (o = new r.OI$(new r.yre())), o),
              [],
            );
          return (
            (0, n.useEffect)(
              () => (
                null == c ||
                  c.addShortcutsListener(
                    r.Pwk.MAIN,
                    r.yxF.DECREASE_VOLUME,
                    async () => {
                      let e = await (null == a
                        ? void 0
                        : a.decreaseVolume(0.05));
                      l.set(r.BUb.YmPlayerVolume, e, { expires: 365 });
                    },
                  ),
                null == c ||
                  c.addShortcutsListener(
                    r.Pwk.MAIN,
                    r.yxF.INCREASE_VOLUME,
                    async () => {
                      let e = await (null == a
                        ? void 0
                        : a.increaseVolume(0.05));
                      l.set(r.BUb.YmPlayerVolume, e, { expires: 365 });
                    },
                  ),
                null == c ||
                  c.addShortcutsListener(
                    r.Pwk.MAIN,
                    r.yxF.TOGGLE_MUTE,
                    async () => {
                      let e =
                        null == a ? void 0 : a.state.playerState.volume.value;
                      void 0 !== e && (await u(e));
                    },
                  ),
                () => {
                  null == c ||
                    c.removeShortcutsListener(
                      r.Pwk.MAIN,
                      r.yxF.DECREASE_VOLUME,
                    ),
                    null == c ||
                      c.removeShortcutsListener(
                        r.Pwk.MAIN,
                        r.yxF.INCREASE_VOLUME,
                      ),
                    null == c ||
                      c.removeShortcutsListener(r.Pwk.MAIN, r.yxF.TOGGLE_MUTE);
                }
              ),
              [c, a, l, u],
            ),
            (0, n.useEffect)(() => {
              if (!d.isGenerativeContext)
                return (
                  null == c ||
                    c.addShortcutsListener(
                      r.Pwk.MAIN,
                      r.yxF.MOVE_BACKWARD,
                      async () => {
                        var e;
                        (null == a
                          ? void 0
                          : null === (e = a.state.currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveBackward.value) &&
                          (await a.moveBackward());
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      r.Pwk.MAIN,
                      r.yxF.MOVE_FORWARD,
                      async () => {
                        var e;
                        (null == a
                          ? void 0
                          : null === (e = a.state.currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveForward.value) &&
                          (await (null == a ? void 0 : a.moveForward()));
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      r.Pwk.MAIN,
                      r.yxF.SLIDE_BACKWARD,
                      async () => {
                        (null == a
                          ? void 0
                          : a.state.playerState.progress.value.duration) &&
                          (await (null == a ? void 0 : a.slideBackward(2)));
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      r.Pwk.MAIN,
                      r.yxF.SLIDE_FORWARD,
                      async () => {
                        (null == a
                          ? void 0
                          : a.state.playerState.progress.value.duration) &&
                          (await (null == a ? void 0 : a.slideForward(2)));
                      },
                    ),
                  () => {
                    null == c ||
                      c.removeShortcutsListener(r.Pwk.MAIN, r.yxF.MOVE_FORWARD),
                      null == c ||
                        c.removeShortcutsListener(
                          r.Pwk.MAIN,
                          r.yxF.MOVE_BACKWARD,
                        ),
                      null == c ||
                        c.removeShortcutsListener(
                          r.Pwk.MAIN,
                          r.yxF.SLIDE_BACKWARD,
                        ),
                      null == c ||
                        c.removeShortcutsListener(
                          r.Pwk.MAIN,
                          r.yxF.SLIDE_FORWARD,
                        );
                  }
                );
            }, [c, a, l, d.isGenerativeContext]),
            (0, i.jsx)(r.cww.Provider, { value: c, children: t })
          );
        });
    },
    52648: function (e, t, a) {
      "use strict";
      a.d(t, {
        SonataProvider: function () {
          return T;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(63962),
        r = a(45919),
        o = a(84338),
        u = a(8655),
        d = a(63665),
        c = a(76740);
      class g {
        canBePlayed(e) {
          let t =
              "playDisliked" in this.context.data &&
              void 0 !== this.context.data.playDisliked &&
              this.context.data.playDisliked,
            { entityChangeMethod: a, index: i } = e,
            l =
              !(
                t ||
                a === c.Zp.SET_INDEX ||
                (a === c.Zp.PLAY_CONTEXT && void 0 !== i)
              ) && this.entity.isDisliked,
            n = this.entity.isAvailable;
          return !l && n;
        }
        constructor(e, t) {
          (0, u._)(this, "context", void 0),
            (0, u._)(this, "entity", void 0),
            (this.context = e),
            (this.entity = t);
        }
      }
      class m {
        createContext(e) {
          return this.contextFactory.create(e);
        }
        createEntity(e) {
          return this.entityFactory.create(e);
        }
        createContextEntityPair(e, t) {
          return new g(e, t);
        }
        constructor(e) {
          (0, u._)(this, "entityFactory", void 0),
            (0, u._)(this, "contextFactory", void 0),
            (this.entityFactory = new d.nS(e.entityFactoryParams)),
            (this.contextFactory = new o.Tg(e.contextFactoryParams));
        }
      }
      var S = a(13432),
        p = a(38977),
        E = a(87181),
        y = a(31490),
        v = a(92894),
        h = a(44892),
        N = a(13779),
        b = a(66337),
        f = a(76873),
        importedType = a(92894);
      let C = (e) => {
        let { audioLoader: t, children: a } = e;
        return (0, n.use)(t), a;
      };
      var G = a(97800);
      let P = null,
        L = null,
        I = null,
        _ = [
          f.BUb.YmPlayerQuality,
          f.BUb.YmPlayerShuffle,
          f.BUb.YmPlayerPrevVolume,
          f.BUb.YmPlayerVolume,
          f.BUb.YmPlayerRepeatMode,
        ],
        A = (e) => {
          let { children: t, hostTld: a, userAgent: l, quality: u } = e,
            d = (0, f.uK4)(),
            {
              sonataState: c,
              experiments: g,
              library: C,
              trailer: A,
              user: T,
            } = (0, f.oR4)(),
            { isPassToProduct: k, isFreemium: x } = (0, f.NMB)(),
            D = (0, f.wLl)(),
            R = d.get(f.V0J),
            { language: V } = (0, f.ZSk)(),
            O = (0, f.ozq)(),
            j = (0, n.useMemo)(() => {
              let e = l.browserName || "Browser",
                t = (0, f.bop)() || l.browserVersion || "";
              return (
                l.browserName,
                { title: "Music Desktop App", appName: e, appVersion: t }
              );
            }, [l.browserName, l.browserVersion]),
            w = (0, n.useMemo)(() => (P || (P = new p.$J(u)), P), [u]),
            U = "Safari" !== l.browserName && "iOS" !== l.OSFamily,
            M = (0, n.useMemo)(
              () =>
                I ||
                (I = new S.bQ({
                  useAnalyser: U,
                  useEqualizer: U,
                  useFade: !1,
                })),
              [U],
            ),
            B = (0, n.useMemo)(() => {
              if (L) return L;
              let e = d.get(f.U5t),
                t = d.get(f.pIE)({ credentials: "include" }),
                i = d.get(f.xit),
                {
                  resources: n,
                  player: {
                    gateway: { prefixUrl: o, headers: u },
                  },
                  ynisonConnectionConfig: c,
                } = e,
                { timeouts: E, retryPolicyConfig: h } = n.musicExternalApi,
                N = new m({
                  contextFactoryParams: {
                    httpClient: t,
                    logger: D,
                    config: {
                      params: {
                        common: {
                          client: (0, b.$)(),
                          device: (0, f.qcA)(),
                          language: V,
                          oauth: i.token,
                        },
                      },
                      retryPolicyConfig: h,
                      resourceTimeoutsConfig: E,
                      gateway: {
                        prefixUrl: (0, r.zJ)(o, a, f.MgS),
                        headers: u,
                      },
                      contextVariables: {
                        vibe: {
                          get sendFeedbackToSessionTracks() {
                            return g.checkExperiment(
                              f.peG.WebNextWaveNewFeedbacks,
                              "on",
                            );
                          },
                        },
                      },
                    },
                  },
                  entityFactoryParams: { likeStore: C },
                }),
                {
                  overembed: G,
                  externalDomain: P,
                  ...I
                } = {
                  params: {
                    common: {
                      client: (0, b.$)(),
                      device: (0, f.qcA)(),
                      language: V,
                      oauth: i.token,
                    },
                  },
                  retryPolicyConfig: h,
                  timeouts: E.tracksResource,
                  gateway: { prefixUrl: (0, r.zJ)(o, a, f.MgS), headers: u },
                  overembed: e.player.overembed,
                  externalDomain: e.player.externalDomain,
                },
                _ = new p.Ez({
                  downloadInfoProviderParams: {
                    httpClient: t,
                    resourceConfig: { ...I, overembed: G, externalDomain: P },
                    secretKey: e.player.secretKey,
                    mediaConfigController: w,
                  },
                  getFileInfoProviderParams: {
                    httpClient: t,
                    resourceConfig: I,
                    secretKey: e.player.secretKey,
                    mediaConfigController: w,
                    transport: y.J7.RAW,
                    variables: {
                      get useNewCorrespondenceBetweenQualityParams() {
                        return (
                          g.checkExperiment(
                            f.peG.WebNextEnableNewQuality,
                            "on",
                          ) ||
                          g.checkExperiment(
                            f.peG.WebNextEnableNewQuality,
                            "prod",
                          )
                        );
                      },
                    },
                  },
                  variables: {
                    get switchToStrmWithoutEncrypt() {
                      let e =
                          g.checkExperiment(
                            f.peG.WebNextEnableNewQuality,
                            "on",
                          ) ||
                          g.checkExperiment(
                            f.peG.WebNextEnableNewQuality,
                            "prod",
                          ),
                        t = g.checkExperiment(
                          f.peG.WebNextSwitchToStrmWithoutEncrypt,
                          "on",
                        );
                      return e || t;
                    },
                  },
                }),
                T = new p.sd({
                  httpClient: t,
                  config: {
                    params: {
                      common: {
                        client: (0, b.$)(),
                        device: (0, f.qcA)(),
                        language: V,
                        oauth: i.token,
                      },
                    },
                    retryPolicyConfig: h,
                    timeouts: E.tracksResource,
                    gateway: { prefixUrl: (0, r.zJ)(o, a, f.MgS), headers: u },
                  },
                }),
                k = new v.yz(),
                R = [
                  new S.MD(),
                  new S.Cy(),
                  new S.CM(),
                  new S.V2({
                    httpClient: t,
                    playsResourceConfig: {
                      params: {
                        common: {
                          client: (0, b.$)(),
                          device: (0, f.qcA)(),
                          language: V,
                          oauth: i.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, r.zJ)(o, a, f.MgS),
                        headers: u,
                      },
                    },
                    variables: {
                      get disableSendPlaysOnTrackStart() {
                        return g.checkExperiment(
                          f.peG.WebNextDisableSendPlaysOnTrackStart,
                          "on",
                        );
                      },
                      get enableLocalStoredPlaysData() {
                        return g.checkExperiment(
                          f.peG.WebNextPlayAudioHeartBeat,
                          "on",
                        );
                      },
                    },
                  }),
                  new S.CO({
                    browserName: l.browserName,
                    browserVersion: l.browserVersion,
                  }),
                  new S.kf({ logger: D }),
                  new S.sD(w.quality),
                  new S.Y$({
                    httpClient: t,
                    streamsResourceConfig: {
                      params: {
                        common: {
                          client: (0, b.$)(),
                          device: (0, f.qcA)(),
                          language: V,
                          oauth: i.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, r.zJ)(o, a, f.MgS),
                        headers: u,
                      },
                    },
                  }),
                  new S.bo({
                    mediaConfigController: w,
                    variables: {
                      get enableDebugMode() {
                        return !1;
                      },
                    },
                  }),
                  new S.vv({
                    onTrailerPaused: () => {
                      A.setIsManuallyPaused(!0);
                    },
                    onTrailerPlaying: () => {
                      A.setIsManuallyPaused(!1);
                    },
                    playbackController: k,
                    trailerPlaybackParams: {
                      id: f.jiA.TRAILER,
                      plugins: [
                        new S.bQ({ useFade: U }),
                        new S.MD(),
                        new S.kf({ logger: D }),
                        new S.CM(),
                        new S.bo({
                          mediaConfigController: w,
                          variables: {
                            get enableDebugMode() {
                              return !1;
                            },
                          },
                        }),
                        new S.V2({
                          httpClient: t,
                          playsResourceConfig: {
                            params: {
                              common: {
                                client: (0, b.$)(),
                                device: (0, f.qcA)(),
                                language: V,
                                oauth: i.token,
                              },
                            },
                            gateway: {
                              prefixUrl: (0, r.zJ)(o, a, f.MgS),
                              headers: u,
                            },
                          },
                          variables: {
                            get disableSendPlaysOnTrackStart() {
                              return g.checkExperiment(
                                f.peG.WebNextDisableSendPlaysOnTrackStart,
                                "on",
                              );
                            },
                            get enableLocalStoredPlaysData() {
                              return g.checkExperiment(
                                f.peG.WebNextPlayAudioHeartBeat,
                                "on",
                              );
                            },
                          },
                          storePlaysProgressIntervalMs: 5e3,
                        }),
                      ],
                      factory: N,
                      audioCore: new s.$U(),
                      mediaProvider: _,
                      entityProvider: T,
                      playbackConfig: {
                        mediaElementErrorReloadCount: 2,
                        windowSize: 10,
                        setupQueueWindowSize: 10,
                      },
                    },
                  }),
                  new S.Lb({
                    factory: N,
                    deviceConfig: j,
                    connectionConfig: c,
                    variables: {
                      get enableYnisonConnection() {
                        return g.checkExperiment(
                          f.peG.WebNextEnableYnison,
                          "on",
                        );
                      },
                    },
                  }),
                  new S.cv({
                    advertModule: O,
                    httpClient: t,
                    afterTrackResourceConfig: {
                      params: {
                        common: {
                          client: (0, b.$)(),
                          device: (0, f.qcA)(),
                          language: V,
                          oauth: i.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, r.zJ)(o, a, f.MgS),
                        headers: u,
                      },
                    },
                  }),
                ];
              return (
                null == O || O.createAudioAdvertPlayback(k),
                M && R.push(M),
                x || R.push(new S.l0({ factory: N, platform: "desktop" })),
                (L = new v.$7({
                  factory: N,
                  playbackController: k,
                  audioCore: new s.$U(),
                  plugins: R,
                  mediaProvider: _,
                  entityProvider: T,
                  playbackConfig: {
                    mediaElementErrorReloadCount: 2,
                    windowSize: 30,
                    setupQueueWindowSize: 80,
                  },
                }))
              );
            }, [
              d,
              R,
              D,
              V,
              a,
              C,
              w,
              l.browserName,
              l.browserVersion,
              U,
              j,
              M,
              g,
              A,
              O,
              x,
            ]);

          const sendPlayerStateDefault = (ve) => {
            (0, N.Pt)({
              status: ve.state.playerState.status.value,
              isPlaying: ve.state.playerState.status.value === v.Xz.PLAYING,
              canMoveForward:
                ve.state.currentContext.value?.availableActions.moveForward
                  .value,
              canMoveBackward:
                ve.state.currentContext.value?.availableActions.moveBackward
                  .value,
              track:
                ve.state.queueState.currentEntity.value?.entity.entityData.meta,
              progress: ve.state.playerState.progress.value?.position,
              availableActions: {
                moveBackward:
                  ve.state.currentContext.value?.availableActions.moveBackward
                    .value,
                moveForward:
                  ve.state.currentContext.value?.availableActions.moveForward
                    .value,
                repeat:
                  ve.state.currentContext.value?.availableActions.repeat.value,
                shuffle:
                  ve.state.currentContext.value?.availableActions.shuffle.value,
                speed:
                  ve.state.currentContext.value?.availableActions.speed.value,
              },
              actionsStore: {
                repeat: ve.state.queueState.repeat.value,
                shuffle: ve.state.queueState.shuffle.value,
                isLiked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
                isDisliked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
              },
            });
          };
          const sendPlayerStatePlaying = (ve) => {
            (0, N.Pt)({
              status: v.Xz.PLAYING,
              isPlaying: true,
              canMoveForward:
                ve.state.currentContext.value?.availableActions.moveForward
                  .value,
              canMoveBackward:
                ve.state.currentContext.value?.availableActions.moveBackward
                  .value,
              track:
                ve.state.queueState.currentEntity.value?.entity.entityData.meta,
              progress: ve.state.playerState.progress.value?.position,
              availableActions: {
                moveBackward:
                  ve.state.currentContext.value?.availableActions.moveBackward
                    .value,
                moveForward:
                  ve.state.currentContext.value?.availableActions.moveForward
                    .value,
                repeat:
                  ve.state.currentContext.value?.availableActions.repeat.value,
                shuffle:
                  ve.state.currentContext.value?.availableActions.shuffle.value,
                speed:
                  ve.state.currentContext.value?.availableActions.speed.value,
              },
              actionsStore: {
                repeat: ve.state.queueState.repeat.value,
                shuffle: ve.state.queueState.shuffle.value,
                isLiked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
                isDisliked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
              },
            });
          };

          (0, N.A4)(B),
            (0, n.useEffect)(() => {
              let e, t, a, i, l;
              let n =
                  null == B
                    ? void 0
                    : B.state.queueState.currentEntity.onChange((e) => {
                        var t;
                        let a = null == e ? void 0 : e.context.data.type,
                          i = null == e ? void 0 : e.context.data.meta.id;
                        if (
                          (c.setEntityMeta(
                            null !== (t = null == e ? void 0 : e.entity) &&
                              void 0 !== t
                              ? t
                              : null,
                          ),
                          null == e ? void 0 : e.context.data)
                        ) {
                          if ("filter" in e.context.data) {
                            let t = null == e ? void 0 : e.context.data.filter;
                            c.setPlaylistFilter(t);
                          }
                          (null == e ? void 0 : e.context.data.type) ===
                            o.Ak.Vibe && c.setPlaylistFilter(void 0);
                        }
                        a && c.setContextType(a), i && c.setContextId(i);
                        sendPlayerStatePlaying(B);
                      }),
                s =
                  null == B
                    ? void 0
                    : B.state.queueState.order.onChange((e) => {
                        let t = B.state.queueState.index.value;
                        if (e) {
                          let a = e[t];
                          B.state.queueState.order.value.length > 0 &&
                            "number" == typeof a &&
                            c.setCurrentlyPlayingTrackIndex(a);
                        }
                      }),
                r =
                  null == B
                    ? void 0
                    : B.state.playerState.status.onChange((e) => {
                        e && (c.setStatus(e), sendPlayerStateDefault(B));
                      }),
                seekTracker =
                  null == B
                    ? void 0
                    : B.state.playerState.event.onChange(() => {
                        if (
                          B.state.playerState.event.value === importedType.KX.SET_PROGRESS
                        ) {
                          sendPlayerStateDefault(B);
                        }
                      }),
                u =
                  null == B
                    ? void 0
                    : B.state.currentContext.onChange(() => {
                        var n, s, r, o, u, d;
                        null == e || e(),
                          null == t || t(),
                          null == a || a(),
                          null == i || i(),
                          null == l || l();
                        let g =
                          null !== (d = R.get(f.BUb.YmPlayerRepeatMode)) &&
                          void 0 !== d
                            ? d
                            : E.zq.NONE;
                        B.setRepeatMode(g);
                        let m = !!R.get(f.BUb.YmPlayerShuffle);
                        B.setShuffle(m),
                          (e =
                            null == B
                              ? void 0
                              : null === (n = B.state.currentContext.value) ||
                                  void 0 === n
                                ? void 0
                                : n.availableActions.moveBackward.onChange(
                                    () => {
                                      var e;
                                      let t = !!(null == B
                                        ? void 0
                                        : null ===
                                              (e =
                                                B.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.moveBackward
                                              .value);
                                      c.setCanMoveBackward(t),
                                        sendPlayerStateDefault(B);
                                    },
                                  )),
                          (t =
                            null == B
                              ? void 0
                              : null === (s = B.state.currentContext.value) ||
                                  void 0 === s
                                ? void 0
                                : s.availableActions.moveForward.onChange(
                                    () => {
                                      var e;
                                      let t = !!(null == B
                                        ? void 0
                                        : null ===
                                              (e =
                                                B.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.moveForward
                                              .value);
                                      c.setCanMoveForward(t),
                                        sendPlayerStateDefault(B);
                                    },
                                  )),
                          (a =
                            null == B
                              ? void 0
                              : null === (r = B.state.currentContext.value) ||
                                  void 0 === r
                                ? void 0
                                : r.availableActions.repeat.onChange(() => {
                                    var e;
                                    let t =
                                      null == B
                                        ? void 0
                                        : null ===
                                              (e =
                                                B.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.repeat.value;
                                    "boolean" == typeof t &&
                                      c.setCanChangeRepeatMode(t),
                                      sendPlayerStateDefault(B);
                                  })),
                          (i =
                            null == B
                              ? void 0
                              : null === (o = B.state.currentContext.value) ||
                                  void 0 === o
                                ? void 0
                                : o.availableActions.shuffle.onChange(() => {
                                    var e;
                                    let t =
                                      null == B
                                        ? void 0
                                        : null ===
                                              (e =
                                                B.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.shuffle.value;
                                    "boolean" == typeof t && c.setCanShuffle(t);
                                    sendPlayerStateDefault(B);
                                  })),
                          (l =
                            null == B
                              ? void 0
                              : null === (u = B.state.currentContext.value) ||
                                  void 0 === u
                                ? void 0
                                : u.availableActions.speed.onChange(() => {
                                    var e;
                                    let t =
                                      null == B
                                        ? void 0
                                        : null ===
                                              (e =
                                                B.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.speed.value;
                                    "boolean" == typeof t &&
                                      (c.setCanSpeed(t),
                                      !t && B && B.setSpeed(1));
                                  }));
                      }),
                d =
                  null == B
                    ? void 0
                    : B.state.playerState.volume.onChange(() => {
                        let e = B.state.playerState.volume.value;
                        "number" == typeof e && c.setVolume(e);
                      }),
                g =
                  null == B
                    ? void 0
                    : B.state.queueState.repeat.onChange(() => {
                        let e = B.state.queueState.repeat.value;
                        c.setRepeatMode(e),
                          R.set(f.BUb.YmPlayerRepeatMode, e, { expires: 365 });
                        sendPlayerStateDefault(B);
                      }),
                m =
                  null == B
                    ? void 0
                    : B.state.queueState.shuffle.onChange(() => {
                        let e = B.state.queueState.shuffle.value;
                        c.setShuffle(e),
                          R.set(f.BUb.YmPlayerShuffle, e, { expires: 365 });
                        sendPlayerStateDefault(B);
                      });
              return () => {
                null == n || n(),
                  null == s || s(),
                  null == r || r(),
                  null == u || u(),
                  null == seekTracker || seekTracker(),
                  null == d || d(),
                  null == g || g(),
                  null == m || m();
              };
            }, [B, c, R]),
            (0, n.useEffect)(() => {
              let e = R.get(f.BUb.YmPlayerVolume);
              "number" == typeof e
                ? (null == B || B.setVolume(e), c.setVolume(e))
                : (null == B || B.setVolume(1), c.setVolume(1));
            }, [R, B, c]);
          let F = (0, n.useCallback)(() => {
            if (k) return p.nJ.PREVIEW;
            if (x) return p.nJ.EFFICIENT;
            let e = !g.isRejected(),
              t =
                g.checkExperiment(f.peG.WebNextEnableNewQuality, "on") ||
                g.checkExperiment(f.peG.WebNextEnableNewQuality, "prod"),
              a = R.get(f.BUb.YmPlayerQuality);
            if (
              T.isAuthorized &&
              e &&
              !t &&
              (a === p.nJ.HIGH_QUALITY || a === f.qql.HQ_PLUS)
            )
              return (
                R.set(f.BUb.YmPlayerQuality, p.nJ.BALANCED, { expires: 365 }),
                p.nJ.BALANCED
              );
            if (a) {
              if (Object.values(f.qql).includes(a)) {
                let e = (0, f.RE8)(a);
                return R.set(f.BUb.YmPlayerQuality, e, { expires: 365 }), e;
              }
              return a;
            }
            return (
              R.set(f.BUb.YmPlayerQuality, p.nJ.BALANCED, { expires: 365 }),
              p.nJ.BALANCED
            );
          }, [g, R, k, x, T.isAuthorized]);
          return (
            (0, n.useEffect)(() => {
              w.setQuality(F()), c.setQuality(F());
            }, [w, c, F]),
            (0, n.useEffect)(() => {
              (0, h.iJ)(R, _);
            }, [R]),
            (0, i.jsx)(f.Xe$.Provider, {
              value: w,
              children: (0, i.jsx)(f.R8o.Provider, {
                value: B,
                children: (0, i.jsxs)(f.yZB.Provider, {
                  value: M,
                  children: [(0, i.jsx)(G.WebAudioInitializer, {}), t],
                }),
              }),
            })
          );
        },
        T = (0, l.Pi)((e) => {
          let { children: t, hostTld: a, userAgent: l, quality: n } = e,
            s = (0, f.Klg)();
          return (0, i.jsx)(C, {
            audioLoader: s,
            children: (0, i.jsx)(A, {
              hostTld: a,
              userAgent: l,
              quality: n,
              children: t,
            }),
          });
        });
    },
    7428: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return e3;
          },
        });
      var i = a(9753),
        l = a(9544),
        n = a(42288),
        s = a(74717),
        r = a(98639);
      a(45919);
      var o = a(44892),
        u = a(76873),
        d = a(38977),
        c = a(87181),
        g = a(92894),
        m = a(57900);
      let S = {
        experiments: {
          loadingState: u.Gui.IDLE,
          experiments: {},
          overwrittenExperiments: {},
        },
        user: {
          account: { loadingState: u.Gui.IDLE },
          settings: { loadingState: u.Gui.IDLE },
        },
        wizard: {
          loadingState: u.Gui.IDLE,
          modal: {},
          savedLikedArtists: [],
          likedArtists: [],
          unlikedArtists: [],
        },
        collection: {
          albums: {
            loadingState: u.Gui.IDLE,
            upcomingAlbumsLoadingState: u.Gui.IDLE,
            items: [],
          },
          playlistsCreated: { loadingState: u.Gui.IDLE, items: [] },
          playlistsLiked: { loadingState: u.Gui.IDLE, items: [] },
          artists: { loadingState: u.Gui.IDLE, items: [] },
          landing: {
            loadingState: u.Gui.IDLE,
            tabs: { loadingState: u.Gui.IDLE, data: [] },
          },
          shelf: {
            recentlyPlayed: { loadingState: u.Gui.IDLE },
            newEpisodes: { loadingState: u.Gui.IDLE },
            liked: { loadingState: u.Gui.IDLE },
          },
          nonMusicLiked: { loadingState: u.Gui.IDLE, items: [] },
          dislikes: {
            artists: { loadingState: u.Gui.IDLE },
            tracks: { loadingState: u.Gui.IDLE },
          },
        },
        main: {
          landing: {
            loadingState: u.Gui.IDLE,
            tabs: { loadingState: u.Gui.IDLE, data: [] },
          },
        },
        nonMusic: {
          landing: {
            loadingState: u.Gui.IDLE,
            tabs: { loadingState: u.Gui.IDLE, data: [] },
          },
          albums: { loadingState: u.Gui.IDLE },
          categorySubpage: { loadingState: u.Gui.IDLE },
          categoryPlaylistsSubpage: { loadingState: u.Gui.IDLE },
        },
        kids: {
          landing: {
            loadingState: u.Gui.IDLE,
            tabs: { loadingState: u.Gui.IDLE, data: [] },
          },
        },
        settings: {
          layout: null,
          isLandscape: !1,
          isMobileLandscapeHeight: !1,
        },
        currentTrackInfo: {
          trackLoadingState: u.Gui.IDLE,
          creditsLoadingState: u.Gui.IDLE,
          descriptionLoadingState: u.Gui.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
          modal: {},
        },
        trackLyrics: {
          loadingState: u.Gui.IDLE,
          lyrics: null,
          lyricId: null,
          externalLyricId: null,
          track: null,
          modal: {},
        },
        album: {
          loadingState: u.Gui.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          allTracksUnfinished: !1,
          donations: { loadingState: u.Gui.IDLE, items: [] },
          latestGenreAlbums: { loadingState: u.Gui.IDLE, items: [] },
          otherArtistAlbums: { loadingState: u.Gui.IDLE, items: [] },
          relatedContent: { loadingState: u.Gui.IDLE, items: [] },
        },
        artist: {
          loadingState: u.Gui.IDLE,
          meta: null,
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          clips: [],
          fullTracksListSubpage: { loadingState: u.Gui.IDLE },
          albumsSubpage: { loadingState: u.Gui.IDLE },
          concertsSubpage: { loadingState: u.Gui.IDLE },
          similarArtistsSubPage: { loadingState: u.Gui.IDLE },
          familiarInfo: { loadingState: u.Gui.IDLE },
          familiarSubpage: { loadingState: u.Gui.IDLE },
        },
        libraryAllIds: {
          loadingState: u.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        librarySync: {
          loadingState: u.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: g.Xz.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canSpeed: !1,
          canChangeRepeatMode: !0,
          repeatMode: c.zq.NONE,
          quality: d.nJ.BALANCED,
          canShuffle: !0,
          shuffle: !1,
        },
        playlist: {
          loadingState: u.Gui.IDLE,
          searchLoadingState: u.Gui.IDLE,
          meta: null,
          items: [],
          initialItems: [],
          searchItems: {},
          similarPlaylists: [],
          searchText: "",
          filters: { loadingState: u.Gui.IDLE },
          shouldSendEventOnTabOpened: !0,
        },
        slides: {
          userSlidesLoadingState: u.Gui.IDLE,
          artistSlidesLoadingState: u.Gui.IDLE,
          userItems: [],
          artistItems: [],
        },
        vibe: {
          getLastLoadingState: u.Gui.IDLE,
          vibeResetLoadingState: u.Gui.IDLE,
          isLoading: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: u.Gui.IDLE,
          results: [],
          history: { loadingState: u.Gui.IDLE, items: [] },
          mixes: { loadingState: u.Gui.IDLE, items: [] },
        },
        vibeSettings: { loadingState: u.Gui.IDLE },
        pinsCollection: { loadingState: u.Gui.IDLE, index: {} },
        genre: {
          loadingState: u.Gui.IDLE,
          albumsSubpage: { loadingState: u.Gui.IDLE },
          artistsSubpage: { loadingState: u.Gui.IDLE },
          playlistsSubpage: { loadingState: u.Gui.IDLE },
        },
        genres: { title: null, loadingState: u.Gui.IDLE, items: [] },
        mixes: { loadingState: u.Gui.IDLE, items: [] },
        tag: {
          tagLoadingState: u.Gui.IDLE,
          playlistsLoadingState: u.Gui.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          title: null,
          playlistMeta: null,
          loadingState: u.Gui.IDLE,
          items: [],
        },
        post: { loadingState: u.Gui.IDLE },
        landingBlockEntities: { loadingState: u.Gui.IDLE },
        contextMenuPlaylists: { loadingState: u.Gui.IDLE, items: [] },
        musicHistory: { loadingState: u.Gui.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: u.Gui.IDLE },
        trailer: {
          loadingState: u.Gui.IDLE,
          withAnimation: !0,
          shouldAutoStartPlaying: !0,
          shouldSendEventOnTracksShowed: !0,
          modal: {},
          sonataStatusBeforeTrailerStart: g.Xz.IDLE,
          isManuallyPaused: !0,
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: g.Xz.IDLE,
          },
        },
        communication: { loadingState: u.Gui.IDLE },
        modals: {
          disclaimerModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          overviewModal: {},
          paywallModal: {},
          ugcTrackEditModal: { modal: {} },
          buyPlusPopoverOverPlayer: {},
          crackdownModal: {},
          overwrittenExperimentsModal: {},
        },
        landing: {
          loadingState: u.Gui.IDLE,
          tabs: { loadingState: u.Gui.IDLE, data: [] },
        },
        fullscreenPlayer: {
          modal: {},
          syncLyrics: { loadingState: u.Gui.IDLE },
          playQueue: {},
        },
        fullscreenVideoPlayer: { modal: {}, ids: [] },
        videoAd: { modal: {} },
        adState: { modal: {}, data: null, isAdPlaying: !0, isAdActive: !1 },
        equalizer: { modal: {}, presets: {} },
        ugcUploadCenter: {
          checkProcessingTracksAttempts: 0,
          notifications: {},
        },
        paymentWidgetModal: {
          modal: {},
          target: "",
          serviceSessionId: "",
          tariffOfferName: "",
          status: m.c8.IDLE,
        },
        offers: { music: { loadingState: u.Gui.IDLE } },
        quality: { modal: {} },
        releaseNotes: { modal: {} },
        slam: { networkStatus: {} },
        favoriteTracks: { loadingState: u.Gui.IDLE },
        track: { modal: {} },
      };
      var p = a(67549),
        E = a(67989),
        y = a(93438);
      a(41187);
      var v = a(14253),
        h = a(70071),
        N = a(68133);
      let b = n.V5.model("CollectionAlbumsPage", {
        loadingState: n.V5.enumeration(Object.values(u.Gui)),
        sort: n.V5.maybeNull(N.$4),
        items: n.V5.array(n.V5.maybeNull(h.ug)),
        pager: n.V5.maybeNull(N.Vn),
        alreadyRequestedPages: n.V5.map(n.V5.number),
        pendingPages: n.V5.map(n.V5.number),
        requestsCount: n.V5.maybeNull(n.V5.number),
        upcomingAlbumsLoadingState: n.V5.enumeration(Object.values(u.Gui)),
        upcomingAlbums: n.V5.maybeNull(n.V5.array(h.W9)),
      })
        .views((e) => ({
          get isAlbumsLoading() {
            return (
              e.loadingState === u.Gui.IDLE ||
              (e.loadingState === u.Gui.PENDING && 0 === e.items.length)
            );
          },
          get isLoading() {
            return (
              this.isAlbumsLoading ||
              e.upcomingAlbumsLoadingState === u.Gui.IDLE ||
              e.upcomingAlbumsLoadingState === u.Gui.PENDING
            );
          },
          get isUpcomingAlbumsLoading() {
            return (
              e.upcomingAlbumsLoadingState === u.Gui.IDLE ||
              e.upcomingAlbumsLoadingState === u.Gui.PENDING
            );
          },
          get isUpcomingAlbumsEmpty() {
            var t;
            return (
              !this.isUpcomingAlbumsLoading &&
              (!e.upcomingAlbums ||
                (null === (t = e.upcomingAlbums) || void 0 === t
                  ? void 0
                  : t.length) === 0)
            );
          },
          get isAlbumsEmpty() {
            var a;
            return (
              !this.isAlbumsLoading &&
              (!e.items ||
                (null === (a = e.items) || void 0 === a ? void 0 : a.length) ===
                  0)
            );
          },
        }))
        .actions((e) => ({
          getData: (0, n.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: s,
                sortOrder: r,
                metaType: o,
              } = t,
              { usersResource: d, modelActionsLogger: c } = (0, n.dU)(e);
            if (
              !(
                (e.loadingState === u.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                s && r && (e.sort = { sortBy: s, sortOrder: r });
              try {
                var g, m, S;
                (e.loadingState = u.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield d.getLikedAlbums({
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: s,
                    sortOrder: r,
                    metaType: o,
                  }),
                  c = { page: i, perPage: l, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, n.pj)(
                    Array.from({ length: c.total }, () => null),
                  ));
                let p =
                  null !==
                    (m =
                      null === (g = t.albums) || void 0 === g
                        ? void 0
                        : g.map((e) => {
                            let { album: t } = e;
                            return (0, h.ym)(t);
                          })) && void 0 !== m
                    ? m
                    : [];
                (0, u.AG_)({
                  items: e.items,
                  mappedRawItems: p,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = c),
                  (e.requestsCount =
                    (null !== (S = e.requestsCount) && void 0 !== S ? S : 0) +
                    1),
                  e.loadingState !== u.Gui.IDLE &&
                    (e.loadingState = u.Gui.RESOLVE);
              } catch (t) {
                c.error(t), (e.loadingState = u.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          getPresaves: (0, n.ls)(function* (t) {
            let { userId: a } = t,
              { usersResource: i, modelActionsLogger: l } = (0, n.dU)(e);
            if (e.upcomingAlbumsLoadingState !== u.Gui.PENDING)
              try {
                var s;
                e.upcomingAlbumsLoadingState = u.Gui.PENDING;
                let t = yield i.getPresaves({
                  userId: a,
                  includeReleased: !1,
                  includeUpcoming: !0,
                });
                (e.upcomingAlbums = (0, n.pj)(
                  null === (s = t.upcomingAlbums) || void 0 === s
                    ? void 0
                    : s.map(h.wq),
                )),
                  e.upcomingAlbumsLoadingState !== u.Gui.IDLE &&
                    (e.upcomingAlbumsLoadingState = u.Gui.RESOLVE);
              } catch (t) {
                l.error(t),
                  e.upcomingAlbumsLoadingState !== u.Gui.IDLE &&
                    (e.upcomingAlbumsLoadingState = u.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = u.Gui.IDLE),
              (e.sort = null),
              (e.items = (0, n.pj)([])),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.upcomingAlbumsLoadingState = u.Gui.IDLE),
              (e.upcomingAlbums = null);
          },
        }));
      var f = a(33589);
      let C = n.V5.model("CollectionArtistsPage", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          sort: n.V5.maybeNull(N.$4),
          items: n.V5.array(n.V5.maybeNull(f.Go)),
          pager: n.V5.maybeNull(N.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
        }).actions((e) => ({
          getData: (0, n.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: s,
                sortOrder: r,
              } = t,
              { usersResource: o, modelActionsLogger: d } = (0, n.dU)(e);
            if (
              !(
                (e.loadingState === u.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                s && r && (e.sort = { sortBy: s, sortOrder: r });
              try {
                var c, g, m;
                (e.loadingState = u.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield o.getLikedArtists({
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: s,
                    sortOrder: r,
                  }),
                  d = { page: i, perPage: l, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, n.pj)(
                    Array.from({ length: d.total }, () => null),
                  )),
                  (e.loadingState = u.Gui.RESOLVE);
                let S =
                  null !==
                    (g =
                      null === (c = t.artists) || void 0 === c
                        ? void 0
                        : c.map(f.d)) && void 0 !== g
                    ? g
                    : [];
                (0, u.AG_)({
                  items: e.items,
                  mappedRawItems: S,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = d),
                  (e.requests =
                    (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  e.loadingState !== u.Gui.IDLE &&
                    (e.loadingState = u.Gui.RESOLVE);
              } catch (t) {
                d.error(t), (e.loadingState = u.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          reset() {
            (e.loadingState = u.Gui.IDLE),
              (e.sort = null),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.items = (0, n.pj)([]));
          },
        })),
        G = n.V5.model("CollectionNonMusicPage", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          items: n.V5.array(n.V5.maybeNull(h.ug)),
          pager: n.V5.maybeNull(N.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          requestsCount: n.V5.maybeNull(n.V5.number),
        })
          .views((e) => ({
            get isAlbumsLoading() {
              return (
                e.loadingState === u.Gui.IDLE ||
                (e.loadingState === u.Gui.PENDING && 0 === e.items.length)
              );
            },
            get isLoading() {
              return this.isAlbumsLoading;
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isEmptyItems() {
              var t;
              return !!(
                !(null === (t = e.items) || void 0 === t ? void 0 : t.length) &&
                e.requestsCount
              );
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let { userId: a, page: i = 0, pageSize: l = 20, metaType: s } = t,
                { usersResource: r, modelActionsLogger: o } = (0, n.dU)(e);
              if (
                !(
                  (e.loadingState === u.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var d, c, g;
                  (e.loadingState = u.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: l,
                      metaType: s,
                    }),
                    o = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, n.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let m =
                    null !==
                      (c =
                        null === (d = t.albums) || void 0 === d
                          ? void 0
                          : d.map((e) => {
                              let { album: t } = e;
                              return (0, h.ym)(t);
                            })) && void 0 !== c
                      ? c
                      : [];
                  (0, u.AG_)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = o),
                    (e.requestsCount =
                      (null !== (g = e.requestsCount) && void 0 !== g ? g : 0) +
                      1),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  o.error(t), (e.loadingState = u.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                (e.items = (0, n.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.requestsCount = 0);
            },
          }));
      var P = a(73276),
        L = a(10668);
      let I = n.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          sort: n.V5.maybeNull(N.$4),
          items: n.V5.array(n.V5.maybeNull(L.$h)),
          pager: n.V5.maybeNull(N.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          kinds: n.V5.array(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === u.Gui.IDLE ||
                e.loadingState === u.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, n.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, n.dU)(e);
                (a = yield i.getPlaylistsKinds({
                  userId: t,
                  addPlaylistWithLikes: !0,
                })),
                  (e.kinds = (0, n.pj)(a));
              }),
              getData: (0, n.ls)(function* (a) {
                let {
                    userId: i,
                    page: l = 0,
                    pageSize: s = 20,
                    withLikesCount: r,
                  } = a,
                  { usersResource: o, modelActionsLogger: d } = (0, n.dU)(e);
                if (
                  !(
                    (e.loadingState === u.Gui.PENDING &&
                      e.pendingPages.has("".concat(l))) ||
                    e.alreadyRequestedPages.has("".concat(l))
                  )
                ) {
                  "number" == typeof l &&
                    e.alreadyRequestedPages.set("".concat(l), l);
                  try {
                    var c;
                    e.isLoaded || (e.loadingState = u.Gui.PENDING),
                      e.pendingPages.set("".concat(l), l),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = l * s,
                      d = e.kinds.slice(a, a + s),
                      g = yield o.getPlaylistsByKinds({
                        userId: i,
                        kinds: d,
                        withLikesCount: r,
                        withTracks: !0,
                      });
                    e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1;
                    let m = { page: l, perPage: s, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                    let S = g.map(P.PB);
                    (0, u.AG_)({
                      items: e.items,
                      mappedRawItems: S,
                      page: l,
                      pageSize: s,
                    }),
                      (e.pager = m),
                      (e.loadingState = u.Gui.RESOLVE);
                  } catch (t) {
                    d.error(t), (e.loadingState = u.Gui.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(l));
                  }
                }
              }),
              reset() {
                (e.loadingState = u.Gui.IDLE),
                  (e.sort = null),
                  (e.items = (0, n.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, n.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        _ = n.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          sort: n.V5.maybeNull(N.$4),
          items: n.V5.array(n.V5.maybeNull(L.Cd)),
          pager: n.V5.maybeNull(N.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === u.Gui.IDLE ||
                e.loadingState === u.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: s,
                sortOrder: r,
                metaType: o,
                withTracks: d,
              } = t;
              if (
                (e.loadingState === u.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
                return;
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i);
              let { usersResource: c, modelActionsLogger: g } = (0, n.dU)(e);
              (e.sort = null), s && r && (e.sort = { sortBy: s, sortOrder: r });
              try {
                var m;
                (e.loadingState = u.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let { likedPlaylists: t, pager: g } = yield c.getLikedPlaylists(
                  {
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: s,
                    sortOrder: r,
                    metaType: o,
                    withTracks: d,
                  },
                );
                (e.requests =
                  (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  0 === e.items.length &&
                    (e.items = (0, n.pj)(
                      Array.from({ length: g.total }, () => null),
                    ));
                let S = t.map((e) => {
                  let { playlist: t } = e;
                  return (0, L.PV)(t);
                });
                (0, u.AG_)({
                  items: e.items,
                  mappedRawItems: S,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = g),
                  (e.loadingState = u.Gui.RESOLVE);
              } catch (t) {
                g.error(t),
                  "number" == typeof i &&
                    e.alreadyRequestedPages.delete("".concat(i)),
                  (e.requests =
                    "number" == typeof e.requests ? e.requests - 1 : 0),
                  (e.loadingState = u.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                (e.sort = null),
                (e.items = (0, n.pj)([])),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.requests = null);
            },
          }));
      var A = a(55143);
      let T = (e) => (0, n.pj)({ type: e.type, track: (0, A.Vt)(e.track) }),
        k = (e) => e.filter((e) => e.track).map((e) => (0, A.Vt)(e.track)),
        x = (e) =>
          (0, n.pj)({
            type: e.type,
            album: e.album && (0, h.ym)(e.album),
            playlist: e.playlist && (0, P.Q9)(e.playlist),
            track: (0, A.Vt)(e.track),
          }),
        D = n.V5.model("ShelfLikedItem", { type: n.V5.string, track: A.le });
      n.V5.model("ShelfNewEpisodesItem", {
        type: n.V5.string,
        playlist: n.V5.maybe(P.Nn),
        track: A.le,
      });
      let R = n.V5.model("ShelfRecentlyPlayedItem", {
          type: n.V5.string,
          album: n.V5.maybe(h.ug),
          playlist: n.V5.maybe(P.d2),
          track: A.le,
        }),
        V = n.V5.model("CollectionShelfLiked", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          title: n.V5.maybeNull(n.V5.string),
          typeForFrom: n.V5.maybeNull(n.V5.string),
          entities: n.V5.maybeNull(n.V5.array(D)),
          pager: n.V5.maybeNull(N.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === u.Gui.IDLE ||
                e.loadingState === u.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isEmpty() {
              var t;
              return (
                this.isResolved &&
                (null === (t = e.entities) || void 0 === t
                  ? void 0
                  : t.length) === 0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, n.dU)(e);
              if (e.loadingState !== u.Gui.PENDING)
                try {
                  var i, l;
                  e.loadingState = u.Gui.PENDING;
                  let a = yield t.getShelfLiked();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (l = a.pager) && void 0 !== l ? l : null),
                    (e.entities = (0, n.pj)(
                      a.entities ? a.entities.map(T) : [],
                    )),
                    (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = u.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = u.Gui.IDLE);
            },
          })),
        O = n.V5.model("CollectionShelfNewEpisodes", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          title: n.V5.maybeNull(n.V5.string),
          typeForFrom: n.V5.maybeNull(n.V5.string),
          playlist: n.V5.maybeNull(P.Nn),
          tracks: n.V5.maybeNull(n.V5.array(A.le)),
        })
          .views((e) => ({
            get withPlaylist() {
              var t;
              return !!(
                e.playlist &&
                e.playlist.kind &&
                e.playlist.isAvailable &&
                (null === (t = e.playlist.owner) || void 0 === t
                  ? void 0
                  : t.login)
              );
            },
            get isLoading() {
              return (
                e.loadingState === u.Gui.IDLE ||
                e.loadingState === u.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isResolved && (!e.tracks || 0 === e.tracks.length);
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, n.dU)(e);
              if (e.loadingState !== u.Gui.PENDING)
                try {
                  var i;
                  e.loadingState = u.Gui.PENDING;
                  let a = yield t.getNewEpisodes();
                  e.title = a.title;
                  let l = a.blocks[0];
                  (null == l ? void 0 : l.typeForFrom) &&
                    (e.typeForFrom = l.typeForFrom),
                    (null == l
                      ? void 0
                      : null === (i = l.entities[0]) || void 0 === i
                        ? void 0
                        : i.playlist) &&
                      (e.playlist = (0, P.Q9)(l.entities[0].playlist)),
                    (null == l ? void 0 : l.entities) &&
                      (e.tracks = (0, n.pj)(k(l.entities))),
                    (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = u.Gui.REJECT);
                }
            }),
            reset() {
              (e.title = null),
                (e.playlist = null),
                (e.typeForFrom = null),
                (e.tracks = null),
                (e.loadingState = u.Gui.IDLE);
            },
          })),
        j = n.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          title: n.V5.maybeNull(n.V5.string),
          typeForFrom: n.V5.maybeNull(n.V5.string),
          entities: n.V5.maybeNull(n.V5.array(R)),
          pager: n.V5.maybeNull(N.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === u.Gui.IDLE ||
                e.loadingState === u.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isEmpty() {
              return !!(
                this.isResolved &&
                e.entities &&
                0 === e.entities.length
              );
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, n.dU)(e);
              if (e.loadingState !== u.Gui.PENDING)
                try {
                  var i, l;
                  e.loadingState = u.Gui.PENDING;
                  let a = yield t.getShelfRecentlyPlayed();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (l = a.pager) && void 0 !== l ? l : null),
                    (e.entities = (0, n.pj)(a.entities.map(x))),
                    (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = u.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = u.Gui.IDLE);
            },
          })),
        w = n.V5.model("CollectionShelfPage", {
          recentlyPlayed: j,
          newEpisodes: O,
          liked: V,
        })
          .views((e) => ({
            get isLoading() {
              return e.recentlyPlayed.isLoading && e.liked.isLoading;
            },
            get isRejected() {
              return e.recentlyPlayed.isRejected && e.liked.isRejected;
            },
            get isResolved() {
              return e.recentlyPlayed.isResolved && e.liked.isResolved;
            },
            get isIdle() {
              return (
                e.recentlyPlayed.loadingState === u.Gui.IDLE &&
                e.liked.loadingState === u.Gui.IDLE
              );
            },
            get hasRecentlyPlayed() {
              var t;
              return (
                e.recentlyPlayed.isLoading ||
                ((null === (t = e.recentlyPlayed.entities) || void 0 === t
                  ? void 0
                  : t.length) || 0) > 0
              );
            },
            get hasLiked() {
              var a;
              return (
                e.liked.isLoading ||
                ((null === (a = e.liked.entities) || void 0 === a
                  ? void 0
                  : a.length) || 0) > 0
              );
            },
          }))
          .actions((e) => ({
            reset() {
              e.recentlyPlayed.reset(), e.liked.reset();
            },
          })),
        U = n.V5.model("CollectionDislikesPageArtists", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          items: n.V5.maybeNull(n.V5.array(f.Go)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === u.Gui.IDLE;
            },
            get isPending() {
              return e.loadingState === u.Gui.PENDING;
            },
            get isResolved() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, n.dU)(e);
              if (!(0, n.fh)(e)) return null;
              let { user: i } = (0, n.yj)(e);
              if (e.loadingState === u.Gui.PENDING) return null;
              if (((e.loadingState = u.Gui.PENDING), i.account.uid))
                try {
                  let a = yield t.getDislikedArtists({ userId: i.account.uid });
                  return (
                    (e.items = (0, n.pj)((a || []).map(f.d))),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE),
                    a
                  );
                } catch (t) {
                  a.error(t),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                }
              return (e.loadingState = u.Gui.REJECT), null;
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE), (e.items = null);
            },
          }));
      var M = a(75191);
      let B = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return String(null == a ? void 0 : a.id);
          }),
        F = (e, t, a) => {
          let i = [];
          for (let s = t; s <= a; s++) {
            var l, n;
            ((null === (l = e[s]) || void 0 === l ? void 0 : l.loadingState) ===
              u.Gui.IDLE ||
              (null === (n = e[s]) || void 0 === n
                ? void 0
                : n.loadingState) === u.Gui.REJECT) &&
              i.push(s);
          }
          return i;
        },
        W = n.V5.model("CollectionDislikesPageTracksItem", {
          id: n.V5.string,
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          data: n.V5.maybeNull(A.le),
        }),
        z = n.V5.model("CollectionDislikesPageTracks", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          items: n.V5.maybeNull(n.V5.array(W)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === u.Gui.IDLE;
            },
            get isPending() {
              return e.loadingState === u.Gui.PENDING;
            },
            get isResolved() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get sonataEntitiesData() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.map((e) => (0, M.RN)(e.id))) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* () {
              let { modelActionsLogger: t } = (0, n.dU)(e);
              if (e.loadingState === u.Gui.PENDING) return;
              if (((e.loadingState = u.Gui.PENDING), !(0, n.fh)(e))) {
                e.loadingState = u.Gui.REJECT;
                return;
              }
              let { library: a, user: i } = (0, n.yj)(e);
              try {
                if (
                  i.isAuthorized &&
                  (yield a.getData(), a.loadingState === u.Gui.RESOLVE)
                ) {
                  e.loadingState = u.Gui.RESOLVE;
                  let t = a.dislikedTracksIds.map((e) => ({
                    id: e,
                    loadingState: u.Gui.IDLE,
                  }));
                  e.items = (0, n.pj)(t);
                  return;
                }
              } catch (a) {
                t.error(a),
                  e.loadingState !== u.Gui.IDLE &&
                    (e.loadingState = u.Gui.REJECT);
              }
              e.loadingState = u.Gui.REJECT;
            }),
            getTracksByRange: (0, n.ls)(function* (t, a) {
              var i;
              let { tracksResource: l, modelActionsLogger: s } = (0, n.dU)(e);
              if (!(null === (i = e.items) || void 0 === i ? void 0 : i.length))
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
              let r = F(e.items, t, a);
              try {
                let t = B(e.items, r);
                if (!t.length) return null;
                r.forEach((t) => {
                  var a;
                  let i =
                    null === (a = e.items) || void 0 === a ? void 0 : a[t];
                  i && (i.loadingState = u.Gui.PENDING);
                });
                let a = yield l.getTracksMeta({
                  trackIds: t,
                  withProgress: !0,
                });
                r.forEach((t, i) => {
                  var l;
                  let n = null == a ? void 0 : a[i];
                  (null === (l = e.items) || void 0 === l ? void 0 : l[t]) &&
                    n &&
                    (e.items[t] = {
                      id: String(n.id),
                      data: (0, A.Vt)(n),
                      loadingState: u.Gui.RESOLVE,
                    });
                });
              } catch (t) {
                s.error(t),
                  r.forEach((t) => {
                    var a;
                    let i =
                      null === (a = e.items) || void 0 === a ? void 0 : a[t];
                    i && (i.loadingState = u.Gui.REJECT);
                  });
              }
              return null;
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE), (e.items = null);
            },
          })),
        q = n.V5.model("CollectionDislikesPage", { artists: U, tracks: z })
          .views((e) => ({
            get isIdle() {
              return e.tracks.isIdle && e.artists.isIdle;
            },
            get isLoading() {
              return e.tracks.isLoading && e.artists.isLoading;
            },
            get isResolved() {
              return e.tracks.isResolved && e.artists.isResolved;
            },
          }))
          .actions((e) => ({
            reset() {
              e.artists.reset(), e.tracks.reset();
            },
          })),
        J = n.V5.model("CollectionPage", {
          landing: v.d5,
          albums: b,
          playlistsLiked: _,
          playlistsCreated: I,
          artists: C,
          shelf: w,
          nonMusicLiked: G,
          dislikes: q,
        });
      a(54267),
        a(25906),
        a(15584),
        a(50971),
        a(20297),
        a(34590),
        a(27539),
        a(74680),
        a(47139),
        a(35141),
        a(70640),
        a(68265),
        a(55742),
        a(69069);
      var H = a(41626),
        K = a(95946),
        Y = a(72636);
      let Q = n.V5.model("KidsPageModel", { landing: v.d5 });
      a(20680), a(68886);
      let Z = n.V5.model("MainPage", { landing: v.d5 });
      a(58101);
      var $ = a(31490),
        X = a(61134),
        ee = a(40029);
      let et = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        ea = (e) => {
          switch (e.type) {
            case $.EW.ALBUM:
              return "".concat(e.type, "_").concat((0, X.un)(e));
            case $.EW.TRACK:
              return "".concat(e.type, "_").concat((0, X.LV)(e));
            case $.EW.WAVE:
              return "".concat(e.type, "_").concat((0, X.R3)(e));
            case $.EW.PLAYLIST:
              return "".concat(e.type, "_").concat((0, X.aQ)(e));
            case $.EW.ARTIST:
              return "".concat(e.type, "_").concat((0, X.H5)(e));
          }
        },
        ei = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let n of e.historyTabs) {
            var i, l;
            if (a > 1e3) break;
            let e = { ...n, items: [] };
            for (let t of null !== (i = n.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (l = e.items) || void 0 === l || l.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        el = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case $.EW.ARTIST:
                case $.EW.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case $.EW.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case $.EW.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case $.EW.TRACK: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { trackId: String(t), albumId: a } },
                  };
                }
                default:
                  return null;
              }
            })
            .filter((e) => e),
        en = n.V5.model("MusicHistoryPage", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          indexesMap: n.V5.map(n.V5.number),
          items: n.V5.maybeNull(n.V5.array(X.Mf)),
          datesMap: n.V5.map(n.V5.boolean),
          tabs: n.V5.maybeNull(n.V5.array(X.t9)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === u.Gui.IDLE;
            },
            get isLoading() {
              return e.loadingState === u.Gui.PENDING;
            },
            get isLoaded() {
              return e.loadingState === u.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === u.Gui.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                (this.isLoaded || this.isRejected) &&
                (null === (t = e.tabs) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
            getStartAndEndIndexes(t) {
              var a, i;
              let l = t,
                n = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (l = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (n = t + 25),
                [l, n]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [l, n] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(l, n).filter((e) => !e.isLoaded)) && void 0 !== i
                ? i
                : [];
            },
            isInObservationRange(t) {
              var a;
              return (
                (0 !== t && t % 25 == 0) ||
                (e.items &&
                  t ===
                    (null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.length) -
                      1)
              );
            },
            get dates() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.map((e) => e.date)) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, n.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var l;
                      e.datesMap.set(t.date, !1),
                        null === (l = t.blocks) ||
                          void 0 === l ||
                          l.forEach((t, l) => {
                            var n;
                            let s = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(l, "_").concat(s),
                              a,
                            ),
                              null === (n = e.items) ||
                                void 0 === n ||
                                n.push({
                                  id: s,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: l,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? u.Gui.RESOLVE : u.Gui.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, n) => {
                                var s;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(l, "_")
                                    .concat(n, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (s = e.items) ||
                                    void 0 === s ||
                                    s.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: l,
                                      trackIndex: n,
                                      loadingState:
                                        a < 25 ? u.Gui.RESOLVE : u.Gui.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, l, n, s;
                let { tabIndex: r, blockIndex: o, trackIndex: d } = t,
                  { fullModel: c } = a.data;
                if (null === d) return;
                let g =
                  null === (s = e.tabs) || void 0 === s
                    ? void 0
                    : null === (n = s[r]) || void 0 === n
                      ? void 0
                      : null === (l = n.blocks) || void 0 === l
                        ? void 0
                        : null === (i = l[o]) || void 0 === i
                          ? void 0
                          : i.tracks[d];
                g &&
                  ((g.data = (0, A.Vt)(c)), (g.loadingState = u.Gui.RESOLVE));
              },
              setAlbum(t, a) {
                var i, l, n;
                let { tabIndex: s, blockIndex: r } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (l = n[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, X.Ql)(d) &&
                  ((d.meta = (0, h.cO)({ album: o.album, artists: o.artists })),
                  (d.loadingState = u.Gui.RESOLVE));
              },
              setArtist(t, a) {
                var i, l, n;
                let { tabIndex: s, blockIndex: r } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (l = n[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, X.DF)(d) &&
                  ((d.meta = (0, f.tR)({ artist: o.artist })),
                  (d.loadingState = u.Gui.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, l, n;
                let { tabIndex: s, blockIndex: r } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (l = n[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, X.v3)(d) &&
                  ((d.meta = {
                    ...(0, P.RE)({ playlist: o.playlist }),
                    tracksCount: o.tracksCount,
                  }),
                  (d.loadingState = u.Gui.RESOLVE));
              },
              setVibe(t, a) {
                var i, l, n;
                let { tabIndex: s, blockIndex: r } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (l = n[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, X.eE)(d) &&
                  ((d.meta = {
                    ...(0, ee.FF)(o.wave),
                    imageUrl: o.simpleWaveForegroundImageUrl,
                    backgroundColor: o.simpleWaveBackgroundColor,
                  }),
                  (d.loadingState = u.Gui.RESOLVE));
              },
              getMusicHistory: (0, n.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                n.dU)(e);
                if (e.loadingState !== u.Gui.PENDING)
                  try {
                    e.loadingState = u.Gui.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      l = ei(i);
                    (e.tabs = (0, n.pj)(l.historyTabs.map(X.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = u.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = u.Gui.REJECT);
                  }
              }),
              getItems: (0, n.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: l } = (0,
                n.dU)(e);
                try {
                  let l = e.getItemsToLoad(a);
                  l.forEach((e) => {
                    e.loadingState = u.Gui.RESOLVE;
                  });
                  let n = yield i.getMusicHistoryItems({ items: el(l) }),
                    s = et(l);
                  n.items.forEach((e) => {
                    var a;
                    let i = ea(e);
                    null === (a = s[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case $.EW.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case $.EW.TRACK:
                            t.setTrack(a, e);
                            break;
                          case $.EW.WAVE:
                            t.setVibe(a, e);
                            break;
                          case $.EW.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case $.EW.ARTIST:
                            t.setArtist(a, e);
                        }
                        a.loadingState = u.Gui.RESOLVE;
                      });
                  });
                } catch (e) {
                  l.error(e);
                }
              }),
              setDatesMap(t, a) {
                e.datesMap.set(t, a);
              },
              reset() {
                (e.items = null),
                  (e.tabs = null),
                  e.indexesMap.clear(),
                  e.datesMap.clear(),
                  (e.loadingState = u.Gui.IDLE);
              },
            };
            return t;
          });
      a(23948), a(38525);
      var es = a(50369),
        er = a(902),
        eo = a(23976),
        eu = a(21901),
        ed = a(23194);
      let ec = [
          $.Sc.ARTIST,
          $.Sc.ALBUM,
          $.Sc.TRACK,
          $.Sc.PLAYLIST,
          $.Sc.WAVE,
          $.Sc.PODCAST,
          $.Sc.PODCAST_EPISODE,
        ],
        eg = (e) => {
          let t = [...ec];
          return (
            (0, u.Z7G)(e) ||
              (t = t.filter(
                (e) => ![$.Sc.PODCAST, $.Sc.PODCAST_EPISODE].includes(e),
              )),
            t
          );
        },
        em = [
          $.Sc.ALBUM,
          $.Sc.ARTIST,
          $.Sc.PLAYLIST,
          $.Sc.TRACK,
          $.Sc.UGC_TRACK,
          $.Sc.WAVE,
          $.Sc.PODCAST,
          $.Sc.PODCAST_EPISODE,
        ],
        eS = (e, t, a) => {
          let i = [...em];
          return (
            e === $.ay.TOP && (i = i.filter((e) => e !== $.Sc.UGC_TRACK)),
            (0, u.Z7G)(t) ||
              a.checkExperiment(u.peG.WebNextBookSearch, "on") ||
              (i = i.filter((e) => ![$.Sc.PODCAST].includes(e))),
            i
          );
        },
        ep = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, n.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        eE = (e) => {
          let { type: t } = e;
          switch (t) {
            case $.Sc.UGC_TRACK:
              return { type: t, data: (0, A.Z2)(e.track) };
            case $.Sc.TRACK:
              return { type: t, data: (0, A.Vt)(e.track) };
            case $.Sc.ARTIST:
              return { type: t, data: (0, f.d)(e.artist) };
            case $.Sc.PLAYLIST:
              return {
                type: t,
                data: (0, P.VB)({ ...e.playlist, artists: [] }),
              };
            case $.Sc.ALBUM:
              return { type: t, data: (0, h.ym)(e.album) };
            case $.Sc.WAVE:
              return { type: t, data: ep(e) };
            case $.Sc.PODCAST:
              return { type: t, data: (0, h.ym)(e.podcast) };
            case $.Sc.PODCAST_EPISODE:
              return { type: t, data: (0, A.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        },
        ey = (e) =>
          e.map((e) => {
            switch (e.type) {
              case $.Sc.ALBUM:
                return { type: $.Sc.ALBUM, data: (0, h.ym)(e.album) };
              case $.Sc.ARTIST:
                return { type: $.Sc.ARTIST, data: (0, f.d)(e.artist) };
              case $.Sc.PLAYLIST:
                return {
                  type: $.Sc.PLAYLIST,
                  data: (0, P.VB)({ ...e.playlist, artists: [] }),
                };
              case $.Sc.UGC_TRACK:
                return { type: $.Sc.UGC_TRACK, data: (0, A.Z2)(e.track) };
              case $.Sc.TRACK:
                return { type: $.Sc.TRACK, data: (0, A.Vt)(e.track) };
              case $.Sc.WAVE:
                return { type: $.Sc.WAVE, data: ep(e) };
              case $.Sc.PODCAST:
                return { type: $.Sc.PODCAST, data: (0, h.ym)(e.podcast) };
              case $.Sc.PODCAST_EPISODE:
                return {
                  type: $.Sc.PODCAST_EPISODE,
                  data: (0, A.Vt)(e.podcast_episode),
                };
            }
          }),
        ev = n.V5.model("SearchHistoryPage", {
          items: n.V5.array(ed.Iv),
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
        }),
        eh = n.V5.model("SearchPage", {
          searchCorrectedText: n.V5.maybeNull(n.V5.string),
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          searchRequestId: n.V5.optional(n.V5.string, ""),
          results: n.V5.array(ed.Iv),
          history: ev,
          mixes: eu.ZP,
        })
          .views((e) => ({
            get isLoading() {
              return e.loadingState === u.Gui.PENDING;
            },
            get isNeededToLoad() {
              return e.loadingState === u.Gui.IDLE;
            },
            get isEmpty() {
              return (
                (e.loadingState === u.Gui.RESOLVE ||
                  e.loadingState === u.Gui.REJECT) &&
                0 === e.results.length
              );
            },
            get isHistoryLoading() {
              return e.history.loadingState === u.Gui.PENDING;
            },
            get isHistoryReady() {
              return e.history.loadingState === u.Gui.IDLE;
            },
            get isEmptyHistory() {
              return (
                !e.history.items.length &&
                e.history.loadingState === u.Gui.RESOLVE
              );
            },
          }))
          .actions((e) => ({
            getSearchResults: (0, n.ls)(function* (t) {
              let { text: a, filter: i, config: l, experiments: s } = t,
                { searchResource: r } = (0, n.dU)(e);
              try {
                e.loadingState = u.Gui.PENDING;
                let t = yield r.getInstantMixedSearch({
                  text: a,
                  type: eS(i, l, s),
                  filter: i === $.ay.TOP ? void 0 : i,
                  withLikesCount: !0,
                  page: 0,
                  pageSize: 36,
                });
                t.misspellResult && (e.searchCorrectedText = t.misspellResult),
                  t.results &&
                    t.results.length > 0 &&
                    ((e.results = (0, n.pj)(ey(t.results).filter((e) => e))),
                    (e.searchRequestId = t.searchRequestId)),
                  (e.loadingState = u.Gui.RESOLVE);
              } catch (t) {
                e.loadingState = u.Gui.REJECT;
              }
            }),
            getHistory: (0, n.ls)(function* (t) {
              let { userId: a, config: i } = t;
              if (e.history.loadingState === u.Gui.PENDING) return;
              let { usersResource: l } = (0, n.dU)(e);
              try {
                e.history.loadingState = u.Gui.PENDING;
                let t = yield l.getSearchHistory({
                  userId: a,
                  supportedTypes: eg(i),
                });
                (e.history.items = (0, n.pj)(t.map(eE).filter((e) => e))),
                  (e.history.loadingState = u.Gui.RESOLVE);
              } catch (t) {
                console.error(t), (e.history.loadingState = u.Gui.REJECT);
              }
            }),
            clearHistory: (0, n.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i } = (0, n.dU)(e);
              if (e.loadingState !== u.Gui.PENDING)
                try {
                  (e.loadingState = u.Gui.PENDING),
                    yield i.clearSearchHistory({ userId: a }),
                    (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  console.error(t), (e.loadingState = u.Gui.REJECT);
                }
            }),
            resetHistoryItems() {
              e.history.items = (0, n.pj)([]);
            },
            resetHistoryStateRequest() {
              (e.history.loadingState = u.Gui.IDLE),
                (e.history.items = (0, n.pj)([]));
            },
            resetResults() {
              e.results = (0, n.pj)([]);
            },
            resetSearchCorrectedText() {
              e.searchCorrectedText = null;
            },
            reset() {
              (e.searchCorrectedText = null),
                (e.loadingState = u.Gui.IDLE),
                (e.results = (0, n.pj)([]));
            },
            sendFeedback: (0, n.ls)(function* (t) {
              let { searchResource: a, modelActionsLogger: i } = (0, n.dU)(e);
              try {
                yield a.sendFeedback(t);
              } catch (e) {
                i.error(e);
              }
            }),
          }));
      a(17777), a(55805);
      var eN = a(20070);
      let eb = n.V5.model("TrackPage", { modal: N.KL });
      var ef = a(60991),
        eC = a(80757),
        eG = a(69088);
      let eP = (e) => {
          let t = [],
            a = [];
          return (
            e.triggers.forEach((e) => {
              switch (e.meta.notificationId) {
                case $.Mx.BAR_BELOW:
                  t.push((0, eC.ho)(e));
                  return;
                case $.Mx.FULLSCREEN:
                  a.push((0, eG.QZ)(e));
                  return;
              }
            }),
            (0, n.pj)({ barBelow: { list: t }, modal: { list: a } })
          );
        },
        eL = n.V5.model("CommunicationList", { barBelow: eC.Xv, modal: eG.FM }),
        eI = n.V5.model("Communication", {
          loadingState: n.V5.enumeration(Object.values(u.Gui)),
          list: n.V5.maybe(eL),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, n.ls)(function* () {
              let { dynamicPagesResource: a, modelActionsLogger: i } = (0,
              n.dU)(e);
              if (
                e.loadingState !== u.Gui.PENDING &&
                e.loadingState !== u.Gui.RESOLVE
              )
                try {
                  e.loadingState = u.Gui.PENDING;
                  let i = yield a.getTriggers({
                    anchorIds: Object.values($.o1),
                  });
                  if (
                    ((e.list = eP(i)),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE),
                    !e.list)
                  )
                    return;
                  let { barBelow: l, modal: n } = e.list;
                  l.setAnchorId($.o1.ON_START_BAR_BELOW),
                    l.barBelowItem &&
                      (l.show(),
                      t.shown(
                        l.barBelowItem.anchorId,
                        l.barBelowItem.screenId,
                      )),
                    n.setAnchorId($.o1.ON_START_FULLSCREEN),
                    n.modalItem &&
                      (n.open(),
                      t.shown(n.modalItem.anchorId, n.modalItem.screenId));
                } catch (t) {
                  i.error(t),
                    t instanceof ef.du &&
                      (t.statusCode === ef.CN.NOT_FOUND ||
                        t.statusCode === ef.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = ef.CN.NOT_FOUND),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                }
            }),
            shown: (0, n.ls)(function* (t, a) {
              let { dynamicPagesResource: i, modelActionsLogger: l } = (0,
              n.dU)(e);
              try {
                yield i.shown({ anchorIds: [t], screenId: a });
              } catch (e) {
                l.error(e);
              }
            }),
            action: (0, n.ls)(function* (t, a, i) {
              let { dynamicPagesResource: l, modelActionsLogger: s } = (0,
              n.dU)(e);
              try {
                yield l.action({ anchorIds: [t], screenId: a, actionId: i });
              } catch (e) {
                s.error(e);
              }
            }),
          };
          return t;
        }),
        e_ = n.V5.model("ModalsModel", {
          disclaimerModal: N.KL,
          shortcutsModal: N.KL,
          aboutAppModal: N.KL,
          overviewModal: N.KL,
          paywallModal: N.KL,
          ugcTrackEditModal: A.bp,
          buyPlusPopoverOverPlayer: N.KL,
          crackdownModal: N.KL,
          overwrittenExperimentsModal: N.KL,
        });
      var eA = a(10686),
        eT = a(110),
        ek = a(87970),
        ex = a(54350),
        eD = a(40958),
        eR = a(52852),
        eV = a(13779),
        eO = a(10063);
      let ej = n.V5.model("Network", {
          isOffline: n.V5.optional(n.V5.boolean, !1),
        }),
        ew = n.V5.model("Slam", { networkStatus: ej }).actions((e) => ({
          setNetworkStatus: (t) => {
            e.networkStatus = t;
          },
        }));
      var eU = a(44774),
        eM = a(90454),
        eB = a(24244),
        eF = a(16092),
        eW = a(44338);
      let ez = n.V5.model("UgcUploadCenterNotificationsPairModel", {
          playlist: L.Cd,
          type: n.V5.enumeration(Object.values(eW.u)),
        }),
        eq = n.V5.model("UgcUploadCenterNotificationsModel", {
          pairs: n.V5.array(ez),
        })
          .views((e) => ({
            isNotificationExists: (t, a) =>
              e.pairs.some((e) => e.playlist.kind === t && e.type === a),
          }))
          .actions((e) => {
            let t = {
              addNotification(t, a) {
                e.pairs.push({ playlist: (0, eB.ZN)(t), type: a });
              },
              addNonexistentNotification(a, i) {
                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
              },
              showAllNotifications() {
                let t = (0, eB.ZN)(e.pairs);
                return (e.pairs = (0, n.pj)([])), t;
              },
            };
            return t;
          }),
        eJ = n.V5.model("UgcUploadCenterTrackPlaylistPair", {
          playlist: L.Cd,
          file: eF.jT,
        }),
        eH = n.V5.model("UgcUploadCenterModel", {
          tracks: n.V5.array(eJ),
          notifications: eq,
          checkProcessingTracksAttempts: n.V5.number,
        })
          .views((e) => ({
            getUploadingTracksByPlaylistKind: (t) =>
              t
                ? e.tracks
                    .filter((e) => e.playlist.kind === t)
                    .map((e) => e.file)
                : [],
            getTracksByLoadingState: (t) =>
              e.tracks
                .filter((e) => e.file.loadingState === t)
                .map((e) => e.file),
            get idleTracks() {
              return this.getTracksByLoadingState(eF.cU.IDLE);
            },
            get preparingTracks() {
              return this.getTracksByLoadingState(eF.cU.PREPARE);
            },
            get uploadingTracks() {
              return this.getTracksByLoadingState(eF.cU.UPLOADING);
            },
            get processingTracks() {
              return this.getTracksByLoadingState(eF.cU.PROCESSING);
            },
            get hasTracksInUploadingState() {
              return (
                this.preparingTracks.length + this.uploadingTracks.length > 0
              );
            },
            get shouldCheckProcessingTracks() {
              return (
                e.checkProcessingTracksAttempts < 25 &&
                this.processingTracks.length > 0
              );
            },
            getPlaylistByKind(t) {
              var a;
              return null ===
                (a = e.tracks.find((e) => e.playlist.kind === t)) ||
                void 0 === a
                ? void 0
                : a.playlist;
            },
          }))
          .actions((e) => {
            let t = {
              appendFiles(t, a) {
                if (
                  (t.forEach((t) => {
                    if (t.size > 419430400) {
                      e.notifications.addNonexistentNotification(
                        a,
                        eW.u.FILE_TOO_LARGE,
                      );
                      return;
                    }
                    let i = eF.jT.create({
                      loadingState: eF.cU.IDLE,
                      playlistKind: a.kind,
                    });
                    i.setFile(t);
                    let l = eJ.create({ file: i, playlist: (0, eB.ZN)(a) });
                    e.tracks.unshift(l);
                  }),
                  !(0, n.fh)(e))
                )
                  return;
                let { playlist: i } = (0, n.yj)(e);
                i.resetSearch(),
                  i.setSearchText(""),
                  this.runUploadTracksQueue();
              },
              async runUploadTracksQueue() {
                let a = e.idleTracks;
                if (a.length && !e.hasTracksInUploadingState) {
                  let i = a[a.length - 1];
                  i &&
                    (await i.runUpload(),
                    i.loadingState === eF.cU.REJECT &&
                      i.errorReason === eF.v_.TOO_MANY_FILES &&
                      ((e.tracks = (0, n.pj)([])),
                      t.addNotificationForPlaylistKind(
                        i.playlistKind,
                        eW.u.TOO_MANY_FILES,
                      )),
                    t.checkNotifications()),
                    t.setCheckProcessingTracksAttempts(0),
                    t.runUploadTracksQueue();
                }
              },
              checkProcessingTracks: (0, n.ls)(function* () {
                let { tracksResource: a, modelActionsLogger: i } = (0, n.dU)(e),
                  l = [];
                if (e.checkProcessingTracksAttempts >= 25) return null;
                t.setCheckProcessingTracksAttempts(
                  e.checkProcessingTracksAttempts + 1,
                );
                try {
                  let t = e.processingTracks
                    .map((e) => e.trackId)
                    .filter((e) => !!e);
                  if (!t.length) return null;
                  let i = yield a.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  null == i ||
                    i.forEach((t) => {
                      let a = e.tracks.find(
                        (e) =>
                          e.file.trackId === t.id && t.state === $.I_.PLAYABLE,
                      );
                      a &&
                        ((a.file.loadingState = eF.cU.RESOLVE),
                        a.file.trackId && l.push(a.file.trackId));
                    });
                } catch (e) {
                  i.error(e);
                }
                return (
                  t.checkNotifications(l),
                  t.moveTracksFromUploadCenterToPlaylist(),
                  null
                );
              }),
              moveTracksFromUploadCenterToPlaylist() {
                var t;
                if (!(0, n.fh)(e)) return;
                let { playlist: a } = (0, n.yj)(e);
                (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) &&
                  e.tracks.find((e) => {
                    var t;
                    return (
                      e.file.loadingState === eF.cU.RESOLVE &&
                      e.playlist.kind ===
                        (null === (t = a.meta) || void 0 === t
                          ? void 0
                          : t.kind)
                    );
                  }) &&
                  a.refreshTracks(),
                  (e.tracks = (0, n.pj)(
                    e.tracks.filter(
                      (e) => e.file.loadingState !== eF.cU.RESOLVE,
                    ),
                  ));
              },
              setCheckProcessingTracksAttempts(t) {
                e.checkProcessingTracksAttempts = t;
              },
              clearCancelledUploads() {
                e.tracks = (0, n.pj)(
                  e.tracks.filter(
                    (e) => e.file.loadingState !== eF.cU.CANCELLED,
                  ),
                );
              },
              checkNotifications(a) {
                let i = new Set();
                e.tracks.forEach((e) => i.add(e.playlist.kind)),
                  i.forEach((i) => {
                    let l = e.getUploadingTracksByPlaylistKind(i);
                    if (
                      !(
                        !l.length ||
                        l.some(
                          (e) =>
                            e.loadingState !== eF.cU.RESOLVE &&
                            e.loadingState !== eF.cU.REJECT,
                        )
                      )
                    ) {
                      if (l.some((e) => e.loadingState === eF.cU.REJECT)) {
                        let n = !0;
                        if (a && a.length) {
                          let t = l.map((e) => e.trackId).filter((e) => e),
                            i = (0, eU.Z)(t, a, eM.Z);
                          i.length &&
                            (n = i
                              .map((t) =>
                                e.tracks.find((e) => e.file.trackId === t),
                              )
                              .some(
                                (e) =>
                                  (null == e ? void 0 : e.file.loadingState) ===
                                  eF.cU.REJECT,
                              ));
                        }
                        n &&
                          t.addNotificationForPlaylistKind(
                            i,
                            eW.u.UNKNOWN_ERROR,
                          );
                      } else t.addNotificationForPlaylistKind(i, eW.u.SUCCESS);
                    }
                  });
              },
              addNotificationForPlaylistKind(t, a) {
                let i = e.getPlaylistByKind(t);
                i && e.notifications.addNonexistentNotification(i, a);
              },
            };
            return t;
          });
      a(85376);
      var eK = a(18739),
        eY = a(20121),
        eQ = a(59067),
        eZ = a(61602),
        e$ = a(29151);
      let eX = n.V5.model("Root", {
          experiments: N.i_,
          user: e$.T_,
          wizard: eR.k,
          collection: J,
          main: Z,
          settings: N.ao,
          currentTrackInfo: A.Jx,
          album: p.Lf,
          artist: E.Od,
          libraryAllIds: N.n4,
          librarySync: N.T2,
          sonataState: M.ps,
          playlist: er.nb,
          slides: eZ.iV,
          vibe: ex.a,
          search: eh,
          vibeSettings: eK.Ux,
          pinsCollection: eA.Lc,
          genre: K.Kx,
          genres: Y.EU,
          mixes: eu.ZP,
          tag: eN.tS,
          chart: y._1,
          post: eo.vU,
          landingBlockEntities: v.oT,
          contextMenuPlaylists: I,
          musicHistory: en,
          createPlaylist: L.b_,
          location: N.CU,
          nonMusic: es.NG,
          disclaimer: eY.nU,
          communication: eI,
          trailer: ek.L,
          modals: e_,
          landing: v.d5,
          fullscreenPlayer: eT.Oe,
          fullscreenVideoPlayer: eD.y,
          videoAd: eT.bH,
          equalizer: eO.wi,
          releaseNotes: eV.ZP,
          trackLyrics: A.Nl,
          ugcUploadCenter: eH,
          paymentWidgetModal: m._$,
          offers: eQ.C,
          quality: eT.zC,
          kids: Q,
          slam: ew,
          favoriteTracks: H.W,
          adState: eT.Vq,
          track: eb,
        }).views((e) => ({
          get library() {
            if (!(0, n.fh)(e)) return e.libraryAllIds;
            let { experiments: t } = (0, n.yj)(e);
            if (t.checkExperiment(u.peG.WebNextLibrarySync, "on"))
              return e.librarySync;
            return e.libraryAllIds;
          },
        })),
        e0 = (e, t) => eX.create(e, t);
      var e5 = a(26965);
      let e4 = ["settings", "sonataState", "offers"],
        e7 = (e, t) => e4.reduce((t, a) => ((t[a] = e[a]), t), (0, e5.Z)(t));
      (0, l.DT)(!1);
      let e3 = (e) => {
        let { children: t, nonce: a } = e;
        (0, r.useRef)([]), (0, r.useContext)(s.ServerInsertedHTMLContext);
        let l = (0, u.uK4)(),
          d = l.get(u.V0J),
          c = l.get(u.U5t),
          g = (0, u.YSg)(),
          m = (0, u.wLl)(),
          p = (0, u.dE6)(),
          E = new o.JC(),
          [y] = (0, r.useState)(() => {
            var e;
            let t = {
              ...g,
              logger: m,
              modelActionsLogger: p,
              localStorage: E,
              containerStorage: d,
              config: c,
            };
            return (
              null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                ? void 0
                : e.length
            )
              ? e0(
                  window.__STATE_SNAPSHOT__[
                    window.__STATE_SNAPSHOT__.length - 1
                  ],
                  t,
                )
              : e0(S, t);
          });
        return (
          (0, r.useLayoutEffect)(() => {
            function e() {
              var e;
              let t =
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e[window.__STATE_SNAPSHOT__.length - 1];
              t && (0, n.Xx)(y, e7(y, t)), delete window.__STATE_SNAPSHOT__;
            }
            return (
              e(),
              window.addEventListener("yMusicStateSnapshotUpdated", e),
              () => window.removeEventListener("yMusicStateSnapshotUpdated", e)
            );
          }, [y]),
          (0, i.jsx)(u.xfX.Provider, { value: y, children: t })
        );
      };
    },
    52858: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ThemeProvider: function () {
            return s;
          },
        });
      var i = a(9753),
        l = a(98639),
        n = a(76873);
      let s = (e) => {
        let { children: t } = e,
          a = (0, n.uK4)().get(n.V0J),
          s = (0, n.ozu)(),
          [r, o] = (0, l.useState)((0, n.NK4)(a.get(n.BUb.Theme), s));
        (0, l.useEffect)(() => {
          (0, n.kzC)(a.get(n.BUb.Theme));
        }, [a]),
          (0, l.useEffect)(() => {
            a.get(n.BUb.Theme) === n.rLu && o(s);
          }, [s, a]);
        let u = (0, l.useMemo)(() => ({ theme: r, setTheme: o }), [r]);
        return (0, i.jsx)(n.Nil.Provider, { value: u, children: t });
      };
    },
    51948: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TranslationsProvider: function () {
            return s;
          },
        });
      var i = a(9753),
        l = a(61417),
        n = a(76873);
      let s = (e) => {
        let { children: t } = e,
          { dictionary: a, language: s, defaultLanguage: r } = (0, n.ZSk)(),
          o = (0, n.J4i)();
        return (0, i.jsx)(l.Z, {
          onError: o,
          defaultLocale: r,
          locale: s,
          messages: a,
          children: t,
        });
      };
    },
    76154: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return r.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return l;
        },
      });
      var i = a(42288);
      let l = (e) => ({
          tag: e.tag,
          title: e.title,
          subGenres: (0, i.pj)(
            (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
          ),
        }),
        n = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(n),
        });
      var r = a(86555);
    },
    86555: function (e, t, a) {
      "use strict";
      a.d(t, {
        Genre: function () {
          return u;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(2570),
        s = a(3084),
        r = a(78914),
        o = a.n(r);
      let u = (0, l.Pi)((e) => {
        let { tag: t, title: a, subGenres: l } = e;
        return (0, i.jsxs)("div", {
          className: o().root,
          children: [
            (0, i.jsx)(s.rU, {
              className: o().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(n.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: o().linkTitle,
                children: a,
              }),
            }),
            l.length > 0 &&
              (0, i.jsx)("div", {
                className: o().list,
                children: l.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: o().item,
                      children: (0, i.jsx)(s.rU, {
                        className: o().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(n.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: o().linkTitle,
                          children: e.title,
                        }),
                      }),
                    },
                    e.tag,
                  ),
                ),
              }),
          ],
        });
      });
    },
    76685: function (e, t, a) {
      "use strict";
      a.d(t, {
        IT: function () {
          return d.ArtistCard;
        },
        xG: function () {
          return c.ArtistContextMenu;
        },
        o9: function () {
          return u;
        },
        v2: function () {
          return s.useArtistDisclaimer;
        },
      });
      var i = a(74717),
        l = a(98639),
        n = a(76873);
      (0, l.cache)(async (e) => {
        try {
          let {
              container: t,
              backendHostTld: a,
              serverDetectedLocale: l,
              host: s,
              fullUrl: r,
              requestUrl: o,
            } = await (0, n.rbP)(),
            u = t.get(n.na2),
            d = await u.getBriefInfo({ artistId: e });
          return (
            "not-found" === d.error && (0, i.notFound)(),
            {
              artist: d,
              backendHostTld: a,
              serverDetectedLocale: l,
              host: s,
              fullUrl: r,
              requestUrl: o,
            }
          );
        } catch (e) {
          return {
            artist: void 0,
            backendHostTld: "",
            serverDetectedLocale: "",
            host: null,
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      var s = a(66975),
        r = a(42288),
        o = a(33589);
      let u = r.V5.model("ArtistMeta", {
        artist: o.Go,
        lastMonthListeners: r.V5.maybe(r.V5.number),
      });
      var d = a(99654),
        c = a(54864);
    },
    66975: function (e, t, a) {
      "use strict";
      a.d(t, {
        useArtistDisclaimer: function () {
          return s;
        },
      });
      var i = a(98639),
        l = a(3429),
        n = a(76873);
      let s = (e) => {
        let { artist: t, callback: a, shouldHistoryBack: s } = e,
          {
            disclaimer: r,
            modals: { disclaimerModal: o },
          } = (0, n.oR4)(),
          u = (0, i.useRef)(String((0, l.Z)())),
          d = (0, i.useRef)(!1),
          c = (0, n.uK4)().get(n.ceh);
        return (
          (0, i.useEffect)(() => {
            r.isUnsafeDisclaimerConfirmed &&
              r.id === u.current &&
              !d.current &&
              (null == a || a(), (d.current = !0));
          }, [a, r.id, r.isUnsafeDisclaimerConfirmed]),
          (0, i.useCallback)(
            async (e) => {
              let i = c.get(n.BUb.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == i
                  ? void 0
                  : i.includes("".concat(n.coP.ARTIST, "_").concat(t.id)))
              ) {
                null == a || a();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await r.getArtistDisclaimer({ artistId: t.id }),
                  t.isUnsafeLegal && r.setType(n.Gq.UNSAFE),
                  r.setId(u.current),
                  r.setEntityId(t.id),
                  r.setEntityType(n.coP.ARTIST),
                  r.setShouldHistoryBack(!!s),
                  (d.current = !1),
                  o.open();
                return;
              }
              null == e || e.preventDefault(), null == a || a();
            },
            [
              null == t ? void 0 : t.id,
              null == t ? void 0 : t.isLegalRejected,
              null == t ? void 0 : t.isUnsafeLegal,
              a,
              r,
              o,
              c,
              s,
            ],
          )
        );
      };
    },
    99654: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistCard: function () {
          return f;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(98639),
        r = a(80542),
        o = a(79452),
        u = a(23881),
        d = a(84338),
        c = a(27491),
        g = a(28852),
        m = a(12404),
        S = a(2570),
        p = a(33589),
        E = a(76873),
        y = a(3084),
        v = a(66975),
        h = a(54864),
        N = a(62914),
        b = a.n(N);
      let f = (0, n.Pi)((e) => {
        let { artist: t, className: a, children: n, contentLinesCount: N } = e,
          { ref: f, intersectionPropertyId: C } = (0, E.VfV)(),
          { trailer: G, adState: P } = (0, E.oR4)(),
          { notify: L } = (0, E.d$W)(),
          { from: I, utmLink: _ } = (0, E.MhG)({
            contextId: t.id,
            contextType: d.Ak.Artist,
          }),
          { formatMessage: A } = (0, r.Z)(),
          [T, k] = (0, s.useState)(!1),
          [x, D] = (0, s.useState)(!1),
          [R, V] = (0, s.useState)(!1),
          {
            sendLikeSearchFeedback: O,
            sendNavigateSearchFeedback: j,
            sendPlaySearchFeedback: w,
          } = (0, E.sAF)(),
          U = (0, E.zxW)(),
          M = (0, p.SB)(t),
          B = (0, p.BV)(t),
          { id: F, name: W, coverUri: z, isLiked: q } = t,
          J = (0, E.s0h)(t.url),
          H = (0, E.s0h)(t.url, !0),
          [K, Y] = (0, s.useState)(!1),
          Q = (0, E.FTC)(),
          Z = (0, s.useCallback)(
            (e) => {
              if ((e.stopPropagation(), P.isAdActive)) {
                e.preventDefault(),
                  L((0, i.jsx)(y.vd, {}), { containerId: E.W$x.INFO });
                return;
              }
              G.openArtistTrailer(t.id), Q(o.OB.Artist, t.id);
            },
            [t.id, Q, G, P.isAdActive, L],
          ),
          $ = (0, s.useMemo)(() => {
            let e = A({ id: "entity-names.artist-name" }, { artistName: W }),
              t = q ? A({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [W, q, A]),
          { isPlaying: X, togglePlay: ee } = (0, E.qmq)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(F) },
                from: I,
                utmLink: _,
              },
              loadContextMeta: !0,
            },
          }),
          et = (0, v.useArtistDisclaimer)({ artist: t, callback: J }),
          ea = (0, v.useArtistDisclaimer)({ artist: t, callback: H }),
          ei = (0, v.useArtistDisclaimer)({ artist: t, callback: ee }),
          el = (0, p.ik)(ea, et),
          en = (0, s.useCallback)(
            (e) => {
              null == j || j(), U({ to: o.qU.ArtistScreen }), el(e);
            },
            [j, U, el],
          ),
          es = (0, s.useCallback)(
            (e) => {
              en(e);
            },
            [en],
          ),
          er = (0, s.useCallback)(() => {
            T || X || (k(!0), null == w || w()), ei();
          }, [X, T, w, ei]),
          eo = (0, s.useCallback)(() => {
            x || q || (D(!0), null == O || O()), M();
          }, [q, M, x, O]),
          eu = (0, s.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ed = (0, s.useCallback)(() => {
            V(!R), Y(!R);
          }, [R]),
          ec = (0, s.useMemo)(
            () =>
              (0, i.jsx)(
                h.ArtistContextMenu,
                {
                  artist: t,
                  onOpenChange: ed,
                  open: R,
                  onClick: eu,
                  className: (0, l.W)(b().menuButton, b().control),
                  size: "s",
                  icon: (0, i.jsx)(g.Icon, { size: "xxs", variant: "more" }),
                },
                t.getKey("ArtistContextMenu"),
              ),
            [t, eu, ed, R],
          ),
          eg = (0, s.useMemo)(() => {
            var e;
            if (
              null == t
                ? void 0
                : null === (e = t.trailer) || void 0 === e
                  ? void 0
                  : e.canShow
            )
              return (0, i.jsx)(y.xf, {
                children: (0, i.jsx)(
                  y.eP,
                  {
                    className: (0, l.W)(b().trailerButton, b().control),
                    radius: "round",
                    size: "s",
                    iconSize: "xxs",
                    onClick: Z,
                  },
                  t.getKey("TrailerButton"),
                ),
              });
          }, [t, Z]),
          em = (0, s.useMemo)(() => {
            if (t.isAvailable)
              return (0, i.jsx)(c.kk, {
                isVisible: R || K,
                className: b().controls,
                radius: "round",
                playControl: (0, i.jsx)(
                  y.JM,
                  {
                    buttonVariant: "default",
                    withHover: !1,
                    className: (0, l.W)(b().playButton, b().control),
                    iconSize: "xl",
                    variant: "filled",
                    onClick: er,
                    isPlaying: X,
                    disabled: !t.isAvailableForPlaying,
                  },
                  t.getKey("PlayButton"),
                ),
                likeControl: (0, i.jsx)(
                  y.dJ,
                  {
                    className: (0, l.W)(b().likeButton, b().control),
                    isLiked: q,
                    onClick: eo,
                    variant: "default",
                    size: "s",
                    iconSize: "xxs",
                  },
                  t.getKey("LikeButton"),
                ),
                menuControl: ec,
                pinControl: (0, i.jsx)(
                  y.RT,
                  {
                    onClick: B,
                    isPinned: t.isPinned,
                    className: (0, l.W)(b().pinButton, b().control),
                    withRipple: !1,
                  },
                  t.getKey("PinButton"),
                ),
                trailerControl: eg,
              });
          }, [t, R, K, er, X, q, eo, ec, B, eg]),
          eS = (0, s.useMemo)(
            () =>
              (0, i.jsx)(m.Paper, {
                className: b().cover,
                radius: "round",
                withShadow: !0,
                ...(0, u.BA)(u.bG.artist.ARTIST_CARD),
                children: (0, i.jsxs)("div", {
                  className: b().coverBlock,
                  onClick: es,
                  children: [
                    (0, i.jsx)(y.BE, {
                      className: b().image,
                      src: z,
                      size: 200,
                      fit: "cover",
                      alt: $,
                      withAvatarReplace: !0,
                      isAvailable: t.isAvailable,
                      "aria-hidden": !0,
                    }),
                    em,
                  ],
                }),
              }),
            [es, z, $, t.isAvailable, em],
          );
        return (0, i.jsx)(c.m7, {
          ref: f,
          className: (0, l.W)(b().root, a),
          textPosition: "center",
          "aria-label": $,
          title: (0, i.jsx)(S.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, i.jsx)(y.rU, {
              className: b().titleLink,
              href: t.url,
              "aria-label": $,
              onClick: en,
              ...(0, u.BA)(u.bG.artist.ARTIST_TITLE),
              children: W,
            }),
          }),
          srTitle: (0, i.jsx)(y.rU, { href: t.url, onClick: en, children: $ }),
          "data-intersection-property-id": C,
          contentLinesCount: N,
          view: eS,
          ...(0, u.BA)(u.bG.artist.ARTIST_ITEM),
          children: n,
        });
      });
    },
    54864: function (e, t, a) {
      "use strict";
      a.d(t, {
        ArtistContextMenu: function () {
          return S;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(80542),
        r = a(79452),
        o = a(23881),
        u = a(84338),
        d = a(385),
        c = a(33589),
        g = a(76873),
        m = a(3084);
      let S = (0, l.Pi)((e) => {
        var t, a, l;
        let { artist: S, onOpenChange: p, open: E, ...y } = e,
          { settings: v, trailer: h, adState: N } = (0, g.oR4)(),
          { notify: b } = (0, g.d$W)(),
          f = (0, c.BV)(S),
          C = (0, c.SB)(S),
          G = (0, g.FTC)(),
          P = "".concat(g.aUg.ARTIST, "-").concat(null == S ? void 0 : S.id),
          L = v.layout === g.t8m.Mobile,
          { formatMessage: I } = (0, s.Z)(),
          { utmLink: _ } = (0, g.MhG)({
            blockId: g.aUg.ARTIST,
            contextType: u.Ak.Artist,
            contextId: null == S ? void 0 : S.id,
          }),
          { href: A } = (0, g.qKB)(
            null !== (a = null == S ? void 0 : S.url) && void 0 !== a ? a : "",
          ),
          { isPlaying: T, togglePlay: k } = (0, g.QhE)({
            seeds:
              null !== (l = null == S ? void 0 : S.seeds) && void 0 !== l
                ? l
                : [],
            pageIdForFrom: g.Rhz.RADIO,
            blockIdForFrom: P,
          }),
          x = (0, n.useCallback)(() => {
            T || k();
          }, [T, k]),
          D = (0, n.useCallback)(() => {
            if (N.isAdActive) {
              b((0, i.jsx)(m.vd, {}), { containerId: g.W$x.INFO });
              return;
            }
            (null == S ? void 0 : S.id) &&
              (h.setUtmLink(_),
              h.openArtistTrailer(S.id),
              G(r.OB.Artist, S.id));
          }, [null == S ? void 0 : S.id, G, h, _, N.isAdActive, b]);
        return (
          (0, g.ZP4)(E),
          (0, i.jsxs)(d.v2, {
            isMobile: L,
            offsetOptions: 10,
            open: E,
            onOpenChange: p,
            ariaLabel: I({ id: "interface-actions.context-menu" }),
            containerProps: (0, o.BA)(o.bG.artist.ARTIST_CONTEXT_MENU),
            ...y,
            children: [
              !L &&
                (0, i.jsx)(m.Zd, {
                  onClick: f,
                  isPinned: null == S ? void 0 : S.isPinned,
                }),
              (0, i.jsx)(m.xZ, {
                onClick: C,
                isLiked: null == S ? void 0 : S.isLiked,
                disabled: !(null == S ? void 0 : S.isAvailable),
              }),
              (null == S
                ? void 0
                : null === (t = S.trailer) || void 0 === t
                  ? void 0
                  : t.canShow) && (0, i.jsx)(m.NB, { onClick: D }),
              (0, i.jsx)(m.GQ, {
                onClick: x,
                disabled: !(null == S ? void 0 : S.isAvailable),
                variant: g.xIL.ARTIST,
              }),
              (0, i.jsx)(m.zq, {
                disabled: !S,
                shareLink: A,
                entityVariant: "artist",
                entityTitle: null == S ? void 0 : S.name,
              }),
            ],
          })
        );
      });
    },
    44338: function (e, t, a) {
      "use strict";
      var i, l;
      a.d(t, {
        u: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).FILE_TOO_LARGE = "FILE_TOO_LARGE"),
        (l.TOO_MANY_FILES = "TOO_MANY_FILES"),
        (l.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (l.SUCCESS = "SUCCESS");
    },
    85376: function (e, t, a) {
      "use strict";
      a.d(t, {
        UgcUploadProvider: function () {
          return v;
        },
      });
      var i,
        l,
        n = a(9544),
        s = a(98639),
        r = a(76873),
        o = a(9753),
        u = a(80542),
        d = a(3084),
        c = a(31014),
        g = a(2570),
        m = a(78576),
        S = a.n(m);
      ((i = l || (l = {})).ERROR = "error"), (i.SUCCESS = "success");
      let p = (e) => {
        let { playlistName: t, playlistUuid: a, variant: i } = e,
          l = (0, s.useMemo)(
            () =>
              (0, o.jsx)(d.rU, {
                className: S().link,
                href: "/playlists/".concat(a),
                children: (0, o.jsx)(g.Caption, {
                  className: S().title,
                  variant: "span",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: t,
                }),
              }),
            [t, a],
          ),
          n = (0, s.useMemo)(
            () =>
              "error" === i
                ? (0, o.jsx)(c.Z, {
                    id: "ugc.notification-unknown-error",
                    values: { playlistName: l },
                  })
                : (0, o.jsx)(c.Z, {
                    id: "ugc.notification-success",
                    values: { playlistName: l },
                  }),
            [l, i],
          );
        return (0, o.jsx)(d.Yj, {
          className: S().root,
          message: (0, o.jsx)(g.Caption, {
            variant: "div",
            type: "controls",
            size: "m",
            children: n,
          }),
        });
      };
      var E = a(44338);
      let y = () => {
          var e;
          let {
              ugcUploadCenter: { notifications: t },
              playlist: a,
            } = (0, r.oR4)(),
            { notify: i } = (0, r.d$W)(),
            { formatMessage: n } = (0, u.Z)();
          (0, s.useEffect)(() => {
            t.showAllNotifications().forEach((e) => {
              switch (e.type) {
                case E.u.FILE_TOO_LARGE:
                  i(
                    (0, o.jsx)(d.Q, {
                      error: n({ id: "ugc.notification-too-large-file-error" }),
                    }),
                    { containerId: r.W$x.ERROR },
                  );
                  break;
                case E.u.TOO_MANY_FILES:
                  i(
                    (0, o.jsx)(d.Q, {
                      error: n({ id: "ugc.notification-too-many-files-error" }),
                    }),
                    { containerId: r.W$x.ERROR },
                  );
                  break;
                case E.u.UNKNOWN_ERROR:
                  i(
                    (0, o.jsx)(p, {
                      playlistName: e.playlist.title,
                      playlistUuid: e.playlist.uuid,
                      variant: l.ERROR,
                    }),
                    { containerId: r.W$x.ERROR },
                  );
                  break;
                case E.u.SUCCESS:
                  var t;
                  (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) !==
                    e.playlist.kind &&
                    i(
                      (0, o.jsx)(p, {
                        playlistName: e.playlist.title,
                        playlistUuid: e.playlist.uuid,
                        variant: l.SUCCESS,
                      }),
                      { containerId: r.W$x.INFO },
                    );
              }
            });
          }, [
            n,
            t,
            t.pairs.length,
            i,
            null === (e = a.meta) || void 0 === e ? void 0 : e.kind,
          ]);
        },
        v = (0, n.Pi)(() => {
          let { ugcUploadCenter: e } = (0, r.oR4)(),
            t = (0, s.useRef)();
          y();
          let a = (0, s.useCallback)(() => {
              e.checkProcessingTracks();
            }, [e]),
            i = (0, s.useCallback)(() => {
              t.current || (t.current = setInterval(a, 2e3));
            }, [a]),
            l = (0, s.useCallback)(() => {
              clearInterval(t.current), (t.current = void 0);
            }, []);
          (0, s.useEffect)(() => {
            e.shouldCheckProcessingTracks ? i() : l();
          }, [l, i, e.shouldCheckProcessingTracks]),
            (0, s.useEffect)(() => () => l(), [l]);
        });
    },
    67549: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return _.AlbumPage;
        },
        Lf: function () {
          return I;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(31490),
        s = a(82857),
        r = a(70071),
        o = a(10064),
        u = a(75191),
        d = a(98456),
        c = a(76873),
        g = a(68133);
      let m = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var S = a(55143);
      let p = (e) => ({ type: d.lf.TEXT, data: e || null }),
        E = (e) => {
          var t;
          return (0, i.pj)({
            type:
              (null === (t = e.data) || void 0 === t ? void 0 : t.type) ||
              n.Vc.TRACK,
            id: e.id,
            data: e.data || null,
            loadingState: e.loadingState,
            position: e.position,
            isBest: e.isBest,
            positionInContext: e.positionInContext,
            hasEverFinished: e.hasEverFinished,
          });
        },
        y = (e) => "".concat(e, "-text"),
        v = (e) => String(e),
        h = (e, t, a, i) => {
          e.forEach((e) => {
            var l;
            if (null === (l = e.albums) || void 0 === l ? void 0 : l[0]) {
              let l = a.get(v(e.id));
              null == l ||
                l.forEach((a) => {
                  var l, n, s;
                  let r = t[a];
                  t[a] = E({
                    id: e.id,
                    loadingState: c.Gui.RESOLVE,
                    positionInContext: null == r ? void 0 : r.positionInContext,
                    data: (0, S.Vt)(e, {
                      hasEverFinished: null == r ? void 0 : r.hasEverFinished,
                    }),
                    position:
                      null === (s = e.albums) || void 0 === s
                        ? void 0
                        : null === (n = s[0]) || void 0 === n
                          ? void 0
                          : null === (l = n.trackPosition) || void 0 === l
                            ? void 0
                            : l.index,
                    isBest: null == i ? void 0 : i.includes(Number(e.id)),
                    hasEverFinished: null == r ? void 0 : r.hasEverFinished,
                  });
                });
              let n = a.get(y(e.id));
              null == n ||
                n.forEach((a) => {
                  var i, l, n;
                  t[a] = p(
                    null === (n = e.albums) || void 0 === n
                      ? void 0
                      : null === (l = n[0]) || void 0 === l
                        ? void 0
                        : null === (i = l.trackPosition) || void 0 === i
                          ? void 0
                          : i.volume,
                  );
                });
            }
          });
        },
        N = (e, t, a) => {
          let i = 0;
          e.volumes.forEach((l) => {
            e.volumes.length > 1 &&
              l[0] &&
              (t.push(p()), a.set(y(l[0].id), [t.length - 1])),
              l.forEach((e) => {
                t.push(
                  E({
                    id: e.id,
                    loadingState: c.Gui.IDLE,
                    positionInContext: i,
                  }),
                );
                let l = a.get(String(e.id));
                a.set(v(e.id), l ? [...l, t.length - 1] : [t.length - 1]), i++;
              });
          });
        },
        b = (e) =>
          (0, i.pj)({
            id: e.id,
            type: e.type,
            title: e.title,
            albums: e.albums.map(r.ym),
          }),
        f = (e, t, a, i) => {
          e.forEach((e) => {
            let l = a.get(String(e));
            null == l ||
              l.forEach((a) => {
                var l, n;
                t[a] = E({
                  id: e,
                  loadingState: i,
                  positionInContext:
                    null === (l = t[a]) || void 0 === l
                      ? void 0
                      : l.positionInContext,
                  hasEverFinished:
                    null === (n = t[a]) || void 0 === n
                      ? void 0
                      : n.hasEverFinished,
                });
              });
          });
        },
        C = i.V5.model("AlbumDonations", {
          loadingState: i.V5.enumeration(Object.values(c.Gui)),
          items: i.V5.maybeNull(i.V5.array(o.Ew)),
        }),
        G = i.V5.model("LabelItem", { id: i.V5.number, name: i.V5.string }),
        P = i.V5.model("RelatedAlbumsPage", {
          loadingState: i.V5.enumeration(Object.values(c.Gui)),
          items: i.V5.array(r.ug),
        }),
        L = i.V5.model("RelatedContent", {
          loadingState: i.V5.enumeration(Object.values(c.Gui)),
          items: i.V5.maybeNull(i.V5.array(s.fd)),
        }),
        I = i.V5.compose(
          i.V5.model("AlbumPage", {
            id: i.V5.maybeNull(i.V5.number),
            meta: i.V5.maybeNull(r.ug),
            items: i.V5.array(s.JP),
            indexItems: i.V5.map(i.V5.array(i.V5.number)),
            loadingState: i.V5.enumeration(Object.values(c.Gui)),
            errorStatusCode: i.V5.maybeNull(i.V5.number),
            deprecationTargetAlbumId: i.V5.maybeNull(i.V5.number),
            latestGenreAlbums: P,
            otherArtistAlbums: P,
            otherAlbumVersions: i.V5.array(r.ug),
            labels: i.V5.maybeNull(i.V5.array(G)),
            description: i.V5.maybe(i.V5.string),
            donations: C,
            relatedContent: L,
            allTracksUnfinished: i.V5.boolean,
          }),
          g.ie,
        )
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [n.VZ.PODCAST, n.VZ.AUDIOBOOK].includes(e.meta.type);
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, i, s, r;
              return !!(
                !this.isNonMusicType &&
                (null === (i = e.meta) || void 0 === i
                  ? void 0
                  : null === (a = i.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (r = e.meta) || void 0 === r
                  ? void 0
                  : null === (s = r.artists[0]) || void 0 === s
                    ? void 0
                    : s.various)
              );
            },
            get isLatestGenreAlbumsAvailable() {
              var o;
              return !!(
                !this.isNonMusicType &&
                (null === (o = e.meta) || void 0 === o ? void 0 : o.genre)
              );
            },
            get isNotFound() {
              return (
                e.loadingState === c.Gui.REJECT &&
                e.errorStatusCode === l.CN.NOT_FOUND
              );
            },
            get isRejected() {
              return e.loadingState === c.Gui.REJECT;
            },
            get hasOtherAlbumVersions() {
              return !!(
                e.loadingState === c.Gui.IDLE ||
                e.loadingState === c.Gui.PENDING ||
                (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
              );
            },
            get hasLatestGenreAlbums() {
              return !!(
                e.latestGenreAlbums.loadingState === c.Gui.IDLE ||
                e.latestGenreAlbums.loadingState === c.Gui.PENDING ||
                (e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0)
              );
            },
            get hasOtherArtistAlbums() {
              return !!(
                e.otherArtistAlbums.loadingState === c.Gui.IDLE ||
                e.otherArtistAlbums.loadingState === c.Gui.PENDING ||
                (e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0)
              );
            },
            get isLoading() {
              return (
                e.loadingState === c.Gui.IDLE ||
                e.loadingState === c.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === c.Gui.RESOLVE;
            },
            get isLatestGenreAlbumsLoading() {
              return (
                e.latestGenreAlbums.loadingState === c.Gui.IDLE ||
                e.latestGenreAlbums.loadingState === c.Gui.PENDING
              );
            },
            get isOtherArtistAlbumsLoading() {
              return (
                e.otherArtistAlbums.loadingState === c.Gui.IDLE ||
                e.otherArtistAlbums.loadingState === c.Gui.PENDING
              );
            },
            get isRelatedContentLoading() {
              return (
                e.relatedContent.loadingState === c.Gui.IDLE ||
                e.relatedContent.loadingState === c.Gui.PENDING
              );
            },
            get contextMeta() {
              var u, g, m, S, p, E, y, v, h, N;
              return {
                id: e.meta.id,
                title: null === (u = e.meta) || void 0 === u ? void 0 : u.title,
                coverUri:
                  null === (g = e.meta) || void 0 === g ? void 0 : g.coverUri,
                type: null === (m = e.meta) || void 0 === m ? void 0 : m.type,
                year: null === (S = e.meta) || void 0 === S ? void 0 : S.year,
                version:
                  null === (p = e.meta) || void 0 === p ? void 0 : p.version,
                contentWarning:
                  null === (E = e.meta) || void 0 === E
                    ? void 0
                    : E.contentWarning,
                genre: null === (y = e.meta) || void 0 === y ? void 0 : y.genre,
                likesCount:
                  null === (v = e.meta) || void 0 === v ? void 0 : v.likesCount,
                averageColor:
                  null === (h = e.meta) || void 0 === h
                    ? void 0
                    : h.averageColor,
                available:
                  null === (N = e.meta) || void 0 === N
                    ? void 0
                    : N.isAvailable,
              };
            },
            get lastEpisodes() {
              return e.items
                .filter((e) => e.type !== d.lf.TEXT)
                .slice(0, 5)
                .map((e) => e);
            },
            get lastEpisodesTrackIds() {
              return this.lastEpisodes.map((e) => e.id);
            },
          }))
          .actions((e) => {
            let t = {
              setAlbumUnfinished: () => {
                var a;
                t.markUnfinished({ albumId: e.id || 0 }),
                  null === (a = e.meta) || void 0 === a || a.updateFinished(!1);
              },
              setAllTracksUnfinished: (t) => {
                e.allTracksUnfinished = t;
              },
              checkAllAlbumTrackFinished: () => {
                var a, i;
                e.items
                  .filter((e) => {
                    let { type: t, data: a } = e;
                    return a && t !== d.lf.TEXT;
                  })
                  .every((e) => {
                    var t;
                    let { data: a } = e;
                    return null == a
                      ? void 0
                      : null === (t = a.streamProgress) || void 0 === t
                        ? void 0
                        : t.hasEverFinished;
                  }) &&
                  ((null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.listeningFinished) ||
                    (t.markFinished({ albumId: Number(e.id) }),
                    null === (i = e.meta) ||
                      void 0 === i ||
                      i.updateFinished(!0)));
              },
              markTracksFinished: (t) => {
                let { withoutTracks: a = [] } = t;
                e.items.forEach((e) => {
                  if (e.type === d.lf.TEXT) return;
                  let { data: t } = e;
                  if (!(t && a.includes(t.id))) {
                    if (t) {
                      var i;
                      null === (i = t.streamProgress) ||
                        void 0 === i ||
                        i.updateEverFinished(!0);
                    } else e.updateEverFinished(!0);
                  }
                });
              },
              markFinished: (0, i.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: l } = (0, i.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumFinished(t);
                } catch (e) {
                  return l.error(e), n.PE.ERROR;
                }
              }),
              markUnfinished: (0, i.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: l } = (0, i.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumUnfinished(t);
                } catch (e) {
                  return l.error(e), n.PE.ERROR;
                }
              }),
              getLatestGenreAlbums: (0, i.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: l } = (0, i.dU)(e);
                if (e.latestGenreAlbums.loadingState !== c.Gui.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = c.Gui.PENDING;
                    let l = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, i.pj)(l.albums.map(r.ym))),
                      (e.latestGenreAlbums.loadingState = c.Gui.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      (e.latestGenreAlbums.loadingState = c.Gui.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, i.ls)(function* (t, a) {
                let { artistsResource: l, modelActionsLogger: n } = (0, i.dU)(
                  e,
                );
                if (e.otherArtistAlbums.loadingState !== c.Gui.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = c.Gui.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = c.Gui.PENDING;
                    let n = yield l.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, i.pj)(
                      n.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(r.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = c.Gui.RESOLVE);
                  } catch (t) {
                    n.error(t),
                      (e.otherArtistAlbums.loadingState = c.Gui.REJECT);
                  }
              }),
              getTracks: (0, i.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: l, modelActionsLogger: n } = (0, i.dU)(e);
                try {
                  var s;
                  if (!(null === (s = e.meta) || void 0 === s ? void 0 : s.id))
                    return;
                  f(a, e.items, e.indexItems, c.Gui.PENDING);
                  let t = yield l.getTracksMeta({
                    trackIds: m(a, e.meta.id),
                    withProgress: !0,
                  });
                  h(t, e.items, e.indexItems, e.meta.bestAlbumTracks);
                } catch (t) {
                  n.error(t), f(a, e.items, e.indexItems, c.Gui.REJECT);
                }
              }),
              getDonations: (0, i.ls)(function* (t) {
                let { albumId: a } = t,
                  { experiments: l } = (0, i.yj)(e),
                  { donationResource: n, modelActionsLogger: s } = (0, i.dU)(e);
                if (
                  l.checkExperiment(
                    c.peG.WebNextAlbumDonateChooserButton,
                    "on",
                  ) &&
                  e.donations.loadingState !== c.Gui.PENDING
                )
                  try {
                    e.donations.loadingState = c.Gui.PENDING;
                    let { donations: t } = yield n.getAlbumDonations({
                      albumId: a,
                    });
                    t && (e.donations.items = (0, i.pj)(t.map(o.fv))),
                      (e.donations.loadingState = c.Gui.RESOLVE);
                  } catch (t) {
                    s.error(t), (e.donations.loadingState = c.Gui.REJECT);
                  }
              }),
              getData: (0, i.ls)(function* (a) {
                let { albumId: s, resumeStream: o, preloadedAlbum: d } = a,
                  { albumResource: g, modelActionsLogger: m } = (0, i.dU)(e),
                  { experiments: S, disclaimer: p } = (0, i.yj)(e),
                  E = S.checkExperiment(
                    c.peG.WebNextAlbumDisableVersions,
                    "on",
                  ),
                  y = S.checkExperiment(c.peG.WebNextAlbumDisableTracks, "on"),
                  v = S.checkExperiment(
                    c.peG.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  h = S.checkExperiment(
                    c.peG.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  b = S.checkExperiment(c.peG.WebNextLegalRejectAlbum, "on"),
                  f = S.checkExperiment(c.peG.WebNextAgentPodcast, "on");
                if (((e.id = s), e.loadingState !== c.Gui.PENDING))
                  try {
                    var C, G, P, L, I;
                    let a, m;
                    e.loadingState = c.Gui.PENDING;
                    let S = d;
                    if (
                      (S ||
                        (S = yield g.getAlbumWithTracksIds({
                          albumId: s,
                          resumeStream: o,
                        })),
                      (null == S ? void 0 : S.error) === "not-found")
                    ) {
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                        (e.loadingState = c.Gui.REJECT),
                        (e.otherArtistAlbums.loadingState = c.Gui.REJECT),
                        (e.latestGenreAlbums.loadingState = c.Gui.REJECT);
                      return;
                    }
                    if (
                      null === (C = S.deprecation) || void 0 === C
                        ? void 0
                        : C.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        S.deprecation.targetAlbumId),
                        (e.loadingState = c.Gui.RESOLVE);
                      return;
                    }
                    let _ = (
                        null !== (G = S.disclaimers) && void 0 !== G ? G : []
                      ).includes(n.em.MODAL),
                      A =
                        S.type === n.VZ.PODCAST &&
                        (null !== (P = S.disclaimers) && void 0 !== P
                          ? P
                          : []
                        ).includes(n.em.FOREIGN_AGENT);
                    ((_ && b) || (f && A)) &&
                      (yield p.getAlbumDisclaimer({ albumId: s }));
                    let { sonataState: T } = (0, i.yj)(e);
                    if (
                      (T.setUnloadedEntitiesData(
                        S.volumes.flat().map((e) => (0, u.RN)(e.id)),
                      ),
                      (e.meta = (0, r.ym)(S)),
                      (e.labels = (0, i.pj)(S.labels)),
                      (e.contentWarning = (0, i.pj)(S.contentWarning)),
                      (e.description = (0, i.pj)(S.description)),
                      !E &&
                        S.duplicates &&
                        S.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, i.pj)(
                          null === (L = S.duplicates) || void 0 === L
                            ? void 0
                            : L.map(r.ym),
                        )),
                      !y)
                    ) {
                      N(S, e.items, e.indexItems);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === n.Vc.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !v && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: n.mk.RECENT_ALBUMS,
                          period: n.pH.WEEK,
                          pageSize: 8,
                          genre: S.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = c.Gui.RESOLVE),
                      !h && e.isOtherArtistAlbumsAvailable
                        ? (m = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (I = S.artists[0]) || void 0 === I
                                  ? void 0
                                  : I.id,
                              ),
                              limit: 8,
                            },
                            s,
                          ))
                        : (e.otherArtistAlbums.loadingState = c.Gui.RESOLVE),
                      yield Promise.allSettled([a, m]),
                      e.loadingState !== c.Gui.IDLE &&
                        (e.loadingState = c.Gui.RESOLVE);
                  } catch (t) {
                    m.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.loadingState !== c.Gui.IDLE &&
                        ((e.loadingState = c.Gui.REJECT),
                        (e.otherArtistAlbums.loadingState = c.Gui.REJECT),
                        (e.latestGenreAlbums.loadingState = c.Gui.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              getRelatedContent: (0, i.ls)(function* () {
                let { albumResource: t, modelActionsLogger: a } = (0, i.dU)(e);
                if (e.relatedContent.loadingState !== c.Gui.PENDING)
                  try {
                    var l, n;
                    if (
                      !(null === (l = e.meta) || void 0 === l ? void 0 : l.id)
                    )
                      return;
                    e.relatedContent.loadingState = c.Gui.PENDING;
                    let a = yield t.getRelatedContent({ albumId: e.meta.id });
                    (e.relatedContent.items = (0, i.pj)(
                      null === (n = a.blocks) || void 0 === n
                        ? void 0
                        : n.map(b),
                    )),
                      (e.relatedContent.loadingState = c.Gui.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.relatedContent.loadingState = c.Gui.REJECT);
                  }
              }),
              reset() {
                let { sonataState: t } = (0, i.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.id = null),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  (e.items = (0, i.pj)([])),
                  e.indexItems.clear(),
                  (e.loadingState = c.Gui.IDLE),
                  (e.donations.loadingState = c.Gui.IDLE),
                  (e.donations.items = null),
                  (e.latestGenreAlbums.loadingState = c.Gui.IDLE),
                  (e.latestGenreAlbums.items = (0, i.pj)([])),
                  (e.otherArtistAlbums.loadingState = c.Gui.IDLE),
                  (e.otherArtistAlbums.items = (0, i.pj)([])),
                  (e.otherAlbumVersions = (0, i.pj)([])),
                  (e.description = ""),
                  (e.labels = null),
                  (e.relatedContent.loadingState = c.Gui.IDLE),
                  (e.relatedContent.items = null),
                  (e.allTracksUnfinished = !1);
              },
            };
            return t;
          });
      a(74488);
      var _ = a(93289);
      a(31674);
    },
    93438: function (e, t, a) {
      "use strict";
      a.d(t, {
        DU: function () {
          return f;
        },
        _1: function () {
          return r;
        },
      });
      var i = a(42288),
        l = a(55143),
        n = a(76873);
      let s = i.V5.model("ChartPagePlaylistModel", {
          uuid: i.V5.string,
          uid: i.V5.number,
          kind: i.V5.number,
        }),
        r = i.V5.model("ChartPageModel", {
          title: i.V5.maybeNull(i.V5.string),
          playlistMeta: i.V5.maybeNull(s),
          items: i.V5.array(l.le),
          loadingState: i.V5.enumeration(Object.values(n.Gui)),
        })
          .actions((e) => ({
            getTracks: (0, i.ls)(function* () {
              let { chartResource: t, modelActionsLogger: a } = (0, i.dU)(e);
              if (e.loadingState !== n.Gui.PENDING)
                try {
                  e.loadingState = n.Gui.PENDING;
                  let a = yield t.getChart();
                  (e.title = a.title),
                    (e.playlistMeta = (0, i.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, i.pj)(
                      a.chartPositions.map((e) =>
                        (0, l.S7)(e.track, e.chartPosition),
                      ),
                    )),
                    e.loadingState !== n.Gui.IDLE &&
                      (e.loadingState = n.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== n.Gui.IDLE &&
                      (e.loadingState = n.Gui.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === n.Gui.PENDING ||
                e.loadingState === n.Gui.IDLE
              );
            },
            get isLoadingError() {
              return e.loadingState === n.Gui.REJECT;
            },
          }));
      var o = a(9753),
        u = a(60836),
        d = a(9544),
        c = a(98639),
        g = a(80542),
        m = a(23881),
        S = a(84338),
        p = a(90679),
        E = a(2570),
        y = a(68106),
        v = a(60424),
        h = a(3084),
        N = a(10929),
        b = a.n(N);
      let f = (0, d.Pi)(() => {
        let { formatMessage: e } = (0, g.Z)(),
          { chart: t } = (0, n.oR4)(),
          a = (0, n.k67)(),
          { contentScrollRef: i, setContentScrollRef: s } = (0, n.$Y6)(),
          { from: r } = (0, n.MhG)({ pageId: n.Rhz.CHART });
        t.loadingState === n.Gui.IDLE && (0, c.use)(t.getTracks()),
          (0, n.NOh)(t.loadingState === n.Gui.RESOLVE);
        let d = (0, c.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, o.jsx)(l._3, {
                    track: a,
                    playContextParams: {
                      contextData: {
                        type: S.Ak.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: r,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    },
                  })
                : (0, o.jsx)(h.DX, {
                    isActive: !0,
                    className: b().shimmerItem,
                    variant: n.Lxt.PLAYLIST,
                  });
            },
            [r, t.items, t.isLoading, t.playlistMeta],
          ),
          N = (0, c.useMemo)(
            () => ({
              Footer: () => (0, o.jsx)(h.$_, { className: b().footer }),
            }),
            [],
          ),
          f = (0, c.useMemo)(
            () =>
              t.title
                ? (0, o.jsx)(E.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, o.jsx)(p.Shimmer, {
                    className: b().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === n.Gui.REJECT
          ? (0, o.jsx)(y.D, {})
          : (0, o.jsx)(n.Lh6, {
              pageId: n.Rhz.CHART,
              children: (0, o.jsx)(v.I7, {
                scrollElement: i,
                ...(t.title && { outerTitle: t.title }),
                children: (0, o.jsxs)("div", {
                  className: b().root,
                  ...(0, m.BA)(m.Br.chart.CHART_PAGE),
                  children: [
                    (0, o.jsx)(h.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      children: f,
                    }),
                    (0, o.jsx)(h.Wv, {
                      className: (0, u.W)(b().scrollContainer, b().important),
                      listClassName: b().content,
                      customComponents: N,
                      totalCount: t.items.length,
                      itemContentCallback: d,
                      debounceDurationInMs: 300,
                      handleRef: s,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    41626: function (e, t, a) {
      "use strict";
      a.d(t, {
        o: function () {
          return m;
        },
        W: function () {
          return r;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(31490),
        s = a(76873);
      let r = i.V5.model("FavoriteTracksPage", {
        playlistUuid: i.V5.maybeNull(i.V5.string),
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get playlistUrl() {
            if (e.playlistUuid) return "/playlists/".concat(e.playlistUuid);
            return;
          },
        }))
        .actions((e) => ({
          getPlaylistUrl: (0, i.ls)(function* () {
            let { landingResource: t, modelActionsLogger: a } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let a = yield t.getBlock(
                  {
                    uri: "/landing/block/collection/playlist-with-likes",
                    countWeb: 8,
                  },
                  n.gQ.COLLECTION_PLAYLIST_WITH_LIKES,
                );
                (e.playlistUuid = a.playlist.playlistUuid),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                a.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE), (e.playlistUuid = null);
          },
        }));
      var o = a(9753),
        u = a(9544),
        d = a(98639),
        c = a(23948);
      let g = (0, u.Pi)(() => (0, o.jsx)(c.T, {})),
        m = (0, u.Pi)(() => {
          let { favoriteTracks: e } = (0, s.oR4)(),
            t = (0, s.s0h)(e.playlistUrl);
          if (
            (e.loadingState === s.Gui.IDLE && (0, d.use)(e.getPlaylistUrl()),
            (0, d.useEffect)(
              () => () => {
                e.reset();
              },
              [e],
            ),
            (0, d.useEffect)(() => {
              e.playlistUrl && t();
            }, [e.playlistUrl, t]),
            e.loadingState === s.Gui.REJECT)
          )
            return (0, o.jsx)(g, {});
        });
    },
    95946: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return p.GenreAlbumsPage;
        },
        eq: function () {
          return E.GenreArtistsPage;
        },
        a0: function () {
          return y.GenrePage;
        },
        Kx: function () {
          return S;
        },
        Fe: function () {
          return v.GenrePlaylistsPage;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(70071),
        s = a(73276),
        r = a(33589),
        o = a(76873),
        u = a(68133);
      let d = i.V5.model("GenreAlbumsPage", {
          loadingState: i.V5.enumeration(Object.values(o.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(n.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === o.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
              return (e.loadingState === o.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === o.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { metatagId: a, page: s = 0, pageSize: r = 20 } = t,
                { metatagsResource: u, modelActionsLogger: d } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gui.PENDING &&
                    e.pendingPages.has("".concat(s))) ||
                  e.alreadyRequestedPages.has("".concat(s))
                )
              ) {
                "number" == typeof s &&
                  e.alreadyRequestedPages.set("".concat(s), s);
                try {
                  var c;
                  (e.loadingState = o.Gui.PENDING),
                    e.pendingPages.set("".concat(s), s);
                  let t = yield u.getMetatagAlbums({
                    id: a,
                    offset: s,
                    limit: r,
                  });
                  e.fullTitle = t.title.fullTitle;
                  let l = { page: s, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let d = t.albums.map(n.ym);
                  (0, o.AG_)({
                    items: e.items,
                    mappedRawItems: d,
                    page: s,
                    pageSize: r,
                  }),
                    (e.pager = l),
                    (e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  d.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(s));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        c = i.V5.model("GenreArtistsPage", {
          loadingState: i.V5.enumeration(Object.values(o.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(r.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === o.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
              return (e.loadingState === o.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === o.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { metatagId: a, page: n = 0, pageSize: s = 20 } = t,
                { metatagsResource: u, modelActionsLogger: d } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gui.PENDING &&
                    e.pendingPages.has("".concat(n))) ||
                  e.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  e.alreadyRequestedPages.set("".concat(n), n);
                try {
                  var c;
                  (e.loadingState = o.Gui.PENDING),
                    e.pendingPages.set("".concat(n), n);
                  let t = yield u.getMetatagArtists({
                    id: a,
                    offset: n,
                    limit: s,
                    period: "week",
                  });
                  e.fullTitle = t.title.fullTitle;
                  let l = { page: n, perPage: s, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let d = t.artists.map((e) => (0, r.d)(e.artist));
                  (0, o.AG_)({
                    items: e.items,
                    mappedRawItems: d,
                    page: n,
                    pageSize: s,
                  }),
                    (e.pager = l),
                    (e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  d.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(n));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          }));
      var g = a(10668);
      let m = i.V5.model("GenrePlaylistsPage", {
          loadingState: i.V5.enumeration(Object.values(o.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(g.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === o.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
              return (e.loadingState === o.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === o.Gui.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { metatagId: a, page: l = 0, pageSize: n = 20 } = t,
                { metatagsResource: s, modelActionsLogger: r } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gui.PENDING &&
                    e.pendingPages.has("".concat(l))) ||
                  e.alreadyRequestedPages.has("".concat(l))
                )
              ) {
                "number" == typeof l &&
                  e.alreadyRequestedPages.set("".concat(l), l);
                try {
                  var u;
                  (e.loadingState = o.Gui.PENDING),
                    e.pendingPages.set("".concat(l), l);
                  let t = yield s.getMetatagPlaylists({
                    id: a,
                    offset: l,
                    limit: n,
                    withLikesCount: !0,
                  });
                  e.fullTitle = t.title.fullTitle;
                  let r = { page: l, perPage: n, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: r.total }, () => null),
                    ));
                  let d = t.playlists.map(g.PV);
                  (0, o.AG_)({
                    items: e.items,
                    mappedRawItems: d,
                    page: l,
                    pageSize: n,
                  }),
                    (e.pager = r),
                    (e.requests =
                      (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.alreadyRequestedPages.delete("".concat(l)),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(l));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        S = i.V5.model("GenrePage", {
          id: i.V5.maybeNull(i.V5.string),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          loadingState: i.V5.enumeration(Object.values(o.Gui)),
          fullTitle: i.V5.maybeNull(i.V5.string),
          artists: i.V5.array(r.Go),
          albums: i.V5.array(n.ug),
          playlists: i.V5.array(s.d2),
          albumsSubpage: d,
          artistsSubpage: c,
          playlistsSubpage: m,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === o.Gui.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
              return (e.loadingState === o.Gui.REJECT && a) || t;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { id: a } = t,
                { metatagsResource: u, modelActionsLogger: d } = (0, i.dU)(e);
              if (e.loadingState !== o.Gui.PENDING)
                try {
                  e.loadingState = o.Gui.PENDING;
                  let t = yield u.getMetatagById({ id: a });
                  (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, i.pj)(t.artists.map(r.d))),
                    (e.albums = (0, i.pj)(t.albums.map(n.ym))),
                    (e.playlists = (0, i.pj)(t.playlists.map(s.Q9))),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  d.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, i.pj)([])),
                (e.albums = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([]));
            },
          }));
      var p = a(70660),
        E = a(12788);
      a(20806);
      var y = a(5112),
        v = a(91477);
    },
    70660: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreAlbumsPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(70071),
        g = a(60424),
        m = a(76873),
        S = a(3084),
        p = a(40489),
        E = a.n(p);
      let y = (0, n.Pi)((e) => {
        var t, a, n;
        let { metatagId: p } = e,
          {
            genre: { albumsSubpage: y },
          } = (0, m.oR4)(),
          { formatMessage: v } = (0, o.Z)(),
          { contentScrollRef: h, setContentScrollRef: N } = (0, m.$Y6)(),
          b = (0, m.k67)();
        p &&
          y.loadingState === m.Gui.IDLE &&
          (0, r.use)(y.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let f = (0, r.useCallback)(
          (e) => {
            p && y.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [y, p],
        );
        (0, r.useEffect)(
          () => () => {
            y.reset();
          },
          [y],
        ),
          y.isNotFound && (0, s.notFound)(),
          (0, m.NOh)(y.loadingState === m.Gui.RESOLVE);
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return y.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.GENRE_ALBUMS,
              children: (0, i.jsx)(g.I7, {
                scrollElement: h,
                outerTitle: y.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = v(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: v({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (n = y.requests) && void 0 !== n ? n : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: v(
                          { id: "mixes.albums-list" },
                          { genreName: y.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    12788: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreArtistsPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(76685),
        g = a(60424),
        m = a(76873),
        S = a(3084),
        p = a(6380),
        E = a.n(p);
      let y = (0, n.Pi)((e) => {
        var t, a, n;
        let { metatagId: p } = e,
          {
            genre: { artistsSubpage: y },
          } = (0, m.oR4)(),
          { formatMessage: v } = (0, o.Z)(),
          { contentScrollRef: h, setContentScrollRef: N } = (0, m.$Y6)(),
          b = (0, m.k67)();
        p &&
          y.loadingState === m.Gui.IDLE &&
          (0, r.use)(y.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let f = (0, r.useCallback)(
          (e) => {
            p && y.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [y, p],
        );
        (0, r.useEffect)(
          () => () => {
            y.reset();
          },
          [y],
        ),
          y.isNotFound && (0, s.notFound)(),
          (0, m.NOh)(y.loadingState === m.Gui.RESOLVE);
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return y.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.GENRE_ARTISTS,
              children: (0, i.jsx)(g.I7, {
                scrollElement: h,
                outerTitle: y.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = v(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: v({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(S.hi, {
                              "aria-label": l,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (n = y.requests) && void 0 !== n ? n : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: v(
                          { id: "mixes.artists-list" },
                          { genreName: y.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    20806: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreNotFoundPage: function () {
          return s;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(23948);
      let s = (0, l.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    5112: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePage: function () {
          return N;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(41055),
        d = a(2570),
        c = a(68106),
        g = a(70071),
        m = a(76685),
        S = a(60424),
        p = a(73276),
        E = a(76873),
        y = a(3084),
        v = a(60015),
        h = a.n(v);
      let N = (0, n.Pi)((e) => {
        let { metatagId: t } = e,
          { genre: a } = (0, E.oR4)(),
          { formatMessage: n } = (0, o.Z)(),
          { contentScrollRef: v, setContentScrollRef: N } = (0, E.$Y6)(),
          b = (0, E.k67)();
        return (t &&
          a.loadingState === E.Gui.IDLE &&
          (0, r.use)(a.getData({ id: t })),
        a.isNotFound && (0, s.notFound)(),
        (0, r.useEffect)(
          () => () => {
            a.reset();
          },
          [a],
        ),
        (0, E.NOh)(a.loadingState === E.Gui.RESOLVE),
        a.loadingState !== E.Gui.REJECT || a.isNotFound)
          ? (0, i.jsx)(E.Lh6, {
              pageId: E.Rhz.GENRE,
              children: (0, i.jsxs)(S.I7, {
                scrollElement: v,
                outerTitle: a.fullTitle,
                children: [
                  (0, i.jsx)(y.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: b.canBack,
                    children: (0, i.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: a.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(u.t, {
                    className: h().root,
                    containerClassName: h().content,
                    ref: N,
                    children: (0, i.jsxs)("div", {
                      className: h().carouselBlocks,
                      children: [
                        a.hasPlaylists &&
                          (0, i.jsx)(E.Ja5, {
                            blockId: E.BEo.PLAYLISTS_CAROUSEL,
                            blockType: E.BEo.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: E.BEo.PLAYLISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(p.VD, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                h().carouselBlockHeader,
                                h().carouselBlock,
                              ),
                              containerClassName: h().carouselBlock,
                              playlists: a.playlists,
                              title: n({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        a.hasAlbums &&
                          (0, i.jsx)(E.Ja5, {
                            blockId: E.BEo.ALBUMS_CAROUSEL,
                            blockType: E.BEo.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: E.BEo.ALBUMS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(g.wk, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                h().carouselBlockHeader,
                                h().carouselBlock,
                              ),
                              containerClassName: h().carouselBlock,
                              albums: a.albums,
                              title: n({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/albums",
                              ),
                            }),
                          }),
                        a.hasArtists &&
                          (0, i.jsx)(E.Ja5, {
                            blockId: E.BEo.ARTISTS_CAROUSEL,
                            blockType: E.BEo.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: E.BEo.ARTISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(y.HY, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                h().carouselBlockHeader,
                                h().carouselBlock,
                              ),
                              containerClassName: h().carouselBlock,
                              title: n({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/artists",
                              ),
                              children: a.artists.map((e) =>
                                (0, i.jsx)(
                                  m.IT,
                                  { artist: e, contentLinesCount: 3 },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, i.jsx)(c.D, {});
      });
    },
    91477: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePlaylistsPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(60424),
        g = a(73276),
        m = a(76873),
        S = a(3084),
        p = a(15874),
        E = a.n(p);
      let y = (0, n.Pi)((e) => {
        var t, a, n;
        let { metatagId: p } = e,
          {
            genre: { playlistsSubpage: y },
          } = (0, m.oR4)(),
          { formatMessage: v } = (0, o.Z)(),
          { contentScrollRef: h, setContentScrollRef: N } = (0, m.$Y6)(),
          b = (0, m.k67)();
        p &&
          y.loadingState === m.Gui.IDLE &&
          (0, r.use)(y.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let f = (0, r.useCallback)(
          (e) => {
            p && y.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [y, p],
        );
        (0, r.useEffect)(
          () => () => {
            y.reset();
          },
          [y],
        ),
          y.isNotFound && (0, s.notFound)(),
          (0, m.NOh)(y.loadingState === m.Gui.RESOLVE);
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return y.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: h,
                outerTitle: y.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = v(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: v({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              g.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (n = y.requests) && void 0 !== n ? n : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: v(
                          { id: "mixes.playlists-list" },
                          { genreName: y.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    72636: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return o.GenresPage;
        },
        EU: function () {
          return r;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(76154),
        s = a(76873);
      let r = i.V5.model("GenresPageModel", {
        title: i.V5.maybeNull(i.V5.string),
        items: i.V5.array(n.fm),
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === s.Gui.IDLE || e.loadingState === s.Gui.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === s.Gui.RESOLVE && 0 === e.items.length;
            return e.errorStatusCode === l.CN.NOT_FOUND || t;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { landing3Resource: a, modelActionsLogger: r } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let r = (yield a.getMetatags({})).trees.find(
                  (e) => e.navigationId === t,
                );
                if (!r) {
                  e.errorStatusCode = l.CN.NOT_FOUND;
                  return;
                }
                (e.title = r.title),
                  (e.items = (0, i.pj)(r.leaves.map(n.uG))),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                r.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE),
              (e.title = null),
              (e.items = (0, i.pj)([])),
              (e.errorStatusCode = null);
          },
        }));
      a(49535);
      var o = a(95002);
    },
    49535: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(23948);
      let n = () => (0, i.jsx)(l.T, {});
    },
    95002: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresPage: function () {
          return E;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(74717),
        s = a(98639),
        r = a(41055),
        o = a(2570),
        u = a(68106),
        d = a(60424),
        c = a(76154),
        g = a(76873),
        m = a(3084),
        S = a(69836),
        p = a.n(S);
      let E = (0, l.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, g.oR4)(),
          { contentScrollRef: l, setContentScrollRef: S } = (0, g.$Y6)(),
          E = (0, g.k67)();
        return ((0, s.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, n.notFound)(),
        t && a.loadingState === g.Gui.IDLE && (0, s.use)(a.getData(t)),
        (0, g.NOh)(a.loadingState === g.Gui.RESOLVE),
        a.loadingState === g.Gui.REJECT)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsxs)(d.I7, {
              scrollElement: l,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(m.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: E.canBack,
                  children: (0, i.jsx)(o.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(r.t, {
                  className: p().root,
                  containerClassName: p().content,
                  ref: S,
                  children: (0, i.jsx)("div", {
                    className: p().list,
                    children: a.items.map((e) =>
                      (0, i.jsx)(
                        c.mH,
                        { tag: e.tag, title: e.title, subGenres: e.subGenres },
                        e.tag,
                      ),
                    ),
                  }),
                }),
              ],
            });
      });
    },
    20680: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsNotFoundPage: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(23948),
        r = a(76873);
      let o = (0, l.Pi)(() => {
        let { kids: e } = (0, r.oR4)();
        return (
          (0, n.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    68886: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsPage: function () {
          return b;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(31014),
        d = a(23881),
        c = a(31490),
        g = a(41055),
        m = a(2570),
        S = a(14253),
        p = a(68106),
        E = a(60424),
        y = a(76873),
        v = a(3084),
        h = a(29025),
        N = a.n(h);
      let b = (0, n.Pi)(() => {
        let { kids: e, user: t, experiments: a } = (0, y.oR4)(),
          { formatMessage: n } = (0, o.Z)(),
          { contentScrollRef: h, setContentScrollRef: b } = (0, y.$Y6)();
        a.checkExperiment(y.peG.WebNextKidsLanding, "on") || (0, s.notFound)(),
          e.landing.loadingState === y.Gui.IDLE &&
            (0, r.use)(
              e.landing.getSkeleton(
                { id: c.jB.KIDS_WEB, showWizard: t.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, r.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, y.NOh)(e.landing.loadingState === y.Gui.RESOLVE);
        let f = (0, S._B)(e.landing);
        return (0, i.jsx)(y.Lh6, {
          pageId: y.Rhz.KIDS,
          children: (0, i.jsxs)(E.I7, {
            scrollElement: h,
            outerTitle: n({ id: "kids.for-kids" }),
            children: [
              (0, i.jsx)(v.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: N().header,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: (0, i.jsx)(u.Z, { id: "kids.for-kids" }),
                  }),
                }),
              }),
              (0, i.jsxs)(g.t, {
                className: N().root,
                containerClassName: N().content,
                ref: b,
                ...(0, d.BA)(d.Br.kids.KIDS_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, l.W)(N().landing, {
                      [N().landing_onlyWizard]: f,
                    }),
                    children: (0, i.jsx)(S.Od, {
                      landing: e.landing,
                      errorComponent: (0, i.jsx)(p.D, {
                        className: N().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(v.$_, { className: N().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    50369: function (e, t, a) {
      "use strict";
      a.d(t, {
        T4: function () {
          return A.NonMusicAlbumsPage;
        },
        z4: function () {
          return i.z;
        },
        ov: function () {
          return T.NonMusicCategoryPage;
        },
        C2: function () {
          return k.NonMusicCategoryPlaylistsPage;
        },
        NG: function () {
          return _;
        },
      });
      var i = a(21008),
        l = a(42288),
        n = a(60991),
        s = a(73276),
        r = a(10668),
        o = a(76873),
        u = a(68133);
      let d = l.V5.model("NonMusicCategoryPlaylistsDataItem", {
          uid: l.V5.number,
          kind: l.V5.number,
          data: l.V5.maybeNull(s.d2),
        }),
        c = l.V5.model("NonMusicCategoryPlaylistsPage", {
          errorStatusCode: l.V5.maybe(l.V5.number),
          loadingState: l.V5.enumeration(Object.values(o.Gui)),
          title: l.V5.maybeNull(l.V5.string),
          pager: l.V5.maybeNull(u.Vn),
          playlists: l.V5.maybeNull(l.V5.array(d)),
          alreadyRequestedPages: l.V5.map(l.V5.number),
          requests: l.V5.maybeNull(l.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING
              );
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === n.CN.NOT_FOUND ||
                e.errorStatusCode === n.CN.BAD_REQUEST;
              return e.loadingState === o.Gui.REJECT && t;
            },
            get isSomethingWrong() {
              return e.loadingState === o.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getPlaylists: (0, l.ls)(function* (t) {
                var a, i, s;
                let { page: u = 0, pageSize: d = 20 } = t,
                  { playlistsResource: c, modelActionsLogger: g } = (0, l.dU)(
                    e,
                  );
                if (
                  !(
                    !(null === (a = e.playlists) || void 0 === a
                      ? void 0
                      : a.length) || e.alreadyRequestedPages.has("".concat(u))
                  )
                ) {
                  e.alreadyRequestedPages.set("".concat(u), u);
                  try {
                    let t = u * d,
                      a = e.playlists.slice(t, t + d),
                      n = yield c.getPlaylists({
                        playlistIds: a.map((e) =>
                          "".concat(e.uid, ":").concat(e.kind),
                        ),
                        resumeStream: !1,
                      });
                    e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1;
                    let o = {
                        page: u,
                        perPage: d,
                        total:
                          null === (i = e.playlists) || void 0 === i
                            ? void 0
                            : i.length,
                      },
                      g = n.playlists.map(r.PV),
                      m = u * d,
                      S = 0;
                    for (let t = m; t < m + d; t++)
                      g[S] &&
                        e.playlists[t] &&
                        (e.playlists[t].data = (0, l.pj)(g[S])),
                        S++;
                    e.pager = o;
                  } catch (t) {
                    g.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== o.Gui.IDLE &&
                        (e.loadingState = o.Gui.REJECT);
                  }
                }
              }),
              getData: (0, l.ls)(function* (a) {
                let { categoryId: i, page: s = 0, pageSize: r = 20 } = a,
                  { nonMusicResource: u, modelActionsLogger: d } = (0, l.dU)(e);
                if (e.loadingState !== o.Gui.PENDING)
                  try {
                    e.loadingState = o.Gui.PENDING;
                    let a = yield u.getPlaylists({ categoryId: i });
                    (e.title = a.title),
                      a.entities &&
                        a.entities.length > 0 &&
                        (e.playlists = (0, l.pj)(
                          a.entities.map((e) => ({ uid: e.uid, kind: e.kind })),
                        )),
                      e.loadingState !== o.Gui.IDLE &&
                        (e.loadingState = o.Gui.RESOLVE),
                      yield t.getPlaylists({ page: s, pageSize: r });
                  } catch (t) {
                    d.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== o.Gui.IDLE &&
                        (e.loadingState = o.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = o.Gui.IDLE),
                  e.alreadyRequestedPages.clear(),
                  (e.title = null),
                  (e.playlists = (0, l.pj)([])),
                  (e.requests = null),
                  (e.pager = null);
              },
            };
            return t;
          });
      var g = a(14253),
        m = a(70071);
      let S = l.V5.model("NonMusicAlbumsPageItem", {
          id: l.V5.number,
          data: l.V5.maybeNull(m.ug),
        }),
        p = l.V5.model("NonMusicAlbumsPage", {
          errorStatusCode: l.V5.maybe(l.V5.number),
          loadingState: l.V5.enumeration(Object.values(o.Gui)),
          title: l.V5.maybeNull(l.V5.string),
          albums: l.V5.maybeNull(l.V5.array(S)),
          requestsCount: l.V5.maybe(l.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING
              );
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === n.CN.NOT_FOUND ||
                e.errorStatusCode === n.CN.BAD_REQUEST;
              return e.loadingState === o.Gui.REJECT && t;
            },
            get isSomethingWrong() {
              return e.loadingState === o.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getEditorialAlbums: (0, l.ls)(function* (t) {
              let { id: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== o.Gui.PENDING)
                try {
                  var r;
                  e.loadingState = o.Gui.PENDING;
                  let t = yield i.getEditorialAlbums({ id: a });
                  (e.title = t.title),
                    (null === (r = t.entities) || void 0 === r
                      ? void 0
                      : r.length) &&
                      (e.albums = (0, l.pj)(
                        t.entities.map((e) => ({ id: e })),
                      )),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
            }),
            getCategoryAlbums: (0, l.ls)(function* (t) {
              let { id: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== o.Gui.PENDING)
                try {
                  var r;
                  e.loadingState = o.Gui.PENDING;
                  let t = yield i.getCategoryAlbums({ id: a });
                  (e.title = t.title),
                    (null === (r = t.albums) || void 0 === r
                      ? void 0
                      : r.length) &&
                      (e.albums = (0, l.pj)(t.albums.map((e) => ({ id: e })))),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
            }),
            getAlbumsByRange: (0, l.ls)(function* (t, a) {
              var i, n, s;
              let { albumResource: r, modelActionsLogger: o } = (0, l.dU)(e);
              if (
                !(null === (i = e.albums) || void 0 === i ? void 0 : i.length)
              )
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.albums.length));
              let u = [];
              for (let i = t; i <= a; i++)
                (null === (n = e.albums[i]) || void 0 === n ? void 0 : n.id) &&
                  !(null === (s = e.albums[i]) || void 0 === s
                    ? void 0
                    : s.data) &&
                  u.push(e.albums[i].id);
              if (!u.length) return null;
              try {
                let t = yield r.getAlbums({ albumIds: u });
                null == t ||
                  t.forEach((t) => {
                    var a;
                    null === (a = e.albums) ||
                      void 0 === a ||
                      a.forEach((a, i) => {
                        var l;
                        a.id === t.id &&
                          (null === (l = e.albums) || void 0 === l
                            ? void 0
                            : l[i]) &&
                          (e.albums[i].data = (0, m.ym)(t));
                      });
                  }),
                  e.requestsCount
                    ? (e.requestsCount = e.requestsCount + 1)
                    : (e.requestsCount = 1);
              } catch (e) {
                o.error(e);
              }
              return null;
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                (e.title = null),
                (e.albums = null),
                (e.requestsCount = 0);
            },
          }));
      var E = a(31490),
        y = a(94342);
      let v = (e) => {
          let t = e.entities.map((e) => ({
            ...(0, m.ym)(e.data.album),
            chart: e.data.chartPosition && (0, y.W5)(e.data.chartPosition),
            likesCount: e.data.album.likesCount,
          }));
          return (0, l.pj)({
            id: e.id,
            type: E.cc.ALBUM_CHART,
            landingBlockType: E.gQ.CHART_ALBUMS,
            title: e.title,
            description: e.description,
            items: t,
          });
        },
        h = (e) => {
          let t = e.entities.map((e) => ({
            ...(0, m.ym)(e.data),
            likesCount: e.data.likesCount,
          }));
          return (0, l.pj)({
            id: e.id,
            type: E.cc.CATEGORY,
            landingBlockType: E.gQ.NON_MUSIC_EDITORIAL_COMPILATION,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        N = (e) => {
          let t = e.entities.map((e) => {
            switch (e.type) {
              case E.fl.PLAYLIST:
                return {
                  type: E.Qm.PLAYLIST,
                  data: (0, s.VB)({ ...e.data, artists: [] }),
                };
              case E.fl.ALBUM:
                return { type: E.Qm.ALBUM, data: (0, m.ym)(e.data) };
            }
          });
          return (0, l.pj)({
            id: e.id,
            type: E.cc.EDITORIAL_PLAYLISTS,
            landingBlockType: E.gQ.RECENTLY_PLAYED,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        b = l.V5.model("NonMusicBaseBlock").props({
          type: l.V5.enumeration(Object.values(E.cc.CATEGORY)),
          landingBlockType: l.V5.enumeration(Object.values(E.gQ)),
          id: l.V5.maybe(l.V5.string),
          title: l.V5.maybe(l.V5.string),
          description: l.V5.maybe(l.V5.string),
          viewAllActionLink: l.V5.maybe(l.V5.string),
        }),
        f = b.named("NonMusicCategoryBlock").props({
          type: l.V5.literal(E.cc.CATEGORY),
          landingBlockType: l.V5.literal(E.gQ.NON_MUSIC_EDITORIAL_COMPILATION),
          items: l.V5.array(m.ug),
        }),
        C = b.named("NonMusicChartAlbumBlock").props({
          type: l.V5.literal(E.cc.ALBUM_CHART),
          landingBlockType: l.V5.literal(E.gQ.CHART_ALBUMS),
          items: l.V5.array(m.ug),
        }),
        G = l.V5.union(g.SJ, g.jn),
        P = b.named("NonMusicEditorialPlaylistsBlock").props({
          type: l.V5.literal(E.cc.EDITORIAL_PLAYLISTS),
          landingBlockType: l.V5.literal(E.gQ.RECENTLY_PLAYED),
          items: l.V5.array(G),
        }),
        L = l.V5.union(C, P, f),
        I = l.V5.model("NonMusicCategoryPage", {
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          title: l.V5.maybeNull(l.V5.string),
          loadingState: l.V5.enumeration(Object.values(o.Gui)),
          blocks: l.V5.array(L),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === o.Gui.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === o.Gui.RESOLVE && 0 === e.blocks.length,
                a =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
              return (e.loadingState === o.Gui.REJECT && a) || t;
            },
            get isSomethingWrong() {
              return e.loadingState === o.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, l.ls)(function* (t) {
              let { categoryId: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== o.Gui.PENDING)
                try {
                  e.loadingState = o.Gui.PENDING;
                  let t = yield i.getCategory({ categoryId: a });
                  e.title = t.title;
                  let n = [];
                  t.blocks &&
                    (t.blocks.forEach((e) => {
                      switch (e.type) {
                        case E.cc.ALBUM_CHART:
                          n.push(v(e));
                          return;
                        case E.cc.EDITORIAL_PLAYLISTS:
                          n.push(N(e));
                          return;
                        case E.cc.CATEGORY:
                          n.push(h(e));
                          return;
                      }
                    }),
                    (e.blocks = (0, l.pj)(n))),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
            }),
            reset() {
              (e.errorStatusCode = null),
                (e.title = null),
                (e.loadingState = o.Gui.IDLE),
                (e.blocks = (0, l.pj)([]));
            },
          })),
        _ = l.V5.model("NonMusicPage", {
          landing: g.d5,
          albums: p,
          categorySubpage: I,
          categoryPlaylistsSubpage: c,
        });
      var A = a(69022);
      a(85697);
      var T = a(26895),
        k = a(13062);
      a(34790), a(55549);
    },
    21008: function (e, t, a) {
      "use strict";
      var i, l;
      a.d(t, {
        z: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).CATEGORY = "category"),
        (l.EDITORIAL = "editorial");
    },
    69022: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicAlbumsPage: function () {
          return v;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(23881),
        d = a(2570),
        c = a(70071),
        g = a(60424),
        m = a(76873),
        S = a(3084),
        p = a(21008),
        E = a(51824),
        y = a.n(E);
      let v = (0, n.Pi)((e) => {
        var t, a;
        let { id: n, variant: E } = e,
          {
            nonMusic: { albums: v },
          } = (0, m.oR4)(),
          { formatMessage: h } = (0, o.Z)(),
          { contentScrollRef: N, setContentScrollRef: b } = (0, m.$Y6)(),
          f = (0, m.k67)();
        n &&
          v.loadingState === m.Gui.IDLE &&
          (E === p.z.EDITORIAL
            ? (0, r.use)(v.getEditorialAlbums({ id: n }))
            : (0, r.use)(v.getCategoryAlbums({ id: n }))),
          (v.isNotFound || !n) && (0, s.notFound)(),
          (0, m.NOh)(v.loadingState === m.Gui.RESOLVE),
          (0, r.useEffect)(
            () => () => {
              v.reset();
            },
            [v],
          );
        let C = (0, r.useCallback)(
            (e) => {
              v.getAlbumsByRange(e.startIndex, e.endIndex);
            },
            [v],
          ),
          G = (0, r.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(S.$_, { className: y().footer }),
            }),
            [],
          ),
          P =
            v.loadingState === m.Gui.PENDING
              ? 20
              : null !==
                    (a =
                      null === (t = v.albums) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== a
                ? a
                : 0;
        return (0, i.jsx)(m.Lh6, {
          pageId: m.Rhz.NON_MUSIC_ALBUMS,
          children: (0, i.jsx)(g.I7, {
            scrollElement: N,
            outerTitle: v.title,
            children: (0, i.jsxs)("div", {
              className: y().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_ALBUMS_PAGE),
              children: [
                (0, i.jsx)(S.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: f.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: v.title,
                  }),
                }),
                (0, i.jsx)(S.Wv, {
                  className: (0, l.W)(y().scrollContainer, y().important),
                  customComponents: G,
                  itemContentCallback: (e) => {
                    var t, a;
                    let l =
                        null === (a = v.albums) || void 0 === a
                          ? void 0
                          : null === (t = a[e]) || void 0 === t
                            ? void 0
                            : t.data,
                      n = h(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: h({ id: "entity-names.album" }) },
                      );
                    return l
                      ? (0, i.jsx)(
                          c.rf,
                          { album: l, contentLinesCount: 3 },
                          l.id,
                        )
                      : (0, i.jsx)(S.hi, { "aria-label": n }, e);
                  },
                  totalCount: P,
                  onGetDataByRange: C,
                  totalRequests: v.requestsCount,
                  listClassName: y().content,
                  itemClassName: y().item,
                  handleRef: b,
                  context: {
                    listAriaLabel: h(
                      { id: "mixes.albums-list" },
                      { genreName: v.title || "" },
                    ),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    85697: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryNotFoundPage: function () {
          return s;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(23948);
      let s = (0, l.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    26895: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryPage: function () {
          return h;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(31490),
        u = a(41055),
        d = a(2570),
        c = a(14253),
        g = a(68106),
        m = a(60424),
        S = a(76873),
        p = a(3084),
        E = a(65817),
        y = a.n(E);
      let v = {
          [o.cc.ALBUM_CHART]: c.m8,
          [o.cc.EDITORIAL_PLAYLISTS]: c.Rn,
          [o.cc.CATEGORY]: c.j$,
        },
        h = (0, n.Pi)((e) => {
          let { categoryId: t } = e,
            { categorySubpage: a } = (0, S.oR4)().nonMusic,
            { contentScrollRef: n, setContentScrollRef: o } = (0, S.$Y6)(),
            c = (0, S.RVp)(),
            E = (0, S.k67)();
          if (
            ((!c || a.isNotFound) && (0, s.notFound)(),
            t &&
              a.loadingState === S.Gui.IDLE &&
              (0, r.use)(a.getData({ categoryId: t })),
            (0, r.useEffect)(() => () => a.reset(), [a]),
            (0, S.NOh)(a.loadingState === S.Gui.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(g.D, {});
          let h = (0, r.useMemo)(
            () =>
              a.blocks.map((e, t) => {
                let n = v[e.type];
                return (0, i.jsx)(
                  S.Ja5,
                  {
                    blockId: e.id,
                    blockType: e.type,
                    blockIdForFrom: ""
                      .concat(S.BEo.DISCOVERY_BLOCK, "-")
                      .concat(e.id),
                    blockPosX: 1,
                    blockPosY: t + 1,
                    objectsCount: e.items.length,
                    children: (0, i.jsx)(
                      n,
                      {
                        headerClassName: (0, l.W)(
                          y().carouselBlockHeader,
                          y().carouselBlock,
                        ),
                        containerClassName: y().carouselBlock,
                        type: e.landingBlockType,
                        loadingState: a.loadingState,
                        id: e.id,
                        isNotFound: a.isNotFound,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {
                          title: e.title,
                          description: e.description,
                          viewAllActionLink: e.viewAllActionLink,
                        },
                        data: { items: e.items },
                        isNeededToLoad: !1,
                        isLoading: a.isLoading,
                        isLoaded: a.isLoaded,
                        isRejected: a.isRejected,
                        isShimmerVisible: a.isLoading,
                        isShimmerActive: !0,
                        isVisible: !0,
                        objectsCount: e.items.length,
                      },
                      e.id,
                    ),
                  },
                  e.id,
                );
              }),
            [
              a.loadingState,
              a.isNotFound,
              a.blocks,
              a.isLoading,
              a.isLoaded,
              a.isRejected,
            ],
          );
          return (0, i.jsx)(S.Lh6, {
            pageId: S.Rhz.NON_MUSIC_CATEGORY,
            children: (0, i.jsxs)(m.I7, {
              scrollElement: n,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: E.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: a.title,
                  }),
                }),
                (0, i.jsxs)(u.t, {
                  className: y().root,
                  containerClassName: y().content,
                  ref: o,
                  children: [
                    (0, i.jsx)("div", {
                      className: y().carouselBlocks,
                      children: h,
                    }),
                    (0, i.jsx)(p.$_, { className: y().footer }),
                  ],
                }),
              ],
            }),
          });
        });
    },
    13062: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryPlaylistsPage: function () {
          return v;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(23881),
        d = a(2570),
        c = a(68106),
        g = a(60424),
        m = a(73276),
        S = a(76873),
        p = a(3084),
        E = a(42965),
        y = a.n(E);
      let v = (0, n.Pi)((e) => {
        var t, a, n;
        let { categoryId: E } = e,
          {
            nonMusic: { categoryPlaylistsSubpage: v },
          } = (0, S.oR4)(),
          h = (0, S.k67)(),
          { contentScrollRef: N, setContentScrollRef: b } = (0, S.$Y6)(),
          { formatMessage: f } = (0, o.Z)(),
          C = (0, r.useCallback)(
            (e) => {
              v.getPlaylists({ page: e, pageSize: 20 });
            },
            [v],
          );
        v.loadingState === S.Gui.IDLE &&
          (0, r.use)(v.getData({ categoryId: E, page: 0, pageSize: 20 })),
          v.isNotFound && (0, s.notFound)(),
          (0, r.useEffect)(
            () => () => {
              v.reset();
            },
            [v],
          );
        let G = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: y().footer }) }),
          [],
        );
        if (((0, S.NOh)(v.loadingState === S.Gui.RESOLVE), v.isSomethingWrong))
          return (0, i.jsx)(c.D, {});
        let P = v.isLoading
          ? 20
          : null !==
                (a =
                  null == v
                    ? void 0
                    : null === (t = v.playlists) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
            ? a
            : 0;
        return (0, i.jsx)(S.Lh6, {
          pageId: S.Rhz.NON_MUSIC_CATEGORY_PLAYLISTS,
          children: (0, i.jsx)(g.I7, {
            scrollElement: N,
            outerTitle: v.title,
            children: (0, i.jsxs)("div", {
              className: y().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS),
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: h.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: v.title,
                  }),
                }),
                (0, i.jsx)(p.Wv, {
                  context: {
                    listAriaLabel: f(
                      { id: "mixes.playlists-list" },
                      { genreName: v.title || "" },
                    ),
                  },
                  className: (0, l.W)(y().scrollContainer, y().important),
                  customComponents: G,
                  itemContentCallback: (e) => {
                    var t, a;
                    let l =
                        null == v
                          ? void 0
                          : null === (a = v.playlists) || void 0 === a
                            ? void 0
                            : null === (t = a[e]) || void 0 === t
                              ? void 0
                              : t.data,
                      n = f(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: f({ id: "entity-names.playlist" }) },
                      );
                    return l
                      ? (0, i.jsx)(
                          m.ZL,
                          { playlist: l, contentLinesCount: 3 },
                          l.key,
                        )
                      : (0, i.jsx)(p.hi, { isActive: !0, "aria-label": n });
                  },
                  initialItemCount: P,
                  totalCount: P,
                  onGetDataByPage: C,
                  pageSize: 20,
                  totalRequests:
                    null !== (n = v.requests) && void 0 !== n ? n : 0,
                  listClassName: y().content,
                  itemClassName: y().item,
                  handleRef: b,
                }),
              ],
            }),
          }),
        });
      });
    },
    34790: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicNotFoundPage: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(23948),
        r = a(76873);
      let o = (0, l.Pi)(() => {
        let { nonMusic: e } = (0, r.oR4)();
        return (
          (0, n.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    55549: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicPage: function () {
          return b;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(31014),
        d = a(23881),
        c = a(31490),
        g = a(41055),
        m = a(2570),
        S = a(14253),
        p = a(68106),
        E = a(60424),
        y = a(76873),
        v = a(3084),
        h = a(35857),
        N = a.n(h);
      let b = (0, n.Pi)(() => {
        let { nonMusic: e, user: t, experiments: a } = (0, y.oR4)(),
          { formatMessage: n } = (0, o.Z)(),
          { contentScrollRef: h, setContentScrollRef: b } = (0, y.$Y6)();
        (0, y.RVp)() || (0, s.notFound)();
        let f = a.checkExperiment(
          y.peG.WebNextLandingSkeletonPodcastsAndBooks,
          "on",
        );
        e.landing.loadingState === y.Gui.IDLE &&
          (0, r.use)(
            e.landing.getSkeleton(
              {
                id: f ? c.jB.NON_MUSIC_WEB : c.jB.WEB_NON_MUSIC,
                showWizard: t.settings.showWizard,
              },
              { preloadBlocks: 3 },
            ),
          ),
          (0, r.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, y.NOh)(e.landing.loadingState === y.Gui.RESOLVE);
        let C = (0, S._B)(e.landing),
          G = (0, r.useMemo)(
            () =>
              f
                ? (0, i.jsx)(u.Z, { id: "entity-names.podcasts-and-books" })
                : (0, i.jsx)(u.Z, { id: "entity-names.podcasts" }),
            [f],
          ),
          P = (0, r.useMemo)(
            () =>
              f
                ? n({ id: "entity-names.podcasts-and-books" })
                : n({ id: "entity-names.podcasts" }),
            [n, f],
          );
        return (0, i.jsx)(y.Lh6, {
          pageId: y.Rhz.NON_MUSIC,
          children: (0, i.jsxs)(E.I7, {
            scrollElement: h,
            outerTitle: P,
            children: [
              (0, i.jsx)(v.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: N().header,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: G,
                  }),
                }),
              }),
              (0, i.jsxs)(g.t, {
                className: N().root,
                containerClassName: N().content,
                ref: b,
                ...(0, d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, l.W)(N().landing, {
                      [N().landing_onlyWizard]: C,
                    }),
                    children: (0, i.jsx)(S.Od, {
                      landing: e.landing,
                      errorComponent: (0, i.jsx)(p.D, {
                        className: N().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(v.$_, { className: N().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    902: function (e, t, a) {
      "use strict";
      a.d(t, {
        i$: function () {
          return b.PlaylistPage;
        },
        nb: function () {
          return N;
        },
      });
      var i = a(24244),
        l = a(42288),
        n = a(60991),
        s = a(70909),
        r = a(73276),
        o = a(55143),
        u = a(10668),
        d = a(76873);
      let c = (e, t) => {
          let [a, i] = e.split(":");
          return (0, l.pj)({
            id: a || "",
            albumId: i || "",
            key: "".concat(a, "-").concat(t),
            data: null,
            loadingState: d.Gui.IDLE,
          });
        },
        g = (e) => {
          var t, a, i;
          let n = null === (t = e.tracks) || void 0 === t ? void 0 : t.map(s.M),
            r = (null === (a = e.tracks) || void 0 === a ? void 0 : a.length)
              ? null === (i = e.tracks) || void 0 === i
                ? void 0
                : i.map((e, t) => c(e, t))
              : [];
          return {
            id: e.id,
            name: e.name,
            tracks: (0, l.pj)(r),
            unloadedTracks: (0, l.pj)(n),
          };
        },
        m = (e) => {
          let t = e.filters.map(g);
          if (t.length < 3) return [];
          let a = t.find((e) => e.id === s.W.ALL);
          if (!a) return [];
          let i = t.filter((e) => e.tracks.length >= 8);
          return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
        },
        S = (e, t) =>
          t.map((t) => {
            let a = e.find((e) => String(e.id) === t);
            return (null == a ? void 0 : a.albumId)
              ? "".concat(t, ":").concat(a.albumId)
              : t;
          }),
        p = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return (null == a ? void 0 : a.albumId)
              ? "".concat(a.id, ":").concat(a.albumId)
              : String(null == a ? void 0 : a.id);
          }),
        E = (e, t) => {
          let { startIndex: a, endIndex: i } = t,
            l = [];
          for (let t = a; t <= i; t++) {
            var n, s;
            ((null === (n = e[t]) || void 0 === n ? void 0 : n.loadingState) ===
              d.Gui.IDLE ||
              (null === (s = e[t]) || void 0 === s
                ? void 0
                : s.loadingState) === d.Gui.REJECT) &&
              l.push(t);
          }
          return l;
        };
      var y = a(75191);
      let v = (e) => e.map((e) => (0, y.RN)(e.id, e.albumId || void 0)),
        h = l.V5.model("PlaylistSearchItems", {
          playlistTrackIds: l.V5.maybeNull(l.V5.array(l.V5.string)),
          suggestedTrackIds: l.V5.maybeNull(l.V5.array(l.V5.string)),
          additionTrackInProggress: l.V5.maybeNull(l.V5.string),
          tracks: l.V5.maybeNull(l.V5.array(o.le)),
        })
          .views((e) => ({
            get suggestedTracks() {
              var t;
              return null === (t = e.suggestedTrackIds) || void 0 === t
                ? void 0
                : t.map((t) => {
                    var a;
                    return (
                      (null === (a = e.tracks) || void 0 === a
                        ? void 0
                        : a.find((e) => e.id === t)) || null
                    );
                  });
            },
            get playlistTracks() {
              let t = [...(e.playlistTrackIds || [])];
              return (
                e.additionTrackInProggress &&
                  t.unshift(e.additionTrackInProggress),
                null == t
                  ? void 0
                  : t.map((t) => {
                      var a;
                      return (
                        (null === (a = e.tracks) || void 0 === a
                          ? void 0
                          : a.find((e) => {
                              var a;
                              return (
                                ((null === (a = e.mainAlbum) || void 0 === a
                                  ? void 0
                                  : a.id) && t.includes(":")
                                  ? "".concat(e.id, ":").concat(e.mainAlbum.id)
                                  : e.id) === t
                              );
                            })) || null
                      );
                    })
              );
            },
          }))
          .actions((e) => ({
            setAdditionTrackAnimation(t) {
              e.additionTrackInProggress = t;
            },
            replaceAdditionTrackInProggress() {
              if (e.additionTrackInProggress) {
                var t, a;
                null === (t = e.playlistTrackIds) ||
                  void 0 === t ||
                  t.unshift(e.additionTrackInProggress),
                  (e.suggestedTrackIds = (0, l.pj)(
                    null === (a = e.suggestedTrackIds) || void 0 === a
                      ? void 0
                      : a.filter((t) => t !== e.additionTrackInProggress),
                  )),
                  (e.additionTrackInProggress = null);
              }
            },
            resetAdditionTrackAnimation() {
              e.additionTrackInProggress = null;
            },
          })),
        N = l.V5.model("PlaylistPage", {
          uuid: l.V5.maybeNull(l.V5.string),
          meta: l.V5.maybeNull(r.Nn),
          items: l.V5.array(s.Wj),
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          loadingState: l.V5.enumeration(Object.values(d.Gui)),
          similarPlaylists: l.V5.array(r.d2),
          searchLoadingState: l.V5.enumeration(Object.values(d.Gui)),
          searchItems: h,
          searchText: l.V5.string,
          filters: s.Nj,
          activeFilter: l.V5.maybe(l.V5.string),
          shouldSendEventOnTabOpened: l.V5.boolean,
          initialItems: l.V5.array(s.Wj),
        })
          .views((e) => ({
            get isNotFound() {
              return (
                e.loadingState === d.Gui.REJECT &&
                e.errorStatusCode === n.CN.NOT_FOUND
              );
            },
            get isLoading() {
              return (
                e.loadingState === d.Gui.PENDING ||
                e.loadingState === d.Gui.IDLE
              );
            },
            get isSearchLoading() {
              return (
                e.searchLoadingState === d.Gui.PENDING ||
                e.searchLoadingState === d.Gui.IDLE
              );
            },
            get isSearchIdle() {
              return e.searchLoadingState === d.Gui.IDLE;
            },
            get isDisabled() {
              var t;
              return (
                e.loadingState === d.Gui.RESOLVE &&
                (0 === e.items.length ||
                  !(null === (t = e.meta) || void 0 === t
                    ? void 0
                    : t.isAvailable))
              );
            },
            get isRejected() {
              return e.loadingState === d.Gui.REJECT;
            },
            get hasSimilarPlaylists() {
              return (
                e.loadingState === d.Gui.IDLE ||
                e.loadingState === d.Gui.PENDING ||
                e.similarPlaylists.length > 0
              );
            },
            get isEmptyPlaylist() {
              return 0 === e.items.length && e.loadingState === d.Gui.RESOLVE;
            },
            get contextMeta() {
              var a, i, s, r, o, c, g, m, S, p;
              return {
                isAvailable:
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.isAvailable,
                id: e.meta.id,
                uid: null === (i = e.meta) || void 0 === i ? void 0 : i.uid,
                uuid: e.meta.uuid,
                kind: null === (s = e.meta) || void 0 === s ? void 0 : s.kind,
                title: null === (r = e.meta) || void 0 === r ? void 0 : r.title,
                coverUri:
                  null === (o = e.meta) || void 0 === o ? void 0 : o.coverUri,
                likesCount:
                  null === (c = e.meta) || void 0 === c ? void 0 : c.likesCount,
                averageColor:
                  null === (g = e.meta) || void 0 === g
                    ? void 0
                    : g.averageColor,
                owner: null === (m = e.meta) || void 0 === m ? void 0 : m.owner,
                description:
                  null === (S = e.meta) || void 0 === S
                    ? void 0
                    : S.description,
                modified:
                  null === (p = e.meta) || void 0 === p ? void 0 : p.modified,
              };
            },
            get isDragAndDropEnabled() {
              var E;
              if (!(0, l.fh)(e)) return !1;
              let { ugcUploadCenter: t } = (0, l.yj)(e);
              return !!(
                (null === (E = e.meta) || void 0 === E
                  ? void 0
                  : E.canUserChange) &&
                (e.items.length > 1 ||
                  t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
              );
            },
            get itemsKeys() {
              return e.items.map((e) => e.key);
            },
            get isFavouritePlaylist() {
              var y;
              return (
                (null === (y = e.meta) || void 0 === y ? void 0 : y.kind) ===
                u.eX.LIKE
              );
            },
            get isFiltersLoading() {
              return (
                e.filters.loadingState === d.Gui.IDLE ||
                e.filters.loadingState === d.Gui.PENDING
              );
            },
            get activeFilterIndex() {
              var v;
              let t =
                null === (v = e.filters.items) || void 0 === v
                  ? void 0
                  : v.findIndex((t) => t.id === e.activeFilter);
              return t && t > -1 ? t : 0;
            },
            get analyticsParamsActiveFilterIndex() {
              return this.activeFilterIndex + 1;
            },
            get enableVariousAutoFlow() {
              return !!e.activeFilter;
            },
          }))
          .actions((e) => {
            let t = {
              getTracksByRange: (0, l.ls)(function* (t) {
                var a, i;
                let { startIndex: n, endIndex: s } = t,
                  { tracksResource: r, modelActionsLogger: u } = (0, l.dU)(e);
                if (
                  !(null === (a = e.meta) || void 0 === a ? void 0 : a.uid) ||
                  !(null === (i = e.meta) || void 0 === i ? void 0 : i.kind)
                )
                  return null;
                (n = Math.max(0, n)), (s = Math.min(s, e.items.length));
                let c = E(e.items, { startIndex: n, endIndex: s });
                try {
                  let t = p(e.items, c);
                  if (!t.length) return null;
                  c.forEach((t) => {
                    let a = e.items[t];
                    a && (a.loadingState = d.Gui.PENDING);
                  });
                  let a = yield r.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  c.forEach((t, i) => {
                    let l = null == a ? void 0 : a[i];
                    if (e.items[t] && l) {
                      var n, s;
                      e.items[t] = {
                        id: l.id,
                        albumId:
                          (null === (s = l.albums) || void 0 === s
                            ? void 0
                            : null === (n = s[0]) || void 0 === n
                              ? void 0
                              : n.id) || null,
                        key: "".concat(l.id, "-").concat(t),
                        data: (0, o.Vt)(l),
                        loadingState: d.Gui.RESOLVE,
                      };
                    }
                  });
                } catch (t) {
                  u.error(t),
                    c.forEach((t) => {
                      let a = e.items[t];
                      a && (a.loadingState = d.Gui.REJECT);
                    });
                }
                return null;
              }),
              getSearchTracksMeta: (0, l.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: a } = (0, l.dU)(e),
                  i = [...(e.searchItems.playlistTrackIds || [])].concat(
                    e.searchItems.suggestedTrackIds || [],
                  );
                try {
                  let a = yield t.getTracksMeta({
                    trackIds: i,
                    removeDuplicates: !0,
                    withProgress: !0,
                  });
                  (e.searchItems.tracks = (0, l.pj)(
                    null == a ? void 0 : a.map((e) => (0, o.Vt)(e)),
                  )),
                    e.searchLoadingState !== d.Gui.IDLE &&
                      (e.searchLoadingState = d.Gui.RESOLVE);
                } catch (e) {
                  a.error(e);
                }
                return null;
              }),
              updateData: (0, l.ls)(function* (a) {
                var s;
                if ((null == a ? void 0 : a.error) === "not-found")
                  return (
                    (e.errorStatusCode = n.CN.NOT_FOUND),
                    (e.loadingState = d.Gui.REJECT),
                    null
                  );
                (e.similarPlaylists = (0, l.pj)(
                  null === (s = a.similarPlaylists) || void 0 === s
                    ? void 0
                    : s.map(r.VB),
                )),
                  (e.meta = (0, r.Q9)(a)),
                  (e.items = (0, l.pj)(
                    a.tracks.map((e, t) => ({
                      id: String(e.id),
                      albumId: e.albumId || null,
                      key: "".concat(e.id, "-").concat(t),
                      loadingState: d.Gui.IDLE,
                    })),
                  )),
                  (e.initialItems = (0, i.ZN)(e.items));
                let { sonataState: o } = (0, l.yj)(e);
                return (
                  o.setUnloadedEntitiesData(v(e.items)),
                  yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, l.ls)(function* (a) {
                let {
                    userId: i,
                    playlistKind: s,
                    resumeStream: r = !1,
                    trackMetaType: o,
                  } = a,
                  { usersResource: u, modelActionsLogger: c } = (0, l.dU)(e);
                if (e.loadingState !== d.Gui.PENDING)
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let a = yield u.getPlaylistWithTracksIds({
                      userId: i,
                      playlistKind: s,
                      resumeStream: r,
                      trackMetaType: o,
                    });
                    if ("string" != typeof a.playlistUuid) {
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                        (e.loadingState = d.Gui.REJECT);
                      return;
                    }
                    yield t.updateData(a), (e.loadingState = d.Gui.RESOLVE);
                  } catch (t) {
                    c.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      (e.loadingState = d.Gui.REJECT);
                  }
              }),
              getSearchTracks: (0, l.ls)(function* (a) {
                let { uid: i, kind: s } = a,
                  { searchPlaylistResource: r, modelActionsLogger: o } = (0,
                  l.dU)(e);
                if (
                  e.searchLoadingState !== d.Gui.PENDING &&
                  e.searchText.length
                )
                  try {
                    e.searchLoadingState = d.Gui.PENDING;
                    let {
                        playlistTrackIds: a = [],
                        suggestedTrackIds: n = [],
                      } = yield r.getTrackIds({
                        uid: i,
                        kind: s,
                        part: e.searchText,
                      }),
                      o = S(e.items, a);
                    (e.searchItems.playlistTrackIds = (0, l.pj)(o)),
                      (e.searchItems.suggestedTrackIds = (0, l.pj)(n)),
                      t.getSearchTracksMeta();
                  } catch (t) {
                    o.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.searchLoadingState !== d.Gui.IDLE &&
                        (e.searchLoadingState = d.Gui.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, l.ls)(function* (a) {
                let {
                    playlistUuid: i,
                    richTracks: s = !1,
                    resumeStream: r = !1,
                  } = a,
                  { playlistResource: o, modelActionsLogger: u } = (0, l.dU)(e);
                if (((e.uuid = i), e.loadingState !== d.Gui.PENDING))
                  try {
                    e.loadingState = d.Gui.PENDING;
                    let a = yield o.getPlaylist({
                      playlistUuid: i,
                      resumeStream: r,
                      richTracks: s,
                    });
                    yield t.updateData(a),
                      e.loadingState !== d.Gui.IDLE &&
                        (e.loadingState = d.Gui.RESOLVE);
                  } catch (t) {
                    u.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== d.Gui.IDLE &&
                        (e.loadingState = d.Gui.REJECT);
                  }
              }),
              getPlaylistFilters: (0, l.ls)(function* () {
                let { filtersResource: a, modelActionsLogger: s } = (0, l.dU)(
                    e,
                  ),
                  { sonataState: r } = (0, l.yj)(e);
                if (e.filters.loadingState === d.Gui.PENDING) return;
                let o = e.items.map((e) => e.id);
                try {
                  var u;
                  e.filters.loadingState = d.Gui.PENDING;
                  let n = yield a.getTracksFilters({ trackIds: o });
                  (e.filters.items = (0, l.pj)(m(n))),
                    t.setActiveFilter(r.playlistFilter);
                  let s =
                    null === (u = e.filters.items) || void 0 === u
                      ? void 0
                      : u.find((t) => t.id === e.activeFilter);
                  s &&
                    ((e.items = (0, i.ZN)(s.tracks)),
                    r.setUnloadedEntitiesData(v(e.items))),
                    (e.filters.loadingState = d.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    (e.filters.loadingState = d.Gui.REJECT);
                }
              }),
              updatePlaylistTrackByUuid: (0, l.ls)(function* (a) {
                let {
                    playlistUuid: i,
                    richTracks: s = !1,
                    resumeStream: r = !1,
                  } = a,
                  { playlistResource: o, modelActionsLogger: u } = (0, l.dU)(e);
                e.uuid = i;
                try {
                  let a = yield o.getPlaylist({
                      playlistUuid: i,
                      resumeStream: r,
                      richTracks: s,
                    }),
                    n = [];
                  if (
                    ((e.items = (0, l.pj)(
                      a.tracks.map((t, a) => {
                        var i, l;
                        let s = String(t.id),
                          r = t.albumId || null;
                        return s ===
                          (null === (i = e.items[a]) || void 0 === i
                            ? void 0
                            : i.id) &&
                          r ===
                            (null === (l = e.items[a]) || void 0 === l
                              ? void 0
                              : l.albumId)
                          ? e.items[a]
                          : (n.push(a),
                            {
                              id: String(t.id),
                              albumId: t.albumId || null,
                              key: "".concat(t.id, "-").concat(a),
                              loadingState: d.Gui.IDLE,
                            });
                      }),
                    )),
                    e.meta &&
                      ((e.meta.modified = a.modified),
                      (e.meta.revision = a.revision),
                      n.length))
                  ) {
                    let e = Math.min(...n),
                      a = Math.max(...n);
                    t.getTracksByRange({ startIndex: e, endIndex: a });
                  }
                  if (
                    (e.loadingState !== d.Gui.IDLE &&
                      (e.loadingState = d.Gui.RESOLVE),
                    (0, l.fh)(e))
                  ) {
                    let { sonataState: t } = (0, l.yj)(e);
                    t.setUnloadedEntitiesData(v(e.items));
                  }
                } catch (t) {
                  u.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== d.Gui.IDLE &&
                      (e.loadingState = d.Gui.REJECT);
                }
              }),
              moveTrack(t, a) {
                let n = (0, i.ZN)(e.items[t]);
                if (
                  !(t < 0) &&
                  !(a < 0) &&
                  !(t >= e.items.length) &&
                  !(a >= e.items.length) &&
                  n &&
                  (e.items.splice(t, 1), e.items.splice(a, 0, n), (0, l.fh)(e))
                ) {
                  let { sonataState: t } = (0, l.yj)(e);
                  t.setUnloadedEntitiesData(v(e.items));
                }
              },
              setSearchIdle() {
                e.searchLoadingState = d.Gui.IDLE;
              },
              setActiveFilter(t) {
                t !== s.W.ALL
                  ? (e.activeFilter = t)
                  : (e.activeFilter = void 0);
              },
              removeTracksFromItems(t, a) {
                if ((e.items.splice(t, a), (0, l.fh)(e))) {
                  let { sonataState: t } = (0, l.yj)(e);
                  t.setUnloadedEntitiesData(v(e.items));
                }
              },
              setSearchText(t) {
                e.searchText = t;
              },
              handleFilterClick(a) {
                let { sonataState: n } = (0, l.yj)(e);
                e.activeFilter || (e.initialItems = (0, i.ZN)(e.items)),
                  t.setActiveFilter(a.id),
                  e.activeFilter
                    ? (e.items = (0, i.ZN)(a.tracks))
                    : (e.items = (0, i.ZN)(e.initialItems)),
                  n.setUnloadedEntitiesData(v(e.items)),
                  t.setShouldSendEventOnTabOpened(!0);
              },
              setShouldSendEventOnTabOpened(t) {
                e.shouldSendEventOnTabOpened = t;
              },
              resetSearch() {
                (e.searchItems.playlistTrackIds = null),
                  (e.searchItems.suggestedTrackIds = null),
                  (e.searchItems.additionTrackInProggress = null),
                  (e.searchItems.tracks = null),
                  (e.searchLoadingState = d.Gui.IDLE);
              },
              reset() {
                let { sonataState: a } = (0, l.yj)(e);
                a.resetUnloadedEntitiesData(),
                  (e.uuid = null),
                  (e.meta = null),
                  (e.loadingState = d.Gui.IDLE),
                  (e.items = (0, l.pj)([])),
                  (e.initialItems = (0, l.pj)([])),
                  (e.similarPlaylists = (0, l.pj)([])),
                  (e.errorStatusCode = null),
                  (e.filters.items = (0, l.pj)([])),
                  (e.filters.loadingState = d.Gui.IDLE),
                  (e.activeFilter = void 0),
                  (e.shouldSendEventOnTabOpened = !0),
                  t.resetSearch();
              },
              refresh() {
                var a, i;
                (null === (a = e.meta) || void 0 === a ? void 0 : a.uuid) &&
                  t.getPlaylistByUuid({
                    playlistUuid:
                      null === (i = e.meta) || void 0 === i ? void 0 : i.uuid,
                    resumeStream: !1,
                  });
              },
              refreshTracks() {
                var a, i;
                (null === (a = e.meta) || void 0 === a ? void 0 : a.uuid) &&
                  t.updatePlaylistTrackByUuid({
                    playlistUuid:
                      null === (i = e.meta) || void 0 === i ? void 0 : i.uuid,
                    resumeStream: !1,
                  });
              },
            };
            return t;
          });
      a(63407);
      var b = a(47727);
    },
    23976: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return g.PostPage;
        },
        vU: function () {
          return c;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(54678),
        s = a(70071),
        r = a(73276),
        o = a(33589),
        u = a(10668),
        d = a(76873);
      let c = i.V5.model("PostPage", {
        errorStatusCode: i.V5.maybe(i.V5.number),
        loadingState: i.V5.enumeration(Object.values(d.Gui)),
        title: i.V5.maybeNull(i.V5.string),
        promotionType: i.V5.maybeNull(i.V5.enumeration(Object.values(n.qe))),
        artists: i.V5.maybe(i.V5.array(o.Go)),
        albums: i.V5.maybe(i.V5.array(s.ug)),
        playlists: i.V5.maybe(i.V5.array(r.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === d.Gui.IDLE || e.loadingState === d.Gui.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === l.CN.NOT_FOUND ||
              e.errorStatusCode === l.CN.BAD_REQUEST;
            return e.loadingState === d.Gui.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === d.Gui.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { promoId: a } = t,
              { feedResource: n, modelActionsLogger: r } = (0, i.dU)(e);
            if (e.loadingState !== d.Gui.PENDING)
              try {
                e.loadingState = d.Gui.PENDING;
                let t = yield n.getPromotionsById({ promoId: a });
                (e.title = t.title),
                  (e.promotionType = t.promotionType),
                  t.artists &&
                    t.artists.length > 0 &&
                    (e.artists = (0, i.pj)(t.artists.map(o.d))),
                  t.albums &&
                    t.albums.length > 0 &&
                    (e.albums = (0, i.pj)(t.albums.map(s.ym))),
                  t.playlists &&
                    t.playlists.length > 0 &&
                    (e.playlists = (0, i.pj)(
                      t.playlists.map((e) => {
                        let { playlist: t } = e;
                        return (0, u.PV)(t);
                      }),
                    )),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.RESOLVE);
              } catch (t) {
                r.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = d.Gui.IDLE),
              (e.title = null),
              (e.artists = (0, i.pj)([])),
              (e.albums = (0, i.pj)([]));
          },
        }));
      a(45833);
      var g = a(18211);
    },
    45833: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostNotFoundPage: function () {
          return s;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(23948);
      let s = (0, l.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    18211: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostPage: function () {
          return D;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(31490),
        u = a(41055),
        d = a(90679),
        c = a(2570),
        g = a(68106),
        m = a(60424),
        S = a(76873),
        p = a(3084),
        E = a(41949),
        y = a.n(E);
      let v = () =>
        (0, i.jsxs)("div", {
          className: y().root,
          children: [
            (0, i.jsx)(d.Shimmer, { radius: "l", className: y().top }),
            (0, i.jsx)(d.Shimmer, { radius: "l", className: y().bottom }),
          ],
        });
      var h = a(90978),
        N = a.n(h),
        b = a(70071),
        f = a(12903),
        C = a.n(f);
      let G = (0, n.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: C().root,
          children: (0, i.jsx)("div", {
            className: C().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                b.rf,
                { className: C().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var P = a(76685),
        L = a(13209),
        I = a.n(L);
      let _ = (0, n.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: I().root,
          children: (0, i.jsx)("div", {
            className: I().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                P.IT,
                { className: I().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var A = a(73276),
        T = a(39679),
        k = a.n(T);
      let x = (0, n.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: k().root,
            children: (0, i.jsx)("div", {
              className: k().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  A.ZL,
                  { className: k().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        D = (0, n.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, S.oR4)(),
            n = (0, S.k67)(),
            { contentScrollRef: E, setContentScrollRef: y } = (0, S.$Y6)();
          if (
            (t &&
              a.loadingState === S.Gui.IDLE &&
              (0, r.use)(a.getData({ promoId: t })),
            (0, r.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, s.notFound)(),
            (0, S.NOh)(a.loadingState === S.Gui.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(g.D, {});
          let h = (0, r.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(v, {});
            switch (a.promotionType) {
              case o.qe.ARTISTS:
                return (0, i.jsx)(_, { artists: a.artists });
              case o.qe.ALBUMS:
                return (0, i.jsx)(G, { albums: a.albums });
              case o.qe.PLAYLISTS:
                return (0, i.jsx)(x, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(S.Lh6, {
            pageId: S.Rhz.POST,
            children: (0, i.jsxs)(m.I7, {
              scrollElement: E,
              outerTitle: a.title || void 0,
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: n.canBack,
                  children: a.title
                    ? (0, i.jsx)(c.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: a.title,
                      })
                    : (0, i.jsx)(d.Shimmer, {
                        className: N().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, i.jsx)(u.t, {
                  containerClassName: (0, l.W)(
                    N().scrollContainer,
                    N().important,
                  ),
                  className: N().scrollableContainer,
                  ref: y,
                  children: (0, i.jsx)("div", {
                    className: N().container,
                    children: h,
                  }),
                }),
              ],
            }),
          });
        });
    },
    17777: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryPage: function () {
          return v;
        },
      });
      var i = a(9753),
        l = a(98780),
        n = a(9544),
        s = a(98639),
        r = a(80542),
        o = a(31014),
        u = a(23881),
        d = a(39513),
        c = a(28852),
        g = a(41055),
        m = a(2570),
        S = a(23194),
        p = a(76873),
        E = a(15739),
        y = a.n(E);
      let v = (0, n.Pi)(() => {
        var e;
        let t = (0, p.uK4)().get(p.U5t),
          { search: a, user: n, settings: E } = (0, p.oR4)(),
          { setContentScrollRef: v } = (0, p.$Y6)(),
          { formatMessage: h } = (0, r.Z)(),
          N = (0, p.k67)(),
          b = (0, s.useRef)(!1),
          f = (0, s.useRef)(null),
          C = (0, S.vy)(() => {
            b.current = !0;
          }),
          G = E.layout === p.t8m.Mobile,
          P = a.history.items.length;
        a.isHistoryReady &&
          (null === (e = n.account) || void 0 === e ? void 0 : e.uid) &&
          (0, s.use)(a.getHistory({ userId: n.account.uid, config: t })),
          (0, s.useEffect)(() => {
            f.current && N.canBack && f.current.focus();
          }, [N.canBack]),
          (0, s.useEffect)(
            () => () => {
              (null == b ? void 0 : b.current)
                ? (a.resetHistoryItems(), (b.current = !1))
                : a.resetHistoryStateRequest();
            },
            [a],
          );
        let L = (0, s.useMemo)(
            () =>
              (0, l.Z)(() => {
                null == N || N.back();
              }, 200),
            [N],
          ),
          I = (0, s.useMemo)(
            () =>
              P
                ? (0, i.jsx)("div", {
                    className: y().items,
                    children: a.history.items.map(S.Fu).filter((e) => !!e),
                  })
                : (0, i.jsx)(m.Caption, {
                    className: y().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(o.Z, { id: "search.history-empty" }),
                  }),
            [a.history.items, P],
          );
        return (0, i.jsx)("div", {
          className: y().root,
          ...(0, u.BA)(u.Br.search.SEARCH_HISTORY_PAGE),
          children: (0, i.jsxs)(g.t, {
            className: y().scrollContent,
            containerClassName: y().scrollContainer,
            ref: v,
            children: [
              (0, i.jsxs)("div", {
                className: y().header,
                children: [
                  (0, i.jsxs)("div", {
                    className: y().title,
                    children: [
                      N.canBack &&
                        (0, i.jsx)(d.z, {
                          ref: f,
                          "aria-label": h({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !N.canBack,
                          size: "s",
                          icon: (0, i.jsx)(c.Icon, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: L,
                        }),
                      (0, i.jsx)(m.Heading, {
                        variant: "h2",
                        size: G ? "m" : "xl",
                        children: (0, i.jsx)(o.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.z, {
                    "aria-label": h({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !P,
                    size: G ? "s" : "default",
                    onClick: C,
                    children: (0, i.jsx)(m.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, i.jsx)(o.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !a.isHistoryLoading && I,
            ],
          }),
        });
      });
    },
    55805: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchPage: function () {
          return G;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(98780),
        s = a(9544),
        r = a(74717),
        o = a(98639),
        u = a(80542),
        d = a(23881),
        c = a(31490),
        g = a(41055),
        m = a(54950),
        S = a(14102),
        p = a(21901),
        E = a(23194),
        y = a(76873),
        v = a(3084);
      let h = [
          c.ay.TOP,
          c.ay.TRACK,
          c.ay.ALBUM,
          c.ay.ARTIST,
          c.ay.PLAYLIST,
          c.ay.PODCAST,
          c.ay.BOOK,
        ],
        N = () => {
          let e = (0, y.RVp)(),
            { experiments: t } = (0, y.oR4)();
          return h.filter((a) => {
            if (
              (a !== c.ay.PODCAST || e) &&
              (a !== c.ay.BOOK ||
                (e && t.checkExperiment(y.peG.WebNextBookSearch, "on")))
            )
              return a;
          });
        };
      var b = a(77722),
        f = a.n(b);
      let C = "text",
        G = (0, s.Pi)(() => {
          let e = (0, S.useTabsState)(0),
            [t, a] = (0, o.useState)(c.ay.TOP),
            [s, b] = (0, o.useState)(!1),
            { formatMessage: G } = (0, u.Z)(),
            { search: P, experiments: L, location: I } = (0, y.oR4)(),
            _ = (0, y.uK4)(),
            { setContentScrollRef: A } = (0, y.$Y6)(),
            T = _.get(y.U5t),
            k = N();
          L.checkExperiment(y.peG.WebNextDisableSearch, "on") &&
            (0, r.redirect)("/");
          let x = (0, o.useMemo)(() => {
              var e;
              return decodeURIComponent(
                null !== (e = new URLSearchParams(I.searchParams).get(C)) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            }, [I.searchParams]),
            [D, R] = (0, o.useState)(x),
            V = D.length > 0;
          (0, o.useEffect)(
            () => () => {
              P.reset();
            },
            [P],
          );
          let O = (0, o.useCallback)(
            (e, t) => {
              P.resetResults(),
                0 !== e.length &&
                  P.getSearchResults({
                    text: decodeURIComponent(e),
                    filter: t,
                    config: T,
                    experiments: L,
                  });
            },
            [P, T, L],
          );
          P.isNeededToLoad &&
            x.length > 0 &&
            (0, o.use)(
              P.getSearchResults({
                text: decodeURIComponent(x),
                filter: t,
                config: T,
                experiments: L,
              }),
            );
          let j = (0, o.useCallback)(
              (e) => {
                let a = encodeURIComponent(e.trim());
                R(a), O(a, t), P.resetSearchCorrectedText(), b(!1);
                let i = new URL(window.location.href);
                i.searchParams.set(C, a),
                  window.history.replaceState(null, "", String(i));
              },
              [O, t, P],
            ),
            w = (0, o.useCallback)(() => {
              b(!0);
            }, [b]),
            U = (0, o.useMemo)(
              () =>
                (0, n.Z)((t) => {
                  var i;
                  if (!e.onTabChange || t === e.value) return;
                  e.onTabChange(t);
                  let l = null !== (i = h[t]) && void 0 !== i ? i : c.ay.TOP;
                  a(l), O(D, l);
                }, 300),
              [O, D, e],
            ),
            M = (0, o.useMemo)(
              () => (e) => {
                let {
                  id: t,
                  type: a,
                  blockPosition: i,
                  position: l,
                  feedbackType: n,
                } = e;
                P.sendFeedback({
                  blockType: a,
                  entityId: "".concat(a, ":").concat(t),
                  timestamp: new Date().toISOString(),
                  searchRequestId: P.searchRequestId,
                  query: D,
                  clickType: n,
                  blockPosition: i,
                  position: l,
                  page: 0,
                });
              },
              [P, D],
            ),
            B = (0, o.useMemo)(
              () =>
                P.searchCorrectedText
                  ? (0, i.jsx)(E.gK, {
                      searchCorrectedText: P.searchCorrectedText,
                      onCorrectText: w,
                    })
                  : null,
              [w, P.searchCorrectedText],
            ),
            F = (0, o.useMemo)(() => {
              if (!P.isLoading && 0 === P.results.length)
                return (0, i.jsx)(E.hF, { searchCorrectedText: B });
              switch (t) {
                case c.ay.TOP:
                  return (0, i.jsx)(E.Id, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                case c.ay.TRACK:
                  return (0, i.jsx)(E.XM, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                case c.ay.ALBUM:
                  return (0, i.jsx)(E.xz, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    filter: c.ay.ALBUM,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                case c.ay.PLAYLIST:
                  return (0, i.jsx)(E.xz, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    filter: c.ay.PLAYLIST,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                case c.ay.ARTIST:
                  return (0, i.jsx)(E.xz, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    filter: c.ay.ARTIST,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                case c.ay.PODCAST:
                  return (0, i.jsx)(E.R_, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                case c.ay.BOOK:
                  return (0, i.jsx)(E.xz, {
                    className: f().searchResults,
                    isLoading: P.isLoading,
                    results: P.results,
                    filter: c.ay.BOOK,
                    sendSearchFeedback: M,
                    searchCorrectedText: B,
                    ref: A,
                  });
                default:
                  return B;
              }
            }, [P.isLoading, P.results, t, M, B, A]),
            W = (0, o.useMemo)(
              () =>
                D.length > 0
                  ? F
                  : (0, i.jsxs)(g.t, {
                      className: f().scrollableContent,
                      containerClassName: f().main,
                      ref: A,
                      children: [
                        (0, i.jsx)(o.Suspense, {
                          children: (0, i.jsx)(y.Ja5, {
                            blockId: y.BEo.SEARCH_HISTORY,
                            blockType: y.BEo.SEARCH_HISTORY,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: y.BEo.SEARCH_HISTORY,
                            objectsCount: P.history.items.length,
                            children: (0, i.jsx)(E.y9, {}),
                          }),
                        }),
                        (0, i.jsx)(o.Suspense, {
                          children: (0, i.jsx)(p.JG, {}),
                        }),
                        (0, i.jsx)(v.$_, { className: f().footer }),
                      ],
                    }),
              [D.length, F, P.history.items.length, A],
            ),
            z = (0, o.useMemo)(
              () => ({
                top: G({ id: "search-filters.top" }),
                track: G({ id: "search-filters.track" }),
                album: G({ id: "search-filters.album" }),
                artist: G({ id: "search-filters.artist" }),
                playlist: G({ id: "search-filters.playlist" }),
                podcast: G({ id: "search-filters.podcast" }),
                book: G({ id: "search-filters.book" }),
              }),
              [G],
            );
          return (0, i.jsx)(y.Lh6, {
            pageId: y.Rhz.SEARCH,
            children: (0, i.jsxs)("div", {
              className: (0, l.W)(f().root, { [f().root_showFilters]: V }),
              ...(0, d.BA)(d.Br.search.SEARCH_PAGE),
              children: [
                (0, i.jsxs)("div", {
                  className: f().header,
                  children: [
                    (0, i.jsx)(m.M, {
                      className: f().input,
                      autoFocus: !0,
                      initialValue: D,
                      placeholder: G({ id: "search.input-placeholder" }),
                      onChange: j,
                      resetButtonAriaLabel: G({
                        id: "interface-actions.reset-search-input",
                      }),
                      correctedValue: s ? P.searchCorrectedText : null,
                    }),
                    V &&
                      (0, i.jsx)(v.no, {
                        className: f().tabCarousel,
                        ...e,
                        onTabChange: U,
                        children: k.map((t, a) =>
                          (0, i.jsx)(
                            v.OK,
                            {
                              className: (0, l.W)(f().filter, {
                                [f().filter_selected]: a === e.value,
                              }),
                              title: z[t],
                              value: a,
                            },
                            a,
                          ),
                        ),
                      }),
                  ],
                }),
                (0, i.jsx)("div", { className: f().content, children: W }),
              ],
            }),
          });
        });
    },
    20070: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return u.TagPage;
        },
        tS: function () {
          return o;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(10668),
        s = a(76873),
        r = a(68133);
      let o = i.V5.model("TagPage", {
        title: i.V5.maybe(i.V5.string),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
        tagLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsData: i.V5.array(
          i.V5.model({ uid: i.V5.number, kind: i.V5.number }),
        ),
        playlists: i.V5.array(i.V5.maybeNull(n.Cd)),
        pager: i.V5.maybeNull(r.Vn),
        alreadyRequestedPages: i.V5.map(i.V5.number),
        pendingPages: i.V5.map(i.V5.number),
        requests: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
              e.playlistsLoadingState === s.Gui.RESOLVE &&
              0 === e.playlists.length;
            return (
              ((e.tagLoadingState === s.Gui.REJECT ||
                e.playlistsLoadingState === s.Gui.REJECT) &&
                (e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST)) ||
              t
            );
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, i.ls)(function* (t) {
              let { page: a = 0, pageSize: r = 20 } = t,
                { playlistsResource: o, modelActionsLogger: u } = (0, i.dU)(e);
              if (
                !(
                  e.tagLoadingState !== s.Gui.RESOLVE ||
                  (e.playlistsLoadingState === s.Gui.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var d;
                  (e.playlistsLoadingState = s.Gui.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * r,
                    l = e.playlistsData.slice(t, t + r),
                    u = yield o.getPlaylists({
                      playlistIds: l.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                  let c = {
                    page: a,
                    perPage: r,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, i.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let g = u.playlists.map(n.PV);
                  (0, s.AG_)({
                    items: e.playlists,
                    mappedRawItems: g,
                    page: a,
                    pageSize: r,
                  }),
                    (e.pager = c),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.RESOLVE);
                } catch (t) {
                  u.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = s.Gui.IDLE),
                (e.playlistsLoadingState = s.Gui.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, i.ls)(function* (a) {
              let { id: n, page: r = 0, pageSize: o = 20 } = a,
                { tagResource: u, modelActionsLogger: d } = (0, i.dU)(e);
              if (e.tagLoadingState !== s.Gui.PENDING)
                try {
                  var c;
                  e.tagLoadingState = s.Gui.PENDING;
                  let a = yield u.getPlaylistIds({ id: n });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, i.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.RESOLVE),
                    yield t.getPlaylists({ page: r, pageSize: o });
                } catch (t) {
                  d.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.REJECT);
                }
            }),
          };
          return t;
        });
      a(29223);
      var u = a(42751);
    },
    29223: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagNotFoundPage: function () {
          return s;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(23948);
      let s = (0, l.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    42751: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        n = a(9544),
        s = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(60424),
        g = a(73276),
        m = a(76873),
        S = a(3084),
        p = a(91631),
        E = a.n(p);
      let y = (0, n.Pi)((e) => {
        var t, a, n;
        let { tagId: p } = e,
          { tag: y } = (0, m.oR4)(),
          { formatMessage: v } = (0, o.Z)(),
          { contentScrollRef: h, setContentScrollRef: N } = (0, m.$Y6)(),
          b = (0, m.k67)();
        p || (0, s.notFound)();
        let f = (0, r.useCallback)(
          (e) => {
            y.getPlaylists({ page: e, pageSize: 20 });
          },
          [y],
        );
        y.tagLoadingState === m.Gui.IDLE &&
          (0, r.use)(y.getTag({ id: p, page: 0, pageSize: 20 })),
          y.isNotFound && (0, s.notFound)(),
          (0, r.useEffect)(
            () => () => {
              y.reset();
            },
            [y],
          );
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return ((0, m.NOh)(
          y.tagLoadingState === m.Gui.RESOLVE &&
            y.playlistsLoadingState === m.Gui.RESOLVE,
        ),
        (y.tagLoadingState !== m.Gui.REJECT &&
          y.playlistsLoadingState !== m.Gui.REJECT) ||
          y.isNotFound)
          ? (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: h,
                outerTitle: y.title,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.title,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          l = v(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: v({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              g.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (n = y.requests) && void 0 !== n ? n : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: v(
                          { id: "mixes.albums-list" },
                          { genreName: y.title || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            })
          : (0, i.jsx)(d.D, {});
      });
    },
    66337: function (e, t, a) {
      "use strict";
      a.d(t, {
        $: function () {
          return u;
        },
      });
      var i,
        l,
        n = a(35188),
        s = a(3872),
        r = a(37205);
      ((i = l || (l = {})).WEB = "YandexMusicWebNext"),
        (i.DESKTOP = "YandexMusicDesktopApp");
      let o = (e, t) => "".concat(e, "/").concat(t),
        u = () => {
          {
            let e = (0, r.b)() || "1.0";
            return o("".concat(l.DESKTOP).concat((0, s.y)((0, n.X)())), e);
          }
        };
    },
    21901: function (e, t, a) {
      "use strict";
      a.d(t, {
        JG: function () {
          return d.Mixes;
        },
        RB: function () {
          return c.MixesGrid;
        },
        ZP: function () {
          return u;
        },
      });
      var i = a(42288),
        l = a(60991),
        n = a(31490),
        s = a(48606),
        r = a(76873);
      let o = (e) => ({
          items: (0, i.pj)(e.items.map((e) => (0, s.Fh)(e.data))),
        }),
        u = i.V5.model("Mixes", {
          loadingState: i.V5.enumeration(Object.values(r.Gui)),
          items: i.V5.array(s.zn),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, i.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: s } = (0, i.dU)(e);
              if (e.loadingState !== r.Gui.PENDING)
                try {
                  e.loadingState = r.Gui.PENDING;
                  let i = yield a.getBlock(
                    { uri: "/landing/block/mixes", fullList: t },
                    n.gQ.MIXES,
                  );
                  (e.items = o(i).items), (e.loadingState = r.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.loadingState !== r.Gui.IDLE &&
                      (e.loadingState = r.Gui.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === r.Gui.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === r.Gui.RESOLVE && 0 === e.items.length;
              return e.errorStatusCode === l.CN.NOT_FOUND || t;
            },
          }));
      var d = a(8564),
        c = a(54140);
    },
    8564: function (e, t, a) {
      "use strict";
      a.d(t, {
        Mixes: function () {
          return p;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(76873),
        r = a(80542),
        o = a(5993),
        u = a(48606),
        d = a(3084),
        c = a(66051),
        g = a.n(c);
      let m = (0, l.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: l } = e,
          { formatMessage: s } = (0, r.Z)(),
          c = (0, n.useMemo)(
            () =>
              t
                ? (0, d.Cl)({ isActive: a, withInfo: !1 })
                : l.map((e) =>
                    (0, i.jsx)(
                      u.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, l],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.ti, {
              className: g().carouselHeader,
              title: s({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, i.jsx)(o.l, {
              className: g().carouselBlock,
              itemClassName: g().mixItem,
              children: c,
            }),
          ],
        });
      });
      var S = a(54140);
      let p = (0, l.Pi)(() => {
        let { settings: e, search: t } = (0, s.oR4)(),
          a = e.layout === s.t8m.Mobile;
        return (t.mixes.loadingState === s.Gui.IDLE &&
          (0, n.use)(t.mixes.getMixes(!1)),
        a)
          ? (0, i.jsx)(m, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
            })
          : (0, i.jsx)(S.MixesGrid, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
              withTitle: !0,
            });
      });
    },
    54140: function (e, t, a) {
      "use strict";
      a.d(t, {
        MixesGrid: function () {
          return g;
        },
      });
      var i = a(9753),
        l = a(9544),
        n = a(98639),
        s = a(31014),
        r = a(2570),
        o = a(48606),
        u = a(3084),
        d = a(8104),
        c = a.n(d);
      let g = (0, l.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: l,
            mixes: d,
            shimmerCount: g = 5,
          } = e,
          m = (0, n.useMemo)(
            () =>
              t
                ? (0, i.jsx)(u.Wm, {
                    isActive: a,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: g,
                  })
                : d.map((e) =>
                    (0, i.jsx)(
                      o.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, d, g],
          );
        return (0, i.jsxs)("div", {
          children: [
            l &&
              (0, i.jsx)(r.Heading, {
                className: c().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                children: (0, i.jsx)(s.Z, { id: "entity-names.mixes" }),
              }),
            (0, i.jsx)("div", { className: c().mixesGrid, children: m }),
          ],
        });
      });
    },
    82070: function (e) {
      e.exports = {
        toastClassName: "NotificationsInitializer_toastClassName__ZVvrd",
        notificationContainer:
          "NotificationsInitializer_notificationContainer__oe1ot",
      };
    },
    78914: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    62914: function (e) {
      e.exports = {
        root: "ArtistCard_root__x67BK",
        controls: "ArtistCard_controls__jsqqI",
        cover: "ArtistCard_cover__29ShU",
        coverBlock: "ArtistCard_coverBlock__dBL4x",
        image: "ArtistCard_image__pONJx",
        titleLink: "ArtistCard_titleLink__G8Puz",
        playButton: "ArtistCard_playButton__XZoTr",
        likeButton: "ArtistCard_likeButton__LU9TL",
        menuButton: "ArtistCard_menuButton__EynXG",
        pinButton: "ArtistCard_pinButton__G_VOi",
        trailerButton: "ArtistCard_trailerButton__a2NHm",
        control: "ArtistCard_control___qv5j",
      };
    },
    78576: function (e) {
      e.exports = {
        root: "UgcUploadCenterNotification_root__K_U0z",
        title: "UgcUploadCenterNotification_title__s3yTL",
        link: "UgcUploadCenterNotification_link__NPz6r",
      };
    },
    10929: function (e) {
      e.exports = {
        root: "ChartPage_root__JwQua",
        container: "ChartPage_container__mdNLA",
        scrollContent: "ChartPage_scrollContent__Hz3LW",
        scrollContainer: "ChartPage_scrollContainer__VJzA3",
        important: "ChartPage_important__HCgQ4",
        content: "ChartPage_content__adrCP",
        footer: "ChartPage_footer__JyfRg",
        shimmerItem: "ChartPage_shimmerItem__n3Z_s",
      };
    },
    40489: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContent: "GenreAlbumsPage_scrollContent__sBMMq",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    6380: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContent: "GenreArtistsPage_scrollContent__fDonT",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    60015: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    15874: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContent: "GenrePlaylistsPage_scrollContent__rahSG",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    69836: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    29025: function (e) {
      e.exports = {
        root: "KidsPage_root__yycsJ",
        content: "KidsPage_content__08pPR",
        header: "KidsPage_header__2Gk2l",
        landing: "KidsPage_landing__3QZZj",
        landing_onlyWizard: "KidsPage_landing_onlyWizard__xKyDo",
        footer: "KidsPage_footer__p7SVD",
        error: "KidsPage_error__qa7Qo",
      };
    },
    51824: function (e) {
      e.exports = {
        root: "NonMusicAlbumsPage_root__jlDXa",
        container: "NonMusicAlbumsPage_container__MHzvN",
        scrollContent: "NonMusicAlbumsPage_scrollContent__rksIP",
        scrollContainer: "NonMusicAlbumsPage_scrollContainer__XNRsu",
        important: "NonMusicAlbumsPage_important__Rk8LT",
        footer: "NonMusicAlbumsPage_footer__LJCIL",
        item: "NonMusicAlbumsPage_item__YArCS",
        content: "NonMusicAlbumsPage_content__phVa7",
      };
    },
    65817: function (e) {
      e.exports = {
        root: "NonMusicCategoryPage_root__GYeXL",
        content: "NonMusicCategoryPage_content__LJFnm",
        carouselBlocks: "NonMusicCategoryPage_carouselBlocks___BPJ_",
        carouselBlock: "NonMusicCategoryPage_carouselBlock__t41do",
        carouselBlockHeader: "NonMusicCategoryPage_carouselBlockHeader__1uIfL",
        footer: "NonMusicCategoryPage_footer__56hvJ",
      };
    },
    42965: function (e) {
      e.exports = {
        root: "NonMusicCategoryPlaylistsPage_root__NvUH8",
        scrollContent: "NonMusicCategoryPlaylistsPage_scrollContent__mxDHz",
        scrollContainer: "NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe",
        important: "NonMusicCategoryPlaylistsPage_important__YBsHf",
        footer: "NonMusicCategoryPlaylistsPage_footer__TtkEO",
        item: "NonMusicCategoryPlaylistsPage_item__4YasT",
        content: "NonMusicCategoryPlaylistsPage_content__GZb1j",
      };
    },
    35857: function (e) {
      e.exports = {
        root: "NonMusicPage_root__IPKkH",
        content: "NonMusicPage_content__7_TYy",
        header: "NonMusicPage_header__dijgk",
        landing: "NonMusicPage_landing__kGKTh",
        landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
        footer: "NonMusicPage_footer__juz5v",
        error: "NonMusicPage_error__oW0V3",
      };
    },
    90978: function (e) {
      e.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        scrollContainer: "PostPage_scrollContainer__zrIrH",
        important: "PostPage_important__qUlED",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    12903: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    13209: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    39679: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    41949: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    15739: function (e) {
      e.exports = {
        root: "SearchHistoryPage_root__Wbvyf",
        title: "SearchHistoryPage_title__gnJuo",
        header: "SearchHistoryPage_header__YdTG5",
        scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
        scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
        content: "SearchHistoryPage_content__iPgVO",
        desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
        items: "SearchHistoryPage_items___okS8",
        emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
      };
    },
    77722: function (e) {
      e.exports = {
        header: "SearchPage_header__BOkdn",
        root: "SearchPage_root__i7sE0",
        root_showFilters: "SearchPage_root_showFilters__reB44",
        input: "SearchPage_input__TSbxK",
        content: "SearchPage_content__ycqK5",
        scrollableContent: "SearchPage_scrollableContent__gzoBu",
        main: "SearchPage_main__FV4Cr",
        tabCarousel: "SearchPage_tabCarousel__9cWOl",
        filter: "SearchPage_filter__5xzTL",
        filter_selected: "SearchPage_filter_selected__FOfyJ",
        compilations: "SearchPage_compilations__52N9u",
        footer: "SearchPage_footer__20bvg",
      };
    },
    91631: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    41932: function (e) {
      e.exports = {
        root: "BrowserUpdateNotification_root__IN495",
        important: "BrowserUpdateNotification_important__6k4Gb",
      };
    },
    66051: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    8104: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
  },
]);
