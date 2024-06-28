const _0x6ed4a1 = _0x4a89e9("望潮"),
  _0x20780b = require("got"),
  _0x3ee777 = require("crypto-js"),
  {
    CookieJar: _0x3841b1
  } = require("tough-cookie"),
  _0x2b4d57 = require("node-rsa"),
  _0x3ec11d = "wangchao",
  _0x591f35 = /[\n\&\@]/,
  _0x2c344a = [_0x3ec11d + "Account"],
  _0x51b407 = 20000,
  _0x173e6f = 3,
  _0x24be9c = 1.01,
  _0x46d779 = "wangchao",
  _0x24993a = "https://jsdelivr.b-cdn.net/gh/xiaojing110/adhosts@main/code_2.json",
  _0x4e5e55 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;;xsb;xsb_wangchao;5.3.3;Appstore;native_app",
  _0x34a356 = "https://xmt.taizhou.com.cn/readingAward/?gaze_control=01",
  _0x4a2157 = 5,
  _0x56b97d = "TlGFQAOlCIVxnKopQnW",
  _0x14df33 = 64,
  _0x3fa56f = 10019,
  _0x36d0e4 = "FR*r!isE5W",
  _0x2d953e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
  _0x18eb96 = "-----BEGIN PUBLIC KEY-----\n" + _0x2d953e + "\n-----END PUBLIC KEY-----",
  _0xcfda1f = new _0x2b4d57(_0x18eb96),
  _0x5c52ca = {
    "encryptionScheme": "pkcs1"
  };
_0xcfda1f.setOptions(_0x5c52ca);
let _0x4e18c5 = [];
class _0x83008c {
  constructor() {
    this.index = _0x6ed4a1.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x495531 = {
        "limit": 0
      },
      _0x5411b2 = {
        "Connection": "keep-alive"
      },
      _0x2b50fb = {
        "retry": _0x495531,
        "timeout": _0x51b407,
        "followRedirect": false,
        "headers": _0x5411b2
      };
    this.got = _0x20780b.extend(_0x2b50fb);
  }
  ["log"](_0x1042b5, _0x5d145f = {}) {
    var _0x31c825 = "",
      _0x2abb9c = _0x6ed4a1.userCount.toString().length;
    if (this.index) {
      _0x31c825 += "账号[" + _0x6ed4a1.padStr(this.index, _0x2abb9c) + "]";
    }
    this.name && (_0x31c825 += "[" + this.name + "]");
    _0x6ed4a1.log(_0x31c825 + _0x1042b5, _0x5d145f);
  }
  async ["request"](_0x139429) {
    const _0x33847b = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x57751e = ["TimeoutError"];
    var _0x7cc083 = null,
      _0x186731 = 0,
      _0x22375b = _0x139429.fn || _0x139429.url;
    _0x139429.method = _0x139429?.["method"]?.["toUpperCase"]() || "GET";
    let _0x799d;
    while (_0x186731 < _0x173e6f) {
      try {
        _0x186731++;
        _0x799d = null;
        let _0x543b19 = null,
          _0x2951c0 = _0x139429?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x51b407,
          _0x208631 = false;
        await new Promise(async _0x249f35 => {
          setTimeout(() => {
            _0x208631 = true;
            _0x249f35();
          }, _0x2951c0);
          await this.got(_0x139429).then(_0x26f1a5 => {
            _0x7cc083 = _0x26f1a5;
          }, _0x2dc6ca => {
            _0x543b19 = _0x2dc6ca;
            _0x7cc083 = _0x2dc6ca.response;
            _0x799d = _0x543b19?.["code"];
          });
          _0x249f35();
        });
        if (_0x208631) this.log("[" + _0x22375b + "]请求超时(" + _0x2951c0 / 1000 + "秒)，重试第" + _0x186731 + "次");else {
          if (_0x57751e.includes(_0x543b19?.["name"])) {
            this.log("[" + _0x22375b + "]请求超时(" + _0x543b19.code + ")，重试第" + _0x186731 + "次");
          } else {
            if (_0x33847b.includes(_0x543b19?.["code"])) this.log("[" + _0x22375b + "]请求错误(" + _0x543b19.code + ")，重试第" + _0x186731 + "次");else {
              let _0x5e388f = _0x7cc083?.["statusCode"] || 999,
                _0x10aaba = _0x5e388f / 100 | 0;
              _0x10aaba > 3 && this.log("请求[" + _0x22375b + "]返回[" + _0x5e388f + "]");
              if (_0x10aaba <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x533885) {
        _0x533885.name == "TimeoutError" ? this.log("[" + _0x22375b + "]请求超时，重试第" + _0x186731 + "次") : this.log("[" + _0x22375b + "]请求错误(" + _0x533885.message + ")，重试第" + _0x186731 + "次");
      }
    }
    if (_0x7cc083 == null) return Promise.resolve({
      "statusCode": _0x799d || -1,
      "headers": null,
      "result": null
    });
    let {
      statusCode: _0x4c805,
      headers: _0x86d6db,
      body: _0x57bde2
    } = _0x7cc083;
    if (_0x57bde2) try {
      _0x57bde2 = JSON.parse(_0x57bde2);
    } catch {}
    const _0x5e5c47 = {
      "statusCode": _0x4c805,
      "headers": _0x86d6db,
      "result": _0x57bde2
    };
    return Promise.resolve(_0x5e5c47);
  }
}
let _0x113a39 = new _0x83008c();
class _0x37ec30 extends _0x83008c {
  constructor(_0xa5669b) {
    super();
    this.cookieJar = new _0x3841b1();
    let _0x234a36 = _0xa5669b.split("#");
    this.name = _0x234a36[0];
    this.passwd = _0x234a36[1];
    this.sessionId = "64db3ad3bf15a44961512788";
    this.deviceId = _0x6ed4a1.randomUuid().toUpperCase();
    const _0x35994d = {
      "User-Agent": _0x4e5e55,
      "Referer": _0x34a356
    };
    this.got = this.got.extend({
      "cookieJar": this.cookieJar,
      "headers": _0x35994d
    });
  }
  ["get_sign"](_0x2a2e10 = {}) {
    const _0x213929 = {
      "salt": _0x56b97d
    };
    let _0x3e5208 = Object.assign(_0x213929, _0x2a2e10),
      _0x596f87 = [""];
    for (let _0x4644ce of Object.keys(_0x3e5208).sort()) {
      _0x596f87.push(_0x3e5208[_0x4644ce].toString());
    }
    return _0x3ee777.MD5(_0x596f87.join("&&")).toString();
  }
  ["add_header"](_0x5b22a3) {
    let _0x381d1a = new URL(_0x5b22a3.url),
      _0xb5a293 = _0x381d1a.pathname,
      _0x37339c = _0x6ed4a1.pop(_0x5b22a3, "headers", {}),
      _0x3862a3 = _0x6ed4a1.pop(_0x37339c, "X-REQUEST-ID", _0x6ed4a1.randomUuid().toUpperCase()),
      _0x2de8c6 = _0x6ed4a1.pop(_0x37339c, "X-TIMESTAMP", Date.now()),
      _0x5c56d6 = _0xb5a293 + "&&" + this.sessionId + "&&" + _0x3862a3 + "&&" + _0x2de8c6 + "&&" + _0x36d0e4 + "&&" + _0x14df33,
      _0x2ac1af = _0x3ee777.SHA256(_0x5c56d6).toString();
    const _0x30cd0c = {
      "X-SESSION-ID": this.sessionId,
      "X-REQUEST-ID": _0x3862a3,
      "X-TIMESTAMP": _0x2de8c6,
      "X-TENANT-ID": _0x14df33,
      "X-SIGNATURE": _0x2ac1af
    };
    _0x5b22a3.headers = Object.assign(_0x37339c, _0x30cd0c);
  }
  async ["credential_auth"](_0xb46deb = {}) {
    let _0x449108 = false;
    try {
      let _0x1d7ed0 = "credential_auth",
        _0x365957 = {
          "fn": _0x1d7ed0,
          "method": "post",
          "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
          "form": {
            "client_id": _0x3fa56f,
            "password": _0xcfda1f.encrypt(this.passwd, "base64"),
            "phone_number": this.name
          }
        },
        {
          result: _0x2e5c5b,
          statusCode: _0x52016c
        } = await this.request(_0x365957),
        _0x18588d = _0x6ed4a1.get(_0x2e5c5b, "code", _0x52016c);
      if (_0x18588d == 0) _0x449108 = await this.zbtxz_login(_0x2e5c5b?.["data"]?.["authorization_code"]?.["code"]);else {
        let _0x4c4571 = _0x6ed4a1.get(_0x2e5c5b, "msg", "");
        this.log("[" + _0x1d7ed0 + "]失败[" + _0x18588d + "]: " + _0x4c4571);
      }
    } catch (_0x137400) {
      console.log(_0x137400);
    } finally {
      return _0x449108;
    }
  }
  async ["zbtxz_login"](_0xba23c2, _0x435d19 = {}) {
    let _0x3f4296 = false;
    try {
      let _0x1e7b99 = "zbtxz_login";
      const _0x532e1a = {
          "code": _0xba23c2,
          "token": "",
          "type": -1,
          "union_id": ""
        },
        _0x3c9c3c = {
          "fn": _0x1e7b99,
          "method": "post",
          "url": "https://vapp.taizhou.com.cn/api/zbtxz/login",
          "form": _0x532e1a
        };
      this.add_header(_0x3c9c3c);
      let {
          result: _0x325ae4,
          statusCode: _0x4086c2
        } = await this.request(_0x3c9c3c),
        _0x26a26e = _0x6ed4a1.get(_0x325ae4, "code", _0x4086c2);
      if (_0x26a26e == 0) {
        _0x3f4296 = this.valid = true;
        let {
          id: _0x2d8c75,
          account_id: _0x558ed3
        } = _0x325ae4?.["data"]?.["session"];
        this.sessionId = _0x2d8c75;
        this.account_id = _0x558ed3;
        this.log("登录成功: sessionId=" + _0x2d8c75);
      } else {
        let _0x106137 = _0x6ed4a1.get(_0x325ae4, "msg", "");
        this.log("[" + _0x1e7b99 + "]失败[" + _0x26a26e + "]: " + _0x106137);
      }
    } catch (_0x21bd9a) {
      console.log(_0x21bd9a);
    } finally {
      return _0x3f4296;
    }
  }
  async ["app_login"](_0x190b11 = {}) {
    let _0x221d84 = false;
    try {
      let _0x1a83a8 = "app_login";
      const _0xa01d4b = {
          "id": this.account_id,
          "sessionId": this.sessionId,
          "deviceId": this.deviceId
        },
        _0x21f427 = {
          "fn": _0x1a83a8,
          "method": "get",
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read/app/login",
          "searchParams": _0xa01d4b
        };
      let {
          result: _0x46e8f2,
          statusCode: _0xc0596b
        } = await this.request(_0x21f427),
        _0x2048a0 = _0x6ed4a1.get(_0x46e8f2, "code", _0xc0596b);
      if (_0x2048a0 == 200) {
        let {
          needYz: _0x4125a5,
          yzm: _0x1006a7
        } = _0x46e8f2?.["data"];
        _0x4125a5 && _0x1006a7 ? _0x221d84 = await this.yzmyz(_0x1006a7) : (_0x221d84 = true, this.log("进入活动主页成功"));
      } else {
        let _0x39d23f = _0x6ed4a1.get(_0x46e8f2, "msg", "");
        this.log("[" + _0x1a83a8 + "]失败[" + _0x2048a0 + "]: " + _0x39d23f);
      }
    } catch (_0x5ed468) {
      console.log(_0x5ed468);
    } finally {
      return _0x221d84;
    }
  }
  async ["yzmyz"](_0x3c5be7, _0x30c965 = {}) {
    let _0x8d6fae = false;
    try {
      let _0x330eda = {
          "timestamp": Date.now(),
          "yzm": _0x3c5be7
        },
        _0x4a724d = {
          "fn": "yzmyz",
          "method": "get",
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read/yzmyz",
          "searchParams": {
            "signature": this.get_sign(_0x330eda),
            ..._0x330eda
          }
        },
        {
          result: _0x1234ae,
          statusCode: _0x3526fb
        } = await this.request(_0x4a724d),
        _0x5a62af = _0x6ed4a1.get(_0x1234ae, "code", _0x3526fb);
      if (_0x5a62af == 200) _0x8d6fae = true, this.log("滑块验证通过, 进入活动主页成功");else {
        let _0x5ce5f6 = _0x6ed4a1.get(_0x1234ae, "msg", "");
        this.log("滑块验证失败[" + _0x5a62af + "]: " + _0x5ce5f6);
      }
    } catch (_0x3c7bdb) {
      console.log(_0x3c7bdb);
    } finally {
      return _0x8d6fae;
    }
  }
  async ["read_list"](_0x1c07c7 = {}) {
    try {
      let _0x297fe4 = "read_list",
        _0x4e14d8 = {
          "fn": _0x297fe4,
          "method": "get",
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read/list/" + _0x6ed4a1.time("yyyyMMdd")
        },
        {
          result: _0x17b0b0,
          statusCode: _0xb42c29
        } = await this.request(_0x4e14d8),
        _0x4980d6 = _0x6ed4a1.get(_0x17b0b0, "code", _0xb42c29);
      if (_0x4980d6 == 200) {
        let {
          sum: _0x4032db,
          completedCount: _0x43acb5,
          articleIsReadList: _0x46d8d1
        } = _0x17b0b0?.["data"];
        this.log("今日已读: " + _0x43acb5 + "/" + _0x4032db);
        for (let _0x36bc59 of _0x46d8d1.filter(_0x5edd52 => !_0x5edd52.isRead)) {
          await this.read_article(_0x36bc59);
        }
      } else {
        let _0x18fc94 = _0x6ed4a1.get(_0x17b0b0, "msg", "");
        this.log("[" + _0x297fe4 + "]失败[" + _0x4980d6 + "]: " + _0x18fc94);
      }
    } catch (_0x247ac8) {
      console.log(_0x247ac8);
    }
  }
  async ["read_article"](_0x51d3cb, _0x51a8fb = {}) {
    try {
      let _0x4b9bd3 = {
          "articid": _0x51d3cb.id,
          "timestamp": Date.now()
        },
        _0x29243e = {
          "fn": "read_article",
          "method": "get",
          "url": "https://xmt.taizhou.com.cn/prod-api/already-read/article",
          "searchParams": {
            ..._0x4b9bd3,
            "signature": this.get_sign(_0x4b9bd3)
          }
        },
        {
          result: _0x2ba6dd,
          statusCode: _0x4d312c
        } = await this.request(_0x29243e),
        _0x466054 = _0x6ed4a1.get(_0x2ba6dd, "code", _0x4d312c);
      if (_0x466054 == 200) this.log("阅读文章[" + _0x51d3cb.id + "]成功");else {
        let _0x5b0fd0 = _0x6ed4a1.get(_0x2ba6dd, "msg", "");
        this.log("阅读文章[" + _0x51d3cb.id + "]失败[" + _0x466054 + "]: " + _0x5b0fd0);
      }
    } catch (_0x21868b) {
      console.log(_0x21868b);
    }
  }
  async ["read_count"](_0x5cbec0 = {}) {
    try {
      let _0x2165ab = "read_count",
        _0x54ec57 = {
          "fn": _0x2165ab,
          "method": "get",
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read-count/count/" + _0x6ed4a1.time("yyyyMMdd")
        },
        {
          result: _0x2e94e6,
          statusCode: _0x1a5a87
        } = await this.request(_0x54ec57),
        _0x3a446c = _0x6ed4a1.get(_0x2e94e6, "code", _0x1a5a87);
      if (_0x3a446c == 200) {
        let _0x229512 = _0x2e94e6?.["data"] || 0;
        const _0x5c0682 = {
          "notify": true
        };
        this.log("可以抽奖" + _0x229512 + "次", _0x5c0682);
        if (!(await this.loginWC())) {
          return;
        }
        !_0x4e18c5.length && (await this.awardUpgrade_list());
        while (_0x229512-- > 0) {
          await this.draw();
        }
        await this.draw_record();
      } else {
        let _0x1b663e = _0x6ed4a1.get(_0x2e94e6, "msg", "");
        this.log("[" + _0x2165ab + "]失败[" + _0x3a446c + "]: " + _0x1b663e);
      }
    } catch (_0x162ad0) {
      console.log(_0x162ad0);
    }
  }
  async ["loginWC"](_0x50161b = {}) {
    let _0x135ae4 = false;
    try {
      let _0x4b2576 = "loginWC";
      const _0xcc537f = {
          "accountId": this.account_id,
          "sessionId": this.sessionId
        },
        _0x5d08e3 = {
          "fn": _0x4b2576,
          "method": "get",
          "url": "https://srv-app.taizhou.com.cn/tzrb/user/loginWC",
          "searchParams": _0xcc537f
        };
      let {
          result: _0xf70c2b,
          statusCode: _0x12cd9a
        } = await this.request(_0x5d08e3),
        _0xe864f9 = _0x6ed4a1.get(_0xf70c2b, "code", _0x12cd9a);
      if (_0xe864f9 == 200) _0x135ae4 = true;else {
        let _0x37e2e2 = _0x6ed4a1.get(_0xf70c2b, "msg", "");
        this.log("[" + _0x4b2576 + "]失败[" + _0xe864f9 + "]: " + _0x37e2e2);
      }
    } catch (_0x4a529e) {
      console.log(_0x4a529e);
    } finally {
      return _0x135ae4;
    }
  }
  async ["draw"](_0x4a9d01 = 67, _0x50c3ec = {}) {
    try {
      let _0x1b5686 = "draw";
      const _0x2e9247 = {
          "activityId": _0x4a9d01
        },
        _0x4465db = {
          "fn": _0x1b5686,
          "method": "post",
          "url": "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/save",
          "form": _0x2e9247
        };
      let {
          result: _0x299473,
          statusCode: _0x33ab72
        } = await this.request(_0x4465db),
        _0x35f8ca = _0x6ed4a1.get(_0x299473, "code", _0x33ab72);
      if (_0x35f8ca == 200) {
        let _0x4cbe15 = _0x299473?.["data"] || 0,
          _0x56ffb8 = _0x4e18c5.filter(_0xe1026d => _0xe1026d.id == _0x4cbe15);
        if (_0x56ffb8.length) {
          const _0x25421d = {
            "notify": true
          };
          this.log("抽奖成功: " + _0x56ffb8[0].title, _0x25421d);
        } else {
          const _0x449bad = {
            "notify": true
          };
          this.log("抽奖成功", _0x449bad);
        }
      } else {
        let _0x42b6f6 = _0x6ed4a1.get(_0x299473, "msg", "");
        this.log("抽奖失败[" + _0x35f8ca + "]: " + _0x42b6f6);
      }
    } catch (_0x17a256) {
      console.log(_0x17a256);
    }
  }
  async ["awardUpgrade_list"](_0x431664 = 67, _0x39904d = {}) {
    try {
      let _0x3946c8 = "awardUpgrade_list";
      const _0x3410a4 = {
          "activityId": _0x431664
        },
        _0x4de845 = {
          "fn": _0x3946c8,
          "method": "get",
          "url": "https://srv-app.taizhou.com.cn/tzrb/awardUpgrade/list",
          "searchParams": _0x3410a4
        };
      let {
          result: _0xc222af,
          statusCode: _0x1fca35
        } = await this.request(_0x4de845),
        _0x1b286d = _0x6ed4a1.get(_0xc222af, "code", _0x1fca35);
      if (_0x1b286d == 200) _0x4e18c5 = _0xc222af?.["data"] || [];else {
        let _0x227061 = _0x6ed4a1.get(_0xc222af, "msg", "");
        this.log("查询活动奖池失败[" + _0x1b286d + "]: " + _0x227061);
      }
    } catch (_0x2c9f06) {
      console.log(_0x2c9f06);
    }
  }
  async ["draw_record"](_0xcff3b3 = 67, _0xd8fc31 = {}) {
    try {
      let _0xee73a0 = "draw_record";
      const _0x35fe0c = {
          "pageSize": 10,
          "pageNum": 1,
          "activityId": _0xcff3b3
        },
        _0x296f92 = {
          "fn": _0xee73a0,
          "method": "get",
          "url": "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/pageList",
          "searchParams": _0x35fe0c
        };
      let {
          result: _0x3e3e06,
          statusCode: _0x54faa8
        } = await this.request(_0x296f92),
        _0x469885 = _0x6ed4a1.get(_0x3e3e06, "code", _0x54faa8);
      if (_0x469885 == 200) {
        this.log("抽奖记录:");
        for (let _0x53eb51 of _0x3e3e06?.["data"]?.["records"] || []) {
          _0x6ed4a1.log(_0x53eb51.awardName + " -- " + _0x53eb51.createTime);
        }
      } else {
        let _0x47db90 = _0x6ed4a1.get(_0x3e3e06, "msg", "");
        this.log("查询抽奖记录失败[" + _0x469885 + "]: " + _0x47db90);
      }
    } catch (_0x50e6e6) {
      console.log(_0x50e6e6);
    }
  }
  async ["userTask"](_0x5936df = {}) {
    if (!(await this.credential_auth())) return;
    if (!(await this.app_login())) {
      return;
    }
    await this.read_list();
    await this.read_count();
  }
}
!(async () => {
  if (!(await _0x313527())) return;
  _0x6ed4a1.read_env(_0x37ec30);
  for (let _0xb11bbe of _0x6ed4a1.userList) {
    await _0xb11bbe.userTask();
  }
})().catch(_0x496a66 => _0x6ed4a1.log(_0x496a66)).finally(() => _0x6ed4a1.exitNow());
async function _0x313527(_0x30e169 = 0) {
  let _0x55959c = false;
  try {
    const _0x3049d9 = {
      "fn": "auth",
      "method": "get",
      "url": _0x24993a,
      "timeout": 20000
    };
    let {
      statusCode: _0xeb00ea,
      result: _0x34c8eb
    } = await _0x113a39.request(_0x3049d9);
    if (_0xeb00ea != 200) return _0x30e169++ < _0x4a2157 && (_0x55959c = await _0x313527(_0x30e169)), _0x55959c;
    if (_0x34c8eb?.["code"] == 0) {
      _0x34c8eb = JSON.parse(_0x34c8eb.data.file.data);
      if (_0x34c8eb?.["commonNotify"] && _0x34c8eb.commonNotify.length > 0) {
        const _0x55062a = {
          "notify": true
        };
        _0x6ed4a1.log(_0x34c8eb.commonNotify.join("\n") + "\n", _0x55062a);
      }
      _0x34c8eb?.["commonMsg"] && _0x34c8eb.commonMsg.length > 0 && _0x6ed4a1.log(_0x34c8eb.commonMsg.join("\n") + "\n");
      if (_0x34c8eb[_0x46d779]) {
        let _0x2a8760 = _0x34c8eb[_0x46d779];
        _0x2a8760.status == 0 ? _0x24be9c >= _0x2a8760.version ? (_0x55959c = true, _0x6ed4a1.log(_0x2a8760.msg[_0x2a8760.status]), _0x6ed4a1.log(_0x2a8760.updateMsg), _0x6ed4a1.log("现在运行的脚本版本是：" + _0x24be9c + "，最新脚本版本：" + _0x2a8760.latestVersion)) : _0x6ed4a1.log(_0x2a8760.versionMsg) : _0x6ed4a1.log(_0x2a8760.msg[_0x2a8760.status]);
      } else {
        _0x6ed4a1.log(_0x34c8eb.errorMsg);
      }
    } else _0x30e169++ < _0x4a2157 && (_0x55959c = await _0x313527(_0x30e169));
  } catch (_0x1a6c4c) {
    _0x6ed4a1.log(_0x1a6c4c);
  } finally {
    return _0x55959c;
  }
}
async function _0x3ff299() {
  let _0x26552d = false;
  try {
    const _0x13f9e6 = {
      "fn": "auth",
      "method": "get",
      "url": taskUrl
    };
    let {
      statusCode: _0x3b878b,
      result: _0x5a3d43
    } = await _0x113a39.request(_0x13f9e6);
    if (_0x3b878b != 200) return Promise.resolve();
    if (_0x5a3d43?.["code"] == 0) {
      _0x5a3d43 = JSON.parse(_0x5a3d43.data.file.data);
      ownerId = _0x5a3d43?.["ownerId"] || ownerId;
      share_app = _0x5a3d43?.["share_app"] || share_app;
      for (let _0x3f3432 of _0x5a3d43.chdTask.simple) {
        !task_chd_simple_list.filter(_0x53ab61 => _0x53ab61.missionDefId == _0x3f3432.missionDefId && _0x53ab61.missionCollectionId == _0x3f3432.missionCollectionId).length && task_chd_simple_list.push(_0x3f3432);
      }
      for (let _0x125094 of _0x5a3d43.chdTask.pageview) {
        !task_chd_pageview_list.filter(_0x45fd2b => _0x45fd2b.missionDefId == _0x125094.missionDefId && _0x45fd2b.missionCollectionId == _0x125094.missionCollectionId).length && task_chd_pageview_list.push(_0x125094);
      }
      for (let _0x56a166 of _0x5a3d43.tkjTask.simple) {
        !task_tkj_simple_list.filter(_0x4a074a => _0x4a074a.missionDefId == _0x56a166.missionDefId && _0x4a074a.missionCollectionId == _0x56a166.missionCollectionId).length && task_tkj_simple_list.push(_0x56a166);
      }
      for (let _0x5c830c of _0x5a3d43.tkjTask.pageview) {
        !task_tkj_pageview_list.filter(_0x54b64e => _0x54b64e.missionDefId == _0x5c830c.missionDefId && _0x54b64e.missionCollectionId == _0x5c830c.missionCollectionId).length && task_tkj_pageview_list.push(_0x5c830c);
      }
    }
  } catch (_0x2b7678) {
    _0x6ed4a1.log(_0x2b7678);
  } finally {
    return Promise.resolve(_0x26552d);
  }
}
function _0x4a89e9(_0x2cbeb7) {
  return new class {
    constructor(_0x5c75a5) {
      this.name = _0x5c75a5;
      this.startTime = Date.now();
      const _0x2082da = {
        "time": true
      };
      this.log("[" + this.name + "]开始运行\n", _0x2082da);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    ["log"](_0x3669b5, _0x3b305c = {}) {
      const _0x57244e = {
        "console": true
      };
      Object.assign(_0x57244e, _0x3b305c);
      if (_0x57244e.time) {
        let _0x4b217b = _0x57244e.fmt || "hh:mm:ss";
        _0x3669b5 = "[" + this.time(_0x4b217b) + "]" + _0x3669b5;
      }
      _0x57244e.notify && this.notifyStr.push(_0x3669b5);
      _0x57244e.console && console.log(_0x3669b5);
    }
    ["get"](_0xea9e36, _0x1aad7f, _0x2c8ebe = "") {
      let _0x36e19d = _0x2c8ebe;
      return _0xea9e36?.["hasOwnProperty"](_0x1aad7f) && (_0x36e19d = _0xea9e36[_0x1aad7f]), _0x36e19d;
    }
    ["pop"](_0x3c9178, _0x677305, _0x465e21 = "") {
      let _0xc154e4 = _0x465e21;
      return _0x3c9178?.["hasOwnProperty"](_0x677305) && (_0xc154e4 = _0x3c9178[_0x677305], delete _0x3c9178[_0x677305]), _0xc154e4;
    }
    ["copy"](_0xbde54) {
      return Object.assign({}, _0xbde54);
    }
    ["read_env"](_0x546c02) {
      let _0x2029d7 = _0x2c344a.map(_0xf44976 => process.env[_0xf44976]);
      for (let _0x440678 of _0x2029d7.filter(_0x43f5b6 => !!_0x43f5b6)) {
        for (let _0x2f0c46 of _0x440678.split(_0x591f35).filter(_0xb1f19f => !!_0xb1f19f)) {
          if (this.userList.includes(_0x2f0c46)) {
            continue;
          }
          this.userList.push(new _0x546c02(_0x2f0c46));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0xe03e0a = {
          "notify": true
        };
        return this.log("未找到变量，请检查变量" + _0x2c344a.map(_0x40fe4d => "[" + _0x40fe4d + "]").join("或"), _0xe03e0a), false;
      }
      return this.log("共找到" + this.userCount + "个账号"), true;
    }
    ["time"](_0x3ef1d7, _0x3969cb = null) {
      let _0xb154c2 = _0x3969cb ? new Date(_0x3969cb) : new Date(),
        _0x47f90d = {
          "M+": _0xb154c2.getMonth() + 1,
          "d+": _0xb154c2.getDate(),
          "h+": _0xb154c2.getHours(),
          "m+": _0xb154c2.getMinutes(),
          "s+": _0xb154c2.getSeconds(),
          "q+": Math.floor((_0xb154c2.getMonth() + 3) / 3),
          "S": this.padStr(_0xb154c2.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x3ef1d7) && (_0x3ef1d7 = _0x3ef1d7.replace(RegExp.$1, (_0xb154c2.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xd52399 in _0x47f90d) new RegExp("(" + _0xd52399 + ")").test(_0x3ef1d7) && (_0x3ef1d7 = _0x3ef1d7.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x47f90d[_0xd52399] : ("00" + _0x47f90d[_0xd52399]).substr(("" + _0x47f90d[_0xd52399]).length)));
      return _0x3ef1d7;
    }
    async ["showmsg"]() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0xd9d8e7 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0xd9d8e7.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    ["padStr"](_0x5f56c9, _0x4fbeb5, _0x2050a0 = {}) {
      let _0x158f65 = _0x2050a0.padding || "0",
        _0xa38f0c = _0x2050a0.mode || "l",
        _0x5afce6 = String(_0x5f56c9),
        _0x1e4f4d = _0x4fbeb5 > _0x5afce6.length ? _0x4fbeb5 - _0x5afce6.length : 0,
        _0x34b7e6 = "";
      for (let _0x4f7649 = 0; _0x4f7649 < _0x1e4f4d; _0x4f7649++) {
        _0x34b7e6 += _0x158f65;
      }
      return _0xa38f0c == "r" ? _0x5afce6 = _0x5afce6 + _0x34b7e6 : _0x5afce6 = _0x34b7e6 + _0x5afce6, _0x5afce6;
    }
    ["json2str"](_0x4e2328, _0x4335e9, _0x16b8a3 = false) {
      let _0x8b9786 = [];
      for (let _0xc20db6 of Object.keys(_0x4e2328).sort()) {
        let _0x32de9f = _0x4e2328[_0xc20db6];
        _0x32de9f && _0x16b8a3 && (_0x32de9f = encodeURIComponent(_0x32de9f));
        _0x8b9786.push(_0xc20db6 + "=" + _0x32de9f);
      }
      return _0x8b9786.join(_0x4335e9);
    }
    ["str2json"](_0x204cb2, _0x1f0b01 = false) {
      let _0x5bceeb = {};
      for (let _0x4dd045 of _0x204cb2.split("&")) {
        if (!_0x4dd045) continue;
        let _0x2bf4a1 = _0x4dd045.indexOf("=");
        if (_0x2bf4a1 == -1) continue;
        let _0x21b126 = _0x4dd045.substr(0, _0x2bf4a1),
          _0x1f2efa = _0x4dd045.substr(_0x2bf4a1 + 1);
        _0x1f0b01 && (_0x1f2efa = decodeURIComponent(_0x1f2efa));
        _0x5bceeb[_0x21b126] = _0x1f2efa;
      }
      return _0x5bceeb;
    }
    ["randomPattern"](_0x31aec0, _0x489018 = "abcdef0123456789") {
      let _0x5a672f = "";
      for (let _0x5862ce of _0x31aec0) {
        _0x5862ce == "x" ? _0x5a672f += _0x489018.charAt(Math.floor(Math.random() * _0x489018.length)) : _0x5862ce == "X" ? _0x5a672f += _0x489018.charAt(Math.floor(Math.random() * _0x489018.length)).toUpperCase() : _0x5a672f += _0x5862ce;
      }
      return _0x5a672f;
    }
    ["randomUuid"]() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    ["randomString"](_0x4166ec, _0x38a596 = "abcdef0123456789") {
      let _0x4c00c5 = "";
      for (let _0x484dc3 = 0; _0x484dc3 < _0x4166ec; _0x484dc3++) {
        _0x4c00c5 += _0x38a596.charAt(Math.floor(Math.random() * _0x38a596.length));
      }
      return _0x4c00c5;
    }
    ["randomList"](_0x2483b4) {
      let _0x4be8ee = Math.floor(Math.random() * _0x2483b4.length);
      return _0x2483b4[_0x4be8ee];
    }
    ["wait"](_0x2522a6) {
      return new Promise(_0xab7ae0 => setTimeout(_0xab7ae0, _0x2522a6));
    }
    async ["exitNow"]() {
      await this.showmsg();
      let _0xa3843f = Date.now(),
        _0x6612cd = (_0xa3843f - this.startTime) / 1000;
      this.log("");
      const _0x21165f = {
        "time": true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x6612cd + "秒", _0x21165f);
      process.exit(0);
    }
    ["normalize_time"](_0x38a39e, _0x5a5a67 = {}) {
      let _0x578e0b = _0x5a5a67.len || this.default_timestamp_len;
      _0x38a39e = _0x38a39e.toString();
      let _0x4a58e3 = _0x38a39e.length;
      while (_0x4a58e3 < _0x578e0b) {
        _0x38a39e += "0";
      }
      return _0x4a58e3 > _0x578e0b && (_0x38a39e = _0x38a39e.slice(0, 13)), parseInt(_0x38a39e);
    }
    async ["wait_until"](_0x5e1de4, _0x104668 = {}) {
      let _0x24219d = _0x104668.logger || this,
        _0x53d9c4 = _0x104668.interval || this.default_wait_interval,
        _0x2e9079 = _0x104668.limit || this.default_wait_limit,
        _0x5379ab = _0x104668.ahead || this.default_wait_ahead;
      if (typeof _0x5e1de4 == "string" && _0x5e1de4.includes(":")) {
        if (_0x5e1de4.includes("-")) _0x5e1de4 = new Date(_0x5e1de4).getTime();else {
          let _0x509ea9 = this.time("yyyy-MM-dd ");
          _0x5e1de4 = new Date(_0x509ea9 + _0x5e1de4).getTime();
        }
      }
      let _0xea8ecb = this.normalize_time(_0x5e1de4) - _0x5379ab,
        _0x5ab217 = this.time("hh:mm:ss.S", _0xea8ecb),
        _0x5464ee = Date.now();
      _0x5464ee > _0xea8ecb && (_0xea8ecb += 86400000);
      let _0x28ba22 = _0xea8ecb - _0x5464ee;
      if (_0x28ba22 > _0x2e9079) {
        const _0x46b8bf = {
          "time": true
        };
        _0x24219d.log("离目标时间[" + _0x5ab217 + "]大于" + _0x2e9079 / 1000 + "秒,不等待", _0x46b8bf);
      } else {
        const _0x36fa3a = {
          "time": true
        };
        _0x24219d.log("离目标时间[" + _0x5ab217 + "]还有" + _0x28ba22 / 1000 + "秒,开始等待", _0x36fa3a);
        while (_0x28ba22 > 0) {
          let _0x52eb8a = Math.min(_0x28ba22, _0x53d9c4);
          await this.wait(_0x52eb8a);
          _0x5464ee = Date.now();
          _0x28ba22 = _0xea8ecb - _0x5464ee;
        }
        const _0x208d38 = {
          "time": true
        };
        _0x24219d.log("已完成等待", _0x208d38);
      }
    }
    async ["wait_gap_interval"](_0x58d0c6, _0x48dd46) {
      let _0x39176e = Date.now() - _0x58d0c6;
      _0x39176e < _0x48dd46 && (await this.wait(_0x48dd46 - _0x39176e));
    }
  }(_0x2cbeb7);
}