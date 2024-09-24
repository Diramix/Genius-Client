(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8101],
  {
    78918: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pj: function () {
          return l.ReleaseNotesModal;
        },
        TF: function () {
          return i.TitleBar;
        },
        l7: function () {
          return d;
        },
        Yl: function () {
          return o;
        },
        F5: function () {
          return g;
        },
        Pt: function () {
          return f;
        },
        KZ: function () {
          return s;
        },
        vs: function () {
          return v.useApplicationDeeplinks;
        },
        Er: function () {
          return u.useApplicationUpdate;
        },
        Zw: function () {
          return m.useLaunch;
        },
        A4: function () {
          return p.usePlayerAction;
        },
        g3: function () {
          return h.useProbabilityBucket;
        },
        bO: function () {
          return c.useRefreshApplicationData;
        },
        Tk: function () {
          return a.useReleaseNotes;
        },
          sendDownloadTrack: function () {
              return sendDownloadTrack;
          },
      });
      var r = n(34152);
      let o = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(r.BOn.APPLICATION_READY);
      };
        let sendDownloadTrack = (e) => {
            var t;
            null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(r.BOn.DOWNLOAD_TRACK, {downloadURL: e.downloadURL, codec: e.codec, trackId: e.trackId, track: e.track });
        };
      n(44928);
      var i = n(91021),
        l = n(22485),
        u = n(46813),
        a = n(15291);
      let s = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(r.BOn.RELEASE_NOTES_READY);
      };
      var c = n(64422);
      let d = () => {
          document.addEventListener("auxclick", (e) => e.preventDefault()),
            document.addEventListener("click", (e) => {
              (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
            });
        },
        f = (e) => {
          var t;
          let { isPlaying: n, canMoveBackward: o, canMoveForward: i } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(r.BOn.PLAYER_STATE, {
              isPlaying: n,
              canMoveBackward: o,
              canMoveForward: i,
              status: e.status,
              track: e.track,
              progress: e.progress,
              availableActions: e.availableActions,
              actionsStore: e.actionsStore,
            });
        };
      var p = n(43215),
        v = n(27327),
        m = n(17256);
      let g = (e) => {
        let t = e === r.Q2A.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(r.BOn.APPLICATION_THEME, t);
      };
      var h = n(77702);
    },
    44928: function (e, t, n) {
      "use strict";
      n.d(t, {
        N$: function () {
          return o;
        },
        eZ: function () {
          return l;
        },
        tX: function () {
          return i;
        },
      });
      var r = n(34152);
      let o = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(r.BOn.WINDOW_MINIMIZE);
        },
        i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(r.BOn.WINDOW_MAXIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(r.BOn.WINDOW_CLOSE);
        };
    },
    27327: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationDeeplinks: function () {
          return u;
        },
      });
      var r = n(74717),
        o = n(98639),
        i = n(34152);
      let l = [
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
              let n = (0, i.zak)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, i.SZ_)("/album/".concat(n))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        u = () => {
          let e = (0, r.useRouter)(),
            t = (0, o.useCallback)(
              (t, n) => {
                for (let [t, r] of l)
                  if (t.test(n)) {
                    e.push(r(n));
                    return;
                  }
                let r = (0, i.SZ_)(n);
                r ? e.push(r) : e.push("/");
              },
              [e],
            );
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BOn.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    46813: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationUpdate: function () {
          return v;
        },
      });
      var r = n(9753),
        o = n(98639),
        i = n(80542),
        l = n(34152),
        u = n(60836),
        a = n(39513),
        s = n(2570),
        c = n(3084),
        d = n(8544),
        f = n.n(d);
      let p = (e) => {
          let { version: t, formatMessage: n, closeToast: i } = e,
            d = (0, o.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(l.BOn.INSTALL_UPDATE),
                null == i || i();
            }, [i]),
            p = (0, o.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: f().message,
                  children: [
                    (0, r.jsx)(s.Caption, {
                      className: f().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, r.jsx)(a.z, {
                      className: f().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, r.jsx)(s.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: n({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [n, d, t],
            );
          return (0, r.jsx)(c.Yj, {
            className: (0, u.W)(f().root, f().important),
            message: p,
          });
        },
          modUpdateToast = (e) => {
              let { version: t, formatMessage: n, closeToast: i } = e,
                  d = (0, o.useCallback)(() => {
                      var e;
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.send(l.BOn.APPLICATION_RESTART),
                      null == i || i();
                  }, [i]),
                  p = (0, o.useMemo)(
                      () =>
                          (0, r.jsxs)("div", {
                              className: f().message,
                              children: [
                                  (0, r.jsx)(s.Caption, {
                                      className: f().text,
                                      variant: "div",
                                      type: "controls",
                                      size: "m",
                                      children: n(
                                          { id: "desktop.on-mod-update-available" },
                                          { version: t },
                                      ),
                                  }),
                                  (0, r.jsx)(a.z, {
                                      className: f().button,
                                      onClick: d,
                                      variant: "default",
                                      color: "secondary",
                                      size: "xs",
                                      radius: "xxxl",
                                      children: (0, r.jsx)(s.Caption, {
                                          variant: "div",
                                          type: "controls",
                                          size: "m",
                                          children: n({ id: "desktop.update" }),
                                      }),
                                  }),
                              ],
                          }),
                      [n, d, t],
                  );
              return (0, r.jsx)(c.Yj, {
                  className: (0, u.W)(f().root, f().important),
                  message: p,
              });
          },
        v = () => {
          let { formatMessage: e } = (0, i.Z)(),
            { notify: t } = (0, l.d$W)(),
            n = (0, o.useRef)(""),
            u = (0, o.useCallback)(
              (o, i) => {
                n.current !== i &&
                  ((n.current = i),
                  t((0, r.jsx)(p, { formatMessage: e, version: i }), {
                    containerId: l.W$x.IMPORTANT,
                  }));
              },
              [e, n, t],
            ),
              modUpdateCallback = (0, o.useCallback)(
                  (o, i) => {

                          t((0, r.jsx)(modUpdateToast, { formatMessage: e, version: `${i} -> ${newVersion}` }), {
                              containerId: l.W$x.IMPORTANT,
                          });
                  },
                  [e, n, t],
              );
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BOn.UPDATE_AVAILABLE, u),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BOn.UPDATE_AVAILABLE, u);
              }
            );
          }, [u]);
            (0, o.useEffect)(() => {
                var e;
                return (
                    null === (e = window.desktopEvents) ||
                    void 0 === e ||
                    e.on(l.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback),
                        () => {
                            var e;
                            null === (e = window.desktopEvents) ||
                            void 0 === e ||
                            e.off(l.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback);
                        }
                );
            }, [modUpdateCallback]);
        };
    },
    17256: function (e, t, n) {
      "use strict";
      n.d(t, {
        useLaunch: function () {
          return i;
        },
      });
      var r = n(98639),
        o = n(34152);
      let i = () => {
        let e = (0, o.svc)(),
          t = (0, r.useCallback)(() => {
            let t = (0, o.bop)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, r.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(o.BOn.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(o.BOn.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    43215: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePlayerAction: function () {
          return u;
        },
      });
      var r,
        o,
        i = n(98639),
        l = n(34152),
        eventPS = n(78918);
      ((r = o || (o = {})).PLAY = "PLAY"),
        (r.PAUSE = "PAUSE"),
        (r.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (r.MOVE_FORWARD = "MOVE_FORWARD");
      let u = (e) => {
        let t = (0, i.useCallback)(
          (t, n) => {
            switch (n) {
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
              case "TOGGLE_REPEAT":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.toggleRepeat();
                break;
              case "REPEAT_NONE":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "none",
                  );
                break;
              case "REPEAT_CONTEXT":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "context",
                  );
                break;
              case "REPEAT_ONE":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "one",
                  );
                break;
              case "TOGGLE_SHUFFLE":
                null == e || e.toggleShuffle();
                break;
              case "TOGGLE_LIKE": {
                null == e ||
                  e.factory.entityFactory.likeStore.toggleTrackLike(
                    {
                      entityId:
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.state.queueState.currentEntity.value?.entity.entityData
                      .meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.state.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.state.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.state.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.state.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.state.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.state.queueState.repeat.value,
                    shuffle:
                      e.state.queueState.shuffle.value,
                    isLiked:
                      e.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
              case "TOGGLE_DISLIKE": {
                null == e ||
                e.factory.entityFactory.likeStore.toggleTrackDislike(
                    {
                      entityId:
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.state.queueState.currentEntity.value
                      ?.entity.entityData.meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.state.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.state.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.state.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.state.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.state.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.state.queueState.repeat.value,
                    shuffle:
                      e.state.queueState.shuffle.value,
                    isLiked:
                      e.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.state.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
            }
          },
          [e],
        );
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BOn.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BOn.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    77702: function (e, t, n) {
      "use strict";
      n.d(t, {
        useProbabilityBucket: function () {
          return i;
        },
      });
      var r = n(98639),
        o = n(34152);
      let i = () => {
        let e = (0, o.svc)(),
          t = (0, r.useCallback)(
            (t, n) => {
              n && e.count(n, "probabilityBucket");
            },
            [e],
          );
        (0, r.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(o.BOn.PROBABILITY_BUCKET, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(o.BOn.PROBABILITY_BUCKET, t);
            }
          );
        }, [t]);
      };
    },
    64422: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshApplicationData: function () {
          return l;
        },
      });
      var r = n(98639),
        o = n(40193),
        i = n(34152);
      let l = () => {
        let {
            library: e,
            collection: t,
            experiments: n,
            main: l,
            user: u,
          } = (0, i.oR4)(),
          a = (0, r.useCallback)(() => {
            n.getData(),
              e.getData(),
              l.landing.isLoaded &&
                l.landing.getSkeleton(
                  { id: o.jB.WEB_MAIN, showWizard: u.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: o.jB.WEB_COLLECTION,
                    showWizard: u.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, n, e, l.landing, u.settings.showWizard]);
        (0, r.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BOn.REFRESH_APPLICATION_DATA, a),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BOn.REFRESH_APPLICATION_DATA, a);
            }
          );
        }, [a]);
      };
    },
    15291: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReleaseNotes: function () {
          return i;
        },
      });
      var r = n(98639),
        o = n(34152);
      let i = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, o.oR4)();
        (0, r.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(o.BOn.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(o.BOn.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    22485: function (e, t, n) {
      "use strict";
      n.d(t, {
        ReleaseNotesModal: function () {
          return g;
        },
      });
      var r = n(9753),
        o = n(60836),
        i = n(9544),
        l = n(98639),
        u = n(80542),
        a = n(31014),
        s = n(89352),
        c = n(41055),
        d = n(2570),
        f = n(34152),
        p = n(6582),
        v = n.n(p);
      let m = {
          ul: (e) =>
            (0, r.jsx)("ul", { className: v().description, children: e }),
          li: (e) => (0, r.jsx)("li", { className: v().item, children: e }),
          code: (e) => (0, r.jsx)("code", { className: v().code, children: e }),
          date: (e) => (0, r.jsx)("span", { className: v().date, children: e }),
          p: (e) => (0, r.jsx)("p", { className: v().paragraph, children: e }),
          br: (0, r.jsx)("br", {}),
        },
        g = (0, i.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: n },
            } = (0, f.oR4)(),
            { formatMessage: i } = (0, u.Z)(),
            p = (0, l.useMemo)(() => (0, f.LaW)(t), [t]);
          return (0, r.jsx)(s.u, {
            title: i({ id: "desktop.release-notes-modal-title" }),
            open: n.isOpened,
            onOpenChange: n.onOpenChange,
            onClose: n.close,
            size: "fitContent",
            placement: "center",
            labelClose: i({ id: "interface-actions.close" }),
            className: v().root,
            headerClassName: v().modalHeader,
            contentClassName: v().modalContent,
            children: (0, r.jsx)(c.t, {
              className: (0, o.W)(v().scrollableContent, v().important),
              containerClassName: (0, o.W)(v().notes, v().important),
              children: p.map((e) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: v().note,
                    children: [
                      (0, r.jsx)(d.Heading, {
                        variant: "h4",
                        className: (0, o.W)(v().version, v().important),
                        children: (0, f.K7K)(e),
                      }),
                      (0, r.jsx)(a.Z, { id: e, values: m }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    91021: function (e, t, n) {
      "use strict";
      n.d(t, {
        TitleBar: function () {
          return p;
        },
      });
      var r = n(9753),
        o = n(60836),
        i = n(9544),
        l = n(98639),
        u = n(80542),
        a = n(34152),
        s = n(44928),
        c = n(84814),
        d = n.n(c);
      let f = (e) => {
          let {
            children: t,
            className: n,
            onClick: i,
            ariaLabel: l,
            withSecondaryColor: u,
          } = e;
          return (0, r.jsx)("button", {
            type: "button",
            className: (0, o.W)(
              d().button,
              { [d().button_withSecondaryColor]: u },
              n,
            ),
            onClick: i,
            "aria-label": l,
            children: t,
          });
        },
        p = (0, i.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            n = (0, a.XfM)() === a.t4T.WINDOWS,
            { formatMessage: i } = (0, u.Z)(),
            c = (0, l.useCallback)(() => {
              (0, s.N$)();
            }, []),
            p = (0, l.useCallback)(() => {
              (0, s.tX)();
            }, []),
            v = (0, l.useCallback)(() => {
              (0, s.eZ)();
            }, []);
          return (0, r.jsx)("div", {
            className: d().root,
            onDoubleClick: p,
            children:
              n &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(f, {
                    onClick: c,
                    ariaLabel: i({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, r.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, r.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, r.jsx)(f, {
                    onClick: p,
                    ariaLabel: i({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, r.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, r.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, r.jsx)(f, {
                    className: d().closeButton,
                    onClick: v,
                    ariaLabel: i({ id: "windows-menu.close" }),
                    children: (0, r.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, o.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, r.jsx)("path", {
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
    88909: function (e, t, n) {
      "use strict";
      n.d(t, {
        ap: function () {
          return ee;
        },
        Ux: function () {
          return g;
        },
      });
      var r,
        o,
        i,
        l,
        u = n(34152);
      let a = (e) =>
        !!e &&
        e.some((e) => {
          let [t] = (null == e ? void 0 : e.split(":")) || [];
          return e === u.sHr || (t && u.kF5.includes(t));
        });
      var s = n(42288);
      let c = (e) => {
          let { type: t, tag: n } = e.id;
          return {
            title: e.name,
            seed: "".concat(t, ":").concat(n),
            specialContext: e.specialContext,
            specialContextImage: e.specialContextImage,
          };
        },
        d = (e) => ({
          value: e.value,
          title: e.name,
          seed: e.serializedSeed,
          imageUrl: e.imageUrl,
        }),
        f = (e, t) => {
          let n = [];
          return (
            t.possibleValues.forEach((e) => {
              e.unspecified || n.push(d(e));
            }),
            { type: e, title: t.name, values: (0, s.pj)(n) }
          );
        };
      ((r = l || (l = {})).DIVERSITY = "diversity"),
        (r.MOOD_ENERGY = "moodEnergy"),
        (r.LANGUAGE = "language");
      let p = s.V5.model("ContextItem", {
          title: s.V5.string,
          seed: s.V5.string,
          specialContext: s.V5.boolean,
          specialContextImage: s.V5.optional(s.V5.string, ""),
        }),
        v = s.V5.model("RestrictonValue", {
          value: s.V5.string,
          title: s.V5.string,
          seed: s.V5.string,
          imageUrl: s.V5.maybe(s.V5.string),
        }),
        m = s.V5.model("Restricton", {
          type: s.V5.enumeration(Object.values(l)),
          title: s.V5.string,
          values: s.V5.array(v),
        }),
        g = s.V5.model("VibeSettings", {
          loadingState: s.V5.enumeration(Object.values(u.Gui)),
          contextItems: s.V5.array(p),
          diversity: s.V5.maybeNull(m),
          moodEnergy: s.V5.maybeNull(m),
          language: s.V5.maybeNull(m),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === u.Gui.IDLE;
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* (t) {
              let { rotorResource: n, modelActionsLogger: r } = (0, s.dU)(e);
              if (e.loadingState !== u.Gui.PENDING)
                try {
                  var o, i, a, d;
                  e.loadingState = u.Gui.PENDING;
                  let r = yield n.waveSettings(t);
                  (null == r
                    ? void 0
                    : null === (o = r.settingRestrictions) || void 0 === o
                      ? void 0
                      : o.diversity) &&
                    (e.diversity = f(
                      l.DIVERSITY,
                      r.settingRestrictions.diversity,
                    )),
                    (null == r
                      ? void 0
                      : null === (i = r.settingRestrictions) || void 0 === i
                        ? void 0
                        : i.moodEnergy) &&
                      (e.moodEnergy = f(
                        l.MOOD_ENERGY,
                        r.settingRestrictions.moodEnergy,
                      )),
                    (null == r
                      ? void 0
                      : null === (a = r.settingRestrictions) || void 0 === a
                        ? void 0
                        : a.language) &&
                      (e.language = f(
                        l.LANGUAGE,
                        r.settingRestrictions.language,
                      ));
                  let p =
                    Array.isArray(null == r ? void 0 : r.blocks) &&
                    (null == r
                      ? void 0
                      : null === (d = r.blocks) || void 0 === d
                        ? void 0
                        : d.find(
                            (e) => (null == e ? void 0 : e.type) === "contexts",
                          ));
                  p &&
                    Array.isArray(p.items) &&
                    (e.contextItems = (0, s.pj)(p.items.map(c))),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                (e.contextItems = (0, s.pj)([])),
                (e.diversity = null),
                (e.moodEnergy = null),
                (e.language = null);
            },
          }));
      var h = n(9753),
        b = n(9544),
        y = n(98639),
        x = n.t(y, 2),
        E = n(80542),
        w = n(31014),
        _ = n(23881),
        C = n(98342),
        R = n(39513),
        S = n(28852),
        T = n(773),
        O = {
          6011: (e, t, n) => {
            let r;
            n.r(t),
              n.d(t, {
                Composite: () => tR,
                CompositeItem: () => tS,
                FloatingArrow: () => tI,
                FloatingDelayGroup: () => tZ,
                FloatingFocusManager: () => na,
                FloatingList: () => tb,
                FloatingNode: () => tV,
                FloatingOverlay: () => nc,
                FloatingPortal: () => ni,
                FloatingTree: () => tF,
                arrow: () => eM,
                autoPlacement: () => ea,
                autoUpdate: () => eI,
                computePosition: () => eP,
                detectOverflow: () => el,
                flip: () => es,
                getOverflowAncestors: () => E,
                hide: () => ef,
                inline: () => ev,
                inner: () => nB,
                limitShift: () => eb,
                offset: () => eg,
                platform: () => eL,
                safePolygon: () => nV,
                shift: () => eh,
                size: () => ey,
                useClick: () => nf,
                useClientPoint: () => nv,
                useDelayGroup: () => tX,
                useDelayGroupContext: () => tY,
                useDismiss: () => nb,
                useFloating: () => ny,
                useFloatingNodeId: () => tD,
                useFloatingParentNodeId: () => tB,
                useFloatingPortalNode: () => no,
                useFloatingTree: () => tj,
                useFocus: () => nx,
                useHover: () => tH,
                useId: () => tL,
                useInnerOffset: () => nj,
                useInteractions: () => nw,
                useListItem: () => ty,
                useListNavigation: () => nO,
                useMergeRefs: () => te,
                useRole: () => nk,
                useTransitionStatus: () => nI,
                useTransitionStyles: () => nP,
                useTypeahead: () => nA,
              });
            var o,
              i,
              l = n(810);
            function u(e) {
              return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
            }
            function a(e) {
              var t;
              return (
                (null == e
                  ? void 0
                  : null == (t = e.ownerDocument)
                    ? void 0
                    : t.defaultView) || window
              );
            }
            function s(e) {
              var t;
              return null ==
                (t = (c(e) ? e.ownerDocument : e.document) || window.document)
                ? void 0
                : t.documentElement;
            }
            function c(e) {
              return e instanceof Node || e instanceof a(e).Node;
            }
            function d(e) {
              return e instanceof Element || e instanceof a(e).Element;
            }
            function f(e) {
              return e instanceof HTMLElement || e instanceof a(e).HTMLElement;
            }
            function p(e) {
              return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
              );
            }
            function v(e) {
              let {
                overflow: t,
                overflowX: n,
                overflowY: r,
                display: o,
              } = b(e);
              return (
                /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
                !["inline", "contents"].includes(o)
              );
            }
            function m(e) {
              let t = g(),
                n = b(e);
              return (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                (!!n.containerType && "normal" !== n.containerType) ||
                (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
                (!t && !!n.filter && "none" !== n.filter) ||
                ["transform", "perspective", "filter"].some((e) =>
                  (n.willChange || "").includes(e),
                ) ||
                ["paint", "layout", "strict", "content"].some((e) =>
                  (n.contain || "").includes(e),
                )
              );
            }
            function g() {
              return (
                "undefined" != typeof CSS &&
                !!CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")
              );
            }
            function h(e) {
              return ["html", "body", "#document"].includes(u(e));
            }
            function b(e) {
              return a(e).getComputedStyle(e);
            }
            function y(e) {
              return d(e)
                ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function x(e) {
              if ("html" === u(e)) return e;
              let t =
                e.assignedSlot || e.parentNode || (p(e) && e.host) || s(e);
              return p(t) ? t.host : t;
            }
            function E(e, t, n) {
              var r;
              void 0 === t && (t = []), void 0 === n && (n = !0);
              let o = (function e(t) {
                  let n = x(t);
                  return h(n)
                    ? t.ownerDocument
                      ? t.ownerDocument.body
                      : t.body
                    : f(n) && v(n)
                      ? n
                      : e(n);
                })(e),
                i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                l = a(o);
              return i
                ? t.concat(
                    l,
                    l.visualViewport || [],
                    v(o) ? o : [],
                    l.frameElement && n ? E(l.frameElement) : [],
                  )
                : t.concat(o, E(o, [], n));
            }
            function w(e) {
              let t = e.activeElement;
              for (
                ;
                (null == (n = t)
                  ? void 0
                  : null == (r = n.shadowRoot)
                    ? void 0
                    : r.activeElement) != null;

              ) {
                var n, r;
                t = t.shadowRoot.activeElement;
              }
              return t;
            }
            function _(e, t) {
              if (!e || !t) return !1;
              let n = t.getRootNode && t.getRootNode();
              if (e.contains(t)) return !0;
              if (n && p(n)) {
                let n = t;
                for (; n; ) {
                  if (e === n) return !0;
                  n = n.parentNode || n.host;
                }
              }
              return !1;
            }
            function C() {
              let e = navigator.userAgentData;
              return null != e && e.platform ? e.platform : navigator.platform;
            }
            function R() {
              let e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: n } = e;
                      return t + "/" + n;
                    })
                    .join(" ")
                : navigator.userAgent;
            }
            function S(e) {
              return (
                (0 === e.mozInputSource && !!e.isTrusted) ||
                (N() && e.pointerType
                  ? "click" === e.type && 1 === e.buttons
                  : 0 === e.detail && !e.pointerType)
              );
            }
            function O(e) {
              return (
                (!N() && 0 === e.width && 0 === e.height) ||
                (1 === e.width &&
                  1 === e.height &&
                  0 === e.pressure &&
                  0 === e.detail &&
                  "mouse" === e.pointerType) ||
                (e.width < 1 &&
                  e.height < 1 &&
                  0 === e.pressure &&
                  0 === e.detail)
              );
            }
            function k() {
              return /apple/i.test(navigator.vendor);
            }
            function N() {
              let e = /android/i;
              return e.test(C()) || e.test(R());
            }
            function L() {
              return (
                C().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
              );
            }
            function I(e, t) {
              let n = ["mouse", "pen"];
              return t || n.push("", void 0), n.includes(e);
            }
            function P(e) {
              return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function A(e, t) {
              return (
                null != t &&
                ("composedPath" in e
                  ? e.composedPath().includes(t)
                  : null != e.target && t.contains(e.target))
              );
            }
            function M(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target;
            }
            function B(e) {
              return (
                f(e) &&
                e.matches(
                  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
                )
              );
            }
            function j(e) {
              e.preventDefault(), e.stopPropagation();
            }
            let D = ["top", "right", "bottom", "left"],
              V = D.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
              F = Math.min,
              G = Math.max,
              U = Math.round,
              W = Math.floor,
              z = (e) => ({ x: e, y: e }),
              H = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
              },
              K = { start: "end", end: "start" };
            function Y(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function Z(e) {
              return e.split("-")[0];
            }
            function X(e) {
              return e.split("-")[1];
            }
            function q(e) {
              return "x" === e ? "y" : "x";
            }
            function $(e) {
              return "y" === e ? "height" : "width";
            }
            function J(e) {
              return ["top", "bottom"].includes(Z(e)) ? "y" : "x";
            }
            function Q(e, t, n) {
              void 0 === n && (n = !1);
              let r = X(e),
                o = q(J(e)),
                i = $(o),
                l =
                  "x" === o
                    ? r === (n ? "end" : "start")
                      ? "right"
                      : "left"
                    : "start" === r
                      ? "bottom"
                      : "top";
              return t.reference[i] > t.floating[i] && (l = et(l)), [l, et(l)];
            }
            function ee(e) {
              return e.replace(/start|end/g, (e) => K[e]);
            }
            function et(e) {
              return e.replace(/left|right|bottom|top/g, (e) => H[e]);
            }
            function en(e) {
              return "number" != typeof e
                ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
                : { top: e, right: e, bottom: e, left: e };
            }
            function er(e) {
              return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height,
              };
            }
            function eo(e, t, n) {
              let r,
                { reference: o, floating: i } = e,
                l = J(t),
                u = q(J(t)),
                a = $(u),
                s = Z(t),
                c = "y" === l,
                d = o.x + o.width / 2 - i.width / 2,
                f = o.y + o.height / 2 - i.height / 2,
                p = o[a] / 2 - i[a] / 2;
              switch (s) {
                case "top":
                  r = { x: d, y: o.y - i.height };
                  break;
                case "bottom":
                  r = { x: d, y: o.y + o.height };
                  break;
                case "right":
                  r = { x: o.x + o.width, y: f };
                  break;
                case "left":
                  r = { x: o.x - i.width, y: f };
                  break;
                default:
                  r = { x: o.x, y: o.y };
              }
              switch (X(t)) {
                case "start":
                  r[u] -= p * (n && c ? -1 : 1);
                  break;
                case "end":
                  r[u] += p * (n && c ? -1 : 1);
              }
              return r;
            }
            let ei = async (e, t, n) => {
              let {
                  placement: r = "bottom",
                  strategy: o = "absolute",
                  middleware: i = [],
                  platform: l,
                } = n,
                u = i.filter(Boolean),
                a = await (null == l.isRTL ? void 0 : l.isRTL(t)),
                s = await l.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: o,
                }),
                { x: c, y: d } = eo(s, r, a),
                f = r,
                p = {},
                v = 0;
              for (let n = 0; n < u.length; n++) {
                let { name: i, fn: m } = u[n],
                  {
                    x: g,
                    y: h,
                    data: b,
                    reset: y,
                  } = await m({
                    x: c,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: s,
                    platform: l,
                    elements: { reference: e, floating: t },
                  });
                if (
                  ((c = null != g ? g : c),
                  (d = null != h ? h : d),
                  (p = { ...p, [i]: { ...p[i], ...b } }),
                  y && v <= 50)
                ) {
                  v++,
                    "object" == typeof y &&
                      (y.placement && (f = y.placement),
                      y.rects &&
                        (s =
                          !0 === y.rects
                            ? await l.getElementRects({
                                reference: e,
                                floating: t,
                                strategy: o,
                              })
                            : y.rects),
                      ({ x: c, y: d } = eo(s, f, a))),
                    (n = -1);
                  continue;
                }
              }
              return {
                x: c,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p,
              };
            };
            async function el(e, t) {
              var n;
              void 0 === t && (t = {});
              let {
                  x: r,
                  y: o,
                  platform: i,
                  rects: l,
                  elements: u,
                  strategy: a,
                } = e,
                {
                  boundary: s = "clippingAncestors",
                  rootBoundary: c = "viewport",
                  elementContext: d = "floating",
                  altBoundary: f = !1,
                  padding: p = 0,
                } = Y(t, e),
                v = en(p),
                m = u[f ? ("floating" === d ? "reference" : "floating") : d],
                g = er(
                  await i.getClippingRect({
                    element:
                      null ==
                        (n = await (null == i.isElement
                          ? void 0
                          : i.isElement(m))) || n
                        ? m
                        : m.contextElement ||
                          (await (null == i.getDocumentElement
                            ? void 0
                            : i.getDocumentElement(u.floating))),
                    boundary: s,
                    rootBoundary: c,
                    strategy: a,
                  }),
                ),
                h =
                  "floating" === d
                    ? { ...l.floating, x: r, y: o }
                    : l.reference,
                b = await (null == i.getOffsetParent
                  ? void 0
                  : i.getOffsetParent(u.floating)),
                y = ((await (null == i.isElement ? void 0 : i.isElement(b))) &&
                  (await (null == i.getScale ? void 0 : i.getScale(b)))) || {
                  x: 1,
                  y: 1,
                },
                x = er(
                  i.convertOffsetParentRelativeRectToViewportRelativeRect
                    ? await i.convertOffsetParentRelativeRectToViewportRelativeRect(
                        { rect: h, offsetParent: b, strategy: a },
                      )
                    : h,
                );
              return {
                top: (g.top - x.top + v.top) / y.y,
                bottom: (x.bottom - g.bottom + v.bottom) / y.y,
                left: (g.left - x.left + v.left) / y.x,
                right: (x.right - g.right + v.right) / y.x,
              };
            }
            let eu = (e) => ({
                name: "arrow",
                options: e,
                async fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      platform: l,
                      elements: u,
                      middlewareData: a,
                    } = t,
                    { element: s, padding: c = 0 } = Y(e, t) || {};
                  if (null == s) return {};
                  let d = en(c),
                    f = { x: n, y: r },
                    p = q(J(o)),
                    v = $(p),
                    m = await l.getDimensions(s),
                    g = "y" === p,
                    h = g ? "clientHeight" : "clientWidth",
                    b = i.reference[v] + i.reference[p] - f[p] - i.floating[v],
                    y = f[p] - i.reference[p],
                    x = await (null == l.getOffsetParent
                      ? void 0
                      : l.getOffsetParent(s)),
                    E = x ? x[h] : 0;
                  (E &&
                    (await (null == l.isElement ? void 0 : l.isElement(x)))) ||
                    (E = u.floating[h] || i.floating[v]);
                  let w = E / 2 - m[v] / 2 - 1,
                    _ = F(d[g ? "top" : "left"], w),
                    C = F(d[g ? "bottom" : "right"], w),
                    R = E - m[v] - C,
                    S = E / 2 - m[v] / 2 + (b / 2 - y / 2),
                    T = G(_, F(S, R)),
                    O =
                      !a.arrow &&
                      null != X(o) &&
                      S != T &&
                      i.reference[v] / 2 - (S < _ ? _ : C) - m[v] / 2 < 0,
                    k = O ? (S < _ ? S - _ : S - R) : 0;
                  return {
                    [p]: f[p] + k,
                    data: {
                      [p]: T,
                      centerOffset: S - T - k,
                      ...(O && { alignmentOffset: k }),
                    },
                    reset: O,
                  };
                },
              }),
              ea = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "autoPlacement",
                    options: e,
                    async fn(t) {
                      var n, r, o, i;
                      let {
                          rects: l,
                          middlewareData: u,
                          placement: a,
                          platform: s,
                          elements: c,
                        } = t,
                        {
                          crossAxis: d = !1,
                          alignment: f,
                          allowedPlacements: p = V,
                          autoAlignment: v = !0,
                          ...m
                        } = Y(e, t),
                        g =
                          void 0 !== f || p === V
                            ? ((i = f || null)
                                ? [
                                    ...p.filter((e) => X(e) === i),
                                    ...p.filter((e) => X(e) !== i),
                                  ]
                                : p.filter((e) => Z(e) === e)
                              ).filter(
                                (e) => !i || X(e) === i || (!!v && ee(e) !== e),
                              )
                            : p,
                        h = await el(t, m),
                        b =
                          (null == (n = u.autoPlacement) ? void 0 : n.index) ||
                          0,
                        y = g[b];
                      if (null == y) return {};
                      let x = Q(
                        y,
                        l,
                        await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                      );
                      if (a !== y) return { reset: { placement: g[0] } };
                      let E = [h[Z(y)], h[x[0]], h[x[1]]],
                        w = [
                          ...((null == (r = u.autoPlacement)
                            ? void 0
                            : r.overflows) || []),
                          { placement: y, overflows: E },
                        ],
                        _ = g[b + 1];
                      if (_)
                        return {
                          data: { index: b + 1, overflows: w },
                          reset: { placement: _ },
                        };
                      let C = w
                          .map((e) => {
                            let t = X(e.placement);
                            return [
                              e.placement,
                              t && d
                                ? e.overflows
                                    .slice(0, 2)
                                    .reduce((e, t) => e + t, 0)
                                : e.overflows[0],
                              e.overflows,
                            ];
                          })
                          .sort((e, t) => e[1] - t[1]),
                        R =
                          (null ==
                          (o = C.filter((e) =>
                            e[2].slice(0, X(e[0]) ? 2 : 3).every((e) => e <= 0),
                          )[0])
                            ? void 0
                            : o[0]) || C[0][0];
                      return R !== a
                        ? {
                            data: { index: b + 1, overflows: w },
                            reset: { placement: R },
                          }
                        : {};
                    },
                  }
                );
              },
              es = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "flip",
                    options: e,
                    async fn(t) {
                      var n, r, o, i, l;
                      let {
                          placement: u,
                          middlewareData: a,
                          rects: s,
                          initialPlacement: c,
                          platform: d,
                          elements: f,
                        } = t,
                        {
                          mainAxis: p = !0,
                          crossAxis: v = !0,
                          fallbackPlacements: m,
                          fallbackStrategy: g = "bestFit",
                          fallbackAxisSideDirection: h = "none",
                          flipAlignment: b = !0,
                          ...y
                        } = Y(e, t);
                      if (null != (n = a.arrow) && n.alignmentOffset) return {};
                      let x = Z(u),
                        E = Z(c) === c,
                        w = await (null == d.isRTL
                          ? void 0
                          : d.isRTL(f.floating)),
                        _ =
                          m ||
                          (E || !b
                            ? [et(c)]
                            : (function (e) {
                                let t = et(e);
                                return [ee(e), t, ee(t)];
                              })(c));
                      m ||
                        "none" === h ||
                        _.push(
                          ...(function (e, t, n, r) {
                            let o = X(e),
                              i = (function (e, t, n) {
                                let r = ["left", "right"],
                                  o = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (n) return t ? o : r;
                                    return t ? r : o;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(Z(e), "start" === n, r);
                            return (
                              o &&
                                ((i = i.map((e) => e + "-" + o)),
                                t && (i = i.concat(i.map(ee)))),
                              i
                            );
                          })(c, b, h, w),
                        );
                      let C = [c, ..._],
                        R = await el(t, y),
                        S = [],
                        T = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                      if ((p && S.push(R[x]), v)) {
                        let e = Q(u, s, w);
                        S.push(R[e[0]], R[e[1]]);
                      }
                      if (
                        ((T = [...T, { placement: u, overflows: S }]),
                        !S.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (o = a.flip) ? void 0 : o.index) || 0) +
                            1,
                          t = C[e];
                        if (t)
                          return {
                            data: { index: e, overflows: T },
                            reset: { placement: t },
                          };
                        let n =
                          null ==
                          (i = T.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1],
                          )[0])
                            ? void 0
                            : i.placement;
                        if (!n)
                          switch (g) {
                            case "bestFit": {
                              let e =
                                null ==
                                (l = T.map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ]).sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : l[0];
                              e && (n = e);
                              break;
                            }
                            case "initialPlacement":
                              n = c;
                          }
                        if (u !== n) return { reset: { placement: n } };
                      }
                      return {};
                    },
                  }
                );
              };
            function ec(e, t) {
              return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width,
              };
            }
            function ed(e) {
              return D.some((t) => e[t] >= 0);
            }
            let ef = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    let { rects: n } = t,
                      { strategy: r = "referenceHidden", ...o } = Y(e, t);
                    switch (r) {
                      case "referenceHidden": {
                        let e = ec(
                          await el(t, { ...o, elementContext: "reference" }),
                          n.reference,
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: ed(e),
                          },
                        };
                      }
                      case "escaped": {
                        let e = ec(
                          await el(t, { ...o, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: ed(e) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            };
            function ep(e) {
              let t = F(...e.map((e) => e.left)),
                n = F(...e.map((e) => e.top));
              return {
                x: t,
                y: n,
                width: G(...e.map((e) => e.right)) - t,
                height: G(...e.map((e) => e.bottom)) - n,
              };
            }
            let ev = function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "inline",
                  options: e,
                  async fn(t) {
                    let {
                        placement: n,
                        elements: r,
                        rects: o,
                        platform: i,
                        strategy: l,
                      } = t,
                      { padding: u = 2, x: a, y: s } = Y(e, t),
                      c = Array.from(
                        (await (null == i.getClientRects
                          ? void 0
                          : i.getClientRects(r.reference))) || [],
                      ),
                      d = (function (e) {
                        let t = e.slice().sort((e, t) => e.y - t.y),
                          n = [],
                          r = null;
                        for (let e = 0; e < t.length; e++) {
                          let o = t[e];
                          !r || o.y - r.y > r.height / 2
                            ? n.push([o])
                            : n[n.length - 1].push(o),
                            (r = o);
                        }
                        return n.map((e) => er(ep(e)));
                      })(c),
                      f = er(ep(c)),
                      p = en(u),
                      v = await i.getElementRects({
                        reference: {
                          getBoundingClientRect: function () {
                            if (
                              2 === d.length &&
                              d[0].left > d[1].right &&
                              null != a &&
                              null != s
                            )
                              return (
                                d.find(
                                  (e) =>
                                    a > e.left - p.left &&
                                    a < e.right + p.right &&
                                    s > e.top - p.top &&
                                    s < e.bottom + p.bottom,
                                ) || f
                              );
                            if (d.length >= 2) {
                              if ("y" === J(n)) {
                                let e = d[0],
                                  t = d[d.length - 1],
                                  r = "top" === Z(n),
                                  o = e.top,
                                  i = t.bottom,
                                  l = r ? e.left : t.left,
                                  u = r ? e.right : t.right;
                                return {
                                  top: o,
                                  bottom: i,
                                  left: l,
                                  right: u,
                                  width: u - l,
                                  height: i - o,
                                  x: l,
                                  y: o,
                                };
                              }
                              let e = "left" === Z(n),
                                t = G(...d.map((e) => e.right)),
                                r = F(...d.map((e) => e.left)),
                                o = d.filter((n) =>
                                  e ? n.left === r : n.right === t,
                                ),
                                i = o[0].top,
                                l = o[o.length - 1].bottom;
                              return {
                                top: i,
                                bottom: l,
                                left: r,
                                right: t,
                                width: t - r,
                                height: l - i,
                                x: r,
                                y: i,
                              };
                            }
                            return f;
                          },
                        },
                        floating: r.floating,
                        strategy: l,
                      });
                    return o.reference.x !== v.reference.x ||
                      o.reference.y !== v.reference.y ||
                      o.reference.width !== v.reference.width ||
                      o.reference.height !== v.reference.height
                      ? { reset: { rects: v } }
                      : {};
                  },
                }
              );
            };
            async function em(e, t) {
              let { placement: n, platform: r, elements: o } = e,
                i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                l = Z(n),
                u = X(n),
                a = "y" === J(n),
                s = ["left", "top"].includes(l) ? -1 : 1,
                c = i && a ? -1 : 1,
                d = Y(t, e),
                {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: v,
                } = "number" == typeof d
                  ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                  : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
              return (
                u && "number" == typeof v && (p = "end" === u ? -1 * v : v),
                a ? { x: p * c, y: f * s } : { x: f * s, y: p * c }
              );
            }
            let eg = function (e) {
                return (
                  void 0 === e && (e = 0),
                  {
                    name: "offset",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r } = t,
                        o = await em(t, e);
                      return { x: n + o.x, y: r + o.y, data: o };
                    },
                  }
                );
              },
              eh = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "shift",
                    options: e,
                    async fn(t) {
                      let { x: n, y: r, placement: o } = t,
                        {
                          mainAxis: i = !0,
                          crossAxis: l = !1,
                          limiter: u = {
                            fn: (e) => {
                              let { x: t, y: n } = e;
                              return { x: t, y: n };
                            },
                          },
                          ...a
                        } = Y(e, t),
                        s = { x: n, y: r },
                        c = await el(t, a),
                        d = J(Z(o)),
                        f = q(d),
                        p = s[f],
                        v = s[d];
                      if (i) {
                        let e = "y" === f ? "top" : "left",
                          t = "y" === f ? "bottom" : "right",
                          n = p + c[e],
                          r = p - c[t];
                        p = G(n, F(p, r));
                      }
                      if (l) {
                        let e = "y" === d ? "top" : "left",
                          t = "y" === d ? "bottom" : "right",
                          n = v + c[e],
                          r = v - c[t];
                        v = G(n, F(v, r));
                      }
                      let m = u.fn({ ...t, [f]: p, [d]: v });
                      return { ...m, data: { x: m.x - n, y: m.y - r } };
                    },
                  }
                );
              },
              eb = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    options: e,
                    fn(t) {
                      let {
                          x: n,
                          y: r,
                          placement: o,
                          rects: i,
                          middlewareData: l,
                        } = t,
                        {
                          offset: u = 0,
                          mainAxis: a = !0,
                          crossAxis: s = !0,
                        } = Y(e, t),
                        c = { x: n, y: r },
                        d = J(o),
                        f = q(d),
                        p = c[f],
                        v = c[d],
                        m = Y(u, t),
                        g =
                          "number" == typeof m
                            ? { mainAxis: m, crossAxis: 0 }
                            : { mainAxis: 0, crossAxis: 0, ...m };
                      if (a) {
                        let e = "y" === f ? "height" : "width",
                          t = i.reference[f] - i.floating[e] + g.mainAxis,
                          n = i.reference[f] + i.reference[e] - g.mainAxis;
                        p < t ? (p = t) : p > n && (p = n);
                      }
                      if (s) {
                        var h, b;
                        let e = "y" === f ? "width" : "height",
                          t = ["top", "left"].includes(Z(o)),
                          n =
                            i.reference[d] -
                            i.floating[e] +
                            ((t && (null == (h = l.offset) ? void 0 : h[d])) ||
                              0) +
                            (t ? 0 : g.crossAxis),
                          r =
                            i.reference[d] +
                            i.reference[e] +
                            (t
                              ? 0
                              : (null == (b = l.offset) ? void 0 : b[d]) || 0) -
                            (t ? g.crossAxis : 0);
                        v < n ? (v = n) : v > r && (v = r);
                      }
                      return { [f]: p, [d]: v };
                    },
                  }
                );
              },
              ey = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "size",
                    options: e,
                    async fn(t) {
                      let n, r;
                      let {
                          placement: o,
                          rects: i,
                          platform: l,
                          elements: u,
                        } = t,
                        { apply: a = () => {}, ...s } = Y(e, t),
                        c = await el(t, s),
                        d = Z(o),
                        f = X(o),
                        p = "y" === J(o),
                        { width: v, height: m } = i.floating;
                      "top" === d || "bottom" === d
                        ? ((n = d),
                          (r =
                            f ===
                            ((await (null == l.isRTL
                              ? void 0
                              : l.isRTL(u.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((r = d), (n = "end" === f ? "top" : "bottom"));
                      let g = m - c[n],
                        h = v - c[r],
                        b = !t.middlewareData.shift,
                        y = g,
                        x = h;
                      if (p) {
                        let e = v - c.left - c.right;
                        x = f || b ? F(h, e) : e;
                      } else {
                        let e = m - c.top - c.bottom;
                        y = f || b ? F(g, e) : e;
                      }
                      if (b && !f) {
                        let e = G(c.left, 0),
                          t = G(c.right, 0),
                          n = G(c.top, 0),
                          r = G(c.bottom, 0);
                        p
                          ? (x =
                              v -
                              2 *
                                (0 !== e || 0 !== t
                                  ? e + t
                                  : G(c.left, c.right)))
                          : (y =
                              m -
                              2 *
                                (0 !== n || 0 !== r
                                  ? n + r
                                  : G(c.top, c.bottom)));
                      }
                      await a({ ...t, availableWidth: x, availableHeight: y });
                      let E = await l.getDimensions(u.floating);
                      return v !== E.width || m !== E.height
                        ? { reset: { rects: !0 } }
                        : {};
                    },
                  }
                );
              };
            function ex(e) {
              let t = b(e),
                n = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0,
                o = f(e),
                i = o ? e.offsetWidth : n,
                l = o ? e.offsetHeight : r,
                u = U(n) !== i || U(r) !== l;
              return u && ((n = i), (r = l)), { width: n, height: r, $: u };
            }
            function eE(e) {
              return d(e) ? e : e.contextElement;
            }
            function ew(e) {
              let t = eE(e);
              if (!f(t)) return z(1);
              let n = t.getBoundingClientRect(),
                { width: r, height: o, $: i } = ex(t),
                l = (i ? U(n.width) : n.width) / r,
                u = (i ? U(n.height) : n.height) / o;
              return (
                (l && Number.isFinite(l)) || (l = 1),
                (u && Number.isFinite(u)) || (u = 1),
                { x: l, y: u }
              );
            }
            let e_ = z(0);
            function eC(e) {
              let t = a(e);
              return g() && t.visualViewport
                ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop,
                  }
                : e_;
            }
            function eR(e, t, n, r) {
              var o;
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let i = e.getBoundingClientRect(),
                l = eE(e),
                u = z(1);
              t && (r ? d(r) && (u = ew(r)) : (u = ew(e)));
              let s = (void 0 === (o = n) && (o = !1),
                r && (!o || r === a(l)) && o)
                  ? eC(l)
                  : z(0),
                c = (i.left + s.x) / u.x,
                f = (i.top + s.y) / u.y,
                p = i.width / u.x,
                v = i.height / u.y;
              if (l) {
                let e = a(l),
                  t = r && d(r) ? a(r) : r,
                  n = e.frameElement;
                for (; n && r && t !== e; ) {
                  let e = ew(n),
                    t = n.getBoundingClientRect(),
                    r = b(n),
                    o =
                      t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                  (c *= e.x),
                    (f *= e.y),
                    (p *= e.x),
                    (v *= e.y),
                    (c += o),
                    (f += i),
                    (n = a(n).frameElement);
                }
              }
              return er({ width: p, height: v, x: c, y: f });
            }
            function eS(e) {
              return eR(s(e)).left + y(e).scrollLeft;
            }
            function eT(e, t, n) {
              let r;
              if ("viewport" === t)
                r = (function (e, t) {
                  let n = a(e),
                    r = s(e),
                    o = n.visualViewport,
                    i = r.clientWidth,
                    l = r.clientHeight,
                    u = 0,
                    c = 0;
                  if (o) {
                    (i = o.width), (l = o.height);
                    let e = g();
                    (!e || (e && "fixed" === t)) &&
                      ((u = o.offsetLeft), (c = o.offsetTop));
                  }
                  return { width: i, height: l, x: u, y: c };
                })(e, n);
              else if ("document" === t)
                r = (function (e) {
                  let t = s(e),
                    n = y(e),
                    r = e.ownerDocument.body,
                    o = G(
                      t.scrollWidth,
                      t.clientWidth,
                      r.scrollWidth,
                      r.clientWidth,
                    ),
                    i = G(
                      t.scrollHeight,
                      t.clientHeight,
                      r.scrollHeight,
                      r.clientHeight,
                    ),
                    l = -n.scrollLeft + eS(e),
                    u = -n.scrollTop;
                  return (
                    "rtl" === b(r).direction &&
                      (l += G(t.clientWidth, r.clientWidth) - o),
                    { width: o, height: i, x: l, y: u }
                  );
                })(s(e));
              else if (d(t))
                r = (function (e, t) {
                  let n = eR(e, !0, "fixed" === t),
                    r = n.top + e.clientTop,
                    o = n.left + e.clientLeft,
                    i = f(e) ? ew(e) : z(1),
                    l = e.clientWidth * i.x;
                  return {
                    width: l,
                    height: e.clientHeight * i.y,
                    x: o * i.x,
                    y: r * i.y,
                  };
                })(t, n);
              else {
                let n = eC(e);
                r = { ...t, x: t.x - n.x, y: t.y - n.y };
              }
              return er(r);
            }
            function eO(e, t) {
              return f(e) && "fixed" !== b(e).position
                ? t
                  ? t(e)
                  : e.offsetParent
                : null;
            }
            function ek(e, t) {
              let n = a(e);
              if (!f(e)) return n;
              let r = eO(e, t);
              for (
                ;
                r &&
                ["table", "td", "th"].includes(u(r)) &&
                "static" === b(r).position;

              )
                r = eO(r, t);
              return r &&
                ("html" === u(r) ||
                  ("body" === u(r) && "static" === b(r).position && !m(r)))
                ? n
                : r ||
                    (function (e) {
                      let t = x(e);
                      for (; f(t) && !h(t); ) {
                        if (m(t)) return t;
                        t = x(t);
                      }
                      return null;
                    })(e) ||
                    n;
            }
            let eN = async function (e) {
                let { reference: t, floating: n, strategy: r } = e,
                  o = this.getOffsetParent || ek,
                  i = this.getDimensions;
                return {
                  reference: (function (e, t, n) {
                    let r = f(t),
                      o = s(t),
                      i = "fixed" === n,
                      l = eR(e, !0, i, t),
                      a = { scrollLeft: 0, scrollTop: 0 },
                      c = z(0);
                    if (r || (!r && !i)) {
                      if ((("body" !== u(t) || v(o)) && (a = y(t)), r)) {
                        let e = eR(t, !0, i, t);
                        (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                      } else o && (c.x = eS(o));
                    }
                    return {
                      x: l.left + a.scrollLeft - c.x,
                      y: l.top + a.scrollTop - c.y,
                      width: l.width,
                      height: l.height,
                    };
                  })(t, await o(n), r),
                  floating: { x: 0, y: 0, ...(await i(n)) },
                };
              },
              eL = {
                convertOffsetParentRelativeRectToViewportRelativeRect:
                  function (e) {
                    let { rect: t, offsetParent: n, strategy: r } = e,
                      o = f(n),
                      i = s(n);
                    if (n === i) return t;
                    let l = { scrollLeft: 0, scrollTop: 0 },
                      a = z(1),
                      c = z(0);
                    if (
                      (o || (!o && "fixed" !== r)) &&
                      (("body" !== u(n) || v(i)) && (l = y(n)), f(n))
                    ) {
                      let e = eR(n);
                      (a = ew(n)),
                        (c.x = e.x + n.clientLeft),
                        (c.y = e.y + n.clientTop);
                    }
                    return {
                      width: t.width * a.x,
                      height: t.height * a.y,
                      x: t.x * a.x - l.scrollLeft * a.x + c.x,
                      y: t.y * a.y - l.scrollTop * a.y + c.y,
                    };
                  },
                getDocumentElement: s,
                getClippingRect: function (e) {
                  let {
                      element: t,
                      boundary: n,
                      rootBoundary: r,
                      strategy: o,
                    } = e,
                    i = [
                      ...("clippingAncestors" === n
                        ? (function (e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = E(e, [], !1).filter(
                                (e) => d(e) && "body" !== u(e),
                              ),
                              o = null,
                              i = "fixed" === b(e).position,
                              l = i ? x(e) : e;
                            for (; d(l) && !h(l); ) {
                              let t = b(l),
                                n = m(l);
                              n || "fixed" !== t.position || (o = null),
                                (
                                  i
                                    ? !n && !o
                                    : (!n &&
                                        "static" === t.position &&
                                        !!o &&
                                        ["absolute", "fixed"].includes(
                                          o.position,
                                        )) ||
                                      (v(l) &&
                                        !n &&
                                        (function e(t, n) {
                                          let r = x(t);
                                          return (
                                            !(r === n || !d(r) || h(r)) &&
                                            ("fixed" === b(r).position ||
                                              e(r, n))
                                          );
                                        })(e, l))
                                )
                                  ? (r = r.filter((e) => e !== l))
                                  : (o = t),
                                (l = x(l));
                            }
                            return t.set(e, r), r;
                          })(t, this._c)
                        : [].concat(n)),
                      r,
                    ],
                    l = i[0],
                    a = i.reduce(
                      (e, n) => {
                        let r = eT(t, n, o);
                        return (
                          (e.top = G(r.top, e.top)),
                          (e.right = F(r.right, e.right)),
                          (e.bottom = F(r.bottom, e.bottom)),
                          (e.left = G(r.left, e.left)),
                          e
                        );
                      },
                      eT(t, l, o),
                    );
                  return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top,
                  };
                },
                getOffsetParent: ek,
                getElementRects: eN,
                getClientRects: function (e) {
                  return Array.from(e.getClientRects());
                },
                getDimensions: function (e) {
                  return ex(e);
                },
                getScale: ew,
                isElement: d,
                isRTL: function (e) {
                  return "rtl" === b(e).direction;
                },
              };
            function eI(e, t, n, r) {
              let o;
              void 0 === r && (r = {});
              let {
                  ancestorScroll: i = !0,
                  ancestorResize: l = !0,
                  elementResize: u = "function" == typeof ResizeObserver,
                  layoutShift: a = "function" == typeof IntersectionObserver,
                  animationFrame: c = !1,
                } = r,
                d = eE(e),
                f = i || l ? [...(d ? E(d) : []), ...E(t)] : [];
              f.forEach((e) => {
                i && e.addEventListener("scroll", n, { passive: !0 }),
                  l && e.addEventListener("resize", n);
              });
              let p =
                  d && a
                    ? (function (e, t) {
                        let n,
                          r = null,
                          o = s(e);
                        function i() {
                          clearTimeout(n), r && r.disconnect(), (r = null);
                        }
                        return (
                          !(function l(u, a) {
                            void 0 === u && (u = !1),
                              void 0 === a && (a = 1),
                              i();
                            let {
                              left: s,
                              top: c,
                              width: d,
                              height: f,
                            } = e.getBoundingClientRect();
                            if ((u || t(), !d || !f)) return;
                            let p = W(c),
                              v = W(o.clientWidth - (s + d)),
                              m = {
                                rootMargin:
                                  -p +
                                  "px " +
                                  -v +
                                  "px " +
                                  -W(o.clientHeight - (c + f)) +
                                  "px " +
                                  -W(s) +
                                  "px",
                                threshold: G(0, F(1, a)) || 1,
                              },
                              g = !0;
                            function h(e) {
                              let t = e[0].intersectionRatio;
                              if (t !== a) {
                                if (!g) return l();
                                t
                                  ? l(!1, t)
                                  : (n = setTimeout(() => {
                                      l(!1, 1e-7);
                                    }, 100));
                              }
                              g = !1;
                            }
                            try {
                              r = new IntersectionObserver(h, {
                                ...m,
                                root: o.ownerDocument,
                              });
                            } catch (e) {
                              r = new IntersectionObserver(h, m);
                            }
                            r.observe(e);
                          })(!0),
                          i
                        );
                      })(d, n)
                    : null,
                v = -1,
                m = null;
              u &&
                ((m = new ResizeObserver((e) => {
                  let [r] = e;
                  r &&
                    r.target === d &&
                    m &&
                    (m.unobserve(t),
                    cancelAnimationFrame(v),
                    (v = requestAnimationFrame(() => {
                      m && m.observe(t);
                    }))),
                    n();
                })),
                d && !c && m.observe(d),
                m.observe(t));
              let g = c ? eR(e) : null;
              return (
                c &&
                  (function t() {
                    let r = eR(e);
                    g &&
                      (r.x !== g.x ||
                        r.y !== g.y ||
                        r.width !== g.width ||
                        r.height !== g.height) &&
                      n(),
                      (g = r),
                      (o = requestAnimationFrame(t));
                  })(),
                n(),
                () => {
                  f.forEach((e) => {
                    i && e.removeEventListener("scroll", n),
                      l && e.removeEventListener("resize", n);
                  }),
                    p && p(),
                    m && m.disconnect(),
                    (m = null),
                    c && cancelAnimationFrame(o);
                }
              );
            }
            let eP = (e, t, n) => {
                let r = new Map(),
                  o = { platform: eL, ...n },
                  i = { ...o.platform, _c: r };
                return ei(e, t, { ...o, platform: i });
              },
              eA =
                ((o = {
                  createPortal: () => T.createPortal,
                  flushSync: () => T.flushSync,
                }),
                (i = {}),
                n.d(i, o),
                i),
              eM = (e) => ({
                name: "arrow",
                options: e,
                fn(t) {
                  let { element: n, padding: r } =
                    "function" == typeof e ? e(t) : e;
                  if (n && {}.hasOwnProperty.call(n, "current")) {
                    if (null != n.current)
                      return eu({ element: n.current, padding: r }).fn(t);
                  } else if (n) return eu({ element: n, padding: r }).fn(t);
                  return {};
                },
              });
            var eB =
              "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
            function ej(e, t) {
              let n, r, o;
              if (e === t) return !0;
              if (typeof e != typeof t) return !1;
              if ("function" == typeof e && e.toString() === t.toString())
                return !0;
              if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                  if ((n = e.length) != t.length) return !1;
                  for (r = n; 0 != r--; ) if (!ej(e[r], t[r])) return !1;
                  return !0;
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                  return !1;
                for (r = n; 0 != r--; )
                  if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                for (r = n; 0 != r--; ) {
                  let n = o[r];
                  if (("_owner" !== n || !e.$$typeof) && !ej(e[n], t[n]))
                    return !1;
                }
                return !0;
              }
              return e != e && t != t;
            }
            function eD(e) {
              return (
                (e.ownerDocument.defaultView || window).devicePixelRatio || 1
              );
            }
            function eV(e, t) {
              let n = eD(e);
              return Math.round(t * n) / n;
            }
            function eF(e) {
              let t = l.useRef(e);
              return (
                eB(() => {
                  t.current = e;
                }),
                t
              );
            }
            var eG =
                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
              eU = "undefined" == typeof Element,
              eW = eU
                ? function () {}
                : Element.prototype.matches ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector,
              ez =
                !eU && Element.prototype.getRootNode
                  ? function (e) {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.getRootNode) || void 0 === t
                          ? void 0
                          : t.call(e);
                    }
                  : function (e) {
                      return null == e ? void 0 : e.ownerDocument;
                    },
              eH = function e(t, n) {
                void 0 === n && (n = !0);
                var r,
                  o =
                    null == t
                      ? void 0
                      : null === (r = t.getAttribute) || void 0 === r
                        ? void 0
                        : r.call(t, "inert");
                return "" === o || "true" === o || (n && t && e(t.parentNode));
              },
              eK = function (e) {
                var t,
                  n =
                    null == e
                      ? void 0
                      : null === (t = e.getAttribute) || void 0 === t
                        ? void 0
                        : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              },
              eY = function (e, t, n) {
                if (eH(e)) return [];
                var r = Array.prototype.slice.apply(e.querySelectorAll(eG));
                return t && eW.call(e, eG) && r.unshift(e), (r = r.filter(n));
              },
              eZ = function e(t, n, r) {
                for (var o = [], i = Array.from(t); i.length; ) {
                  var l = i.shift();
                  if (!eH(l, !1)) {
                    if ("SLOT" === l.tagName) {
                      var u = l.assignedElements(),
                        a = e(u.length ? u : l.children, !0, r);
                      r.flatten
                        ? o.push.apply(o, a)
                        : o.push({ scopeParent: l, candidates: a });
                    } else {
                      eW.call(l, eG) &&
                        r.filter(l) &&
                        (n || !t.includes(l)) &&
                        o.push(l);
                      var s =
                          l.shadowRoot ||
                          ("function" == typeof r.getShadowRoot &&
                            r.getShadowRoot(l)),
                        c =
                          !eH(s, !1) &&
                          (!r.shadowRootFilter || r.shadowRootFilter(l));
                      if (s && c) {
                        var d = e(!0 === s ? l.children : s.children, !0, r);
                        r.flatten
                          ? o.push.apply(o, d)
                          : o.push({ scopeParent: l, candidates: d });
                      } else i.unshift.apply(i, l.children);
                    }
                  }
                }
                return o;
              },
              eX = function (e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
              },
              eq = function (e) {
                if (!e) throw Error("No node provided");
                return e.tabIndex < 0 &&
                  (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || eK(e)) &&
                  !eX(e)
                  ? 0
                  : e.tabIndex;
              },
              e$ = function (e, t) {
                var n = eq(e);
                return n < 0 && t && !eX(e) ? 0 : n;
              },
              eJ = function (e, t) {
                return e.tabIndex === t.tabIndex
                  ? e.documentOrder - t.documentOrder
                  : e.tabIndex - t.tabIndex;
              },
              eQ = function (e) {
                return "INPUT" === e.tagName;
              },
              e0 = function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              },
              e1 = function (e) {
                if (!e.name) return !0;
                var t,
                  n = e.form || ez(e),
                  r = function (e) {
                    return n.querySelectorAll(
                      'input[type="radio"][name="' + e + '"]',
                    );
                  };
                if (
                  void 0 !== window.CSS &&
                  "function" == typeof window.CSS.escape
                )
                  t = r(window.CSS.escape(e.name));
                else
                  try {
                    t = r(e.name);
                  } catch (e) {
                    return (
                      console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                      ),
                      !1
                    );
                  }
                var o = e0(t, e.form);
                return !o || o === e;
              },
              e9 = function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  l,
                  u,
                  a = e && ez(e),
                  s = null === (t = a) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (a && a !== e)
                  for (
                    c = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && s;

                  )
                    c = !!(
                      null !==
                        (l = s =
                          null === (i = a = ez(s)) || void 0 === i
                            ? void 0
                            : i.host) &&
                      void 0 !== l &&
                      null !== (u = l.ownerDocument) &&
                      void 0 !== u &&
                      u.contains(s)
                    );
                return c;
              },
              e8 = function (e) {
                var t = e.getBoundingClientRect(),
                  n = t.width,
                  r = t.height;
                return 0 === n && 0 === r;
              },
              e4 = function (e, t) {
                var n = t.displayCheck,
                  r = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var o = eW.call(e, "details>summary:first-of-type")
                  ? e.parentElement
                  : e;
                if (eW.call(o, "details:not([open]) *")) return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                  if ("non-zero-area" === n) return e8(e);
                } else {
                  if ("function" == typeof r) {
                    for (var i = e; e; ) {
                      var l = e.parentElement,
                        u = ez(e);
                      if (l && !l.shadowRoot && !0 === r(l)) return e8(e);
                      e = e.assignedSlot
                        ? e.assignedSlot
                        : l || u === e.ownerDocument
                          ? l
                          : u.host;
                    }
                    e = i;
                  }
                  if (e9(e)) return !e.getClientRects().length;
                  if ("legacy-full" !== n) return !0;
                }
                return !1;
              },
              e5 = function (e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                  for (var t = e.parentElement; t; ) {
                    if ("FIELDSET" === t.tagName && t.disabled) {
                      for (var n = 0; n < t.children.length; n++) {
                        var r = t.children.item(n);
                        if ("LEGEND" === r.tagName)
                          return (
                            !!eW.call(t, "fieldset[disabled] *") ||
                            !r.contains(e)
                          );
                      }
                      return !0;
                    }
                    t = t.parentElement;
                  }
                return !1;
              },
              e2 = function (e, t) {
                var n, r, o;
                return (
                  !(
                    (eQ((n = t)) && "radio" === n.type && !e1(n)) ||
                    0 > eq(t)
                  ) &&
                  ((r = e),
                  !(
                    (o = t).disabled ||
                    eH(o) ||
                    (eQ(o) && "hidden" === o.type) ||
                    e4(o, r) ||
                    ("DETAILS" === o.tagName &&
                      Array.prototype.slice
                        .apply(o.children)
                        .some(function (e) {
                          return "SUMMARY" === e.tagName;
                        })) ||
                    e5(o)
                  ))
                );
              },
              e3 = function (e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!isNaN(t) || t >= 0;
              },
              e6 = function e(t) {
                var n = [],
                  r = [];
                return (
                  t.forEach(function (t, o) {
                    var i = !!t.scopeParent,
                      l = i ? t.scopeParent : t,
                      u = e$(l, i),
                      a = i ? e(t.candidates) : l;
                    0 === u
                      ? i
                        ? n.push.apply(n, a)
                        : n.push(l)
                      : r.push({
                          documentOrder: o,
                          tabIndex: u,
                          item: t,
                          isScope: i,
                          content: a,
                        });
                  }),
                  r
                    .sort(eJ)
                    .reduce(function (e, t) {
                      return (
                        t.isScope
                          ? e.push.apply(e, t.content)
                          : e.push(t.content),
                        e
                      );
                    }, [])
                    .concat(n)
                );
              },
              e7 = function (e, t) {
                return e6(
                  (t = t || {}).getShadowRoot
                    ? eZ([e], t.includeContainer, {
                        filter: e2.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: e3,
                      })
                    : eY(e, t.includeContainer, e2.bind(null, t)),
                );
              };
            function te(e) {
              return l.useMemo(
                () =>
                  e.every((e) => null == e)
                    ? null
                    : (t) => {
                        e.forEach((e) => {
                          "function" == typeof e
                            ? e(t)
                            : null != e && (e.current = t);
                        });
                      },
                e,
              );
            }
            let tt = l["useInsertionEffect".toString()] || ((e) => e());
            function tn(e) {
              let t = l.useRef(() => {});
              return (
                tt(() => {
                  t.current = e;
                }),
                l.useCallback(function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return null == t.current ? void 0 : t.current(...n);
                }, [])
              );
            }
            let tr = "ArrowUp",
              to = "ArrowDown",
              ti = "ArrowLeft",
              tl = "ArrowRight";
            function tu(e, t, n) {
              return Math.floor(e / t) !== n;
            }
            function ta(e, t) {
              return t < 0 || t >= e.current.length;
            }
            function ts(e, t) {
              return td(e, { disabledIndices: t });
            }
            function tc(e, t) {
              return td(e, {
                decrement: !0,
                startingIndex: e.current.length,
                disabledIndices: t,
              });
            }
            function td(e, t) {
              let {
                  startingIndex: n = -1,
                  decrement: r = !1,
                  disabledIndices: o,
                  amount: i = 1,
                } = void 0 === t ? {} : t,
                l = e.current,
                u = n;
              do {
                var a, s;
                u += r ? -i : i;
              } while (
                u >= 0 &&
                u <= l.length - 1 &&
                (o
                  ? o.includes(u)
                  : null == l[u] ||
                    (null == (a = l[u])
                      ? void 0
                      : a.hasAttribute("disabled")) ||
                    (null == (s = l[u])
                      ? void 0
                      : s.getAttribute("aria-disabled")) === "true")
              );
              return u;
            }
            function tf(e, t) {
              let {
                  event: n,
                  orientation: r,
                  loop: o,
                  cols: i,
                  disabledIndices: l,
                  minIndex: u,
                  maxIndex: a,
                  prevIndex: s,
                  stopEvent: c = !1,
                } = t,
                d = s;
              if (n.key === tr) {
                if ((c && j(n), -1 === s)) d = a;
                else if (
                  ((d = td(e, {
                    startingIndex: d,
                    amount: i,
                    decrement: !0,
                    disabledIndices: l,
                  })),
                  o && (s - i < u || d < 0))
                ) {
                  let e = s % i,
                    t = a % i,
                    n = a - (t - e);
                  d = t === e ? a : t > e ? n : n - i;
                }
                ta(e, d) && (d = s);
              }
              if (
                (n.key === to &&
                  (c && j(n),
                  -1 === s
                    ? (d = u)
                    : ((d = td(e, {
                        startingIndex: s,
                        amount: i,
                        disabledIndices: l,
                      })),
                      o &&
                        s + i > a &&
                        (d = td(e, {
                          startingIndex: (s % i) - i,
                          amount: i,
                          disabledIndices: l,
                        }))),
                  ta(e, d) && (d = s)),
                "both" === r)
              ) {
                let t = W(s / i);
                n.key === tl &&
                  (c && j(n),
                  s % i != i - 1
                    ? ((d = td(e, { startingIndex: s, disabledIndices: l })),
                      o &&
                        tu(d, i, t) &&
                        (d = td(e, {
                          startingIndex: s - (s % i) - 1,
                          disabledIndices: l,
                        })))
                    : o &&
                      (d = td(e, {
                        startingIndex: s - (s % i) - 1,
                        disabledIndices: l,
                      })),
                  tu(d, i, t) && (d = s)),
                  n.key === ti &&
                    (c && j(n),
                    s % i != 0
                      ? ((d = td(e, {
                          startingIndex: s,
                          disabledIndices: l,
                          decrement: !0,
                        })),
                        o &&
                          tu(d, i, t) &&
                          (d = td(e, {
                            startingIndex: s + (i - (s % i)),
                            decrement: !0,
                            disabledIndices: l,
                          })))
                      : o &&
                        (d = td(e, {
                          startingIndex: s + (i - (s % i)),
                          decrement: !0,
                          disabledIndices: l,
                        })),
                    tu(d, i, t) && (d = s));
                let r = W(a / i) === t;
                ta(e, d) &&
                  (d =
                    o && r
                      ? n.key === ti
                        ? a
                        : td(e, {
                            startingIndex: s - (s % i) - 1,
                            disabledIndices: l,
                          })
                      : s);
              }
              return d;
            }
            let tp = 0;
            function tv(e, t) {
              void 0 === t && (t = {});
              let {
                preventScroll: n = !1,
                cancelPrevious: r = !0,
                sync: o = !1,
              } = t;
              r && cancelAnimationFrame(tp);
              let i = () =>
                null == e ? void 0 : e.focus({ preventScroll: n });
              o ? i() : (tp = requestAnimationFrame(i));
            }
            var tm =
              "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
            function tg(e, t) {
              let n = e.compareDocumentPosition(t);
              return n & Node.DOCUMENT_POSITION_FOLLOWING ||
                n & Node.DOCUMENT_POSITION_CONTAINED_BY
                ? -1
                : n & Node.DOCUMENT_POSITION_PRECEDING ||
                    n & Node.DOCUMENT_POSITION_CONTAINS
                  ? 1
                  : 0;
            }
            let th = l.createContext({
              register: () => {},
              unregister: () => {},
              map: new Map(),
              elementsRef: { current: [] },
            });
            function tb(e) {
              let { children: t, elementsRef: n, labelsRef: r } = e,
                [o, i] = l.useState(() => new Map()),
                u = l.useCallback((e) => {
                  i((t) => new Map(t).set(e, null));
                }, []),
                a = l.useCallback((e) => {
                  i((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
                }, []);
              return (
                tm(() => {
                  let e = new Map(o);
                  Array.from(e.keys())
                    .sort(tg)
                    .forEach((t, n) => {
                      e.set(t, n);
                    }),
                    !(function (e, t) {
                      if (e.size !== t.size) return !1;
                      for (let [n, r] of e.entries())
                        if (r !== t.get(n)) return !1;
                      return !0;
                    })(o, e) && i(e);
                }, [o]),
                l.createElement(
                  th.Provider,
                  {
                    value: l.useMemo(
                      () => ({
                        register: u,
                        unregister: a,
                        map: o,
                        elementsRef: n,
                        labelsRef: r,
                      }),
                      [u, a, o, n, r],
                    ),
                  },
                  t,
                )
              );
            }
            function ty(e) {
              let { label: t } = void 0 === e ? {} : e,
                [n, r] = l.useState(null),
                o = l.useRef(null),
                {
                  register: i,
                  unregister: u,
                  map: a,
                  elementsRef: s,
                  labelsRef: c,
                } = l.useContext(th),
                d = l.useCallback(
                  (e) => {
                    if (
                      ((o.current = e), null !== n && ((s.current[n] = e), c))
                    ) {
                      var r;
                      let o = void 0 !== t;
                      c.current[n] = o
                        ? t
                        : null != (r = null == e ? void 0 : e.textContent)
                          ? r
                          : null;
                    }
                  },
                  [n, s, c, t],
                );
              return (
                tm(() => {
                  let e = o.current;
                  if (e)
                    return (
                      i(e),
                      () => {
                        u(e);
                      }
                    );
                }, [i, u]),
                tm(() => {
                  let e = o.current ? a.get(o.current) : null;
                  null != e && r(e);
                }, [a]),
                l.useMemo(() => ({ ref: d, index: null == n ? -1 : n }), [n, d])
              );
            }
            function tx(e, t) {
              return "function" == typeof e
                ? e(t)
                : e
                  ? l.cloneElement(e, t)
                  : l.createElement("div", t);
            }
            let tE = l.createContext({ activeIndex: 0, onNavigate: () => {} }),
              tw = [ti, tl],
              t_ = [tr, to],
              tC = [...tw, ...t_],
              tR = l.forwardRef(function (e, t) {
                let {
                    render: n,
                    orientation: r = "both",
                    loop: o = !0,
                    cols: i = 1,
                    disabledIndices: u,
                    activeIndex: a,
                    onNavigate: s,
                    ...c
                  } = e,
                  [d, f] = l.useState(0),
                  p = null != a ? a : d,
                  v = tn(null != s ? s : f),
                  m = l.useRef([]),
                  g = n && "function" != typeof n ? n.props : {},
                  h = l.useMemo(
                    () => ({ activeIndex: p, onNavigate: v }),
                    [p, v],
                  ),
                  b = i > 1,
                  y = {
                    ...c,
                    ...g,
                    ref: t,
                    "aria-orientation": "both" === r ? void 0 : r,
                    onKeyDown(e) {
                      null == c.onKeyDown || c.onKeyDown(e),
                        null == g.onKeyDown || g.onKeyDown(e),
                        (function (e) {
                          if (!tC.includes(e.key)) return;
                          let t = ts(m, u),
                            n = tc(m, u),
                            l = p;
                          b &&
                            (l = tf(m, {
                              event: e,
                              orientation: r,
                              loop: o,
                              cols: i,
                              disabledIndices: u,
                              minIndex: t,
                              maxIndex: n,
                              prevIndex: p,
                            }));
                          let a = {
                              horizontal: [tl],
                              vertical: [to],
                              both: [tl, to],
                            }[r],
                            s = {
                              horizontal: [ti],
                              vertical: [tr],
                              both: [ti, tr],
                            }[r],
                            c = b
                              ? tC
                              : { horizontal: tw, vertical: t_, both: tC }[r];
                          l === p &&
                            [...a, ...s].includes(e.key) &&
                            (l =
                              o && l === n && a.includes(e.key)
                                ? t
                                : o && l === t && s.includes(e.key)
                                  ? n
                                  : td(m, {
                                      startingIndex: l,
                                      decrement: s.includes(e.key),
                                      disabledIndices: u,
                                    })),
                            l === p ||
                              ta(m, l) ||
                              (e.stopPropagation(),
                              c.includes(e.key) && e.preventDefault(),
                              v(l),
                              queueMicrotask(() => {
                                tv(m.current[l]);
                              }));
                        })(e);
                    },
                  };
                return l.createElement(
                  tE.Provider,
                  { value: h },
                  l.createElement(tb, { elementsRef: m }, tx(n, y)),
                );
              }),
              tS = l.forwardRef(function (e, t) {
                let { render: n, ...r } = e,
                  o = n && "function" != typeof n ? n.props : {},
                  { activeIndex: i, onNavigate: u } = l.useContext(tE),
                  { ref: a, index: s } = ty(),
                  c = te([a, t, o.ref]),
                  d = i === s;
                return tx(n, {
                  ...r,
                  ...o,
                  ref: c,
                  tabIndex: d ? 0 : -1,
                  "data-active": d ? "" : void 0,
                  onFocus(e) {
                    null == r.onFocus || r.onFocus(e),
                      null == o.onFocus || o.onFocus(e),
                      u(s);
                  },
                });
              });
            function tT() {
              return (tT = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }).apply(this, arguments);
            }
            let tO = !1,
              tk = 0,
              tN = () => "floating-ui-" + tk++,
              tL =
                l["useId".toString()] ||
                function () {
                  let [e, t] = l.useState(() => (tO ? tN() : void 0));
                  return (
                    tm(() => {
                      null == e && t(tN());
                    }, []),
                    l.useEffect(() => {
                      tO || (tO = !0);
                    }, []),
                    e
                  );
                },
              tI = l.forwardRef(function (e, t) {
                let {
                    context: {
                      placement: n,
                      elements: { floating: r },
                      middlewareData: { arrow: o },
                    },
                    width: i = 14,
                    height: u = 7,
                    tipRadius: a = 0,
                    strokeWidth: s = 0,
                    staticOffset: c,
                    stroke: d,
                    d: f,
                    style: { transform: p, ...v } = {},
                    ...m
                  } = e,
                  g = tL();
                if (!r) return null;
                let h = (s *= 2) / 2,
                  b = (i / 2) * (-(a / 8) + 1),
                  y = ((u / 2) * a) / 4,
                  [x, E] = n.split("-"),
                  w = eL.isRTL(r),
                  _ = !!f,
                  C = "top" === x || "bottom" === x,
                  R = c && "end" === E ? "bottom" : "top",
                  S = c && "end" === E ? "right" : "left";
                c && w && (S = "end" === E ? "left" : "right");
                let T = (null == o ? void 0 : o.x) != null ? c || o.x : "",
                  O = (null == o ? void 0 : o.y) != null ? c || o.y : "",
                  k =
                    f ||
                    "M0,0 H" +
                      i +
                      " L" +
                      (i - b) +
                      "," +
                      (u - y) +
                      (" Q" + i / 2 + "," + u + " ") +
                      b +
                      "," +
                      (u - y) +
                      " Z",
                  N = {
                    top: _ ? "rotate(180deg)" : "",
                    left: _ ? "rotate(90deg)" : "rotate(-90deg)",
                    bottom: _ ? "" : "rotate(180deg)",
                    right: _ ? "rotate(-90deg)" : "rotate(90deg)",
                  }[x];
                return l.createElement(
                  "svg",
                  tT({}, m, {
                    "aria-hidden": !0,
                    ref: t,
                    width: _ ? i : i + s,
                    height: i,
                    viewBox: "0 0 " + i + " " + (u > i ? u : i),
                    style: {
                      position: "absolute",
                      pointerEvents: "none",
                      [S]: T,
                      [R]: O,
                      [x]: C || _ ? "100%" : "calc(100% - " + s / 2 + "px)",
                      transform: "" + N + (null != p ? p : ""),
                      ...v,
                    },
                  }),
                  s > 0 &&
                    l.createElement("path", {
                      clipPath: "url(#" + g + ")",
                      fill: "none",
                      stroke: d,
                      strokeWidth: s + (f ? 0 : 1),
                      d: k,
                    }),
                  l.createElement("path", {
                    stroke: s && !f ? m.fill : "none",
                    d: k,
                  }),
                  l.createElement(
                    "clipPath",
                    { id: g },
                    l.createElement("rect", {
                      x: -h,
                      y: h * (_ ? -1 : 1),
                      width: i + s,
                      height: i,
                    }),
                  ),
                );
              });
            function tP() {
              let e = new Map();
              return {
                emit(t, n) {
                  var r;
                  null == (r = e.get(t)) || r.forEach((e) => e(n));
                },
                on(t, n) {
                  e.set(t, [...(e.get(t) || []), n]);
                },
                off(t, n) {
                  var r;
                  e.set(
                    t,
                    (null == (r = e.get(t))
                      ? void 0
                      : r.filter((e) => e !== n)) || [],
                  );
                },
              };
            }
            let tA = l.createContext(null),
              tM = l.createContext(null),
              tB = () => {
                var e;
                return (null == (e = l.useContext(tA)) ? void 0 : e.id) || null;
              },
              tj = () => l.useContext(tM);
            function tD(e) {
              let t = tL(),
                n = tj(),
                r = tB(),
                o = e || r;
              return (
                tm(() => {
                  let e = { id: t, parentId: o };
                  return (
                    null == n || n.addNode(e),
                    () => {
                      null == n || n.removeNode(e);
                    }
                  );
                }, [n, t, o]),
                t
              );
            }
            function tV(e) {
              let { children: t, id: n } = e,
                r = tB();
              return l.createElement(
                tA.Provider,
                { value: l.useMemo(() => ({ id: n, parentId: r }), [n, r]) },
                t,
              );
            }
            function tF(e) {
              let { children: t } = e,
                n = l.useRef([]),
                r = l.useCallback((e) => {
                  n.current = [...n.current, e];
                }, []),
                o = l.useCallback((e) => {
                  n.current = n.current.filter((t) => t !== e);
                }, []),
                i = l.useState(() => tP())[0];
              return l.createElement(
                tM.Provider,
                {
                  value: l.useMemo(
                    () => ({
                      nodesRef: n,
                      addNode: r,
                      removeNode: o,
                      events: i,
                    }),
                    [n, r, o, i],
                  ),
                },
                t,
              );
            }
            function tG(e) {
              return "data-floating-ui-" + e;
            }
            function tU(e) {
              let t = (0, l.useRef)(e);
              return (
                tm(() => {
                  t.current = e;
                }),
                t
              );
            }
            let tW = tG("safe-polygon");
            function tz(e, t, n) {
              return n && !I(n)
                ? 0
                : "number" == typeof e
                  ? e
                  : null == e
                    ? void 0
                    : e[t];
            }
            function tH(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: o,
                  events: i,
                  elements: { domReference: u, floating: a },
                  refs: s,
                } = e,
                {
                  enabled: c = !0,
                  delay: f = 0,
                  handleClose: p = null,
                  mouseOnly: v = !1,
                  restMs: m = 0,
                  move: g = !0,
                } = t,
                h = tj(),
                b = tB(),
                y = tU(p),
                x = tU(f),
                E = l.useRef(),
                w = l.useRef(),
                C = l.useRef(),
                R = l.useRef(),
                S = l.useRef(!0),
                T = l.useRef(!1),
                O = l.useRef(() => {}),
                k = l.useCallback(() => {
                  var e;
                  let t = null == (e = o.current.openEvent) ? void 0 : e.type;
                  return (
                    (null == t ? void 0 : t.includes("mouse")) &&
                    "mousedown" !== t
                  );
                }, [o]);
              l.useEffect(() => {
                if (c)
                  return (
                    i.on("dismiss", e),
                    () => {
                      i.off("dismiss", e);
                    }
                  );
                function e() {
                  clearTimeout(w.current),
                    clearTimeout(R.current),
                    (S.current = !0);
                }
              }, [c, i]),
                l.useEffect(() => {
                  if (!c || !y.current || !n) return;
                  function e(e) {
                    k() && r(!1, e);
                  }
                  let t = P(a).documentElement;
                  return (
                    t.addEventListener("mouseleave", e),
                    () => {
                      t.removeEventListener("mouseleave", e);
                    }
                  );
                }, [a, n, r, c, y, o, k]);
              let N = l.useCallback(
                  function (e, t) {
                    void 0 === t && (t = !0);
                    let n = tz(x.current, "close", E.current);
                    n && !C.current
                      ? (clearTimeout(w.current),
                        (w.current = setTimeout(() => r(!1, e), n)))
                      : t && (clearTimeout(w.current), r(!1, e));
                  },
                  [x, r],
                ),
                L = l.useCallback(() => {
                  O.current(), (C.current = void 0);
                }, []),
                A = l.useCallback(() => {
                  if (T.current) {
                    let e = P(s.floating.current).body;
                    (e.style.pointerEvents = ""),
                      e.removeAttribute(tW),
                      (T.current = !1);
                  }
                }, [s]);
              return (
                l.useEffect(() => {
                  if (c && d(u))
                    return (
                      n && u.addEventListener("mouseleave", s),
                      null == a || a.addEventListener("mouseleave", s),
                      g && u.addEventListener("mousemove", i, { once: !0 }),
                      u.addEventListener("mouseenter", i),
                      u.addEventListener("mouseleave", l),
                      () => {
                        n && u.removeEventListener("mouseleave", s),
                          null == a || a.removeEventListener("mouseleave", s),
                          g && u.removeEventListener("mousemove", i),
                          u.removeEventListener("mouseenter", i),
                          u.removeEventListener("mouseleave", l);
                      }
                    );
                  function t() {
                    return (
                      !!o.current.openEvent &&
                      ["click", "mousedown"].includes(o.current.openEvent.type)
                    );
                  }
                  function i(e) {
                    if (
                      (clearTimeout(w.current),
                      (S.current = !1),
                      (v && !I(E.current)) ||
                        (m > 0 && 0 === tz(x.current, "open")))
                    )
                      return;
                    let t = tz(x.current, "open", E.current);
                    t
                      ? (w.current = setTimeout(() => {
                          r(!0, e);
                        }, t))
                      : r(!0, e);
                  }
                  function l(r) {
                    if (t()) return;
                    O.current();
                    let o = P(a);
                    if ((clearTimeout(R.current), y.current)) {
                      n || clearTimeout(w.current),
                        (C.current = y.current({
                          ...e,
                          tree: h,
                          x: r.clientX,
                          y: r.clientY,
                          onClose() {
                            A(), L(), N(r);
                          },
                        }));
                      let t = C.current;
                      o.addEventListener("mousemove", t),
                        (O.current = () => {
                          o.removeEventListener("mousemove", t);
                        });
                      return;
                    }
                    ("touch" === E.current && _(a, r.relatedTarget)) || N(r);
                  }
                  function s(n) {
                    t() ||
                      null == y.current ||
                      y.current({
                        ...e,
                        tree: h,
                        x: n.clientX,
                        y: n.clientY,
                        onClose() {
                          A(), L(), N(n);
                        },
                      })(n);
                  }
                }, [u, a, c, e, v, m, g, N, L, A, r, n, h, x, y, o]),
                tm(() => {
                  var e, t, r;
                  if (
                    c &&
                    n &&
                    null != (e = y.current) &&
                    e.__options.blockPointerEvents &&
                    k()
                  ) {
                    let e = P(a).body;
                    if (
                      (e.setAttribute(tW, ""),
                      (e.style.pointerEvents = "none"),
                      (T.current = !0),
                      d(u) && a)
                    ) {
                      let e =
                        null == h
                          ? void 0
                          : null ==
                              (t = h.nodesRef.current.find((e) => e.id === b))
                            ? void 0
                            : null == (r = t.context)
                              ? void 0
                              : r.elements.floating;
                      return (
                        e && (e.style.pointerEvents = ""),
                        (u.style.pointerEvents = "auto"),
                        (a.style.pointerEvents = "auto"),
                        () => {
                          (u.style.pointerEvents = ""),
                            (a.style.pointerEvents = "");
                        }
                      );
                    }
                  }
                }, [c, n, b, a, u, h, y, o, k]),
                tm(() => {
                  n || ((E.current = void 0), L(), A());
                }, [n, L, A]),
                l.useEffect(
                  () => () => {
                    L(), clearTimeout(w.current), clearTimeout(R.current), A();
                  },
                  [c, u, L, A],
                ),
                l.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    E.current = e.pointerType;
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove(e) {
                        n ||
                          0 === m ||
                          (clearTimeout(R.current),
                          (R.current = setTimeout(() => {
                            S.current || r(!0, e.nativeEvent);
                          }, m)));
                      },
                    },
                    floating: {
                      onMouseEnter() {
                        clearTimeout(w.current);
                      },
                      onMouseLeave(e) {
                        i.emit("dismiss", {
                          type: "mouseLeave",
                          data: { returnFocus: !1 },
                        }),
                          N(e.nativeEvent, !1);
                      },
                    },
                  };
                }, [i, c, m, n, r, N])
              );
            }
            let tK = l.createContext({
                delay: 0,
                initialDelay: 0,
                timeoutMs: 0,
                currentId: null,
                setCurrentId: () => {},
                setState: () => {},
                isInstantPhase: !1,
              }),
              tY = () => l.useContext(tK),
              tZ = (e) => {
                let { children: t, delay: n, timeoutMs: r = 0 } = e,
                  [o, i] = l.useReducer((e, t) => ({ ...e, ...t }), {
                    delay: n,
                    timeoutMs: r,
                    initialDelay: n,
                    currentId: null,
                    isInstantPhase: !1,
                  }),
                  u = l.useRef(null),
                  a = l.useCallback((e) => {
                    i({ currentId: e });
                  }, []);
                return (
                  tm(() => {
                    o.currentId
                      ? null === u.current
                        ? (u.current = o.currentId)
                        : i({ isInstantPhase: !0 })
                      : (i({ isInstantPhase: !1 }), (u.current = null));
                  }, [o.currentId]),
                  l.createElement(
                    tK.Provider,
                    {
                      value: l.useMemo(
                        () => ({ ...o, setState: i, setCurrentId: a }),
                        [o, i, a],
                      ),
                    },
                    t,
                  )
                );
              },
              tX = (e, t) => {
                let { open: n, onOpenChange: r } = e,
                  { id: o } = t,
                  {
                    currentId: i,
                    setCurrentId: l,
                    initialDelay: u,
                    setState: a,
                    timeoutMs: s,
                  } = tY();
                tm(() => {
                  i &&
                    (a({ delay: { open: 1, close: tz(u, "close") } }),
                    i !== o && r(!1));
                }, [o, r, a, i, u]),
                  tm(() => {
                    function e() {
                      r(!1), a({ delay: u, currentId: null });
                    }
                    if (!n && i === o) {
                      if (s) {
                        let t = window.setTimeout(e, s);
                        return () => {
                          clearTimeout(t);
                        };
                      }
                      e();
                    }
                  }, [n, a, i, o, r, u, s]),
                  tm(() => {
                    n && l(o);
                  }, [n, l, o]);
              };
            function tq(e, t) {
              let n = e.filter((e) => {
                  var n;
                  return (
                    e.parentId === t &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                }),
                r = n;
              for (; r.length; )
                (r = e.filter((e) => {
                  var t;
                  return null == (t = r)
                    ? void 0
                    : t.some((t) => {
                        var n;
                        return (
                          e.parentId === t.id &&
                          (null == (n = e.context) ? void 0 : n.open)
                        );
                      });
                })),
                  (n = n.concat(r));
              return n;
            }
            let t$ = new WeakMap(),
              tJ = new WeakSet(),
              tQ = {},
              t0 = 0,
              t1 = () =>
                "undefined" != typeof HTMLElement &&
                "inert" in HTMLElement.prototype,
              t9 = (e) => e && (e.host || t9(e.parentNode)),
              t8 = (e, t) =>
                t
                  .map((t) => {
                    if (e.contains(t)) return t;
                    let n = t9(t);
                    return e.contains(n) ? n : null;
                  })
                  .filter((e) => null != e);
            function t4(e, t, n) {
              void 0 === t && (t = !1), void 0 === n && (n = !1);
              let r = P(e[0]).body;
              return (function (e, t, n, r) {
                let o = "data-floating-ui-inert",
                  i = r ? "inert" : n ? "aria-hidden" : null,
                  l = t8(t, e),
                  u = new Set(),
                  a = new Set(l),
                  s = [];
                tQ[o] || (tQ[o] = new WeakMap());
                let c = tQ[o];
                return (
                  l.forEach(function e(t) {
                    !(!t || u.has(t)) &&
                      (u.add(t), t.parentNode && e(t.parentNode));
                  }),
                  (function e(t) {
                    !t ||
                      a.has(t) ||
                      Array.prototype.forEach.call(t.children, (t) => {
                        if (u.has(t)) e(t);
                        else {
                          let e = i ? t.getAttribute(i) : null,
                            n = null !== e && "false" !== e,
                            r = (t$.get(t) || 0) + 1,
                            l = (c.get(t) || 0) + 1;
                          t$.set(t, r),
                            c.set(t, l),
                            s.push(t),
                            1 === r && n && tJ.add(t),
                            1 === l && t.setAttribute(o, ""),
                            !n && i && t.setAttribute(i, "true");
                        }
                      });
                  })(t),
                  u.clear(),
                  t0++,
                  () => {
                    s.forEach((e) => {
                      let t = (t$.get(e) || 0) - 1,
                        n = (c.get(e) || 0) - 1;
                      t$.set(e, t),
                        c.set(e, n),
                        t ||
                          (!tJ.has(e) && i && e.removeAttribute(i),
                          tJ.delete(e)),
                        n || e.removeAttribute(o);
                    }),
                      --t0 ||
                        ((t$ = new WeakMap()),
                        (t$ = new WeakMap()),
                        (tJ = new WeakSet()),
                        (tQ = {}));
                  }
                );
              })(
                e.concat(Array.from(r.querySelectorAll("[aria-live]"))),
                r,
                t,
                n,
              );
            }
            let t5 = () => ({
              getShadowRoot: !0,
              displayCheck:
                "function" == typeof ResizeObserver &&
                ResizeObserver.toString().includes("[native code]")
                  ? "full"
                  : "none",
            });
            function t2(e, t) {
              let n = e7(e, t5());
              "prev" === t && n.reverse();
              let r = n.indexOf(w(P(e)));
              return n.slice(r + 1)[0];
            }
            function t3() {
              return t2(document.body, "next");
            }
            function t6() {
              return t2(document.body, "prev");
            }
            function t7(e, t) {
              let n = t || e.currentTarget,
                r = e.relatedTarget;
              return !r || !_(n, r);
            }
            let ne = {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "fixed",
              whiteSpace: "nowrap",
              width: "1px",
              top: 0,
              left: 0,
            };
            function nt(e) {
              "Tab" === e.key && (e.target, clearTimeout(r));
            }
            let nn = l.forwardRef(function (e, t) {
                let [n, r] = l.useState();
                tm(
                  () => (
                    k() && r("button"),
                    document.addEventListener("keydown", nt),
                    () => {
                      document.removeEventListener("keydown", nt);
                    }
                  ),
                  [],
                );
                let o = {
                  ref: t,
                  tabIndex: 0,
                  role: n,
                  "aria-hidden": !n || void 0,
                  [tG("focus-guard")]: "",
                  style: ne,
                };
                return l.createElement("span", tT({}, e, o));
              }),
              nr = l.createContext(null);
            function no(e) {
              let { id: t, root: n } = void 0 === e ? {} : e,
                [r, o] = l.useState(null),
                i = tL(),
                u = nl(),
                a = l.useMemo(
                  () => ({ id: t, root: n, portalContext: u, uniqueId: i }),
                  [t, n, u, i],
                ),
                s = l.useRef();
              return (
                tm(
                  () => () => {
                    null == r || r.remove();
                  },
                  [r, a],
                ),
                tm(() => {
                  if (s.current === a) return;
                  s.current = a;
                  let { id: e, root: t, portalContext: n, uniqueId: r } = a,
                    i = e ? document.getElementById(e) : null,
                    l = tG("portal");
                  if (i) {
                    let e = document.createElement("div");
                    (e.id = r), e.setAttribute(l, ""), i.appendChild(e), o(e);
                  } else {
                    let i = t || (null == n ? void 0 : n.portalNode);
                    i && !d(i) && (i = i.current), (i = i || document.body);
                    let u = null;
                    e &&
                      (((u = document.createElement("div")).id = e),
                      i.appendChild(u));
                    let a = document.createElement("div");
                    (a.id = r),
                      a.setAttribute(l, ""),
                      (i = u || i).appendChild(a),
                      o(a);
                  }
                }, [a]),
                r
              );
            }
            function ni(e) {
              let {
                  children: t,
                  id: n,
                  root: r = null,
                  preserveTabOrder: o = !0,
                } = e,
                i = no({ id: n, root: r }),
                [u, a] = l.useState(null),
                s = l.useRef(null),
                c = l.useRef(null),
                d = l.useRef(null),
                f = l.useRef(null),
                p = !!u && !u.modal && u.open && o && !!(r || i);
              return (
                l.useEffect(() => {
                  if (i && o && (null == u || !u.modal))
                    return (
                      i.addEventListener("focusin", e, !0),
                      i.addEventListener("focusout", e, !0),
                      () => {
                        i.removeEventListener("focusin", e, !0),
                          i.removeEventListener("focusout", e, !0);
                      }
                    );
                  function e(e) {
                    i &&
                      t7(e) &&
                      ("focusin" === e.type
                        ? function (e) {
                            e.querySelectorAll("[data-tabindex]").forEach(
                              (e) => {
                                let t = e.dataset.tabindex;
                                delete e.dataset.tabindex,
                                  t
                                    ? e.setAttribute("tabindex", t)
                                    : e.removeAttribute("tabindex");
                              },
                            );
                          }
                        : function (e) {
                            e7(e, t5()).forEach((e) => {
                              (e.dataset.tabindex =
                                e.getAttribute("tabindex") || ""),
                                e.setAttribute("tabindex", "-1");
                            });
                          })(i);
                  }
                }, [i, o, null == u ? void 0 : u.modal]),
                l.createElement(
                  nr.Provider,
                  {
                    value: l.useMemo(
                      () => ({
                        preserveTabOrder: o,
                        beforeOutsideRef: s,
                        afterOutsideRef: c,
                        beforeInsideRef: d,
                        afterInsideRef: f,
                        portalNode: i,
                        setFocusManagerState: a,
                      }),
                      [o, i],
                    ),
                  },
                  p &&
                    i &&
                    l.createElement(nn, {
                      "data-type": "outside",
                      ref: s,
                      onFocus: (e) => {
                        if (t7(e, i)) {
                          var t;
                          null == (t = d.current) || t.focus();
                        } else {
                          let e =
                            t6() ||
                            (null == u ? void 0 : u.refs.domReference.current);
                          null == e || e.focus();
                        }
                      },
                    }),
                  p &&
                    i &&
                    l.createElement("span", { "aria-owns": i.id, style: ne }),
                  i && (0, eA.createPortal)(t, i),
                  p &&
                    i &&
                    l.createElement(nn, {
                      "data-type": "outside",
                      ref: c,
                      onFocus: (e) => {
                        if (t7(e, i)) {
                          var t;
                          null == (t = f.current) || t.focus();
                        } else {
                          let t =
                            t3() ||
                            (null == u ? void 0 : u.refs.domReference.current);
                          null == t || t.focus(),
                            (null == u ? void 0 : u.closeOnFocusOut) &&
                              (null == u || u.onOpenChange(!1, e.nativeEvent));
                        }
                      },
                    }),
                )
              );
            }
            let nl = () => l.useContext(nr),
              nu = l.forwardRef(function (e, t) {
                return l.createElement(
                  "button",
                  tT({}, e, {
                    type: "button",
                    ref: t,
                    tabIndex: -1,
                    style: ne,
                  }),
                );
              });
            function na(e) {
              let {
                  context: t,
                  children: n,
                  disabled: r = !1,
                  order: o = ["content"],
                  guards: i = !0,
                  initialFocus: u = 0,
                  returnFocus: a = !0,
                  modal: s = !0,
                  visuallyHiddenDismiss: c = !1,
                  closeOnFocusOut: d = !0,
                } = e,
                {
                  open: p,
                  refs: v,
                  nodeId: m,
                  onOpenChange: g,
                  events: h,
                  dataRef: b,
                  elements: { domReference: y, floating: x },
                } = t,
                E = "number" == typeof u && u < 0,
                C =
                  (null == y ? void 0 : y.getAttribute("role")) ===
                    "combobox" &&
                  B(y) &&
                  E,
                R = !C && s,
                S = !t1() || i,
                T = tU(o),
                O = tU(u),
                k = tU(a),
                N = tj(),
                L = nl(),
                I = l.useRef(null),
                A = l.useRef(null),
                D = l.useRef(!1),
                V = l.useRef(null),
                F = l.useRef(!1),
                G = null != L,
                U = l.useCallback(
                  function (e) {
                    return void 0 === e && (e = x), e ? e7(e, t5()) : [];
                  },
                  [x],
                ),
                W = l.useCallback(
                  (e) => {
                    let t = U(e);
                    return T.current
                      .map((e) =>
                        y && "reference" === e
                          ? y
                          : x && "floating" === e
                            ? x
                            : t,
                      )
                      .filter(Boolean)
                      .flat();
                  },
                  [y, x, T, U],
                );
              function z(e) {
                return !r && c && R
                  ? l.createElement(
                      nu,
                      {
                        ref: "start" === e ? I : A,
                        onClick: (e) => g(!1, e.nativeEvent),
                      },
                      "string" == typeof c ? c : "Dismiss",
                    )
                  : null;
              }
              l.useEffect(() => {
                if (r || !R) return;
                function e(e) {
                  if ("Tab" === e.key) {
                    _(x, w(P(x))) && 0 === U().length && !C && j(e);
                    let t = W(),
                      n = M(e);
                    "reference" === T.current[0] &&
                      n === y &&
                      (j(e), e.shiftKey ? tv(t[t.length - 1]) : tv(t[1])),
                      "floating" === T.current[1] &&
                        n === x &&
                        e.shiftKey &&
                        (j(e), tv(t[0]));
                  }
                }
                let t = P(x);
                return (
                  t.addEventListener("keydown", e),
                  () => {
                    t.removeEventListener("keydown", e);
                  }
                );
              }, [r, y, x, R, T, v, C, U, W]),
                l.useEffect(() => {
                  if (!r && d && x && f(y))
                    return (
                      y.addEventListener("focusout", t),
                      y.addEventListener("pointerdown", e),
                      R || x.addEventListener("focusout", t),
                      () => {
                        y.removeEventListener("focusout", t),
                          y.removeEventListener("pointerdown", e),
                          R || x.removeEventListener("focusout", t);
                      }
                    );
                  function e() {
                    (F.current = !0),
                      setTimeout(() => {
                        F.current = !1;
                      });
                  }
                  function t(e) {
                    let t = e.relatedTarget;
                    queueMicrotask(() => {
                      let n = !(
                        _(y, t) ||
                        _(x, t) ||
                        _(t, x) ||
                        _(null == L ? void 0 : L.portalNode, t) ||
                        (null != t && t.hasAttribute(tG("focus-guard"))) ||
                        (N &&
                          (tq(N.nodesRef.current, m).find((e) => {
                            var n, r;
                            return (
                              _(
                                null == (n = e.context)
                                  ? void 0
                                  : n.elements.floating,
                                t,
                              ) ||
                              _(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.domReference,
                                t,
                              )
                            );
                          }) ||
                            (function (e, t) {
                              var n;
                              let r = [],
                                o =
                                  null == (n = e.find((e) => e.id === t))
                                    ? void 0
                                    : n.parentId;
                              for (; o; ) {
                                let t = e.find((e) => e.id === o);
                                (o = null == t ? void 0 : t.parentId),
                                  t && (r = r.concat(t));
                              }
                              return r;
                            })(N.nodesRef.current, m).find((e) => {
                              var n, r;
                              return (
                                (null == (n = e.context)
                                  ? void 0
                                  : n.elements.floating) === t ||
                                (null == (r = e.context)
                                  ? void 0
                                  : r.elements.domReference) === t
                              );
                            })))
                      );
                      t &&
                        n &&
                        !F.current &&
                        t !== V.current &&
                        ((D.current = !0), g(!1, e));
                    });
                  }
                }, [r, y, x, R, m, N, L, g, d]),
                l.useEffect(() => {
                  var e;
                  if (r) return;
                  let t = Array.from(
                    (null == L
                      ? void 0
                      : null == (e = L.portalNode)
                        ? void 0
                        : e.querySelectorAll("[" + tG("portal") + "]")) || [],
                  );
                  if (x) {
                    let e = [
                        x,
                        ...t,
                        I.current,
                        A.current,
                        T.current.includes("reference") || C ? y : null,
                      ].filter((e) => null != e),
                      n = s || C ? t4(e, S, !S) : t4(e);
                    return () => {
                      n();
                    };
                  }
                }, [r, y, x, s, T, L, C, S]),
                tm(() => {
                  if (r || !x) return;
                  let e = w(P(x));
                  queueMicrotask(() => {
                    let t = W(x),
                      n = O.current,
                      r = ("number" == typeof n ? t[n] : n.current) || x,
                      o = _(x, e);
                    E || o || !p || tv(r, { preventScroll: r === x });
                  });
                }, [r, p, x, E, W, O]),
                tm(() => {
                  if (r || !x) return;
                  let e = !1,
                    t = P(x),
                    n = w(t),
                    o = b.current;
                  function i(t) {
                    if (
                      ("escapeKey" === t.type &&
                        v.domReference.current &&
                        (V.current = v.domReference.current),
                      ["referencePress", "escapeKey"].includes(t.type))
                    )
                      return;
                    let n = t.data.returnFocus;
                    "object" == typeof n
                      ? ((D.current = !1), (e = n.preventScroll))
                      : (D.current = !n);
                  }
                  return (
                    (V.current = n),
                    h.on("dismiss", i),
                    () => {
                      h.off("dismiss", i);
                      let n = w(t);
                      (_(x, n) ||
                        (N &&
                          tq(N.nodesRef.current, m).some((e) => {
                            var t;
                            return _(
                              null == (t = e.context)
                                ? void 0
                                : t.elements.floating,
                              n,
                            );
                          })) ||
                        (o.openEvent &&
                          ["click", "mousedown"].includes(o.openEvent.type))) &&
                        v.domReference.current &&
                        (V.current = v.domReference.current),
                        k.current &&
                          f(V.current) &&
                          !D.current &&
                          tv(V.current, {
                            cancelPrevious: !1,
                            preventScroll: e,
                          });
                    }
                  );
                }, [r, x, k, b, v, h, N, m]),
                tm(() => {
                  if (!r && L)
                    return (
                      L.setFocusManagerState({
                        modal: R,
                        closeOnFocusOut: d,
                        open: p,
                        onOpenChange: g,
                        refs: v,
                      }),
                      () => {
                        L.setFocusManagerState(null);
                      }
                    );
                }, [r, L, R, p, g, v, d]),
                tm(() => {
                  if (r || !x || "function" != typeof MutationObserver || E)
                    return;
                  let e = () => {
                    let e = x.getAttribute("tabindex");
                    T.current.includes("floating") ||
                    (w(P(x)) !== v.domReference.current && 0 === U().length)
                      ? "0" !== e && x.setAttribute("tabindex", "0")
                      : "-1" !== e && x.setAttribute("tabindex", "-1");
                  };
                  e();
                  let t = new MutationObserver(e);
                  return (
                    t.observe(x, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    }),
                    () => {
                      t.disconnect();
                    }
                  );
                }, [r, x, v, T, U, E]);
              let H = !r && S && (G || R);
              return l.createElement(
                l.Fragment,
                null,
                H &&
                  l.createElement(nn, {
                    "data-type": "inside",
                    ref: null == L ? void 0 : L.beforeInsideRef,
                    onFocus: (e) => {
                      if (R) {
                        let e = W();
                        tv("reference" === o[0] ? e[0] : e[e.length - 1]);
                      } else if (
                        null != L &&
                        L.preserveTabOrder &&
                        L.portalNode
                      ) {
                        if (((D.current = !1), t7(e, L.portalNode))) {
                          let e = t3() || y;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = L.beforeOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
                !C && z("start"),
                n,
                z("end"),
                H &&
                  l.createElement(nn, {
                    "data-type": "inside",
                    ref: null == L ? void 0 : L.afterInsideRef,
                    onFocus: (e) => {
                      if (R) tv(W()[0]);
                      else if (
                        null != L &&
                        L.preserveTabOrder &&
                        L.portalNode
                      ) {
                        if ((d && (D.current = !0), t7(e, L.portalNode))) {
                          let e = t6() || y;
                          null == e || e.focus();
                        } else {
                          var t;
                          null == (t = L.afterOutsideRef.current) || t.focus();
                        }
                      }
                    },
                  }),
              );
            }
            let ns = new Set(),
              nc = l.forwardRef(function (e, t) {
                let { lockScroll: n = !1, ...r } = e,
                  o = tL();
                return (
                  tm(() => {
                    if (!n) return;
                    ns.add(o);
                    let e = /iP(hone|ad|od)|iOS/.test(C()),
                      t = document.body.style,
                      r =
                        Math.round(
                          document.documentElement.getBoundingClientRect().left,
                        ) + document.documentElement.scrollLeft
                          ? "paddingLeft"
                          : "paddingRight",
                      i =
                        window.innerWidth -
                        document.documentElement.clientWidth,
                      l = t.left ? parseFloat(t.left) : window.pageXOffset,
                      u = t.top ? parseFloat(t.top) : window.pageYOffset;
                    if (((t.overflow = "hidden"), i && (t[r] = i + "px"), e)) {
                      var a, s;
                      let e =
                        (null == (a = window.visualViewport)
                          ? void 0
                          : a.offsetLeft) || 0;
                      Object.assign(t, {
                        position: "fixed",
                        top:
                          -(
                            u -
                            Math.floor(
                              (null == (s = window.visualViewport)
                                ? void 0
                                : s.offsetTop) || 0,
                            )
                          ) + "px",
                        left: -(l - Math.floor(e)) + "px",
                        right: "0",
                      });
                    }
                    return () => {
                      ns.delete(o),
                        0 === ns.size &&
                          (Object.assign(t, { overflow: "", [r]: "" }),
                          e &&
                            (Object.assign(t, {
                              position: "",
                              top: "",
                              left: "",
                              right: "",
                            }),
                            window.scrollTo(l, u)));
                    };
                  }, [o, n]),
                  l.createElement(
                    "div",
                    tT({ ref: t }, r, {
                      style: {
                        position: "fixed",
                        overflow: "auto",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...r.style,
                      },
                    }),
                  )
                );
              });
            function nd(e) {
              return f(e.target) && "BUTTON" === e.target.tagName;
            }
            function nf(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  dataRef: o,
                  elements: { domReference: i },
                } = e,
                {
                  enabled: u = !0,
                  event: a = "click",
                  toggle: s = !0,
                  ignoreMouse: c = !1,
                  keyboardHandlers: d = !0,
                } = t,
                f = l.useRef(),
                p = l.useRef(!1);
              return l.useMemo(
                () =>
                  u
                    ? {
                        reference: {
                          onPointerDown(e) {
                            f.current = e.pointerType;
                          },
                          onMouseDown(e) {
                            0 !== e.button ||
                              (I(f.current, !0) && c) ||
                              "click" === a ||
                              (n &&
                              s &&
                              (!o.current.openEvent ||
                                "mousedown" === o.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : (e.preventDefault(), r(!0, e.nativeEvent)));
                          },
                          onClick(e) {
                            if ("mousedown" === a && f.current) {
                              f.current = void 0;
                              return;
                            }
                            (I(f.current, !0) && c) ||
                              (n &&
                              s &&
                              (!o.current.openEvent ||
                                "click" === o.current.openEvent.type)
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                          onKeyDown(e) {
                            (f.current = void 0),
                              e.defaultPrevented ||
                                !d ||
                                nd(e) ||
                                (" " !== e.key ||
                                  B(i) ||
                                  (e.preventDefault(), (p.current = !0)),
                                "Enter" === e.key &&
                                  (n && s
                                    ? r(!1, e.nativeEvent)
                                    : r(!0, e.nativeEvent)));
                          },
                          onKeyUp(e) {
                            !(e.defaultPrevented || !d || nd(e) || B(i)) &&
                              " " === e.key &&
                              p.current &&
                              ((p.current = !1),
                              n && s
                                ? r(!1, e.nativeEvent)
                                : r(!0, e.nativeEvent));
                          },
                        },
                      }
                    : {},
                [u, o, a, c, d, i, s, n, r],
              );
            }
            function np(e) {
              return null != e && null != e.clientX;
            }
            function nv(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  refs: r,
                  dataRef: o,
                  elements: { floating: i },
                } = e,
                {
                  enabled: u = !0,
                  axis: s = "both",
                  x: c = null,
                  y: d = null,
                } = t,
                f = l.useRef(!1),
                p = l.useRef(null),
                [v, m] = l.useState(),
                [g, h] = l.useState([]),
                b = tn((e, t) => {
                  if (!f.current) {
                    var n, i;
                    let l, u, a;
                    (!o.current.openEvent || np(o.current.openEvent)) &&
                      r.setPositionReference(
                        ((n = r.domReference),
                        (i = {
                          x: e,
                          y: t,
                          axis: s,
                          dataRef: o,
                          pointerType: v,
                        }),
                        (l = null),
                        (u = null),
                        (a = !1),
                        {
                          contextElement: n.current || void 0,
                          getBoundingClientRect() {
                            var e, t;
                            let r = (null == (e = n.current)
                                ? void 0
                                : e.getBoundingClientRect()) || {
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0,
                              },
                              o = "x" === i.axis || "both" === i.axis,
                              s = "y" === i.axis || "both" === i.axis,
                              c =
                                ["mouseenter", "mousemove"].includes(
                                  (null == (t = i.dataRef.current.openEvent)
                                    ? void 0
                                    : t.type) || "",
                                ) && "touch" !== i.pointerType,
                              d = r.width,
                              f = r.height,
                              p = r.x,
                              v = r.y;
                            return (
                              null == l && i.x && o && (l = r.x - i.x),
                              null == u && i.y && s && (u = r.y - i.y),
                              (p -= l || 0),
                              (v -= u || 0),
                              (d = 0),
                              (f = 0),
                              !a || c
                                ? ((d = "y" === i.axis ? r.width : 0),
                                  (f = "x" === i.axis ? r.height : 0),
                                  (p = o && null != i.x ? i.x : p),
                                  (v = s && null != i.y ? i.y : v))
                                : a &&
                                  !c &&
                                  ((f = "x" === i.axis ? r.height : f),
                                  (d = "y" === i.axis ? r.width : d)),
                              (a = !0),
                              {
                                width: d,
                                height: f,
                                x: p,
                                y: v,
                                top: v,
                                right: p + d,
                                bottom: v + f,
                                left: p,
                              }
                            );
                          },
                        }),
                      );
                  }
                }),
                y = tn((e) => {
                  null != c ||
                    null != d ||
                    (n ? p.current || h([]) : b(e.clientX, e.clientY));
                }),
                x = I(v) ? i : n,
                E = l.useCallback(() => {
                  if (!x || !u || null != c || null != d) return;
                  let e = a(r.floating.current);
                  function t(n) {
                    let o = M(n);
                    _(r.floating.current, o)
                      ? (e.removeEventListener("mousemove", t),
                        (p.current = null))
                      : b(n.clientX, n.clientY);
                  }
                  if (!o.current.openEvent || np(o.current.openEvent)) {
                    e.addEventListener("mousemove", t);
                    let n = () => {
                      e.removeEventListener("mousemove", t), (p.current = null);
                    };
                    return (p.current = n), n;
                  }
                  r.setPositionReference(r.domReference.current);
                }, [o, u, x, r, b, c, d]);
              return (
                l.useEffect(() => E(), [E, g]),
                l.useEffect(() => {
                  u && !i && (f.current = !1);
                }, [u, i]),
                l.useEffect(() => {
                  !u && n && (f.current = !0);
                }, [u, n]),
                tm(() => {
                  u && (null != c || null != d) && ((f.current = !1), b(c, d));
                }, [u, c, d, b]),
                l.useMemo(() => {
                  if (!u) return {};
                  function e(e) {
                    let { pointerType: t } = e;
                    m(t);
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove: y,
                      onMouseEnter: y,
                    },
                  };
                }, [u, y])
              );
            }
            let nm = {
                pointerdown: "onPointerDown",
                mousedown: "onMouseDown",
                click: "onClick",
              },
              ng = {
                pointerdown: "onPointerDownCapture",
                mousedown: "onMouseDownCapture",
                click: "onClickCapture",
              },
              nh = (e) => {
                var t, n;
                return {
                  escapeKey:
                    "boolean" == typeof e
                      ? e
                      : null != (t = null == e ? void 0 : e.escapeKey) && t,
                  outsidePress:
                    "boolean" == typeof e
                      ? e
                      : null == (n = null == e ? void 0 : e.outsidePress) || n,
                };
              };
            function nb(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: o,
                  nodeId: i,
                  elements: { reference: u, domReference: a, floating: s },
                  dataRef: c,
                } = e,
                {
                  enabled: p = !0,
                  escapeKey: v = !0,
                  outsidePress: m = !0,
                  outsidePressEvent: g = "pointerdown",
                  referencePress: y = !1,
                  referencePressEvent: w = "pointerdown",
                  ancestorScroll: C = !1,
                  bubbles: R,
                  capture: T,
                } = t,
                k = tj(),
                N = null != tB(),
                L = tn("function" == typeof m ? m : () => !1),
                I = "function" == typeof m ? L : m,
                B = l.useRef(!1),
                j = l.useRef(!1),
                { escapeKey: D, outsidePress: V } = nh(R),
                { escapeKey: F, outsidePress: G } = nh(T),
                U = tn((e) => {
                  if (!n || !p || !v || "Escape" !== e.key) return;
                  let t = k ? tq(k.nodesRef.current, i) : [];
                  if (!D && (e.stopPropagation(), t.length > 0)) {
                    let e = !0;
                    if (
                      (t.forEach((t) => {
                        var n;
                        if (
                          null != (n = t.context) &&
                          n.open &&
                          !t.context.dataRef.current.__escapeKeyBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  o.emit("dismiss", {
                    type: "escapeKey",
                    data: { returnFocus: { preventScroll: !1 } },
                  }),
                    r(!1, "nativeEvent" in e ? e.nativeEvent : e);
                }),
                W = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    U(e),
                      null == (t = M(e)) || t.removeEventListener("keydown", n);
                  };
                  null == (t = M(e)) || t.addEventListener("keydown", n);
                }),
                z = tn((e) => {
                  let t = B.current;
                  B.current = !1;
                  let n = j.current;
                  if (
                    ((j.current = !1),
                    ("click" === g && n) ||
                      t ||
                      ("function" == typeof I && !I(e)))
                  )
                    return;
                  let l = M(e),
                    u = "[" + tG("inert") + "]",
                    c = P(s).querySelectorAll(u),
                    p = d(l) ? l : null;
                  for (; p && !h(p); ) {
                    let e = x(p);
                    if (e !== P(s).body && d(e)) p = e;
                    else break;
                  }
                  if (
                    c.length &&
                    d(l) &&
                    !l.matches("html,body") &&
                    !_(l, s) &&
                    Array.from(c).every((e) => !_(p, e))
                  )
                    return;
                  if (f(l) && s) {
                    let t = l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
                      n = l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
                      r = n && e.offsetX > l.clientWidth;
                    if (
                      (n &&
                        "rtl" === b(l).direction &&
                        (r = e.offsetX <= l.offsetWidth - l.clientWidth),
                      r || (t && e.offsetY > l.clientHeight))
                    )
                      return;
                  }
                  let v =
                    k &&
                    tq(k.nodesRef.current, i).some((t) => {
                      var n;
                      return A(
                        e,
                        null == (n = t.context) ? void 0 : n.elements.floating,
                      );
                    });
                  if (A(e, s) || A(e, a) || v) return;
                  let m = k ? tq(k.nodesRef.current, i) : [];
                  if (m.length > 0) {
                    let e = !0;
                    if (
                      (m.forEach((t) => {
                        var n;
                        if (
                          null != (n = t.context) &&
                          n.open &&
                          !t.context.dataRef.current.__outsidePressBubbles
                        ) {
                          e = !1;
                          return;
                        }
                      }),
                      !e)
                    )
                      return;
                  }
                  o.emit("dismiss", {
                    type: "outsidePress",
                    data: {
                      returnFocus: N ? { preventScroll: !0 } : S(e) || O(e),
                    },
                  }),
                    r(!1, e);
                }),
                H = tn((e) => {
                  var t;
                  let n = () => {
                    var t;
                    z(e), null == (t = M(e)) || t.removeEventListener(g, n);
                  };
                  null == (t = M(e)) || t.addEventListener(g, n);
                });
              return (
                l.useEffect(() => {
                  if (!n || !p) return;
                  function e(e) {
                    r(!1, e);
                  }
                  (c.current.__escapeKeyBubbles = D),
                    (c.current.__outsidePressBubbles = V);
                  let t = P(s);
                  v && t.addEventListener("keydown", F ? W : U, F),
                    I && t.addEventListener(g, G ? H : z, G);
                  let o = [];
                  return (
                    C &&
                      (d(a) && (o = E(a)),
                      d(s) && (o = o.concat(E(s))),
                      !d(u) &&
                        u &&
                        u.contextElement &&
                        (o = o.concat(E(u.contextElement)))),
                    (o = o.filter((e) => {
                      var n;
                      return (
                        e !==
                        (null == (n = t.defaultView)
                          ? void 0
                          : n.visualViewport)
                      );
                    })).forEach((t) => {
                      t.addEventListener("scroll", e, { passive: !0 });
                    }),
                    () => {
                      v && t.removeEventListener("keydown", F ? W : U, F),
                        I && t.removeEventListener(g, G ? H : z, G),
                        o.forEach((t) => {
                          t.removeEventListener("scroll", e);
                        });
                    }
                  );
                }, [c, s, a, u, v, I, g, n, r, C, p, D, V, U, F, W, z, G, H]),
                l.useEffect(() => {
                  B.current = !1;
                }, [I, g]),
                l.useMemo(
                  () =>
                    p
                      ? {
                          reference: {
                            onKeyDown: U,
                            [nm[w]]: (e) => {
                              y &&
                                (o.emit("dismiss", {
                                  type: "referencePress",
                                  data: { returnFocus: !1 },
                                }),
                                r(!1, e.nativeEvent));
                            },
                          },
                          floating: {
                            onKeyDown: U,
                            onMouseDown() {
                              j.current = !0;
                            },
                            onMouseUp() {
                              j.current = !0;
                            },
                            [ng[g]]: () => {
                              B.current = !0;
                            },
                          },
                        }
                      : {},
                  [p, o, y, g, w, r, U],
                )
              );
            }
            function ny(e) {
              var t;
              void 0 === e && (e = {});
              let { open: n = !1, onOpenChange: r, nodeId: o } = e,
                [i, u] = l.useState(null),
                a = (null == (t = e.elements) ? void 0 : t.reference) || i,
                s = (function (e) {
                  void 0 === e && (e = {});
                  let {
                      placement: t = "bottom",
                      strategy: n = "absolute",
                      middleware: r = [],
                      platform: o,
                      elements: { reference: i, floating: u } = {},
                      transform: a = !0,
                      whileElementsMounted: s,
                      open: c,
                    } = e,
                    [d, f] = l.useState({
                      x: 0,
                      y: 0,
                      strategy: n,
                      placement: t,
                      middlewareData: {},
                      isPositioned: !1,
                    }),
                    [p, v] = l.useState(r);
                  ej(p, r) || v(r);
                  let [m, g] = l.useState(null),
                    [h, b] = l.useState(null),
                    y = l.useCallback(
                      (e) => {
                        e != _.current && ((_.current = e), g(e));
                      },
                      [g],
                    ),
                    x = l.useCallback(
                      (e) => {
                        e !== C.current && ((C.current = e), b(e));
                      },
                      [b],
                    ),
                    E = i || m,
                    w = u || h,
                    _ = l.useRef(null),
                    C = l.useRef(null),
                    R = l.useRef(d),
                    S = eF(s),
                    T = eF(o),
                    O = l.useCallback(() => {
                      if (!_.current || !C.current) return;
                      let e = { placement: t, strategy: n, middleware: p };
                      T.current && (e.platform = T.current),
                        eP(_.current, C.current, e).then((e) => {
                          let t = { ...e, isPositioned: !0 };
                          k.current &&
                            !ej(R.current, t) &&
                            ((R.current = t),
                            eA.flushSync(() => {
                              f(t);
                            }));
                        });
                    }, [p, t, n, T]);
                  eB(() => {
                    !1 === c &&
                      R.current.isPositioned &&
                      ((R.current.isPositioned = !1),
                      f((e) => ({ ...e, isPositioned: !1 })));
                  }, [c]);
                  let k = l.useRef(!1);
                  eB(
                    () => (
                      (k.current = !0),
                      () => {
                        k.current = !1;
                      }
                    ),
                    [],
                  ),
                    eB(() => {
                      if (
                        (E && (_.current = E), w && (C.current = w), E && w)
                      ) {
                        if (S.current) return S.current(E, w, O);
                        O();
                      }
                    }, [E, w, O, S]);
                  let N = l.useMemo(
                      () => ({
                        reference: _,
                        floating: C,
                        setReference: y,
                        setFloating: x,
                      }),
                      [y, x],
                    ),
                    L = l.useMemo(
                      () => ({ reference: E, floating: w }),
                      [E, w],
                    ),
                    I = l.useMemo(() => {
                      let e = { position: n, left: 0, top: 0 };
                      if (!L.floating) return e;
                      let t = eV(L.floating, d.x),
                        r = eV(L.floating, d.y);
                      return a
                        ? {
                            ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...(eD(L.floating) >= 1.5 && {
                              willChange: "transform",
                            }),
                          }
                        : { position: n, left: t, top: r };
                    }, [n, a, L.floating, d.x, d.y]);
                  return l.useMemo(
                    () => ({
                      ...d,
                      update: O,
                      refs: N,
                      elements: L,
                      floatingStyles: I,
                    }),
                    [d, O, N, L, I],
                  );
                })(e),
                c = tj(),
                f = tn((e, t) => {
                  e && (v.current.openEvent = t), null == r || r(e, t);
                }),
                p = l.useRef(null),
                v = l.useRef({}),
                m = l.useState(() => tP())[0],
                g = tL(),
                h = l.useCallback(
                  (e) => {
                    let t = d(e)
                      ? {
                          getBoundingClientRect: () =>
                            e.getBoundingClientRect(),
                          contextElement: e,
                        }
                      : e;
                    s.refs.setReference(t);
                  },
                  [s.refs],
                ),
                b = l.useCallback(
                  (e) => {
                    (d(e) || null === e) && ((p.current = e), u(e)),
                      (d(s.refs.reference.current) ||
                        null === s.refs.reference.current ||
                        (null !== e && !d(e))) &&
                        s.refs.setReference(e);
                  },
                  [s.refs],
                ),
                y = l.useMemo(
                  () => ({
                    ...s.refs,
                    setReference: b,
                    setPositionReference: h,
                    domReference: p,
                  }),
                  [s.refs, b, h],
                ),
                x = l.useMemo(
                  () => ({ ...s.elements, domReference: a }),
                  [s.elements, a],
                ),
                E = l.useMemo(
                  () => ({
                    ...s,
                    refs: y,
                    elements: x,
                    dataRef: v,
                    nodeId: o,
                    floatingId: g,
                    events: m,
                    open: n,
                    onOpenChange: f,
                  }),
                  [s, o, g, m, n, f, y, x],
                );
              return (
                tm(() => {
                  let e =
                    null == c
                      ? void 0
                      : c.nodesRef.current.find((e) => e.id === o);
                  e && (e.context = E);
                }),
                l.useMemo(
                  () => ({ ...s, context: E, refs: y, elements: x }),
                  [s, y, x, E],
                )
              );
            }
            function nx(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  onOpenChange: r,
                  events: o,
                  refs: i,
                  elements: { floating: u, domReference: s },
                } = e,
                { enabled: c = !0, visibleOnly: p = !0 } = t,
                v = l.useRef(!1),
                m = l.useRef(),
                g = l.useRef(!0);
              return (
                l.useEffect(() => {
                  if (!c) return;
                  let e = a(s);
                  function t() {
                    !n && f(s) && s === w(P(s)) && (v.current = !0);
                  }
                  function r() {
                    g.current = !0;
                  }
                  return (
                    e.addEventListener("blur", t),
                    e.addEventListener("keydown", r, !0),
                    () => {
                      e.removeEventListener("blur", t),
                        e.removeEventListener("keydown", r, !0);
                    }
                  );
                }, [u, s, n, c]),
                l.useEffect(() => {
                  if (c)
                    return (
                      o.on("dismiss", e),
                      () => {
                        o.off("dismiss", e);
                      }
                    );
                  function e(e) {
                    ("referencePress" === e.type || "escapeKey" === e.type) &&
                      (v.current = !0);
                  }
                }, [o, c]),
                l.useEffect(
                  () => () => {
                    clearTimeout(m.current);
                  },
                  [],
                ),
                l.useMemo(
                  () =>
                    c
                      ? {
                          reference: {
                            onPointerDown(e) {
                              O(e.nativeEvent) || (g.current = !1);
                            },
                            onMouseLeave() {
                              v.current = !1;
                            },
                            onFocus(e) {
                              if (v.current) return;
                              let t = M(e.nativeEvent);
                              if (p && d(t))
                                try {
                                  if (k() && L()) throw Error();
                                  if (!t.matches(":focus-visible")) return;
                                } catch (e) {
                                  if (!g.current && !B(t)) return;
                                }
                              r(!0, e.nativeEvent);
                            },
                            onBlur(e) {
                              v.current = !1;
                              let t = e.relatedTarget,
                                n =
                                  d(t) &&
                                  t.hasAttribute(tG("focus-guard")) &&
                                  "outside" === t.getAttribute("data-type");
                              m.current = window.setTimeout(() => {
                                let o = w(s ? s.ownerDocument : document);
                                if (t || o !== s) {
                                  if (_(i.floating.current, t) || _(s, t) || n)
                                    return;
                                  r(!1, e.nativeEvent);
                                }
                              });
                            },
                          },
                        }
                      : {},
                  [c, p, s, i, r],
                )
              );
            }
            function nE(e, t, n) {
              let r = new Map();
              return {
                ...("floating" === n && { tabIndex: -1 }),
                ...e,
                ...t
                  .map((e) => (e ? e[n] : null))
                  .concat(e)
                  .reduce(
                    (e, t) => (
                      t &&
                        Object.entries(t).forEach((t) => {
                          let [n, o] = t;
                          if (0 === n.indexOf("on")) {
                            if (
                              (r.has(n) || r.set(n, []), "function" == typeof o)
                            ) {
                              var i;
                              null == (i = r.get(n)) || i.push(o),
                                (e[n] = function () {
                                  for (
                                    var e,
                                      t = arguments.length,
                                      o = Array(t),
                                      i = 0;
                                    i < t;
                                    i++
                                  )
                                    o[i] = arguments[i];
                                  return null == (e = r.get(n))
                                    ? void 0
                                    : e
                                        .map((e) => e(...o))
                                        .find((e) => void 0 !== e);
                                });
                            }
                          } else e[n] = o;
                        }),
                      e
                    ),
                    {},
                  ),
              };
            }
            function nw(e) {
              void 0 === e && (e = []);
              let t = e,
                n = l.useCallback((t) => nE(t, e, "reference"), t),
                r = l.useCallback((t) => nE(t, e, "floating"), t),
                o = l.useCallback(
                  (t) => nE(t, e, "item"),
                  e.map((e) => (null == e ? void 0 : e.item)),
                );
              return l.useMemo(
                () => ({
                  getReferenceProps: n,
                  getFloatingProps: r,
                  getItemProps: o,
                }),
                [n, r, o],
              );
            }
            let n_ = !1;
            function nC(e, t, n) {
              switch (e) {
                case "vertical":
                  return t;
                case "horizontal":
                  return n;
                default:
                  return t || n;
              }
            }
            function nR(e, t) {
              return nC(t, e === tr || e === to, e === ti || e === tl);
            }
            function nS(e, t, n) {
              return (
                nC(t, e === to, n ? e === ti : e === tl) ||
                "Enter" === e ||
                " " == e ||
                "" === e
              );
            }
            function nT(e, t, n) {
              return nC(t, n ? e === tl : e === ti, e === tr);
            }
            function nO(e, t) {
              let {
                  open: n,
                  onOpenChange: r,
                  refs: o,
                  elements: { domReference: i, floating: u },
                } = e,
                {
                  listRef: a,
                  activeIndex: s,
                  onNavigate: c = () => {},
                  enabled: d = !0,
                  selectedIndex: p = null,
                  allowEscape: v = !1,
                  loop: m = !1,
                  nested: g = !1,
                  rtl: h = !1,
                  virtual: b = !1,
                  focusItemOnOpen: y = "auto",
                  focusItemOnHover: x = !0,
                  openOnArrowKeyDown: E = !0,
                  disabledIndices: C,
                  orientation: R = "vertical",
                  cols: T = 1,
                  scrollItemIntoView: N = !0,
                  virtualItemRef: I,
                } = t,
                A = tB(),
                M = tj(),
                B = tn(c),
                D = l.useRef(y),
                V = l.useRef(null != p ? p : -1),
                F = l.useRef(null),
                G = l.useRef(!0),
                U = l.useRef(B),
                W = l.useRef(!!u),
                z = l.useRef(!1),
                H = l.useRef(!1),
                K = tU(C),
                Y = tU(n),
                Z = tU(N),
                [X, q] = l.useState(),
                [$, J] = l.useState(),
                Q = tn(function (e, t, n) {
                  void 0 === n && (n = !1);
                  let r = e.current[t.current];
                  r &&
                    (b
                      ? (q(r.id),
                        null == M || M.events.emit("virtualfocus", r),
                        I && (I.current = r))
                      : tv(r, {
                          preventScroll: !0,
                          sync: !!(L() && k()) && (n_ || z.current),
                        }),
                    requestAnimationFrame(() => {
                      let e = Z.current;
                      e &&
                        r &&
                        (n || !G.current) &&
                        (null == r.scrollIntoView ||
                          r.scrollIntoView(
                            "boolean" == typeof e
                              ? { block: "nearest", inline: "nearest" }
                              : e,
                          ));
                    }));
                });
              tm(() => {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (n_ = !0), !1;
                  },
                });
              }, []),
                tm(() => {
                  d &&
                    (n && u
                      ? D.current && null != p && ((H.current = !0), B(p))
                      : W.current && ((V.current = -1), U.current(null)));
                }, [d, n, u, p, B]),
                tm(() => {
                  if (d && n && u) {
                    if (null == s) {
                      if (
                        ((z.current = !1),
                        null == p &&
                          (W.current && ((V.current = -1), Q(a, V)),
                          !W.current &&
                            D.current &&
                            (null != F.current ||
                              (!0 === D.current && null == F.current))))
                      ) {
                        let e = 0,
                          t = () => {
                            null == a.current[0]
                              ? (e < 2 &&
                                  (e ? requestAnimationFrame : queueMicrotask)(
                                    t,
                                  ),
                                e++)
                              : ((V.current =
                                  null == F.current || nS(F.current, R, h) || g
                                    ? ts(a, K.current)
                                    : tc(a, K.current)),
                                (F.current = null),
                                B(V.current));
                          };
                        t();
                      }
                    } else
                      ta(a, s) ||
                        ((V.current = s), Q(a, V, H.current), (H.current = !1));
                  }
                }, [d, n, u, s, p, g, a, R, h, B, Q, K]),
                tm(() => {
                  var e, t;
                  if (!d || u || !M || b || !W.current) return;
                  let n = M.nodesRef.current,
                    r =
                      null == (e = n.find((e) => e.id === A))
                        ? void 0
                        : null == (t = e.context)
                          ? void 0
                          : t.elements.floating,
                    o = w(P(u)),
                    i = n.some(
                      (e) => e.context && _(e.context.elements.floating, o),
                    );
                  r && !i && G.current && r.focus({ preventScroll: !0 });
                }, [d, u, M, A, b]),
                tm(() => {
                  if (d && M && b && !A)
                    return (
                      M.events.on("virtualfocus", e),
                      () => {
                        M.events.off("virtualfocus", e);
                      }
                    );
                  function e(e) {
                    J(e.id), I && (I.current = e);
                  }
                }, [d, M, b, A, I]),
                tm(() => {
                  (U.current = B), (W.current = !!u);
                }),
                tm(() => {
                  n || (F.current = null);
                }, [n]);
              let ee = null != s,
                et = l.useMemo(() => {
                  function e(e) {
                    if (!n) return;
                    let t = a.current.indexOf(e);
                    -1 !== t && B(t);
                  }
                  return {
                    onFocus(t) {
                      let { currentTarget: n } = t;
                      e(n);
                    },
                    onClick: (e) => {
                      let { currentTarget: t } = e;
                      return t.focus({ preventScroll: !0 });
                    },
                    ...(x && {
                      onMouseMove(t) {
                        let { currentTarget: n } = t;
                        e(n);
                      },
                      onPointerLeave(e) {
                        let { pointerType: t } = e;
                        G.current &&
                          "touch" !== t &&
                          ((V.current = -1),
                          Q(a, V),
                          B(null),
                          b || tv(o.floating.current, { preventScroll: !0 }));
                      },
                    }),
                  };
                }, [n, o, Q, x, a, B, b]);
              return l.useMemo(() => {
                if (!d) return {};
                let e = K.current;
                function t(t) {
                  if (
                    ((G.current = !1),
                    (z.current = !0),
                    !Y.current && t.currentTarget === o.floating.current)
                  )
                    return;
                  if (g && nT(t.key, R, h)) {
                    j(t), r(!1, t.nativeEvent), f(i) && !b && i.focus();
                    return;
                  }
                  let l = V.current,
                    u = ts(a, e),
                    s = tc(a, e);
                  if (
                    ("Home" === t.key && (j(t), (V.current = u), B(V.current)),
                    "End" === t.key && (j(t), (V.current = s), B(V.current)),
                    (!(T > 1) ||
                      ((V.current = tf(a, {
                        event: t,
                        orientation: R,
                        loop: m,
                        cols: T,
                        disabledIndices: e,
                        minIndex: u,
                        maxIndex: s,
                        prevIndex: V.current,
                        stopEvent: !0,
                      })),
                      B(V.current),
                      "both" !== R)) &&
                      nR(t.key, R))
                  ) {
                    if (
                      (j(t),
                      n &&
                        !b &&
                        w(t.currentTarget.ownerDocument) === t.currentTarget)
                    ) {
                      (V.current = nS(t.key, R, h) ? u : s), B(V.current);
                      return;
                    }
                    nS(t.key, R, h)
                      ? m
                        ? (V.current =
                            l >= s
                              ? v && l !== a.current.length
                                ? -1
                                : u
                              : td(a, { startingIndex: l, disabledIndices: e }))
                        : (V.current = Math.min(
                            s,
                            td(a, { startingIndex: l, disabledIndices: e }),
                          ))
                      : m
                        ? (V.current =
                            l <= u
                              ? v && -1 !== l
                                ? a.current.length
                                : s
                              : td(a, {
                                  startingIndex: l,
                                  decrement: !0,
                                  disabledIndices: e,
                                }))
                        : (V.current = Math.max(
                            u,
                            td(a, {
                              startingIndex: l,
                              decrement: !0,
                              disabledIndices: e,
                            }),
                          )),
                      ta(a, V.current) ? B(null) : B(V.current);
                  }
                }
                function l(e) {
                  "auto" === y && S(e.nativeEvent) && (D.current = !0);
                }
                let u = b && n && ee && { "aria-activedescendant": $ || X },
                  s = a.current.find((e) => (null == e ? void 0 : e.id) === X);
                return {
                  reference: {
                    ...u,
                    onKeyDown(o) {
                      var i, l, u, c, d, f;
                      G.current = !1;
                      let v = 0 === o.key.indexOf("Arrow"),
                        m =
                          ((i = o.key),
                          nC(R, h ? i === ti : i === tl, i === to)),
                        y = nT(o.key, R, h),
                        x = nR(o.key, R),
                        w =
                          (g ? m : x) ||
                          "Enter" === o.key ||
                          "" === o.key.trim();
                      if (b && n) {
                        let e, n;
                        let r =
                            null == M
                              ? void 0
                              : M.nodesRef.current.find(
                                  (e) => null == e.parentId,
                                ),
                          i =
                            M && r
                              ? ((l = M.nodesRef.current),
                                (u = r.id),
                                (n = -1),
                                !(function t(r, o) {
                                  o > n && ((e = r), (n = o)),
                                    tq(l, r).forEach((e) => {
                                      t(e.id, o + 1);
                                    });
                                })(u, 0),
                                l.find((t) => t.id === e))
                              : null;
                        if (v && i && I) {
                          let e = new KeyboardEvent("keydown", {
                            key: o.key,
                            bubbles: !0,
                          });
                          if (m || y) {
                            let t =
                                (null == (c = i.context)
                                  ? void 0
                                  : c.elements.domReference) ===
                                o.currentTarget,
                              n =
                                y && !t
                                  ? null == (d = i.context)
                                    ? void 0
                                    : d.elements.domReference
                                  : m
                                    ? s
                                    : null;
                            n && (j(o), n.dispatchEvent(e), J(void 0));
                          }
                          if (
                            x &&
                            i.context &&
                            i.context.open &&
                            i.parentId &&
                            o.currentTarget !== i.context.elements.domReference
                          ) {
                            j(o),
                              null == (f = i.context.elements.domReference) ||
                                f.dispatchEvent(e);
                            return;
                          }
                        }
                        return t(o);
                      }
                      if (n || E || !v) {
                        if ((w && (F.current = g && x ? null : o.key), g)) {
                          m &&
                            (j(o),
                            n
                              ? ((V.current = ts(a, e)), B(V.current))
                              : r(!0, o.nativeEvent));
                          return;
                        }
                        x &&
                          (null != p && (V.current = p),
                          j(o),
                          !n && E ? r(!0, o.nativeEvent) : t(o),
                          n && B(V.current));
                      }
                    },
                    onFocus() {
                      n && B(null);
                    },
                    onPointerDown: function (e) {
                      (D.current = y),
                        "auto" === y && O(e.nativeEvent) && (D.current = !0);
                    },
                    onMouseDown: l,
                    onClick: l,
                  },
                  floating: {
                    "aria-orientation": "both" === R ? void 0 : R,
                    ...u,
                    onKeyDown: t,
                    onPointerMove() {
                      G.current = !0;
                    },
                  },
                  item: et,
                };
              }, [
                i,
                o,
                X,
                $,
                K,
                Y,
                a,
                d,
                R,
                h,
                b,
                n,
                ee,
                g,
                p,
                E,
                v,
                T,
                m,
                y,
                B,
                r,
                et,
                M,
                I,
              ]);
            }
            function nk(e, t) {
              void 0 === t && (t = {});
              let { open: n, floatingId: r } = e,
                { enabled: o = !0, role: i = "dialog" } = t,
                u = tL();
              return l.useMemo(() => {
                let e = { id: r, role: i };
                return o
                  ? "tooltip" === i
                    ? {
                        reference: { "aria-describedby": n ? r : void 0 },
                        floating: e,
                      }
                    : {
                        reference: {
                          "aria-expanded": n ? "true" : "false",
                          "aria-haspopup": "alertdialog" === i ? "dialog" : i,
                          "aria-controls": n ? r : void 0,
                          ...("listbox" === i && { role: "combobox" }),
                          ...("menu" === i && { id: u }),
                        },
                        floating: {
                          ...e,
                          ...("menu" === i && { "aria-labelledby": u }),
                        },
                      }
                  : {};
              }, [o, i, n, r, u]);
            }
            let nN = (e) =>
              e.replace(
                /[A-Z]+(?![a-z])|[A-Z]/g,
                (e, t) => (t ? "-" : "") + e.toLowerCase(),
              );
            function nL(e, t) {
              return "function" == typeof e ? e(t) : e;
            }
            function nI(e, t) {
              void 0 === t && (t = {});
              let {
                  open: n,
                  elements: { floating: r },
                } = e,
                { duration: o = 250 } = t,
                i = ("number" == typeof o ? o : o.close) || 0,
                [u, a] = l.useState(!1),
                [s, c] = l.useState("unmounted"),
                d = (function (e, t) {
                  let [n, r] = l.useState(e);
                  return (
                    e && !n && r(!0),
                    l.useEffect(() => {
                      if (!e) {
                        let e = setTimeout(() => r(!1), t);
                        return () => clearTimeout(e);
                      }
                    }, [e, t]),
                    n
                  );
                })(n, i);
              return (
                tm(() => {
                  u && !d && c("unmounted");
                }, [u, d]),
                tm(() => {
                  if (r) {
                    if (n) {
                      c("initial");
                      let e = requestAnimationFrame(() => {
                        c("open");
                      });
                      return () => {
                        cancelAnimationFrame(e);
                      };
                    }
                    a(!0), c("close");
                  }
                }, [n, r]),
                { isMounted: d, status: s }
              );
            }
            function nP(e, t) {
              void 0 === t && (t = {});
              let {
                  initial: n = { opacity: 0 },
                  open: r,
                  close: o,
                  common: i,
                  duration: u = 250,
                } = t,
                a = e.placement,
                s = a.split("-")[0],
                c = l.useMemo(() => ({ side: s, placement: a }), [s, a]),
                d = "number" == typeof u,
                f = (d ? u : u.open) || 0,
                p = (d ? u : u.close) || 0,
                [v, m] = l.useState(() => ({ ...nL(i, c), ...nL(n, c) })),
                { isMounted: g, status: h } = nI(e, { duration: u }),
                b = tU(n),
                y = tU(r),
                x = tU(o),
                E = tU(i);
              return (
                tm(() => {
                  let e = nL(b.current, c),
                    t = nL(x.current, c),
                    n = nL(E.current, c),
                    r =
                      nL(y.current, c) ||
                      Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
                  if (
                    ("initial" === h &&
                      m((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                      })),
                    "open" === h &&
                      m({
                        transitionProperty: Object.keys(r).map(nN).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                      }),
                    "close" === h)
                  ) {
                    let r = t || e;
                    m({
                      transitionProperty: Object.keys(r).map(nN).join(","),
                      transitionDuration: p + "ms",
                      ...n,
                      ...r,
                    });
                  }
                }, [p, x, b, y, E, f, h, c]),
                { isMounted: g, styles: v }
              );
            }
            function nA(e, t) {
              var n;
              let { open: r, dataRef: o } = e,
                {
                  listRef: i,
                  activeIndex: u,
                  onMatch: a,
                  onTypingChange: s,
                  enabled: c = !0,
                  findMatch: d = null,
                  resetMs: f = 750,
                  ignoreKeys: p = [],
                  selectedIndex: v = null,
                } = t,
                m = l.useRef(),
                g = l.useRef(""),
                h = l.useRef(null != (n = null != v ? v : u) ? n : -1),
                b = l.useRef(null),
                y = tn(a),
                x = tn(s),
                E = tU(d),
                w = tU(p);
              return (
                tm(() => {
                  r &&
                    (clearTimeout(m.current),
                    (b.current = null),
                    (g.current = ""));
                }, [r]),
                tm(() => {
                  if (r && "" === g.current) {
                    var e;
                    h.current = null != (e = null != v ? v : u) ? e : -1;
                  }
                }, [r, v, u]),
                l.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    e
                      ? o.current.typing || ((o.current.typing = e), x(e))
                      : o.current.typing && ((o.current.typing = e), x(e));
                  }
                  function t(e, t, n) {
                    let r = E.current
                      ? E.current(t, n)
                      : t.find(
                          (e) =>
                            (null == e
                              ? void 0
                              : e
                                  .toLocaleLowerCase()
                                  .indexOf(n.toLocaleLowerCase())) === 0,
                        );
                    return r ? e.indexOf(r) : -1;
                  }
                  function n(n) {
                    let o = i.current;
                    if (
                      (g.current.length > 0 &&
                        " " !== g.current[0] &&
                        (-1 === t(o, o, g.current)
                          ? e(!1)
                          : " " === n.key && j(n)),
                      null == o ||
                        w.current.includes(n.key) ||
                        1 !== n.key.length ||
                        n.ctrlKey ||
                        n.metaKey ||
                        n.altKey)
                    )
                      return;
                    r && " " !== n.key && (j(n), e(!0)),
                      o.every((e) => {
                        var t, n;
                        return (
                          !e ||
                          (null == (t = e[0])
                            ? void 0
                            : t.toLocaleLowerCase()) !==
                            (null == (n = e[1])
                              ? void 0
                              : n.toLocaleLowerCase())
                        );
                      }) &&
                        g.current === n.key &&
                        ((g.current = ""), (h.current = b.current)),
                      (g.current += n.key),
                      clearTimeout(m.current),
                      (m.current = setTimeout(() => {
                        (g.current = ""), (h.current = b.current), e(!1);
                      }, f));
                    let l = h.current,
                      u = t(
                        o,
                        [...o.slice((l || 0) + 1), ...o.slice(0, (l || 0) + 1)],
                        g.current,
                      );
                    -1 !== u
                      ? (y(u), (b.current = u))
                      : " " !== n.key && ((g.current = ""), e(!1));
                  }
                  return {
                    reference: { onKeyDown: n },
                    floating: {
                      onKeyDown: n,
                      onKeyUp(t) {
                        " " === t.key && e(!1);
                      },
                    },
                  };
                }, [c, r, o, i, f, w, E, y, x])
              );
            }
            function nM(e, t) {
              return {
                ...e,
                rects: {
                  ...e.rects,
                  floating: { ...e.rects.floating, height: t },
                },
              };
            }
            let nB = (e) => ({
              name: "inner",
              options: e,
              async fn(t) {
                let {
                    listRef: n,
                    overflowRef: r,
                    onFallbackChange: o,
                    offset: i = 0,
                    index: l = 0,
                    minItemsVisible: u = 4,
                    referenceOverflowThreshold: a = 0,
                    scrollRef: s,
                    ...c
                  } = e,
                  {
                    rects: d,
                    elements: { floating: f },
                  } = t,
                  p = n.current[l];
                if (!p) return {};
                let v = {
                    ...t,
                    ...(await eg(
                      -p.offsetTop -
                        f.clientTop -
                        d.reference.height / 2 -
                        p.offsetHeight / 2 -
                        i,
                    ).fn(t)),
                  },
                  m = (null == s ? void 0 : s.current) || f,
                  g = await el(nM(v, m.scrollHeight), c),
                  h = await el(v, { ...c, elementContext: "reference" }),
                  b = Math.max(0, g.top),
                  y = v.y + b,
                  x = Math.max(0, m.scrollHeight - b - Math.max(0, g.bottom));
                return (
                  (m.style.maxHeight = x + "px"),
                  (m.scrollTop = b),
                  o &&
                    (m.offsetHeight <
                      p.offsetHeight * Math.min(u, n.current.length - 1) - 1 ||
                    h.top >= -a ||
                    h.bottom >= -a
                      ? (0, eA.flushSync)(() => o(!0))
                      : (0, eA.flushSync)(() => o(!1))),
                  r &&
                    (r.current = await el(
                      nM({ ...v, y: y }, m.offsetHeight),
                      c,
                    )),
                  { y: y }
                );
              },
            });
            function nj(e, t) {
              let { open: n, elements: r } = e,
                {
                  enabled: o = !0,
                  overflowRef: i,
                  scrollRef: u,
                  onChange: a,
                } = t,
                s = tn(a),
                c = l.useRef(!1),
                d = l.useRef(null),
                f = l.useRef(null);
              return (
                l.useEffect(() => {
                  if (!o) return;
                  function e(e) {
                    if (e.ctrlKey || !t || null == i.current) return;
                    let n = e.deltaY,
                      r = i.current.top >= -0.5,
                      o = i.current.bottom >= -0.5,
                      l = t.scrollHeight - t.clientHeight,
                      u = n < 0 ? -1 : 1,
                      a = n < 0 ? "max" : "min";
                    !(t.scrollHeight <= t.clientHeight) &&
                      ((!r && n > 0) || (!o && n < 0)
                        ? (e.preventDefault(),
                          (0, eA.flushSync)(() => {
                            s((e) => e + Math[a](n, l * u));
                          }))
                        : /firefox/i.test(R()) && (t.scrollTop += n));
                  }
                  let t = (null == u ? void 0 : u.current) || r.floating;
                  if (n && t)
                    return (
                      t.addEventListener("wheel", e),
                      requestAnimationFrame(() => {
                        (d.current = t.scrollTop),
                          null != i.current && (f.current = { ...i.current });
                      }),
                      () => {
                        (d.current = null),
                          (f.current = null),
                          t.removeEventListener("wheel", e);
                      }
                    );
                }, [o, n, r.floating, i, u, s]),
                l.useMemo(
                  () =>
                    o
                      ? {
                          floating: {
                            onKeyDown() {
                              c.current = !0;
                            },
                            onWheel() {
                              c.current = !1;
                            },
                            onPointerMove() {
                              c.current = !1;
                            },
                            onScroll() {
                              let e =
                                (null == u ? void 0 : u.current) || r.floating;
                              if (i.current && e && c.current) {
                                if (null !== d.current) {
                                  let t = e.scrollTop - d.current;
                                  ((i.current.bottom < -0.5 && t < -1) ||
                                    (i.current.top < -0.5 && t > 1)) &&
                                    (0, eA.flushSync)(() => s((e) => e + t));
                                }
                                requestAnimationFrame(() => {
                                  d.current = e.scrollTop;
                                });
                              }
                            },
                          },
                        }
                      : {},
                  [o, i, r.floating, u, s],
                )
              );
            }
            function nD(e, t) {
              let [n, r] = e,
                o = !1,
                i = t.length;
              for (let e = 0, l = i - 1; e < i; l = e++) {
                let [i, u] = t[e] || [0, 0],
                  [a, s] = t[l] || [0, 0];
                u >= r != s >= r &&
                  n <= ((a - i) * (r - u)) / (s - u) + i &&
                  (o = !o);
              }
              return o;
            }
            function nV(e) {
              let t;
              void 0 === e && (e = {});
              let {
                  buffer: n = 0.5,
                  blockPointerEvents: r = !1,
                  requireIntent: o = !0,
                } = e,
                i = !1,
                l = null,
                u = null,
                a = performance.now(),
                s = (e) => {
                  let {
                    x: r,
                    y: s,
                    placement: c,
                    elements: f,
                    onClose: p,
                    nodeId: v,
                    tree: m,
                  } = e;
                  return function (e) {
                    function g() {
                      clearTimeout(t), p();
                    }
                    if (
                      (clearTimeout(t),
                      !f.domReference ||
                        !f.floating ||
                        null == c ||
                        null == r ||
                        null == s)
                    )
                      return;
                    let { clientX: h, clientY: b } = e,
                      y = [h, b],
                      x = M(e),
                      E = "mouseleave" === e.type,
                      w = _(f.floating, x),
                      C = _(f.domReference, x),
                      R = f.domReference.getBoundingClientRect(),
                      S = f.floating.getBoundingClientRect(),
                      T = c.split("-")[0],
                      O = r > S.right - S.width / 2,
                      k = s > S.bottom - S.height / 2,
                      N =
                        y[0] >= R.x &&
                        y[0] <= R.x + R.width &&
                        y[1] >= R.y &&
                        y[1] <= R.y + R.height,
                      L = S.width > R.width,
                      I = S.height > R.height,
                      P = (L ? R : S).left,
                      A = (L ? R : S).right,
                      B = (I ? R : S).top,
                      j = (I ? R : S).bottom;
                    if (w && ((i = !0), !E)) return;
                    if ((C && (i = !1), C && !E)) {
                      i = !0;
                      return;
                    }
                    if (
                      (E &&
                        d(e.relatedTarget) &&
                        _(f.floating, e.relatedTarget)) ||
                      (m &&
                        tq(m.nodesRef.current, v).some((e) => {
                          let { context: t } = e;
                          return null == t ? void 0 : t.open;
                        }))
                    )
                      return;
                    if (
                      ("top" === T && s >= R.bottom - 1) ||
                      ("bottom" === T && s <= R.top + 1) ||
                      ("left" === T && r >= R.right - 1) ||
                      ("right" === T && r <= R.left + 1)
                    )
                      return g();
                    let D = [];
                    switch (T) {
                      case "top":
                        D = [
                          [P, R.top + 1],
                          [P, S.bottom - 1],
                          [A, S.bottom - 1],
                          [A, R.top + 1],
                        ];
                        break;
                      case "bottom":
                        D = [
                          [P, S.top + 1],
                          [P, R.bottom - 1],
                          [A, R.bottom - 1],
                          [A, S.top + 1],
                        ];
                        break;
                      case "left":
                        D = [
                          [S.right - 1, j],
                          [S.right - 1, B],
                          [R.left + 1, B],
                          [R.left + 1, j],
                        ];
                        break;
                      case "right":
                        D = [
                          [R.right - 1, j],
                          [R.right - 1, B],
                          [S.left + 1, B],
                          [S.left + 1, j],
                        ];
                    }
                    if (!nD([h, b], D)) {
                      if (i && !N) return g();
                      if (!E && o) {
                        let t = (function (e, t) {
                          let n = performance.now(),
                            r = n - a;
                          if (null === l || null === u || 0 === r)
                            return (l = e), (u = t), (a = n), null;
                          let o = e - l,
                            i = t - u;
                          return (
                            (l = e),
                            (u = t),
                            (a = n),
                            Math.sqrt(o * o + i * i) / r
                          );
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return g();
                      }
                      nD(
                        [h, b],
                        (function (e) {
                          let [t, r] = e;
                          switch (T) {
                            case "top": {
                              let e = [
                                [
                                  S.left,
                                  O ? S.bottom - n : L ? S.bottom - n : S.top,
                                ],
                                [
                                  S.right,
                                  O ? (L ? S.bottom - n : S.top) : S.bottom - n,
                                ],
                              ];
                              return [
                                [
                                  L ? t + n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                [
                                  L ? t - n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r + n + 1,
                                ],
                                ...e,
                              ];
                            }
                            case "bottom": {
                              let e = [
                                [
                                  S.left,
                                  O ? S.top + n : L ? S.top + n : S.bottom,
                                ],
                                [
                                  S.right,
                                  O ? (L ? S.top + n : S.bottom) : S.top + n,
                                ],
                              ];
                              return [
                                [
                                  L ? t + n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                [
                                  L ? t - n / 2 : O ? t + 4 * n : t - 4 * n,
                                  r - n,
                                ],
                                ...e,
                              ];
                            }
                            case "left":
                              return [
                                [
                                  k ? S.right - n : I ? S.right - n : S.left,
                                  S.top,
                                ],
                                [
                                  k ? (I ? S.right - n : S.left) : S.right - n,
                                  S.bottom,
                                ],
                                [
                                  t + n + 1,
                                  I ? r + n / 2 : k ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t + n + 1,
                                  I ? r - n / 2 : k ? r + 4 * n : r - 4 * n,
                                ],
                              ];
                            case "right": {
                              let e = [
                                [
                                  k ? S.left + n : I ? S.left + n : S.right,
                                  S.top,
                                ],
                                [
                                  k ? (I ? S.left + n : S.right) : S.left + n,
                                  S.bottom,
                                ],
                              ];
                              return [
                                [
                                  t - n,
                                  I ? r + n / 2 : k ? r + 4 * n : r - 4 * n,
                                ],
                                [
                                  t - n,
                                  I ? r - n / 2 : k ? r + 4 * n : r - 4 * n,
                                ],
                                ...e,
                              ];
                            }
                          }
                        })([r, s]),
                      )
                        ? !i && o && (t = window.setTimeout(g, 40))
                        : g();
                    }
                  };
                };
              return (s.__options = { blockPointerEvents: r }), s;
            }
          },
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                      else for (n in t) t[n] && (o && (o += " "), (o += n));
                    }
                    return o;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => o });
            let o = r;
          },
          4965: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { overlay: "ZSjQrniulol6xKOq2Bou" };
          },
          5371: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = { root: "dJZf0Flxzx7PR15g7zqM" };
          },
          6169: (e, t, n) => {
            n.r(t),
              n.d(t, {
                DOWN: () => u,
                LEFT: () => o,
                RIGHT: () => i,
                UP: () => l,
                useSwipeable: () => p,
              });
            var r = n(810);
            let o = "Left",
              i = "Right",
              l = "Up",
              u = "Down",
              a = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              s = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              c = "mousemove",
              d = "mouseup";
            function f(e, t) {
              if (0 === t) return e;
              let n = (Math.PI / 180) * t;
              return [
                e[0] * Math.cos(n) + e[1] * Math.sin(n),
                e[1] * Math.cos(n) - e[0] * Math.sin(n),
              ];
            }
            function p(e) {
              var t, n, p;
              let v;
              let { trackMouse: m } = e,
                g = r.useRef(Object.assign({}, s)),
                h = r.useRef(Object.assign({}, a)),
                b = r.useRef(Object.assign({}, h.current));
              for (v in ((b.current = Object.assign({}, h.current)),
              (h.current = Object.assign(Object.assign({}, a), e)),
              a))
                void 0 === h.current[v] && (h.current[v] = a[v]);
              let [y, x] = r.useMemo(
                () =>
                  (function (e, t) {
                    let n = (t) => {
                        let n = "touches" in t;
                        (n && t.touches.length > 1) ||
                          e((e, o) => {
                            o.trackMouse &&
                              !n &&
                              (document.addEventListener(c, r),
                              document.addEventListener(d, m));
                            let { clientX: i, clientY: l } = n
                                ? t.touches[0]
                                : t,
                              u = f([i, l], o.rotationAngle);
                            return (
                              o.onTouchStartOrOnMouseDown &&
                                o.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), s),
                                {
                                  initial: u.slice(),
                                  xy: u,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      r = (t) => {
                        e((e, n) => {
                          let r = "touches" in t;
                          if (r && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > n.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: s, clientY: c } = r ? t.touches[0] : t,
                            [d, p] = f([s, c], n.rotationAngle),
                            v = d - e.xy[0],
                            m = p - e.xy[1],
                            g = Math.abs(v),
                            h = Math.abs(m),
                            b = (t.timeStamp || 0) - e.start,
                            y = g > h ? (v > 0 ? i : o) : m > 0 ? u : l,
                            x =
                              "number" == typeof n.delta
                                ? n.delta
                                : n.delta[y.toLowerCase()] || a.delta;
                          if (g < x && h < x && !e.swiping) return e;
                          let E = {
                            absX: g,
                            absY: h,
                            deltaX: v,
                            deltaY: m,
                            dir: y,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(g * g + h * h) / (b || 1),
                            vxvy: [v / (b || 1), m / (b || 1)],
                          };
                          E.first && n.onSwipeStart && n.onSwipeStart(E),
                            n.onSwiping && n.onSwiping(E);
                          let w = !1;
                          return (
                            (n.onSwiping ||
                              n.onSwiped ||
                              n["onSwiped".concat(y)]) &&
                              (w = !0),
                            w &&
                              n.preventScrollOnSwipe &&
                              n.trackTouch &&
                              t.cancelable &&
                              t.preventDefault(),
                            Object.assign(Object.assign({}, e), {
                              first: !1,
                              eventData: E,
                              swiping: !0,
                            })
                          );
                        });
                      },
                      p = (t) => {
                        e((e, n) => {
                          let r;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < n.swipeDuration) {
                              (r = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                n.onSwiped && n.onSwiped(r);
                              let o = n["onSwiped".concat(r.dir)];
                              o && o(r);
                            }
                          } else n.onTap && n.onTap({ event: t });
                          return (
                            n.onTouchEndOrOnMouseUp &&
                              n.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), s),
                              { eventData: r },
                            )
                          );
                        });
                      },
                      v = () => {
                        document.removeEventListener(c, r),
                          document.removeEventListener(d, m);
                      },
                      m = (e) => {
                        v(), p(e);
                      },
                      g = (e, t) => {
                        let o = () => {};
                        if (e && e.addEventListener) {
                          let i = Object.assign(
                              Object.assign({}, a.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            l = [
                              ["touchstart", n, i],
                              [
                                "touchmove",
                                r,
                                Object.assign(
                                  Object.assign({}, i),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", p, i],
                            ];
                          l.forEach((t) => {
                            let [n, r, o] = t;
                            return e.addEventListener(n, r, o);
                          }),
                            (o = () =>
                              l.forEach((t) => {
                                let [n, r] = t;
                                return e.removeEventListener(n, r);
                              }));
                        }
                        return o;
                      },
                      h = {
                        ref: (t) => {
                          null !== t &&
                            e((e, n) => {
                              if (e.el === t) return e;
                              let r = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                n.trackTouch && t && (r.cleanUpTouch = g(t, n)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  r,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (h.onMouseDown = n), [h, g];
                  })((e) => (g.current = e(g.current, h.current)), {
                    trackMouse: m,
                  }),
                [m],
              );
              return (
                (g.current =
                  ((t = g.current),
                  (n = h.current),
                  (p = b.current),
                  n.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe ||
                        n.touchEventOptions.passive !==
                          p.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: x(t.el, n),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: x(t.el, n),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                y
              );
            }
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(810),
              o = Symbol.for("react.element"),
              i = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              u =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              a = { key: !0, ref: !0, __self: !0, __source: !0 };
            function s(e, t, n) {
              var r,
                i = {},
                s = null,
                c = null;
              for (r in (void 0 !== n && (s = "" + n),
              void 0 !== t.key && (s = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                l.call(t, r) && !a.hasOwnProperty(r) && (i[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === i[r] && (i[r] = t[r]);
              return {
                $$typeof: o,
                type: e,
                key: s,
                ref: c,
                props: i,
                _owner: u.current,
              };
            }
            (t.Fragment = i), (t.jsx = s), (t.jsxs = s);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          6198: (e, t, n) => {
            var r, o;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let i = n(810),
              l = n(6169);
            ((o = r || (r = {})).TOP = "top"),
              (o.BOTTOM = "bottom"),
              (o.RIGHT = "right"),
              (o.LEFT = "left");
            let u = (e) => {
                switch (e) {
                  case "top":
                  case "top-end":
                  case "top-start":
                    return r.TOP;
                  case "right":
                  case "right-end":
                  case "right-start":
                    return r.RIGHT;
                  case "left":
                  case "left-end":
                  case "left-start":
                    return r.LEFT;
                  default:
                    return r.BOTTOM;
                }
              },
              a = (e) => {
                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      i === r.TOP || i === r.BOTTOM
                        ? "translateY(".concat(n || 0, "px)")
                        : "translateX(".concat(o || 0, "px)")));
                });
              },
              s = (e) => {
                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                switch (i) {
                  case r.TOP:
                    n <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                    break;
                  case r.RIGHT:
                    o >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                    break;
                  case r.LEFT:
                    o <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                    break;
                  default:
                    n >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                }
              },
              c = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              d = (e) => {
                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                switch (i) {
                  case r.TOP:
                    return (
                      t.current && n < 0 && t.current.offsetHeight / n >= -2
                    );
                  case r.RIGHT:
                    return t.current && o > 0 && t.current.offsetWidth / o <= 2;
                  case r.LEFT:
                    return (
                      t.current && o < 0 && t.current.offsetWidth / o >= -2
                    );
                  default:
                    return (
                      t.current && n > 0 && t.current.offsetHeight / n <= 2
                    );
                }
              };
            t.usePopoverSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: n = {},
                  onClose: r,
                  disableSwipe: o,
                  placement: a,
                } = e,
                f = (0, i.useMemo)(() => u(a), [a]),
                p = (0, i.useCallback)(() => {
                  r && (c(t), r());
                }, [r, t]),
                v = (0, i.useCallback)(
                  (e) => {
                    o ||
                      s({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: f,
                      });
                  },
                  [o, t, f],
                ),
                m = (0, i.useCallback)(
                  (e) => {
                    !o &&
                      (d({
                        ref: t,
                        deltaY: e.deltaY,
                        deltaX: e.deltaX,
                        placement: f,
                      })
                        ? r && (c(t), r())
                        : c(t));
                  },
                  [o, t, f, r],
                );
              return {
                handlers: (0, l.useSwipeable)({
                  onSwiped: m,
                  onSwiping: v,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...n,
                }),
                onCloseCallback: p,
              };
            };
          },
          9430: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Popover = void 0);
            let o = n(9541),
              i = n(5881),
              l = n(810),
              u = n(6011),
              a = n(6198),
              s = n(5853),
              c = r(n(4965));
            t.Popover = (e) => {
              let {
                  children: t,
                  offsetOptions: n,
                  strategy: r,
                  placement: d,
                  isMobile: f,
                  visuallyHiddenDismiss: p,
                  positionElement: v,
                  transform: m,
                  initialOpen: g = !1,
                  open: h,
                  onOpenChange: b,
                  disableFloatingStyles: y = !1,
                  overlayClassName: x,
                  transition: E,
                  style: w,
                  returnFocus: _,
                  isNested: C = !1,
                  onShow: R,
                  customRoleProps: S,
                  portalNode: T,
                } = e,
                [O, k] = (0, l.useState)(g),
                [N, L] = (0, l.useState)(null),
                I = (0, l.useRef)([]),
                P = (0, l.useRef)([]),
                A = (0, u.useListItem)(),
                M = null != h ? h : O,
                B = null != b ? b : k,
                [j, D] = t,
                V = (0, l.useCallback)(() => {
                  B(!1);
                }, [B]),
                F = (0, l.useId)(),
                G = (0, l.useId)(),
                {
                  refs: U,
                  floatingStyles: W,
                  context: z,
                } = (0, u.useFloating)({
                  strategy: r,
                  placement: d,
                  open: M,
                  onOpenChange: B,
                  middleware: [(0, u.offset)(n), (0, u.flip)(), (0, u.shift)()],
                  whileElementsMounted: u.autoUpdate,
                  transform: m,
                }),
                H = (0, u.useTypeahead)(z, {
                  listRef: P,
                  onMatch: M ? L : void 0,
                  activeIndex: N,
                }),
                K = (0, u.useListNavigation)(z, {
                  listRef: I,
                  activeIndex: N,
                  nested: C,
                  onNavigate: L,
                }),
                Y = (0, u.useFloatingTree)(),
                Z = (0, u.useFloatingNodeId)(),
                X = (0, u.useFloatingParentNodeId)();
              (0, l.useEffect)(() => {
                if (!Y) return;
                let e = () => {
                    B(!1);
                  },
                  t = (e) => {
                    e.nodeId !== Z && e.parentId === X && B(!1);
                  };
                return (
                  Y.events.on("click", e),
                  Y.events.on("menuopen", t),
                  () => {
                    Y.events.off("click", e), Y.events.off("menuopen", t);
                  }
                );
              }, [Y, Z, X, B]),
                (0, l.useEffect)(() => {
                  M && (null == R || R());
                }, [R, M]),
                (0, l.useEffect)(() => {
                  M &&
                    Y &&
                    Y.events.emit("menuopen", { parentId: X, nodeId: Z });
                }, [Y, M, Z, X]),
                (0, l.useLayoutEffect)(() => {
                  v && U.setPositionReference(v);
                }, [U, v]);
              let { handlers: q } = (0, a.usePopoverSwipeable)({
                  ref: U.floating,
                  onClose: V,
                  placement: d,
                  disableSwipe: !f,
                  swipeableProps: { preventScrollOnSwipe: !0 },
                }),
                $ = (0, u.useMergeRefs)([
                  U.setFloating,
                  null == q ? void 0 : q.ref,
                ]),
                J = (0, u.useRole)(z, S),
                Q = (0, u.useDismiss)(z, { referencePress: !0 }),
                ee = (0, u.useClick)(z, { toggle: !C, ignoreMouse: C }),
                et = (0, u.useHover)(z, {
                  enabled: C,
                  handleClose: (0, u.safePolygon)({ blockPointerEvents: !0 }),
                }),
                en = (0, l.useCallback)((e) => {
                  e.stopPropagation();
                }, []),
                {
                  getReferenceProps: er,
                  getFloatingProps: eo,
                  getItemProps: ei,
                } = (0, u.useInteractions)([J, Q, ee, et, K, H]),
                { isMounted: el, styles: eu } = (0, u.useTransitionStyles)(
                  z,
                  E,
                ),
                ea = (0, u.useMergeRefs)([U.setReference, A.ref]),
                es =
                  j &&
                  (0, l.cloneElement)(j, {
                    ref: ea,
                    ...er({ onClick: j.props.onClick }),
                    key: F,
                  }),
                ec = {
                  ref: $,
                  style: (0, l.useMemo)(
                    () =>
                      f
                        ? {
                            ...(y ? {} : W),
                            ...w,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: "auto",
                            transform: "none",
                          }
                        : { ...(y ? {} : W), ...w },
                    [f, y, W, w],
                  ),
                  ...eo(),
                  onMouseDown: null == q ? void 0 : q.onMouseDown,
                  children: (0, l.cloneElement)(D.props.children, {
                    onClose: V,
                    style: eu,
                    key: G,
                  }),
                },
                ed = (0, l.cloneElement)(D, ec),
                ef = (0, l.useMemo)(
                  () => ({
                    activeIndex: N,
                    setActiveIndex: L,
                    getItemProps: ei,
                    isOpen: M,
                  }),
                  [N, ei, M],
                ),
                ep = C ? -1 : 0;
              return (0, o.jsxs)(s.PopoverContext.Provider, {
                value: ef,
                children: [
                  es,
                  (0, o.jsx)(u.FloatingList, {
                    elementsRef: I,
                    children:
                      el &&
                      (0, o.jsxs)(u.FloatingPortal, {
                        root: T,
                        children: [
                          (0, o.jsx)(u.FloatingOverlay, {
                            className: (0, i.clsx)(c.default.overlay, x),
                            onClick: en,
                            lockScroll: !0,
                          }),
                          (0, o.jsx)(u.FloatingFocusManager, {
                            context: z,
                            returnFocus: _,
                            initialFocus: ep,
                            visuallyHiddenDismiss: p,
                            children: ed,
                          }),
                        ],
                      }),
                  }),
                ],
              });
            };
          },
          1688: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContent = t.PopoverContentComponent = void 0);
            let o = n(9541),
              i = n(810),
              l = n(5881),
              u = r(n(5371));
            (t.PopoverContentComponent = (e) => {
              let { className: t, children: n, forwardRef: r, ...i } = e;
              return (0, o.jsx)("div", {
                className: (0, l.clsx)(u.default.root, t),
                ref: r,
                ...i,
                children: n,
              });
            }),
              (t.PopoverContent = (0, i.forwardRef)((e, n) =>
                (0, o.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e }),
              ));
          },
          5853: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PopoverContext = void 0);
            let r = n(810);
            t.PopoverContext = (0, r.createContext)({
              getItemProps: () => ({}),
              activeIndex: null,
              setActiveIndex: () => {},
              isOpen: !1,
            });
          },
          810: (e) => {
            e.exports = x;
          },
        },
        k = {};
      function N(e) {
        var t = k[e];
        if (void 0 !== t) return t.exports;
        var n = (k[e] = { exports: {} });
        return O[e].call(n.exports, n, n.exports, N), n.exports;
      }
      (N.d = (e, t) => {
        for (var n in t)
          N.o(t, n) &&
            !N.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (N.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (N.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var L = {};
      Object.defineProperty(L, "__esModule", { value: !0 }),
        (L.PopoverContent = L.Popover = void 0),
        (o = N(9430)),
        Object.defineProperty(L, "Popover", {
          enumerable: !0,
          get: function () {
            return o.Popover;
          },
        }),
        (i = N(1688)),
        Object.defineProperty(L, "PopoverContent", {
          enumerable: !0,
          get: function () {
            return i.PopoverContent;
          },
        });
      var I = L.Popover,
        P = L.PopoverContent;
      L.__esModule;
      var A = n(5773),
        M = n(2570);
      let B = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          [t, n] = (0, y.useState)(e),
          { contentRef: r } = (0, u.$Y6)();
        return (
          (0, y.useEffect)(() => {
            let e = new ResizeObserver((e) => {
              let [r] = e || [];
              r && r.contentRect.height !== t && n(r.contentRect.height);
            });
            return (
              r && e.observe(r),
              () => {
                e.disconnect();
              }
            );
          }, [t, r]),
          { contentHeight: t }
        );
      };
      var j = n(60836),
        D = n(16636),
        V = n(1673),
        F = n.n(V);
      let G = (e) => {
        let { title: t, children: n, restrictionsClassName: r, ...o } = e;
        return (0, h.jsxs)("section", {
          className: F().root,
          ...(0, u.tEg)(o),
          children: [
            (0, h.jsx)(M.Caption, {
              variant: "span",
              type: "text",
              size: "m",
              weight: "medium",
              "aria-hidden": !0,
              children: t,
            }),
            (0, h.jsx)(D.y, {
              children: (0, h.jsx)(M.Heading, { variant: "h4", children: t }),
            }),
            (0, h.jsx)("div", {
              className: (0, j.W)(F().restrictions, r),
              children: n,
            }),
          ],
        });
      };
      var U = n(86939);
      let W = (e) => {
        var t, n, r;
        let { seed: o, title: i, isStation: l } = e,
          { vibe: a } = (0, u.oR4)(),
          { applySetting: s } = (0, u.QhE)({
            seeds:
              null !==
                (r =
                  null === (t = a.meta) || void 0 === t ? void 0 : t.seeds) &&
              void 0 !== r
                ? r
                : [],
            pageIdForFrom: u.Rhz.HOME,
            blockIdForFrom: u.BEo.RUP_MAIN_RADIO,
          }),
          { formatMessage: c } = (0, E.Z)(),
          d = !!(null === (n = a.meta) || void 0 === n
            ? void 0
            : n.seeds.includes(o)),
          f = a.applyingSetting === o,
          p = (0, y.useMemo)(
            () =>
              d
                ? "".concat(c({ id: "vibe-actions.remove" }), " ").concat(i)
                : "".concat(c({ id: "vibe-actions.apply" }), " ").concat(i),
            [d, i, c],
          );
        return {
          isApplying: f,
          isSelected: d,
          ariaLabel: p,
          ariaPressed: d,
          onClickHandler: (0, y.useCallback)(async () => {
            a.setApplyingSetting(o), await s(o, l), a.setApplyingSetting();
          }, [s, l, o, a]),
        };
      };
      var z = n(29715),
        H = n.n(z);
      let K = (0, b.Pi)((e) => {
          let { item: t } = e,
            { vibe: n } = (0, u.oR4)(),
            r = (0, y.useRef)(null),
            {
              isApplying: o,
              isSelected: i,
              ariaPressed: l,
              onClickHandler: a,
            } = W({ seed: t.seed, title: t.title, isStation: !0 }),
            s = (0, y.useCallback)(
              (e) => {
                n.isLoading ||
                  (r.current && (0, C.m)(e, H().ripple, r.current), a());
              },
              [a, n.isLoading],
            );
          return (0, h.jsxs)(R.z, {
            radius: "xxxl",
            className: (0, j.W)(H().button, H().textButton, {
              [H().button_selected]: i,
              [H().button_applying]: o,
              [H().specialButton]: t.specialContext,
            }),
            onClick: s,
            "aria-disabled": n.isLoading,
            "aria-pressed": l,
            withRipple: !1,
            ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON),
            children: [
              t.specialContext &&
                (0, h.jsx)(U.Image, {
                  className: H().specialImage,
                  src: t.specialContextImage,
                  size: 100,
                  fit: "cover",
                  withAvatarReplace: !0,
                }),
              (0, h.jsx)(M.Caption, {
                variant: "span",
                type: "controls",
                size: "m",
                weight: "medium",
                className: H().title,
                children: t.title,
              }),
              (0, h.jsx)("div", { className: H().rippleContainer, ref: r }),
            ],
          });
        }),
        Y = (0, b.Pi)((e) => {
          let { type: t, restrictionValue: n } = e,
            { vibe: r } = (0, u.oR4)(),
            o = (0, y.useRef)(null),
            {
              isApplying: i,
              isSelected: a,
              ariaPressed: s,
              onClickHandler: c,
            } = W({ seed: n.seed, title: n.title }),
            d = (0, y.useCallback)(
              (e) => {
                r.isLoading ||
                  (o.current && (0, C.m)(e, H().ripple, o.current), c());
              },
              [c, r.isLoading],
            ),
            f = (0, y.useMemo)(
              () =>
                (0, h.jsx)(M.Caption, {
                  variant: "span",
                  type: "controls",
                  size: "m",
                  weight: "medium",
                  className: H().title,
                  children: n.title,
                }),
              [n.title],
            );
          switch (t) {
            case l.DIVERSITY:
              return (0, h.jsxs)(R.z, {
                className: (0, j.W)(H().button, H().diversityButton, {
                  [H().button_selected]: a,
                  [H().button_applying]: i,
                }),
                radius: "xl",
                "aria-disabled": r.isLoading,
                "aria-pressed": s,
                onClick: d,
                withRipple: !1,
                ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON),
                children: [
                  (0, h.jsx)(U.Image, {
                    "aria-hidden": !0,
                    src: n.imageUrl,
                    fit: "contain",
                    width: 40,
                    height: 40,
                    withAvatarReplace: !0,
                  }),
                  f,
                  (0, h.jsx)("div", { className: H().rippleContainer, ref: o }),
                ],
              });
            case l.MOOD_ENERGY:
              return (0, h.jsxs)("div", {
                className: H().moodEnergy,
                ...(0, _.BA)(
                  _.bG.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON,
                ),
                children: [
                  (0, h.jsx)(R.z, {
                    variant: "text",
                    className: (0, j.W)(H().button, H().moodEnergyButton, {
                      [H().button_selected]: a,
                      [H().button_applying]: i,
                    }),
                    radius: "round",
                    onClick: d,
                    withRipple: !1,
                    "aria-disabled": r.isLoading,
                    "aria-pressed": s,
                    "aria-label": n.title,
                    children: (0, h.jsx)(U.Image, {
                      src: n.imageUrl,
                      fit: "contain",
                      width: 52,
                      height: 52,
                      "aria-hidden": !0,
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, h.jsx)("span", { "aria-hidden": !0, children: f }),
                ],
              });
            case l.LANGUAGE:
              return (0, h.jsxs)(R.z, {
                radius: "xxxl",
                className: (0, j.W)(H().button, H().textButton, {
                  [H().button_selected]: a,
                  [H().button_applying]: i,
                }),
                onClick: d,
                withRipple: !1,
                "aria-disabled": r.isLoading,
                "aria-pressed": s,
                ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON),
                children: [
                  f,
                  (0, h.jsx)("div", { className: H().rippleContainer, ref: o }),
                ],
              });
            default:
              return null;
          }
        });
      var Z = n(42052),
        X = n.n(Z);
      let q = (0, b.Pi)(() => {
        let { vibeSettings: e } = (0, u.oR4)(),
          { formatMessage: t } = (0, E.Z)();
        return (
          e.isNeededToLoad && e.getData(),
          (0, h.jsxs)("div", {
            className: X().root,
            children: [
              e.contextItems.length > 0 &&
                (0, h.jsx)(G, {
                  title: t({
                    id: "interface-actions.my-vibe-context-settings",
                  }),
                  restrictionsClassName: X().contextItems,
                  ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK),
                  children: e.contextItems.map((e) =>
                    (0, h.jsx)(
                      K,
                      {
                        item: e,
                        ...(0, _.BA)(
                          _.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON,
                        ),
                      },
                      e.seed,
                    ),
                  ),
                }),
              e.diversity &&
                (0, h.jsx)(G, {
                  title: e.diversity.title,
                  restrictionsClassName: X().diversity,
                  ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK),
                  children: e.diversity.values.map((t) => {
                    var n;
                    return (0, h.jsx)(
                      Y,
                      {
                        type:
                          null === (n = e.diversity) || void 0 === n
                            ? void 0
                            : n.type,
                        restrictionValue: t,
                      },
                      t.value,
                    );
                  }),
                }),
              e.moodEnergy &&
                (0, h.jsx)(G, {
                  title: e.moodEnergy.title,
                  restrictionsClassName: X().moodEnergy,
                  ...(0, _.BA)(
                    _.bG.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                  ),
                  children: e.moodEnergy.values.map((t) => {
                    var n;
                    return (0, h.jsx)(
                      Y,
                      {
                        type:
                          null === (n = e.moodEnergy) || void 0 === n
                            ? void 0
                            : n.type,
                        restrictionValue: t,
                      },
                      t.value,
                    );
                  }),
                }),
              e.language &&
                (0, h.jsx)(G, {
                  title: e.language.title,
                  restrictionsClassName: X().contextItems,
                  ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK),
                  children: e.language.values.map((t) => {
                    var n;
                    return (0, h.jsx)(
                      Y,
                      {
                        type:
                          null === (n = e.language) || void 0 === n
                            ? void 0
                            : n.type,
                        restrictionValue: t,
                      },
                      t.value,
                    );
                  }),
                }),
            ],
          })
        );
      });
      var $ = n(67654),
        J = n.n($);
      let Q = {
          duration: 300,
          initial: { transform: "translateX(5%)", opacity: 0 },
          open: { transform: "translateX(0)", opacity: 1 },
          close: { transform: "translateX(5%)", opacity: 0 },
        },
        ee = (0, b.Pi)(() => {
          var e, t, n, r;
          let { formatMessage: o } = (0, E.Z)(),
            { vibe: i, settings: l, vibeSettings: s } = (0, u.oR4)(),
            { pageId: c } = (0, u.lVB)(),
            { blockIdForFrom: d } = (0, u.qYG)(),
            f = (0, y.useRef)(null),
            p = (0, y.useRef)(null),
            { resetSettings: v } = (0, u.QhE)({
              seeds:
                null !==
                  (r =
                    null === (e = i.meta) || void 0 === e ? void 0 : e.seeds) &&
                void 0 !== r
                  ? r
                  : [],
              pageIdForFrom: c,
              blockIdForFrom: d,
            }),
            { contentRef: m } = (0, u.$Y6)(),
            { contentHeight: g } = B(0),
            [b, x] = (0, y.useState)(!1);
          (0, y.useEffect)(
            () => () => {
              s.reset();
            },
            [s],
          );
          let T = (0, y.useCallback)(() => {
              x(!1);
            }, [x]),
            O = l.layout === u.t8m.Mobile,
            k = (0, y.useMemo)(
              () =>
                O
                  ? { height: "90vh" }
                  : m
                    ? {
                        insetInlineEnd: 20,
                        insetBlockStart: m.offsetTop + 7,
                        height: g - 16,
                      }
                    : {},
              [g, m, O],
            ),
            N = !!(i.isLoading || i.isMyVibe),
            L = (0, y.useCallback)(
              (e) => {
                if (!i.isLoading) {
                  var t;
                  f.current && (0, C.m)(e, J().ripple, f.current),
                    v(),
                    null === (t = p.current) || void 0 === t || t.focus();
                }
              },
              [v, i.isLoading],
            ),
            j = (0, y.useMemo)(() => {
              var e, t;
              if (a(null === (e = i.meta) || void 0 === e ? void 0 : e.seeds))
                return (
                  null === (t = i.meta) || void 0 === t ? void 0 : t.context
                )
                  ? (0, h.jsx)(R.z, {
                      className: J().toggleSettingsButton,
                      size: "m",
                      radius: "round",
                      icon: (0, h.jsx)(S.J, { variant: "filter", size: "xs" }),
                      "aria-label": o({
                        id: "vibe-actions.aria-label-settings",
                      }),
                      ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                    })
                  : (0, h.jsx)(R.z, {
                      className: J().toggleSettingsButton,
                      size: "default",
                      radius: "xxxl",
                      icon: (0, h.jsx)(S.J, { variant: "filter", size: "xxs" }),
                      "aria-label": o({
                        id: "vibe-actions.aria-label-settings",
                      }),
                      ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_BUTTON),
                      children: (0, h.jsx)(M.Caption, {
                        variant: "span",
                        type: "controls",
                        size: "m",
                        weight: "medium",
                        children: (0, h.jsx)(w.Z, {
                          id: "interface-actions.configure-my-vibe",
                        }),
                      }),
                    });
            }, [
              o,
              null === (t = i.meta) || void 0 === t ? void 0 : t.context,
              null === (n = i.meta) || void 0 === n ? void 0 : n.seeds,
            ]);
          return (0, h.jsxs)(I, {
            placement: "bottom",
            isMobile: O,
            strategy: "fixed",
            transform: !1,
            positionElement: m,
            disableFloatingStyles: !O,
            open: b,
            onOpenChange: x,
            style: k,
            overlayClassName: J().overlay,
            transition: Q,
            children: [
              j,
              (0, h.jsx)(P, {
                className: J().popover,
                ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_BLOCK),
                children: (0, h.jsxs)("div", {
                  className: J().root,
                  children: [
                    (0, h.jsxs)("div", {
                      className: J().header,
                      children: [
                        (0, h.jsx)(M.Heading, {
                          variant: "h3",
                          size: "s",
                          weight: "bold",
                          ...(0, _.BA)(_.bG.vibeSettings.VIBE_SETTINGS_TITLE),
                          children: (0, h.jsx)(w.Z, {
                            id: "interface-actions.my-vibe-settings",
                          }),
                        }),
                        (0, h.jsxs)("div", {
                          className: J().actions,
                          children: [
                            (0, h.jsx)(A.u, {
                              offsetOptions: 4,
                              placement: "left",
                              text: o({
                                id: "interface-actions.reset-my-vibe-settings",
                              }),
                              children: (0, h.jsx)(R.z, {
                                variant: "outline",
                                radius: "round",
                                size: "xxxs",
                                icon: (0, h.jsx)(S.J, {
                                  variant: "reset",
                                  size: "xxxs",
                                }),
                                onClick: L,
                                disabled: !!i.isMyVibe,
                                "aria-hidden": !!i.isMyVibe,
                                "aria-disabled": N,
                                "aria-label": o({
                                  id: "interface-actions.reset-my-vibe-settings",
                                }),
                                ref: f,
                                ...(0, _.BA)(
                                  _.bG.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                ),
                              }),
                            }),
                            (0, h.jsx)(R.z, {
                              radius: "round",
                              color: "secondary",
                              size: "xxs",
                              icon: (0, h.jsx)(S.J, {
                                variant: "close",
                                size: "xxs",
                              }),
                              onClick: T,
                              "aria-label": o({
                                id: "interface-actions.close-my-vibe-settings",
                              }),
                              ref: p,
                              ...(0, _.BA)(
                                _.bG.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, h.jsx)(q, {}),
                  ],
                }),
              }),
            ],
          });
        });
    },
    58101: function (e, t, n) {
      "use strict";
      n.d(t, {
        MainPage: function () {
          return w;
        },
      });
      var r = n(9753),
        o = n(9544),
        i = n(98639),
        l = n(80542),
        u = n(23881),
        a = n(40193),
        s = n(39513),
        c = n(41055),
        d = n(5773),
        f = n(2570),
        p = n(84799),
        v = n(68106),
        m = n(38545),
        g = n(78918),
        h = n(36084),
        b = n(34152),
        y = n(3084),
        x = n(60966),
        E = n.n(x);
      let w = (0, o.Pi)(() => {
        let {
            main: e,
            user: t,
            experiments: n,
            modals: { releaseNotesModal: o },
          } = (0, b.oR4)(),
          { formatMessage: x } = (0, l.Z)(),
          w = (0, b.bop)(),
          [_, C] = (0, b.zU3)(),
          [R, S] = (0, b.zU3)();
        e.landing.loadingState === b.Gui.IDLE &&
          (0, i.use)(
            e.landing.getSkeleton(
              { id: a.jB.WEB_MAIN, showWizard: t.settings.showWizard },
              { preloadBlocks: 2 },
            ),
          ),
          (0, i.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, i.useEffect)(() => {
            (0, g.KZ)();
          }, []),
          (0, b.NOh)(e.landing.loadingState === b.Gui.RESOLVE);
        let T = n.checkExperiment(b.peG.WebNextDisableVibe, "on"),
          O = (0, i.useMemo)(
            () => (T ? { "margin-block-start": "1vh" } : {}),
            [T],
          ),
          k = (0, i.useMemo)(
            () =>
              (0, r.jsxs)(d.u, {
                placement: "right",
                offsetOptions: 4,
                children: [
                  (0, r.jsx)(s.z, {
                    color: "secondary",
                    radius: "xl",
                    "aria-label": "Beta ".concat(
                      x({ id: "desktop.app-version" }, { version: w }),
                    ),
                    className: E().beta,
                    onClick: o.open,
                    children: (0, r.jsx)(f.Caption, {
                      variant: "div",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      children: "Beta",
                    }),
                  }),
                  (0, r.jsx)(d._v, { children: w }),
                ],
              }),
            [x, o.open, w],
          ),
          N = (0, i.useMemo)(
            () => [
              (0, b.FsJ)(
                n.checkExperiment(b.peG.WebNextEntityTrailerOnboarding, "on"),
              ),
            ],
            [n],
          );
        return (0, r.jsx)(b.Lh6, {
          pageId: b.Rhz.HOME,
          children: (0, r.jsx)(b.kZw, {
            config: N,
            children: (0, r.jsx)(h.I7, {
              scrollElement: _,
              headerElement: R,
              children: (0, r.jsxs)(c.t, {
                className: E().root,
                containerClassName: E().content,
                ref: C,
                ...(0, u.BA)(u.Br.main.MAIN_PAGE),
                children: [
                  k,
                  !T &&
                    (0, r.jsx)(b.Ja5, {
                      blockIdForFrom: b.BEo.RUP_MAIN_RADIO,
                      blockId: b.aUg.RUP,
                      blockType: b.aUg.RUP,
                      blockPosX: 0,
                      blockPosY: 0,
                      objectsCount: 0,
                      children: (0, r.jsx)(m.w, { className: E().vibe }),
                    }),
                  (0, r.jsx)("div", { className: E().header, ref: S }),
                  (0, r.jsx)(p.Od, {
                    landing: e.landing,
                    errorComponent: (0, r.jsx)(v.D, {
                      className: E().error,
                      withBackwardControl: !1,
                    }),
                    containerClassName: E().landing,
                    headerClassName: E().header,
                    containerStyle: O,
                  }),
                  (0, r.jsx)(y.$_, { className: E().footer }),
                ],
              }),
            }),
          }),
        });
      });
    },
    38545: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return A;
        },
        w: function () {
          return L;
        },
      });
      var r = n(9753),
        o = n(60836),
        i = n(9544),
        l = n(98639),
        u = n(23881),
        a = n(27097),
        s = n(34152),
        c = n(31014),
        d = n(39513),
        f = n(90679),
        p = n(2570),
        v = n(11983),
        m = n(87987),
        g = n.n(m);
      let h = (0, i.Pi)((e) => {
        let { onClick: t } = e,
          {
            store: {
              mainText: n,
              additionText: o,
              isShimmerActive: i,
              isShimmerVisible: u,
            },
          } = (0, v.x)({ storeName: "music" }),
          a = (0, l.useMemo)(
            () =>
              u
                ? (0, r.jsx)(f.Shimmer, {
                    className: g().buttonShimmer,
                    isActive: i,
                    radius: "xxxl",
                  })
                : (0, r.jsxs)(d.z, {
                    className: g().button,
                    color: "plus",
                    size: "l",
                    radius: "xxxl",
                    onClick: t,
                    children: [
                      (0, r.jsx)(p.Caption, {
                        variant: "div",
                        size: "l",
                        lineClamp: 1,
                        children: n,
                      }),
                      (0, r.jsx)(p.Caption, {
                        variant: "div",
                        size: "xs",
                        lineClamp: 1,
                        children: o,
                      }),
                    ],
                  }),
            [i, u, n, o, t],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(p.Caption, {
              className: g().text,
              variant: "div",
              size: "l",
              children: (0, r.jsx)(c.Z, {
                id: "vibe-freemium.available-in-plus",
                values: { br: (0, r.jsx)("br", {}) },
              }),
            }),
            a,
          ],
        });
      });
      var b = n(80542),
        y = n(28852),
        x = n(60299),
        E = n.n(x);
      let w = (0, i.Pi)((e) => {
        let { isPlaying: t, onClick: n, ariaDisabled: i, className: a } = e,
          { vibe: f } = (0, s.oR4)(),
          { formatMessage: p } = (0, b.Z)(),
          v = t ? "pauseVibe" : "playVibe",
          m = t
            ? u.QM.vibe.MY_VIBE_PAUSE_BUTTON
            : u.QM.vibe.MY_VIBE_PLAY_BUTTON,
          g = (0, l.useMemo)(
            () =>
              t
                ? p({ id: "vibe-actions.aria-label-pause" })
                : p({ id: "vibe-actions.aria-label-play" }),
            [p, t],
          ),
          h = (0, l.useCallback)(
            (e) => {
              f.isLoading || null == n || n(),
                e.stopPropagation(),
                e.preventDefault();
            },
            [n, f.isLoading],
          );
        return (0, r.jsx)(d.z, {
          className: (0, o.W)(
            E().root,
            { [E().root_isLoading]: f.isLoading },
            a,
          ),
          withRipple: !1,
          withHover: !1,
          onClick: h,
          variant: "text",
          "aria-disabled": f.isLoading || i,
          "aria-label": g,
          icon: (0, r.jsx)(y.J, {
            size: "s",
            className: (0, o.W)(E().icon, E()["icon_".concat(v)]),
            variant: v,
          }),
          ...(0, u.BA)(m),
          children: (0, r.jsx)(c.Z, { id: "entity-names.my-vibe" }),
        });
      });
      var _ = n(52527),
        C = n.n(_),
        R = n(88909),
        S = n(40029),
        T = n(3084),
        O = n(70705),
        k = n.n(O);
      let N = (0, i.Pi)((e) => {
          var t;
          let { context: n, onResetClick: i, className: l } = e,
            { vibe: a, settings: c } = (0, s.oR4)(),
            { formatMessage: f } = (0, b.Z)(),
            v = (0, S.BV)(a.meta),
            m = c.layout === s.t8m.Mobile,
            g = n && !m;
          return (0, r.jsxs)("div", {
            className: (0, o.W)(k().root, l),
            children: [
              g &&
                (0, r.jsx)(T.RT, {
                  size: "m",
                  iconSize: "xs",
                  withScaleAnimation: !1,
                  isPinned:
                    null === (t = a.meta) || void 0 === t ? void 0 : t.isPinned,
                  onClick: v,
                  className: k().pinButton,
                }),
              (0, r.jsx)(R.ap, {}),
              n &&
                (0, r.jsxs)("div", {
                  className: (0, o.W)(k().context),
                  ...(0, u.BA)(u.QM.vibe.VIBE_CONTEXT),
                  children: [
                    (0, r.jsx)(p.Caption, {
                      variant: "span",
                      type: "controls",
                      size: "m",
                      weight: "medium",
                      lineClamp: 1,
                      children: n,
                    }),
                    (0, r.jsx)(d.z, {
                      className: k().resetButton,
                      variant: "text",
                      radius: "round",
                      withRipple: !1,
                      icon: (0, r.jsx)(y.J, { variant: "close", size: "xxs" }),
                      onClick: i,
                      "aria-label": ""
                        .concat(f({ id: "vibe-actions.reset-settings" }), " ")
                        .concat(n),
                      ...(0, u.BA)(u.QM.vibe.RESET_VIBE_CONTEXT_BUTTON),
                    }),
                  ],
                }),
            ],
          });
        }),
        L = (0, i.Pi)((e) => {
          var t, n, i;
          let { className: c } = e,
            { vibe: d, experiments: f } = (0, s.oR4)(),
            { pageId: p } = (0, s.lVB)(),
            { blockIdForFrom: v } = (0, s.qYG)(),
            { isFreemium: m } = (0, s.NMB)(),
            {
              isVibeContext: g,
              isPlaying: b,
              togglePlay: y,
              resetSettings: x,
            } = (0, s.QhE)({
              seeds:
                null !==
                  (i =
                    null === (t = d.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== i
                  ? i
                  : [],
              pageIdForFrom: p,
              blockIdForFrom: v,
            }),
            E = f.checkExperiment(s.peG.WebNextDisableVibeSettings, "on") || m;
          d.getLastLoadingState === s.Gui.IDLE && (0, l.use)(d.getLastVibe());
          let _ = (0, l.useCallback)(() => {
              g
                ? x()
                : d.vibeResetLoadingState !== s.Gui.PENDING && d.vibeReset();
            }, [g, d, x]),
            R = (0, l.useCallback)((e) => {
              console.log("This is freemium!"),
                null == e || e.stopPropagation(),
                null == e || e.preventDefault();
            }, []);
          return (
            (0, l.useEffect)(
              () => () => {
                d.reset();
              },
              [d],
            ),
            (0, r.jsxs)("div", {
              className: (0, o.W)(C().root, { [C().root_freemium]: m }, c),
              ...(0, u.BA)(u.QM.vibe.VIBE_BLOCK),
              children: [
                (0, r.jsx)(a.i, { className: C().vibeAnimation }),
                (0, r.jsxs)("div", {
                  className: C().controls,
                  onClick: m ? R : void 0,
                  children: [
                    (0, r.jsx)(w, {
                      className: C().playButton,
                      isPlaying: b,
                      ariaDisabled: m,
                      onClick: m ? R : y,
                    }),
                    !E &&
                      (0, r.jsx)(N, {
                        className: C().settingsButton,
                        context:
                          null === (n = d.meta) || void 0 === n
                            ? void 0
                            : n.context,
                        onResetClick: _,
                      }),
                    m && (0, r.jsx)(h, { onClick: R }),
                  ],
                }),
              ],
            })
          );
        });
      var I = n(42288),
        P = n(40193);
      let A = I.V5.model("VibeActions", {
        meta: I.V5.maybeNull(S.KW),
        applyingSetting: I.V5.maybeNull(I.V5.string),
        isLoading: I.V5.boolean,
        getLastLoadingState: I.V5.enumeration(Object.values(s.Gui)),
        vibeResetLoadingState: I.V5.enumeration(Object.values(s.Gui)),
      })
        .views((e) => ({
          get isMyVibe() {
            return (
              e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === s.sHr
            );
          },
        }))
        .actions((e) => ({
          getLastVibe: (0, I.ls)(function* () {
            let { rotorResource: t, modelActionsLogger: n } = (0, I.dU)(e);
            if (e.getLastLoadingState !== s.Gui.PENDING)
              try {
                e.getLastLoadingState = s.Gui.PENDING;
                let n = yield t.waveLast();
                (e.meta = (0, S.xF)(n)),
                  (e.getLastLoadingState = s.Gui.RESOLVE);
              } catch (t) {
                n.error(t), (e.getLastLoadingState = s.Gui.REJECT);
              }
          }),
          vibeReset: (0, I.ls)(function* () {
            let { rotorResource: t, modelActionsLogger: n } = (0, I.dU)(e);
            if (e.vibeResetLoadingState !== s.Gui.PENDING)
              try {
                (e.vibeResetLoadingState = s.Gui.PENDING),
                  (yield t.waveLastReset()) === P.NE.OK &&
                    (e.meta = (0, S.xF)({
                      name: "",
                      seeds: [s.sHr],
                      stationId: s.sHr,
                      idForFrom: s.sHr,
                    })),
                  (e.vibeResetLoadingState = s.Gui.RESOLVE);
              } catch (t) {
                n.error(t), (e.vibeResetLoadingState = s.Gui.REJECT);
              }
          }),
          setApplyingSetting(t) {
            t ? (e.applyingSetting = (0, I.pj)(t)) : (e.applyingSetting = null);
          },
          setIsLoading(t) {
            e.isLoading = t;
          },
          setVibe(t) {
            e.meta = (0, S.xF)(t);
          },
          reset() {
            (e.meta = null),
              (e.vibeResetLoadingState = s.Gui.IDLE),
              (e.getLastLoadingState = s.Gui.IDLE);
          },
        }));
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
    1673: function (e) {
      e.exports = {
        root: "RestrictionBlock_root__P_g9o",
        restrictions: "RestrictionBlock_restrictions__BhR_r",
      };
    },
    29715: function (e) {
      e.exports = {
        button: "RestrictionButton_button__eLMkU",
        button_selected: "RestrictionButton_button_selected__LHD20",
        button_applying: "RestrictionButton_button_applying___ik5f",
        "applying-setting": "RestrictionButton_applying-setting__utqyc",
        diversityButton: "RestrictionButton_diversityButton__uclSi",
        moodEnergy: "RestrictionButton_moodEnergy__q_I4y",
        moodEnergyButton: "RestrictionButton_moodEnergyButton__yKkaS",
        textButton: "RestrictionButton_textButton__HC_AE",
        title: "RestrictionButton_title__UZn0O",
        specialButton: "RestrictionButton_specialButton__Di6B9",
        specialImage: "RestrictionButton_specialImage__0E3x2",
        rippleContainer: "RestrictionButton_rippleContainer__xPANO",
        ripple: "RestrictionButton_ripple__Rsu8b",
      };
    },
    42052: function (e) {
      e.exports = {
        root: "VibeRestrictions_root__efJez",
        diversity: "VibeRestrictions_diversity__qfOls",
        moodEnergy: "VibeRestrictions_moodEnergy__Le0Cy",
        contextItems: "VibeRestrictions_contextItems__JrF7D",
      };
    },
    67654: function (e) {
      e.exports = {
        root: "VibeSettings_root__ufZlV",
        popover: "VibeSettings_popover__VKqUc",
        overlay: "VibeSettings_overlay__pusb4",
        toggleSettingsButton: "VibeSettings_toggleSettingsButton__j6fIU",
        header: "VibeSettings_header__OAWe2",
        actions: "VibeSettings_actions__ckbMt",
        ripple: "VibeSettings_ripple__kmFX6",
      };
    },
    60966: function (e) {
      e.exports = {
        content: "MainPage_content__kskSM",
        root: "MainPage_root__STXqc",
        container: "MainPage_container__CB86l",
        vibe: "MainPage_vibe__XEBbh",
        landing: "MainPage_landing___FGNm",
        header: "MainPage_header__lPh0v",
        beta: "MainPage_beta__y32vb",
        footer: "MainPage_footer__2rGy2",
        error: "MainPage_error__u_UCm",
      };
    },
    87987: function (e) {
      e.exports = {
        text: "FreemiumBlock_text__6H3Ag",
        button: "FreemiumBlock_button__VoqwC",
        buttonShimmer: "FreemiumBlock_buttonShimmer__8bKDJ",
      };
    },
    60299: function (e) {
      e.exports = {
        root: "PlayButton_root__nYKdN",
        root_isLoading: "PlayButton_root_isLoading__925Sa",
        "applying-setting": "PlayButton_applying-setting__3nbT9",
        icon: "PlayButton_icon__t_THQ",
        icon_pauseVibe: "PlayButton_icon_pauseVibe__Ogg_U",
        icon_playVibe: "PlayButton_icon_playVibe__BKPRh",
      };
    },
    52527: function (e) {
      e.exports = {
        vibeAnimation: "VibeBlock_vibeAnimation__XVEE6",
        controls: "VibeBlock_controls__BpDFL",
        root: "VibeBlock_root__z7LtR",
        root_freemium: "VibeBlock_root_freemium__4i2rV",
        playButton: "VibeBlock_playButton__6xU55",
        settingsButton: "VibeBlock_settingsButton__GeMtO",
      };
    },
    70705: function (e) {
      e.exports = {
        root: "VibeContext_root__dbiNv",
        context: "VibeContext_context__Z_82k",
        pinButton: "VibeContext_pinButton__b6SNF",
        resetButton: "VibeContext_resetButton__9KK4S",
      };
    },
  },
]);
