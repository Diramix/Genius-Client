"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9267],
  {
    9267: function (e, t, a) {
      a.d(t, {
        config: function () {
          return y;
        },
      });
      var n = a(16147),
        s = a(19190),
        c = a(43845),
        i = a(65713),
        r = a(49080),
        l = a(70435),
        u = a(34960),
        o = a(64069),
        p = a(80685),
        d = a(21535);
      let y = () => {
        let { LOCAL_PROD_BUILD: e } = d.env,
          t = e
            ? "https://api.music.yandex.ru"
            : "http://music-backend-music-api-gateway.envoy.localhost:9080",
          a = "https://api.music.yandex.".concat(r.M);
        return (0, n.Z)((0, l.config)(), {
          resources: {
            musicExternalApi: {
              gateway: { prefixUrl: (0, p.s)(t) },
              externalGateway: { prefixUrl: (0, p.s)(a) },
              retryPolicyConfig: u.c,
              defaultTimeout: c.ys,
              timeouts: c.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "next.music.yandex.ru",
            gateway: { prefixUrl: (0, p.s)(a) },
          },
          blackbox: {
            ...((0, s.s)(e)
              ? {
                  host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
                }
              : {}),
            enabled: !0,
          },
          dev: { panel: window.IS_DEVTOOLS_ENABLED },
          tvm: { enabled: (0, s.s)(e) },
          oldWebHost: "music.yandex.".concat(r.M),
          afisha: {
            clientId: (0, o.$)(),
            host: "https://widget.afisha.yandex.ru",
          },
          features: { nonMusic: !0 },
        });
      };
    },
  },
]);
