(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5913],
  {
    44755: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithAuth: function () {
          return p;
        },
      });
      var n = o(9753),
        a = o(9544),
        l = o(60836),
        i = o(74717),
        s = o(98639),
        r = o(31014),
        c = o(39513),
        u = o(2570),
        d = o(76873),
        _ = o(21844),
        m = o.n(_);
      let h = (0, a.Pi)(() => {
          let e = (0, i.useRouter)(),
            t = (0, d.uK4)().get(d.xit),
            o = (0, s.useCallback)(() => {
              t.authorizationUrl && e.push(t.authorizationUrl);
            }, [t.authorizationUrl, e]);
          return (0, n.jsxs)("div", {
            className: m().root,
            children: [
              (0, n.jsx)(u.Heading, {
                className: (0, l.W)(m().title, m().important),
                variant: "h3",
                size: "xs",
                children: (0, n.jsx)(r.Z, { id: "authorization.enter-title" }),
              }),
              (0, n.jsx)(u.Caption, {
                className: (0, l.W)(m().text, m().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: (0, n.jsx)(r.Z, { id: "authorization.enter-text" }),
              }),
              (0, n.jsx)(c.z, {
                onClick: o,
                className: m().button,
                role: "link",
                color: "primary",
                size: "l",
                radius: "xxxl",
                children: (0, n.jsx)(u.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, n.jsx)(r.Z, {
                    id: "authorization.enter-button",
                  }),
                }),
              }),
            ],
          });
        }),
        p = (0, a.Pi)((e) => {
          let { children: t } = e,
            { user: o } = (0, d.oR4)();
          return o.isAuthorized ? t : (0, n.jsx)(h, {});
        });
    },
    49041: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithBetaUser: function () {
          return g;
        },
      });
      var n = o(9753),
        a = o(9544),
        l = o(74717),
        i = o(60836),
        s = o(98639),
        r = o(31014),
        c = o(23881),
        u = o(39513),
        d = o(29901),
        _ = o(16636),
        m = o(2570),
        h = o(13779),
        p = o(29151),
        v = o(76873),
        x = o(45018),
        C = o.n(x);
      let f = (0, a.Pi)((e) => {
          let {
              withoutExperiment: t = !1,
              showLoginButton: a = !1,
              showUserProfile: x = !1,
              withOffer: f = !1,
            } = e,
            g = (0, l.useRouter)(),
            w = (0, v.uK4)(),
            { settings: A } = (0, v.oR4)(),
            { language: b } = (0, v.ZSk)(),
            k = w.get(v.xit),
            N = w.get(v.U5t),
            j = (0, v.yyu)(N.oldWebHost),
            E = (0, s.useMemo)(
              () =>
                A.layout === v.t8m.Mobile ? o(75266).Z.src : o(88103).Z.src,
              [A.layout],
            ),
            B = (0, s.useCallback)(() => {
              k.authorizationUrl && g.push(k.authorizationUrl);
            }, [k.authorizationUrl, g]),
            P = (0, s.useCallback)(() => {
              let e = "https://".concat(j, "/pay");
              window.open(e, "_blank", "noreferrer noopener");
            }, [j]);
          (0, v.NOh)(!0);
          let W = (0, s.useMemo)(
              () =>
                f
                  ? (0, n.jsx)(m.Heading, {
                      variant: "h1",
                      size: "xl",
                      weight: "bold",
                      className: (0, i.W)(C().title, C().text),
                      children: (0, n.jsx)(r.Z, {
                        id: "welcome-page.offer-header",
                      }),
                    })
                  : t
                    ? (0, n.jsx)(m.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: (0, i.W)(C().title, C().text),
                        children: (0, n.jsx)(r.Z, {
                          id: "welcome-page.beta-header",
                          values: { br: (0, n.jsx)("br", {}) },
                        }),
                      })
                    : (0, n.jsx)(m.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: (0, i.W)(C().title, C().text),
                        children: (0, n.jsx)(r.Z, {
                          id: "welcome-page.not-auth-header",
                          values: { br: (0, n.jsx)("br", {}) },
                        }),
                      }),
              [f, t],
            ),
            R = (0, s.useMemo)(
              () =>
                t
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(m.Caption, {
                          variant: "span",
                          type: "text",
                          size: "l",
                          className: C().text,
                          children: (0, n.jsx)(r.Z, {
                            id: "welcome-page.beta-text-short",
                          }),
                        }),
                        (0, n.jsx)(_.y, {
                          children: (0, n.jsx)(m.Heading, {
                            variant: "h2",
                            children: (0, n.jsx)(r.Z, {
                              id: "welcome-page.beta-text-short",
                            }),
                          }),
                        }),
                      ],
                    })
                  : f
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(m.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: C().offerText,
                            children: (0, n.jsx)(r.Z, {
                              id: "welcome-page.offer-text",
                            }),
                          }),
                          (0, n.jsx)(_.y, {
                            children: (0, n.jsx)(m.Heading, {
                              variant: "h2",
                              children: (0, n.jsx)(r.Z, {
                                id: "welcome-page.offer-text",
                              }),
                            }),
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(m.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: C().text,
                            children: (0, n.jsx)(r.Z, {
                              id: "welcome-page.not-auth-text",
                              values: { br: (0, n.jsx)("br", {}) },
                            }),
                          }),
                          (0, n.jsx)(_.y, {
                            children: (0, n.jsx)(m.Heading, {
                              variant: "h2",
                              children: (0, n.jsx)(r.Z, {
                                id: "welcome-page.not-auth-text",
                                values: { br: (0, n.jsx)("br", {}) },
                              }),
                            }),
                          }),
                        ],
                      }),
              [f, t],
            ),
            O = (0, s.useMemo)(
              () =>
                a
                  ? (0, n.jsx)(u.z, {
                      onClick: B,
                      className: C().loginButton,
                      role: "link",
                      color: "primary",
                      size: "m",
                      radius: "xxxl",
                      children: (0, n.jsx)(r.Z, {
                        id: "authorization.enter-button",
                      }),
                    })
                  : f
                    ? (0, n.jsx)(u.z, {
                        onClick: P,
                        className: (0, i.W)(
                          C().offerButton,
                          C().offerButton_important,
                        ),
                        role: "link",
                        color: "plus",
                        size: "l",
                        radius: "m",
                        withRipple: !1,
                        children: (0, n.jsx)(r.Z, {
                          id: "payment.offer-button",
                        }),
                      })
                    : void 0,
              [B, P, a, f],
            );
          return (
            (0, v.ZP4)(!0),
            (0, n.jsxs)("div", {
              className: (0, i.W)(C().root),
              ...(0, c.BA)(c.Br.welcome.WELCOME_PAGE),
              children: [
                (0, n.jsx)(h.TF, { withSecondaryColor: !0 }),
                (0, n.jsx)("div", {
                  className: C().logoContainer,
                  children: (0, n.jsx)(d.TR, {
                    alignIcon: "center",
                    lang: "ru" !== b ? d.o0.EN : d.o0.RU,
                    className: C().logo,
                  }),
                }),
                W,
                R,
                O,
                (0, n.jsx)("img", { className: C().image, src: E }),
                x &&
                  (0, n.jsx)(p.Iw, {
                    className: C().user,
                    withMeta: A.layout !== v.t8m.Mobile,
                    variant: A.layout === v.t8m.Mobile ? "mobile" : "desktop",
                    usernameClassName: (0, i.W)(C().username, C().important),
                  }),
              ],
            })
          );
        }),
        g = (0, a.Pi)((e) => {
          let { isDesktopOrProduction: t, children: o } = e,
            { user: a, experiments: i } = (0, v.oR4)(),
            { hasFreeUserAccess: s } = (0, v.NMB)(),
            r = (0, l.useSearchParams)().get("allow_unauthorized");
          return t || a.isAuthorized || !r
            ? a.isAuthorized
              ? i.checkExperiment(v.peG.WebNext, "on") && !a.isChild
                ? a.hasPlus || s
                  ? o
                  : (0, n.jsx)(f, { withOffer: !0, showUserProfile: !0 })
                : (0, n.jsx)(f, { withoutExperiment: !0, showUserProfile: !0 })
              : (0, n.jsx)(f, { showLoginButton: !0 })
            : o;
        });
    },
    62688: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithBlockFullscreen: function () {
          return h;
        },
      });
      var n = o(9753),
        a = o(9544),
        l = o(74717),
        i = o(98639),
        s = o(39513),
        r = o(2570),
        c = o(13779),
        u = o(76873),
        d = o(9915),
        _ = o.n(d);
      let m = (0, a.Pi)((e) => {
          var t;
          let { isAuthorizedUser: o = !1 } = e,
            a = (0, l.useRouter)(),
            { experiments: d, settings: m } = (0, u.oR4)(),
            h = (0, u.uK4)().get(u.xit),
            p = m.layout === u.t8m.Mobile,
            v = d.getExperiment(u.peG.WebNextBlockFullscreen),
            x =
              null == v
                ? void 0
                : null === (t = v.value) || void 0 === t
                  ? void 0
                  : t.metadata,
            C = (0, i.useCallback)(() => {
              h.authorizationUrl && a.push(h.authorizationUrl);
            }, [h.authorizationUrl, a]),
            f = (0, i.useCallback)(() => {
              var e, t;
              (null == x
                ? void 0
                : null === (e = x.redirectButton) || void 0 === e
                  ? void 0
                  : e.link) &&
                window.open(
                  null == x
                    ? void 0
                    : null === (t = x.redirectButton) || void 0 === t
                      ? void 0
                      : t.link,
                  "_blank",
                  "noreferrer noopener",
                );
            }, [x]),
            g = (0, i.useMemo)(() => {
              var e, t;
              return o
                ? (0, n.jsx)(s.z, {
                    onClick: f,
                    className: _().button,
                    role: "link",
                    color: "primary",
                    size: "l",
                    radius: "xxxl",
                    children:
                      null == x
                        ? void 0
                        : null === (t = x.redirectButton) || void 0 === t
                          ? void 0
                          : t.text,
                  })
                : (0, n.jsx)(s.z, {
                    onClick: C,
                    className: _().button,
                    role: "link",
                    color: "primary",
                    size: "l",
                    radius: "xxxl",
                    children:
                      null == x
                        ? void 0
                        : null === (e = x.authButton) || void 0 === e
                          ? void 0
                          : e.text,
                  });
            }, [o, C, f, x]);
          return (0, n.jsxs)("div", {
            className: _().root,
            children: [
              (0, n.jsx)(c.TF, { withSecondaryColor: !0 }),
              (0, n.jsxs)("div", {
                className: _().container,
                children: [
                  (0, n.jsxs)("div", {
                    className: _().content,
                    children: [
                      (0, n.jsx)(r.Heading, {
                        variant: "h1",
                        size: p ? "xl" : "xxl",
                        weight: "bold",
                        className: _().title,
                        children: null == x ? void 0 : x.mainText,
                      }),
                      g,
                    ],
                  }),
                  (0, n.jsx)("div", { className: _().image }),
                ],
              }),
            ],
          });
        }),
        h = (0, a.Pi)((e) => {
          let { children: t } = e,
            { user: o, experiments: a } = (0, u.oR4)();
          return a.checkExperiment(u.peG.WebNextBlockFullscreen, "on")
            ? o.isAuthorized
              ? (0, n.jsx)(m, { isAuthorizedUser: !0 })
              : (0, n.jsx)(m, {})
            : t;
        });
    },
    13779: function (e, t, o) {
      "use strict";
      o.d(t, {
        Pj: function () {
          return A.ReleaseNotesModal;
        },
        ZP: function () {
          return w;
        },
        TF: function () {
          return b.TitleBar;
        },
        l7: function () {
          return n;
        },
        Yl: function () {
          return l;
        },
        F5: function () {
          return i;
        },
        Pt: function () {
          return s;
        },
        vs: function () {
          return r.useApplicationDeeplinks;
        },
        Er: function () {
          return c.useApplicationUpdate;
        },
        Zw: function () {
          return u.useLaunch;
        },
        A4: function () {
          return d.usePlayerAction;
        },
        g3: function () {
          return _.useProbabilityBucket;
        },
        bO: function () {
          return m.useRefreshApplicationData;
        },
        Tk: function () {
          return h.useReleaseNotes;
        },
        sendDownloadTrack: function () {
          return sendDownloadTrack;
        },
      });
      let n = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
          });
      };
      var a = o(76873);
      let l = (e) => {
          var t;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(a.BOn.APPLICATION_READY, e);
        },
        sendDownloadTrack = (e) => {
          var t;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(a.BOn.DOWNLOAD_TRACK, {
              downloadURL: e.downloadURL,
              codec: e.codec,
              trackId: e.trackId,
              track: e.track,
            });
        },
        i = (e) => {
          let t = e === a.Q2A.Light ? "#FFFFFF" : "#000000";
          window.desktopEvents.send(a.BOn.APPLICATION_THEME, t);
        },
        s = (e) => {
          var t;
          let { isPlaying: o, canMoveBackward: n, canMoveForward: l } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(a.BOn.PLAYER_STATE, {
              isPlaying: o,
              canMoveBackward: n,
              canMoveForward: l,
              status: e.status,
              track: e.track,
              progress: e.progress,
              availableActions: e.availableActions,
              actionsStore: e.actionsStore,
            });
        };
      o(44928);
      var r = o(27327),
        c = o(46813),
        u = o(17256),
        d = o(43215),
        _ = o(77702),
        m = o(64422),
        h = o(15291),
        p = o(42288),
        v = o(68133),
        x = o(84053),
        C = o.n(x);
      let f = (e) => {
          let t = {},
            o = (0, a.bop)();
          return (
            o &&
              Object.keys(e)
                .filter((e) => {
                  let t = (0, a.K7K)(e);
                  return C()(t, o) >= 0;
                })
                .forEach((o) => {
                  let n = e[o];
                  n && (t[o] = n);
                }),
            t
          );
        },
        g = p.V5.model("TranslationsModel", { data: p.V5.frozen() }),
        w = p.V5.model("ReleaseNotes", {
          modal: v.KL,
          translations: p.V5.maybeNull(g),
        })
          .views((e) => ({
            get isReady() {
              var t;
              return !!(
                (null === (t = e.translations) || void 0 === t
                  ? void 0
                  : t.data) &&
                "object" == typeof e.translations.data &&
                Object.keys(e.translations.data).length > 0
              );
            },
          }))
          .actions((e) => ({
            setReleaseNotes: (t) => {
              if (!t) return;
              let o = f(t);
              e.translations = g.create({ data: o });
            },
          }));
      var A = o(22485),
        b = o(91021);
    },
    44928: function (e, t, o) {
      "use strict";
      o.d(t, {
        N$: function () {
          return a;
        },
        eZ: function () {
          return i;
        },
        tX: function () {
          return l;
        },
      });
      var n = o(76873);
      let a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BOn.WINDOW_MINIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BOn.WINDOW_MAXIMIZE);
        },
        i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BOn.WINDOW_CLOSE);
        };
    },
    27327: function (e, t, o) {
      "use strict";
      o.d(t, {
        useApplicationDeeplinks: function () {
          return s;
        },
      });
      var n = o(74717),
        a = o(98639),
        l = o(76873);
      let i = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/album\/(.*)\/track\/(.*)$/,
            (e) => {
              var t;
              let o = (0, l.zak)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, l.SZ_)("/album/".concat(o))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        s = () => {
          let e = (0, n.useRouter)(),
            t = (0, a.useCallback)(
              (t, o) => {
                for (let [t, n] of i)
                  if (t.test(o)) {
                    e.push(n(o));
                    return;
                  }
                let n = (0, l.SZ_)(o);
                n ? e.push(n) : e.push("/");
              },
              [e],
            );
          (0, a.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BOn.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BOn.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    46813: function (e, t, o) {
      "use strict";
      o.d(t, {
        useApplicationUpdate: function () {
          return h;
        },
      });
      var n = o(9753),
        a = o(98639),
        l = o(80542),
        i = o(76873),
        s = o(60836),
        r = o(39513),
        c = o(2570),
        u = o(3084),
        d = o(8544),
        _ = o.n(d);
      let m = (e) => {
          let { version: t, formatMessage: o, closeToast: l } = e,
            d = (0, a.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(i.BOn.INSTALL_UPDATE),
                null == l || l();
            }, [l]),
            m = (0, a.useMemo)(
              () =>
                (0, n.jsxs)("div", {
                  className: _().message,
                  children: [
                    (0, n.jsx)(c.Caption, {
                      className: _().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: o(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, n.jsx)(r.z, {
                      className: _().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: o({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [o, d, t],
            );
          return (0, n.jsx)(u.Yj, {
            className: (0, s.W)(_().root, _().important),
            message: m,
          });
        },
        modUpdateToast = (e) => {
          let { version: t, formatMessage: o, closeToast: l } = e,
            d = (0, a.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(i.BOn.APPLICATION_RESTART),
                null == l || l();
            }, [l]),
            m = (0, a.useMemo)(
              () =>
                (0, n.jsxs)("div", {
                  className: _().message,
                  children: [
                    (0, n.jsx)(c.Caption, {
                      className: _().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: o(
                        { id: "desktop.on-mod-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, n.jsx)(r.z, {
                      className: _().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: o({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [o, d, t],
            );
          return (0, n.jsx)(u.Yj, {
            className: (0, s.W)(_().root, _().important),
            message: m,
          });
        },
        h = () => {
          let { formatMessage: e } = (0, l.Z)(),
            { notify: t } = (0, i.d$W)(),
            o = (0, a.useRef)(""),
            s = (0, a.useCallback)(
              (a, l) => {
                o.current !== l &&
                  ((o.current = l),
                  t((0, n.jsx)(m, { formatMessage: e, version: l }), {
                    containerId: i.W$x.IMPORTANT,
                  }));
              },
              [e, o, t],
            ),
          modUpdateCallback = (0, a.useCallback)(
            (a, l, newVersion) => {
                t(
                  (0, n.jsx)(modUpdateToast, {
                    formatMessage: e,
                    version: `${l} -> ${newVersion}`,
                  }),
                  {
                    containerId: i.W$x.IMPORTANT,
                  },
                );
            },
            [e, o, t],
          );
          (0, a.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.UPDATE_AVAILABLE, s),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BOn.UPDATE_AVAILABLE, s);
              }
            );
          }, [s]);
          (0, a.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback);
              }
            );
          }, [modUpdateCallback]);
        };
    },
    17256: function (e, t, o) {
      "use strict";
      o.d(t, {
        useLaunch: function () {
          return l;
        },
      });
      var n = o(98639),
        a = o(76873);
      let l = () => {
        let e = (0, a.svc)(),
          t = (0, n.useCallback)(() => {
            let t = (0, a.bop)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    43215: function (e, t, o) {
      "use strict";
      o.d(t, {
        usePlayerAction: function () {
          return s;
        },
      });
      var n,
        a,
        l = o(98639),
        i = o(76873);
      ((n = a || (a = {})).PLAY = "PLAY"),
        (n.PAUSE = "PAUSE"),
        (n.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (n.MOVE_FORWARD = "MOVE_FORWARD");
      let s = (e) => {
        let t = (0, l.useCallback)(
          (t, o) => {
            switch (o) {
              case "PLAY":
              case "PAUSE":
              case "TOGGLE_PLAY":
                null == e || e.togglePause();
                break;
              case "MOVE_BACKWARD":
                null == e || e.moveBackward();
                break;
              case "MOVE_FORWARD":
                null == e || e.moveForward();
                break;
              // case "TOGGLE_REPEAT":
              //     null == e ||
              //     e.toggleRepeat();
              //     break;
              case "REPEAT_NONE":
                null == e || e.setRepeatMode("none");
                break;
              case "REPEAT_CONTEXT":
                null == e || e.setRepeatMode("context");
                break;
              case "REPEAT_ONE":
                null == e || e.setRepeatMode("one");
                break;
              case "TOGGLE_SHUFFLE":
                null == e || e.toggleShuffle();
                break;
            }
          },
          [e],
        );
        (0, l.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BOn.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BOn.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    77702: function (e, t, o) {
      "use strict";
      o.d(t, {
        useProbabilityBucket: function () {
          return l;
        },
      });
      var n = o(98639),
        a = o(76873);
      let l = () => {
        let e = (0, a.svc)(),
          t = (0, n.useCallback)(
            (t, o) => {
              o && e.count(o, "probabilityBucket");
            },
            [e],
          );
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.PROBABILITY_BUCKET, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.PROBABILITY_BUCKET, t);
            }
          );
        }, [t]);
      };
    },
    64422: function (e, t, o) {
      "use strict";
      o.d(t, {
        useRefreshApplicationData: function () {
          return i;
        },
      });
      var n = o(98639),
        a = o(31490),
        l = o(76873);
      let i = () => {
        let {
            library: e,
            collection: t,
            experiments: o,
            main: i,
            user: s,
          } = (0, l.oR4)(),
          r = (0, n.useCallback)(() => {
            o.getData(),
              e.getData(),
              i.landing.isLoaded &&
                i.landing.getSkeleton(
                  { id: a.jB.WEB_MAIN, showWizard: s.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: a.jB.WEB_COLLECTION,
                    showWizard: s.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, o, e, i.landing, s.settings.showWizard]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BOn.REFRESH_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BOn.REFRESH_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    15291: function (e, t, o) {
      "use strict";
      o.d(t, {
        useReleaseNotes: function () {
          return l;
        },
      });
      var n = o(98639),
        a = o(76873);
      let l = () => {
        let [e, t] = (0, n.useState)(!1),
          {
            releaseNotes: { setReleaseNotes: o, isReady: l, modal: i },
          } = (0, a.oR4)(),
          s = (0, n.useCallback)(
            (e, n, a) => {
              o(a), n && t(!0);
            },
            [o],
          );
        (0, n.useEffect)(() => {
          e && l && (i.open(), t(!1));
        }, [l, i, e]),
          (0, n.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BOn.LOAD_RELEASE_NOTES, s),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BOn.LOAD_RELEASE_NOTES, s);
              }
            );
          }, [s]);
      };
    },
    22485: function (e, t, o) {
      "use strict";
      o.d(t, {
        ReleaseNotesModal: function () {
          return x;
        },
      });
      var n = o(9753),
        a = o(60836),
        l = o(9544),
        i = o(98639),
        s = o(80542),
        r = o(61417),
        c = o(31014),
        u = o(89352),
        d = o(41055),
        _ = o(2570),
        m = o(76873),
        h = o(6582),
        p = o.n(h);
      let v = {
          ul: (e) =>
            (0, n.jsx)("ul", { className: p().description, children: e }),
          li: (e) => (0, n.jsx)("li", { className: p().item, children: e }),
          code: (e) => (0, n.jsx)("code", { className: p().code, children: e }),
          date: (e) => (0, n.jsx)("span", { className: p().date, children: e }),
          p: (e) => (0, n.jsx)("p", { className: p().paragraph, children: e }),
          br: (0, n.jsx)("br", {}),
        },
        x = (0, l.Pi)(() => {
          var e, t;
          let { releaseNotes: o } = (0, m.oR4)(),
            { formatMessage: l } = (0, s.Z)(),
            { language: h, defaultLanguage: x } = (0, m.ZSk)(),
            C = (0, m.J4i)(),
            f = (0, i.useMemo)(() => {
              var e, t;
              return (0, m.LaW)(
                null !==
                  (t =
                    null === (e = o.translations) || void 0 === e
                      ? void 0
                      : e.data) && void 0 !== t
                  ? t
                  : {},
              );
            }, [
              null === (e = o.translations) || void 0 === e ? void 0 : e.data,
            ]);
          return (0, n.jsx)(u.u, {
            title: l({ id: "desktop.release-notes-modal-title" }),
            open: o.modal.isOpened,
            onOpenChange: o.modal.onOpenChange,
            onClose: o.modal.close,
            size: "fitContent",
            placement: "center",
            labelClose: l({ id: "interface-actions.close" }),
            className: p().root,
            headerClassName: p().modalHeader,
            contentClassName: p().modalContent,
            children: (0, n.jsx)(r.Z, {
              onError: C,
              defaultLocale: x,
              locale: h,
              messages:
                null === (t = o.translations) || void 0 === t ? void 0 : t.data,
              children: (0, n.jsx)(d.t, {
                className: (0, a.W)(p().scrollableContent, p().important),
                containerClassName: (0, a.W)(p().notes, p().important),
                children: f.map((e) =>
                  (0, n.jsxs)(
                    "div",
                    {
                      className: p().note,
                      children: [
                        (0, n.jsx)(_.Heading, {
                          variant: "h4",
                          className: (0, a.W)(p().version, p().important),
                          children: (0, m.K7K)(e),
                        }),
                        (0, n.jsx)(c.Z, { id: e, values: v }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
          });
        });
    },
    91021: function (e, t, o) {
      "use strict";
      o.d(t, {
        TitleBar: function () {
          return m;
        },
      });
      var n = o(9753),
        a = o(60836),
        l = o(9544),
        i = o(98639),
        s = o(80542),
        r = o(76873),
        c = o(44928),
        u = o(84814),
        d = o.n(u);
      let _ = (e) => {
          let {
            children: t,
            className: o,
            onClick: l,
            ariaLabel: i,
            withSecondaryColor: s,
          } = e;
          return (0, n.jsx)("button", {
            type: "button",
            className: (0, a.W)(
              d().button,
              { [d().button_withSecondaryColor]: s },
              o,
            ),
            onClick: l,
            "aria-label": i,
            children: t,
          });
        },
        m = (0, l.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            o = (0, r.XfM)() === r.t4T.WINDOWS,
            { formatMessage: l } = (0, s.Z)(),
            u = (0, i.useCallback)(() => {
              (0, c.N$)();
            }, []),
            m = (0, i.useCallback)(() => {
              (0, c.tX)();
            }, []),
            h = (0, i.useCallback)(() => {
              (0, c.eZ)();
            }, []);
          return (0, n.jsx)("div", {
            className: d().root,
            onDoubleClick: m,
            children:
              o &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(_, {
                    onClick: u,
                    ariaLabel: l({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, a.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(_, {
                    onClick: m,
                    ariaLabel: l({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, a.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(_, {
                    className: d().closeButton,
                    onClick: h,
                    ariaLabel: l({ id: "windows-menu.close" }),
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, a.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
          });
        });
    },
    8544: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    6582: function (e) {
      e.exports = {
        root: "ReleaseNotesModal_root__RSw1p",
        modalHeader: "ReleaseNotesModal_modalHeader__gp9SA",
        modalContent: "ReleaseNotesModal_modalContent__g8OTu",
        scrollableContent: "ReleaseNotesModal_scrollableContent__zGdbH",
        important: "ReleaseNotesModal_important__u8yP4",
        notes: "ReleaseNotesModal_notes__bVAoa",
        date: "ReleaseNotesModal_date__s3_ux",
        description: "ReleaseNotesModal_description__B_yLI",
        paragraph: "ReleaseNotesModal_paragraph___laDJ",
        note: "ReleaseNotesModal_note__S9E6z",
        version: "ReleaseNotesModal_version__4Mcd5",
        item: "ReleaseNotesModal_item___CYml",
        code: "ReleaseNotesModal_code__Yv3QD",
      };
    },
    84814: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    9915: function (e) {
      e.exports = {
        root: "BlockPage_root__crGK_",
        container: "BlockPage_container__my_l0",
        content: "BlockPage_content__4nK4D",
        title: "BlockPage_title__sAejV",
        button: "BlockPage_button__KoFZX",
        image: "BlockPage_image__C02Db",
      };
    },
    45018: function (e) {
      e.exports = {
        root: "WelcomePage_root__JK3Pb",
        image: "WelcomePage_image__7_fpW",
        loginButton: "WelcomePage_loginButton__AJHcG",
        secondBackground: "WelcomePage_secondBackground__55zFI",
        offerButton: "WelcomePage_offerButton__MRs_g",
        offerButton_important: "WelcomePage_offerButton_important__0wf60",
        title: "WelcomePage_title__wII2C",
        text: "WelcomePage_text__A4aXp",
        offerText: "WelcomePage_offerText__ZvXKN",
        logoContainer: "WelcomePage_logoContainer__72W3y",
        logo: "WelcomePage_logo__oMU8g",
        user: "WelcomePage_user__WNc4W",
        username: "WelcomePage_username__yXGsn",
        important: "WelcomePage_important__MJxEk",
      };
    },
    21844: function (e) {
      e.exports = {
        root: "Login_root__VtFg_",
        title: "Login_title__dqQz1",
        important: "Login_important__Z8S9I",
        text: "Login_text__1uju5",
        button: "Login_button__ZYvZY",
      };
    },
    88103: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/desktop.1e0910e6.webp",
        height: 1800,
        width: 2880,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAUAAkA4JYwCdEf/gegCuVYA/vwD3r9S5U9JHqXE6Z/y/x+DQID4BQ1GukGyA4khK6cqL1J3lTe0AAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    75266: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/mobile.3fa5bdc0.webp",
        height: 1270,
        width: 750,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoFAAgAAkA4JQBOiP/wNvu9lgAA/v1xMJqxugMp/PP2rm+shlwzDVo+PKs3U60goeXdVhlYEvqdmg9mn8oAAA==",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
  },
]);
